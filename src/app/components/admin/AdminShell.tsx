// src/app/component/admin/AdminShell.tsx
'use client';

import { useAdminGuard } from '@/hooks/useAdminGuard';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const ok = useAdminGuard();
  if (!ok) return null;
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
