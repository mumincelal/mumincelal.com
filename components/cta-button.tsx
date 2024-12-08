import { cn } from "@/lib/tailwind";

type CtaButtonProps = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export const CtaButton = ({ children, className }: CtaButtonProps) => (
  <button
    type="button"
    className={cn(
      "flex w-fit items-center justify-center space-x-3 rounded px-6 py-3",
      className
    )}
  >
    {children}
  </button>
);
