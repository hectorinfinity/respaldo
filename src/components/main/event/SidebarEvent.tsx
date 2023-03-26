import React from 'react';
import { classNames } from "@/helpers";

export type props = {
  className?: string;
};

const SidebarEvent: React.FC<props> = ({ className }) => {
  return <div className={classNames('', className)}>SidebarEvent</div>;
};

export default SidebarEvent;