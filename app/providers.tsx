"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

type ProvidersProps = Readonly<{ children: ReactNode }>;

export const Providers = ({ children }: ProvidersProps) => {
  let mutableChildren = children;

  mutableChildren = (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {mutableChildren}
    </ThemeProvider>
  );

  return mutableChildren;
};
