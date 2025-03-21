"use client";

import { motion, useAnimation } from "motion/react";
import { useTheme } from "next-themes";
import React from "react";
import { useNextValue } from "~/hooks/use-next-value";
import { ContrastIcon } from "~/icons/contrast";
import { MoonIcon } from "~/icons/moon";
import { SunIcon } from "~/icons/sun";
import { cn } from "~/lib/tailwind";

export const ThemeToggle = () => {
  const [mounted, setMounted] = React.useState(false);
  const { setTheme, theme } = useTheme();
  const controlsSun = useAnimation();
  const controlsMoon = useAnimation();
  const controlsContrast = useAnimation();

  const iconVariants = {
    sun: {
      rotate: 0,
      scale: 1,
      opacity: 1
    },
    moon: {
      rotate: 0,
      scale: 1,
      opacity: 1
    },
    system: {
      rotate: 0,
      scale: 1,
      opacity: 1
    },
    hidden: {
      scale: 0,
      opacity: 0,
      rotate: 180
    },
    systemHidden: {
      scale: 0,
      opacity: 0
    }
  };

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (theme === "system") {
      controlsSun.start("hidden");
      controlsContrast.start("system");
      controlsMoon.start("hidden");
    } else {
      controlsSun.start(theme === "light" ? "sun" : "hidden");
      controlsMoon.start(theme === "dark" ? "moon" : "hidden");
      controlsContrast.start("systemHidden");
    }
  }, [mounted, controlsContrast, controlsMoon, controlsSun, theme]);

  const nextTheme = useNextValue(
    ["light", "system", "dark"] as const,
    theme as string
  );

  if (!mounted) {
    return null;
  }

  return (
    <button
      type="button"
      className="group flex cursor-pointer items-center"
      onClick={() => setTheme(nextTheme)}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className={cn("relative flex size-5 items-center")}
      >
        <motion.div
          animate={{
            transition: { duration: 0.1, easings: ["easeInOut"] }
          }}
          className={cn(
            "relative size-5 transition-all duration-300 ease-in-out"
          )}
        >
          <motion.div
            className="absolute top-0 left-0 size-5"
            variants={iconVariants}
            initial="hidden"
            animate={controlsSun}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <SunIcon className="size-5" />
          </motion.div>
          <motion.div
            className="absolute top-0 left-0 size-5"
            variants={iconVariants}
            initial="hidden"
            animate={controlsContrast}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <ContrastIcon className="size-5 dark:rotate-180" />
          </motion.div>
          <motion.div
            className="absolute top-0 left-0 size-5"
            variants={iconVariants}
            initial="hidden"
            animate={controlsMoon}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <MoonIcon className="size-5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </button>
  );
};
