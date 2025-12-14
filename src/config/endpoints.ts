const apiPrefix = '';
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
    create: `${apiPrefix}/orders`,
    list: `${apiPrefix}/orders`,
    byId: (id: string | number) => `${apiPrefix}/orders/${id}`,
  },
  payments: {
    checkout: '/payments/checkout',
    status: (id: string) => `/payments/status/${id}`,
  },
  blogs: {
    list: '/blogs',
    byId: (id: number | string) => `/blogs/${id}`,
  },
  public: {
   pricingCards: '/service-cards',  // ← public GET we built in Nest
  },
admin: {
  stats: '/api/admin/stats',
  orders: '/api/admin/orders',
  serviceCards: '/api/admin/service-cards',
  updatePricing: '/api/admin/pricing',
  files: '/api/admin/files',
},


};
