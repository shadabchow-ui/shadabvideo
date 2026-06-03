import { GeistSans } from "geist/font/sans";
import { ReactNode } from "react";
import { SiteHeader } from "components/site-header";
import "./globals.css";
import { baseUrl } from "lib/utils";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Shadab Video Archive",
    template: "%s | Shadab Video Archive",
  },
  description:
    "Raw video documentation connected to verified reporting at ShadabChow.com.",
  robots: {
    follow: true,
    index: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="bg-neutral-50 text-black dark:bg-neutral-950 dark:text-white">
        <SiteHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
