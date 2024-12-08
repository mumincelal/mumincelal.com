import { Container } from "@/components/container";
import { CtaButton } from "@/components/cta-button";

export const Hero = () => (
  <div className="pt-32 pb-56">
    <Container>
      <div className="flex items-center justify-center">
        <div className="flex size-full items-stretch justify-between">
          <div className="flex max-w-3xl flex-col justify-between">
            <div className="flex flex-col space-y-6 pt-10">
              <div className="space-y-0">
                <h1 className="text-balance text-display text-gray-900">
                  Hello, I'm
                </h1>
                <h1 className="text-balance text-display text-gray-900">
                  Mümin Celal Pinar
                </h1>
              </div>
              <p className="text-body-large-400 text-gray-600">
                I'm a&nbsp;
                <span className="rounded bg-red-100 p-1 text-gray-900">
                  Full-Stack Developer
                </span>
                &nbsp;based in Izmir, Turkiye. I strives to build immersive and
                beautiful web applications through carefully crafted code and
                user-centric design.
              </p>
              <CtaButton className="bg-primary-500 text-body-regular-600 text-white active:bg-primary-600">
                Say Hello!
              </CtaButton>
            </div>
            <div className="flex items-center space-x-1">
              <div className="flex items-center justify-center rounded-l-md bg-[#EDD8FF]/50 px-3 py-5">
                <div className="flex flex-col items-center">
                  <h1 className="text-gray-700 text-heading-3">8 Y.</h1>
                  <p className="text-body-regular-400 text-gray-500">
                    Experience
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center bg-[#EDD8FF]/50 px-3 py-5">
                <div className="flex flex-col items-center">
                  <h1 className="text-gray-700 text-heading-3">15+</h1>
                  <p className="text-body-regular-400 text-gray-500">
                    Projects Completed
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center rounded-r-md bg-[#EDD8FF]/50 px-3 py-5">
                <div className="flex flex-col items-center">
                  <h1 className="text-gray-700 text-heading-3">10</h1>
                  <p className="text-body-regular-400 text-gray-500">
                    Happy Client
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="aspect-[3/4] h-[40rem] w-[30rem] rounded-3xl border border-gray-100" />
        </div>
      </div>
    </Container>
  </div>
);
