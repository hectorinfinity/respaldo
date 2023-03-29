import React from 'react';
import { classNames } from '@/helpers';
import { useTranslations } from 'next-intl';

export type props = {
  className?: string;
  name: string;
  location: string;
  currentStep: number;
};

const HeaderQueue: React.FC<props> = ({
  className,
  currentStep,
  location,
  name,
}) => {
  const t = useTranslations('Header_Queue')
  return <div className={classNames('', className)}>
    <span className='block font-bold text-2xl text-center'>{name}</span>
    <span className='block font-semibold text-center'>{location}</span>

    <div className='mt-3'>
        <div className="flex items-center">
          <div className='bg-customYellow h-1 w-1 rounded-full' />
          <span>{t('lobby')}</span>
        </div>
    </div>
  </div>;
};

export default HeaderQueue;
