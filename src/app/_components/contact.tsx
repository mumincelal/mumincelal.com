import { SocialButton } from "~/app/_components/social-button";
import { socials } from "~/constants";

export const Contact = () => (
  <div id="contact" className="flex items-center justify-between">
    <SocialButton key="email" href="mailto:hello@mumincelal.com">
      hello@mumincelal.com
    </SocialButton>
    <div className="flex items-center gap-3">
      {socials.map((social) => {
        const SocialIcon = social.icon;

        return (
          <SocialButton key={social.id} href={social.href}>
            {<SocialIcon className="size-4" />}
          </SocialButton>
        );
      })}
    </div>
  </div>
);
