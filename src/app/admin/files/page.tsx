// src/app/admin/files/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { AdminService } from '@/services/admin.service';
import DataTable from '@/app/components/admin/DataTable';

type FileRow = { id: string; name: string; size: number; uploadedAt: string };

export default function FilesPage() {
  const [rows, setRows] = useState<FileRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await AdminService.getFiles();
        setRows(res);
      } catch {
        setRows([
          { id: 'f1', name: 'invoice_123.pdf', size: 234567, uploadedAt: new Date().toISOString() },
          { id: 'f2', name: 'contract_en.txt', size: 12567, uploadedAt: new Date().toISOString() },
        ]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const cols = [
    { key: 'name', header: 'Name' },
    { key: 'size', header: 'Size', render: (r: FileRow) => `${(r.size / 1024).toFixed(1)} KB` },
    { key: 'uploadedAt', header: 'Uploaded', render: (r: FileRow) => new Date(r.uploadedAt).toLocaleString() },
  ];

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">Files</h1>
      <DataTable<FileRow> columns={cols as any} rows={rows} empty={loading ? 'Loading…' : 'No files'} />
    </div>
  );
}
