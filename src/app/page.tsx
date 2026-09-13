import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  Mail,
  ShieldCheck,
  Building2,
  Hammer,
  CheckCircle2,
  Clock,
  Compass,
} from "lucide-react";
import ProjectShowcase from "@/components/ProjectShowcase";
import HeroSlider from "@/components/HeroSlider";
import ArchitecturalStatsBand from "@/components/ArchitecturalStatsBand";
import {
  company,
  companyStats,
  servicesPreview,
  whyChoosePillars,
} from "@/lib/data";

export default function Home() {
  return (
    <div className="flex flex-col bg-[var(--bg-primary)] transition-colors duration-300">
      {/* ── 1. ARCHITECTURAL HERO SLIDER ──────────────────── */}
      <HeroSlider />

      {/* ── ARCHITECTURAL CREDENTIALS & STATS BAND ────────── */}
      <ArchitecturalStatsBand />

      {/* ── 2. ABOUT & STATS STRIP ──────────────────────────── */}
      <section className="relative py-20 bg-[var(--bg-surface)] border-b border-[var(--border-primary)] transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Editorial Excerpt */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-16 border-b border-[var(--border-primary)]">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase">
                <Clock className="h-3.5 w-3.5" strokeWidth={1.25} />
                25 Years of Industry Leadership
              </span>
              <h2 className="mt-3 font-heading text-3xl sm:text-4xl text-[var(--text-primary)] tracking-tight">
                Engineering spaces of consequence with uncompromising integrity.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-sans">
                Founded in 2000, GK Space Solutions LLP has cultivated an enduring reputation as a premier interior contracting partner for architects, corporations, and discerning homeowners. We bridge the gap between architectural vision and buildable reality with disciplined engineering, in-house millwork, and full turnkey governance.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors"
                >
                  Discover Our Heritage
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 text-[var(--accent-gold)]"
                    strokeWidth={1.25}
                  />
                </Link>
                <span className="h-3 w-[1px] bg-[var(--border-primary)]" />
                <span className="text-xs text-[var(--text-secondary)] font-mono">
                  ISO-aligned quality standards
                </span>
              </div>
            </div>
          </div>

          {/* Stats Metric Cards */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyStats.map((stat) => (
              <div
                key={stat.label}
                className="relative flex flex-col p-6 bg-[var(--bg-primary)] border border-[var(--border-primary)] transition-all duration-300 hover:border-[var(--accent-gold)] hover:shadow-md"
              >
                <span className="font-heading text-4xl sm:text-5xl font-light text-[var(--text-primary)] tracking-tight">
                  {stat.value}
                </span>
                <span className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent-gold)] font-mono">
                  {stat.label}
                </span>
                <p className="mt-3 text-xs text-[var(--text-secondary)] leading-relaxed">
                  {stat.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. OUTSTANDING PROJECTS SHOWCASE (15 Image Grid) ── */}
      <ProjectShowcase />

      {/* ── 4. SERVICES PREVIEW ──────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-[var(--bg-surface)] border-t border-[var(--border-primary)] transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 border-b border-[var(--border-primary)]">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase">
                <Compass className="h-3.5 w-3.5" strokeWidth={1.25} />
                Comprehensive Capabilities
              </span>
              <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-primary)] tracking-tight">
                Turnkey Execution & Bespoke Millwork
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-sans">
                From structural civil execution to micro-tolerance custom furniture, we provide unified single-source accountability.
              </p>
            </div>

            <div>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors"
              >
                All Services & Specs
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-[var(--accent-gold)]"
                  strokeWidth={1.25}
                />
              </Link>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesPreview.map((service) => (
              <div
                key={service.number}
                className="group flex flex-col justify-between p-8 bg-[var(--bg-primary)] border border-[var(--border-primary)] transition-all duration-300 hover:border-[var(--accent-gold)] hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-2xl text-[var(--accent-gold)]">
                      {service.number}
                    </span>
                    <Building2 className="h-5 w-5 text-[var(--text-secondary)] group-hover:text-[var(--accent-gold)] transition-colors" strokeWidth={1.25} />
                  </div>

                  <h3 className="mt-6 font-heading text-2xl text-[var(--text-primary)] tracking-tight group-hover:text-[var(--accent-gold)] transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed font-sans">
                    {service.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-[var(--border-primary)]">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-primary)] font-medium mb-3">
                      Key Execution Scope:
                    </p>
                    <ul className="space-y-2">
                      {service.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-xs text-[var(--text-secondary)]"
                        >
                          <CheckCircle2
                            className="h-3.5 w-3.5 text-[var(--accent-gold)] flex-shrink-0"
                            strokeWidth={1.25}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] group-hover:text-[var(--accent-gold)] transition-colors"
                  >
                    Explore Technical Scope
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 text-[var(--accent-gold)]" strokeWidth={1.25} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WHY CHOOSE US / THE GK ADVANTAGE ───────────────── */}
      <section className="py-24 sm:py-32 bg-[var(--bg-primary)] transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase">
                <ShieldCheck className="h-3.5 w-3.5" strokeWidth={1.25} />
                The GK Distinction
              </span>
              <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-primary)] tracking-tight">
                Why Architects and Enterprises Entrust Us
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-sans">
                We eliminate the traditional friction of multiple vendors by providing full lifecycle contracting under one roof—ensuring structural integrity, financial clarity, and exact design execution.
              </p>

              <div className="mt-8 p-6 bg-[var(--bg-surface)] border border-[var(--border-primary)]">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-[#141415] dark:bg-[#0B0B0C] p-2.5 text-[#DFB163] border border-neutral-800">
                    <Hammer className="h-5 w-5" strokeWidth={1.25} />
                  </div>
                  <div>
                    <h4 className="font-heading text-base text-[var(--text-primary)]">
                      Dedicated Millwork Facility
                    </h4>
                    <p className="mt-1 text-xs text-[var(--text-secondary)] leading-relaxed font-sans">
                      Our Mumbai-based production facility houses modern edge-banding, CNC sizing, and finishing chambers for turnkey joinery.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyChoosePillars.map((pillar, idx) => (
                <div
                  key={pillar.title}
                  className="p-6 bg-[var(--bg-surface)] border border-[var(--border-primary)] transition-all duration-300 hover:border-[var(--accent-gold)]"
                >
                  <span className="text-xs font-mono text-[var(--accent-gold)] font-semibold">
                    0{idx + 1}.
                  </span>
                  <h3 className="mt-2 font-heading text-xl text-[var(--text-primary)]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. CONSULTATION & CTA BANNER (Rich Obsidian Aesthetic) ── */}
      <section className="relative py-20 bg-[#0B0B0C] text-[#F5F5F0] overflow-hidden border-t border-neutral-800">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#DFB163_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#DFB163] uppercase">
            Start Your Project
          </span>
          <h2 className="mt-4 max-w-3xl font-heading text-3xl sm:text-5xl text-[#F5F5F0] tracking-tight">
            Ready to Translate Your Architectural Vision Into Reality?
          </h2>
          <p className="mt-4 max-w-xl text-sm sm:text-base text-neutral-400 leading-relaxed font-sans">
            Connect with our principal contracting engineers for BOQ analysis, technical feasibility, or turnkey consultation.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#DFB163] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#0B0B0C] transition-all duration-300 hover:bg-white hover:shadow-lg"
            >
              Book Discovery Session
              <ArrowRight className="h-4 w-4" strokeWidth={1.25} />
            </Link>

            <a
              href="tel:+919820401179"
              className="inline-flex items-center justify-center gap-2 border border-neutral-700 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#F5F5F0] transition-all duration-300 hover:border-[#DFB163]"
            >
              <Phone className="h-4 w-4 text-[#DFB163]" strokeWidth={1.25} />
              +91 98204 01179
            </a>
          </div>

          <p className="mt-6 text-xs text-neutral-400 font-mono">
            Direct Email: {company.email}
          </p>
        </div>
      </section>
    </div>
  );
}
