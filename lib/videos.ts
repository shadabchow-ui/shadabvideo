export type RawVideo = {
  slug: string;
  title: string;
  /** Bunny Stream video GUID — populate with real IDs before publishing */
  bunnyVideoId: string;
  /** Bunny Stream library ID — populate with real IDs before publishing */
  bunnyLibraryId: string;
  /** Full URL to the companion article on shadabchow.com */
  articleUrl: string;
  articleTitle: string;
};

// Populate this array with real video entries before publishing.
export const rawVideos: RawVideo[] = [];

export function getVideoBySlug(slug: string): RawVideo | undefined {
  return rawVideos.find((v) => v.slug === slug);
}
