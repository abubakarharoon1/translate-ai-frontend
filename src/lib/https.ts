// very small fetch wrapper with baseURL + JSON/FormData handling
const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4001';

function isFormData(v: unknown): v is FormData {
  return typeof FormData !== 'undefined' && v instanceof FormData;
}

async function request<T>(url: string, init: RequestInit = {}): Promise<T> {
  const token = typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;

  const headers: HeadersInit = {
    ...(init.headers || {}),
    ...(isFormData(init.body) ? {} : { 'Content-Type': 'application/json' }),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const res = await fetch(`${BASE_URL}${url}`, { ...init, headers, credentials: 'include' });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    let err: any = text ? (() => { try { return JSON.parse(text);} catch { return { message: text }; } })() : {};
    throw new Error(err?.message || res.statusText);
  }
  // try json; if not json, return as any
  const ct = res.headers.get('content-type') || '';
  if (ct.includes('application/json')) return res.json() as Promise<T>;
  return (await res.text()) as unknown as T;
}

export const http = {
  get: <T>(url: string) => request<T>(url, { method: 'GET' }),
  post: <T>(url: string, body?: any) =>
    request<T>(url, { method: 'POST', body: isFormData(body) ? body : JSON.stringify(body) }),
  put:  <T>(url: string, body?: any) =>
    request<T>(url, { method: 'PUT', body: isFormData(body) ? body : JSON.stringify(body) }),
  del:  <T>(url: string) => request<T>(url, { method: 'DELETE' }),
};
