import Link from "next/link";
import { Text } from "~/components/text";
import { RightArrowIcon } from "~/icons/right-arrow";

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
      I'm <strong>a Software Engineer</strong> passionate about building
      high-quality digital solutions. With experience across various industries,
      I focus on creating efficient and reliable applications that enhance user
      experiences. This space showcases my work, projects, and interests in
      technology. Feel free to explore and connect!
    </Text>
    <Link href="mailto:mumincelalpinar@gmail.com" passHref>
      <div className="flex items-center gap-2">
        <Text variant="light" size={24}>
          Say hi
        </Text>
        <RightArrowIcon />
      </div>
    </Link>
  </div>
);
