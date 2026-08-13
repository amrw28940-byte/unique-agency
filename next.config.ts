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
        // استهداف أي مسار قديم ليس لديه prefix بكلمة blog أو مسارات النظام
        source: '/((?!blog|wp-admin|api|_next|favicon.ico).*)',
        destination: '/blog/:path*',
        permanent: true, // تحويل دائم 301 لحفظ الأرشفة في جوجل
      },
    ];
  },
};

export default nextConfig;