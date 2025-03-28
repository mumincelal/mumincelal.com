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
      className="text-balance bg-gradient-to-r from-gradient-1 via-gradient-2 to-gradient-3 bg-clip-text text-transparent"
    >
      Mümin Celal Pinar
    </Text>
    <Text variant="extralight" size={18} className="text-justify">
      I'm a <strong>a Software Engineer</strong> who loves creating digital
      solutions that work well and make life easier. With experience in
      different industries, I'm all about building reliable and efficient apps
      that improve user experiences. This space is where I share my projects,
      work, and tech interests. Take a look and feel free to reach out!
    </Text>
    <Link href="mailto:hello@mumincelal.com" passHref>
      <div className="flex items-center gap-2">
        <Text variant="light" size={24}>
          Say hi
        </Text>
        <RightArrowIcon />
      </div>
    </Link>
  </div>
);
