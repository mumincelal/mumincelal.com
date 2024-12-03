import { Container } from "@/components/container";
import { CtaButton } from "@/components/cta-button";
import { DarkLogo } from "@/components/dark-logo";
import { NAVIGATION_ITEMS } from "@/configs/constants";
import Link from "next/link";

export const Header = () => (
  <header className="h-24 w-full py-5">
    <Container>
      <div className="flex items-center justify-between">
        <DarkLogo />
        <div className="flex items-center space-x-5">
          {NAVIGATION_ITEMS.map((item) => (
            <Link key={item.key} href={item.href}>
              {item.isButton ? (
                <CtaButton>{item.label}</CtaButton>
              ) : (
                <span className="text-body-regular-500 text-gray-900">
                  {item.label}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </Container>
  </header>
);
