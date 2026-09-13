"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
} from "lucide-react";

interface Slide {
  id: string;
  image: string;
  tagline: string;
  heading: string;
  subheading: string;
  est: string;
}

const slides: Slide[] = [
  {
    id: "slide-1",
    image: "/projects/carousel-1.jpg",
    tagline: "BESPOKE ARCHITECTURAL INTERIORS",
    heading: "Crafting Spaces with Precision.",
    subheading:
      "Delivering world-class corporate and residential environments across Mumbai & Pune.",
    est: "EST. 2000 — MUMBAI & PUNE",
  },
  {
    id: "slide-2",
    image: "/projects/carousel-2.jpg",
    tagline: "TURNKEY EXECUTION & FIT-OUTS",
    heading: "Where Innovation Meets Craftsmanship.",
    subheading:
      "25+ years of delivering uncompromising quality from concept to reality.",
    est: "25+ YEARS OF EXCELLENCE",
  },
  {
    id: "slide-3",
    image: "/projects/office.jpeg",
    tagline: "CONTEMPORARY COMMERCIAL WORKSPACES",
    heading: "Designing Spaces. Enriching Lives.",
    subheading:
      "Functional elegance tailored to modern enterprise demands.",
    est: "COMMERCIAL INTERIOR SPECIALISTS",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (idx: number) => {
    setCurrent(idx);
  };

  // Auto-advance every 6 seconds with hover pause
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch swipe handling for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null || touchStartY === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchStartX - touchEndX;
    const deltaY = touchStartY - touchEndY;

    // Horizontal swipe threshold of 40px, dominating vertical scroll
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      if (deltaX > 0) {
        nextSlide(); // Swipe left -> Next
      } else {
        prevSlide(); // Swipe right -> Previous
      }
    }
    setTouchStartX(null);
    setTouchStartY(null);
  };

  const slide = slides[current];

  return (
    <section
      aria-label="Architectural Hero Presentation"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative min-h-[85vh] sm:min-h-[90vh] h-[100dvh] max-h-[1080px] flex items-center justify-center overflow-hidden bg-[var(--brand-dark)] text-[var(--brand-light)] select-none"
    >
      {/* ── Background Slides with Ken Burns Slow-Zoom Effect ── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute inset-0 z-0 overflow-hidden"
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.07 }}
            transition={{ duration: 7, ease: "easeOut" }}
            className="relative h-full w-full"
          >
            <Image
              src={slide.image}
              alt={slide.heading}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>

          {/* Balanced Luxury Vignette Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)] via-[var(--brand-dark)]/65 to-[var(--brand-dark)]/85" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[var(--brand-dark)]/40 to-[var(--brand-dark)]/80" />
        </motion.div>
      </AnimatePresence>

      {/* ── Foreground Text Content ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center flex flex-col items-center w-full">
        {/* Animated Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center max-w-4xl w-full"
          >
            {/* Top Editorial Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-brass)]/40 bg-[var(--brand-dark)]/80 px-3.5 py-1 sm:px-4 sm:py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-brass)]" />
              <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.2em] text-[var(--brand-brass)] uppercase font-mono">
                {slide.tagline}
              </span>
            </div>

            {/* Main Headline - Clean Mobile Scaling */}
            <h1 className="mt-6 sm:mt-8 font-heading text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[var(--brand-light)] leading-tight sm:leading-[1.12]">
              {slide.heading}
            </h1>

            {/* Subheading */}
            <p className="mt-4 sm:mt-6 max-w-2xl text-xs sm:text-base md:text-lg text-[var(--brand-muted)] font-sans leading-relaxed px-2 sm:px-0">
              {slide.subheading}
            </p>

            {/* CTAs - Clean Vertical Stacking on Mobile */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto px-4 sm:px-0">
              <a
                href="#projects"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[var(--brand-brass)] px-6 sm:px-8 py-3 sm:py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-dark)] transition-all duration-300 hover:bg-[var(--brand-light)] hover:shadow-xl active:scale-[0.98]"
              >
                Explore Projects
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.25}
                />
              </a>

              <a
                href="https://wa.me/919820401179?text=Hello%20GK%20Space%20Solutions%2C%20I%20would%20like%20to%20schedule%20an%20architectural%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 border border-[var(--brand-border)]/50 bg-[var(--brand-dark)]/60 px-6 sm:px-8 py-3 sm:py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-light)] backdrop-blur-sm transition-all duration-300 hover:border-[var(--brand-brass)] hover:bg-[var(--brand-light)]/10 active:scale-[0.98]"
              >
                <MessageSquare className="h-4 w-4 text-[var(--brand-brass)]" strokeWidth={1.25} />
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Slide Controls & Progress Bar Strip ── */}
        <div className="mt-10 sm:mt-14 w-full max-w-4xl pt-6 sm:pt-8 border-t border-[var(--brand-border)]/30 flex items-center justify-between gap-4">
          {/* Slide Indicator Numbers */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="text-[11px] sm:text-xs font-mono tracking-widest text-[var(--brand-brass)]">
              0{current + 1}
            </span>
            <div className="flex items-center gap-1.5">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Jump to slide ${idx + 1}`}
                  className={`h-1.5 transition-all duration-500 rounded-full ${
                    current === idx
                      ? "w-6 sm:w-8 bg-[var(--brand-brass)]"
                      : "w-2.5 sm:w-3 bg-[var(--brand-border)]/50 hover:bg-[var(--brand-border)]"
                  }`}
                />
              ))}
            </div>
            <span className="text-[11px] sm:text-xs font-mono tracking-widest text-[var(--brand-muted)]">
              0{slides.length}
            </span>
          </div>

          {/* Center: Subtle Status */}
          <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-[var(--brand-muted)] uppercase hidden sm:inline truncate max-w-[240px]">
            {slide.est}
          </span>

          {/* Left / Right Minimal Navigation */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="p-2 sm:p-2.5 border border-[var(--brand-border)]/40 text-[var(--brand-light)] hover:border-[var(--brand-brass)] hover:text-[var(--brand-brass)] transition-colors backdrop-blur-sm bg-[var(--brand-dark)]/40 active:scale-95"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.25} />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next Slide"
              className="p-2 sm:p-2.5 border border-[var(--brand-border)]/40 text-[var(--brand-light)] hover:border-[var(--brand-brass)] hover:text-[var(--brand-brass)] transition-colors backdrop-blur-sm bg-[var(--brand-dark)]/40 active:scale-95"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={1.25} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
