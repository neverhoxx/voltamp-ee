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
        source: '/integreeritav-p%C3%A4ikesekatus',
        destination: '/et/integreeritav-paikesekatus/taiskatuse-susteem',
        permanent: true,
      },
      {
        source: '/p%C3%A4ikesepaneelide-seadmed',
        destination: '/et/tooted/seadmed',
        permanent: true,
      },
      {
        source: '/katuset%C3%B6%C3%B6d',
        destination: '/et/katuse-paigaldus',
        permanent: true,
      },
      {
        source: '/katuse-paigaldus',
        destination: '/et/katuse-paigaldus',
        permanent: true,
      },
      {
        source: '/pildigalerii/seadmed',
        destination: '/et/tooted/seadmed',
        permanent: true,
      },
      {
        source: '/pildigalerii/standardlahendus',
        destination: '/et',
        permanent: true,
      },
      {
        source: '/k%C3%B5ik-p%C3%A4ikesepaneelide-seadmed',
        destination: '/et/tooted/seadmed',
        permanent: true,
      },
      {
        source: '/meist',
        destination: '/et/meist',
        permanent: true,
      },
      {
        source: '/pildigalerii/autovarjualune',
        destination: '/et',
        permanent: true,
      },
      {
        source: '/pildigalerii/klassikaline-katus',
        destination: '/et',
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
