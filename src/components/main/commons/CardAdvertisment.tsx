import React from 'react';
import { classNames } from "@/helpers";

export type props = {
  className?: string;
};

const CardAdvertisment: React.FC<props> = ({ className }) => {
  return <div className={classNames('', className)}>CardAdvertisment</div>;
};

export default CardAdvertisment;