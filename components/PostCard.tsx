import Link from 'next/link';
import { Post, getTitle, getBody, getAuthor, getInitials } from '@/lib/types';

const FALLBACK_TINTS = ['bg-brand-light', 'bg-amber-50', 'bg-emerald-50'];

function fallbackTint(id: string) {
  return FALLBACK_TINTS[id.charCodeAt(0) % FALLBACK_TINTS.length];
}

export default function PostCard({ post }: { post: Post }) {
  const title = getTitle(post);
  const author = getAuthor(post);
  const excerpt = getBody(post).slice(0, 110);
  const image = post.image || post.avatar;

  return (
    <li>
      <Link href={`/posts/${post.id}`} className="group block h-full focus:outline-none">
        <article className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-200 group-hover:-translate-y-1 group-hover:border-slate-300 group-hover:shadow-lg group-hover:shadow-slate-200/60">
          <div className={`relative aspect-[16/10] overflow-hidden ${fallbackTint(post.id)}`}>
            {image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={image}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <span className="text-3xl font-bold text-brand/30">
                  {getInitials(title)}
                </span>
              </div>
            )}
          </div>

          <div className="flex flex-1 flex-col p-5">
            <h2 className="text-base font-bold leading-snug tracking-tight text-slate-900 group-hover:text-brand transition-colors">
              {title}
            </h2>
            <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-500">
              {excerpt}
              {excerpt.length === 110 ? '…' : ''}
            </p>

            <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-light text-[10px] font-semibold text-brand">
                {getInitials(author)}
              </span>
              <span className="text-xs text-slate-500">{author}</span>
              {post.createdAt && (
                <>
                  <span className="text-slate-300">·</span>
                  <time dateTime={post.createdAt} className="text-xs text-slate-400">
                    {new Date(post.createdAt).toLocaleDateString(undefined, {
                      month: 'short',
                      day: 'numeric',
                    })}
                  </time>
                </>
              )}
            </div>
          </div>
        </article>
      </Link>
    </li>
  );
}
