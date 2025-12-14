// src/services/order.service.ts
import { apiFetch } from '@/lib/https/fetch-client';
import { endpoints } from '@/config/endpoints';
import type { CreateOrderRequest, Order } from '@/types/order';
import { getToken } from '@/lib/auth/token';

export const OrderService = {
  list() {
    const token = getToken();
    return apiFetch<Order[]>(endpoints.orders.list, {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });
  },

  getById(id: string | number) {
    return apiFetch<Order>(endpoints.orders.byId(String(id)));
  },

  async create(dto: CreateOrderRequest, file?: File) {
    const fd = new FormData();
    fd.set('payload', JSON.stringify(dto));
    if (file) fd.set('file', file);

    const token = getToken();

    return apiFetch<Order>(endpoints.orders.create, {
      method: 'POST',
      body: fd,
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });
  },
};
