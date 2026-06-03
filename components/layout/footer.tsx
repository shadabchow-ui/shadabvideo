import Link from 'next/link';
import { MAIN_SITE_URL, SITE_NAME } from 'lib/site';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-neutral-200 py-8 text-sm text-neutral-500 dark:border-neutral-700 dark:text-neutral-400">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-2 px-4 md:flex-row md:justify-between">
        <p>&copy; {year} {SITE_NAME}. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/viewer-discretion" className="hover:underline">Viewer Discretion</Link>
          <a href={MAIN_SITE_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">
            ShadabChow.com ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
