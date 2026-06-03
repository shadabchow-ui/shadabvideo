import { site } from "lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              {site.name}
            </p>
            <p className="mt-1 max-w-xs text-xs text-neutral-500 dark:text-neutral-400">
              Raw video documentation for public-interest reporting. Full
              verified articles at ShadabChow.com.
            </p>
          </div>
          <nav className="flex flex-col gap-2 text-sm text-neutral-600 dark:text-neutral-400">
            <a
              href={site.newsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              ShadabChow.com / News
            </a>
            <a
              href={site.aboutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              About the Reporting
            </a>
            <a
              href={site.contactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              Contact
            </a>
          </nav>
        </div>
        <p className="mt-8 text-xs text-neutral-400 dark:text-neutral-600">
          &copy; {year} Shadab Chow. Raw footage archive. No advertising. No
          sponsored content.
        </p>
      </div>
    </footer>
  );
}
