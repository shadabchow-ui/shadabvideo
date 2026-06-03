import Link from 'next/link';
import { rawVideos } from 'lib/videos';
import { MAIN_SITE_URL } from 'lib/site';

export const metadata = {
  title: 'All Videos',
  description: 'Full list of raw footage in the Shadab Video Archive.',
};

export default function VideosPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 text-2xl font-bold">All Videos</h1>

      {rawVideos.length === 0 ? (
        <p className="rounded border border-neutral-200 p-6 text-sm text-neutral-500 dark:border-neutral-700">
          No videos published yet. Read the reporting at{' '}
          <a href={MAIN_SITE_URL} target="_blank" rel="noopener noreferrer" className="underline">
            ShadabChow.com
          </a>
          .
        </p>
      ) : (
        <ul className="divide-y divide-neutral-200 dark:divide-neutral-700">
          {rawVideos.map((v) => (
            <li key={v.slug} className="py-4">
              <Link href={`/videos/${v.slug}`} className="text-lg font-medium hover:underline">
                {v.title}
              </Link>
              <p className="mt-1 text-sm text-neutral-500">
                Article:{' '}
                <a
                  href={v.articleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-black dark:hover:text-white"
                >
                  {v.articleTitle}
                </a>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
