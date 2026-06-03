import { MetadataRoute } from 'next';

export const dynamic = 'force-static';
import { SITE_URL } from 'lib/site';
import { rawVideos } from 'lib/videos';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date().toISOString() },
    { url: `${base}/about`, lastModified: new Date().toISOString() },
    { url: `${base}/videos`, lastModified: new Date().toISOString() },
    { url: `${base}/viewer-discretion`, lastModified: new Date().toISOString() },
  ];
  const videoRoutes: MetadataRoute.Sitemap = rawVideos.map((v) => ({
    url: `${base}/videos/${v.slug}`,
    lastModified: new Date().toISOString(),
  }));
  return [...staticRoutes, ...videoRoutes];
}
