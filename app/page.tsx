import { getPosts } from '@/lib/api';
import HomeClient from '@/components/HomeClient';

// Forces this route to render fresh on every request (real SSR),
// both on localhost and on Vercel.
export const dynamic = 'force-dynamic';

export default async function Home() {
  const posts = await getPosts();
  return <HomeClient initialPosts={posts} />;
}
