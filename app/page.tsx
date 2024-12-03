import { Container } from "@/components/container";
import Image from "next/image";

const Home = () => (
  <div>
    <Container>
      <div className="grid grid-rows-1">
        <div className="pt-32">
          <div className="flex justify-between">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col space-y-6">
                <h1 className="text-balance text-display">
                  <p>Hello, I'm</p>
                  <p>Mümin Celal Pinar</p>
                </h1>
                <p className="text-balance text-body-large-400 text-gray-600">
                  I'm a Freelance Developer based in Izmir, Turkiye. I strives
                  to build immersive and beautiful web applications through
                  carefully crafted code and user-centric design.
                </p>
              </div>
            </div>
            <Image
              className="rounded-lg border border-gray-50"
              src="/profile.png"
              alt="Profile"
              width={536}
              height={636}
            />
          </div>
        </div>
        <div>2</div>
      </div>
    </Container>
  </div>
);

export default Home;
