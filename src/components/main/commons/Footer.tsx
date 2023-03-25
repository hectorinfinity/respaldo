import React from 'react';
import { classNames } from "@/helpers";

export type props = {
  className?: string;
};

const Footer: React.FC<props> = ({ className }) => {
  return <div className={classNames('', className)}>Footer</div>;
};

export default Footer;