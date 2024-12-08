import { CtaButton } from "@/components/cta-button";
import { IconButton } from "@/components/icon-button";
import { Logo } from "@/components/logo";
import { ArrowRightIcon } from "@/icons/arrow-right.icon";
import { DownloadIcon } from "@/icons/download.icon";
import { LinkedInIcon } from "@/icons/linkedin.icon";
import { SendIcon } from "@/icons/send.icon";

const Components = () => (
  <div className="size-full">
    <div className="flex flex-col space-y-5 p-5">
      <Logo />
      <div className="flex items-center space-x-5">
        <CtaButton className="bg-primary-500 text-body-regular-600 text-white active:bg-primary-600">
          Cta Button
        </CtaButton>
        <CtaButton className="bg-primary-500 text-body-regular-600 text-white active:bg-primary-600">
          <span>Cta Button</span> <ArrowRightIcon />
        </CtaButton>
        <CtaButton className="bg-primary-500 text-body-regular-600 text-white active:bg-primary-600">
          <span>Cta Button</span> <SendIcon />
        </CtaButton>
        <CtaButton className="border border-primary-500 bg-white text-primary-500 active:border-primary-600 active:text-primary-600">
          Cta Button
        </CtaButton>
        <CtaButton className="border border-primary-500 bg-white text-primary-500 active:border-primary-600 active:text-primary-600">
          <span>Cta Button</span> <ArrowRightIcon />
        </CtaButton>
        <CtaButton className="border border-primary-500 bg-white text-primary-500 active:border-primary-600 active:text-primary-600">
          <DownloadIcon /> <span>Cta Button</span>
        </CtaButton>
      </div>
      <div className="flex items-center space-x-5">
        <IconButton className="text-primary-500 hover:bg-primary-500 hover:text-white active:bg-primary-600">
          <LinkedInIcon />
        </IconButton>
        <IconButton className="bg-primary-500 text-white active:bg-primary-600">
          <LinkedInIcon />
        </IconButton>
      </div>
    </div>
  </div>
);

// biome-ignore lint/style/noDefaultExport: It is a Next.js convention
export default Components;
