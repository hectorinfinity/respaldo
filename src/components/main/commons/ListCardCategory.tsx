import React from 'react';
import { classNames } from "@/helpers";

export type props = {
  className?: string;
};

const ListCardCategory: React.FC<props> = ({ className }) => {
  return <div className={classNames('', className)}>ListCardCategory</div>;
};

export default ListCardCategory;