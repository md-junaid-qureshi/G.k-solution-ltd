"use client";

import Link from "next/link";
import { ArrowUpRight, Layers } from "lucide-react";
import ProjectsGallery from "@/components/ProjectsGallery";

export default function ProjectShowcase() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-[var(--bg-primary)] transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase">
              <Layers className="h-3.5 w-3.5" strokeWidth={1.25} />
              Portfolio of Distinction
            </span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-primary)] tracking-tight">
              Selected Architectural & Interior Works
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-sans">
              Explore our curation of enterprise corporate headquarters, luxury private residences, and bespoke joinery projects engineered across Mumbai and Pune.
            </p>
          </div>

          <div className="flex items-center">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors"
            >
              View Full Gallery Index
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-[var(--accent-gold)]"
                strokeWidth={1.25}
              />
            </Link>
          </div>
        </div>

        {/* Dynamic Interactive Projects Gallery */}
        <ProjectsGallery />
      </div>
    </section>
  );
}
