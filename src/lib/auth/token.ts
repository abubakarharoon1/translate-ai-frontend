// src/lib/auth/token.ts
export function setToken(token: string) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('token', token);
  // optional: also set a cookie for SSR fetches if you need it later
  document.cookie = `access_token=${token}; path=/; SameSite=Lax`;
}

export function getToken() {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('token');
}

export function removeToken() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('token');
  document.cookie = 'access_token=; Max-Age=0; path=/; SameSite=Lax';
}

export function decodeToken<T = any>(token: string): T | null {
  try {
    const base64 = token.split('.')[1];
    return JSON.parse(atob(base64)) as T;
  } catch {
    return null;
  }
}

export function isAuthenticated() {
  const token = getToken();
  if (!token) return false;
  try {
    const payload = decodeToken<{ exp?: number }>(token);
    if (!payload?.exp) return true;
    return payload.exp > Math.floor(Date.now() / 1000);
  } catch {
    return false;
  }
}
