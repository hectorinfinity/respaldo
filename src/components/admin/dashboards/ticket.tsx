import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
// Components
import { BasicTable } from '@/components/admin/tables';
import { columnsTicketDashboard } from '@/components/admin/tables/columns/columnsTicketDashboard';
import { columnsTicketPhaseDashboard } from '@/components/admin/tables/columns/columnsTicketPhaseDashboard';
import { ComplexCard, SimpleCard } from './stats';

export const TicketDashboard = () => {
    const td = useTranslations("Panel_Dashboard");

    const info = [
        { name: td('active'), amount: '200 M', color: 'customPurple' },
        { name: td('available'), amount: '100 M', color: 'customRed' },
        { name: td('sold'), amount: '100 M', color: 'customGreen' },
        { name: td('attendance'), amount: '99,520', color: 'customPink' },
        { name: td('earns'), amount: '$250,000', color: 'customBlue' },
    ]
    const stats = [
        { name: td('visit'), amount: '200 M' },
        { name: td('likes'), amount: '100 K' },
        { name: td('assisted'), amount: '100 M' },
    ]
    const shared = [
        { name: 'facebook', amount: '200 K' },
        { name: 'instagram', amount: '10 K' },
        { name: 'twitter', amount: '2 K' },
        { name: 'whatsapp', amount: '5 K' },
        { name: 'telegram', amount: '1 K' },
    ]

    const dataT = useMemo(() => [
        { id: '1', section: 'test', amount: 200, available: 100, sold: 100, attendance: 90, earns: '$1200' },
        { id: '2', section: 'test2', amount: 200, available: 100, sold: 100, attendance: 90, earns: '$1200' },
    ], []);
    const columnsT = columnsTicketDashboard();

    const dataTP = useMemo(() => [
        { id: '1', phase: 'test', start_at: '2023-02-02', end_at: '2023-02-02', available: 100, sold: 100, earns: '$1200' },
        { id: '2', phase: 'test2', start_at: '2023-02-02', end_at: '2023-02-02', available: 100, sold: 100, earns: '$1200' },
    ], []);
    const columnsTP = columnsTicketPhaseDashboard();

    return (
        <>
            <div className="flex flex-1 pt-6">
                <div className="w-screen min-h-0 overflow-hidden">
                    <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
                        {/* Card */}
                        {info.map((card) => (
                            <SimpleCard name={card.name} amount={card.amount} color={card.color} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-1 pt-6">
                <div className="w-screen min-h-0 overflow-hidden">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 lg:col-span-6">
                            <div className={`mt-2 grid grid-cols-1 sm:grid-cols-3 rounded-lg border-t-[30px] border-customPurple`}>
                                {/* Card */}
                                {stats.map((stat) => (
                                    <ComplexCard name={stat.name} amount={stat.amount} />
                                ))}
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <div className={`mt-2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 rounded-lg border-t-[30px] border-customGreen`}>
                                {/* Card */}
                                {shared.map((share) => (
                                    <ComplexCard name={share.name} amount={share.amount} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden shadow sm:rounded-lg mb-16 mt-16">
                <div className="min-w-full divide-y divide-gray-300">
                    <BasicTable columns={columnsT} defaultData={dataT} />
                </div>
            </div>
            <div className="overflow-hidden shadow sm:rounded-lg mb-16 mt-16">
                <div className="min-w-full divide-y divide-gray-300">
                    <BasicTable columns={columnsTP} defaultData={dataTP} />
                </div>
            </div>
        </>
    );
};