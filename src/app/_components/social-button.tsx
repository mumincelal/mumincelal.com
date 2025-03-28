import Link from "next/link";

type SocialButtonProps = Readonly<{
  href: string;
}>;

export const SocialButton = ({
  href,
  children
}: React.PropsWithChildren<SocialButtonProps>) => (
  <Link href={href} target="_blank" passHref>
    <button
      type="button"
      className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-sm py-3 text-foreground/50 hover:text-foreground/100"
    >
      {children}
    </button>
  </Link>
);
