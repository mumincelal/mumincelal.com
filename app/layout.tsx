import { cn } from "@/lib/tailwind";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/app/_components/footer";
import { Header } from "@/app/_components/header";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans"
});

export const metadata: Metadata = {
  title: "Mümin Celal Pinar",
  description: "Personal Portfolio."
};

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={cn("h-screen", workSans.className)}>
        <div className="flex h-full flex-col justify-between">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
