import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black text-neutral-400">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm">
        <p className="font-semibold text-white">Shadab Chow Video Archive</p>
        <p className="mt-2">
          Viewer-discretion footage is provided for documentation and public-interest reporting.
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          <Link href="/videos" className="hover:text-white">
            Videos
          </Link>
          <Link href="/viewer-discretion" className="hover:text-white">
            Viewer Discretion
          </Link>
          <Link href="https://shadabchow.com/news" className="hover:text-white">
            Main News Site
          </Link>
        </div>
      </div>
    </footer>
  );
}
