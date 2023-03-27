import React from 'react';
import { classNames } from '@/helpers';
import { Button, Icon, WillAttend } from '@/components/commons';
import formatNumber from 'format-number';
import { useLocale, useTranslations } from 'next-intl';
import { format } from 'date-fns';
import { enUS, es } from 'date-fns/locale';

export type props = {
  className?: string;
  id: string;
  name: string;
  willAttend: boolean;
  cost: number;
  startDate: Date;
  endDate: Date;
  startTime: string;
  endTime: string;
  location: string;
};
// TODO: button "Buy Ticket" is only active when user is logged in
const SidebarEvent: React.FC<props> = ({
  className,
  cost,
  endDate,
  endTime,
  id,
  location,
  name,
  startDate,
  startTime,
  willAttend,
}) => {
  const t = useTranslations('Sidebar_Event');
  const locale = useLocale();
  return (
    <aside
      className={classNames(
        'shadow-xl inline-block rounded-xl overflow-hidden',
        className
      )}
    >
      <div className="h-6 bg-customPink" />
      <div className="px-10 flex justify-between items-center gap-10 py-5">
        <p>
          <span className="block text-2xl font-semibold">{name}</span>
          <WillAttend className="mt-3" />
        </p>
        <Button
          color="white"
          shape="pill"
          iconLeft={
            willAttend ? (
              <Icon name="heart-solid" className="text-customYellow" />
            ) : (
              <Icon name="heart-outline" className="text-customGray" />
            )
          }
        />
      </div>
      <hr className="border-gray-200 h-[1px]" />
      <div className="px-10 py-5">
        <span className="block text-lg font-bold">
          {t('cost', {
            value: formatNumber({ prefix: '$', suffix: ' MXN' })(cost),
          })}
        </span>
        <ul className="mt-10">
          <li>
            <span className="font-semibold flex items-center gap-1.5">
              <Icon name="calendar-outline" className="w-4 h-4 text-black" />
              {t('date')}
            </span>
            <p>
              <span>
                {format(startDate, 'EEEE, dd MMMM yyyy', {
                  locale: locale == 'en' ? enUS : es,
                })}
              </span>{' '}
              -{' '}
              <span>
                {format(endDate, 'dd MMMM yyyy', {
                  locale: locale == 'en' ? enUS : es,
                })}
              </span>
            </p>
          </li>
          <li>
            <span className="font-semibold flex items-center gap-1.5">
              <Icon name="map-pin" className="w-4 h-4 text-black" />
              {t('time')}
            </span>
            <p>
              <span>
                {format(startDate, 'EEEE, dd MMMM yyyy', {
                  locale: locale == 'en' ? enUS : es,
                })}
              </span>{' '}
              -{' '}
              <span>
                {format(endDate, 'dd MMMM yyyy', {
                  locale: locale == 'en' ? enUS : es,
                })}
              </span>
            </p>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SidebarEvent;
