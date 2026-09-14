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

  // Auto-advance every 5 seconds with hover pause
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
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

    // Horizontal swipe threshold of 40px
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      if (deltaX > 0) {
        nextSlide();
      } else {
        prevSlide();
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
      className="relative h-[55vh] sm:h-[75vh] md:h-[85vh] flex items-center justify-center overflow-hidden bg-[#0c0c0c] text-[#F5F5F0] select-none"
    >
      {/* ── Background Slides with Ken Burns Effect & 800ms Cross-Fade ── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="absolute inset-0 z-0 overflow-hidden bg-[#0c0c0c]"
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.06 }}
            transition={{ duration: 7, ease: "easeOut" }}
            className="relative h-full w-full bg-[#0c0c0c]"
          >
            <Image
              src={slide.image}
              alt={slide.heading}
              fill
              priority
              sizes="100vw"
              className="object-contain sm:object-cover w-full h-full object-center"
            />
          </motion.div>

          {/* Warm Soft Dark Architectural Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/25 to-black/75" />
        </motion.div>
      </AnimatePresence>

      {/* ── Middle-Aligned Circular Left Arrow ── */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 rounded-full bg-black/20 hover:bg-black/40 text-white border border-white/20 transition-all p-3 backdrop-blur-md active:scale-95 flex items-center justify-center shadow-lg hover:border-[#C5A059] hover:text-[#C5A059] cursor-pointer"
      >
        <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
      </button>

      {/* ── Middle-Aligned Circular Right Arrow ── */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 rounded-full bg-black/20 hover:bg-black/40 text-white border border-white/20 transition-all p-3 backdrop-blur-md active:scale-95 flex items-center justify-center shadow-lg hover:border-[#C5A059] hover:text-[#C5A059] cursor-pointer"
      >
        <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
      </button>

      {/* ── Foreground Text Content ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-12 lg:px-16 py-16 sm:py-24 text-center flex flex-col items-center w-full">
        {/* Animated Slide Content (Smooth 800ms transition) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center max-w-4xl w-full min-h-[380px] sm:min-h-[420px] md:min-h-[460px]"
          >
            {/* Top Editorial Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C5A059]/40 bg-black/40 px-3.5 py-1 sm:px-4 sm:py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
              <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.2em] text-[#C5A059] uppercase font-mono">
                {slide.tagline}
              </span>
            </div>

            {/* Main Headline - Editorial Serif */}
            <div className="mt-6 sm:mt-8 min-h-[64px] sm:min-h-[88px] md:min-h-[140px] lg:min-h-[160px] flex items-center justify-center w-full">
              <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-tight sm:leading-[1.12]">
                {slide.heading}
              </h1>
            </div>

            {/* Subheading - Subtle Warm Tone */}
            <div className="mt-4 sm:mt-6 min-h-[44px] sm:min-h-[56px] flex items-center justify-center w-full">
              <p className="max-w-2xl text-xs sm:text-base md:text-lg text-neutral-200 font-sans leading-relaxed px-2 sm:px-0">
                {slide.subheading}
              </p>
            </div>

            {/* CTAs - Warm Brushed Brass and Glass Blur */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto px-4 sm:px-0">
              <a
                href="#projects"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[#C5A059] px-6 sm:px-8 py-3 sm:py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#1C1917] transition-all duration-300 hover:bg-white hover:shadow-xl active:scale-[0.98]"
              >
                Explore Projects
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 text-[#1C1917]"
                  strokeWidth={1.25}
                />
              </a>

              <a
                href="https://wa.me/919820401179?text=Hello%20GK%20Space%20Solutions%2C%20I%20would%20like%20to%20schedule%20an%20architectural%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 border border-white/25 bg-black/40 px-6 sm:px-8 py-3 sm:py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all duration-300 hover:border-[#C5A059] hover:bg-white/10 active:scale-[0.98]"
              >
                <MessageSquare className="h-4 w-4 text-[#C5A059]" strokeWidth={1.25} />
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Slide Indicators: Thin Dashes at Bottom Center ── */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-2.5 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
        {slides.map((s, idx) => {
          const isActive = current === idx;
          return (
            <button
              key={s.id}
              onClick={() => goToSlide(idx)}
              aria-label={`Jump to slide ${idx + 1}`}
              className="group py-1 focus:outline-none cursor-pointer"
            >
              <span
                className={`block h-1 rounded-full transition-all duration-500 ${isActive
                    ? "w-8 sm:w-10 bg-[#C5A059]"
                    : "w-3 bg-white/40 group-hover:bg-white/70"
                  }`}
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}
