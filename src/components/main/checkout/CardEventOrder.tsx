import React from 'react';
import { classNames } from '@/helpers';
import Image from 'next/image';
import { Icon } from '@/components/commons';
import formatDate from 'date-fns';
import { useTranslations } from "next-intl";

export type props = {
  className?: string;
  image: string;
  name: string;
  duration: number;
  date: Date;
  countTickets: number;
  location: string;
  author: string;
  spots: { row: string; seat: number; section: number }[];
};

const CardEventOrder: React.FC<props> = ({
  className,
  image,
  name,
  duration,
  date,
  countTickets,
  location,
  author,
  spots,
}) => {
  return (
    <div className={classNames('rounded-2xl shadow-xl', className)}>
      <div className="w-full h-12 bg-customPink"></div>
      <div className="flex">
        <div className="basis-1/3">
          <Image src={image} width={300} height={300} alt={name}></Image>
        </div>
        <div className="grid grid-cols-2 gap-10 p-5 basis-2/3">
          <div>
            <p className="text-xl font-bold">{name}</p>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex items-center gap-3">
                <Icon name="clock-outline"></Icon>
                <p className="font-bold"></p>
              </div>
              <p></p>
              <div className="flex items-center gap-3">
                <Icon name="calendar-outline"></Icon>
                <p className="font-bold"></p>
              </div>
              <p></p>
              <div className="flex items-center gap-3">
                <Icon name="person-outline"></Icon>
                <p className="font-bold"></p>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="map-pin"></Icon>
                <p className="font-bold"></p>
              </div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEventOrder;
