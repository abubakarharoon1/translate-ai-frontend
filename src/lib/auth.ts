'use client';
export const tokenStorage = {
  set(token: string) { localStorage.setItem('access_token', token); },
  clear() { localStorage.removeItem('access_token'); },
  get() { return localStorage.getItem('access_token'); },
};
