import { notFound } from "next/navigation";
import Link from "next/link";
import { rawVideos, getVideoBySlug } from "lib/videos";
import { ViewerWarning } from "components/viewer-warning";
import { VideoEmbed } from "components/video-embed";
import { ArticleCtaCard } from "components/article-cta-card";
import { SensitiveLabel } from "components/sensitive-label";
import { SiteFooter } from "components/site-footer";

export async function generateStaticParams() {
  return rawVideos.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const video = getVideoBySlug(slug);
  if (!video) return {};
  return {
    title: video.title,
    description: video.dek,
  };
}

export default async function VideoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const video = getVideoBySlug(slug);
  if (!video) notFound();

  return (
    <>
      <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        {/* Viewer warning — must appear before video */}
        <ViewerWarning />

        {/* Meta */}
        <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
          <SensitiveLabel level={video.sensitivity} />
          <span>{video.category}</span>
          <span>·</span>
          <span>{video.date}</span>
          {video.location && (
            <>
              <span>·</span>
              <span>{video.location}</span>
            </>
          )}
        </div>

        <h1 className="mt-3 text-2xl font-bold leading-snug text-neutral-900 dark:text-neutral-100">
          {video.title}
        </h1>
        <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400">
          {video.dek}
        </p>

        {/* Embed */}
        <div className="mt-6">
          <VideoEmbed src={video.bunnyEmbedUrl} title={video.title} />
        </div>

        {/* Article CTA — immediately after video */}
        <div className="mt-6">
          <ArticleCtaCard
            url={video.mainArticleUrl}
            title={video.mainArticleTitle}
          />
        </div>

        {/* Summary */}
        <section className="mt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            About this footage
          </h2>
          <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
            {video.summary}
          </p>
        </section>

        {/* Key facts */}
        <section className="mt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            Key facts
          </h2>
          <ul className="mt-2 space-y-1.5">
            {video.keyFacts.map((fact, i) => (
              <li
                key={i}
                className="flex gap-2 text-sm text-neutral-700 dark:text-neutral-300"
              >
                <span className="mt-0.5 shrink-0 text-neutral-400">—</span>
                {fact}
              </li>
            ))}
          </ul>
        </section>

        {/* Unresolved questions */}
        <section className="mt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            What remains unverified
          </h2>
          <ul className="mt-2 space-y-1.5">
            {video.unresolvedQuestions.map((q, i) => (
              <li
                key={i}
                className="flex gap-2 text-sm text-neutral-700 dark:text-neutral-300"
              >
                <span className="mt-0.5 shrink-0 text-neutral-400">?</span>
                {q}
              </li>
            ))}
          </ul>
        </section>

        {/* Back link */}
        <div className="mt-10 border-t border-neutral-200 pt-6 dark:border-neutral-800">
          <Link
            href="/videos"
            className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            ← Back to archive
          </Link>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
