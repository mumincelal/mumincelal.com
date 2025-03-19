import { IconArrowNarrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { Text } from "~/components/text";
import { PageUrl } from "~/constants";

export const Intro = () => (
  <div className="grid grid-cols-1 gap-6">
    <Text variant="extralight" size={16}>
      Hey, I'm
    </Text>
    <Text
      variant="medium"
      size={96}
      className="bg-gradient-to-r from-gradient-1 via-gradient-2 to-gradient-3 bg-clip-text text-transparent"
    >
      Mümin Celal Pinar
    </Text>
    <Text variant="extralight" size={18} className="text-justify">
      I'm a software engineer based in Izmir, Türkiye and also a communication
      and journalism student. I enjoy creating things that live on the internet,
      whether that be websites, applications, or anything in between. I have
      been freelancing for a year now while studying at the university and I've
      managed to gain a decent amount of experience and valuable knowledge from
      various fields throughout my projects/work, including web development,
      design, and content creation. I am passionate about learning new
      technologies and continuously improving my skills.
    </Text>
    <Link href={PageUrl.Contact} passHref>
      <div className="flex items-center gap-2">
        <Text variant="light" size={24}>
          Say hi
        </Text>
        <IconArrowNarrowRight size={36} stroke={1} />
      </div>
    </Link>
  </div>
);
