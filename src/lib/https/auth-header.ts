// src/lib/https/auth-header.ts
export const ACCESS_TOKEN_KEY = 'access_token';

function getTokenFromDocument(): string | null {
  if (typeof document === 'undefined') return null;
  const local = localStorage.getItem(ACCESS_TOKEN_KEY);
  if (local) return local;
  const m = document.cookie.match(new RegExp(`(?:^|; )${ACCESS_TOKEN_KEY}=([^;]*)`));
  return m ? decodeURIComponent(m[1]) : null;
}

/**
 * Works on server & client. Reads JWT from cookie/localStorage (client)
 * or from next/headers cookies() (server). Returns a RequestInit with
 * Authorization header merged in if a token exists.
 */
export async function withAuthHeader(init?: RequestInit): Promise<RequestInit> {
  let token: string | null = null;

  if (typeof window !== 'undefined') {
    // CLIENT
    token = getTokenFromDocument();
  } else {
    // SERVER — dynamic import so this module still runs on client
    try {
      const mod = await import('next/headers');
      // In newer Next, cookies() => Promise<ReadonlyRequestCookies>
      const cookieStore = await mod.cookies();
      token = cookieStore.get(ACCESS_TOKEN_KEY)?.value ?? null;
    } catch {
      token = null;
    }
  }

  const headers: HeadersInit = { ...(init?.headers || {}) };
  if (token) (headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;

  return { ...(init || {}), headers };
}
