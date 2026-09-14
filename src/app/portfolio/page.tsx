import type { Metadata } from "next";
import Link from "next/link";
import { Download, FileText, Layers } from "lucide-react";
import ProjectsGallery from "@/components/ProjectsGallery";

export const metadata: Metadata = {
  title: "Architectural Portfolio & Joinery Works | GK Space Solutions LLP",
  description:
    "Explore our complete curation of enterprise headquarters, diplomatic salons, and private luxury residences executed across Mumbai & Pune over 25 years.",
};

export default function PortfolioPage() {
  return (
    <div className="flex flex-col bg-[var(--bg-primary)] min-h-screen transition-colors duration-300">
      {/* ── FULL CURATION INDEX ─────────────────────────────── */}
      <section
        id="curation-index"
        className="scroll-mt-28 py-16 sm:py-24 bg-[var(--bg-surface)] transition-colors duration-300"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header & Action Bar */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 border-b border-[var(--border-primary)]">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase font-mono">
                <Layers className="h-3.5 w-3.5" strokeWidth={1.25} />
                Full Curation Index
              </span>
              <h1 className="mt-3 font-heading text-3xl sm:text-5xl text-[var(--text-primary)] tracking-tight">
                Architectural Portfolio & Joinery Works
              </h1>
              <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-sans">
                Browse our completed enterprise headquarters, diplomatic salons, and private luxury residences executed across Mumbai & Pune over 25 years.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/GK-Space-Solutions-Company-Deck.pdf"
                download="GK-Space-Solutions-Company-Deck.pdf"
                className="group inline-flex items-center gap-2 border border-[var(--border-primary)] bg-[var(--bg-primary)] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-primary)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] transition-colors"
              >
                <Download className="h-3.5 w-3.5" strokeWidth={1.25} />
                Download Deck (PDF)
              </a>
            </div>
          </div>

          {/* Interactive Filterable Gallery Grid */}
          <div className="mt-12">
            <ProjectsGallery />
          </div>
        </div>
      </section>

      {/* ── ENTERPRISE PITCH DECK & BOARDROOM BRIEFING ───── */}
      <section className="relative py-16 sm:py-20 bg-[#1C1A18] text-[#FDFCF7] border-t border-stone-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-[#DFB163] uppercase font-mono">
                <FileText className="h-3.5 w-3.5" strokeWidth={1.25} />
                Corporate Capabilities
              </span>
              <h3 className="mt-3 font-serif text-2xl sm:text-4xl text-white font-light tracking-tight">
                Engineering Governance & Turnkey Credentials
              </h3>
              <p className="mt-3 text-sm text-stone-300 font-sans leading-relaxed">
                Need our complete corporate dossier, audited project lists, and MEP methodology for your tender board or architectural review? Download our presentation deck or consult our principal contractors.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/GK-Space-Solutions-Company-Deck.pdf"
                download="GK-Space-Solutions-Company-Deck.pdf"
                className="inline-flex items-center gap-2 bg-[#DFB163] text-[#141312] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] hover:bg-white transition-all shadow-md active:scale-95"
              >
                <Download className="h-4 w-4" strokeWidth={1.5} />
                Download Deck (PDF)
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-stone-600 text-stone-200 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] hover:border-white hover:text-white transition-colors active:scale-95"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
