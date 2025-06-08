"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/button";
import { GradientWrapper } from "~/components/gradient-wrapper";
import { ShadowWrapper } from "~/components/shadow-wrapper";

export const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        opacity: { ease: "easeIn" }
      }}
      className="relative flex flex-col items-center justify-between gap-28 md:h-96 md:flex-row md:gap-8"
    >
      <div className="z-10 flex flex-col gap-6">
        <Link href="/">
          <GradientWrapper>
            <ShadowWrapper>
              <Image
                src="/images/logos/my-website.svg"
                alt="Mumin Celal"
                width={50}
                height={50}
                className="rounded-lg object-cover p-1"
              />
            </ShadowWrapper>
          </GradientWrapper>
        </Link>
        <h1 className="text-balance text-5xl text-dark-100">
          <span className="font-normal text-gray-200">Hello!</span> I'm Mumin
          <br />
          <span className="font-normal text-gray-200"> product-minded </span>
          software engineer
        </h1>
        <Link href="mailto:hello@mumincelal.com">
          <GradientWrapper>
            <ShadowWrapper>
              <Button className="font-medium font-sf-pro-display-medium text-dark-300 text-sm">
                Let's talk
              </Button>
            </ShadowWrapper>
          </GradientWrapper>
        </Link>
      </div>
      <div className="z-10 flex h-full w-sm justify-center">
        <GradientWrapper>
          <ShadowWrapper>
            <Image
              src="/images/logos/my-website.svg"
              alt="Mumin Celal"
              width={220}
              height={330}
              className="rounded-lg object-contain p-1"
              priority
            />
          </ShadowWrapper>
        </GradientWrapper>
      </div>
      <div className="absolute size-full">
        <Image src="/images/background/hero.svg" alt="Hero Background" fill />
      </div>
    </motion.section>
  );
};
