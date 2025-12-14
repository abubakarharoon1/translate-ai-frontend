// src/hooks/usePricingCards.ts
'use client';

import { useQuery } from '@tanstack/react-query';
import { PricingService } from '@/services/pricing.service';
import type { PricingCardPublic } from '@/types/pricing';

export function usePricingCards() {
  return useQuery<PricingCardPublic[]>({
    queryKey: ['pricing-cards'],
    queryFn: () => PricingService.list(),
    staleTime: 5 * 60 * 1000,
  });
}
