import React from 'react';
import { classNames } from "@/helpers";

export type props = {
  className?: string;
};

const CardEventLocation: React.FC<props> = ({ className }) => {
  return <div className={classNames('', className)}>CardEventLocation</div>;
};

export default CardEventLocation;