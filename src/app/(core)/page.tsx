import { Clients } from "~/app/(core)/_components/clients";
import { Experiences } from "~/app/(core)/_components/experiences";
import { FeaturedProjects } from "~/app/(core)/_components/featured-projects";
import { Hero } from "~/app/(core)/_components/hero";

const HomePage = () => (
  <div className="grid w-full grid-cols-1 gap-30">
    <Hero />
    <FeaturedProjects />
    <Clients />
    <Experiences />
  </div>
);

export default HomePage;
