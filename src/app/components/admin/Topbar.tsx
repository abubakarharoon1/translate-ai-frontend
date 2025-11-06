// src/app/component/admin/Topbar.tsx
'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Topbar() {
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem('token');
    router.replace('/auth/login');
  };
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4">
      <div className="font-semibold text-gray-800">Admin Dashboard</div>
      <Button onClick={logout} className="bg-[#0a1f4f] hover:opacity-90">Logout</Button>
    </header>
  );
}
