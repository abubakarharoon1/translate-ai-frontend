// src/types/pricing.ts

export type PricingCardPublic = {
  id: number;
  key: 'human' | 'machine' | 'proof' | 'official';

  // UI fields
  name: string;           // mapped from backend `title`
  subtitle?: string;
  description?: string;

  rate: number;           // price per word (number)
  deliveryHours: number;
  bestSeller?: boolean;

  // bullet points (mapped from ServiceCard.features)
  features: { icon: string | null; text: string }[];

  // allowed language codes per card (from backend JSON fields)
  fromLanguages?: string[];
  toLanguages?: string[];
};
