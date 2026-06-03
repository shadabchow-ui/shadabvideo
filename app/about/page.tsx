import { MAIN_SITE_URL } from 'lib/site';
import Link from 'next/link';

export const metadata = {
  title: 'About',
  description: 'About the Shadab Raw Video Archive.',
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="mb-4 text-2xl font-bold">About This Archive</h1>
      <p className="mb-4 text-neutral-700 dark:text-neutral-300">
        The Shadab Raw Video Archive hosts unedited source footage published alongside investigative
        articles on{' '}
        <a
          href={MAIN_SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-black dark:hover:text-white"
        >
          ShadabChow.com
        </a>
        .
      </p>
      <p className="mb-4 text-neutral-700 dark:text-neutral-300">
        This is a static read-only archive. It does not collect personal data, display advertising,
        or sell any products.
      </p>
      <Link href="/" className="text-sm text-neutral-500 hover:underline">
        ← Back to archive
      </Link>
    </div>
  );
}
