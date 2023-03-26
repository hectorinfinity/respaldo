import React from 'react';
import { classNames } from "@/helpers";

export type props = {
  className?: string;
};

const CardEventRecommendation: React.FC<props> = ({ className }) => {
  return <div className={classNames('', className)}>CardEventRecommendation</div>;
};

export default CardEventRecommendation;