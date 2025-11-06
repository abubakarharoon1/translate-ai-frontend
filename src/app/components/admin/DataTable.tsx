// src/app/component/admin/DataTable.tsx
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type Column<T> = { key: keyof T | string; header: string; render?: (row: T) => React.ReactNode };

export default function DataTable<T extends { id: string | number }>({
  columns,
  rows,
  empty = 'No data',
  caption,
}: { columns: Column<T>[]; rows: T[]; empty?: string; caption?: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white">
      <Table>
        {caption ? <TableCaption>{caption}</TableCaption> : null}
        <TableHeader>
          <TableRow>
            {columns.map((c) => (
              <TableHead key={String(c.key)} className="text-gray-600">{c.header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.length ? (
            rows.map((r) => (
              <TableRow key={r.id}>
                {columns.map((c) => (
                  <TableCell key={String(c.key)}>
                    {c.render ? c.render(r) : (r as any)[c.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-gray-500 py-6">
                {empty}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
