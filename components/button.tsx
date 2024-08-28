import { cn } from "@/utils/tailwind";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

const variants = cva(
  "py-3 px-5 h-9 min-w-24 rounded-md inline-flex items-center justify-center whitespace-nowrap transition-colors rounded-md font-regular text-xs disabled:pointer-events-none disabled:opacity-50 dark:disabled:opacity-30",
  {
    variants: {
      variant: {
        filled:
          "bg-primary text-white hover:bg-primary-light focus:bg-primary-dark disabled:text-primary-light disabled:bg-white-dark dark:text-white-light dark:hover:text-white dark:hover:bg-primary-light dark:focus:bg-primary-dark dark:focus:text-white dark:disabled:bg-secondary-dark dark:disabled:text-[#608EF0]",
        outline:
          "border border-primary text-primary hover:bg-primary hover:text-white focus:bg-primary-dark focus:text-white disabled:border-white-dark dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-white dark:focus:bg-primary-dark dark:focus:text-white dark:disabled:border-secondary-light dark:disabled:text-[#608EF0]"
      }
    },
    defaultVariants: {
      variant: "filled"
    }
  }
);

export type ButtonProps = Readonly<{ asChild?: boolean }> &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof variants>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "button";

    return (
      <Component
        ref={ref}
        className={cn(variants({ variant, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, variants };
