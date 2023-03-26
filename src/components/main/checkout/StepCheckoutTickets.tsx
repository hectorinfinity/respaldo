import React from 'react';
import { classNames } from "@/helpers";

export type props = {
  className?: string;
};

const StepCheckoutTickets: React.FC<props> = ({ className }) => {
  return <div className={classNames('', className)}>StepCheckoutTickets</div>;
};

export default StepCheckoutTickets;