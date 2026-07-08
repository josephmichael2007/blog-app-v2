import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="text-2xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-3 text-slate-500">
        That post doesn&apos;t exist, or it may have been removed.
      </p>
      <Link href="/" className="mt-6 inline-block font-medium text-brand hover:text-brand-dark">
        ← Back to all posts
      </Link>
    </div>
  );
}
