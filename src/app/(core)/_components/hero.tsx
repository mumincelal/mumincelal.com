import Image from "next/image";

export const Hero = () => (
  <section className="relative flex h-96 items-center justify-between gap-8">
    <div className="absolute size-full">
      <Image
        src="/images/background/hero-lines.svg"
        alt="Hero Background Lines"
        fill
      />
    </div>
  </section>
);
