type ContainerProps = Readonly<{
  children: React.ReactNode;
}>;

export const Container = ({ children }: ContainerProps) => (
  <div className="container mx-auto px-2.5">{children}</div>
);
