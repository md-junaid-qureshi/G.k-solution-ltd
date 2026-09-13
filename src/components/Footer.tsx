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
    <footer className="border-t border-brand-border bg-brand-dark">
      {/* ── Main Grid ───────────────────────────────────── */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3 lg:gap-16">
        {/* Column 1: Brand */}
        <div>
          <Link href="/" className="group inline-flex items-baseline gap-1">
            <span className="font-heading text-xl font-semibold text-brand-white transition-colors group-hover:text-brand-brass">
              GK
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-brand-muted">
              Space Solutions
            </span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-brand-muted">
            {company.tagline}
          </p>
          <div className="mt-6 flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = socialIconMap[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-9 w-9 items-center justify-center border border-brand-muted/30 text-brand-muted transition-all duration-300 hover:border-brand-brass hover:text-brand-brass"
                >
                  <Icon size={15} strokeWidth={1.25} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-brass">
            Quick Links
          </h4>
          <nav className="flex flex-col gap-3">
            {footerQuickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-2 text-sm text-brand-muted transition-colors duration-300 hover:text-brand-white"
              >
                <ArrowUpRight
                  size={12}
                  strokeWidth={1.25}
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                />
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-brass">
            Get in Touch
          </h4>
          <div className="flex flex-col gap-4">
            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              className="flex items-start gap-3 text-sm text-brand-muted transition-colors hover:text-brand-white"
            >
              <Phone size={15} strokeWidth={1.25} className="mt-0.5 shrink-0" />
              {company.phone}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="flex items-start gap-3 text-sm text-brand-muted transition-colors hover:text-brand-white"
            >
              <Mail size={15} strokeWidth={1.25} className="mt-0.5 shrink-0" />
              {company.email}
            </a>
            <div className="flex items-start gap-3 text-sm text-brand-muted">
              <MapPin size={15} strokeWidth={1.25} className="mt-0.5 shrink-0" />
              {company.address}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ──────────────────────────────────── */}
      <div className="border-t border-brand-muted/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 sm:flex-row">
          <p className="text-[11px] tracking-wide text-brand-muted">
            &copy; {year} {company.name}. All rights reserved.
          </p>
          <p className="text-[11px] tracking-wide text-brand-muted/60">
            Designed with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
