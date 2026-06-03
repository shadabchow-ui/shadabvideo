import Link from "next/link";

const links = [
  { href: "/", label: "Raw Videos" },
  { href: "/videos", label: "Archive" },
  { href: "/viewer-discretion", label: "Viewer Discretion" },
  { href: "https://shadabchow.com/news", label: "Main News Site" },
  { href: "https://shadabchow.com/investigations", label: "Investigations" }
];

export default function Navbar() {
  return (
    <nav className="border-b border-neutral-800 bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-4 py-4">
        <Link href="/" className="font-semibold">
          Shadab Chow Video
        </Link>
        <div className="flex flex-wrap gap-3 text-sm text-neutral-300">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
