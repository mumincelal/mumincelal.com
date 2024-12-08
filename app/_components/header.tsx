import { Container } from "@/components/container";
import { CtaButton } from "@/components/cta-button";
import { Logo } from "@/components/logo";
import { NAV_ITEMS } from "@/configs/constants";
import { cn } from "@/lib/tailwind";
import Link from "next/link";

export const Header = () => (
  <Container>
    <div className="flex items-center justify-between py-5">
      <div className="flex items-center space-x-3">
        <Logo />
        <span className="text-gray-900 text-heading-3">Mümin Celal</span>
      </div>
      <div className="flex items-center">
        {NAV_ITEMS.map((navItem) => (
          <Link key={navItem.key} href={navItem.href} passHref>
            <CtaButton
              className={cn(
                "text-body-regular-600 text-gray-900 hover:text-primary-500",
                {
                  "bg-primary-500 text-white hover:text-white active:bg-primary-600":
                    navItem.isHighlighted
                }
              )}
            >
              {navItem.label}
            </CtaButton>
          </Link>
        ))}
      </div>
    </div>
  </Container>
);
