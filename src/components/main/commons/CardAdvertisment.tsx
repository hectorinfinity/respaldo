import React from 'react';
import { classNames } from '@/helpers';
import Image from 'next/image';

export type props = {
  className?: string;
  image?: string;
};

const CardAdvertisment: React.FC<props> = ({ className, image }) => {
  return (
    <div className={classNames('relative w-full h-40', className)}>
      <Image src={image} alt="" className="object-cover" fill />
    </div>
  );
};

export default CardAdvertisment;
