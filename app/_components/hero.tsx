import { Badge } from "@/components/badge";
import { CssIcon } from "@/icons/css";
import { ElectronIcon } from "@/icons/electron";
import { ExpressJSIcon } from "@/icons/expressjs";
import { GitIcon } from "@/icons/git";
import { GithubActionsIcon } from "@/icons/github-actions";
import { HtmlIcon } from "@/icons/html";
import { JavaScriptIcon } from "@/icons/javascript";
import { MongoDBIcon } from "@/icons/mongodb";
import { NestJSIcon } from "@/icons/nestjs";
import { NextJSIcon } from "@/icons/nextjs";
import { NodeJSIcon } from "@/icons/nodejs";
import { PostgresIcon } from "@/icons/postgres";
import { ReactIcon } from "@/icons/react";
import { TailwindIcon } from "@/icons/tailwind";
import { TypeScriptIcon } from "@/icons/typescript";
import Link from "next/link";

const BADGES = [
  { icon: NodeJSIcon, label: "Node.js" },
  { icon: NestJSIcon, label: "NestJS" },
  { icon: ExpressJSIcon, label: "Express" },
  { icon: ReactIcon, label: "React" },
  { icon: NextJSIcon, label: "Next.js" },
  { icon: TypeScriptIcon, label: "TypeScript" },
  { icon: TailwindIcon, label: "TailwindCSS" },
  { icon: HtmlIcon, label: "HTML" },
  { icon: CssIcon, label: "CSS" },
  { icon: JavaScriptIcon, label: "JavaScript" },
  { icon: PostgresIcon, label: "PostgreSQL" },
  { icon: MongoDBIcon, label: "MongoDB" },
  { icon: GithubActionsIcon, label: "GitHub Actions" },
  { icon: GitIcon, label: "Git" },
  { icon: ElectronIcon, label: "Electron" }
];

export const Hero = () => (
  <div className="container mx-auto max-w-[935px] space-y-6 py-24 text-center">
    <div className="font-bold text-3xl text-secondary sm:text-6xl dark:text-white">
      <p>Hello I'm</p>
      <p>Mümin Celal Pinar</p>
    </div>
    <div className="container mx-auto">
      <p className="text-justify text-gray-dark text-lead dark:text-gray-light">
        I am a Software Engineer, who develops full-stack applications. I am
        dedicated to helping clients build robust, scalable applications that
        seamlessly integrate user experience with powerful functionality. My
        expertise in both front-end and back-end technologies allows me to
        deliver tailored solutions that address your specific needs, ensuring
        your project stands out. I excel in solving complex problems, staying
        ahead of industry trends, and providing innovative, high-quality
        applications that enhance your business. Whether you need a custom-built
        application or improvements to existing systems, I am here to help you
        achieve your goals with efficiency and precision.
      </p>
    </div>
    <div className="flex flex-wrap items-center justify-center gap-2 md:justify-stretch">
      {BADGES.map(({ icon: Icon, label }) => (
        <Badge key={label}>
          <Icon className="mr-1" /> {label}
        </Badge>
      ))}
    </div>
  </div>
);
