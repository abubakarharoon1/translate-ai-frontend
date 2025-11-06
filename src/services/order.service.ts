// src/services/order.service.ts
import { apiFetch } from '@/lib/https/fetch-client';
import { endpoints } from '@/config/endpoints';
import type { CreateOrderDto, Order } from '@/types/order';

export const OrderService = {
  list() {
    return apiFetch<Order[]>(endpoints.orders.list);
  },
  get(id: string) {
    return apiFetch<Order>(endpoints.orders.byId(id));
  },
  create(dto: CreateOrderDto) {
    return apiFetch<Order>(endpoints.orders.create, { method: 'POST', json: dto });
  },
};
