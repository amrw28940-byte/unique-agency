import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'أفضل شركة تصميم مواقع في الرياض | برمجة Next.js',
  description: 'احصل على تصميم موقع احترافي في الرياض بأحدث تقنيات Next.js...',
  alternates: {
    canonical: 'https://yourwebsite.com/riyadh-web-design',
  },
};

export default function RiyadhLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}