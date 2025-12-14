// src/app/admin/orders/page.tsx
'use client';

import { useEffect, useState } from 'react';
import DataTable from '@/app/components/admin/DataTable';
import { AdminService } from '@/services/admin.service';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

type OrderRow = {
  id: string | number;
  customer: string;
  sourceLang: string;
  targetLang: string;
  status: 'pending' | 'in_progress' | 'completed' | 'canceled';
  words: number;
  price: number;
  createdAt: string;
};

export default function OrdersPage() {
  const [rows, setRows] = useState<OrderRow[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await AdminService.getOrders({ page, limit });
        setRows(res.items);
        setTotal(res.total);
      } finally {
        setLoading(false);
      }
    })();
  }, [page, limit]);

  const pageCount = Math.max(1, Math.ceil(total / limit));

  const statusBadge = (s: OrderRow['status']) => {
    const color =
      s === 'completed'
        ? 'bg-emerald-100 text-emerald-700'
        : s === 'in_progress'
        ? 'bg-blue-100 text-blue-700'
        : s === 'pending'
        ? 'bg-amber-100 text-amber-700'
        : 'bg-rose-100 text-rose-700';
    return (
      <Badge className={color + ' capitalize'} variant="secondary">
        {s.replace('_', ' ')}
      </Badge>
    );
  };

  const cols = [
    { key: 'id', header: 'ID' },
    { key: 'customer', header: 'Customer' }, // e.g. "John Doe <john@site.com>"
    { key: 'sourceLang', header: 'From' },
    { key: 'targetLang', header: 'To' },
    { key: 'words', header: 'Words' },
    { key: 'price', header: 'Price', render: (r: OrderRow) => `$${r.price.toFixed(2)}` },
    { key: 'status', header: 'Status', render: (r: OrderRow) => statusBadge(r.status) },
    {
      key: 'createdAt',
      header: 'Created',
      render: (r: OrderRow) => new Date(r.createdAt).toLocaleString(),
    },
  ];

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">Orders</h1>
      <DataTable<OrderRow>
        columns={cols as any}
        rows={rows}
        empty={loading ? 'Loading…' : 'No orders'}
      />

      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          disabled={page <= 1}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
        >
          Prev
        </Button>
        <div className="text-sm">
          Page {page} / {pageCount}
        </div>
        <Button
          variant="outline"
          disabled={page >= pageCount}
          onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
