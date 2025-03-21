import { Metadata } from "next";
import { ProjectCard } from "~/app/_components/project-card";
import { projects } from "~/constants";

export const metadata: Metadata = {
  title: "Projects"
};

const ProjectsPage = () => (
  <div className="grid grid-cols-1 gap-15 md:grid-cols-2 lg:grid-cols-3">
    {projects.map((project) => (
      <ProjectCard key={project.title} project={project} />
    ))}
  </div>
);

export default ProjectsPage;
