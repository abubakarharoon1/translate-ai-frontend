'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { AuthService } from '@/services/auth.service';

export default function ResetPasswordPage() {
  const sp = useSearchParams();
  const token = sp.get('token') || '';
  const router = useRouter();

  const [pw, setPw] = useState('');
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await AuthService.resetPassword(token, pw);
      setInfo('Password reset! You can log in now.');
      setTimeout(() => router.replace('/auth/login'), 800);
    } catch (e: any) {
      setInfo(e?.message || 'Reset failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#e9f0fa] flex items-center justify-center p-6">
      <form onSubmit={onSubmit} className="bg-white p-8 rounded shadow w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold">Set a new password</h1>
        <input
          type="password" value={pw} onChange={(e) => setPw(e.target.value)}
          placeholder="New password" required
          className="border px-3 py-2 rounded w-full"
        />
        <button disabled={loading} className="w-full bg-[#0a1f4f] text-white py-2 rounded">
          {loading ? 'Saving…' : 'Reset Password'}
        </button>
        {info && <p className="text-sm text-gray-700">{info}</p>}
      </form>
    </div>
  );
}
