import { Metadata } from "next";
import { ExperienceCard } from "~/app/_components/experience-card";
import { experiences } from "~/constants";

export const metadata: Metadata = {
  title: "Resume"
};

const ResumePage = () => (
  <div className="grid grid-cols-1 gap-13">
    {experiences.map((experience) => (
      <ExperienceCard key={experience.title} experience={experience} />
    ))}
  </div>
);

export default ResumePage;
