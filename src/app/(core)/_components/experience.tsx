"use client";

import { motion } from "motion/react";
import { Experience as ExperienceType } from "~/types";

type ExperienceProps = Readonly<{
  experience: ExperienceType;
}>;

export const Experience = ({ experience }: ExperienceProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          opacity: { ease: "easeIn" }
        }
      }}
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
    </motion.div>
  );
};
