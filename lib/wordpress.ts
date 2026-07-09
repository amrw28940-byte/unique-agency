const WORDPRESS_GRAPHQL_ENDPOINT = 'https://unique-ws.com/graphql';

// دالة جلب كل المقالات (تركناها هنا لكي لا تنهار صفحة المقال الفردي بسبب الـ Import)
export async function getAllPosts() {
  const query = `
    query GetAllPosts {
      posts (first: 100) {
        nodes {
          title
          slug
        }
      }
    }
  `;
  try {
    const res = await fetch(WORDPRESS_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
      cache: 'no-store'
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data?.posts?.nodes || [];
  } catch (error) {
    return [];
  }
}

// دالة جلب تفاصيل المقال الواحد لصفحة المقالة الفردية [slug]
export async function getPostBySlug(slug: string) {
  const query = `
    query GetPost($id: ID!) {
      post(id: $id, idType: SLUG) {
        title
        content
        date
        excerpt
      }
    }
  `;
  
  try {
    const res = await fetch(WORDPRESS_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      },
      body: JSON.stringify({ 
        query, 
        variables: { id: decodeURIComponent(slug) } 
      }),
      cache: 'no-store'
    });

    if (!res.ok) return null;

    const json = await res.json();
    return json.data?.post || null;

  } catch (error) {
    console.error(`فشل جلب المقال ${slug}:`, error);
    return null;
  }
}