type Image = Readonly<{
  src: string;
  alt: string;
}>;

export type Project = Readonly<{
  slug: string;
  title: string;
  images: Image[];
  icon?: React.ElementType;
  descriptions: string[];
  website?: string;
  github?: string;
  techStack: string[];
}>;

export type Experience = Readonly<{
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  descriptions: string[];
}>;

export type Social = Readonly<{
  id: string;
  name: string;
  icon: React.ElementType;
  href: string;
}>;
