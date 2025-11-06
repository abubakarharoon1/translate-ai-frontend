// src/services/auth.service.ts
import { endpoints } from '@/config/endpoints';
import { env } from '@/config/env';

function apiUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  return `${env.apiBaseUrl}${path}`;
}

async function http<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(apiUrl(path), {
    ...init,
    headers: {
      Accept: 'application/json',
      ...(init?.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
      ...(init?.headers ?? {}),
    },
    cache: 'no-store',
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    let msg = '';
    try { msg = (await res.json())?.message; } catch { msg = await res.text(); }
    throw new Error(Array.isArray(msg) ? msg.join(', ') : msg || `HTTP ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export const AuthService = {
  // --- existing ---
  login(body: { email: string; password: string }) {
    return http<{ token: string }>(endpoints.auth.login, {
      method: 'POST',
      body: JSON.stringify(body),
    });
  },

  signup(body: { username: string; email: string; password: string }) {
    return http<{ ok: true; message: string }>(endpoints.auth.signup, {
      method: 'POST',
      body: JSON.stringify(body),
    });
  },

  // --- new: verify email ---
  verifyEmail(token: string) {
    const url = `${endpoints.auth.verifyEmail}?token=${encodeURIComponent(token)}`;
    return http<{ ok: true }>(url, { method: 'GET' });
  },

  // --- new: forgot password ---
  forgotPassword(email: string) {
    return http<{ ok: true; message: string }>(endpoints.auth.forgotPassword, {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  },

  // --- new: reset password ---
  resetPassword(token: string, newPassword: string) {
    return http<{ ok: true }>(endpoints.auth.resetPassword, {
      method: 'POST',
      body: JSON.stringify({ token, newPassword }),
    });
  },

  // --- new: change password (needs JWT header) ---
  changePassword(jwt: string, currentPassword: string, newPassword: string) {
    return http<{ ok: true }>(endpoints.auth.changePassword, {
      method: 'POST',
      headers: { Authorization: `Bearer ${jwt}` },
      body: JSON.stringify({ currentPassword, newPassword }),
    });
  },

  // --- optional helper for a "Continue with Google" button ---
  googleUrl() {
    return apiUrl(endpoints.auth.google);
  },
};
