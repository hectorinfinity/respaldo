import React from 'react';
import { classNames } from "@/helpers";

export type props = {
  className?: string;
};

const HeaderSearch: React.FC<props> = ({ className }) => {
  return <div className={classNames('', className)}>HeaderSearch</div>;
};

export default HeaderSearch;