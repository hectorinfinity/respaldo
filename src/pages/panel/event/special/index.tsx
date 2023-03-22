/** @format */
import { useMemo } from 'react';
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
// React Table Column Helper
import { createColumnHelper } from '@tanstack/react-table';
// Helpers
import { CurrentColor } from "@/helpers/currentColor";
// Layout and Header
import AdminLayout from "@/components/layout/admin";
import { BasicTable, ColumnsTable, CheckboxTable } from '@/components/admin/tables';
// Fake Data
import { faker } from '@faker-js/faker';
// Icons
import {
    PencilIcon,
    TrashIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Heading } from '@/components/headers/admin/heading';
// Category Interface
interface Category {
    id: string,
    name: string
}

const EventSpecialCategory = () => {
    const t = useTranslations("Panel");
    const tb = useTranslations("btn");
    const currentColor = CurrentColor();

    const breadcrumb = [
        { page: t('user'), href: '/panel/profile' },
        { page: t('profile.info'), href: '' }
    ]
    const buttonBread =  { text: tb('add_special_category'), href: '/panel/event/special/create' }

    // Create new category for Test
    const newCategory = (): Category => {
        return {
            id: faker.datatype.uuid(),
            name: faker.name.firstName(),
        }
    }

    const data = useMemo(() => [
        { id: '1', name: 'test' },
        { id: '2', name: 'test2' },
        { id: '3', name: 'test2' },
        { id: '4', name: 'test2' },
        { id: '5', name: 'test2' },
        { id: '6', name: 'test2' },
        { id: '7', name: 'test2' },
        { id: '8', name: 'test2' },
        { id: '9', name: 'test2' },
        { id: '10', name: 'test2' },
        { id: '11', name: 'test2' }
    ], []);
    /*
   const data = useMemo(() => {
       const arr = []
       for (let i = 0; i < 1000; i++) {
         arr.push(newCategory())
       }
       return arr
   }, []);*/

    const columnHelper = createColumnHelper<any>()
    const columns = [
        columnHelper.accessor('select', {
            header: ({ table }) => (
                <CheckboxTable
                    {...{
                        checked: table.getIsAllRowsSelected(),
                        indeterminate: table.getIsSomeRowsSelected(),
                        onChange: table.getToggleAllRowsSelectedHandler(),
                    }}
                />
            ),
            cell: ({ row }) => (
                <div>
                    <CheckboxTable
                        {...{
                            checked: row.getIsSelected(),
                            disabled: !row.getCanSelect(),
                            indeterminate: row.getIsSomeSelected(),
                            onChange: row.getToggleSelectedHandler(),
                        }}
                    />
                </div>
            ),
        }),
        columnHelper.accessor('id', {
            cell: info => info.getValue(),
            footer: info => info.column.id,
        }),
        columnHelper.accessor('name', {
            id: 'lastName',
            header: () => 'Special Category Name',
            cell: info => info.getValue()
        }), columnHelper.accessor('options', {
            id: 'options',
            header: () => 'Options',
            cell: props => (
                <div className='flex justify-start'>
                    <Link href={`/panel/events/special/edit/${props.row.original.id}`} className="px-1">
                        <PencilIcon className={`w-4 h-4 hover:text-${currentColor}`} />
                    </Link>
                    <Link href={`/panel/events/special/delete/${props.row.original.id}`} className="px-1">
                        <TrashIcon className={`w-4 h-4 hover:text-${currentColor}`} />
                    </Link>
                </div>
            ),
        }),
    ];
    /*
    const columnsTest = [
        columnHelper.accessor('id', {
            id: 'id',
            cell: info => info.getValue(),
            footer: info => info.column.id,
        }),
        columnHelper.accessor('name', {
            id: 'lastName',
            header: () => 'Special Category Name',
            cell: info => info.getValue()
        }),
    ];

    const columns = ColumnsTable(columnsTest);
    console.log("Columns: ", ColumnsTable(columnsTest));
    */
    return (
        <>
            {/* Breadcrumb section */}
            <div>
                <Heading breadcrumb={breadcrumb} buttonBread={buttonBread} />
            </div>
            {/* Admin section */}
            <div className="flex flex-1 pt-6">
                <div className="w-screen min-h-0 overflow-hidden">
                    <div className="flow-root">
                        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                                    <div className="min-w-full divide-y divide-gray-300">
                                        <BasicTable columns={columns} defaultData={data} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

EventSpecialCategory.Layout = AdminLayout;
export default EventSpecialCategory;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default,
        },
    };
}