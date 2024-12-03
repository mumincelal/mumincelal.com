type CtaButtonProps = Readonly<{
  children: React.ReactNode;
}>;

export const CtaButton = ({ children }: CtaButtonProps) => (
  <button className="rounded bg-primary-500 px-6 py-3 text-white" type="button">
    {children}
  </button>
);
