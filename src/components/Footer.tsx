import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import {
  IconInstagram,
  IconLinkedin,
  IconFacebook,
  IconYoutube,
} from "@/components/icons";
import { company, footerQuickLinks, socialLinks } from "@/lib/data";

const socialIconMap = {
  instagram: IconInstagram,
  linkedin: IconLinkedin,
  facebook: IconFacebook,
  youtube: IconYoutube,
} as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-primary)] bg-[var(--bg-surface)] text-[var(--text-primary)] transition-colors duration-300">
      {/* ── Main Grid ───────────────────────────────────── */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3 lg:gap-16">
        {/* Column 1: Brand */}
        <div>
          <Link href="/" className="group inline-flex items-baseline gap-1.5">
            <span className="font-serif text-xl font-bold tracking-wider uppercase text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent-gold)]">
              <span className="text-[#DFB163]">G</span>K Space Solutions
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--text-secondary)]">
            {company.tagline}
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = socialIconMap[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-9 w-9 items-center justify-center border border-[var(--border-primary)] bg-[var(--bg-primary)] text-[var(--text-secondary)] transition-all duration-300 hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)]"
                >
                  <Icon size={15} strokeWidth={1.25} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="mb-6 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[var(--accent-gold)]">
            Quick Links
          </h4>
          <nav className="flex flex-col gap-3">
            {footerQuickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-2 text-sm text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--text-primary)]"
              >
                <ArrowUpRight
                  size={12}
                  strokeWidth={1.25}
                  className="opacity-0 transition-opacity group-hover:opacity-100 text-[var(--accent-gold)]"
                />
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="mb-6 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[var(--accent-gold)]">
            Get in Touch
          </h4>
          <div className="flex flex-col gap-4">
            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              className="flex items-start gap-3 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              <Phone size={15} strokeWidth={1.25} className="mt-0.5 shrink-0 text-[var(--accent-gold)]" />
              {company.phone}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="flex items-start gap-3 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              <Mail size={15} strokeWidth={1.25} className="mt-0.5 shrink-0 text-[var(--accent-gold)]" />
              {company.email}
            </a>
            <div className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
              <MapPin size={15} strokeWidth={1.25} className="mt-0.5 shrink-0 text-[var(--accent-gold)]" />
              {company.address}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ──────────────────────────────────── */}
      <div className="border-t border-[var(--border-primary)] bg-[var(--bg-primary)]/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 sm:flex-row">
          <p className="text-xs text-[var(--text-secondary)] font-mono">
            &copy; {year} {company.name}. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-secondary)]/80 font-mono">
            Crafting spaces with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
