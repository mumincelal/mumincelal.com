import Image from "next/image";
import Link from "next/link";
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
        <div className="-left-40 md:-top-10 md:-left-5 relative top-20 flex size-[2.5rem] items-center justify-center rounded-full border border-light-700 bg-light-50 transition-all duration-300 hover:rounded-[30%] hover:border-light-900 hover:outline-0 md:fixed md:inset-0 md:size-[12.5rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            className="size-6 md:size-12"
          >
            <title>Arrow</title>
            <path
              d="M16.3083 22.916H41.6667V27.0827H16.3083L27.4833 38.2577L24.5375 41.2035L8.33334 24.9993L24.5375 8.79517L27.4833 11.741L16.3083 22.916Z"
              fill="#959595"
            />
          </svg>
        </div>
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
          <div
            key={image}
            className="flex items-center rounded-3xl bg-light-400 p-6 md:flex-row md:px-10 md:py-20"
          >
            <Image
              className="rounded-xl object-contain"
              src={image}
              alt={project.title}
              loading="lazy"
              width={3000}
              height={3000}
            />
          </div>
        ))}
        {project.descriptionParagraphs.map((paragraph, index) => (
          <p
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            className="text-pretty font-normal font-sf-pro-display text-dark-400/60 text-lg"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </>
  );
};

export default ProjectPage;
