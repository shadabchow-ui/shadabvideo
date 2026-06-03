import Link from "next/link";
import { rawVideos } from "lib/videos";
import { VideoCard } from "components/video-card";
import { SiteFooter } from "components/site-footer";
import { site } from "lib/site";

export const metadata = {
  title: "Shadab Video Archive",
  description:
    "Raw video documentation for public-interest reporting. Full verified articles at ShadabChow.com.",
};

export default function HomePage() {
  const featured = rawVideos.slice(0, 3);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        {/* Hero */}
        <section className="mb-12 border-b border-neutral-200 pb-12 dark:border-neutral-800">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            Raw Video Archive
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 md:text-4xl">
            Documentation for the Public Record
          </h1>
          <p className="mt-4 max-w-2xl text-base text-neutral-600 dark:text-neutral-400">
            This archive hosts unedited footage related to news events covered
            by Shadab Chow. Raw clips are published for newsworthiness,
            documentation, and public-interest reporting. Full verified articles
            — with context, timeline, and sourcing — live at{" "}
            <a
              href={site.newsUrl}
              className="font-medium text-neutral-900 underline dark:text-neutral-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              ShadabChow.com
            </a>
            .
          </p>
          <div className="mt-4 rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-300">
            Some footage in this archive depicts crime, violence, injury, or
            other sensitive events.{" "}
            <Link href="/viewer-discretion" className="font-medium underline">
              Read our viewer-discretion policy.
            </Link>
          </div>
          <div className="mt-6 flex gap-4">
            <Link
              href="/videos"
              className="rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              Browse the Archive
            </Link>
            <a
              href={site.newsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-neutral-300 px-5 py-2.5 text-sm font-semibold text-neutral-700 hover:border-neutral-500 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-500"
            >
              Read Verified Reports →
            </a>
          </div>
        </section>

        {/* Featured videos */}
        <section className="mb-12">
          <h2 className="mb-6 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            Recent Documentation
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((video) => (
              <VideoCard key={video.slug} video={video} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/videos"
              className="text-sm font-medium text-neutral-600 underline hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              View all footage in the archive →
            </Link>
          </div>
        </section>

        {/* Public interest note */}
        <section className="rounded-md border border-neutral-200 bg-neutral-100 px-6 py-8 dark:border-neutral-800 dark:bg-neutral-900">
          <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
            Why a separate video archive?
          </h2>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            Raw footage is valuable for the public record, but a clip without
            context can mislead. This archive exists to preserve the footage
            while directing viewers to the full reporting. Every video page
            links directly to the verified article where the footage is
            properly contextualized.
          </p>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
            This archive does not run advertising. There are no sponsored
            posts, affiliate links, or monetized redirects.
          </p>
        </section>
      </div>
      <SiteFooter />
    </>
  );
}
