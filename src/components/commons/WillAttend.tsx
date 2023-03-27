import React from 'react';
import { classNames } from '@/helpers';
import { Icon } from '@/components/commons';

export type props = {
  className?: string;
  changeColor?: boolean;
};
// TODO: translate
const WillAttend: React.FC<props> = ({ className, changeColor = false }) => {
  return (
    <span
      className={classNames(
        'inline-flex text-sm rounded-lg shadow-xl px-2 py-2 font-medium items-center gap-2',
        changeColor ? 'bg-customGreenVan text-white' : 'bg-gray-200 text-black',
        className
      )}
    >
      <Icon className="w-3 h-3" name="circle-check-outline" />i will attend
    </span>
  );
};

export default WillAttend;
