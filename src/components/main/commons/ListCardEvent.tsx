import React from 'react';
import { classNames } from "@/helpers";
import { UseFormReturn } from 'react-hook-form';

export type props = {
  className?: string;
}

const ListCardEvent: React.FC<props> = ({ className }) => {
  return <div className={classNames('', className)}>ListCardEvent</div>;
};

export default ListCardEvent;