import React from 'react';
import { classNames } from "@/helpers";

export type props = {
  className?: string;
};

const CardPaymentError: React.FC<props> = ({ className }) => {
  return <div className={classNames('', className)}>CardPaymentError</div>;
};

export default CardPaymentError;