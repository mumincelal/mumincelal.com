import { VariantProps, cva } from "class-variance-authority";
import { cn } from "~/lib/tailwind";

const textVariants = cva("text-foreground", {
  variants: {
    variant: {
      extralight: "font-extralight",
      light: "font-light",
      medium: "font-medium"
    },
    size: {
      14: "text-sm",
      16: "text-base",
      18: "text-lg",
      24: "text-2xl",
      96: "text-8xl"
    }
  }
});

type TextProps = React.ComponentProps<"p"> & VariantProps<typeof textVariants>;

export const Text = ({ className, variant, size, ...props }: TextProps) => (
  <p className={cn(textVariants({ variant, size, className }))} {...props} />
);
