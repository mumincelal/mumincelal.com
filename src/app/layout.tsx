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
    template: "%s | Mümin Celal",
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
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
