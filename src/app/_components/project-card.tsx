import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "~/components/aspect-ratio";
import { Badge } from "~/components/badge";
import { Text } from "~/components/text";
import { GitHubIcon } from "~/icons/github";
import { LinkIcon } from "~/icons/link";
import { Project } from "~/types";

type ProjectCardProps = Readonly<{
  project: Project;
}>;

export const ProjectCard = ({ project }: ProjectCardProps) => (
  <div className="relative isolate grid grid-cols-1 gap-3" key={project.title}>
    <AspectRatio ratio={16 / 9} className="bg-background">
      <Image
        className="size-full object-fill"
        src={project.images[0]?.src || ""}
        alt={project.images[0]?.alt || "Fallback Image"}
        fill
        priority
      />
    </AspectRatio>
    <Link href={`/projects/${project.slug}`}>
      <span className="absolute inset-0" />
      <Text variant="light" className="text-base text-foreground">
        {project.title}
      </Text>
    </Link>
    <div className="grid grid-cols-1 gap-2">
      {project.descriptions.map((description, index) => (
        <Text
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}
          variant="light"
          className="text-foreground/50 text-sm"
        >
          {description}
        </Text>
      ))}
    </div>
    <div className="flex items-center justify-between">
      <div className="flex flex-wrap items-center gap-2">
        {project.techStack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
      <div className="flex items-center gap-2">
        {project.github && (
          <Link href={project.github} target="_blank">
            <GitHubIcon className="size-4 text-foreground/50 hover:text-foreground/100" />
          </Link>
        )}
        {project.website && (
          <Link href={project.website} target="_blank">
            <LinkIcon className="size-4 text-foreground/50 hover:text-foreground/100" />
          </Link>
        )}
      </div>
    </div>
  </div>
);
