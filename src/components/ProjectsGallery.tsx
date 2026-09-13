"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  MapPin,
  Maximize2,
  X,
} from "lucide-react";
import {
  projectsData,
  galleryCategories,
  type ProjectCategory,
  type GalleryProject,
} from "@/lib/projectsData";

export default function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="relative w-full">
      {/* ── Filter Bar ─────────────────────────────────────────── */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[var(--border-primary)]">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {galleryCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-5 py-2.5 text-xs uppercase tracking-widest transition-all duration-300 ${
                  isActive
                    ? "bg-[var(--text-primary)] text-[var(--bg-primary)] font-semibold shadow-sm"
                    : "bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]"
                } border border-[var(--border-primary)]`}
              >
                {cat.label}
                {isActive && (
                  <motion.div
                    layoutId="activeGalleryIndicator"
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

      {/* ── Responsive 3-Column Luxury Grid ─────────────────────── */}
      <motion.div
        layout
        className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{
                duration: 0.45,
                delay: (index % 6) * 0.05,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="group relative flex flex-col bg-[var(--bg-surface)] border border-[var(--border-primary)] transition-all duration-500 hover:border-[var(--accent-gold)] hover:shadow-2xl overflow-hidden"
            >
              {/* Image Frame with Aspect Ratio */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-neutral-900">
                <Image
                  src={project.imagePath}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-30" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="inline-block bg-black/85 backdrop-blur-sm text-[var(--accent-gold)] text-[10px] tracking-[0.18em] uppercase px-3 py-1 border border-white/20 font-mono">
                    {project.category}
                  </span>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    aria-label={`Enlarge ${project.title}`}
                    className="pointer-events-auto p-2 bg-black/80 text-white hover:text-[var(--accent-gold)] hover:bg-black transition-colors border border-white/20"
                  >
                    <Maximize2 className="h-3.5 w-3.5" strokeWidth={1.25} />
                  </button>
                </div>
              </div>

              {/* Editorial Card Content */}
              <div className="flex flex-1 flex-col justify-between p-6 bg-[var(--bg-surface)] transition-colors duration-300">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[var(--accent-gold)] font-sans">
                    <MapPin className="h-3.5 w-3.5" strokeWidth={1.25} />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="mt-2 font-heading text-xl text-[var(--text-primary)] tracking-normal group-hover:text-[var(--accent-gold)] transition-colors">
                    {project.title}
                  </h3>

                  {/* Client's Exact Architectural Caption */}
                  <blockquote className="mt-3 text-xs sm:text-[13px] text-[var(--text-secondary)] leading-relaxed font-sans border-l-2 border-[var(--accent-gold)]/50 pl-3 italic">
                    &ldquo;{project.caption}&rdquo;
                  </blockquote>
                </div>

                {/* Scope & Inquire Footer */}
                <div className="mt-6 pt-4 border-t border-[var(--border-primary)] flex items-center justify-between text-xs">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--accent-gold)]">
                      {project.contractor}
                    </span>
                    <span className="text-[11px] font-mono tracking-wider text-[var(--text-secondary)] uppercase">
                      {project.scope}
                    </span>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 font-semibold uppercase tracking-wider text-[var(--text-primary)] group-hover:text-[var(--accent-gold)] transition-colors flex-shrink-0"
                  >
                    Inquire
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.25} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* ── Lightbox Modal for High-Resolution Inspection ─────── */}
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
                  className="absolute top-4 right-4 p-2 bg-[var(--bg-surface)]/80 text-[var(--text-primary)] hover:text-[var(--accent-gold)] border border-[var(--border-primary)] transition-colors"
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
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[var(--accent-gold)] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 hover:bg-neutral-100 transition-colors"
                  >
                    Inquire On This Project
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.25} />
                  </Link>
                </div>
                <p className="mt-4 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed italic border-l border-[var(--accent-gold)] pl-3">
                  &ldquo;{selectedProject.caption}&rdquo;
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
    </div>
  );
}
