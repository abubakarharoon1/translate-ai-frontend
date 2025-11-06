// src/services/admin.service.ts
import { endpoints } from '@/config/endpoints';

function getAuthHeader(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function http<T>(url: string, init?: RequestInit): Promise<T> {
  const headers: HeadersInit = {
    Accept: 'application/json',
    ...(init?.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
    ...(init?.headers || {}),
    ...getAuthHeader(),
  };

  const res = await fetch(url, {
    ...init,
    headers,
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

export const AdminService = {
  getStats() {
    return http<{
      totalOrders: number;
      revenue: number;
      users: number;
      avgOrderValue: number;
    }>(endpoints.admin.stats);
  },

  getOrders(params?: { page?: number; limit?: number }) {
    const q = new URLSearchParams();
    if (params?.page) q.set('page', String(params.page));
    if (params?.limit) q.set('limit', String(params.limit));
    const url = `${endpoints.admin.orders}${q.toString() ? `?${q.toString()}` : ''}`;
    return http<{
      items: Array<{
        id: number | string;
        customer: string;
        sourceLang: string;
        targetLang: string;
        status: 'pending' | 'in_progress' | 'completed' | 'canceled';
        words: number;
        price: number;
        createdAt: string;
      }>;
      total: number;
      page: number;
      limit: number;
    }>(url);
  },

  getPricing() {
    return http<Array<{ id: string; name: string; pricePerWord: number; description?: string }>>(
      endpoints.admin.pricing
    );
  },

  updatePricing(payload: Array<{ id: string; pricePerWord: number }>) {
    return http<{ updated: number }>(endpoints.admin.updatePricing, {
      method: 'PUT',
      body: JSON.stringify(payload),
    });
  },

  getFiles() {
    return http<Array<{ id: string; name: string; size: number; uploadedAt: string }>>(
      endpoints.admin.files
    );
  },
};
