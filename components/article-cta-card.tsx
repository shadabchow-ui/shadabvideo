type ArticleCtaCardProps = {
  url: string;
  title: string;
};

export function ArticleCtaCard({ url, title }: ArticleCtaCardProps) {
  return (
    <div className="rounded-md border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-700 dark:bg-neutral-900">
      <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wide dark:text-neutral-400">
        Context matters
      </p>
      <p className="mt-2 text-base font-medium text-neutral-900 dark:text-neutral-100">
        The footage is only part of the story.
      </p>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
        Read the full verified report before drawing conclusions.
      </p>
      <ul className="mt-3 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
        <li>— What happened before and after the clip</li>
        <li>— The verified timeline of events</li>
        <li>— Official statements and updates</li>
        <li>— What remains unconfirmed</li>
      </ul>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
      >
        Read the Full Verified Report →
      </a>
      <p className="mt-2 text-xs text-neutral-400 dark:text-neutral-600">
        {title}
      </p>
    </div>
  );
}
