"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "~/components/dropdown-menu";
import { Text } from "~/components/text";
import { ThemeToggle } from "~/components/theme-toggle";
import { PageUrl } from "~/constants";
import { useIsMobile } from "~/hooks/use-mobile";
import { MenuIcon } from "~/icons/menu";

export const Header = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex items-center justify-between">
      <Link href={PageUrl.Home}>
        <Text
          variant="extralight"
          className="text-2xl hover:text-foreground/60"
        >
          MC.
        </Text>
      </Link>
      <div className="flex items-center gap-3 lg:gap-7.5">
        {isMobile ? <MobileHeader /> : <DesktopHeader />}
        <ThemeToggle />
      </div>
    </div>
  );
};

const DesktopHeader = () => (
  <>
    <Link href={PageUrl.Projects}>
      <Text variant="extralight" className="text-lg hover:text-foreground/60">
        Projects
      </Text>
    </Link>
    <Link href={PageUrl.Contact}>
      <Text variant="extralight" className="text-lg hover:text-foreground/60">
        Contact
      </Text>
    </Link>
  </>
);

const MobileHeader = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <button type="button" className="flex cursor-pointer items-center">
        <MenuIcon className="size-5" />
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-20">
      <DropdownMenuItem>
        <Link href={PageUrl.Projects}>
          <Text variant="extralight" className="text-base">
            Projects
          </Text>
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Link href={PageUrl.Contact}>
          <Text variant="extralight" className="text-base">
            Contact
          </Text>
        </Link>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);
