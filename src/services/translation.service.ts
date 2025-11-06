import { apiFetch } from '@/lib/https/fetch-client';
import { endpoints } from '@/config/endpoints';
import type { CreateTranslationDto, Translation } from '@/types/translation';

export const TranslationService = {
  estimate(payload: { words: number; package: 'human'|'ai' }) {
    return apiFetch<{ price: number }>(endpoints.translations.estimate, { method: 'POST', json: payload });
  },
  create(dto: CreateTranslationDto) {
    return apiFetch<Translation>(endpoints.translations.create, { method: 'POST', json: dto });
  },
  get(id: string) {
    return apiFetch<Translation>(endpoints.translations.byId(id));
  },
};
