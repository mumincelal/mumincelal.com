import { Container } from "@/components/container";
import { WhiteLogo } from "@/components/white-logo";
import { NAVIGATION_ITEMS } from "@/configs/constants";
import Link from "next/link";

export const Footer = () => (
  <footer className="h-[300] w-full bg-gray-800 pt-40">
    <Container>
      <div className="flex items-center justify-between">
        <WhiteLogo />
        <div className="flex items-center space-x-2.5">
          {NAVIGATION_ITEMS.map((item) => (
            <Link key={item.key} href={item.href}>
              <span className="text-body-regular-400 text-gray-50">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
        <p className="text-white">
          Copyright &#169; {new Date().getFullYear()} Mümin Celal Pinar.
        </p>
      </div>
    </Container>
  </footer>
);
