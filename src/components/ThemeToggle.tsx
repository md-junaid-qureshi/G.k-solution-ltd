"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="h-8 w-8 sm:h-9 sm:w-9 rounded-full border border-[var(--border-primary)] bg-[var(--bg-surface)] opacity-50"
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark" || theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-[var(--border-primary)] bg-[var(--bg-surface)] text-[var(--text-primary)] transition-all duration-300 hover:border-[var(--accent-gold)] hover:shadow-md focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-gold)]"
    >
      <Sun
        className={`h-4 w-4 transition-all duration-300 ${
          isDark
            ? "rotate-90 scale-0 opacity-0 absolute"
            : "rotate-0 scale-100 opacity-100 text-[var(--accent-gold)]"
        }`}
        strokeWidth={1.5}
      />
      <Moon
        className={`h-4 w-4 transition-all duration-300 ${
          isDark
            ? "rotate-0 scale-100 opacity-100 text-[var(--accent-gold)]"
            : "-rotate-90 scale-0 opacity-0 absolute"
        }`}
        strokeWidth={1.5}
      />
    </button>
  );
}
