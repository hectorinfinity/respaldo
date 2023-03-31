import React from 'react';
import { classNames } from '@/helpers';
import Image from 'next/image';
import { Button, WillAttend } from '@/components/commons';
import { Icon } from '@/components/commons';
import { format } from 'date-fns';
import { enUS, es } from 'date-fns/locale';
import { useLocale } from 'next-intl';

type CardEventEnumColorsStrings = 'customPurple' | 'customDaisy' | 'customBlueNight' | 'customYellow';
type CardEventEnumColors = `bg-${CardEventEnumColorsStrings}`;

export type props = {
  className?: string;
  layout: 'grid' | 'column';
  image: string;
  name: string;
  date: Date;
  location: string;
  willAttend?: boolean;
  color: CardEventEnumColors;
};
// TODO: gray colors
// TODO: should have time prop
const CardEvent: React.FC<props> = ({
  className,
  date,
  image,
  layout,
  location,
  name,
  willAttend = false,
  color = 'bg-customDaisy',
}) => {
  const locale = useLocale();
  return (
    <div
      className={classNames(
        'rounded-xl relative shadow-xl overflow-hidden',
        layout == 'grid' ? 'inline-block' : 'flex',
        className
      )}
    >
      <Button
        className={classNames(
          'absolute z-20 top-3',
          layout == 'grid' ? 'right-3' : 'left-3'
        )}
        color="white"
        shape="pill"
        iconLeft={
          willAttend ? (
            <Icon name="heart-solid" className="text-customYellow" />
          ) : (
            <Icon name="heart-outline" className="text-customGray" />
          )
        }
      />
      <div
        className={classNames(
          'relative',
          layout == 'grid' ? 'aspect-[4/3]' : 'aspect-square w-72 '
        )}
      >
        <Image src={image} alt="" fill className="object-cover" />
        <WillAttend
          changeColor={willAttend}
          className={classNames('absolute bottom-3', layout == 'grid' ? 'right-3' : 'left-3')}
        />
      </div>

      <div className="flex-1 flex flex-col items-start">
        <div className={classNames('h-5 w-full', color)} />

        <div
          className={classNames(
            layout == 'column' && 'flex h-full items-center'
          )}
        >
          <div className='p-5'>
            <span className="block text-black font-semibold break-words text-lg">{name}</span>
            <div className={classNames('my-3', layout == 'column' && 'flex gap-3')}>
              <span className="block text-customGray">
                {format(date, 'EEEE, dd MMMM yyyy', {
                  locale: locale == 'en' ? enUS : es,
                })}
              </span>
              <span className="block text-customGray">
                {format(date, 'HH:mm', {
                  locale: locale == 'en' ? enUS : es,
                })}
              </span>
            </div>

            <p className="flex items-center gap-2 font-semibold text-black break-words">
              <Icon name="map-pin" />
              {location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEvent;
