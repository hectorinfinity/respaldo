import React from 'react';
import { classNames } from "@/helpers";

export type props = {
  className?: string;
};

const CardPaymentSuccess: React.FC<props> = ({ className }) => {
  return <div className={classNames('', className)}>CardPaymentSuccess</div>;
};

export default CardPaymentSuccess;