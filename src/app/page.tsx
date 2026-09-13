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
import {
  company,
  companyStats,
  servicesPreview,
  whyChoosePillars,
} from "@/lib/data";

export default function Home() {
  return (
    <div className="flex flex-col bg-[var(--brand-white)]">
      {/* ── 1. ARCHITECTURAL HERO SLIDER ──────────────────── */}
      <HeroSlider />

      {/* ── 2. ABOUT & STATS STRIP ──────────────────────────── */}
      <section className="relative py-20 bg-[var(--brand-light)] border-y border-[var(--brand-border)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Editorial Excerpt */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-16 border-b border-[var(--brand-border)]">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[var(--brand-brass)] uppercase">
                <Clock className="h-3.5 w-3.5" strokeWidth={1.25} />
                25 Years of Industry Leadership
              </span>
              <h2 className="mt-3 font-heading text-3xl sm:text-4xl text-[var(--brand-dark)] tracking-tight">
                Engineering spaces of consequence with uncompromising integrity.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-sm sm:text-base text-[var(--brand-muted)] leading-relaxed font-sans">
                Founded in 2000, GK Space Solutions LLP has cultivated an enduring reputation as a premier interior contracting partner for architects, corporations, and discerning homeowners. We bridge the gap between architectural vision and buildable reality with disciplined engineering, in-house millwork, and full turnkey governance.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-[var(--brand-dark)] hover:text-[var(--brand-brass)] transition-colors"
                >
                  Discover Our Heritage
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 text-[var(--brand-brass)]"
                    strokeWidth={1.25}
                  />
                </Link>
                <span className="h-3 w-[1px] bg-[var(--brand-border)]" />
                <span className="text-xs text-[var(--brand-muted)] font-mono">
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
                className="relative flex flex-col p-6 bg-[var(--brand-white)] border border-[var(--brand-border)] transition-all duration-300 hover:border-[var(--brand-brass)] hover:shadow-md"
              >
                <span className="font-heading text-4xl sm:text-5xl font-light text-[var(--brand-dark)] tracking-tight">
                  {stat.value}
                </span>
                <span className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--brand-brass)] font-mono">
                  {stat.label}
                </span>
                <p className="mt-3 text-xs text-[var(--brand-muted)] leading-relaxed">
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
      <section className="py-24 sm:py-32 bg-[var(--brand-light)] border-t border-[var(--brand-border)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 border-b border-[var(--brand-border)]">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[var(--brand-brass)] uppercase">
                <Compass className="h-3.5 w-3.5" strokeWidth={1.25} />
                Comprehensive Capabilities
              </span>
              <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--brand-dark)] tracking-tight">
                Turnkey Execution & Bespoke Millwork
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[var(--brand-muted)] leading-relaxed font-sans">
                From structural civil execution to micro-tolerance custom furniture, we provide unified single-source accountability.
              </p>
            </div>

            <div>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-[var(--brand-dark)] hover:text-[var(--brand-brass)] transition-colors"
              >
                All Services & Specs
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-[var(--brand-brass)]"
                  strokeWidth={1.25}
                />
              </Link>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesPreview.map((service) => (
              <div
                key={service.number}
                className="group flex flex-col justify-between p-8 bg-[var(--brand-white)] border border-[var(--brand-border)] transition-all duration-300 hover:border-[var(--brand-brass)] hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-2xl text-[var(--brand-brass)]">
                      {service.number}
                    </span>
                    <Building2 className="h-5 w-5 text-[var(--brand-muted)] group-hover:text-[var(--brand-brass)] transition-colors" strokeWidth={1.25} />
                  </div>

                  <h3 className="mt-6 font-heading text-2xl text-[var(--brand-dark)] tracking-tight group-hover:text-[var(--brand-brass)] transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-[var(--brand-muted)] leading-relaxed font-sans">
                    {service.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-[var(--brand-border)]">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-[var(--brand-dark)] font-medium mb-3">
                      Key Execution Scope:
                    </p>
                    <ul className="space-y-2">
                      {service.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-xs text-[var(--brand-muted)]"
                        >
                          <CheckCircle2
                            className="h-3.5 w-3.5 text-[var(--brand-brass)] flex-shrink-0"
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
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--brand-dark)] group-hover:text-[var(--brand-brass)] transition-colors"
                  >
                    Explore Technical Scope
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.25} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WHY CHOOSE US / THE GK ADVANTAGE ───────────────── */}
      <section className="py-24 sm:py-32 bg-[var(--brand-white)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[var(--brand-brass)] uppercase">
                <ShieldCheck className="h-3.5 w-3.5" strokeWidth={1.25} />
                The GK Distinction
              </span>
              <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--brand-dark)] tracking-tight">
                Why Architects and Enterprises Entrust Us
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[var(--brand-muted)] leading-relaxed font-sans">
                We eliminate the traditional friction of multiple vendors by providing full lifecycle contracting under one roof—ensuring structural integrity, financial clarity, and exact design execution.
              </p>

              <div className="mt-8 p-6 bg-[var(--brand-light)] border border-[var(--brand-border)]">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-[var(--brand-dark)] p-2.5 text-[var(--brand-brass)]">
                    <Hammer className="h-5 w-5" strokeWidth={1.25} />
                  </div>
                  <div>
                    <h4 className="font-heading text-base text-[var(--brand-dark)]">
                      Dedicated Millwork Facility
                    </h4>
                    <p className="mt-1 text-xs text-[var(--brand-muted)] leading-relaxed font-sans">
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
                  className="p-6 bg-[var(--brand-light)] border border-[var(--brand-border)] transition-all duration-300 hover:border-[var(--brand-brass)]"
                >
                  <span className="text-xs font-mono text-[var(--brand-brass)] font-semibold">
                    0{idx + 1}.
                  </span>
                  <h3 className="mt-2 font-heading text-xl text-[var(--brand-dark)]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs text-[var(--brand-muted)] leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. CONSULTATION & CTA BANNER ────────────────────── */}
      <section className="relative py-20 bg-[var(--brand-dark)] text-[var(--brand-light)] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="text-xs font-semibold tracking-[0.25em] text-[var(--brand-brass)] uppercase">
            Start Your Project
          </span>
          <h2 className="mt-4 max-w-3xl font-heading text-3xl sm:text-5xl text-[var(--brand-light)] tracking-tight">
            Ready to Translate Your Architectural Vision Into Reality?
          </h2>
          <p className="mt-4 max-w-xl text-sm sm:text-base text-[var(--brand-muted)] leading-relaxed font-sans">
            Connect with our principal contracting engineers for BOQ analysis, technical feasibility, or turnkey consultation.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[var(--brand-brass)] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-dark)] transition-all duration-300 hover:bg-[var(--brand-light)] hover:shadow-lg"
            >
              Book Discovery Session
              <ArrowRight className="h-4 w-4" strokeWidth={1.25} />
            </Link>

            <a
              href="tel:+919820401179"
              className="inline-flex items-center justify-center gap-2 border border-[var(--brand-border)]/50 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-light)] transition-all duration-300 hover:border-[var(--brand-brass)]"
            >
              <Phone className="h-4 w-4 text-[var(--brand-brass)]" strokeWidth={1.25} />
              +91 98204 01179
            </a>
          </div>

          <p className="mt-6 text-xs text-[var(--brand-muted)] font-mono">
            Direct Email: {company.email}
          </p>
        </div>
      </section>
    </div>
  );
}
