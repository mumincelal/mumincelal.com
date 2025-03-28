import { Metadata } from "next";
import { Text } from "~/components/text";

export const metadata: Metadata = {
  title: "Contact"
};

const ContactPage = () => (
  <div className="flex flex-1 items-center justify-center">
    <Text>Hello, this is the contact page!</Text>
  </div>
);

export default ContactPage;
