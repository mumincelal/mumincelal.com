"use client";

import { motion } from "motion/react";
import { cn } from "~/lib/tailwind";

type BackButtonProps = React.HTMLAttributes<HTMLDivElement>;

export const BackButton = ({ className }: BackButtonProps) => (
  <motion.div
    className={cn(
      "flex size-[2.5rem] items-center justify-center rounded-full border border-light-700 bg-light-50 hover:outline-0 md:inset-0 md:size-[12.5rem]",
      className
    )}
    initial={{
      borderRadius: "100%",
      borderColor: "var(--color-light-700)"
    }}
    whileHover={{
      borderRadius: "30%",
      borderColor: "var(--color-light-900)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      className="size-6 md:size-12"
    >
      <title>Arrow</title>
      <path
        d="M16.3083 22.916H41.6667V27.0827H16.3083L27.4833 38.2577L24.5375 41.2035L8.33334 24.9993L24.5375 8.79517L27.4833 11.741L16.3083 22.916Z"
        fill="#959595"
      />
    </svg>
  </motion.div>
);
