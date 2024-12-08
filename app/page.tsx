import { About } from "@/app/_components/about";
import { Blog } from "@/app/_components/blog";
import { Contact } from "@/app/_components/contact";
import { Header } from "@/app/_components/header";
import { Hero } from "@/app/_components/hero";
import { Portfolio } from "@/app/_components/portfolio";
import { Services } from "@/app/_components/services";

const Home = () => (
  <div className="flex size-full flex-col">
    <Header />
    <Hero />
    <About />
    <Portfolio />
    <Blog />
    <Services />
    <Contact />
  </div>
);

// biome-ignore lint/style/noDefaultExport: It is a Next.js convention
export default Home;
