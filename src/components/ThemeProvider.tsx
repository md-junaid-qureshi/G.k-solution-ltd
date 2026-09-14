"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

function DarkClassSync() {
  const { theme, resolvedTheme } = useTheme();

  React.useEffect(() => {
    const active = theme || resolvedTheme;
    const isDarkTheme =
      active === "smoked-slate" ||
      active === "dark" ||
      active === "emerald-brass" ||
      active === "midnight-obsidian" ||
      active === "royal-navy" ||
      active === "espresso-bronze";
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme, resolvedTheme]);

  return null;
}

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="warm-linen"
      themes={[
        "warm-linen",
        "monolith",
        "smoked-slate",
        "emerald-brass",
        "midnight-obsidian",
        "royal-navy",
        "espresso-bronze",
        "nordic-travertine",
      ]}
      value={{
        "warm-linen": "warm-linen",
        monolith: "monolith",
        "smoked-slate": "smoked-slate",
        "emerald-brass": "emerald-brass",
        "midnight-obsidian": "midnight-obsidian",
        "royal-navy": "royal-navy",
        "espresso-bronze": "espresso-bronze",
        "nordic-travertine": "nordic-travertine",
        "terracotta-clay": "midnight-obsidian",
        light: "warm-linen",
        dark: "smoked-slate",
      }}
      enableSystem={false}
      {...props}
    >
      <DarkClassSync />
      {children}
    </NextThemesProvider>
  );
}

