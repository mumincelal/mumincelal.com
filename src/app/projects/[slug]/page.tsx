import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "~/components/aspect-ratio";
import { Badge } from "~/components/badge";
import { Text } from "~/components/text";
import { projects } from "~/constants";
import { GitHubIcon } from "~/icons/github";
import { LinkIcon } from "~/icons/link";

const ProjectPage = async ({
  params
}: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="md:justify-items-normal grid grid-cols-1 justify-items-center gap-5">
      <Text variant="medium" className="text-4xl text-foreground">
        {project.title}
      </Text>
      <div className="md:justify-items-normal grid grid-cols-1 justify-items-center gap-2">
        {project.descriptions.map((description, index) => (
          <Text
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            variant="light"
            className="text-foreground/50 text-md md:text-2xl"
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
      {project.images.map((image) => (
        <AspectRatio key={image.src} ratio={16 / 9} className="bg-background">
          <Image
            className="size-full object-contain"
            src={image.src}
            alt={image.alt}
            fill
            priority
          />
        </AspectRatio>
      ))}
    </div>
  );
};

export default ProjectPage;
