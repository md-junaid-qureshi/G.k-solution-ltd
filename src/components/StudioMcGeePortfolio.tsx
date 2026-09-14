"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projectsData, type GalleryProject } from "@/lib/projectsData";

interface StudioMcGeePortfolioProps {
  seeMoreHref?: string;
}

export default function StudioMcGeePortfolio({
  seeMoreHref = "/portfolio#curation-index",
}: StudioMcGeePortfolioProps) {
  const featured: GalleryProject[] = projectsData.slice(0, 8);
  const [current, setCurrent] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(1200);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevProject = useCallback(() => {
    setCurrent((prev) => (prev - 1 + featured.length) % featured.length);
  }, [featured.length]);

  const nextProject = useCallback(() => {
    setCurrent((prev) => (prev + 1) % featured.length);
  }, [featured.length]);

  const goToProject = (index: number) => {
    setCurrent(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevProject();
      if (e.key === "ArrowRight") nextProject();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextProject, prevProject]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const deltaX = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(deltaX) > 40) {
      if (deltaX > 0) nextProject();
      else prevProject();
    }
    setTouchStartX(null);
  };

  const isMobile = viewportWidth < 640;

  return (
    <section
      aria-label="Studio McGee Portfolio Showcase"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full bg-[#232725] text-[#FDFCF7] overflow-hidden select-none"
    >
      {/* ── Stage & Grid Container (Desktop: max-w-7xl mx-auto px-6 md:px-12 py-16 relative min-h-[680px]) ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 relative min-h-[680px]">
        {/* ── Top-Left Header (Anchored strictly to left-6 md:left-12 top-12 text-left z-20) ── */}
        <div className="text-left mb-6 md:mb-0 md:absolute md:left-12 md:top-12 z-20">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-light font-mono">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-5xl font-serif text-white font-light mt-2 tracking-tight">
            Featured Spaces & Landmarks
          </h2>
        </div>

        {/* ── 3D Stage Container ────────────────────────────── */}
        <div
          style={{ perspective: "1200px" }}
          className="perspective-[1200px] overflow-hidden flex items-center justify-center relative w-full h-[420px] sm:h-[480px] md:h-[600px] mt-2 md:mt-16"
        >
          {/* ── 3D Track ────────────────────────────────────────── */}
          <div
            style={{ transformStyle: "preserve-3d" }}
            className="relative flex items-center justify-center transform-style-3d w-full h-full"
          >
            {featured.map((item, idx) => {
              // Calculate normalized circular diff: -N/2 to N/2
              const n = featured.length;
              let diff = (idx - current) % n;
              if (diff < -n / 2) diff += n;
              if (diff > n / 2) diff -= n;

              const isCenter = diff === 0;
              const isRight = diff === 1;
              const isLeft = diff === -1;

              // 3D Anti-Clockwise Orbit Positioning
              let transformStyle = "";
              let zIndexVal = 0;
              let opacityVal = 0;
              let filterVal = "none";
              let pointerEventsVal: "auto" | "none" = "none";

              if (isCenter) {
                transformStyle = "translate3d(0px, 0px, 40px) rotateY(0deg) scale(1)";
                zIndexVal = 30;
                opacityVal = 1;
                filterVal = "drop-shadow(0 25px 35px rgba(0,0,0,0.35))";
                pointerEventsVal = "auto";
              } else if (isRight) {
                transformStyle = isMobile
                  ? "translate3d(100px, 0px, -40px) rotateY(-18deg) scale(0.85)"
                  : "translate3d(420px, 0px, -60px) rotateY(-18deg) scale(0.88)";
                zIndexVal = 10;
                opacityVal = 0.65;
                filterVal = "blur(0.5px)";
                pointerEventsVal = "auto";
              } else if (isLeft) {
                transformStyle = isMobile
                  ? "translate3d(-100px, 0px, -40px) rotateY(18deg) scale(0.85)"
                  : "translate3d(-420px, 0px, -60px) rotateY(18deg) scale(0.88)";
                zIndexVal = 10;
                opacityVal = 0.65;
                filterVal = "blur(0.5px)";
                pointerEventsVal = "auto";
              } else {
                transformStyle = isMobile
                  ? `translate3d(${diff > 0 ? 220 : -220}px, 0px, -120px) rotateY(${diff > 0 ? -30 : 30}deg) scale(0.7)`
                  : `translate3d(${diff > 0 ? 800 : -800}px, 0px, -180px) rotateY(${diff > 0 ? -30 : 30}deg) scale(0.7)`;
                zIndexVal = 0;
                opacityVal = 0;
                pointerEventsVal = "none";
              }

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (isRight) nextProject();
                    if (isLeft) prevProject();
                  }}
                  role={isRight || isLeft ? "button" : undefined}
                  tabIndex={isRight || isLeft ? 0 : undefined}
                  aria-label={item.title}
                  style={{
                    transform: transformStyle,
                    zIndex: zIndexVal,
                    opacity: opacityVal,
                    filter: filterVal,
                    pointerEvents: pointerEventsVal,
                  }}
                  className={`group absolute inset-0 m-auto rounded-sm overflow-hidden bg-[#1A1D1B] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer select-none ${
                    isCenter
                      ? "w-[240px] md:w-[440px] h-[330px] md:h-[560px] md:aspect-[4/5]"
                      : "w-[180px] md:w-[380px] h-[260px] md:h-[480px]"
                  }`}
                >
                  <Image
                    src={item.imagePath}
                    alt={item.title}
                    fill
                    priority={isCenter}
                    sizes="(max-width: 640px) 240px, 440px"
                    className="object-cover object-center w-full h-full transition-transform duration-700 ease-out scale-100 group-hover:scale-105"
                  />

                  {/* Minimal subtle bottom gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                  {/* Clean, single-line elegant title at bottom */}
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 flex flex-col justify-end">
                    <h3 className="font-serif text-sm sm:text-base text-white font-light tracking-wide truncate">
                      {item.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Bottom Controls Row (Match McGee exactly) ────────────── */}
        <div className="flex items-center justify-between w-full max-w-xl mx-auto mt-10 px-4">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={prevProject}
            aria-label="Previous project"
            className="h-10 w-10 sm:h-11 sm:w-11 rounded-full border border-white/40 hover:border-white text-white/80 hover:text-white flex items-center justify-center transition-all duration-300 hover:bg-white/10 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.25} />
          </button>

          {/* Center CTA Button */}
          <Link
            href={seeMoreHref}
            className="border border-stone-400 text-stone-200 uppercase tracking-widest text-xs px-6 py-2.5 hover:bg-white hover:text-black transition-all font-mono"
          >
            SEE MORE PROJECTS
          </Link>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={nextProject}
            aria-label="Next project"
            className="h-10 w-10 sm:h-11 sm:w-11 rounded-full border border-white/40 hover:border-white text-white/80 hover:text-white flex items-center justify-center transition-all duration-300 hover:bg-white/10 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.25} />
          </button>
        </div>

        {/* Slide Counter Dots */}
        <div className="mt-5 flex items-center justify-center gap-1.5">
          {featured.map((_: GalleryProject, idx: number) => (
            <button
              key={idx}
              onClick={() => goToProject(idx)}
              aria-label={`Jump to project ${idx + 1}`}
              className={`h-1 transition-all duration-300 cursor-pointer ${
                current === idx ? "w-6 bg-[#DFB163]" : "w-1.5 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
