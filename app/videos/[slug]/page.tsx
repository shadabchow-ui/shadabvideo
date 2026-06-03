import { notFound } from 'next/navigation';
import { rawVideos, getVideoBySlug } from 'lib/videos';
import Link from 'next/link';

export async function generateStaticParams() {
  const params = rawVideos.map((v) => ({ slug: v.slug }));
  // Provide a placeholder so output: 'export' validation passes when rawVideos is empty.
  return params.length > 0 ? params : [{ slug: '_placeholder' }];
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const video = getVideoBySlug(slug);
  if (!video) return {};
  return {
    title: video.title,
    description: `Raw footage: ${video.title}. Viewer discretion advised.`,
  };
}

export default async function VideoPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const video = getVideoBySlug(slug);
  if (!video) return notFound();

  const embedUrl = `https://iframe.mediadelivery.net/embed/${video.bunnyLibraryId}/${video.bunnyVideoId}?autoplay=false`;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      {/* Viewer discretion warning */}
      <div className="mb-6 rounded border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-200">
        <strong>Viewer discretion advised.</strong> This is unedited raw footage that may contain
        disturbing content. It is published solely for journalistic transparency.{' '}
        <Link href="/viewer-discretion" className="underline">
          Learn more
        </Link>
        .
      </div>

      <h1 className="mb-6 text-2xl font-bold">{video.title}</h1>

      {/* Bunny Stream iframe embed */}
      <div className="relative mb-8 w-full" style={{ paddingTop: '56.25%' }}>
        <iframe
          src={embedUrl}
          className="absolute inset-0 h-full w-full rounded"
          allowFullScreen
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
          title={video.title}
        />
      </div>

      {/* Article CTA */}
      <div className="rounded border border-neutral-200 p-5 dark:border-neutral-700">
        <p className="mb-2 text-sm text-neutral-500">Read the full investigative article:</p>
        <a
          href={video.articleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline hover:text-black dark:hover:text-white"
        >
          {video.articleTitle} ↗
        </a>
      </div>

      <div className="mt-6">
        <Link href="/videos" className="text-sm text-neutral-500 hover:underline">
          ← All videos
        </Link>
      </div>
    </div>
  );
}
