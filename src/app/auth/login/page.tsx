// src/app/auth/login/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AuthService } from '@/services/auth.service';
import { decodeToken, setToken } from '@/lib/auth/token';

type JwtPayload = { userId: number; role?: string; exp?: number };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function validate(field: 'email' | 'password', value: string) {
    let msg = '';
    if (field === 'email') {
      const v = value.trim();
      if (!v) msg = 'Email is required';
      else if (!EMAIL_RE.test(v)) msg = 'Enter a valid email address';
    } else if (field === 'password') {
      if (!value) msg = 'Password is required';
      // Optional: add more checks here
    }
    setErrors((e) => ({ ...e, [field]: msg || undefined }));
    return !msg;
  }

  const isFormValid = () =>
    validate('email', form.email) && validate('password', form.password);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isFormValid()) return;

    try {
      setLoading(true);
      const payloadToSend = {
        email: form.email.trim().toLowerCase(),
        password: form.password,
      };
      const { token } = await AuthService.login(payloadToSend);
      setToken(token);

      const payload = decodeToken<JwtPayload>(token);
      if (payload?.role === 'superadmin') router.replace('/admin');
      else router.replace('/');
    } catch (err: any) {
      alert(err?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#e9f0fa] flex flex-col items-center pt-20 px-4">
      <p className="mb-2 text-sm text-gray-700">
        Don’t have an account?{' '}
        <a href="/auth/signup" className="underline text-blue-700 hover:text-blue-900">Sign up</a>
      </p>

      <h1 className="text-4xl font-bold mb-4 text-[#0a1f4f]">Log in</h1>

      <form onSubmit={onSubmit} noValidate className="w-full max-w-md mt-10 mb-10 space-y-5 bg-white p-8 rounded-md shadow">
        <div>
          <label htmlFor="email" className="block mb-1 text-gray-600 text-sm font-semibold">Email</label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setForm({ ...form, email: e.target.value });
              if (errors.email) validate('email', e.target.value);
            }}
            onBlur={(e) => validate('email', e.target.value)}
            placeholder="Your email"
            className={`border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-500'}`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            required
          />
          {errors.email && <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        <div className="relative">
          <label htmlFor="password" className="block mb-1 text-gray-600 text-sm font-semibold">Password</label>
          <input
            id="password"
            type={show ? 'text' : 'password'}
            value={form.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setForm({ ...form, password: e.target.value });
              if (errors.password) validate('password', e.target.value);
            }}
            onBlur={(e) => validate('password', e.target.value)}
            placeholder="Your password"
            className={`border rounded-md px-3 py-2 pr-12 w-full focus:outline-none focus:ring-2 ${errors.password ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-500'}`}
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? 'password-error' : undefined}
            required
          />
          <button type="button" className="absolute right-3 top-8 text-gray-500" onClick={() => setShow(!show)}>
            {show ? 'Hide' : 'Show'}
          </button>
          {errors.password && <p id="password-error" className="mt-1 text-sm text-red-600">{errors.password}</p>}
        </div>

        <button
          type="submit"
          disabled={loading || !!errors.email || !!errors.password || !form.email || !form.password}
          className="w-full bg-[#0a1f4f] text-white py-2 rounded-md font-semibold hover:bg-[#172b70] transition disabled:opacity-60"
        >
          {loading ? 'Logging in…' : 'Log In'}
        </button>

        <div className="text-right">
          <a href="/auth/forgot-password" className="text-sm text-blue-700 hover:text-blue-900 underline">
            Forgot password?
          </a>
        </div>
      </form>
    </div>
  );
}
