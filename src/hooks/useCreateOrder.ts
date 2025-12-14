// src/hooks/useCreateOrder.ts
'use client';
import { useMutation } from '@tanstack/react-query';
import { OrderService } from '@/services/order.service';
import type { CreateOrderRequest, Order } from '@/types/order';

export function useCreateOrder() {
  return useMutation<Order, Error, { dto: CreateOrderRequest; file?: File }>(
    {
      mutationFn: ({ dto, file }) => OrderService.create(dto, file),
    },
  );
}
