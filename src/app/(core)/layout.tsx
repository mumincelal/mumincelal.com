import { Footer } from "~/app/(core)/_components/footer";

const CoreLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};
export default CoreLayout;
