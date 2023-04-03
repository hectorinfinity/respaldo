import React, { useEffect } from 'react';
import { classNames } from '@/helpers';
import { Button, Icon, Select, TextField, Title } from '@/components/commons';
import { useTranslations } from 'next-intl';
import { UseFormReturn } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { getEventsCategories } from '@/api/event/event_category';
import DateRangePicker from '@/components/commons/DateRangePicker';
import { format } from 'date-fns';

export type props = {
  className?: string;
  close?: () => void;
} & UseFormReturn;

const SidebarSearch: React.FC<props> = ({
  className,
  close,
  ...useFormReturn
}) => {
  const { register, control, watch, setValue } = useFormReturn;
  const categories = useQuery({
    queryKey: ['categories'],
    queryFn: getEventsCategories,
  });
  const t = useTranslations('Drawer_Search_Filters');
  console.log(categories?.data);

  const dateRange = watch('date-range');
  useEffect(() => {
    if (dateRange?.[0]) {
      setValue('initial_date', format(new Date(dateRange?.[0]), 'dd/mm/yyyy'));
    }
    if (dateRange?.[1]) {
      setValue('finish_date', format(new Date(dateRange?.[1]), 'dd/mm/yyyy'));
    }
  }, [dateRange?.[0], dateRange?.[1]]);
  return (
    <div className={classNames('relative h-max', className)}>
      <div
        className={classNames(
          'flex h-full flex-col overflow-y-auto bg-white py-6 shadow-xl',
          !close && 'rounded-xl'
        )}
      >
        <div className="relative flex flex-col gap-5 mt-6 flex-1 px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <Title level="h4">{t('title')}</Title>
            {close && (
              <Button
                onClick={close}
                weight="inline"
                color="neutral"
                iconLeft={<Icon name="close-outline" />}
              />
            )}
          </div>
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

          <div className="flex flex-col gap-5">
            <DateRangePicker control={control}>
              <TextField
                type="text"
                readOnly
                label={t('initial_date')}
                {...register('initial_date')}
              />
            </DateRangePicker>
            <TextField
              type="text"
              readOnly
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
    </div>
  );
};

export default SidebarSearch;
