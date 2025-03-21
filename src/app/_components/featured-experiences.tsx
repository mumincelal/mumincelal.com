import { ExperienceCard } from "~/app/_components/experience-card";
import { Text } from "~/components/text";
import { experiences } from "~/constants";

export const FeaturedExperiences = () => (
  <div className="flex gap-25">
    <Text variant="light" size={18} className="uppercase">
      Experiences
    </Text>
    <div className="grid flex-1 grid-cols-1 gap-13">
      {experiences.slice(0, 3).map((experience) => (
        <ExperienceCard key={experience.title} experience={experience} />
      ))}
    </div>
  </div>
);
