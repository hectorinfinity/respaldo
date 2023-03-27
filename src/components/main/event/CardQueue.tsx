import React from 'react';
import { classNames } from '@/helpers';
import { useTranslations } from 'next-intl';

export type props = {
  className?: string;
  number: number;
  maxNumber: number;
  queueId: string;
};
// TODO: fix percentage bar
const CardQueue: React.FC<props> = ({ className, number, maxNumber, queueId }) => {
  const t = useTranslations('CardEvent');
  return (
    <div
      className={classNames('rounded-xl overflow-hidden flex flex-col justify-between shadow-xl', className)}
    >
      <div className="flex flex-col items-center px-10 py-5">
        <span className="font-semibold text-lg">{t('title')}</span>
        <span className="text-3xl mt-3 text-black font-bold">{number}</span>
        <span className="text-sm">{t('subtitle')}</span>

        <div className="mt-3 h-3 rounded-full bg-gray-100 flex-1 w-3/4">
          <div
            className="bg-amber-400 h-3 w-full rounded-full"
            style={{
              width: `${(number / maxNumber) * 100}%`,
            }}
          />
        </div>
      </div>

      <div className="bg-gray-100 mt-10 flex py-1 flex-col items-center">
        <span className="text-gray-500 text-sm">
          {t('virtual_queue_id')} {queueId}
        </span>
      </div>
    </div>
  );
};

export default CardQueue;
