import React from 'react';
import { classNames } from "@/helpers";

export type props = {
  className?: string;
};

const Hero: React.FC<props> = ({ className }) => {
  return <div className={classNames('', className)}>Hero</div>;
};

export default Hero;