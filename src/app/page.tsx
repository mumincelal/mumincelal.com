import { Contact } from "~/app/_components/contact";
import { FeaturedExperiences } from "~/app/_components/featured-experiences";
import { FeaturedProjects } from "~/app/_components/featured-projects";
import { Intro } from "~/app/_components/intro";
import { Divider } from "~/components/divider";

const HomePage = () => (
  <div className="grid grid-cols-1 gap-30">
    <Intro />
    <FeaturedProjects />
    <Divider />
    <FeaturedExperiences />
    <Divider />
    <Contact />
  </div>
);

export default HomePage;
