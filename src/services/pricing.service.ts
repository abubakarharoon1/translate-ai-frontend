// src/services/pricing.service.ts
import { apiFetch } from '@/lib/https/fetch-client';
import { endpoints } from '@/config/endpoints';
import type { PricingCardPublic } from '@/types/pricing';

// this matches your Nest ServiceCard entity JSON
type ServiceCardRaw = {
  id: number;
  key: 'human' | 'machine' | 'proof' | 'official';
  title: string;
  subtitle?: string;
  description?: string;
  pricePerWord: string;   // decimal string
  basePriceUSD?: string;
  deliveryHours: number;
  bestSeller: boolean;
  active: boolean;
  sort: number;
  features?: string[];
  fromLanguages?: string[];
  toLanguages?: string[];
};

function toNumber(val: string | number | null | undefined, fallback = 0): number {
  const n = Number(val);
  return Number.isFinite(n) ? n : fallback;
}

export const PricingService = {
  async list(): Promise<PricingCardPublic[]> {
    const rows = await apiFetch<ServiceCardRaw[]>(endpoints.public.pricingCards);

    return rows
      .filter((r) => r.active !== false) // just in case
      .sort((a, b) => (a.sort ?? 0) - (b.sort ?? 0) || a.id - b.id)
      .map((r) => ({
        id: r.id,
        key: r.key,
        name: r.title,
        subtitle: r.subtitle,
        description: r.description,
        rate: toNumber(r.pricePerWord, 0),
        deliveryHours: r.deliveryHours,
        bestSeller: !!r.bestSeller,
        features: (r.features ?? []).map((text) => ({ icon: null, text })),
        fromLanguages: r.fromLanguages,
        toLanguages: r.toLanguages,
      }));
  },
};
