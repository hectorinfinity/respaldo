import React from 'react';
import { classNames } from '@/helpers';
import Image from 'next/image';
import { Icon } from '@/components/commons';
import { format } from 'date-fns';
import { useTranslations } from 'next-intl';

export type props = {
  className?: string;
  image: string;
  name: string;
  date: Date;
  countTickets: number;
  location: string;
  spots: { row: string; seat: number; section: number }[];
  user: {
    name: string;
    lastFour: number;
  };
};

const CardEventOrder: React.FC<props> = ({
  className,
  image,
  name,
  date,
  countTickets,
  location,
  spots,
  user,
}) => {
  const t = useTranslations('Card_Event_Order');
  return (
    <div
      className={classNames(
        'card text-sm',
        className
      )}
    >
      <div className="w-full h-8 bg-customPink"></div>
      <div className="flex ">
        <div className="basis-1/3 ">
          <div className="w-full h-full relative">
            <Image className="object-cover" src={image} fill alt={name}></Image>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 py-4 px-5 sm:px-8 basis-2/3  ">
          <div>
            <p className="text-xl font-bold">{name}</p>
            <div className="flex flex-col  gap-5 mt-5">
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5" name="calendar-outline" />
                <p className="font-bold">
                  {t('date')}:{' '}
                  <span className="font-medium">
                    {format(date, 'hh:mm')} hrs
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5" name="clock-outline" />
                <p className="font-bold">
                  {t('time')}:{' '}
                  <span className="font-medium">
                    {format(date, 'MMM yyyy')}
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5" name="person-outline" />
                <p className="font-bold">
                  {t('tickets')}:{' '}
                  <span className="font-medium">{countTickets}</span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5" name="map-pin" />
                <p className="font-bold">
                  {t('tickets')}:{' '}
                  <span className="font-medium">{location}</span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="p font-bold">{t('name')}</p>
            <p className="mt-2">{user.name}</p>
            <div className="mt-8">
              <table>
                <thead>
                  <th className="pr-5">Row</th>
                  <th className="pr-5">Seat</th>
                  <th>Section</th>
                </thead>
                <tbody>
                  {spots.map(({ row, seat, section }, idx) => (
                    <tr key={idx}>
                      <td className="pr-5">{row}</td>
                      <td className="pr-5">{seat}</td>
                      <td className="pr-5">{section}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-5">
                <p className="font-extrabold">{t('payment_method')}</p>
                <p className="mt-2">
                  <p className="flex gap-3 items-center">
                    <Icon name="master-card"></Icon>
                    <p>XXXX XXXX XXXX {user.lastFour}</p>
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEventOrder;
