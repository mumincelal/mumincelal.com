type ContainerProps = Readonly<{
  children: React.ReactNode;
}>;

export const Container = ({ children }: ContainerProps) => (
  <div className="px-[300]">{children}</div>
);
