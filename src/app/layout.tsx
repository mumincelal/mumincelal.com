import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "~/app/providers";
import { cn } from "~/lib/tailwind";
import "~/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-work-sans"
});

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Mümin Celal Pinar"
  },
  description: "Mümin Celal Pinar"
};

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en" suppressHydrationWarning>
    <body className={cn("min-h-screen", inter.className)}>
      <Providers>
        <div className="container mx-auto flex min-h-screen max-w-5xl flex-col gap-15 px-10 pt-10 pb-20 md:gap-30 lg:px-0">
          <main className="flex-1">{children}</main>
        </div>
      </Providers>
      <SpeedInsights />
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
