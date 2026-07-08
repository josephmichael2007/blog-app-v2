'use client';

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  resultCount: number;
};

export default function SearchBar({ value, onChange, resultCount }: SearchBarProps) {
  return (
    <div className="mb-10">
      <label htmlFor="post-search" className="sr-only">
        Search posts
      </label>
      <div className="relative max-w-md">
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
          />
        </svg>
        <input
          id="post-search"
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search posts..."
          className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition-colors focus:border-brand focus:bg-white"
          aria-describedby="search-result-count"
        />
      </div>
      <p id="search-result-count" className="sr-only" role="status">
        {resultCount} {resultCount === 1 ? 'post' : 'posts'} found
      </p>
    </div>
  );
}
