'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { AuthService } from '@/services/auth.service';

export default function VerifyEmailPage() {
  const sp = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<'loading'|'ok'|'error'>('loading');
  const [msg, setMsg] = useState<string>('Verifying…');

  useEffect(() => {
    const token = sp.get('token');
    if (!token) { setStatus('error'); setMsg('Missing token'); return; }
    (AuthService as any).verifyEmail(token)
      .then(() => { setStatus('ok'); setMsg('Email verified! You can log in now.'); })
      .catch((e: unknown) => {
  setStatus("error");
  const message =
    typeof e === "object" && e !== null && "message" in e
      ? String((e as any).message)
      : "Verification failed";
  setMsg(message);
});

  }, [sp]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e9f0fa] p-6">
      <div className="max-w-md w-full bg-white p-8 rounded shadow text-center">
        <h1 className="text-2xl font-bold mb-4">Verify Email</h1>
        <p className={status === 'error' ? 'text-red-600' : 'text-gray-700'}>{msg}</p>
        {status !== 'loading' && (
          <button className="mt-6 bg-[#0a1f4f] text-white px-4 py-2 rounded" onClick={() => router.replace('/auth/login')}>
            Go to Login
          </button>
        )}
      </div>
    </div>
  );
}
