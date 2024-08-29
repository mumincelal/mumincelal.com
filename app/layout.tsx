import { Header } from "@/app/_components/header";
import { Providers } from "@/app/providers";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/tailwind";

const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mümin Celal Pinar",
  description: "My personal website and portfolio."
};

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={cn(
          "px-7 py-4 sm:px-8 sm:py-2.5 md:px-12 lg:px-28",
          sourceSans.className
        )}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
