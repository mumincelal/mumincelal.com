import { GitHubIcon } from "@/icons/github";
import { LinkedinIcon } from "@/icons/linkedin";
import { XIcon } from "@/icons/x";
import Link from "next/link";

export const Footer = () => (
  <div className="flex items-center justify-between py-4">
    <div className="font-extrabold text-secondary-dark dark:text-white-dark">
      mümin celal
    </div>
    <div className="flex items-center gap-5">
      <Link
        href="https://www.linkedin.com/in/mumin-celal-pinar/"
        target="_blank"
        passHref
      >
        <LinkedinIcon className="size-4" />
      </Link>
      <Link href="https://x.com/mumin_celal" target="_blank" passHref>
        <XIcon className="size-4" />
      </Link>
      <Link href="https://github.com/mumincelal" target="_blank" passHref>
        <GitHubIcon className="size-4" />
      </Link>
    </div>
  </div>
);
