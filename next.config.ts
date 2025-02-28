import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/',
        destination: '/series/hannibal', // Replace with your desired route
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
