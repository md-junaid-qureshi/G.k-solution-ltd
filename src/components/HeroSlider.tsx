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
      className="relative h-[780px] sm:h-[840px] md:h-[880px] lg:h-[920px] flex items-center justify-center overflow-hidden bg-[#0B0B0C] text-[#F5F5F0] select-none"
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/65 to-[#0B0B0C]/85" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0B0B0C]/40 to-[#0B0B0C]/80" />
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
            className="flex flex-col items-center justify-center max-w-4xl w-full min-h-[380px] sm:min-h-[420px] md:min-h-[460px]"
          >
            {/* Top Editorial Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#DFB163]/40 bg-[#0B0B0C]/80 px-3.5 py-1 sm:px-4 sm:py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#DFB163]" />
              <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.2em] text-[#DFB163] uppercase font-mono">
                {slide.tagline}
              </span>
            </div>

            {/* Main Headline - Stable Sized Container */}
            <div className="mt-6 sm:mt-8 min-h-[64px] sm:min-h-[88px] md:min-h-[140px] lg:min-h-[160px] flex items-center justify-center w-full">
              <h1 className="font-heading text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#F5F5F0] leading-tight sm:leading-[1.12]">
                {slide.heading}
              </h1>
            </div>

            {/* Subheading - Stable Sized Container */}
            <div className="mt-4 sm:mt-6 min-h-[44px] sm:min-h-[56px] flex items-center justify-center w-full">
              <p className="max-w-2xl text-xs sm:text-base md:text-lg text-neutral-300 font-sans leading-relaxed px-2 sm:px-0">
                {slide.subheading}
              </p>
            </div>

            {/* CTAs - Clean Vertical Stacking on Mobile */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto px-4 sm:px-0">
              <a
                href="#projects"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[#DFB163] px-6 sm:px-8 py-3 sm:py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#0B0B0C] transition-all duration-300 hover:bg-white hover:shadow-xl active:scale-[0.98]"
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
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 border border-neutral-700/60 bg-[#0B0B0C]/60 px-6 sm:px-8 py-3 sm:py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#F5F5F0] backdrop-blur-sm transition-all duration-300 hover:border-[#DFB163] hover:bg-white/10 active:scale-[0.98]"
              >
                <MessageSquare className="h-4 w-4 text-[#DFB163]" strokeWidth={1.25} />
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Slide Controls & Progress Bar Strip ── */}
        <div className="mt-10 sm:mt-14 w-full max-w-4xl pt-6 sm:pt-8 border-t border-neutral-800 flex items-center justify-between gap-4">
          {/* Slide Indicator Numbers */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="text-[11px] sm:text-xs font-mono tracking-widest text-[#DFB163]">
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
                      ? "w-6 sm:w-8 bg-[#DFB163]"
                      : "w-2.5 sm:w-3 bg-neutral-700 hover:bg-neutral-600"
                  }`}
                />
              ))}
            </div>
            <span className="text-[11px] sm:text-xs font-mono tracking-widest text-neutral-400">
              0{slides.length}
            </span>
          </div>

          {/* Center: Subtle Status */}
          <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-neutral-400 uppercase hidden sm:inline truncate max-w-[240px]">
            {slide.est}
          </span>

          {/* Left / Right Minimal Navigation */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="p-2 sm:p-2.5 border border-neutral-700 text-[#F5F5F0] hover:border-[#DFB163] hover:text-[#DFB163] transition-colors backdrop-blur-sm bg-[#0B0B0C]/40 active:scale-95"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.25} />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next Slide"
              className="p-2 sm:p-2.5 border border-neutral-700 text-[#F5F5F0] hover:border-[#DFB163] hover:text-[#DFB163] transition-colors backdrop-blur-sm bg-[#0B0B0C]/40 active:scale-95"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={1.25} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
