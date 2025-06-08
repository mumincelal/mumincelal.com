"use client";

import { motion } from "motion/react";
import Image from "next/image";

type ProjectImageProps = Readonly<{
  imageSrc: string;
  alt: string;
}>;

export const ProjectImage = ({ alt, imageSrc }: ProjectImageProps) => {
  return (
    <motion.div
      className="flex items-center rounded-3xl bg-light-400 p-6 md:flex-row md:px-10 md:py-20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        opacity: { ease: "easeIn" }
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          opacity: { ease: "easeIn" }
        }
      }}
      viewport={{ once: true }}
    >
      <Image
        className="rounded-xl object-contain"
        src={imageSrc}
        alt={alt}
        loading="lazy"
        width={3000}
        height={3000}
      />
    </motion.div>
  );
};
