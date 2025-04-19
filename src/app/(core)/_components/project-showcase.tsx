import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/button";
import { GradientWrapper } from "~/components/gradient-wrapper";
import { ShadowWrapper } from "~/components/shadow-wrapper";
import { cn } from "~/lib/tailwind";
import { Project } from "~/types";

type ProjectShowcaseProps = Readonly<{ project: Project }> &
  React.HTMLAttributes<HTMLDivElement>;

export const ProjectShowcase = ({
  className,
  project,
  ...props
}: ProjectShowcaseProps) => (
  <div
    className={cn(
      "flex flex-col-reverse items-center gap-8 rounded-3xl bg-light-400 pt-5 pr-0 pl-8 md:flex-row md:pt-12 md:pr-12 md:pl-5",
      className
    )}
    {...props}
  >
    <div className="size-full md:relative md:w-[60%]">
      <Image
        className="min-h-72 rounded-xl object-fill md:absolute md:bottom-0"
        src={project.showcaseImage}
        alt={project.title}
        loading="lazy"
        width={3000}
        height={3000}
      />
    </div>
    <div className="flex w-full flex-col gap-4 md:w-[40%] md:pt-4 md:pb-8">
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
      <h2 className="font-normal text-3xl text-dark-200">{project.title}</h2>
      <p className="text-pretty font-normal font-sf-pro-display text-dark-400/60">
        {project.descriptionParagraphs.at(0)}
      </p>
      <Link href={project.link}>
        <GradientWrapper>
          <ShadowWrapper>
            <Button className="font-sf-pro-display text-gray-300">
              View more
            </Button>
          </ShadowWrapper>
        </GradientWrapper>
      </Link>
    </div>
  </div>
);
