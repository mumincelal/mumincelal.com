type ContainerProps = Readonly<{
  children: React.ReactNode;
}>;

export const Container = ({ children }: ContainerProps) => (
  <div className="container mx-auto px-32">{children}</div>
);
