// src/hooks/useAdminGuard.ts
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type JwtPayload = { role?: string; exp?: number };

function decode<T = any>(token: string): T | null {
  try {
    const base64 = token.split('.')[1];
    return JSON.parse(atob(base64)) as T;
  } catch {
    return null;
  }
}

export function useAdminGuard() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (!token) {
      router.replace('/auth/login');
      return;
    }
    const payload = decode<JwtPayload>(token);
    const isAdmin = payload?.role === 'superadmin';
    const now = Math.floor(Date.now() / 1000);
    const notExpired = (payload?.exp ?? 0) > now;

    if (!isAdmin || !notExpired) {
      router.replace('/auth/login');
      return;
    }
    setReady(true);
  }, [router]);

  return ready;
}
