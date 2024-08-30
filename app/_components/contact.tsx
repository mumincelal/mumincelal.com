import Link from "next/link";

export const Contact = () => (
  <div className="my-12 rounded-3xl bg-white-dark px-4 py-10 sm:my-24 sm:px-10 md:my-24 dark:bg-secondary-light">
    <div className="container mx-auto max-w-[650px] text-justify">
      <p className="text-center font-bold text-2xl text-secondary sm:text-4xl md:text-6xl dark:text-white">
        Ready to start your next project?
      </p>
      <Link href="mailto:mumincelalpinar@gmail.com">
        <p className="text-center font-bold text-2xl text-primary sm:text-5xl md:text-6xl dark:text-primary">
          Get touch with me!
        </p>
      </Link>
    </div>
  </div>
);
