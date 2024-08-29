"use client";

import { Button } from "@/components/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/navigation-menu";
import { GitHubIcon } from "@/icons/github";
import { ArrowRightIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import Link from "next/link";

export const Header = () => {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex items-center justify-between">
      <div className="text-primary-dark dark:text-white-dark">mümin celal</div>
      <div className="flex items-center space-x-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/work" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Work
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Link href="https://github.com/mumincelal" target="_blank" passHref>
          <GitHubIcon className="size-4" />
        </Link>
        {theme === "dark" ? (
          <SunIcon
            className="size-5 cursor-pointer"
            onClick={() => setTheme("light")}
          />
        ) : (
          <MoonIcon
            className="size-5 cursor-pointer"
            onClick={() => setTheme("dark")}
          />
        )}
        <Button>
          Contact me <ArrowRightIcon className="ml-1 size-3" />
        </Button>
      </div>
    </div>
  );
};
