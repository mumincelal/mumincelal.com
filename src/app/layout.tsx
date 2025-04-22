import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Providers } from "~/app/providers";
import { cn } from "~/lib/tailwind";
import "~/styles/globals.css";

const trafikaSans = localFont({
  src: "./fonts/trafika-sans-regular.otf",
  style: "normal",
  variable: "--font-trafika-sans",
  display: "swap"
});

const sfProDisplay = localFont({
  src: "./fonts/sf-pro-display-regular.otf",
  style: "normal",
  variable: "--font-sf-pro-display",
  display: "swap"
});

const sfProDisplayMedium = localFont({
  src: "./fonts/sf-pro-display-medium.otf",
  style: "normal",
  variable: "--font-sf-pro-display-medium",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Mümin Celal Pinar - Product Minded Developer"
  },
  description: "Mümin Celal Pinar - Product Minded Developer"
};

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en" suppressHydrationWarning>
    <body
      className={cn(
        "min-h-screen bg-white-100 font-trafika-sans",
        trafikaSans.variable,
        sfProDisplay.variable,
        sfProDisplayMedium.variable
      )}
    >
      <Providers>
        <main className="mx-auto grid max-w-xl grid-cols-1 justify-items-center gap-28 p-4 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
          {children}
        </main>
      </Providers>
      <SpeedInsights />
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
