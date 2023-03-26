import React from 'react';
import { classNames } from '@/helpers';
import Image from 'next/image';

export type props = {
  className?: string;
  size: 'small' | 'large';
  color: string;
  image: string;
  name: string;
};

const CardCategory: React.FC<props> = ({ className, color, image, size = 'small', name }) => {
  return (
    <div
      className={classNames(
        'bg-white inline-flex flex-col border items-center justify-center rounded-2xl p-5 shadow-xl',
        className
      )}
    >
      <div
        className={classNames('relative aspect-video -top-16', size == 'small' ? 'w-40 mx-12' : 'w-72 mx-16')}
      >
        <Image className="object-cover" fill src={image} alt="" />
      </div>
      <span
        className={classNames(
          'inline-block -mt-12 text-black font-semibold',
          size == 'small' ? 'text-xl' : 'text-2xl'
        )}
      >
        {name}
      </span>
    </div>
  );
};

export default CardCategory;
