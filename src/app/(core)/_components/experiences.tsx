import { experiences } from "~/constants";

export const Experiences = () => (
  <div className="flex flex-col gap-2">
    {experiences.map((experience) => (
      <div
        key={experience.key}
        className="grid grid-cols-3 items-center gap-4 rounded-2xl bg-light-400 px-5 py-3"
      >
        <div className="col-span-2 inline-grid grid-cols-1 md:grid-cols-2">
          <p className="text-left font-medium font-sf-pro-display-medium text-base text-dark-100 tracking-tight">
            {experience.company}
          </p>
          <p className="text-left font-medium font-sf-pro-display-medium text-gray-400 text-sm tracking-tight ">
            {experience.role}
          </p>
        </div>
        <p className="text-right font-normal font-sf-pro-display text-gray-400 text-sm tracking-tight">
          {`${experience.startYear} - ${
            experience.endYear ? experience.endYear : "present"
          }`}
        </p>
      </div>
    ))}
  </div>
);
