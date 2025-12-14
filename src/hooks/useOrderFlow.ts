'use client';

import { create, type StateCreator } from 'zustand';

export type ServiceType = 'human' | 'machine';
export type LanguageCode = string;

export type OrderDraft = {
  service: ServiceType;
  from: LanguageCode;
  to: LanguageCode[];
  words: number;
  pricePerWord: number;
  total: number;
  file?: File | null;
  email?: string;
  notes?: string;
  tone?: 'informal' | 'friendly' | 'business' | 'formal';
};

export type OrderFlowState = {
  step: 0 | 1 | 2 | 3;
  draft: OrderDraft;
  set: (p: Partial<OrderDraft>) => void;
  setStep: (s: OrderFlowState['step']) => void;
  reset: () => void;
};

const initial: OrderDraft = {
  service: 'human',
  from: 'en',
  to: ['en'],
  words: 0,
  pricePerWord: 0.07,
  total: 0,
  file: null,
  notes: '',
  tone: 'informal',
};

const creator: StateCreator<OrderFlowState> = (set) => ({
  step: 0,
  draft: initial,
  set: (p) => set((s) => ({ draft: { ...s.draft, ...p } })),
  setStep: (step) => set({ step }),
  reset: () => set({ step: 0, draft: initial }),
});

export const useOrderFlow = create<OrderFlowState>(creator);
