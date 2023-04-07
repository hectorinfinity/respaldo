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
import { useUserFavorites } from '@/hooks/user/user_favorites';

export type props = {
  className?: string;
  layout?: 'grid' | 'column';
  image: string;
  name: string;
  startDate: Date;
  startTime: string;
  endTime: string;
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
  endTime,
  startTime,
  image,
  layout = 'grid',
  location,
  name,
  willAttend = false,
  favorite = false,
  color,
  id,
}) => {
  const { isAuthenticated } = useUserAuthObserver();
  const favorites = useUserFavorites();
  // console.log('favorites ', favorites?.data);
  const locale = useLocale();
  return (
    <Link
      href={`/event/${id}`}
      className={classNames(
        'rounded-xl relative shadow-xl overflow-hidden',
        layout == 'column' ? 'flex' : 'block',
        className
      )}
    >
      {isAuthenticated && (
        <Button
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
      <span
        className={classNames(
          'relative block',
          layout == 'grid' ? 'aspect-[4/3]' : 'aspect-square w-72 '
        )}
      >
        <Image src={image} alt="" fill className="object-cover" />
        {isAuthenticated && (
          <WillAttend
            changeColor={willAttend}
            className={classNames(
              'absolute bottom-3',
              layout == 'grid' ? 'right-3' : 'left-3'
            )}
          />
        )}
      </span>

      <span className="flex-1 flex flex-col items-start">
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
          <span className="p-5 block">
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
                {startTime} <span>-</span> {endTime}
              </span>
            </span>

            <p className="flex items-center gap-2 font-semibold text-black break-words">
              <Icon name="map-pin" />
              {location}
            </p>
          </span>
        </span>
      </span>
    </Link>
  );
};

export default CardEvent;
