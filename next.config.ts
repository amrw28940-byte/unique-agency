import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unique-ws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'uniquee-ws.com',
        pathname: '/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/:slug((?!blog|wp-admin|api|_next|favicon.ico|contact|about|services|wordpress-nextjs|$).*)',
        destination: '/blog/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;