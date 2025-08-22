import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['voltamp.ee', 'images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
  },


  async redirects() {
    return [
      {
        source: '/',
        destination: '/et',
        permanent: true,
      },
      {
        source: '/kontakt',
        destination: '/et/kontakt',
        permanent: true,
      },
      {
        source: '/integreeritav-päikesekatus',
        destination: '/et/integreeritav-paikesekatus/taiskatuse-susteem',
        permanent: true,
      },
    ];
  },

  compress: true,
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,

  experimental: {
    optimizeCss: true,
    scrollRestoration: true
  },
};

export default nextConfig;
