import { FeaturedProjects } from "~/app/(core)/_components/featured-projects";
import { Hero } from "~/app/(core)/_components/hero";

const HomePage = () => (
  <div className="grid w-full grid-cols-1 gap-30">
    <Hero />
    <FeaturedProjects />
  </div>
);

export default HomePage;
