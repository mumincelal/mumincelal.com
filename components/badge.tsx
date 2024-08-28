import { cn } from "@/utils/tailwind";
import type React from "react";

export type BadgeProps = React.HTMLAttributes<HTMLDivElement>;

export const Badge = ({ className, ...props }: BadgeProps) => (
  <div
    className={cn(
      "inline-flex items-center rounded px-2 py-1 text-sm text-secondary bg-white-dark dark:bg-secondary-light dark:text-white",
      className
    )}
    {...props}
  />
);
