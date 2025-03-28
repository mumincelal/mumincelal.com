export type Project = Readonly<{
  title: string;
  image: string;
  icon?: React.ElementType;
  description: string;
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
