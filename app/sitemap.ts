import type { MetadataRoute } from "next";
import { rawVideos } from "lib/videos";

export const dynamic = "force-static";
export const revalidate = false;

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://video.shadabchow.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/videos", "/about", "/viewer-discretion"].map(
    (route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date("2026-06-03")
    })
  );

  const videoRoutes = rawVideos.map((video) => ({
    url: `${siteUrl}/videos/${video.slug}`,
    lastModified: new Date(video.date)
  }));

  return [...staticRoutes, ...videoRoutes];
}
