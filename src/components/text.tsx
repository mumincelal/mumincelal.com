import { VariantProps, cva } from "class-variance-authority";
import { cn } from "~/lib/tailwind";

const textVariants = cva("text-foreground", {
  variants: {
    variant: {
      extralight: "font-extralight",
      light: "font-light",
      medium: "font-medium"
    }
  }
});

type TextProps = React.ComponentProps<"p"> & VariantProps<typeof textVariants>;

export const Text = ({ className, variant, ...props }: TextProps) => (
  <p className={cn(textVariants({ variant, className }))} {...props} />
);
