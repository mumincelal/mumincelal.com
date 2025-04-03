import { BlueskyIcon } from "~/icons/bluesky";
import { GitHubIcon } from "~/icons/github";
import { LinkedinIcon } from "~/icons/linkedin";
import { UpworkIcon } from "~/icons/upwork";
import { XIcon } from "~/icons/x";
import { Project, Social } from "~/types";

export const PageUrl = {
  Home: "/",
  Projects: "/projects",
  Contact: "/contact"
} as const;

export const projects: Project[] = [
  {
    slug: "syntonym-cloud",
    title: "Syntonym Cloud",
    images: [
      {
        src: "/images/syntonym-cloud/desktop-login.png",
        alt: "Syntonym Cloud - Desktop Login"
      },
      {
        src: "/images/syntonym-cloud/desktop-job-process.png",
        alt: "Syntonym Cloud - Desktop Job Process"
      },
      {
        src: "/images/syntonym-cloud/desktop-account.png",
        alt: "Syntonym Cloud - Desktop Account"
      },
      {
        src: "/images/syntonym-cloud/mobile-login.png",
        alt: "Syntonym Cloud - Mobile Login"
      },
      {
        src: "/images/syntonym-cloud/mobile-job-process-1.png",
        alt: "Syntonym Cloud - Mobile Job Process 1"
      },
      {
        src: "/images/syntonym-cloud/mobile-job-process-2.png",
        alt: "Syntonym Cloud - Mobile Job Process 2"
      },
      {
        src: "/images/syntonym-cloud/mobile-account-1.png",
        alt: "Syntonym Cloud - Mobile Account 1"
      },
      {
        src: "/images/syntonym-cloud/mobile-account-2.png",
        alt: "Syntonym Cloud - Mobile Account 2"
      }
    ],
    descriptions: [
      "Syntonym maximizes privacy compliance by removing sensitive biometric data in image and video, while preserving valuable analytical metrics to enable model training and advanced video analytics."
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind", "Nest.js", "PostgreSQL"]
  },
  {
    slug: "syntonym-virtual-camera",
    title: "Syntonym Virtual Camera",
    images: [
      {
        src: "/images/syntonym-virtual-camera/desktop-login.png",
        alt: "Syntonym Virtual Camera - Desktop Login"
      },
      {
        src: "/images/syntonym-virtual-camera/desktop-dashboard.png",
        alt: "Syntonym Virtual Camera - Desktop Dashboard"
      }
    ],
    descriptions: [
      "Syntonym's face generation technology creates unique and anonymous faces in real-time, whether on mobile or local platforms, ensuring individuals have a secure and reliable solution to safeguard their privacy and anonymity when required."
    ],
    techStack: ["Electron", "Javascript", "React", "Tailwind"]
  },
  {
    slug: "innova-website",
    title: "Innova Website",
    images: [
      {
        src: "/images/innova-website/desktop-home.png",
        alt: "Innova Website - Desktop Home"
      },
      {
        src: "/images/innova-website/desktop-blog.png",
        alt: "Innova Website - Desktop Blog"
      },
      {
        src: "/images/innova-website/desktop-cms.png",
        alt: "Innova Website - Desktop CMS"
      }
    ],
    descriptions: [
      "İnnova Bilişim Çözümleri, a Türk Telekom subsidiary, is Turkey's leading IT solutions company with its expert staff of more than 1,400 people with knowledge in different technologies."
    ],
    techStack: ["Next.js", "TypeScript", "PayloadCMS"]
  }
];

export const socials: Social[] = [
  {
    id: "github",
    name: "@mumincelal",
    icon: GitHubIcon,
    href: "https://github.com/mumincelal"
  },
  {
    id: "upwork",
    name: "@mumincelal",
    icon: UpworkIcon,
    // biome-ignore lint/nursery/noSecrets: <explanation>
    href: "https://www.upwork.com/freelancers/~01f0f28edf2a156eab"
  },
  {
    id: "linkedin",
    name: "@mumin-celal-pinar",
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/mumin-celal-pinar"
  },
  {
    id: "x",
    name: "@mumin_celal",
    icon: XIcon,
    href: "https://x.com/mumin_celal"
  },
  {
    id: "bluesky",
    name: "@mumincelal.bsky.social",
    icon: BlueskyIcon,
    href: "https://bsky.app/profile/mumincelal.bsky.social"
  }
];
