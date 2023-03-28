import React from 'react';
import { classNames } from '@/helpers';

export type props = {
  className?: string;
};

const CardEventDetails: React.FC<props> = ({ className }) => {
  return <div className={classNames('', className)}>CardEventDetails</div>;
};

export default CardEventDetails;
