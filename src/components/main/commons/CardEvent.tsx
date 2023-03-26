import React from 'react';
import { classNames } from '@/helpers';
import Image from 'next/image';
import { format } from 'date-fns';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { Button } from '@/components/commons';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import Icon from './Icon';

export type props = {
  className?: string;
  layout: 'grid' | 'column';
  image: string;
  name: string;
  date: Date;
  location: string;
  willAttend?: boolean;
};

const CardEvent: React.FC<props> = ({
  className,
  date,
  image,
  layout,
  location,
  name,
  willAttend = false,
}) => {
  return (
    <div
      className={classNames(
        'rounded-xl relative shadow-xl overflow-hidden',
        layout == 'grid' ? 'inline-block' : 'flex',
        className
      )}
    >
      <Button
        className={classNames('absolute z-20 top-3', layout == 'grid' ? 'right-3' : 'left-3')}
        color="white"
        shape="pill"
        iconLeft={
          willAttend ? (
            <Icon name="heart-solid" className="text-yellow-500" />
          ) : (
            <Icon name="heart-outline" className="text-gray-500" />
          )
        }
      />
      <div className={classNames('relative', layout == 'grid' ? 'aspect-[4/3]' : 'aspect-square w-72 ')}>
        <Image src={image} alt="" fill className="object-cover" />

        <div
          className={classNames(
            'absolute flex items-center shadow-xl font-medium rounded-lg bottom-3 gap-2 px-2 py-1',
            willAttend ? 'bg-teal-400 text-white' : 'bg-gray-100 text-black',
            layout == 'grid' ? 'right-3' : 'left-3'
          )}
        >
          <Icon
            name="circle-check-outline"
            className={classNames('w-3 h-3', willAttend ? 'text-white' : 'text-black')}
          />
          i will atend
        </div>
      </div>

      <div className="flex-1 flex flex-col items-start">
        <div className="bg-purple-700 h-5 w-full" />

        <div className={classNames(layout == 'column' && 'flex h-full items-center')}>
          <div className={classNames('p-5')}>
            <span className="block text-black font-semibold break-words text-xl">{name}</span>
            <div className={classNames('my-5', layout == 'column' && 'flex gap-3')}>
              <span className="block text-gray-500">{format(date, 'EEEE, dd MMMM yyyy')}</span>
              <span className="block text-gray-500">{format(date, 'HH:mm')}</span>
            </div>

            <p className="text-black break-words flex font-semibold items-center gap-2">
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
