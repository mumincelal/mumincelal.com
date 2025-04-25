type ShadowWrapperProps = Pick<
  React.HTMLAttributes<HTMLDivElement>,
  "children"
>;

export const ShadowWrapper = ({ children }: ShadowWrapperProps) => (
  <div className="inline-flex w-fit overflow-hidden rounded-[.625rem] bg-gradient-to-b from-light-50 to-light-500 p-[.2rem] shadow-[0_0_1px_#00000012,0_0_1px_#0000000d,0_3px_3px_#00000040,0_1px_3px_#0000001f] active:shadow-[0_0_.23px_#0000000d,0_0_.23px_#00000012]">
    {children}
  </div>
);
