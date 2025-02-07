"use client";
import { ReactNode, useEffect, useState } from "react";
import { useAtom } from "jotai";
import { themeAtom } from "../state/themeAtom";
import { LightTheme, DarkTheme } from "../themes";
import { ThemeProvider } from "styled-components";

interface ThemeWrapperProps {
  children: ReactNode;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
  const [theme] = useAtom(themeAtom);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const selectedTheme = theme === LightTheme ? LightTheme : DarkTheme;

  return <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
