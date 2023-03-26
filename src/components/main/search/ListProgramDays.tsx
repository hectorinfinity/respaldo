import React from 'react';
import { classNames } from "@/helpers";

export type props = {
  className?: string;
};

const ListProgramDays: React.FC<props> = ({ className }) => {
  return <div className={classNames('', className)}>ListProgramDays</div>;
};

export default ListProgramDays;