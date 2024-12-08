import { ScreenSize } from "@/components/screen-size";
import { cn } from "@/lib/tailwind";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans"
});

// biome-ignore lint/nursery/useComponentExportOnlyModules: It is a Next.js metadata convention
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
  <html lang="en" suppressHydrationWarning>
    <body className={cn("h-screen", workSans.className)}>
      <div className="flex h-full flex-col justify-between">
        <div className="flex-1">{children}</div>
      </div>
      {/* biome-ignore lint/nursery/noProcessEnv: No need extra config file for processEnvs because there is only one processEnv */}
      {process.env.NODE_ENV === "development" && <ScreenSize />}
    </body>
  </html>
);

// biome-ignore lint/style/noDefaultExport: It is a Next.js convention
export default RootLayout;
