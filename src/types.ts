export type Project = Readonly<{
  key: string;
  title: string;
  descriptionParagraphs: string[];
  logo: string;
  link: string;
  showcaseImage: string;
  images: string[];
}>;

export type Client = Readonly<{
  key: string;
  name: string;
  logo: string;
  link: string;
}>;

export type Experience = Readonly<{
  key: string;
  company: string;
  role: string;
  startYear: number;
  endYear: number | null;
}>;
