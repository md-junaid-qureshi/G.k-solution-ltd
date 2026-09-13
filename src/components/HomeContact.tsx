"use client";

import { useState, useActionState, useEffect, useRef } from "react";
import Link from "next/link";
import { Phone, Mail, ArrowRight, Send, CheckCircle2, ShieldCheck, Clock } from "lucide-react";
import { submitContactInquiry, type ContactResponse } from "@/app/actions/contact";
import { company } from "@/lib/data";

export default function HomeContact() {
  const [state, formAction, isPending] = useActionState<ContactResponse | null, FormData>(
    submitContactInquiry,
    null
  );

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const digitsOnly = raw.replace(/\D/g, "").slice(0, 10);
    setPhone(digitsOnly);
    if (phoneError && digitsOnly.length === 10) {
      setPhoneError("");
    }
  };

  const handlePhoneBlur = () => {
    if (phone && phone.length < 10) {
      setPhoneError("Please enter a valid 10-digit mobile number.");
    } else {
      setPhoneError("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (phone.length < 10) {
      e.preventDefault();
      setPhoneError("Please enter a valid 10-digit mobile number.");
      const input = document.getElementById("phone");
      if (input) input.focus();
    }
  };

  const projectInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check for hash param on mount
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash.includes("project=")) {
        const match = hash.match(/project=([^&]+)/);
        if (match && projectInputRef.current) {
          projectInputRef.current.value = decodeURIComponent(match[1]);
        }
      }
    }
  }, []);

  return (
    <section id="contact" className="relative py-24 bg-[#0B0B0C] text-[#F5F5F0] overflow-hidden border-t border-neutral-800 scroll-mt-20">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#DFB163_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Architectural Credentials & Contact info */}
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#DFB163] uppercase font-mono">
              Start Your Project
            </span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl text-[#F5F5F0] tracking-tight">
              Ready to Translate Your Vision Into Reality?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed font-sans">
              Connect with our principal contracting engineers for BOQ analysis, technical feasibility, or turnkey interior execution across Mumbai and Pune.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 p-4 bg-neutral-900/80 border border-neutral-800 text-sm text-neutral-200 hover:border-[#DFB163] hover:text-[#DFB163] transition-colors"
              >
                <Phone className="h-4 w-4 text-[#DFB163] shrink-0" strokeWidth={1.25} />
                <span>{company.phone}</span>
              </a>

              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-3 p-4 bg-neutral-900/80 border border-neutral-800 text-sm text-neutral-200 hover:border-[#DFB163] hover:text-[#DFB163] transition-colors"
              >
                <Mail className="h-4 w-4 text-[#DFB163] shrink-0" strokeWidth={1.25} />
                <span>{company.email}</span>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400 font-mono">
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-[#DFB163]" strokeWidth={1.25} />
                24h Response SLA
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-[#DFB163]" strokeWidth={1.25} />
                100% Turnkey Delivery
              </span>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-[#141415] border border-neutral-800 p-8 sm:p-10 shadow-2xl">
            {state?.success ? (
              <div className="py-12 px-4 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#DFB163]/10 text-[#DFB163] mb-4">
                  <CheckCircle2 className="h-8 w-8" strokeWidth={1.25} />
                </div>
                <h3 className="font-heading text-2xl text-[#F5F5F0]">
                  Inquiry Transmitted Successfully
                </h3>
                <p className="mt-3 text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
                  {state.message}
                </p>
                <Link
                  href="/projects"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#DFB163] hover:underline"
                >
                  Explore More Projects
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ) : (
              <form action={formAction} onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                  <h3 className="font-heading text-xl text-[#F5F5F0]">
                    Direct Project Consultation
                  </h3>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#DFB163]">
                    Mumbai &bull; Pune
                  </span>
                </div>

                {state?.message && !state.success && (
                  <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                    {state.message}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="Your Name"
                      className="w-full bg-[#0B0B0C] border border-neutral-700 px-3.5 py-2.5 text-sm text-[#F5F5F0] placeholder:text-neutral-600 focus:outline-none focus:border-[#DFB163] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5"
                    >
                      Phone Number *
                    </label>
                    <div className="flex items-center bg-[#0B0B0C] border border-neutral-700 focus-within:border-[#DFB163] transition-colors">
                      <span className="flex items-center px-3 py-2.5 border-r border-neutral-700 text-xs font-mono text-[#DFB163] select-none bg-neutral-900 font-medium">
                        +91
                      </span>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        inputMode="numeric"
                        maxLength={10}
                        required
                        value={phone}
                        onChange={handlePhoneChange}
                        onBlur={handlePhoneBlur}
                        placeholder="98204 01179"
                        className="w-full bg-transparent px-3 py-2.5 text-sm text-[#F5F5F0] placeholder:text-neutral-600 focus:outline-none"
                      />
                    </div>
                    {(phoneError || state?.errors?.phone) && (
                      <p className="mt-1 text-xs text-red-400 font-sans">
                        {phoneError || state?.errors?.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      className="w-full bg-[#0B0B0C] border border-neutral-700 px-3.5 py-2.5 text-sm text-[#F5F5F0] placeholder:text-neutral-600 focus:outline-none focus:border-[#DFB163] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-project"
                      className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5"
                    >
                      Project Reference
                    </label>
                    <input
                      id="inquiry-project"
                      ref={projectInputRef}
                      name="project"
                      type="text"
                      placeholder="General Inquiry or Project Title"
                      className="w-full bg-[#0B0B0C] border border-neutral-700 px-3.5 py-2.5 text-sm text-[#F5F5F0] placeholder:text-neutral-600 focus:outline-none focus:border-[#DFB163] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5"
                  >
                    Requirement Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    required
                    placeholder="Briefly describe your carpet area, timeline, and scope..."
                    className="w-full bg-[#0B0B0C] border border-neutral-700 px-3.5 py-2.5 text-sm text-[#F5F5F0] placeholder:text-neutral-600 focus:outline-none focus:border-[#DFB163] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#DFB163] text-[#0B0B0C] font-semibold uppercase tracking-[0.2em] text-xs py-3.5 px-6 transition-all duration-300 hover:bg-white disabled:opacity-50"
                >
                  {isPending ? "Transmitting..." : "Send Consultation Inquiry"}
                  <Send className="h-3.5 w-3.5" strokeWidth={1.25} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
