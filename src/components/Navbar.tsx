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
      className="text-brand-muted transition-colors duration-300 hover:text-brand-brass"
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
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* ── Compact 1-Line Topbar on Mobile / Full on Desktop ─ */}
      <div
        className={`border-b border-brand-border bg-brand-white/95 backdrop-blur-sm transition-all duration-500 ${
          scrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-1.5 sm:py-2">
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs tracking-wide text-brand-muted transition-colors hover:text-brand-brass whitespace-nowrap"
            >
              <Phone size={11} strokeWidth={1.25} />
              <span>{company.phone}</span>
            </a>
            <a
              href={`mailto:${company.email}`}
              className="hidden items-center gap-2 text-xs tracking-wide text-brand-muted transition-colors hover:text-brand-brass md:flex"
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
        className={`border-b border-brand-border bg-brand-white/95 backdrop-blur-sm transition-shadow duration-300 ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3">
          {/* Logo & Brand Lockup */}
          <Link href="/" className="group flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
            <Image
              src="/logo.png"
              alt="GK Space Solutions LLP"
              width={60}
              height={60}
              className="h-11 sm:h-14 w-auto object-contain flex-shrink-0"
              priority
            />
            <span className="font-serif tracking-wider sm:tracking-widest text-sm sm:text-lg md:text-xl font-bold uppercase text-neutral-900 truncate">
              <span className="text-[#DFB163]">G</span>K SPACE SOLUTIONS LLP
            </span>
          </Link>

          {/* Desktop Nav Links (Visible on screens >= 768px, collapsed below) */}
          <div className="hidden items-center gap-4 md:flex lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-xs lg:text-[13px] font-medium uppercase tracking-[0.12em] lg:tracking-[0.15em] transition-colors duration-300 whitespace-nowrap ${
                  pathname === item.href
                    ? "text-brand-brass"
                    : "text-brand-dark hover:text-brand-brass"
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-brand-brass" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Button (Visible on screens < 768px) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center md:hidden p-1.5 text-brand-dark hover:text-brand-brass transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X size={22} strokeWidth={1.25} />
            ) : (
              <Menu size={22} strokeWidth={1.25} />
            )}
          </button>
        </div>
      </nav>

      {/* ── Mobile Drawer (For screens < 768px) ──────────── */}
      <div
        className={`fixed inset-0 top-0 z-40 transition-all duration-500 md:hidden ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-brand-dark/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 h-full w-[300px] max-w-[85vw] bg-brand-white shadow-2xl transition-transform duration-500 ease-out flex flex-col justify-between ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <div className="flex items-center justify-between border-b border-brand-border px-5 py-4">
              <div className="flex items-center gap-2.5 min-w-0 pr-2">
                <Image
                  src="/logo.png"
                  alt="GK Space Solutions LLP"
                  width={40}
                  height={40}
                  className="h-9 w-auto object-contain flex-shrink-0"
                />
                <span className="font-serif tracking-wider text-xs sm:text-sm font-bold uppercase text-neutral-900 truncate">
                  <span className="text-[#DFB163]">G</span>K SPACE SOLUTIONS LLP
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="p-1 text-brand-dark hover:text-brand-brass transition-colors"
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
                  className={`flex items-center justify-between border-b border-brand-border/60 py-3 text-xs font-medium uppercase tracking-[0.15em] transition-colors ${
                    pathname === item.href
                      ? "text-brand-brass font-semibold"
                      : "text-brand-dark hover:text-brand-brass"
                  }`}
                >
                  {item.label}
                  <ChevronRight
                    size={13}
                    strokeWidth={1.25}
                    className="text-brand-border"
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* Drawer Footer with Quick Contact */}
          <div className="border-t border-brand-border p-5 bg-brand-light">
            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-xs text-brand-dark font-medium hover:text-brand-brass transition-colors mb-2"
            >
              <Phone size={12} strokeWidth={1.25} className="text-brand-brass" />
              <span>{company.phone}</span>
            </a>
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-2 text-[11px] text-brand-muted hover:text-brand-brass transition-colors"
            >
              <Mail size={12} strokeWidth={1.25} className="text-brand-brass" />
              <span>{company.email}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
