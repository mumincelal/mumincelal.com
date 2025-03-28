import { Contact } from "~/app/_components/contact";
import { Intro } from "~/app/_components/intro";

const HomePage = () => (
  <div className="grid grid-cols-1 gap-30">
    <Intro />
    {/* <FeaturedProjects /> */}
    <Contact />
  </div>
);

export default HomePage;
