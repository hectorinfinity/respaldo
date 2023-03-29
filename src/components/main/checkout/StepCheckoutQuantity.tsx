import React, { useEffect, useState } from 'react';
import { classNames } from '@/helpers';
import HeaderStepCheckout, {
  props as HeaderStepCheckoutProps,
} from '@/components/main/checkout/HeaderStepCheckout';
import { UseFormReturn } from 'react-hook-form/dist/types';
import { Button, Icon, Select, TextField } from '@/components/commons';
import { useTranslations } from 'next-intl';
import { faker } from '@faker-js/faker';

export type props = {
  className?: string;
} & HeaderStepCheckoutProps &
  UseFormReturn<any>;

const StepCheckoutQuantity: React.FC<props> = ({
  className,
  name,
  location,
  ...useFormReturn
}) => {
  const { register, setValue, watch } = useFormReturn;
  const t = useTranslations('Step_Checkout_Quantity');
  return (
    <div className={classNames('', className)}>
      <HeaderStepCheckout name={name} location={location} />
      <div className="p-7 space-y-10">
        <div className="space-y-3 inline-block">
          <span className="font-semibold">{t('select_date_time')}</span>
          <TextField className="w-72" type="date" {...register('date')} />s{' '}
        </div>

        <div className="space-y-3">
          <span className="font-semibold">{t('select_number_of_tickets')}</span>
          <div className="flex gap-3 items-center">
            <Button
              onClick={() =>
                setValue(
                  'tickets',
                  watch('tickets') == 0
                    ? watch('tickets')
                    : watch('tickets') - 1
                )
              }
              size="small"
              shape="pill"
              color="neutral"
              iconLeft={<Icon name="minus" />}
            />
            <span className="font-semibold">{watch('tickets')}</span>
            <Button
              size="small"
              shape="pill"
              onClick={() => setValue('tickets', watch('tickets') + 1)}
              iconLeft={<Icon name="plus" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepCheckoutQuantity;
