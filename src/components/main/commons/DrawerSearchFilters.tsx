import React, { Fragment, useEffect, useState } from 'react';
import { classNames } from '@/helpers';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { UseFormReturn } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { Button, Icon, Select, TextField, Title } from '@/components/commons';

export type props = {
  className?: string;
  isOpen: boolean;
  close: () => void;
} & UseFormReturn;

const DrawerSearchFilters: React.FC<props> = ({
  className,
  isOpen,
  close,
  ...useFormReturn
}) => {
  const { register, watch } = useFormReturn;
  const t = useTranslations('Drawer_Search_Filters');
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={close}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-auto bg-white py-6 shadow-xl">
                    <div className="flex items-center justify-between px-4 sm:px-6">
                      <Dialog.Title as={Title} level="h4">
                        {t('title')}
                      </Dialog.Title>

                      <Button
                        weight="inline"
                        color="neutral"
                        iconLeft={<Icon name="close-outline" />}
                      />
                    </div>
                    <div className="relative flex flex-col gap-5 mt-6 flex-1 px-4 sm:px-6">
                      <div className="mt-5 space-y-2">
                        <Title level="h5">{t('category')}</Title>
                        <hr className="border-gray-200" />
                      </div>

                      <Select
                        options={[
                          {
                            name: 'Option 1',
                            value: 'option_1',
                          },
                        ]}
                        {...register('category')}
                      />

                      <Select
                        label={t('sub_category')}
                        options={[
                          {
                            name: 'Option 1',
                            value: 'option_1',
                          },
                        ]}
                        {...register('sub_category')}
                      />

                      <Select
                        label={t('sub_sub_category')}
                        options={[
                          {
                            name: 'Option 1',
                            value: 'option_1',
                          },
                        ]}
                        {...register('sub_sub_category')}
                      />

                      <div className="mt-5 space-y-2">
                        <Title level="h5">{t('dates')}</Title>
                        <hr className="border-gray-200" />
                      </div>

                      <div className="flex gap-5">
                        <TextField
                          type="date"
                          label={t('initial_date')}
                          {...register('initial_date')}
                        />

                        <TextField
                          type="date"
                          label={t('finish_date')}
                          {...register('finish_date')}
                        />
                      </div>

                      <Title level="h5" className="mt-5 mb-3">
                        {t('location.label')}
                      </Title>

                      <TextField
                        iconPosition="right"
                        placeholder={t('location.placeholder')}
                        icon={<Icon name="search-icon" />}
                        {...register('location')}
                      />

                      <div className="w-[80%] mt-7 mx-auto">
                        <Button size="large" fullWidth>
                          {t('button')}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default DrawerSearchFilters;
