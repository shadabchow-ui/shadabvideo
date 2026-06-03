export function ViewerWarning() {
  return (
    <div className="rounded-md border border-amber-300 bg-amber-50 px-5 py-4 text-sm text-amber-900 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-200">
      <p className="font-semibold">Viewer discretion advised.</p>
      <p className="mt-1">
        This page may contain disturbing footage related to crime, violence,
        injury, public safety incidents, or other sensitive events. It is
        provided for newsworthiness, documentation, and public-interest
        reporting.
      </p>
    </div>
  );
}
