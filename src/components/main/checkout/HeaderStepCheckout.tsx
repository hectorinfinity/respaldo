import React from 'react';
import { classNames } from "@/helpers";

export type props = {
  className?: string;
};

const HeaderStepCheckout: React.FC<props> = ({ className }) => {
  return <div className={classNames('', className)}>HeaderStepCheckout</div>;
};

export default HeaderStepCheckout;