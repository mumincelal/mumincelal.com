import { SocialButton } from "~/app/_components/social-button";
import { Text } from "~/components/text";
import { socials } from "~/constants";

export const Contact = () => (
  <div id="contact" className="flex flex-col gap-5 lg:flex-row lg:gap-25">
    <Text variant="light" size={18} className="uppercase">
      Contact
    </Text>
    <div className="flex flex-wrap items-center gap-3">
      {socials.map((social) => {
        const SocialIcon = social.icon;

        return (
          <SocialButton key={social.name} href={social.href}>
            {<SocialIcon />}
            {social.name}
          </SocialButton>
        );
      })}
    </div>
  </div>
);
