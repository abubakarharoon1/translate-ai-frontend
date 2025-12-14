// src/types/order.ts
export type Tone = 'informal' | 'friendly' | 'business' | 'formal';

export type CreateOrderRequest = {
  service: 'human' | 'machine';
  from: string;
  to: string[]; // e.g. ['en']

  notes?: string;
  promo?: string;
  text?: string;  // if you later support pasted text

  email?: string; // guest email
  tone?: Tone;

  pricePerWord: number;
  words: number;

  meta?: Record<string, unknown>;
};

export interface Order {
  id: number;
  orderToken: string;
  service: 'human' | 'machine';
  from: string;
  to: string[];
  words: number;
  pricePerWord: string;
  total: string;
  notes?: string;
  tone?: string;
  promo?: string;
  guestEmail?: string;
  text?: string;
  status: string;
  paymentStatus: string;
  currency: string;
  createdAt: string;
  updatedAt: string;
  // add extra fields later if you need them
}
