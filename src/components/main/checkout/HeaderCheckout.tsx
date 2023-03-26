import React from 'react';
import { classNames } from "@/helpers";

export type props = {
  className?: string;
};

const HeaderCheckout: React.FC<props> = ({ className }) => {
  return <div className={classNames('', className)}>HeaderCheckout</div>;
};

export default HeaderCheckout;