import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "~/app/providers";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
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
      <Providers>
        <div className="container mx-auto min-h-screen max-w-5xl pt-10 pb-30">
          <div className="grid grid-cols-1 gap-30">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </Providers>
    </body>
  </html>
);

export default RootLayout;
