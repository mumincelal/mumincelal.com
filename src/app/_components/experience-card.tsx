import { Text } from "~/components/text";
import { Experience } from "~/types";

type ExperienceContainerProps = Readonly<{
  experience: Experience;
}>;

export const ExperienceCard = ({ experience }: ExperienceContainerProps) => (
  <div className="grid grid-cols-1 gap-3">
    <div className="flex items-center justify-between">
      <Text variant="light" className="text-2xl">
        {experience.title}
      </Text>
      <Text variant="light" className="text-base">
        {experience.startDate} - {experience.endDate}
      </Text>
    </div>
    <Text variant="light" className="text-link text-sm">
      {experience.company} - {experience.location}
    </Text>
    <ul>
      {experience.descriptions.map((description) => (
        <li key={description}>
          <Text variant="light" className="text-base">
            {description}
          </Text>
        </li>
      ))}
    </ul>
  </div>
);
