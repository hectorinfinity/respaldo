import React from 'react';
import { classNames } from '@/helpers';
import Image from 'next/image';
import { Icon } from '@/components/commons';

export type props = {
  className?: string;
  category: string;
  name: string;
  location: string;
  image: string;
};

const CardEventRecommendation: React.FC<props> = ({ className, category, location, name, image }) => {
  return (
    <div
      className={classNames(
        'inline-flex overflow-hidden items-center bg-white rounded-xl shadow-xl',
        className
      )}
    >
      <div className="relative h-52 aspect-[12/9]">
        <Image className="object-cover" fill alt="" src={image} />
      </div>

      <div className="px-10">
        <span className="block">{category}</span>
        <span className="block text-xl mt-1 font-semibold">{name}</span>
        <p className="text-black flex gap-1 items-center mt-5">
          <Icon name="map-pin" className="w-4 h-4" />
          {location}
        </p>
      </div>
    </div>
  );
};

export default CardEventRecommendation;
