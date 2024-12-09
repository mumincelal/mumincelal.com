import { Header } from "@/app/_components/header";
import { Hero } from "@/app/_components/hero";
import { Process } from "@/app/_components/process";
import { CtaButton } from "@/components/cta-button";
import { IconButton } from "@/components/icon-button";
import { DownloadIcon } from "@/icons/download.icon";
import { LinkedInIcon } from "@/icons/linkedin.icon";

const Home = () => (
  <div className="relative flex size-full flex-col">
    <Header />
    <Hero />
    <div
      className="-translate-x-1/2 absolute top-[39%] left-1/2 flex w-[80rem] items-center justify-center rounded-2xl bg-white p-28 drop-shadow-md"
      id="about"
    >
      <div className="flex size-full items-center justify-between space-x-36">
        <div className="relative flex flex-col items-center">
          <div className="aspect-[3/4] h-[29.25em] w-[26.5rem] rounded-xl border border-gray-50" />
          <div className="-bottom-9 absolute flex w-fit items-center rounded bg-white p-3 drop-shadow-md">
            <IconButton className="border-none text-primary-500 hover:bg-primary-500 hover:text-white active:bg-primary-600">
              <LinkedInIcon />
            </IconButton>
            <IconButton className="border-none text-primary-500 hover:bg-primary-500 hover:text-white active:bg-primary-600">
              <LinkedInIcon />
            </IconButton>
            <IconButton className="border-none text-primary-500 hover:bg-primary-500 hover:text-white active:bg-primary-600">
              <LinkedInIcon />
            </IconButton>
            <IconButton className="border-none text-primary-500 hover:bg-primary-500 hover:text-white active:bg-primary-600">
              <LinkedInIcon />
            </IconButton>
            <IconButton className="border-none text-primary-500 hover:bg-primary-500 hover:text-white active:bg-primary-600">
              <LinkedInIcon />
            </IconButton>
          </div>
        </div>
        <div className="flex max-w-lg flex-col space-y-6 pt-10">
          <h2 className="text-balance text-gray-900 text-heading-2">
            I am Professional User Experience Designer
          </h2>
          <div className="space-y-1">
            <p className="text-body-large-400 text-gray-600">
              I design and develop services for customers specializing creating
              stylish, modern websites, web services and online stores. My
              passion is to design digital user experiences.
            </p>
            <p className="text-body-large-400 text-gray-600">
              I design and develop services for customers specializing creating
              stylish, modern websites, web services.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <CtaButton className="bg-primary-500 text-body-regular-600 text-white active:bg-primary-600">
              My Project
            </CtaButton>
            <CtaButton className="border border-primary-500 bg-white text-primary-500 active:border-primary-600 active:text-primary-600">
              <DownloadIcon /> <span>Download CV</span>
            </CtaButton>
          </div>
        </div>
      </div>
    </div>
    <Process />
    {/*<Portfolio />
    <Blog />
    <Services />
    <Contact /> */}
  </div>
);

// biome-ignore lint/style/noDefaultExport: It is a Next.js convention
export default Home;
