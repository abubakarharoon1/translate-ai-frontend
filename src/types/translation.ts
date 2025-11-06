export type CreateTranslationDto = { text: string; source: string; target: string; package: 'ai' | 'human' };
export type Translation = { id: string; status: 'queued'|'processing'|'done'|'failed'; result?: string };
