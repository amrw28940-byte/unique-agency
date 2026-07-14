import { MetadataRoute } from 'next'

// دالة لجلب المقالات من موقع الووردبريس القديم عبر GraphQL
async function getWordPressPosts() {
  // الرابط القديم للووردبريس اللي عليه إضافة GraphQL
  const WORDPRESS_GRAPHQL_ENDPOINT = 'https://www.unique-ws.com/graphql'

  try {
    const res = await fetch(WORDPRESS_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query GetPostsForSitemap {
            posts(first: 1000) { 
              nodes {
                slug
                modified
              }
            }
          }
        `
      }),
      // كاش لمدة ساعة عشان ميبقاش فيه ضغط على السيرفر ويحدث نفسه تلقائياً
      next: { revalidate: 3600 } 
    })

    const { data } = await res.json()
    return data?.posts?.nodes || []
  } catch (error) {
    console.error('Error fetching WordPress posts:', error)
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // الدومين الجديد لـ Next.js
  const baseUrl = 'https://www.uniquee-ws.com'

  // 1. صفحات الـ Next.js الثابتة (تُضاف يدوياً عند إنشاء صفحة كود جديدة)
  const mainPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/aboutus`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/portfolio`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
  ]

  const servicePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/android`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/backlinks`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/content-writing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/e-commerce`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/seo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/wordpress-nextjs`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ]

  const localSeoPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/SECompanyDubai`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/SEOCompanyEgypt`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/SEOcompanyinRiyadh`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/seocompanyjeddah`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/SEOCompanyKuwait`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/SEOCompanySaudiArabia`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/SEOCompanySharjah`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/SEOCompanyUAE`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/WebsiteDesignCompanySaudiArabia`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/SEOCompanyAlexandria`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
  ]

  // 2. جلب المقالات ديناميكياً من الووردبريس (unique-ws.com)
  const wpPosts = await getWordPressPosts()
  
  // تحويل روابط الووردبريس للشكل الجديد في Next.js (uniquee-ws.com/blog/slug)
  const blogPages: MetadataRoute.Sitemap = wpPosts.map((post: any) => ({
    url: `${baseUrl}/blog/${encodeURIComponent(post.slug)}`,
    lastModified: new Date(post.modified), 
    changeFrequency: 'weekly',
    priority: 0.7
  }))

  // دمج كل الصفحات مع بعضها
  return [...mainPages, ...servicePages, ...localSeoPages, ...blogPages]
}