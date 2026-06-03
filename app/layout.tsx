import { GeistSans } from 'geist/font/sans';
import { ReactNode } from 'react';
import './globals.css';
import { SITE_NAME, SITE_URL } from 'lib/site';
import Link from 'next/link';
import { MAIN_SITE_URL } from 'lib/site';

export const metadata = {
  metadataBase: SITE_URL ? new URL(SITE_URL) : undefined,
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  robots: {
    follow: false,
    index: false,
  },
};

function SiteNav() {
  return (
    <nav className="flex items-center justify-between border-b border-neutral-200 px-4 py-3 dark:border-neutral-700">
      <Link href="/" className="text-sm font-semibold uppercase tracking-wide">
        {SITE_NAME}
      </Link>
      <div className="flex gap-6 text-sm">
        <Link href="/videos" className="text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white">
          Videos
        </Link>
        <Link href="/about" className="text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white">
          About
        </Link>
        <a
          href={MAIN_SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white"
        >
          ShadabChow.com ↗
        </a>
      </div>
    </nav>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
        <SiteNav />
        <main>{children}</main>
      </body>
    </html>
  );
}
