import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/et',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
