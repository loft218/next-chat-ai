"use client";

import { useEffect, useState } from "react";

export type ThemeMode = "dark" | "light";

export function useTheme() {
  const [themeMode, setThemeMode] = useState<ThemeMode>();

  useEffect(() => {
    const element = document.documentElement;
    const storageTheme = localStorage.getItem("theme") as ThemeMode;

    if (storageTheme) {
      element.classList.toggle("dark", storageTheme === "dark");
      return setThemeMode(storageTheme);
    }

    const darkSchema =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    element.classList.toggle("dark", darkSchema);
    return setThemeMode(darkSchema ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const element = document.documentElement;
    localStorage.setItem("theme", themeMode === "dark" ? "light" : "dark");
    element.classList.toggle("dark");
    return setThemeMode(themeMode === "dark" ? "light" : "dark");
  };

  return { themeMode, toggleTheme };
}
