"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Mail, Menu, X, ChevronRight } from "lucide-react";
import {
  IconInstagram,
  IconLinkedin,
  IconFacebook,
  IconYoutube,
} from "@/components/icons";
import { company, navigation, socialLinks } from "@/lib/data";
import type { SocialLink } from "@/lib/data";
import ThemeToggle from "@/components/ThemeToggle";

const socialIconMap = {
  instagram: IconInstagram,
  linkedin: IconLinkedin,
  facebook: IconFacebook,
  youtube: IconYoutube,
} as const;

function SocialIcon({ link }: { link: SocialLink }) {
  const Icon = socialIconMap[link.icon];
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.label}
      className="text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--accent-gold)]"
    >
      <Icon size={14} />
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300">
      {/* ── Compact 1-Line Topbar on Mobile / Full on Desktop ─ */}
      <div
        className={`border-b border-[var(--border-primary)] bg-[var(--bg-surface)]/95 backdrop-blur-sm transition-all duration-500 ${
          scrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-1.5 sm:py-2">
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs tracking-wide text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-gold)] whitespace-nowrap"
            >
              <Phone size={11} strokeWidth={1.25} />
              <span>{company.phone}</span>
            </a>
            <a
              href={`mailto:${company.email}`}
              className="hidden items-center gap-2 text-xs tracking-wide text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-gold)] md:flex"
            >
              <Mail size={11} strokeWidth={1.25} />
              <span>{company.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            {socialLinks.map((link) => (
              <SocialIcon key={link.label} link={link} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Nav ────────────────────────────────────── */}
      <nav
        className={`border-b border-[var(--border-primary)] bg-[var(--bg-surface)]/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3">
          {/* Logo & Brand Lockup */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="overflow-hidden rounded-md border border-neutral-800 bg-[#121212] p-1 shadow-sm flex-shrink-0">
              <Image
                src="/logo.jpeg"
                alt="GK Space Solutions LLP"
                width={48}
                height={48}
                className="h-10 sm:h-11 w-auto object-contain"
                priority
                unoptimized
              />
            </div>
            <span className="font-serif tracking-widest text-base sm:text-lg font-bold uppercase text-[var(--text-primary)] transition-colors">
              <span className="text-[#DFB163]">G</span>K SPACE SOLUTIONS LLP
            </span>
          </Link>

          {/* Desktop Nav Links & Theme Toggle */}
          <div className="hidden items-center gap-4 md:flex lg:gap-7">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-xs lg:text-[13px] font-medium uppercase tracking-[0.12em] lg:tracking-[0.15em] transition-colors duration-300 whitespace-nowrap ${
                  pathname === item.href
                    ? "text-[var(--accent-gold)]"
                    : "text-[var(--text-primary)] hover:text-[var(--accent-gold)]"
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-[var(--accent-gold)]" />
                )}
              </Link>
            ))}

            {/* Desktop Theme Toggle */}
            <div className="pl-2 border-l border-[var(--border-primary)]">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center p-1.5 text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X size={22} strokeWidth={1.25} />
              ) : (
                <Menu size={22} strokeWidth={1.25} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Drawer (For screens < 768px) ──────────── */}
      <div
        className={`fixed inset-0 top-0 z-40 transition-all duration-500 md:hidden ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 h-full w-[300px] max-w-[85vw] bg-[var(--bg-surface)] text-[var(--text-primary)] border-l border-[var(--border-primary)] shadow-2xl transition-transform duration-500 ease-out flex flex-col justify-between ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <div className="flex items-center justify-between border-b border-[var(--border-primary)] px-5 py-4">
              <div className="flex items-center gap-2.5 min-w-0 pr-2">
                <div className="overflow-hidden rounded-md border border-neutral-800 bg-[#121212] p-1 shadow-sm flex-shrink-0">
                  <Image
                    src="/logo.jpeg"
                    alt="GK Space Solutions LLP"
                    width={36}
                    height={36}
                    className="h-8 w-auto object-contain"
                    priority
                    unoptimized
                  />
                </div>
                <span className="font-serif tracking-wider text-xs sm:text-sm font-bold uppercase text-[var(--text-primary)] truncate">
                  <span className="text-[#DFB163]">G</span>K SPACE SOLUTIONS LLP
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="p-1 text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors"
              >
                <X size={20} strokeWidth={1.25} />
              </button>
            </div>

            <nav className="px-5 py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between border-b border-[var(--border-primary)]/40 py-3 text-xs font-medium uppercase tracking-[0.15em] transition-colors ${
                    pathname === item.href
                      ? "text-[var(--accent-gold)] font-semibold"
                      : "text-[var(--text-primary)] hover:text-[var(--accent-gold)]"
                  }`}
                >
                  {item.label}
                  <ChevronRight
                    size={13}
                    strokeWidth={1.25}
                    className="text-[var(--border-primary)]"
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* Drawer Footer with Quick Contact & Theme Toggle */}
          <div className="border-t border-[var(--border-primary)] p-5 bg-[var(--bg-primary)]">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[var(--border-primary)]/40">
              <span className="text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider">
                Theme
              </span>
              <ThemeToggle />
            </div>

            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-xs text-[var(--text-primary)] font-medium hover:text-[var(--accent-gold)] transition-colors mb-2"
            >
              <Phone size={12} strokeWidth={1.25} className="text-[var(--accent-gold)]" />
              <span>{company.phone}</span>
            </a>
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-2 text-[11px] text-[var(--text-secondary)] hover:text-[var(--accent-gold)] transition-colors"
            >
              <Mail size={12} strokeWidth={1.25} className="text-[var(--accent-gold)]" />
              <span>{company.email}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
