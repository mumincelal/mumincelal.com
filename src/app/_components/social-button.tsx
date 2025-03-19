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
      className="inline-flex min-w-50 cursor-pointer items-center justify-center gap-2.5 rounded-sm border border-border py-3"
    >
      {children}
    </button>
  </Link>
);
