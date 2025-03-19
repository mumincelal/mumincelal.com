"use client";

import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps
} from "next-themes";
import { scan } from "react-scan";

scan({ enabled: true });

export const Providers = ({ children }: React.PropsWithChildren) => {
  const mutableChildren = children;

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      storageKey="mumincelal.theme"
      enableSystem
      disableTransitionOnChange
    >
      {mutableChildren}
    </ThemeProvider>
  );
};

const ThemeProvider = ({
  children,
  ...props
}: React.PropsWithChildren<ThemeProviderProps>) => (
  <NextThemesProvider {...props}>{children}</NextThemesProvider>
);
