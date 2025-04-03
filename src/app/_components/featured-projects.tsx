import { ProjectCard } from "~/app/_components/project-card";
import { Text } from "~/components/text";
import { projects } from "~/constants";

export const FeaturedProjects = () => (
  <div className="grid grid-cols-1 gap-12">
    <Text variant="light" className="text-lg uppercase">
      Featured Projects
    </Text>
    <div className="grid grid-cols-1 gap-15 md:grid-cols-2">
      {projects.slice(0, 4).map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  </div>
);
