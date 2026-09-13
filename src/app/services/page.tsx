import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Home,
  Compass,
  ClipboardCheck,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Phone,
  MessageSquare,
  ShieldCheck,
  Hammer,
  Clock,
  Layers,
} from "lucide-react";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services | Turnkey Architectural & Interior Contracting",
  description:
    "Explore turnkey commercial fit-outs, luxury residential interiors, space planning, bespoke millwork, and site supervision by GK Space Solutions LLP in Mumbai and Pune.",
};

interface ServiceOffering {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  scopeItems: string[];
  specs: { label: string; value: string }[];
}

const serviceOfferings: ServiceOffering[] = [
  {
    id: "commercial-fitouts",
    number: "01",
    title: "Turnkey Commercial Fit-Outs & Corporate Workspaces",
    category: "Corporate & Enterprise",
    description:
      "Full-scope interior contracting for multinational headquarters, diplomatic facilities, and tech workspaces. We engineer high-performance work environments optimized for acoustic comfort, ergonomic circulation, and corporate identity.",
    image: "/projects/vfs.jpeg",
    scopeItems: [
      "VFS Global diplomatic lounges and secure consular reception suites",
      "Executive boardrooms with automated acoustics and motorized AV integration",
      "Open collaborative workstation wings with under-desk wire routing",
      "Acoustic drywall systems, glazed demountable partitions, and raised flooring",
    ],
    specs: [
      { label: "Execution Model", value: "Full Turnkey Civil & MEP" },
      { label: "Compliance", value: "International Corporate Standards" },
    ],
  },
  {
    id: "luxury-residential",
    number: "02",
    title: "Luxury Residential Interiors & Bespoke Joinery",
    category: "High-End Residential",
    description:
      "Transforming architect-designed residences, duplexes, and penthouses into physical reality. We execute complex civil transformations, customized walk-in dressing rooms, and master bedroom suites with artisan precision.",
    image: "/projects/bedroom-3.jpeg",
    scopeItems: [
      "Contemporary modular bedrooms with custom fluted and veneer paneling",
      "Bespoke joinery, architectural wardrobes, and luxury dressing suites",
      "Bookmatched Italian marble flooring and custom stone masonry",
      "Concealed architectural false ceilings with integrated cove illumination",
    ],
    specs: [
      { label: "Hardware Spec", value: "German Precision Soft-Close" },
      { label: "Finish Quality", value: "High-End Polyurethane & Veneers" },
    ],
  },
  {
    id: "space-planning",
    number: "03",
    title: "Space Planning & Architectural Detailing",
    category: "Design Engineering",
    description:
      "Bridging the gap between conceptual schematic design and physical installation. We provide technical shop drawings, rigorous material sampling, lighting simulations, and acoustic calculations before breaking ground.",
    image: "/projects/modular-kitchen.jpg",
    scopeItems: [
      "Comprehensive CAD shop drawings and millwork fabrication schematics",
      "3D photorealistic visualization and virtual walkthrough validation",
      "Curated material boards (imported marbles, architectural brass, acoustic fabrics)",
      "Lighting design layouts, lux calculations, and HVAC diffuser coordination",
    ],
    specs: [
      { label: "Documentation", value: "CAD & BIM Coordination" },
      { label: "Acoustic Metric", value: "STC-Rated Systems" },
    ],
  },
  {
    id: "project-management",
    number: "04",
    title: "Project Management & Site Supervision",
    category: "Construction Governance",
    description:
      "Rigorous on-site engineering governance to ensure projects are delivered on time, within approved budgets, and in total compliance with structural and safety standards. Zero tolerance for contractor drift or material substitution.",
    image: "/projects/working-2.jpeg",
    scopeItems: [
      "Daily digital site progress logs and transparent milestone reporting",
      "Strict BOQ variance control and procurement audit trails",
      "Continuous quality inspection checklists for screeding, MEP, and finishes",
      "Comprehensive testing, commissioning, and structured snag-free handover",
    ],
    specs: [
      { label: "Governance", value: "Single-Source Accountability" },
      { label: "Handover", value: "Defect-Free Guarantee" },
    ],
  },
];

const whyGKHighlights = [
  {
    title: "25+ Years Industry Leadership",
    description:
      "A proven track record spanning a quarter century, trusted by premier corporate institutions, real estate developers, and high-profile private clients across Maharashtra.",
  },
  {
    title: "In-House Joinery Facility",
    description:
      "Our 50,000+ sq. ft. modern manufacturing facility in Mumbai ensures total control over millwork quality, eliminating third-party contractor delays.",
  },
  {
    title: "Precision Architectural Detailing",
    description:
      "Zero deviation from engineering blueprints. We build to millimeter tolerances with strict adherence to material specifications and joinery reveals.",
  },
  {
    title: "Transparent Turnkey Governance",
    description:
      "Single-source contract accountability. We eliminate multi-vendor friction by managing civil, MEP, millwork, and finishing trades under one roof.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col bg-[var(--brand-white)] min-h-screen">
      {/* ── 1. EDITORIAL HEADER ───────────────────────────────── */}
      <section className="relative border-b border-[var(--brand-border)] bg-[var(--brand-dark)] text-[var(--brand-light)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[var(--brand-brass)] uppercase">
              <Compass className="h-3.5 w-3.5" strokeWidth={1.25} />
              Single-Source Turnkey Contracting
            </span>
            <h1 className="mt-4 font-heading text-3xl sm:text-5xl lg:text-6xl text-[var(--brand-light)] tracking-tight">
              Turnkey Architectural & Interior Services
            </h1>
            <p className="mt-4 text-sm sm:text-base text-[var(--brand-muted)] font-sans leading-relaxed">
              From bare-shell corporate civil fit-outs to bespoke residential millwork, GK Space Solutions LLP delivers single-source accountability with millimeter-level precision across Mumbai, Pune, and Maharashtra.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. SCOPE OF OFFERINGS ─────────────────────────────── */}
      <section className="py-20 bg-[var(--brand-light)] border-b border-[var(--brand-border)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] text-[var(--brand-brass)] uppercase">
              Core Capabilities
            </span>
            <h2 className="mt-2 font-heading text-3xl sm:text-4xl text-[var(--brand-dark)] tracking-tight">
              Four Specialized Execution Divisions
            </h2>
            <p className="mt-3 text-sm text-[var(--brand-muted)] font-sans leading-relaxed">
              Every project is managed by specialized contracting engineers to ensure flawless civil construction, MEP integration, and fine architectural woodwork.
            </p>
          </div>

          <div className="space-y-16">
            {serviceOfferings.map((service, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={service.id}
                  className="p-8 sm:p-12 bg-[var(--brand-white)] border border-[var(--brand-border)] transition-all duration-300 hover:border-[var(--brand-brass)] hover:shadow-xl"
                >
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                      isEven ? "lg:grid-flow-dense" : ""
                    }`}
                  >
                    {/* Text Block */}
                    <div
                      className={`lg:col-span-7 flex flex-col justify-between ${
                        isEven ? "lg:col-start-6" : ""
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="font-heading text-3xl text-[var(--brand-brass)]">
                            {service.number}
                          </span>
                          <span className="h-px w-8 bg-[var(--brand-border)]" />
                          <span className="text-xs font-mono tracking-widest uppercase text-[var(--brand-brass)] font-semibold">
                            {service.category}
                          </span>
                        </div>

                        <h3 className="mt-4 font-heading text-2xl sm:text-3xl text-[var(--brand-dark)] tracking-tight">
                          {service.title}
                        </h3>

                        <p className="mt-4 text-sm text-[var(--brand-muted)] leading-relaxed font-sans">
                          {service.description}
                        </p>

                        {/* Deliverables List */}
                        <div className="mt-6 pt-6 border-t border-[var(--brand-border)]">
                          <p className="text-[11px] font-mono uppercase tracking-wider text-[var(--brand-dark)] font-semibold mb-3">
                            Key Execution Scope:
                          </p>
                          <ul className="space-y-2">
                            {service.scopeItems.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--brand-muted)]"
                              >
                                <CheckCircle2
                                  className="h-4 w-4 text-[var(--brand-brass)] flex-shrink-0 mt-0.5"
                                  strokeWidth={1.25}
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Technical Specs & Action */}
                      <div className="mt-8 pt-6 border-t border-[var(--brand-border)] flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-6">
                          {service.specs.map((spec) => (
                            <div key={spec.label}>
                              <span className="text-[10px] font-mono text-[var(--brand-muted)] uppercase tracking-wider block">
                                {spec.label}
                              </span>
                              <span className="text-xs font-medium text-[var(--brand-dark)] block">
                                {spec.value}
                              </span>
                            </div>
                          ))}
                        </div>

                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--brand-dark)] hover:text-[var(--brand-brass)] transition-colors"
                        >
                          Request Scope Analysis
                          <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.25} />
                        </Link>
                      </div>
                    </div>

                    {/* Image Block */}
                    <div
                      className={`lg:col-span-5 relative aspect-[4/3] overflow-hidden border border-[var(--brand-border)] bg-[var(--brand-dark)] ${
                        isEven ? "lg:col-start-1" : ""
                      }`}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/60 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. WHY CHOOSE GK SPACE SOLUTIONS ──────────────────── */}
      <section className="py-24 bg-[var(--brand-white)] border-b border-[var(--brand-border)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[var(--brand-brass)] uppercase">
                <ShieldCheck className="h-3.5 w-3.5" strokeWidth={1.25} />
                Contracting Excellence
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--brand-dark)] tracking-tight">
                Why Architects and Enterprises Entrust Us
              </h2>
              <p className="text-sm sm:text-base text-[var(--brand-muted)] leading-relaxed font-sans">
                We eliminate the traditional friction of multiple vendors by providing full lifecycle contracting under one roof—ensuring structural integrity, financial clarity, and exact design execution.
              </p>

              <div className="p-6 bg-[var(--brand-light)] border border-[var(--brand-border)]">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[var(--brand-dark)] text-[var(--brand-brass)]">
                    <Hammer className="h-5 w-5" strokeWidth={1.25} />
                  </div>
                  <div>
                    <h4 className="font-heading text-base text-[var(--brand-dark)]">
                      In-House Millwork Facility
                    </h4>
                    <p className="mt-1 text-xs text-[var(--brand-muted)] leading-relaxed font-sans">
                      Our modern manufacturing facility houses advanced edge-banding, multi-axis sizing, and finishing chambers for turnkey joinery.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyGKHighlights.map((pillar, idx) => (
                <div
                  key={pillar.title}
                  className="p-6 bg-[var(--brand-light)] border border-[var(--brand-border)] transition-all duration-300 hover:border-[var(--brand-brass)]"
                >
                  <span className="text-xs font-mono text-[var(--brand-brass)] font-semibold">
                    0{idx + 1}. PILLAR
                  </span>
                  <h3 className="mt-2 font-heading text-xl text-[var(--brand-dark)]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[var(--brand-muted)] leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. DIRECT CTA STRIP ───────────────────────────────── */}
      <section className="py-20 bg-[var(--brand-dark)] text-[var(--brand-light)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="text-xs font-semibold tracking-[0.25em] text-[var(--brand-brass)] uppercase">
            Start Your Execution Journey
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--brand-light)] tracking-tight max-w-3xl">
            Discuss Your Project Scope with Our Principal Engineers
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[var(--brand-muted)] max-w-xl font-sans leading-relaxed">
            Connect directly with our engineering team for technical feasibility, BOQ analysis, or turnkey contracting estimates.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://wa.me/919820401179?text=Hello%20GK%20Space%20Solutions%2C%20I%20would%20like%20to%20inquire%20about%20your%20turnkey%20architectural%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[var(--brand-brass)] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-dark)] transition-all hover:bg-[var(--brand-light)] hover:shadow-xl"
            >
              <MessageSquare className="h-4 w-4" strokeWidth={1.25} />
              WhatsApp Direct Consultation
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-[var(--brand-border)]/50 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-light)] transition-all hover:border-[var(--brand-brass)] hover:bg-[var(--brand-light)]/5"
            >
              Contact Form & Location
              <ArrowRight className="h-4 w-4" strokeWidth={1.25} />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--brand-muted)] font-mono">
            <a
              href="tel:+919820401179"
              className="flex items-center gap-2 hover:text-[var(--brand-brass)] transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-[var(--brand-brass)]" strokeWidth={1.25} />
              +91 98204 01179
            </a>
            <span className="text-[var(--brand-border)]">|</span>
            <span>Direct Email: {company.email}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
