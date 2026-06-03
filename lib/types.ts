export type Sensitivity = "standard" | "disturbing" | "graphic";

export type RawVideo = {
  slug: string;
  title: string;
  dek: string;
  category: string;
  date: string;
  location?: string;
  bunnyEmbedUrl: string;
  thumbnail: string;
  sensitivity: Sensitivity;
  mainArticleUrl: string;
  mainArticleTitle: string;
  summary: string;
  whyReadArticle: string[];
  keyFacts: string[];
  unresolvedQuestions: string[];
};
