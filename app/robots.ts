import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'], // لمنع أرشفة ملفات الـ API الخاصة بـ Next.js
    },
    sitemap: 'https://www.uniquee-ws.com/sitemap.xml',
  }
}