import React from 'react';
import { classNames } from '@/helpers';
import { UseFormReturn } from 'react-hook-form';
import { Disclosure } from '@headlessui/react';
import { useTranslations } from 'next-intl';
import { Title, TextField, Icon, Select, Checkbox } from '@/components/commons';

export type props = {
  className?: string;
} & UseFormReturn<any>;

const StepCheckoutPayment: React.FC<props> = ({
  className,
  ...useFormReturn
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormReturn;
  const t = useTranslations('Step_Checkout_Payment');
  const onSubmit = () => {};
  return (
    <div className={classNames('', className)}>
      <Disclosure
        as="div"
        className={({ open }) =>
          classNames('rounded-xl shadow-xl', open && 'rounded-b-none')
        }
      >
        <Disclosure.Button
          className={classNames(
            'flex w-full justify-between items-center p-8 gap-10'
          )}
        >
          <Title level="h4">{t('credit_or_debit')}</Title>

          <span className="flex">
            <Icon name="visa" className="w-24" />
            <Icon name="master-card" className="w-24" />
            <Icon name="amex" className="w-24" />
          </span>
        </Disclosure.Button>

        <Disclosure.Panel
          className="m-8"
          as="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mr-32 grid grid-cols-1 md:grid-cols-2 gap-5">
            <Select
              options={[
                {
                  name: t('fieldset_card.new_card'),
                  value: '',
                },
                {
                  name: 'Option 1',
                  value: 'option_1',
                },
              ]}
              {...register('new_card', {
                required: 'Required',
              })}
            />
            <div></div>

            <TextField
              label={t('fieldset_card.card_number')}
              {...register('card_number', {
                required: 'Required',
              })}
              placeholder="XXXX XXXX XXXX"
            />
            <div className="flex gap-5">
              <TextField
                label={t('fieldset_card.expiration_date')}
                type="date"
                {...register('expiration_date', {
                  required: 'Required',
                })}
              />
              <TextField
                label={t('fieldset_card.cvv')}
                placeholder="***"
                type="number"
                {...register('cvv', {
                  required: 'Required',
                })}
              />
            </div>
            <TextField
              label={t('fieldset_card.holders_name')}
              {...register('holders_name', {
                required: 'Required',
              })}
            />
            <TextField
              label={t('fieldset_card.alias')}
              {...register('alias')}
            />

            <Select
              options={[
                {
                  name: t('fieldset_card.month_fee.option'),
                  value: '3_months',
                },
              ]}
              label={t('fieldset_card.month_fee.label')}
              {...register('alias')}
            />
            <div></div>

            <Checkbox
              {...register('save_my_card')}
              label={t('fieldset_card.save_my_card')}
            />
          </div>

          <Title className="mt-8" level="h4">
            {t('address_card_data')}
          </Title>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Select
              options={[
                {
                  name: t('fieldset_address.select_your_address.option'),
                  value: '',
                },
              ]}
              label={t('fieldset_address.select_your_address.label')}
              {...register('address', {
                required: 'Required',
              })}
            />
            <div></div>
            <Select
              options={[
                {
                  name: 'Mexico',
                  value: 'mexico',
                },
              ]}
              label={t('fieldset_address.country')}
              {...register('country', {
                required: 'Required',
              })}
            />
            <div></div>

            <div className="col-span-2">
              <TextField
                label={t('fieldset_address.state.label')}
                {...register('state', {
                  required: 'Required',
                })}
              />

              <TextField
                label={t('fieldset_address.state.label')}
                {...register('state', {
                  required: 'Required',
                })}
              />
            </div>
          </div>
        </Disclosure.Panel>
      </Disclosure>
    </div>
  );
};

export default StepCheckoutPayment;
