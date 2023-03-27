import React from 'react';
import { classNames } from '@/helpers';
import Image from 'next/image';
import Link from 'next/link';

export type props = {
  className?: string;
  size: 'small' | 'large';
  color: string;
  image: string;
  name: string;
};

const CardCategory: React.FC<props> = ({ className, color, image, size = 'large', name }) => {
  return (
    <Link
      href={`/search?category=${name}`}
      className={classNames('flex flex-col relative items-center justify-center p-5', className)}
    >
      <span
        className={classNames(
          'absolute inset-x-0 bottom-0 shadow-xl rounded-xl bg-white -z-10',
          size == 'small' ? 'top-12' : 'top-24'
        )}
      ></span>
      <span
        className={classNames('relative block aspect-square', size == 'small' ? 'w-14 px-12' : 'w-36 px-24')}
      >
        <Image className="object-cover" fill src={image} alt="" />
      </span>
      <span
        className={classNames(
          'inline-block text-center mt-3 text-black font-semibold',
          size == 'small' ? 'text-sm' : 'text-2xl'
        )}
      >
        {name}
      </span>
    </Link>
  );
};

export default CardCategory;
