import { useTranslations } from "next-intl";
// Table
import { createColumnHelper } from '@tanstack/react-table';
import { Checkbox, Icon, OptionsEvent, SwitchTable } from "./components";
// Helpers
import { CurrentColor } from '@/helpers';
//hooks

import {useDeleteEventCategory}from '@/hooks/event/event_category'

export function columnsEventCategory() {

const { mutate,isLoading,isError,isSuccess}=useDeleteEventCategory()

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
    columnHelper.accessor('icon', {
      id: 'icon',
      header: () => tcc('admin.event.icon'),
      cell: props => (
        <Icon imageSrc={props.getValue()} />
      ),
    }),
    columnHelper.accessor('category', {
      id: 'category',
      header: () => tcc('admin.event.category'),
      cell: props => props.getValue()
    }),
    columnHelper.accessor('status', {
      id: 'status',
      header: () => tcc('status'),
      cell: props => (
        <SwitchTable color={currentColor} />
      ),
    }),
    columnHelper.accessor('options', {
      id: 'options',
      header: () => tcc('option'),
      cell: props => (
        <OptionsEvent id={props.row.original.id} color={currentColor} deleteCategory={mutate}/>
      ),
    })
  ]);
}