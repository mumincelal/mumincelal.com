type ShowProps<T> = {
  when: T | undefined | null | false;
  fallback?: React.ReactNode;
  children: React.ReactNode | ((item: T) => React.ReactNode);
};

export const Show = <T,>({ when, fallback = null, children }: ShowProps<T>) => {
  if (when) {
    if (typeof children === "function") {
      return children(when);
    }

    return children;
  }

  return fallback;
};
