import React from 'react';
import { classNames } from "@/helpers";

export type props = {
  className?: string;
};

const HeaderProgram: React.FC<props> = ({ className }) => {
  return <div className={classNames('', className)}>HeaderProgram</div>;
};

export default HeaderProgram;