import { apiFetch } from '@/lib/https/fetch-client';
import { endpoints } from '@/config/endpoints';

export type CheckoutResponse = {
  paymentIntentId: string;
  clientSecret?: string;
  redirectUrl?: string;
};

export const PaymentService = {
  checkout(payload: { orderToken: string; method: 'card' | 'wallet' }) {
    return apiFetch<CheckoutResponse>(endpoints.payments.checkout, {
      method: 'POST',
      json: payload,
    });
  },
  status(id: string) {
    return apiFetch<{ status: string }>(endpoints.payments.status(id));
  },
};
