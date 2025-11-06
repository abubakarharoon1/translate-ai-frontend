export const env = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL ?? '',
};

if (!env.apiBaseUrl) {
  // Fail fast in dev
  // eslint-disable-next-line no-console
  console.warn('⚠️ NEXT_PUBLIC_API_BASE_URL is not set');
}
