type RenderIfProps<T> = {
  when: T | undefined | null | false;
  fallback?: React.ReactNode;
  children: React.ReactNode | ((item: T) => React.ReactNode);
};

export const RenderIf = <T,>({
  when,
  fallback = null,
  children
}: RenderIfProps<T>) => {
  if (when) {
    if (typeof children === "function") {
      return children(when);
    }

    return children;
  }

  return fallback;
};
