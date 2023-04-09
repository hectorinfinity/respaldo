import React from 'react';
import { classNames } from '@/helpers';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ButtonLink, Icon } from '@/components/commons';
import Link from 'next/link';
import { Tab } from '@headlessui/react';
import { useRouter } from 'next/router';

export type props = {
  className?: string;
  id: string;
  image: string;
  details: string;
  restrictions: string;
  general: string;
  observations: string;
  services: string;
  access: string;
};
const CardEventDetails: React.FC<props> = ({
  className,
  access,
  details,
  general,
  image,
  observations,
  restrictions,
  services,
  id,
}) => {
  const handleShare = (text: string) => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: window.location.href,
        text,
      });
    }
  };

  const t = useTranslations('Card_Event_Details');
  return (
    <div className={classNames('', className)}>
      <div className="relative w-auto h-72 md:h-96 rounded-md overflow-hidden">
        <Image src={image} alt="" className="object-cover" fill />
      </div>

      <div className="flex flex-col my-5">
        <div className="flex gap-10 ml-auto text-gray-500">
          <span className="font-semibold">{t('shared_event')}</span>
          <div className="flex gap-4">
            <Icon
              onClick={() => handleShare('Facebook')}
              name="facebook"
              className="text-gray-500 cursor-pointer"
            />
            <Icon
              onClick={() => handleShare('Instagram')}
              name="instagram"
              className="text-gray-500 cursor-pointer"
            />
            <Icon
              onClick={() => handleShare('Twitter')}
              name="twitter"
              className="text-gray-500 cursor-pointer"
            />
            <Icon
              onClick={() => handleShare('Whatsapp')}
              name="whatsapp"
              className="text-gray-500 cursor-pointer"
            />
            <Icon
              onClick={() => handleShare('Telegram')}
              name="telegram"
              className="text-gray-500 cursor-pointer"
            />
          </div>
        </div>
      </div>

      <Tab.Group>
        <Tab.List className="flex items-end">
          <Tab
            className={({ selected }) =>
              classNames(
                'px-5 py-3 border-b focus:ring-0 focus:outline-none',
                selected
                  ? 'border-customGreen text-customGreen'
                  : 'border-gray-200'
              )
            }
          >
            {t('description')}
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'px-5 py-3 border-b focus:ring-0 focus:outline-none',
                selected
                  ? 'border-customGreen text-customGreen'
                  : 'border-gray-200'
              )
            }
          >
            {t('information')}
          </Tab>
          <div className="border-b flex-1 border-gray-200"></div>
        </Tab.List>
        <Tab.Panels className="mt-5">
          <Tab.Panel>
            <p>
              {details}{' '}
              <Link
                className="text-gray-500 font-semibold"
                href={`/event/${id}`}
              >
                Read more...
              </Link>
            </p>
          </Tab.Panel>

          <Tab.Panel>
            <ul className="space-y-4 mt-10">
              <li className="flex gap-4 text-sm">
                <span className="font-semibold">{t('restrictions')}</span>{' '}
                <span>{restrictions}</span>
              </li>
              <li className="flex gap-4 text-sm">
                <span className="font-semibold">{t('general')}</span>{' '}
                <span>{general}</span>
              </li>
              <li className="flex gap-4 text-sm">
                <span className="font-semibold">{t('observations')}</span>{' '}
                <span>{observations}</span>
              </li>
              <li className="flex gap-4 text-sm">
                <span className="font-semibold">{t('services')}</span>{' '}
                <span>{services}</span>
              </li>
              <li className="flex gap-4 text-sm">
                <span className="font-semibold">{t('limited_access')}</span>{' '}
                <span>{access}</span>
              </li>
            </ul>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default CardEventDetails;
