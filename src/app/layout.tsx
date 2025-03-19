import { cn } from "@/src/lib/tailwind";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "~/styles/globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans"
});

export const metadata: Metadata = {
  title: {
    template: "%s | Mümin Celal",
    default: "Mümin Celal Pinar"
  },
  description: "Mümin Celal Pinar's personal website"
};

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body className={cn("h-screen", workSans.className)}>
      <div className="flex h-full flex-col justify-between">
        <div className="flex-1">{children}</div>
      </div>
    </body>
  </html>
);

export default RootLayout;
