// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // If you want to keep using Turbopack in dev, this works fine with rewrites.
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:4001/:path*', // NestJS dev server
      },
    ];
  },

  // Optional: if you load images from your API, allow that host here
  // images: {
  //   remotePatterns: [{ protocol: 'http', hostname: 'localhost', port: '4001' }],
  // },
};

export default nextConfig;
