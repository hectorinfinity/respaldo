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
  const t = useTranslations('Header_Queue');
  return (
    <div className={classNames('bg-gray-400 p-10 flex flex-col', className)}>
      <span className="block font-bold text-4xl text-center text-white">
        {name}
      </span>
      <span className="block text-center mt-1 text-white">{location}</span>

      <div className="flex items-center mt-9 w-[87%] mx-auto">
        <div className="relative flex-1">
          <div className="flex items-center">
            <div
              className={classNames(
                'w-4 h-4 rounded-full',
                currentStep >= 1 ? ' bg-customYellow' : 'bg-gray-200'
              )}
            />
            <div
              className={classNames(
                'flex-1 h-[1.5px]',
                currentStep >= 2 ? 'bg-customYellow' : 'bg-gray-200'
              )}
            />
          </div>
          <span className="w-32 text-sm absolute top-0 mt-5 -ml-14 text-center whitespace-nowrap text-white">
            {t('lobby')}
          </span>
        </div>
        <div className="relative flex-1">
          <div className="flex items-center">
            <div
              className={classNames(
                'w-4 h-4 rounded-full',
                currentStep >= 2 ? 'bg-customYellow' : 'bg-gray-200'
              )}
            />
            <div
              className={classNames(
                'flex-1 h-[1.5px]',
                currentStep >= 3 ? 'bg-customYellow' : 'bg-gray-200'
              )}
            />
          </div>
          <span className="w-32 text-sm absolute top-0 mt-5 -ml-14 text-center whitespace-nowrap text-white">
            {t('waiting_room')}
          </span>
        </div>
        <div className="relative flex-1">
          <div className="flex items-center">
            <div
              className={classNames(
                'w-4 h-4 rounded-full',
                currentStep >= 3 ? 'bg-customYellow' : 'bg-gray-200'
              )}
            />
            <div
              className={classNames(
                'flex-1 h-[1.5px]',
                currentStep == 4 ? 'bg-customYellow' : 'bg-gray-200'
              )}
            />
          </div>
          <span className="w-32 text-sm absolute top-0 mt-5 -ml-14 text-center whitespace-nowrap text-white">
            {t('virtual_queue')}
          </span>
        </div>
        <div className="relative">
          <div className="flex items-center">
            <div
              className={classNames(
                'w-4 h-4 rounded-full',
                currentStep == 4 ? 'bg-customYellow' : 'bg-gray-200'
              )}
            />
          </div>
          <span className="w-32 text-sm absolute top-0 mt-5 -ml-14 text-center whitespace-nowrap text-white">
            {t('select_your_seats')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderQueue;
