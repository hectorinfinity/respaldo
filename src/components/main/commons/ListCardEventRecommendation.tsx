import React from 'react';
import { classNames } from "@/helpers";

export type props = {
  className?: string;
};

const ListCardEventRecommendation: React.FC<props> = ({ className }) => {
  return <div className={classNames('', className)}>ListCardEventRecommendation</div>;
};

export default ListCardEventRecommendation;