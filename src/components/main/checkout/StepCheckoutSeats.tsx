import React from 'react';
import { classNames } from "@/helpers";

export type props = {
  className?: string;
};

const StepCheckoutSeats: React.FC<props> = ({ className }) => {
  return <div className={classNames('', className)}>StepCheckoutSeats</div>;
};

export default StepCheckoutSeats;