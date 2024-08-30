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
import {
  ArrowRightIcon,
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const { setTheme, theme, systemTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NAVIGATION_MENU_ITEMS = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" }
  ];

  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        <div className="font-extrabold text-secondary-dark dark:text-white-dark">
          mümin celal
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                {NAVIGATION_MENU_ITEMS.map(({ href, label }) => (
                  <NavigationMenuItem key={label}>
                    <Link href={href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <Link href="https://github.com/mumincelal" target="_blank" passHref>
            <GitHubIcon className="size-4" />
          </Link>
          <button type="button" onClick={toggleTheme} aria-label="Toggle theme">
            {currentTheme === "dark" ? (
              <SunIcon className="size-5 cursor-pointer" />
            ) : (
              <MoonIcon className="size-5 cursor-pointer" />
            )}
          </button>
          <div className="hidden md:block">
            <Link href="mailto:mumincelalpinar@gmail.com" passHref>
              <Button>
                Contact me <ArrowRightIcon className="ml-1 size-3" />
              </Button>
            </Link>
          </div>
          <button
            type="button"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="size-6" />
            ) : (
              <Bars3Icon className="size-6" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-full right-0 left-0 z-50 bg-white p-4 md:hidden dark:bg-secondary-light">
          <nav className="flex flex-col space-y-4">
            <Link href="/" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/about" onClick={toggleMenu}>
              About
            </Link>
            <Link href="/projects" onClick={toggleMenu}>
              Projects
            </Link>
            <Link href="mailto:mumincelalpinar@gmail.com" passHref>
              <Button>
                Contact me <ArrowRightIcon className="ml-1 size-3" />
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};
