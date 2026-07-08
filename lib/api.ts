import { Post } from './types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error(
    'NEXT_PUBLIC_API_URL is not set. Add it to .env.local locally, and to your Vercel project\'s Environment Variables when deploying.'
  );
}

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${API_URL}/posts`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error(`Failed to fetch posts (status ${res.status})`);
  }
  return res.json();
}

export async function getPost(id: string): Promise<Post> {
  const res = await fetch(`${API_URL}/posts/${id}`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error(`Failed to fetch post ${id} (status ${res.status})`);
  }
  return res.json();
}
