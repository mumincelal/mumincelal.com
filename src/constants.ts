import { EmailIcon } from "~/icons/email";
import { GitHubIcon } from "~/icons/github";
import { LinkedinIcon } from "~/icons/linkedin";
import { UpworkIcon } from "~/icons/upwork";
import { Experience, Project, Social } from "~/types";

export const PageUrl = {
  Home: "/",
  Projects: "/projects",
  Resume: "/resume",
  Contact: "#contact"
} as const;

export const projects: Project[] = [
  // {
  //   title: "Project 1",
  //   image: "/images/project-1.png",
  //   description: "Description 1",
  //   website: "https://example.com/project1",
  //   github: "https://github.com/example/project1",
  //   techStack: ["JavaScript", "React"]
  // },
  // {
  //   title: "Project 2",
  //   image: "/images/project-2.png",
  //   description: "Description 2",
  //   website: "https://example.com/project2",
  //   github: "https://github.com/example/project2",
  //   techStack: ["TypeScript", "Node.js"]
  // },
  // {
  //   title: "Project 3",
  //   image: "/images/project-1.png",
  //   description: "Description 3",
  //   website: "https://example.com/project3",
  //   github: "https://github.com/example/project3",
  //   techStack: ["Python", "Django"]
  // },
  // {
  //   title: "Project 4",
  //   image: "/images/project-2.png",
  //   description: "Description 4",
  //   website: "https://example.com/project4",
  //   github: "https://github.com/example/project4",
  //   techStack: ["Go", "Gin"]
  // }
];

export const experiences: Experience[] = [
  // {
  //   title: "Software Engineer",
  //   company: "Company 1",
  //   location: "Location 1",
  //   startDate: "Jan 2020",
  //   endDate: "Present",
  //   description: "Description 1"
  // },
  // {
  //   title: "Software Engineer",
  //   company: "Company 2",
  //   location: "Location 2",
  //   startDate: "Jan 2018",
  //   endDate: "Dec 2019",
  //   description: "Description 2"
  // },
  // {
  //   title: "Software Engineer",
  //   company: "Company 3",
  //   location: "Location 3",
  //   startDate: "Jan 2016",
  //   endDate: "Dec 2017",
  //   description: "Description 3"
  // },
  // {
  //   title: "Software Engineer",
  //   company: "Company 4",
  //   location: "Location 4",
  //   startDate: "Jan 2015",
  //   endDate: "Dec 2015",
  //   description: "Description 4"
  // }
];

export const socials: Social[] = [
  {
    name: "Email",
    icon: EmailIcon,
    href: "mailto:mumincelalpinar@gmail.com"
  },
  {
    name: "GitHub",
    icon: GitHubIcon,
    href: "https://github.com/mumincelal"
  },
  {
    name: "Upwork",
    icon: UpworkIcon,
    // biome-ignore lint/nursery/noSecrets: <explanation>
    href: "https://www.upwork.com/freelancers/~01f0f28edf2a156eab"
  },
  {
    name: "LinkedIn",
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/mumin-celal-pinar"
  }
];
