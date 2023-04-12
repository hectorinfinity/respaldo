import { useEffect, useMemo } from 'react';
import { useTranslations } from 'next-intl';
// Components
import { BasicTable } from '@/components/admin/tables';
import { columnsPOS } from '../tables/columns/columnsPOS';
import { SimpleCard } from './stats';
import DateRangePicker from '@/components/commons/DateRangePicker';
import { Icon, TextField } from '@/components/commons';
import { UseFormReturn, useForm } from 'react-hook-form';
import { format } from 'date-fns';

export const PosDashboard = () => {
    const t = useTranslations('Drawer_Search_Filters');
    const td = useTranslations("Panel_Dashboard");

    const useFormReturn = useForm();
    const { register, control, watch, setValue } = useFormReturn;
    const dateRange = watch('date-range');

    const cards = [
        { name: td('sold_ticket'), amount: '100', color: 'customPurple' },
        { name: td('income'), amount: '$1,200', color: 'customRed' },
        { name: td('soft_ticket'), amount: '1200', color: 'customGreen' },
        { name: td('hard_ticket'), amount: '0', color: 'customPink' },
        { name: td('email_ticket'), amount: '0', color: 'customBlue' },
    ]

    const data = useMemo(() => [
        { id: '1', event: 'test', type_sale: 'Cash', delivery: 'Ticket', amount: 2, price: '$1200', sell_date: '2023-02-02' },
        { id: '2', event: 'test2', type_sale: 'Card', delivery: 'Digital', amount: 4, price: '$1200', sell_date: '2023-02-02' },
    ], []);
    const columns = columnsPOS();

    useEffect(() => {
        if (dateRange?.[0]) {
          setValue('initial_date', format(new Date(dateRange?.[0]), 'dd/mm/yyyy'));
        }
        if (dateRange?.[1]) {
          setValue('finish_date', format(new Date(dateRange?.[1]), 'dd/mm/yyyy'));
        }
      }, [dateRange?.[0], dateRange?.[1]]);

    return (
        <>
            <div className="flex flex-1">
                <div className="w-screen min-h-0 overflow-hidden">
                    <div className="relative text-right">
                        <div className="flex justify-end">
                            <div className='px-2 pt-4 text-customForm'>
                                Report Date Range:
                            </div>
                            <div className="px-2">
                                <DateRangePicker control={control}>
                                    <TextField
                                        type="text"
                                        readOnly
                                        icon={<Icon name="calendar-outline" />}
                                        iconPosition="right"
                                        label=''
                                        {...register('initial_date')}
                                    />
                                </DateRangePicker>
                            </div>
                            <div className="px-2">
                                <TextField
                                    type="text"
                                    readOnly
                                    icon={<Icon name="calendar-outline" />}
                                    iconPosition="right"
                                    label=''
                                    {...register('finish_date')}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 pt-6">
                <div className="w-screen min-h-0 overflow-hidden">
                    <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
                        {/* Card */}
                        {cards.map((card) => (
                            <SimpleCard name={card.name} amount={card.amount} color={card.color} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-1 pt-6">
                <div className="w-screen min-h-0 overflow-hidden">
                    <BasicTable columns={columns} defaultData={data} />
                </div>
            </div>
        </>
    );
};

function register(arg0: string): JSX.IntrinsicAttributes & Omit<import("../../commons/TextField").props, "ref"> & import("react").RefAttributes<any> {
    throw new Error('Function not implemented.');
}
