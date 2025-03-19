import { LinkProps as NextLinkProps } from "next/link";
import NextLink from "next/link";
import { Text } from "~/components/text";

type LinkProps = NextLinkProps;

export const Link = ({
  href,
  children,
  ...props
}: React.PropsWithChildren<LinkProps>) => (
  <NextLink href={href} {...props}>
    <Text variant="extralight" size={18}>
      {children}
    </Text>
  </NextLink>
);
