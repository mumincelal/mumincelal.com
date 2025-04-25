"use client";

import { motion } from "motion/react";

type ProjectDescriptionProps = Readonly<{
  description: string;
}>;

export const ProjectDescription = ({
  description
}: ProjectDescriptionProps) => (
  <motion.p
    className="text-pretty font-normal font-sf-pro-display text-dark-400/60 text-lg"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        opacity: { ease: "easeIn" }
      }
    }}
  >
    {description}
  </motion.p>
);
