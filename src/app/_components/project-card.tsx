import { IconBrandGithub, IconLink } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Text } from "~/components/text";
import { Project } from "~/types";

type ProjectCardProps = Readonly<{
  project: Project;
}>;

export const ProjectCard = ({ project }: ProjectCardProps) => (
  <div className="grid grid-cols-1 gap-3" key={project.title}>
    <Image
      className="size-auto"
      src={project.image}
      alt={project.title}
      width="511"
      height="338"
      priority
    />
    <div className="flex items-center justify-between">
      <Text variant="light" size={24}>
        {project.title}
      </Text>
      <div className="flex items-center gap-2">
        <Link href={project.github} target="_blank">
          <IconBrandGithub />
        </Link>
        {project.website && (
          <Link href={project.website} target="_blank">
            <IconLink />
          </Link>
        )}
      </div>
    </div>
    <Text variant="light" size={16}>
      {project.description}
    </Text>
    <div className="flex items-center gap-2">
      {project.techStack.map((tech, index) => (
        <React.Fragment key={tech}>
          <Text variant="light" size={14} className="text-link">
            {tech}
          </Text>
          {index !== project.techStack.length - 1 ? (
            <Text variant="light" size={14}>
              -
            </Text>
          ) : null}
        </React.Fragment>
      ))}
    </div>
  </div>
);
