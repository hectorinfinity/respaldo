import React from 'react';
import { classNames } from "@/helpers";

export type props = {
  className?: string;
};

const FooterCheckout: React.FC<props> = ({ className }) => {
  return <div className={classNames('', className)}>FooterCheckout</div>;
};

export default FooterCheckout;