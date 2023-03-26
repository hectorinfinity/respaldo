import React from 'react';
import { classNames } from "@/helpers";

export type props = {
  className?: string;
};

const HeaderCategory: React.FC<props> = ({ className }) => {
  return <div className={classNames('', className)}>HeaderCategory</div>;
};

export default HeaderCategory;