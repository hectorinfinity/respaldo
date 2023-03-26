import React from 'react';
import { classNames } from "@/helpers";

export type props = {
  className?: string;
};

const CardQueue: React.FC<props> = ({ className }) => {
  return <div className={classNames('', className)}>CardQueue</div>;
};

export default CardQueue;   

