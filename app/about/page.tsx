import { SiteFooter } from "components/site-footer";
import { site } from "lib/site";

export const metadata = {
  title: "About This Archive",
  description:
    "About the Shadab Video Archive — raw footage connected to verified reporting at ShadabChow.com.",
};

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-12 md:px-6">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
          About This Archive
        </h1>

        <div className="prose prose-neutral mt-6 dark:prose-invert">
          <p>
            The Shadab Video Archive is a raw footage repository connected to
            the reporting of Shadab Chow. It exists to preserve and surface
            video documentation of news events alongside the verified written
            reporting where that footage is properly contextualized.
          </p>

          <h2>Full reporting lives at ShadabChow.com</h2>
          <p>
            Raw footage alone is rarely sufficient to understand an event.
            Every video in this archive has a corresponding article at{" "}
            <a
              href={site.newsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              ShadabChow.com
            </a>{" "}
            that documents the verified timeline, sources, official statements,
            and what remains unconfirmed. Readers are strongly encouraged to
            read the full report before drawing conclusions.
          </p>

          <h2>Sensitive footage</h2>
          <p>
            This archive may include footage that depicts violence, injury,
            civil unrest, or other disturbing content. All such content is
            published with clear sensitivity labels and viewer-discretion
            notices. The purpose is documentation and public-interest
            reporting, not shock value.
          </p>

          <h2>No advertising on this archive</h2>
          <p>
            This raw video archive does not run advertising. It is not
            monetized through ad networks, affiliate links, or sponsored
            placements.
          </p>

          <h2>Contact and about the reporter</h2>
          <p>
            For information about Shadab Chow&apos;s reporting, corrections, or
            tips, visit the main site.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-2 text-sm">
          <a
            href={site.aboutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-neutral-600 underline hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            About Shadab Chow →
          </a>
          <a
            href={site.contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-neutral-600 underline hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            Contact →
          </a>
          <a
            href={site.newsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-neutral-600 underline hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            Read the News →
          </a>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
