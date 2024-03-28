"use client";
import { ThemeProvider } from "next-themes";

const ThemeProviderSection = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderSection;
