'use client';

import { useState } from 'react';
import { AuthService } from '@/services/auth.service';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [info, setInfo] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await AuthService.forgotPassword(email);
      setInfo('If the email exists, a reset link has been sent.');
    } catch (e: any) {
      setInfo(e?.message || 'Request failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#e9f0fa] flex items-center justify-center p-6">
      <form onSubmit={onSubmit} className="bg-white p-8 rounded shadow w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold">Forgot Password</h1>
        <input
          type="email" value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email" required
          className="border px-3 py-2 rounded w-full"
        />
        <button disabled={loading} className="w-full bg-[#0a1f4f] text-white py-2 rounded">
          {loading ? 'Sending…' : 'Send reset link'}
        </button>
        {info && <p className="text-sm text-gray-700">{info}</p>}
      </form>
    </div>
  );
}
