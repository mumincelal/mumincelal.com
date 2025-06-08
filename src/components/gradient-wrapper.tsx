type GradientWrapperProps = Pick<
  React.HTMLAttributes<HTMLDivElement>,
  "children"
>;

export const GradientWrapper = ({ children }: GradientWrapperProps) => {
  return (
    <div className="inline-flex w-fit overflow-visible rounded-[0.875rem] bg-gradient-to-b from-light-600 via-light-600 to-light-50 p-[0.25rem] transition-all duration-200">
      {children}
    </div>
  );
};
