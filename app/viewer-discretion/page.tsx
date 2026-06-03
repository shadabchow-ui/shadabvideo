import Link from 'next/link';
import { MAIN_SITE_URL } from 'lib/site';

export const metadata = {
  title: 'Viewer Discretion',
  description: 'Content advisory for the Shadab Raw Video Archive.',
};

export default function ViewerDiscretionPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="mb-4 text-2xl font-bold">Viewer Discretion</h1>
      <p className="mb-4 text-neutral-700 dark:text-neutral-300">
        This archive publishes unedited source footage to support journalistic transparency. Some
        videos may contain content that viewers find disturbing or distressing.
      </p>
      <p className="mb-4 text-neutral-700 dark:text-neutral-300">
        All footage is published without commercial intent, solely as primary-source material
        accompanying investigative reporting on{' '}
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
      <Link href="/" className="text-sm text-neutral-500 hover:underline">
        ← Back to archive
      </Link>
    </div>
  );
}
