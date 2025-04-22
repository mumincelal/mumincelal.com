import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/button";
import { GradientWrapper } from "~/components/gradient-wrapper";
import { ShadowWrapper } from "~/components/shadow-wrapper";

export const Footer = () => (
  <footer className="relative flex h-96 w-full items-center justify-between gap-8">
    <Link
      href="https://x.com/mumin_celal"
      className="absolute top-[6.8rem] left-[3rem] z-10"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
      title="Twitter"
    >
      <GradientWrapper>
        <ShadowWrapper>
          <Image
            className="rounded-lg bg-gradient-to-b from-light-300 object-cover p-1"
            src="/images/logos/twitter.svg"
            alt="Twitter Logo"
            width={30}
            height={30}
          />
        </ShadowWrapper>
      </GradientWrapper>
    </Link>
    <Link
      href="https://www.linkedin.com/in/mumin-celal-pinar"
      className="absolute top-[16rem] left-[17.5rem] z-10"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Linkedin"
      title="Linkedin"
    >
      <GradientWrapper>
        <ShadowWrapper>
          <Image
            className="rounded-lg bg-gradient-to-b from-light-300 object-cover p-1"
            src="/images/logos/linkedin.svg"
            alt="Linkedin Logo"
            width={30}
            height={30}
          />
        </ShadowWrapper>
      </GradientWrapper>
    </Link>
    <Link
      href="mailto:hello@mumincelal.com"
      className="absolute top-[6.5rem] left-[13rem] z-10"
    >
      <GradientWrapper>
        <ShadowWrapper>
          <Button className="font-medium font-sf-pro-display text-dark-300">
            hello@mumincelal.com
          </Button>
        </ShadowWrapper>
      </GradientWrapper>
    </Link>
    <Image
      className="absolute size-full"
      src="/images/background/footer.svg"
      alt="Footer Background"
      fill
    />
  </footer>
);
