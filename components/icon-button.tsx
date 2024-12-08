import { cn } from "@/lib/tailwind";

type IconButtonProps = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export const IconButton = ({ children, className }: IconButtonProps) => (
  <button
    type="button"
    className={cn(
      "flex w-fit items-center justify-center rounded border p-4",
      className
    )}
  >
    {children}
  </button>
);
