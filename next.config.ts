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
        source: '/:path((?!blog|wp-admin|api|_next|favicon.ico).*)',
        destination: '/blog/:path',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;