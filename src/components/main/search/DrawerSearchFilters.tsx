import React from 'react';
import { classNames } from "@/helpers";

export type props = {
  className?: string;
};

const DrawerSearchFilters: React.FC<props> = ({ className }) => {
  return <div className={classNames('', className)}>DrawerSearchFilters</div>;
};

export default DrawerSearchFilters;