import { TablerIcon } from "@tabler/icons-react";

export type Project = Readonly<{
  title: string;
  image: string;
  icon?: TablerIcon;
  description: string;
  website: string;
  github: string;
  techStack: string[];
}>;

export type Experience = Readonly<{
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}>;

export type Social = Readonly<{
  name: string;
  icon: TablerIcon;
  href: string;
}>;
