"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

interface Props extends ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children, attribute = "class", ...props }: Props) {
  // Wraps app with next-themes provider for theme management
  return (
    <NextThemesProvider attribute={attribute} {...props}>
      {children}
    </NextThemesProvider>
  );
}
