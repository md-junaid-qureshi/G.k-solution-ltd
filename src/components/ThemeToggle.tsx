"use client";

import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import { Palette, Check, ChevronDown } from "lucide-react";

export interface ThemeTokens {
  bgBase: string;
  bgAlt: string;
  bgSurface: string;
  bgContrast: string;
  textHeading: string;
  textBody: string;
  textMuted: string;
  accent: string;
  accentHover: string;
  borderUi: string;
}

export interface ThemeOption {
  id:
    | "warm-linen"
    | "monolith"
    | "smoked-slate"
    | "emerald-brass"
    | "midnight-obsidian"
    | "royal-navy"
    | "espresso-bronze"
    | "nordic-travertine";
  name: string;
  shortName: string;
  tagline: string;
  mood: string;
  tokens: ThemeTokens;
  colors: {
    page: string;
    card: string;
    accent: string;
    text: string;
    border: string;
  };
}

export const THEMES: ThemeOption[] = [
  {
    id: "warm-linen",
    name: "Warm Linen",
    shortName: "Warm Linen",
    tagline: "Original Unaltered Baseline",
    mood: "Warm Cream, Charcoal & Gold",
    tokens: {
      bgBase: "#FBFBFA",
      bgAlt: "#F4F1EA",
      bgSurface: "#FFFFFF",
      bgContrast: "#1C1917",
      textHeading: "#1C1917",
      textBody: "#57534E",
      textMuted: "#A8A29E",
      accent: "#C5A880",
      accentHover: "#AF8F63",
      borderUi: "#E7E5E4",
    },
    colors: {
      page: "#FBFBFA",
      card: "#FFFFFF",
      accent: "#C5A880",
      text: "#1C1917",
      border: "#E7E5E4",
    },
  },
  {
    id: "monolith",
    name: "Monolithic Minimalist",
    shortName: "Monolith",
    tagline: "Architectural Off-White & Smoked Graphite",
    mood: "High-contrast precision off-white and deep graphite",
    tokens: {
      bgBase: "#F7F7F8",
      bgAlt: "#ECECEE",
      bgSurface: "#FFFFFF",
      bgContrast: "#111113",
      textHeading: "#0A0A0C",
      textBody: "#4A4A52",
      textMuted: "#8E8E98",
      accent: "#C69A5A",
      accentHover: "#AB8144",
      borderUi: "#DFDFE3",
    },
    colors: {
      page: "#F7F7F8",
      card: "#FFFFFF",
      accent: "#C69A5A",
      text: "#0A0A0C",
      border: "#DFDFE3",
    },
  },
  {
    id: "smoked-slate",
    name: "Smoked Slate",
    shortName: "Smoked Slate",
    tagline: "Executive Hospitality Multi-Tone",
    mood: "Multi-layered charcoal depth with warm amber highlights",
    tokens: {
      bgBase: "#181A1C",
      bgAlt: "#131416",
      bgSurface: "#222528",
      bgContrast: "#0D0E0F",
      textHeading: "#F5F5F6",
      textBody: "#B0B5B9",
      textMuted: "#6B7278",
      accent: "#E2A765",
      accentHover: "#CB8E4A",
      borderUi: "#2D3236",
    },
    colors: {
      page: "#181A1C",
      card: "#222528",
      accent: "#E2A765",
      text: "#F5F5F4",
      border: "#2D3236",
    },
  },
  {
    id: "emerald-brass",
    name: "Forest Emerald & Aged Brass",
    shortName: "Emerald & Brass",
    tagline: "Deep Biophilic Architectural",
    mood: "Lush botanical deep emerald with aged brass accents",
    tokens: {
      bgBase: "#0E1713",
      bgAlt: "#080E0B",
      bgSurface: "#16241E",
      bgContrast: "#040705",
      textHeading: "#F1EFEA",
      textBody: "#9FB2A7",
      textMuted: "#62756A",
      accent: "#D1AB6C",
      accentHover: "#B89255",
      borderUi: "#22372E",
    },
    colors: {
      page: "#0E1713",
      card: "#16241E",
      accent: "#D1AB6C",
      text: "#F1EFEA",
      border: "#22372E",
    },
  },
  {
    id: "midnight-obsidian",
    name: "Midnight Obsidian & Platinum",
    shortName: "Midnight Obsidian",
    tagline: "High-Tech Architectural Dark",
    mood: "Pure obsidian void with electric cyan sky accents",
    tokens: {
      bgBase: "#0C0C0E",
      bgAlt: "#141418",
      bgSurface: "#1B1B20",
      bgContrast: "#000000",
      textHeading: "#FFFFFF",
      textBody: "#A1A1AA",
      textMuted: "#52525B",
      accent: "#38BDF8",
      accentHover: "#0EA5E9",
      borderUi: "#272730",
    },
    colors: {
      page: "#0C0C0E",
      card: "#1B1B20",
      accent: "#38BDF8",
      text: "#FFFFFF",
      border: "#272730",
    },
  },
  {
    id: "royal-navy",
    name: "Royal Navy & Polished Champagne",
    shortName: "Royal Navy",
    tagline: "Corporate Boardroom Prestige",
    mood: "Deep diplomatic navy with champagne brilliance",
    tokens: {
      bgBase: "#0B132B",
      bgAlt: "#060B19",
      bgSurface: "#142044",
      bgContrast: "#03060D",
      textHeading: "#F8FAFC",
      textBody: "#94A3B8",
      textMuted: "#64748B",
      accent: "#F4C47E",
      accentHover: "#DBA85E",
      borderUi: "#1E3060",
    },
    colors: {
      page: "#0B132B",
      card: "#142044",
      accent: "#F4C47E",
      text: "#F8FAFC",
      border: "#1E3060",
    },
  },
  {
    id: "espresso-bronze",
    name: "Roasted Espresso & Raw Bronze",
    shortName: "Espresso & Bronze",
    tagline: "Luxury Italian Joinery & Millwork",
    mood: "Artisanal roasted walnut depth with raw bronze warmth",
    tokens: {
      bgBase: "#1A1412",
      bgAlt: "#120D0C",
      bgSurface: "#261D1A",
      bgContrast: "#0A0706",
      textHeading: "#FAF4F0",
      textBody: "#B5A49D",
      textMuted: "#786B65",
      accent: "#DDA15E",
      accentHover: "#C58A47",
      borderUi: "#3B2D27",
    },
    colors: {
      page: "#1A1412",
      card: "#261D1A",
      accent: "#DDA15E",
      text: "#FAF4F0",
      border: "#3B2D27",
    },
  },
  {
    id: "nordic-travertine",
    name: "Nordic Travertine & Smoked Walnut",
    shortName: "Nordic Travertine",
    tagline: "Bespoke Editorial Luxury",
    mood: "Natural Italian travertine & smoked dark walnut",
    tokens: {
      bgBase: "#EFECE6",
      bgAlt: "#E5E0D8",
      bgSurface: "#F8F6F2",
      bgContrast: "#181513",
      textHeading: "#1F1B18",
      textBody: "#544E48",
      textMuted: "#8C827A",
      accent: "#B38646",
      accentHover: "#986E32",
      borderUi: "#D8D2C7",
    },
    colors: {
      page: "#EFECE6",
      card: "#F8F6F2",
      accent: "#B38646",
      text: "#1F1B18",
      border: "#D8D2C7",
    },
  },
];

interface ThemeToggleProps {
  align?: "left" | "right";
  direction?: "up" | "down";
}

export default function ThemeToggle({
  align = "right",
  direction = "down",
}: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!mounted) {
    return (
      <div
        className="h-8 sm:h-9 w-8 sm:w-28 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] opacity-40 animate-pulse"
        aria-hidden="true"
      />
    );
  }

  const rawActive = theme || resolvedTheme || "warm-linen";
  const activeThemeId: ThemeOption["id"] =
    rawActive === "dark" || rawActive === "smoked-slate"
      ? "smoked-slate"
      : rawActive === "monolith"
      ? "monolith"
      : rawActive === "emerald-brass"
      ? "emerald-brass"
      : rawActive === "midnight-obsidian"
      ? "midnight-obsidian"
      : rawActive === "royal-navy"
      ? "royal-navy"
      : rawActive === "espresso-bronze"
      ? "espresso-bronze"
      : rawActive === "nordic-travertine"
      ? "nordic-travertine"
      : "warm-linen";

  const currentTheme =
    THEMES.find((t) => t.id === activeThemeId) || THEMES[0];

  return (
    <div ref={containerRef} className="relative inline-block text-left">
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-label={`Current theme: ${currentTheme.name}. Open theme preview switcher`}
        className="group relative flex h-8 sm:h-9 items-center gap-1.5 sm:gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] px-2 sm:px-3 text-[var(--text-primary)] transition-all duration-300 hover:border-[var(--accent-gold)] hover:shadow-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-gold)] cursor-pointer"
      >
        <span
          className="h-2.5 w-2.5 rounded-full border border-black/15 transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: currentTheme.colors.accent }}
          aria-hidden="true"
        />
        <Palette className="h-3.5 w-3.5 text-[var(--text-secondary)] group-hover:text-[var(--accent-gold)] transition-colors" />
        <span className="hidden md:inline-block text-[11px] font-medium tracking-wider uppercase text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors whitespace-nowrap">
          {currentTheme.shortName}
        </span>
        <ChevronDown
          className={`h-3 w-3 text-[var(--text-secondary)] transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[var(--accent-gold)]" : ""
          }`}
        />
      </button>

      {/* Popover Dropdown */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Theme Preview Switcher"
          className={`absolute ${
            direction === "up" ? "bottom-full mb-2" : "top-full mt-2"
          } ${
            align === "left" ? "left-0" : "right-0"
          } z-[100] w-72 sm:w-80 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-3 shadow-2xl backdrop-blur-xl transition-all`}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-[var(--border-subtle)]">
            <div>
              <h3 className="text-xs font-semibold tracking-wider uppercase text-[var(--text-primary)] font-serif">
                Architectural Themes
              </h3>
              <p className="text-[10px] text-[var(--text-secondary)] tracking-wide">
                Live color palette preview switcher
              </p>
            </div>
            <span className="text-[9px] font-mono uppercase tracking-widest px-1.5 py-0.5 rounded border border-[var(--border-subtle)] text-[var(--text-secondary)] bg-[var(--bg-page)]">
              8 Palettes
            </span>
          </div>

          {/* Theme Options */}
          <div
            className="space-y-1.5 max-h-[60vh] overflow-y-auto pr-1"
            role="radiogroup"
            aria-label="Available themes"
          >
            {THEMES.map((themeOption) => {
              const isSelected = activeThemeId === themeOption.id;
              return (
                <button
                  key={themeOption.id}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => {
                    setTheme(themeOption.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left p-2.5 rounded-lg border transition-all duration-200 group/item relative cursor-pointer ${
                    isSelected
                      ? "border-[var(--accent-gold)] bg-[var(--bg-page)] shadow-xs"
                      : "border-transparent hover:border-[var(--border-subtle)] hover:bg-[var(--bg-page)]/70"
                  }`}
                >
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-xs font-semibold text-[var(--text-primary)] tracking-wide">
                      {themeOption.name}
                    </span>
                    {isSelected && (
                      <span className="flex items-center gap-1 text-[10px] font-bold text-[var(--accent-gold)] uppercase tracking-wider">
                        <Check className="h-3 w-3" strokeWidth={2.5} />
                        <span>Active</span>
                      </span>
                    )}
                  </div>

                  <p className="text-[11px] text-[var(--text-secondary)] line-clamp-1 mb-2">
                    {themeOption.tagline}
                  </p>

                  {/* 5-Token Hierarchical Depth Preview Bar */}
                  <div className="flex items-center gap-1.5 pt-1.5 border-t border-[var(--border-subtle)]/70">
                    <span className="text-[9px] font-mono text-[var(--text-secondary)] uppercase tracking-wider mr-1">
                      Depth:
                    </span>
                    <div className="flex items-center gap-1">
                      <span
                        title={`Base: ${themeOption.tokens.bgBase}`}
                        className="h-3.5 w-3.5 rounded-full border border-black/20 shadow-xs"
                        style={{ backgroundColor: themeOption.tokens.bgBase }}
                      />
                      <span
                        title={`Alt: ${themeOption.tokens.bgAlt}`}
                        className="h-3.5 w-3.5 rounded-full border border-black/20 shadow-xs"
                        style={{ backgroundColor: themeOption.tokens.bgAlt }}
                      />
                      <span
                        title={`Surface: ${themeOption.tokens.bgSurface}`}
                        className="h-3.5 w-3.5 rounded-full border border-black/20 shadow-xs"
                        style={{ backgroundColor: themeOption.tokens.bgSurface }}
                      />
                      <span
                        title={`Contrast: ${themeOption.tokens.bgContrast}`}
                        className="h-3.5 w-3.5 rounded-full border border-white/20 shadow-xs"
                        style={{ backgroundColor: themeOption.tokens.bgContrast }}
                      />
                      <span
                        title={`Accent: ${themeOption.tokens.accent}`}
                        className="h-3.5 w-3.5 rounded-full border border-black/20 shadow-xs"
                        style={{ backgroundColor: themeOption.tokens.accent }}
                      />
                    </div>
                    <span className="ml-auto text-[9px] font-mono text-[var(--text-secondary)] opacity-80">
                      {themeOption.tokens.accent}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="mt-2.5 pt-2 border-t border-[var(--border-subtle)] text-center">
            <span className="text-[10px] text-[var(--text-secondary)]">
              Preserves typography & layout integrity
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

