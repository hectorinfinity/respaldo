import React from 'react';
import { classNames } from "@/helpers";

export type props = {
  className?: string;
};

const HeaderQueue: React.FC<props> = ({ className }) => {
  return <div className={classNames('', className)}>HeaderQueue</div>;
};

export default HeaderQueue;