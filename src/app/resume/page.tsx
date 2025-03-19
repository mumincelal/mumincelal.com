import { ExperienceContainer } from "~/app/_components/experience-container";
import { experiences } from "~/constants";

const ResumePage = () => (
  <div className="grid grid-cols-1 gap-13">
    {experiences.map((experience) => (
      <ExperienceContainer key={experience.title} experience={experience} />
    ))}
  </div>
);

export default ResumePage;
