import type { MetadataRoute } from 'next';
import { getPosts } from '@/lib/api';
import { getSiteUrl } from '@/lib/site';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = getSiteUrl();
  const posts = await getPosts();

  return [
    { url: base, lastModified: new Date() },
    ...posts.map((post) => ({
      url: `${base}/posts/${post.id}`,
      lastModified: new Date(),
    })),
  ];
}
