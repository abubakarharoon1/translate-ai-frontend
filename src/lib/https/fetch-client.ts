// src/lib/https/fetch-client.ts
import { env } from '@/config/env';
import { withAuthHeader } from './auth-header';

type JsonBody = Record<string, any> | FormData | undefined;

export async function apiFetch<T>(
  path: string,
  options?: RequestInit & { json?: JsonBody }
): Promise<T> {
  const url = `${env.apiBaseUrl}${path}`;

  // Build the base init first
  const base: RequestInit = {
    ...options,
    headers: {
      Accept: 'application/json',
      ...(options?.headers || {}),
    },
  };

  // JSON / FormData body handling
  if (options?.json instanceof FormData) {
    base.body = options.json;
  } else if (options?.json) {
    (base.headers as Record<string, string>)['Content-Type'] = 'application/json';
    base.body = JSON.stringify(options.json);
  }

  // Merge auth header (async because server path does a dynamic import)
  const init = await withAuthHeader(base);

  const res = await fetch(url, { ...init, cache: 'no-store', next: { revalidate: 0 } });

  // Basic error handling
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(text || `HTTP ${res.status}`);
  }

  return res.json() as Promise<T>;
}
