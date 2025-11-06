// src/app/admin/page.tsx
'use client';

import { useEffect, useState } from 'react';
import StatCard from '@/app/components/admin/StatCard';
import DataTable from '@/app/components/admin/DataTable';
import { AdminService } from '@/services/admin.service';
import { Badge } from '@/components/ui/badge';

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

export default function AdminHome() {
  const [stats, setStats] = useState<{ totalOrders: number; revenue: number; users: number; avgOrderValue: number } | null>(null);
  const [orders, setOrders] = useState<OrderRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const [s, o] = await Promise.allSettled([
          AdminService.getStats(),
          AdminService.getOrders({ page: 1, limit: 5 }),
        ]);
        if (s.status === 'fulfilled') setStats(s.value);
        if (o.status === 'fulfilled') setOrders(o.value.items);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const statusBadge = (s: OrderRow['status']) => {
    const color =
      s === 'completed' ? 'bg-emerald-100 text-emerald-700' :
      s === 'in_progress' ? 'bg-blue-100 text-blue-700' :
      s === 'pending' ? 'bg-amber-100 text-amber-700' :
      'bg-rose-100 text-rose-700';
    return <Badge className={color + ' capitalize'} variant="secondary">{s.replace('_', ' ')}</Badge>;
  };

  const cols = [
    { key: 'id', header: 'ID' },
    { key: 'customer', header: 'Customer' },
    { key: 'sourceLang', header: 'From' },
    { key: 'targetLang', header: 'To' },
    { key: 'words', header: 'Words' },
    { key: 'price', header: 'Price', render: (r: OrderRow) => `$${r.price.toFixed(2)}` },
    { key: 'status', header: 'Status', render: (r: OrderRow) => statusBadge(r.status) },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Orders" value={stats?.totalOrders ?? (loading ? '…' : 0)} />
        <StatCard title="Revenue" value={stats ? `$${stats.revenue.toFixed(2)}` : (loading ? '…' : '$0.00')} />
        <StatCard title="Users" value={stats?.users ?? (loading ? '…' : 0)} />
        <StatCard title="Avg Order Value" value={stats ? `$${stats.avgOrderValue.toFixed(2)}` : (loading ? '…' : '$0.00')} />
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-gray-800">Latest Orders</h2>
        <DataTable<OrderRow> columns={cols as any} rows={orders} empty={loading ? 'Loading…' : 'No recent orders'} />
      </div>
    </div>
  );
}
