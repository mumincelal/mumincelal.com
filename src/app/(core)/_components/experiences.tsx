import { Experience } from "~/app/(core)/_components/experience";
import { experiences } from "~/constants";

export const Experiences = () => {
  return (
    <div className="flex flex-col gap-2">
      {experiences.map((experience) => (
        <Experience key={experience.key} experience={experience} />
      ))}
    </div>
  );
};
