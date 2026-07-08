import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPost } from '@/lib/api';
import { getTitle, getBody, getAuthor, getInitials } from '@/lib/types';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  try {
    const post = await getPost(id);
    return {
      title: getTitle(post),
      description: getBody(post).slice(0, 150),
    };
  } catch {
    return { title: 'Post not found' };
  }
}

export default async function PostPage({ params }: Props) {
  const { id } = await params;

  let post;
  try {
    post = await getPost(id);
  } catch {
    notFound();
  }

  const title = getTitle(post);
  const author = getAuthor(post);
  const image = post.image || post.avatar;

  return (
    <article className="mx-auto max-w-2xl px-6 py-12">
      <Link
        href="/"
        className="text-sm font-medium text-brand hover:text-brand-dark"
      >
        ← All posts
      </Link>

      <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h1>

      <div className="mt-4 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-light text-xs font-semibold text-brand">
          {getInitials(author)}
        </span>
        <div className="text-sm">
          <p className="font-medium text-slate-700">{author}</p>
          {post.createdAt && (
            <time dateTime={post.createdAt} className="text-slate-400">
              {new Date(post.createdAt).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          )}
        </div>
      </div>

      {image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt=""
          className="mt-8 aspect-[16/9] w-full rounded-xl object-cover"
        />
      )}

      <p className="mt-8 whitespace-pre-line text-lg leading-relaxed text-slate-700">
        {getBody(post)}
      </p>
    </article>
  );
}
