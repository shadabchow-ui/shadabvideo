import Link from "next/link";
import { SiteFooter } from "components/site-footer";
import { site } from "lib/site";

export const metadata = {
  title: "Viewer Discretion Policy",
  description:
    "How and why raw footage is published on this archive, and what viewers should know before watching.",
};

export default function ViewerDiscretionPage() {
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-12 md:px-6">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
          Viewer Discretion Policy
        </h1>

        <div className="prose prose-neutral mt-6 dark:prose-invert">
          <h2>What this archive contains</h2>
          <p>
            This archive may include footage depicting crime, violence, injury,
            civil unrest, workplace accidents, public safety incidents, and
            other events that some viewers may find disturbing. Content is
            published when it has clear newsworthiness or public-interest value.
          </p>

          <h2>Raw clips do not show full context</h2>
          <p>
            A raw clip captures a moment in time. It does not show what
            happened before or after the recording began. It does not include
            official statements, verified timelines, or investigation findings.
            Every video page in this archive links directly to a full written
            report at{" "}
            <a
              href={site.newsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              ShadabChow.com
            </a>{" "}
            where those details are documented.
          </p>

          <h2>Purpose of this archive</h2>
          <p>
            Content here is published for public-interest reporting,
            documentation, and preservation of the visual record. It is not
            published for shock value or entertainment.
          </p>

          <h2>Advertising</h2>
          <p>
            This raw video archive does not run Google AdSense, display
            advertising, or any sponsored content. There are no monetized
            redirects, countdown timers, or traffic-farming tactics. The full
            reporting at ShadabChow.com may have its own advertising policy,
            which is separate from this archive.
          </p>

          <h2>Sensitivity labels</h2>
          <p>
            Each video is labeled <strong>Standard</strong>,{" "}
            <strong>Disturbing</strong>, or <strong>Graphic</strong> to help
            viewers make an informed decision before watching. These labels are
            editorial judgments, not official classifications.
          </p>
        </div>

        <div className="mt-8 flex gap-4 text-sm">
          <Link
            href="/videos"
            className="font-medium text-neutral-600 underline hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            Browse the Archive
          </Link>
          <Link
            href="/about"
            className="font-medium text-neutral-600 underline hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            About this Archive
          </Link>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
