export const endpoints = {
 auth: {
    login: '/auth/login',
    signup: '/auth/register',
    verifyEmail: '/auth/verify-email',
    forgotPassword: '/auth/forgot-password',
    resetPassword: '/auth/reset-password',
    changePassword: '/auth/change-password',
    google: '/auth/google',
  },
  translations: {
    estimate: '/translations/estimate',
    create: '/translations',
    byId: (id: string) => `/translations/${id}`,
  },
  orders: {
    create: '/orders',
    list: '/orders',
    byId: (id: string) => `/orders/${id}`,
  },
  payments: {
    checkout: '/payments/checkout',
    status: (id: string) => `/payments/status/${id}`,
  },
  blogs: {
    list: '/blogs',
    byId: (id: number | string) => `/blogs/${id}`,
  },
  admin: {
    stats: '/api/admin/stats',            // GET
    orders: '/api/admin/orders',          // GET ?page=&limit=
    pricing: '/api/admin/pricing',        // GET
    updatePricing: '/api/admin/pricing',  // PUT (JSON)
    files: '/api/admin/files',            // GET (placeholder)
  },
};
