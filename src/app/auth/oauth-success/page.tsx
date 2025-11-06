'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { setToken } from '@/lib/auth/token';

export default function OAuthSuccess() {
  const sp = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const token = sp.get('token');
    if (token) {
      setToken(token);
      router.replace('/'); // or /dashboard
    } else {
      router.replace('/auth/login?error=oauth');
    }
  }, [sp, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">Completing sign-in…</div>
  );
}
