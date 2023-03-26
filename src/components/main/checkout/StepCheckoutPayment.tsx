import React from 'react';
import { classNames } from "@/helpers";

export type props = {
  className?: string;
};

const StepCheckoutPayment: React.FC<props> = ({ className }) => {
  return <div className={classNames('', className)}>StepCheckoutPayment</div>;
};

export default StepCheckoutPayment;