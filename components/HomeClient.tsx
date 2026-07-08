'use client';

import { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from '@/lib/api';
import { Post, getTitle, getBody } from '@/lib/types';
import SearchBar from './SearchBar';
import PostCard from './PostCard';

export default function HomeClient({ initialPosts }: { initialPosts: Post[] }) {
  const [search, setSearch] = useState('');

  const { data: posts = [] } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    initialData: initialPosts,
  });

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return posts;
    return posts.filter(
      (post) =>
        getTitle(post).toLowerCase().includes(q) ||
        getBody(post).toLowerCase().includes(q)
    );
  }, [posts, search]);

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="mb-10 max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Ideas worth reading.
        </h1>
        <p className="mt-3 text-slate-500">
          {posts.length} posts, fetched fresh on every load.
        </p>
      </div>

      <SearchBar value={search} onChange={setSearch} resultCount={filtered.length} />

      {filtered.length === 0 ? (
        <p className="text-slate-500">
          Nothing matches “{search}”. Try a different word.
        </p>
      ) : (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </ul>
      )}
    </div>
  );
}
