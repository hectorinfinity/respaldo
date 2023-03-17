import { createColumnHelper } from '@tanstack/react-table';
import { CheckboxTable } from './checkboxTable';
// React Table ColumnDef
import { ColumnDef } from '@tanstack/react-table';

export function ColumnsTable(defaultColumns: ColumnDef<any, any>[]) {
  const columnHelper = createColumnHelper<any>()
  const columns = [
    columnHelper.accessor('select', {
      id: 'checkbox',
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
  ];

  return (
    [...columns, defaultColumns]
  )
}