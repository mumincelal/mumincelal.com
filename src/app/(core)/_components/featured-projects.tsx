import { ProjectShowcase } from "~/app/(core)/_components/project-showcase";
import { projects } from "~/constants";

export const FeaturedProjects = () => (
  <div className="grid grid-cols-1 gap-8">
    {projects.map((project) => (
      <ProjectShowcase key={project.key} project={project} />
    ))}
  </div>
);
