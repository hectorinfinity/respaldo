import React from 'react';
import { classNames } from "@/helpers";
import { UseFormReturn } from 'react-hook-form';
import { Disclosure } from '@headlessui/react'
import { useTranslations } from 'next-intl'
import { Title, TextField, Icon } from '@/components/commons'

export type props = {
  className?: string;
} & UseFormReturn<any>;

const StepCheckoutPayment: React.FC<props> = ({ className, ...useFormReturn }) => {
  const { register, handleSubmit, formState: { errors } } = useFormReturn;
  const t = useTranslations('Step_Checkout_Payment')
  return <div className={classNames('', className)}>
    <Disclosure as="div" className={({ open }) => classNames("rounded-xl shadow-xl", open && 'rounded-b-none')}>
      <Disclosure.Button className={classNames('flex w-full justify-between items-center p-8 gap-10')}>
        <Title level='h4'>
          {t('credit_or_debit')}
        </Title>

        <span className="flex">
          <Icon name="visa" className="w-24" />
          <Icon name="master-card" className="w-24" />
          <Icon name="amex" className="w-24" />
        </span>
      </Disclosure.Button>

      <Disclosure.Panel as="form">
        
      </Disclosure.Panel>
    </Disclosure>
  </div>;
};

export default StepCheckoutPayment;