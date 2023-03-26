import React from 'react';
import { classNames } from "@/helpers";

export type props = {
  className?: string;
};

const CardEventOrder: React.FC<props> = ({ className }) => {
  return <div className={classNames('', className)}>CardEventOrder</div>;
};

export default CardEventOrder;