import type { Metadata } from "next";
import Link from "next/link";
import { Layers, ArrowRight, Phone } from "lucide-react";
import ProjectsGallery from "@/components/ProjectsGallery";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects Gallery",
  description:
    "Explore our portfolio of corporate headquarters, luxury residential suites, and commercial hospitality interiors crafted by GK Space Solutions LLP in Mumbai and Pune.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col bg-[var(--brand-white)] min-h-screen">
      {/* ── Page Header ────────────────────────────────────────── */}
      <section className="relative border-b border-[var(--brand-border)] bg-[var(--brand-dark)] text-[var(--brand-light)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[var(--brand-brass)] uppercase">
              <Layers className="h-3.5 w-3.5" strokeWidth={1.25} />
              Portfolio of Distinction
            </span>
            <h1 className="mt-4 font-heading text-3xl sm:text-5xl lg:text-6xl text-[var(--brand-light)] tracking-tight">
              Architectural & Interior Works
            </h1>
            <p className="mt-4 text-sm sm:text-base text-[var(--brand-muted)] font-sans leading-relaxed">
              A master curation of 15 completed projects across Commercial, Corporate, and Luxury Residential sectors. Engineered with millimeter tolerances, in-house millwork, and 25 years of construction integrity.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Gallery Section ───────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[var(--brand-white)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ProjectsGallery />
        </div>
      </section>

      {/* ── Project Inquiry Callout ────────────────────────────── */}
      <section className="py-16 bg-[var(--brand-light)] border-t border-[var(--brand-border)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-[var(--brand-brass)] uppercase">
            Have a Specific Project in Mind?
          </span>
          <h2 className="mt-3 font-heading text-2xl sm:text-4xl text-[var(--brand-dark)] tracking-tight max-w-2xl">
            Let Us Engineer Your Next Space with Uncompromising Quality
          </h2>
          <p className="mt-3 text-sm text-[var(--brand-muted)] max-w-lg font-sans leading-relaxed">
            Our team provides complete BOQ evaluation, spatial feasibility, and bespoke material sampling for developers, architects, and private clients.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[var(--brand-dark)] text-[var(--brand-light)] px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] hover:bg-[var(--brand-brass)] hover:text-[var(--brand-dark)] transition-colors"
            >
              Consult an Engineer
            </Link>
            <a
              href="tel:+919820401179"
              className="inline-flex items-center gap-2 border border-[var(--brand-border)] bg-[var(--brand-white)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-dark)] hover:border-[var(--brand-brass)] transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-[var(--brand-brass)]" strokeWidth={1.25} />
              +91 98204 01179
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
