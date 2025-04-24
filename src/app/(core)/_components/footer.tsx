"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/button";
import { GradientWrapper } from "~/components/gradient-wrapper";
import { ShadowWrapper } from "~/components/shadow-wrapper";
import { useIsMobile } from "~/hooks/use-mobile";

export const Footer = () => {
  const isMobile = useIsMobile();

  return (
    <footer className="relative flex h-72 w-full max-w-2xl items-center justify-between gap-8">
      <Link
        href="https://x.com/mumin_celal"
        className="absolute top-[2.5rem] left-[0.5rem] z-10 md:top-[4.7rem] md:left-[4.2rem] lg:top-[4.8rem] lg:left-[3rem]"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X"
        title="X"
      >
        <GradientWrapper>
          <ShadowWrapper>
            <Button className="p-0">
              <Image
                className="object-none p-1"
                src="/images/logos/x.svg"
                alt="X Logo"
                width={30}
                height={30}
              />
            </Button>
          </ShadowWrapper>
        </GradientWrapper>
      </Link>
      <Link
        href="https://www.linkedin.com/in/mumin-celal-pinar"
        className="absolute top-[13rem] left-[3.5rem] z-10 md:top-[13rem] md:left-[12.6rem] lg:top-[12rem] lg:left-[13.2rem]"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Linkedin"
        title="Linkedin"
      >
        <GradientWrapper>
          <ShadowWrapper>
            <Button className="p-0">
              <Image
                className="object-none p-1"
                src="/images/logos/linkedin.svg"
                alt="Linkedin Logo"
                width={30}
                height={30}
              />
            </Button>
          </ShadowWrapper>
        </GradientWrapper>
      </Link>
      <Link
        href="https://bsky.app/profile/mumincelal.com"
        className="absolute top-[-1.2rem] left-[13rem] z-10 md:top-[-0.5rem] md:left-[21.2rem] lg:top-[-1rem] lg:left-[22rem]"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Bluesky"
        title="Bluesky"
      >
        <GradientWrapper>
          <ShadowWrapper>
            <Button className="p-0">
              <Image
                className="object-none p-1"
                src="/images/logos/bluesky.svg"
                alt="Bluesky Logo"
                width={30}
                height={30}
              />
            </Button>
          </ShadowWrapper>
        </GradientWrapper>
      </Link>
      <Link
        href="https://github.com/mumincelal"
        className="absolute top-[16.5rem] left-[13.5rem] z-10 md:top-[8.5rem] md:left-[31.2rem] lg:top-[8.5rem] lg:left-[33rem]"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        title="GitHub"
      >
        <GradientWrapper>
          <ShadowWrapper>
            <Button className="p-0">
              <Image
                className="object-none p-1"
                src="/images/logos/github.svg"
                alt="GitHub Logo"
                width={30}
                height={30}
              />
            </Button>
          </ShadowWrapper>
        </GradientWrapper>
      </Link>
      <Link
        href="mailto:hello@mumincelal.com"
        className="absolute top-[5.7rem] left-[5.5rem] z-10 md:top-[4.7rem] md:left-[10.2rem] lg:top-[4.5rem] lg:left-[9rem]"
      >
        <GradientWrapper>
          <ShadowWrapper>
            <Button className="font-medium font-sf-pro-display text-dark-300">
              <Image
                className="object-none p-1"
                src="/images/logos/email.svg"
                alt="GitHub Logo"
                width={30}
                height={30}
              />
              hello@mumincelal.com
            </Button>
          </ShadowWrapper>
        </GradientWrapper>
      </Link>
      <Image
        className="absolute size-full"
        src={
          isMobile
            ? "/images/background/footer-mobile.svg"
            : "/images/background/footer-desktop.svg"
        }
        alt="Footer Background"
        fill
      />
    </footer>
  );
};
