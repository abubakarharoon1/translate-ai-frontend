import { http } from '@/lib/https';
import { endpoints } from '@/config/endpoints';

export type CheckoutPayload =
  | { orderId: string }
  | { amount: number; currency: 'usd'; orderDraft: any };

export const PaymentService = {
  async checkout(payload: CheckoutPayload): Promise<{ clientSecret?: string; redirectUrl?: string }> {
    return http.post(endpoints.payments.checkout, payload);
  },
};
