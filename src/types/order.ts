// src/types/order.ts
export type ServiceType = 'human' | 'machine';
export type VoiceTone = 'informal' | 'friendly' | 'business' | 'formal';

export type OrderStatus =
  | 'draft'
  | 'pending_payment'
  | 'paid'
  | 'processing'
  | 'delivered'
  | 'failed'
  | 'canceled';

export interface OrderItem {
  service: ServiceType;
  from: string;          // language code
  to: string[];          // one or more targets
  words: number;
  pricePerWord: number;  // USD
  total: number;         // USD
}

export interface CreateOrderDto {
  email: string;
  notes?: string;
  tone?: VoiceTone;
  promo?: string;
  // summary for server (mirrors your store)
  item: OrderItem;
  // OPTIONAL: if you upload first and send a key
  fileKey?: string;
}

export interface Order {
  id: string;
  status: OrderStatus;
  email: string;
  notes?: string;
  tone?: VoiceTone;
  promo?: string;
  item: OrderItem;
  fileKey?: string;
  createdAt: string; // ISO
  updatedAt: string; // ISO
}
