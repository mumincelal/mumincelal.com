import { Header } from "@/app/_components/header";
import { Hero } from "@/app/_components/hero";

const Home = () => (
  <div className="flex size-full flex-col">
    <Header />
    <Hero />
  </div>
);

// biome-ignore lint/style/noDefaultExport: It is a Next.js convention
export default Home;
