import React from 'react';
import { classNames } from '@/helpers';
import Image from 'next/image';
import { Button, WillAttend } from '@/components/commons';
import { Icon } from '@/components/commons';
import { format } from 'date-fns';
import { enUS, es } from 'date-fns/locale';
import { useLocale } from 'next-intl';
import parseDate from '@/helpers/parseDate';
import { useQuery } from '@tanstack/react-query';
import { readEventCategory } from '@/api/event/event_category';
import Link from 'next/link';
import { EventCategory } from '@/interfaces/event';
import { readEventVenue } from '@/api/event/event_venue';
import { useUserAuthObserver } from '@/hooks/auth';
import {
  useMutationAddFavorite,
  useMutationRemoveFavorite,
  useUserFavorites,
} from '@/hooks/user/user_favorites';
import { useUserAttends } from '@/hooks/user/user_attends';
import { useUsers } from '@/hooks/user/user';

export type props = {
  className?: string;
  layout?: 'grid' | 'column';
  image: string;
  name: string;
  startDate: any;
  endDate: any;
  location: string;
  favorite?: boolean;
  willAttend?: boolean;
  color: string;
  id: string;
};
// TODO: should have time prop
const CardEvent: React.FC<props> = ({
  className,
  startDate,
  endDate,
  image,
  layout = 'grid',
  location,
  name,
  willAttend = false,
  color,
  id,
}) => {
  const { isAuthenticated, user } = useUserAuthObserver();
  const { data: favorites } = useUserFavorites();
  const { mutate: addFavorite } = useMutationAddFavorite();
  const { mutate: removeFavorite } = useMutationRemoveFavorite();
  const locale = useLocale();
  const favorite = favorites
    ?.filter((item) => item.user_id.id === user._id)
    .find((item) => item.events_likes.find((event) => event.id == id));

  const attend = favorites
    ?.filter((item) => item.user_id.id == user._id)
    .find((item) => item.events_attends.find((attend) => attend.id == id));
  // console.log(favorites?.filter((item) => item.user_id.id == user._id));
  const handleAddFavorite = (e) => {
    e.preventDefault();
    if (!favorite) {
      addFavorite({
        event_id: id,
      });
    } else {
      removeFavorite({
        event_id: id,
      });
    }
  };
  const slug = name.replaceAll(' ', '-');

  const handleAddAttend = () => {
    if (!attend) {
      addFavorite({
        event_type: 'attend',
        event_id: id,
      });
    } else {
      removeFavorite({
        event_type: 'attend',
        event_id: id,
      });
    }
  };
  return (
    <div
      className={classNames(
        'card rounded-xl relative shadow-xl overflow-hidden',
        layout == 'column' ? 'flex' : 'block',
        className
      )}
    >
      {isAuthenticated && (
        <Button
          onClick={(e) => handleAddFavorite(e)}
          className={classNames(
            'absolute z-20 top-3',
            layout == 'grid' ? 'right-3' : 'left-3'
          )}
          color="white"
          shape="pill"
          iconLeft={
            favorite ? (
              <Icon name="heart-solid" className="text-customYellow" />
            ) : (
              <Icon name="heart-outline" className="text-white" />
            )
          }
        />
      )}
      <Link
        href={`/event/${slug}?_id=${id}`}
        className={classNames(
          'relative block',
          layout == 'grid' ? 'aspect-[4/3]' : 'aspect-square w-72 '
        )}
      >
        <Image src={image} alt="" fill className="object-cover" />
        {isAuthenticated && (
          <WillAttend
            onClick={handleAddAttend}
            changeColor={Boolean(attend)}
            className={classNames(
              'absolute bottom-3',
              layout == 'grid' ? 'right-3' : 'left-3'
            )}
          />
        )}
      </Link>

      <span className="flex flex-col items-start flex-1">
        <span
          className={classNames('block h-5 w-full')}
          style={{ backgroundColor: color }}
        />

        <span
          className={classNames(
            'w-full',
            layout == 'column' ? 'flex h-full items-center' : 'block'
          )}
        >
          <Link href={`/event/${slug}?id=${id}`} className="block p-5">
            <span
              title={name}
              className="block text-lg font-semibold text-black break-words truncate w-"
            >
              {name}
            </span>
            <span
              className={classNames(
                'my-3',
                layout == 'column' ? 'flex gap-3' : 'block'
              )}
            >
              <span className="block text-customGray">
                {format(parseDate(startDate), 'EEEE dd MMMM yyyy', {
                  locale: locale == 'en' ? enUS : es,
                })}
              </span>
              <span className="flex gap-2 text-customGray">
                {format(parseDate(startDate), 'HH:mm')} <span>-</span>{' '}
                {format(parseDate(endDate), 'HH:mm')}
              </span>
            </span>

            <p className="flex items-center gap-2 font-semibold text-black break-words">
              <Icon name="map-pin" />
              {location}
            </p>
          </Link>
        </span>
      </span>
    </div>
  );
};

export default CardEvent;
