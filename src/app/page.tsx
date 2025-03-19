import { Contact } from "~/app/_components/contact";
import { FeaturedExperiences } from "~/app/_components/featured-experiences";
import { FeaturedProjects } from "~/app/_components/featured-projects";
import { Intro } from "~/app/_components/intro";
import { Divider } from "~/components/divider";

const HomePage = () => (
  <>
    <Intro />
    <FeaturedProjects />
    <Divider />
    <FeaturedExperiences />
    <Divider />
    <Contact />
  </>
);

export default HomePage;
