import Link from 'next/link';
import { useTranslations } from "next-intl";
// Table
import { createColumnHelper } from '@tanstack/react-table';
import { Checkbox, Options, SwitchTable } from "./components";
// Helpers
import { CurrentColor } from '@/helpers';

export function columnsDiscount() {
  const tcc = useTranslations("table_columns");
  const currentColor = CurrentColor();
  const columnHelper = createColumnHelper<any>();
  
  return ([
    columnHelper.accessor('select', {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler(),
          }}
        />
      ),
      cell: ({ row }) => (
        <div>
          <Checkbox
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
    columnHelper.accessor('event', {
      id: 'event',
      header: () => tcc('event.event.event'),
      cell: info => info.getValue()
    }),
    columnHelper.accessor('cuopon', {
      id: 'cuopon',
      header: () => tcc('event.discount.cuopon'),
      cell: info => info.getValue()
    }),
    columnHelper.accessor('discount', {
      id: 'discount',
      header: () => tcc('event.discount.discount'),
      cell: info => info.getValue()
    }),
    columnHelper.accessor('limit', {
      id: 'limit',
      header: () => tcc('event.discount.limit'),
      cell: info => info.getValue()
    }),
    columnHelper.accessor('exchanges', {
      id: 'exchanges',
      header: () => tcc('event.discount.exchanges'),
      cell: info => info.getValue()
    }),
    columnHelper.accessor('init_at', {
      id: 'init_at',
      header: () => tcc('event.discount.init_at'),
      cell: info => info.getValue()
    }),
    columnHelper.accessor('expires_at', {
      id: 'expires_at',
      header: () => tcc('event.discount.expires_at'),
      cell: info => info.getValue()
    }),
    columnHelper.accessor('status', {
      id: 'status',
      header: () => tcc('status'),
      cell: props => (
        <SwitchTable color={currentColor}/>
      ),
    }),
    columnHelper.accessor('options', {
      id: 'options',
      header: () => tcc('option'),
      cell: props => (
        <Options id={props.row.original.id} color={currentColor} />
      ),
    })
  ]);
}