import { rawVideos } from "lib/videos";
import { VideoCard } from "components/video-card";
import { SiteFooter } from "components/site-footer";

export const metadata = {
  title: "Video Archive",
  description:
    "Browse all raw footage documentation. Full verified reports at ShadabChow.com.",
};

const categories = Array.from(new Set(rawVideos.map((v) => v.category)));

export default function VideosPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
          Raw Footage Archive
        </h1>
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
          {rawVideos.length} items — each linked to a full verified report at
          ShadabChow.com.
        </p>

        {categories.map((cat) => {
          const videos = rawVideos.filter((v) => v.category === cat);
          return (
            <section key={cat} className="mt-10">
              <h2 className="mb-4 border-b border-neutral-200 pb-2 text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
                {cat}
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {videos.map((video) => (
                  <VideoCard key={video.slug} video={video} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
      <SiteFooter />
    </>
  );
}
