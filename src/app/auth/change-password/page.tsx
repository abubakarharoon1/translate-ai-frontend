'use client';

import { useState } from 'react';
import { AuthService } from '@/services/auth.service';
import { getToken } from '@/lib/auth/token';
import { useRouter } from 'next/navigation';

export default function ChangePasswordPage() {
  const router = useRouter();
  const [form, setForm] = useState({ currentPassword: '', newPassword: '' });
  const [info, setInfo] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const jwt = getToken();
      if (!jwt) { setInfo('Please log in first'); return; }
      await AuthService.changePassword(jwt, form.currentPassword, form.newPassword);
      setInfo('Password changed successfully');
      setTimeout(() => router.replace('/'), 800);
    } catch (e: any) {
      setInfo(e?.message || 'Change failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#e9f0fa] flex items-center justify-center p-6">
      <form onSubmit={onSubmit} className="bg-white p-8 rounded shadow w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold">Change Password</h1>
        <input
          type="password" placeholder="Current password" required
          value={form.currentPassword}
          onChange={(e) => setForm({ ...form, currentPassword: e.target.value })}
          className="border px-3 py-2 rounded w-full"
        />
        <input
          type="password" placeholder="New password" required
          value={form.newPassword}
          onChange={(e) => setForm({ ...form, newPassword: e.target.value })}
          className="border px-3 py-2 rounded w-full"
        />
        <button disabled={loading} className="w-full bg-[#0a1f4f] text-white py-2 rounded">
          {loading ? 'Saving…' : 'Change Password'}
        </button>
        {info && <p className="text-sm text-gray-700">{info}</p>}
      </form>
    </div>
  );
}
