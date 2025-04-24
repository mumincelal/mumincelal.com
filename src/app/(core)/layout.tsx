import { Footer } from "~/app/(core)/_components/footer";

const CoreLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    {children}
    <Footer />
  </>
);
export default CoreLayout;
