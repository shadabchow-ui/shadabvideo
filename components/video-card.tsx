import Link from "next/link";
import { RawVideo } from "lib/types";
import { SensitiveLabel } from "components/sensitive-label";

export function VideoCard({ video }: { video: RawVideo }) {
  return (
    <Link
      href={`/videos/${video.slug}`}
      className="group flex flex-col overflow-hidden rounded-md border border-neutral-200 bg-white hover:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-500"
    >
      <div className="relative aspect-video w-full bg-neutral-200 dark:bg-neutral-800">
        <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-sm">
          {video.title}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center gap-2 flex-wrap">
          <SensitiveLabel level={video.sensitivity} />
          <span className="text-xs text-neutral-500 dark:text-neutral-400">
            {video.category}
          </span>
          <span className="text-xs text-neutral-400 dark:text-neutral-600">
            {video.date}
          </span>
        </div>
        <p className="text-sm font-semibold text-neutral-900 group-hover:underline dark:text-neutral-100">
          {video.title}
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
          {video.dek}
        </p>
        <span className="mt-auto pt-2 text-xs font-medium text-neutral-500 dark:text-neutral-400">
          View footage and context →
        </span>
      </div>
    </Link>
  );
}
