import { Text } from "~/components/text";
import { Experience } from "~/types";

type ExperienceContainerProps = Readonly<{
  experience: Experience;
}>;

export const ExperienceContainer = ({
  experience
}: ExperienceContainerProps) => (
  <div className="grid grid-cols-1 gap-3">
    <div className="flex items-center justify-between">
      <Text variant="light" size={24}>
        {experience.title}
      </Text>
      <Text variant="light" size={16}>
        {experience.startDate} - {experience.endDate}
      </Text>
    </div>
    <Text variant="light" size={14} className="text-link">
      {experience.company} - {experience.location}
    </Text>
    <Text variant="light" size={16}>
      {experience.description}
    </Text>
  </div>
);
