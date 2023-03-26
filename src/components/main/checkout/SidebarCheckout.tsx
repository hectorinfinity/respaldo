import React from 'react';
import { classNames } from "@/helpers";

export type props = {
  className?: string;
};

const SidebarCheckout: React.FC<props> = ({ className }) => {
  return <div className={classNames('', className)}>SidebarCheckout</div>;
};

export default SidebarCheckout;