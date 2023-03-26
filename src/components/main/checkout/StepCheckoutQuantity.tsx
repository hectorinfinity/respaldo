import React from 'react';
import { classNames } from "@/helpers";

export type props = {
  className?: string;
};

const StepCheckoutQuantity: React.FC<props> = ({ className }) => {
  return <div className={classNames('', className)}>StepCheckoutQuantity</div>;
};

export default StepCheckoutQuantity;