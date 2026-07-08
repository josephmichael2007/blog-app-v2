import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-brand text-sm font-bold text-white">
            I
          </span>
          <span className="text-lg font-bold tracking-tight">Inkwell</span>
        </Link>
        <nav aria-label="Primary" className="text-sm text-slate-500">
          <Link href="/" className="hover:text-brand transition-colors">
            All posts
          </Link>
        </nav>
      </div>
    </header>
  );
}
