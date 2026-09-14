"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  ArrowUpRight,
  Maximize2,
  X,
  Layers,
} from "lucide-react";
import {
  projectsData,
  type ProjectCategory,
  type GalleryProject,
} from "@/lib/projectsData";

const filterTabs: { id: ProjectCategory; label: string }[] = [
  { id: "All", label: "ALL PROJECTS" },
  { id: "Commercial", label: "COMMERCIAL" },
  { id: "Corporate", label: "CORPORATE" },
  { id: "Residential", label: "RESIDENTIAL" },
];

export default function HomePortfolioShowcase() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  const handleInquireClick = (e: React.MouseEvent, projectTitle: string) => {
    if (typeof window !== "undefined") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        e.preventDefault();
        setSelectedProject(null);
        contactSection.scrollIntoView({ behavior: "smooth" });

        const input = document.getElementById("inquiry-project") as HTMLInputElement | null;
        if (input) {
          input.value = projectTitle;
          input.focus();
        }

        window.history.replaceState(null, "", `#contact?project=${encodeURIComponent(projectTitle)}`);
      }
    }
  };

  return (
    <section
      id="projects"
      aria-label="Featured Architectural Showcase"
      className="relative w-full py-20 sm:py-28 bg-[var(--bg-primary)] transition-colors duration-300 border-b border-[var(--border-primary)]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10 border-b border-[var(--border-primary)]">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase font-mono">
              <Layers className="h-3.5 w-3.5" strokeWidth={1.25} />
              Full Curation Index
            </span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-primary)] tracking-tight">
              Featured Spaces &amp; Landmarks
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-sans">
              A curated selection of our completed corporate headquarters, commercial lounges, and bespoke interior fit-outs executed across India.
            </p>
          </div>
        </div>

        {/* ── Category Filter Tabs & Counter Indicator ── */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[var(--border-primary)]">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {filterTabs.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-5 py-2.5 text-xs uppercase tracking-widest font-mono transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[var(--text-primary)] text-[var(--bg-primary)] font-semibold shadow-sm"
                      : "bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]"
                  } border border-[var(--border-primary)]`}
                >
                  {cat.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeShowcaseIndicator"
                      className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-[var(--accent-gold)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="text-xs font-mono text-[var(--text-secondary)] tracking-wider">
            Showing {filteredProjects.length} Architectural Works
          </div>
        </div>

        {/* ── Clean Editorial 3-Column Grid ── */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{
                  duration: 0.4,
                  delay: (index % 6) * 0.04,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="group relative flex flex-col bg-[var(--bg-surface)] border border-[var(--border-primary)] transition-all duration-500 hover:border-[var(--accent-gold)] hover:shadow-xl overflow-hidden"
              >
                {/* Image Container with aspect-[4/3] and hover zoom */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={project.imagePath}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center w-full h-full transition-transform duration-500 ease-out hover:scale-105 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

                  {/* Tag at Top-Left */}
                  <div className="absolute top-3.5 left-3.5 z-10 pointer-events-none">
                    <span className="inline-block bg-black/85 backdrop-blur-sm text-[var(--accent-gold)] text-[10px] tracking-[0.18em] uppercase px-3 py-1 border border-white/20 font-mono font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* Maximize Lightbox button at Top-Right */}
                  <div className="absolute top-3.5 right-3.5 z-10">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      aria-label={`Enlarge ${project.title}`}
                      className="p-2 bg-black/80 text-white hover:text-[var(--accent-gold)] hover:bg-black transition-colors border border-white/20 cursor-pointer"
                    >
                      <Maximize2 className="h-3.5 w-3.5" strokeWidth={1.25} />
                    </button>
                  </div>
                </div>

                {/* Editorial Card Body */}
                <div className="flex flex-1 flex-col justify-between p-6 bg-[var(--bg-surface)] transition-colors duration-300">
                  <div>
                    {/* Location Pin */}
                    <div className="flex items-center gap-1.5 text-xs text-[var(--accent-gold)] font-sans">
                      <MapPin className="h-3.5 w-3.5 flex-shrink-0" strokeWidth={1.25} />
                      <span>{project.location}</span>
                    </div>

                    {/* Project Title: Crisp Serif Typography */}
                    <h3 className="mt-2 font-heading text-xl text-[var(--text-primary)] tracking-normal group-hover:text-[var(--accent-gold)] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    {/* Narrative Paragraph: 2-3 lines of clean editorial description */}
                    <p className="mt-3 text-sm text-[var(--text-secondary)] not-italic font-normal leading-relaxed tracking-normal line-clamp-3 font-sans">
                      {project.caption}
                    </p>
                  </div>

                  {/* Footer Meta Line: GK SPACE SOLUTIONS LLP • [SERVICE SCOPE] & INQUIRE ↗ */}
                  <div className="mt-6 pt-4 border-t border-[var(--border-primary)] flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-1.5 min-w-0 text-[10px] sm:text-[11px] font-mono tracking-wider text-[var(--text-secondary)] uppercase truncate">
                      <span className="font-semibold text-[var(--accent-gold)] shrink-0">GK SPACE SOLUTIONS LLP</span>
                      <span className="shrink-0 text-[var(--text-secondary)]/60">&bull;</span>
                      <span className="truncate text-[var(--text-secondary)]">{project.scope}</span>
                    </div>

                    <a
                      href={`#contact?project=${encodeURIComponent(project.title)}`}
                      onClick={(e) => handleInquireClick(e, project.title)}
                      className="inline-flex items-center gap-1 text-xs font-semibold tracking-wider text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors shrink-0 font-mono"
                    >
                      INQUIRE ↗
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── High-Resolution Lightbox Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl bg-[var(--bg-surface)] border border-[var(--border-primary)] shadow-2xl overflow-hidden"
            >
              <div className="relative aspect-[16/10] w-full bg-black">
                <Image
                  src={selectedProject.imagePath}
                  alt={selectedProject.title}
                  fill
                  className="object-contain"
                />
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close Lightbox"
                  className="absolute top-4 right-4 p-2 bg-[var(--bg-surface)]/80 text-[var(--text-primary)] hover:text-[var(--accent-gold)] border border-[var(--border-primary)] transition-colors cursor-pointer"
                >
                  <X className="h-4 w-4" strokeWidth={1.25} />
                </button>
              </div>

              <div className="p-6 sm:p-8 bg-[var(--bg-surface)] text-[var(--text-primary)]">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent-gold)]">
                      {selectedProject.category} &bull; {selectedProject.location}
                    </span>
                    <h3 className="mt-1 font-heading text-2xl text-[var(--text-primary)]">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <a
                    href={`#contact?project=${encodeURIComponent(selectedProject.title)}`}
                    onClick={(e) => handleInquireClick(e, selectedProject.title)}
                    className="inline-flex items-center gap-2 bg-[var(--accent-gold)] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 hover:bg-white transition-colors"
                  >
                    Inquire On This Project
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.25} />
                  </a>
                </div>
                <p className="mt-4 text-sm text-[var(--text-secondary)] leading-relaxed font-sans">
                  {selectedProject.caption}
                </p>
                <div className="mt-4 pt-3 border-t border-[var(--border-primary)] flex flex-wrap items-center justify-between text-xs font-mono text-[var(--text-secondary)]">
                  <span>Turnkey Contracting: <strong className="text-[var(--text-primary)]">{selectedProject.contractor}</strong></span>
                  <span className="text-[var(--accent-gold)]">Scope: {selectedProject.scope}</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
