// src/app/component/admin/Sidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

const links = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/orders', label: 'Orders' },
  { href: '/admin/pricing', label: 'Pricing' },
  { href: '/admin/files', label: 'Files' },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex md:flex-col">
      <div className="h-16 flex items-center px-6 font-bold text-[#0a1f4f] text-xl">Admin</div>
      <nav className="px-3 py-2 space-y-1">
        {links.map((l) => {
          const active = pathname === l.href;
          return (
            <Link key={l.href} href={l.href}>
              <Button
                variant={active ? 'secondary' : 'ghost'}
                className={`w-full justify-start ${active ? 'bg-[#e9f0fa] text-[#0a1f4f]' : ''}`}
              >
                {l.label}
              </Button>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
