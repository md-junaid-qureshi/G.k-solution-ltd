"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Compass,
  CheckCircle2,
  Building2,
  Layers,
  ShieldCheck,
  Maximize2,
  Sparkles,
  Phone,
  FileText,
} from "lucide-react";
import { company } from "@/lib/data";

interface SlideData {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  content: {
    type: "philosophy" | "process" | "scope" | "casestudy";
    image: string;
    details?: string[];
    pillars?: { title: string; desc: string }[];
    steps?: { num: string; name: string; desc: string }[];
    stats?: { label: string; value: string }[];
    highlights?: string[];
  };
}

const slides: SlideData[] = [
  {
    id: "philosophy",
    badge: "Slide 01 / 06 — Executive Overview",
    title: "Who We Are & Design Philosophy",
    subtitle:
      "Design with Purpose. Function, Aesthetics, Craftsmanship, Experience.",
    content: {
      type: "philosophy",
      image: "/img/home_interior.jpeg",
      pillars: [
        {
          title: "Function",
          desc: "Space planning engineered for human circulation, acoustic comfort, and maximum operational efficiency.",
        },
        {
          title: "Aesthetics",
          desc: "Timeless restraint over transient trends. Architectural proportions framed in warm brass, stone, and oak.",
        },
        {
          title: "Craftsmanship",
          desc: "Millimeter-precision tolerances achieved through German machinery and 25 years of master artisans.",
        },
        {
          title: "Experience",
          desc: "Enduring environments that inspire prestige, corporate cohesion, and elevated residential tranquility.",
        },
      ],
    },
  },
  {
    id: "process",
    badge: "Slide 02 / 06 — Operational Methodology",
    title: "The 5-Step Turnkey Execution Process",
    subtitle:
      "A disciplined engineering workflow from structural audit to turnkey handover.",
    content: {
      type: "process",
      image: "/img/woring.jpeg",
      steps: [
        {
          num: "01",
          name: "Discover",
          desc: "Comprehensive site survey, structural MEP feasibility, and client brief alignment.",
        },
        {
          num: "02",
          name: "Concept",
          desc: "Spatial layout zoning, moodboard articulation, and preliminary material validation.",
        },
        {
          num: "03",
          name: "Design & Specs",
          desc: "Detailed shop drawings, 3D visualization, MEP schematics, and rigorous BOQ finalization.",
        },
        {
          num: "04",
          name: "Execute",
          desc: "Civil site works, in-house millwork fabrication, acoustic partitions, and electrical runs.",
        },
        {
          num: "05",
          name: "Deliver",
          desc: "Snag-free quality audits, MEP testing, client walkthrough, and structured warranty handover.",
        },
      ],
    },
  },
  {
    id: "scope",
    badge: "Slide 03 / 06 — Core Capabilities",
    title: "Comprehensive Scope of Work",
    subtitle:
      "Unified single-source contracting across all commercial and luxury residential disciplines.",
    content: {
      type: "scope",
      image: "/img/modular-kitchen.jpg",
      pillars: [
        {
          title: "Turnkey Interior Contracting",
          desc: "Complete civil alterations, screeding, gypsum and acoustic ceilings, HVAC integration, and specialized flooring.",
        },
        {
          title: "In-House Bespoke Millwork",
          desc: "Custom architectural paneling, executive conference tables, reception counters, and luxury modular systems from our facility.",
        },
        {
          title: "Material Sourcing & Finishes",
          desc: "Imported Italian marble dry-lay, architectural brass inlays, acoustic micro-perforated wood, and performance fabrics.",
        },
        {
          title: "Project Management Governance",
          desc: "Daily site logs, milestone tracking, zero-variance procurement control, and proactive timeline enforcement.",
        },
      ],
    },
  },
  {
    id: "case-pune",
    badge: "Slide 04 / 06 — Case Study",
    title: "Pune Corporate Headquarters",
    subtitle:
      "High-Performance Conference & Workstation Infrastructure for Enterprise Operations.",
    content: {
      type: "casestudy",
      image: "/img/meetingroom.jpeg",
      stats: [
        { label: "Contractor", value: "GK Space Solutions" },
        { label: "Built-up Area", value: "18,500 Sq. Ft." },
        { label: "Execution Model", value: "Full Turnkey" },
        { label: "Defect Rate", value: "0% at Handover" },
      ],
      highlights: [
        "Single-source turnkey execution and civil engineering solely by GK Space Solutions LLP.",
        "Acoustic boardroom with automated lighting and motorized projection integration.",
        "Precision linear workstations with under-desk wire management and ergonomic baffles.",
        "Custom solid brass architectural trims on all executive suite entrance portals.",
      ],
    },
  },
  {
    id: "case-mumbai-hospitality",
    badge: "Slide 05 / 06 — Case Study",
    title: "Mumbai Hospitality Suites",
    subtitle:
      "Refined Atrium Lounges and Luxury Guest Quarters with Acoustic Excellence.",
    content: {
      type: "casestudy",
      image: "/img/portfolio-4.jpg",
      stats: [
        { label: "Contractor", value: "GK Space Solutions" },
        { label: "Built-up Area", value: "12,000 Sq. Ft." },
        { label: "Execution Model", value: "Fit-out & Millwork" },
        { label: "Material Spec", value: "Grade-A Hardwood" },
      ],
      highlights: [
        "In-house millwork and joinery manufactured and installed exclusively by GK Space Solutions LLP.",
        "Suspended sculptural architectural ceiling framing with integrated cove illumination.",
        "Custom veneer wall paneling bookmatched across expansive reception corridors.",
        "Specialized moisture-resistant joinery and hospitality-grade durability finishes.",
      ],
    },
  },
  {
    id: "case-executive-lounges",
    badge: "Slide 06 / 06 — Case Study",
    title: "VFS Executive Lounges & Salons",
    subtitle:
      "Diplomatic Reception Facilities and Private Consular Meeting Suites.",
    content: {
      type: "casestudy",
      image: "/img/vfs_loge.jpeg",
      stats: [
        { label: "Contractor", value: "GK Space Solutions" },
        { label: "Built-up Area", value: "8,500 Sq. Ft." },
        { label: "Security Spec", value: "Biometric & Access" },
        { label: "Sound Isolation", value: "STC 52 Certified" },
      ],
      highlights: [
        "Turnkey planning, security compliance, and master fit-out delivered solely by GK Space Solutions LLP.",
        "High-security partition systems seamlessly cloaked in warm architectural wood paneling.",
        "VIP reception lounges with bespoke leather banquette seating crafted in our facility.",
        "Stringent international compliance and 24/7 accelerated site turnaround.",
      ],
    },
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring" as const, stiffness: 300, damping: 30 },
      opacity: { duration: 0.35 },
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    transition: {
      x: { type: "spring" as const, stiffness: 300, damping: 30 },
      opacity: { duration: 0.25 },
    },
  }),
};

export default function PortfolioPage() {
  const [[currentSlide, direction], setSlide] = useState<[number, number]>([0, 0]);

  const paginate = useCallback(
    (newDirection: number) => {
      const nextSlide = currentSlide + newDirection;
      if (nextSlide >= 0 && nextSlide < slides.length) {
        setSlide([nextSlide, newDirection]);
      }
    },
    [currentSlide]
  );

  const goToSlide = (index: number) => {
    setSlide([index, index > currentSlide ? 1 : -1]);
  };

  // Keyboard Arrow Support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        paginate(1);
      } else if (e.key === "ArrowLeft") {
        paginate(-1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [paginate]);

  const slide = slides[currentSlide];
  const progressPercent = ((currentSlide + 1) / slides.length) * 100;

  return (
    <div className="flex flex-col bg-[var(--bg-primary)] min-h-screen transition-colors duration-300">
      {/* ── HERO HEADER (Cinematic Dark Obsidian) ─────────────── */}
      <section className="relative border-b border-neutral-800 bg-[#0B0B0C] text-[#F5F5F0] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#DFB163] uppercase">
                <FileText className="h-3.5 w-3.5" strokeWidth={1.25} />
                Corporate Capabilities & Presentation
              </span>
              <h1 className="mt-4 font-heading text-3xl sm:text-5xl lg:text-6xl text-[#F5F5F0] tracking-tight">
                Company Profile & Architectural Showcase
              </h1>
              <p className="mt-4 text-sm sm:text-base text-neutral-400 font-sans leading-relaxed max-w-2xl">
                An interactive presentation deck highlighting 25 years of turnkey interior contracting, proprietary engineering processes, and verified enterprise case studies.
              </p>
            </div>

            {/* Prominent Download Button */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/GK-Space-Solutions-Company-Deck.pdf"
                download="GK-Space-Solutions-Company-Deck.pdf"
                className="group inline-flex items-center gap-3 bg-[#DFB163] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#0B0B0C] transition-all duration-300 hover:bg-white hover:shadow-xl"
              >
                <Download className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" strokeWidth={1.25} />
                Download Pitch Deck (PDF)
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-neutral-700 px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#F5F5F0] hover:border-[#DFB163] transition-colors"
              >
                Request Custom Presentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE SLIDE DECK SECTION ─────────────────────── */}
      <section className="relative py-12 sm:py-20 bg-[var(--bg-surface)] transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Deck Frame Container */}
          <div className="relative rounded-sm bg-[#0B0B0C] text-[#F5F5F0] border border-neutral-800 shadow-2xl overflow-hidden">
            {/* Presentation Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-800 px-6 py-4 bg-[#0B0B0C]/90 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#DFB163]" />
                <span className="text-[11px] font-mono tracking-widest text-[#DFB163] uppercase">
                  {slide.badge}
                </span>
              </div>

              {/* Slide Selector Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                {slides.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => goToSlide(idx)}
                    className={`px-2.5 py-1 text-[11px] font-mono transition-all duration-200 border ${
                      currentSlide === idx
                        ? "border-[#DFB163] bg-[#DFB163] text-[#0B0B0C] font-semibold"
                        : "border-neutral-800 text-neutral-400 hover:text-[#F5F5F0] hover:border-neutral-600"
                    }`}
                  >
                    0{idx + 1}
                  </button>
                ))}
              </div>

              {/* Prev / Next Minimal Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => paginate(-1)}
                  disabled={currentSlide === 0}
                  aria-label="Previous Slide"
                  className="p-2 border border-neutral-800 text-[#F5F5F0] hover:border-[#DFB163] hover:text-[#DFB163] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="h-4 w-4" strokeWidth={1.25} />
                </button>
                <span className="text-xs font-mono text-neutral-400 px-1">
                  0{currentSlide + 1} / 0{slides.length}
                </span>
                <button
                  onClick={() => paginate(1)}
                  disabled={currentSlide === slides.length - 1}
                  aria-label="Next Slide"
                  className="p-2 border border-neutral-800 text-[#F5F5F0] hover:border-[#DFB163] hover:text-[#DFB163] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="h-4 w-4" strokeWidth={1.25} />
                </button>
              </div>
            </div>

            {/* Dynamic Progress Indicator Bar */}
            <div className="w-full h-[2px] bg-neutral-800">
              <motion.div
                className="h-full bg-[#DFB163]"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>

            {/* Slide Stage with Animated Switch */}
            <div className="min-h-[580px] p-6 sm:p-10 lg:p-12 relative flex flex-col justify-center">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={slide.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full"
                >
                  {/* Slide Title Header */}
                  <div className="max-w-3xl mb-8">
                    <h2 className="font-heading text-2xl sm:text-4xl text-[#F5F5F0] tracking-tight">
                      {slide.title}
                    </h2>
                    <p className="mt-2 text-sm sm:text-base text-[#DFB163] font-sans">
                      {slide.subtitle}
                    </p>
                  </div>

                  {/* ── Slide Content Conditional Render ── */}

                  {/* 1. Philosophy Layout */}
                  {slide.content.type === "philosophy" && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {slide.content.pillars?.map((p) => (
                          <div
                            key={p.title}
                            className="p-5 border border-neutral-800 bg-[#141415]"
                          >
                            <span className="text-xs font-mono text-[#DFB163] uppercase tracking-wider font-semibold">
                              {p.title}
                            </span>
                            <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                              {p.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden border border-neutral-800">
                        <Image
                          src={slide.content.image}
                          alt="Philosophy Showcase"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/70 via-transparent to-transparent" />
                      </div>
                    </div>
                  )}

                  {/* 2. Process Layout (5-Step) */}
                  {slide.content.type === "process" && (
                    <div className="flex flex-col gap-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {slide.content.steps?.map((step) => (
                          <div
                            key={step.num}
                            className="p-5 border border-neutral-800 bg-[#141415] flex flex-col justify-between"
                          >
                            <div>
                              <span className="font-heading text-2xl text-[#DFB163]">
                                {step.num}
                              </span>
                              <h3 className="mt-3 text-sm font-semibold uppercase tracking-wider text-[#F5F5F0] font-mono">
                                {step.name}
                              </h3>
                              <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                                {step.desc}
                              </p>
                            </div>
                            <div className="mt-4 pt-3 border-t border-neutral-800 text-[10px] text-[#DFB163] font-mono">
                              Verified Gate
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-neutral-400 text-center font-mono pt-2">
                        Turnkey Governance: Each stage requires formal engineering sign-off prior to milestone procurement.
                      </p>
                    </div>
                  )}

                  {/* 3. Scope of Work Layout */}
                  {slide.content.type === "scope" && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {slide.content.pillars?.map((pillar, i) => (
                          <div
                            key={pillar.title}
                            className="p-5 border border-neutral-800 bg-[#141415]"
                          >
                            <span className="text-[11px] font-mono text-[#DFB163] font-semibold">
                              0{i + 1}. Capability
                            </span>
                            <h3 className="mt-1 text-sm font-semibold text-[#F5F5F0]">
                              {pillar.title}
                            </h3>
                            <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                              {pillar.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="lg:col-span-5 relative aspect-[4/3] overflow-hidden border border-neutral-800">
                        <Image
                          src={slide.content.image}
                          alt="Scope Showcase"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}

                  {/* 4. Case Studies Layout */}
                  {slide.content.type === "casestudy" && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden border border-neutral-800">
                        <Image
                          src={slide.content.image}
                          alt={slide.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="lg:col-span-6 flex flex-col justify-between">
                        {/* Metrics Grid */}
                        <div className="grid grid-cols-2 gap-4">
                          {slide.content.stats?.map((stat) => (
                            <div
                              key={stat.label}
                              className="p-4 border border-neutral-800 bg-[#141415]"
                            >
                              <p className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
                                {stat.label}
                              </p>
                              <p className="mt-1 font-heading text-xl text-[#DFB163]">
                                {stat.value}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Highlights */}
                        <div className="mt-6">
                          <p className="text-xs uppercase tracking-wider text-[#F5F5F0] font-mono mb-3">
                            Engineering Highlights:
                          </p>
                          <ul className="space-y-2.5">
                            {slide.content.highlights?.map((h) => (
                              <li
                                key={h}
                                className="flex items-start gap-2.5 text-xs text-neutral-400 leading-relaxed"
                              >
                                <CheckCircle2
                                  className="h-3.5 w-3.5 text-[#DFB163] flex-shrink-0 mt-0.5"
                                  strokeWidth={1.25}
                                />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Deck Footer / Keyboard Instruction */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-800 px-6 py-4 bg-[#0B0B0C]/95 text-xs text-neutral-400 font-mono">
              <div className="flex items-center gap-4">
                <span>Use keyboard left / right arrow keys to navigate</span>
                <span className="hidden sm:inline text-neutral-700">|</span>
                <span>GK Space Solutions LLP &copy; {new Date().getFullYear()}</span>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="/GK-Space-Solutions-Company-Deck.pdf"
                  download
                  className="hover:text-[#DFB163] transition-colors flex items-center gap-1.5"
                >
                  <Download className="h-3.5 w-3.5" strokeWidth={1.25} />
                  Download Deck (PDF)
                </a>
                <Link
                  href="/contact"
                  className="text-[#DFB163] hover:underline"
                >
                  Contact Engineering Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONSULTATION STRIP ─────────────────────────────────── */}
      <section className="py-16 bg-[var(--bg-primary)] border-t border-[var(--border-primary)] transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h3 className="font-heading text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight">
            Schedule a Tailored Presentation for Your Board or Architectural Practice
          </h3>
          <p className="mt-3 text-sm text-[var(--text-secondary)] max-w-xl mx-auto font-sans leading-relaxed">
            Our principal contractors are available for in-person or virtual boardroom presentations covering BOQs, value engineering, and joinery prototypes.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#DFB163] text-[#0B0B0C] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-white transition-colors"
            >
              Request Boardroom Briefing
            </Link>
            <a
              href="tel:+919820401179"
              className="inline-flex items-center gap-2 border border-[var(--border-primary)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-primary)] hover:border-[var(--accent-gold)] transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-[var(--accent-gold)]" strokeWidth={1.25} />
              +91 98204 01179
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
