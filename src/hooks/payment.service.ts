// src/services/payment.service.ts
import { apiFetch } from '@/lib/https/fetch-client';
import { endpoints } from '@/config/endpoints';

export const PaymentService = {
  checkout(payload: { orderToken: string; method?: 'card' | 'wallet' }) {
    return apiFetch<{ paymentIntentId: string; clientSecret?: string }>(
      endpoints.payments.checkout,
      {
        method: 'POST',
        json: payload,
      },
    );
  },

  status(paymentIntentId: string) {
    return apiFetch<{ status: string }>(endpoints.payments.status(paymentIntentId));
  },
};
