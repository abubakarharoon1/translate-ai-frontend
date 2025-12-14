// src/services/admin.service.ts
import { endpoints } from '@/config/endpoints';

function getAuthHeader(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4001';

async function http<T>(path: string, init?: RequestInit): Promise<T> {
  const url = path.startsWith('http') ? path : `${API_BASE}${path}`;
  console.log('[Admin HTTP] url =', url); 

  const headers: HeadersInit = {
    Accept: 'application/json',
    ...(init?.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
    ...(init?.headers || {}),
    ...getAuthHeader(),
  };

  const res = await fetch(url, {
    ...init,
    headers,
  });

  const raw = await res.text();

  if (!res.ok) {
    let msg = raw;
    try {
      const parsed = JSON.parse(raw);
      msg = parsed?.message ?? msg;
    } catch {}
    throw new Error(Array.isArray(msg) ? msg.join(', ') : msg || `HTTP ${res.status}`);
  }

  try {
    return JSON.parse(raw) as T;
  } catch {
    return raw as unknown as T;
  }
}


/* -------------------------------------------------------------------------- */
/*                               Type Definitions                             */
/*                               Type Definitions                             */
/* -------------------------------------------------------------------------- */

export type ServiceCardAdmin = {
  id: number;
  key: 'human' | 'machine' | 'proof' | 'official';
  title: string;
  subtitle?: string;
  description?: string;
  pricePerWord: string;
  basePriceUSD: string;
  deliveryHours: number;
  bestSeller: boolean;
  active: boolean;
  sort: number;
  features?: string[];
  fromLanguages?: string[];
  toLanguages?: string[];
};

/* -------------------------------------------------------------------------- */
/*                                Admin Service                               */
/* -------------------------------------------------------------------------- */

export const AdminService = {
  /* ----------------------------- Dashboard stats ----------------------------- */
  getStats() {
    return http<{
      totalOrders: number;
      revenue: number;
      users: number;
      avgOrderValue: number;
    }>(endpoints.admin.stats);
  },

  /* --------------------------------- Orders --------------------------------- */
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

  /* ---------------------------------- Files --------------------------------- */
  getFiles() {
    return http<Array<{ id: string; name: string; size: number; uploadedAt: string }>>(
      endpoints.admin.files
    );
  },

  /* ----------------------------- Service Cards ------------------------------ */
  async listServiceCards(): Promise<ServiceCardAdmin[]> {
    // match backend controller: @Controller('admin/service-cards')
    return http<ServiceCardAdmin[]>('/admin/service-cards');
  },

  async createServiceCard(
    data: Omit<ServiceCardAdmin, 'id'>,
  ): Promise<ServiceCardAdmin> {
    return http<ServiceCardAdmin>('/admin/service-cards', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async updateServiceCard(
    id: number,
    data: Partial<ServiceCardAdmin>,
  ): Promise<ServiceCardAdmin> {
    return http<ServiceCardAdmin>(`/admin/service-cards/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  async deleteServiceCard(id: number): Promise<void> {
    await http(`/admin/service-cards/${id}`, {
      method: 'DELETE',
    });
  },
};
