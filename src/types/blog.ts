export type Blog = {
  id: number;
  title: string;
  posterImage: string;   // cover
  description: string;   // RICH HTML from CMS
  richText?: string;     // (optional) if you also keep a separate long body
  createdAt?: string;
  updatedAt?: string;
};
