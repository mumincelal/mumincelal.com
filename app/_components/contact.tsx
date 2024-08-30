import Link from "next/link";

export const Contact = () => (
  <div className="rounded-3xl bg-white-dark dark:bg-secondary-light px-4 py-10 sm:px-10 my-12 sm:my-24 md:my-24">
    <div className="container mx-auto max-w-[650px] text-justify">
      <p className="text-center font-bold text-2xl sm:text-4xl md:text-6xl text-secondary dark:text-white">
        Ready to start your next project?
      </p>
      <Link href="mailto:mumincelalpinar@gmail.com">
        <p className="text-center font-bold text-2xl sm:text-5xl md:text-6xl text-primary dark:text-primary">
          Get touch with me!
        </p>
      </Link>
    </div>
  </div>
);
