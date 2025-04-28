import Image from "next/image";
import Link from "next/link";
import { ProjectDescription } from "~/app/(core)/projects/_components/project-description";
import { ProjectImage } from "~/app/(core)/projects/_components/project-image";
import { BackButton } from "~/components/back-button";
import { GradientWrapper } from "~/components/gradient-wrapper";
import { ShadowWrapper } from "~/components/shadow-wrapper";
import { projects } from "~/constants";

const ProjectPage = async ({
  params
}: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const project = projects.find((project) => project.key === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <Link href="/">
        <BackButton className="-left-40 md:-top-10 md:-left-5 relative top-5 md:fixed" />
      </Link>
      <div className="grid w-full grid-cols-1 gap-6 md:gap-8">
        <div className="flex items-center gap-6">
          <GradientWrapper>
            <ShadowWrapper>
              <Image
                className="rounded-lg bg-gradient-to-b from-light-300 object-cover p-1"
                src={project.logo}
                alt={project.title}
                width={30}
                height={30}
              />
            </ShadowWrapper>
          </GradientWrapper>
          <h2 className="font-normal text-3xl text-dark-200">
            {project.title}
          </h2>
        </div>
        {project.images.map((image) => (
          <ProjectImage key={image} imageSrc={image} alt={project.title} />
        ))}
        <div className="grid grid-cols-1 gap-4">
          {project.descriptionParagraphs.map((paragraph, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <ProjectDescription key={index} description={paragraph} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
