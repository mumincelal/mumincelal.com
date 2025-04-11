"use client";

import { scan } from "react-scan";

scan({ enabled: true });

export const Providers = ({ children }: React.PropsWithChildren) => {
  const mutableChildren = children;

  return mutableChildren;
};
