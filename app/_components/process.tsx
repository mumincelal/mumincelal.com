import { Container } from "@/components/container";
import { IconButton } from "@/components/icon-button";
import { ComputerIcon } from "@/icons/computer.icon";
import { GraphIcon } from "@/icons/graph.icon";
import { NotesIcon } from "@/icons/notes.icon";
import { PencilIcon } from "@/icons/pencil.icon";

export const Process = () => (
  <div className="bg-gray-50 pt-60 pb-36" id="process">
    <Container>
      <div className="grid grid-cols-2 items-center" id="process">
        <div className="flex flex-col space-y-6 pt-10">
          <h2 className="text-balance text-gray-900 text-heading-2">
            Work Process
          </h2>
          <div className="space-y-5">
            <p className="text-balance text-body-large-400 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris
              ultrices eget lorem ac vestibulum. Suspendis imperdiet,
            </p>
            <p className="text-balance text-body-large-400 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-6">
          <div className="space-y-8 rounded-xl bg-white p-8">
            <IconButton className="rounded-md border-none bg-primary-500 text-white active:bg-primary-600">
              <NotesIcon />
            </IconButton>
            <div className="space-y-2">
              <h3 className="text-balance text-gray-900 text-heading-5">
                1. Research
              </h3>
              <p className="text-body-regular-400 text-gray-600">
                I design and develop services for customers specializing
                creating stylish, modern websites, web services and online
                stores. My passion is to design digital user experiences.
              </p>
            </div>
          </div>
          <div className="space-y-8 rounded-xl bg-white p-8">
            <IconButton className="rounded-md border-none bg-[#EDD8FF]/50 text-primary-500">
              <GraphIcon />
            </IconButton>
            <div className="space-y-2">
              <h3 className="text-balance text-gray-900 text-heading-5">
                2. Analyze
              </h3>
              <p className="text-body-regular-400 text-gray-600">
                I design and develop services for customers specializing
                creating stylish, modern websites, web services and online
                stores. My passion is to design digital user experiences.
              </p>
            </div>
          </div>
          <div className="space-y-8 rounded-xl bg-white p-8">
            <IconButton className="rounded-md border-none bg-[#EDD8FF]/50 text-primary-500">
              <PencilIcon />
            </IconButton>
            <div className="space-y-2">
              <h3 className="text-balance text-gray-900 text-heading-5">
                3. Design
              </h3>
              <p className="text-body-regular-400 text-gray-600">
                I design and develop services for customers specializing
                creating stylish, modern websites, web services and online
                stores. My passion is to design digital user experiences.
              </p>
            </div>
          </div>
          <div className="space-y-8 rounded-xl bg-white p-8">
            <IconButton className="rounded-md border-none bg-[#EDD8FF]/50 text-primary-500">
              <ComputerIcon />
            </IconButton>
            <div className="space-y-2">
              <h3 className="text-balance text-gray-900 text-heading-5">
                4. Launch
              </h3>
              <p className="text-body-regular-400 text-gray-600">
                I design and develop services for customers specializing
                creating stylish, modern websites, web services and online
                stores. My passion is to design digital user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
);
