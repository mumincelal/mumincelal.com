import { Link } from "~/components/link";
import { Text } from "~/components/text";
import { ThemeToggle } from "~/components/theme-toggle";

export const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <Text variant="extralight" size={24}>
        MC.
      </Text>
      <div className="flex items-center gap-7.5">
        <Link href="#">Projects</Link>
        <Link href="#">Resume</Link>
        <Link href="#">Contact</Link>
        <ThemeToggle />
      </div>
    </div>
  );
};
