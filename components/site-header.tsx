import Link from "next/link";
import { site } from "lib/site";

export function SiteHeader() {
  return (
    <header className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link
          href="/"
          className="text-sm font-semibold text-neutral-900 dark:text-neutral-100"
        >
          {site.name}
        </Link>
        <nav className="flex items-center gap-5 text-sm text-neutral-600 dark:text-neutral-400">
          <Link href="/videos" className="hover:text-neutral-900 dark:hover:text-neutral-100">
            Archive
          </Link>
          <Link href="/about" className="hover:text-neutral-900 dark:hover:text-neutral-100">
            About
          </Link>
          <Link href="/viewer-discretion" className="hover:text-neutral-900 dark:hover:text-neutral-100">
            Viewer Discretion
          </Link>
          <a
            href={site.newsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-neutral-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            Full Reports →
          </a>
        </nav>
      </div>
    </header>
  );
}
