import { Sensitivity } from "lib/types";

const config: Record<Sensitivity, { label: string; classes: string }> = {
  standard: {
    label: "Standard",
    classes:
      "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300",
  },
  disturbing: {
    label: "Disturbing Content",
    classes: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  },
  graphic: {
    label: "Graphic Content",
    classes: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  },
};

export function SensitiveLabel({ level }: { level: Sensitivity }) {
  const { label, classes } = config[level];
  return (
    <span
      className={`inline-block rounded px-2 py-0.5 text-xs font-semibold uppercase tracking-wide ${classes}`}
    >
      {label}
    </span>
  );
}
