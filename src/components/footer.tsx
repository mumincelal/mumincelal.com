import Link from "next/link";
import { Text } from "~/components/text";
import { ThemeToggle } from "~/components/theme-toggle";
import { PageUrl } from "~/constants";

export const Footer = () => {
  return (
    <div className="flex items-center justify-between">
      <Link href={PageUrl.Home}>
        <Text variant="extralight" size={24}>
          MC.
        </Text>
      </Link>
      <div className="flex items-center gap-7.5">
        <Link href={PageUrl.Projects}>
          <Text variant="extralight" size={18}>
            Projects
          </Text>
        </Link>
        <Link href={PageUrl.Resume}>
          <Text variant="extralight" size={18}>
            Resume
          </Text>
        </Link>
        <Link href={PageUrl.Contact}>
          <Text variant="extralight" size={18}>
            Contact
          </Text>
        </Link>
        <ThemeToggle />
      </div>
    </div>
  );
};
