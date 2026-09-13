"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, ShieldCheck } from "lucide-react";
import { submitContactInquiry, type ContactResponse } from "@/app/actions/contact";
import { company } from "@/lib/data";

export default function ContactClient() {
  const searchParams = useSearchParams();
  const projectParam = searchParams.get("project") || "";

  const [state, formAction, isPending] = useActionState<ContactResponse | null, FormData>(
    submitContactInquiry,
    null
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      {/* Left: Contact Info & Credentials */}
      <div className="lg:col-span-5 flex flex-col justify-between h-full">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase font-mono">
            Get In Touch
          </span>
          <h1 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-primary)] tracking-tight">
            Consult With Our Turnkey Engineers
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-sans">
            Whether you require a comprehensive BOQ estimation, bespoke architectural millwork, or full-lifecycle corporate contracting in Mumbai or Pune, our leadership team is ready to assist.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4 p-5 bg-[var(--bg-surface)] border border-[var(--border-primary)] transition-colors hover:border-[var(--accent-gold)]">
              <Phone className="h-5 w-5 text-[var(--accent-gold)] shrink-0 mt-0.5" strokeWidth={1.25} />
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-secondary)]">Direct Telephone</span>
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="block mt-1 font-medium text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors"
                >
                  {company.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-[var(--bg-surface)] border border-[var(--border-primary)] transition-colors hover:border-[var(--accent-gold)]">
              <Mail className="h-5 w-5 text-[var(--accent-gold)] shrink-0 mt-0.5" strokeWidth={1.25} />
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-secondary)]">Direct Email</span>
                <a
                  href={`mailto:${company.email}`}
                  className="block mt-1 font-medium text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors"
                >
                  {company.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-[var(--bg-surface)] border border-[var(--border-primary)] transition-colors hover:border-[var(--accent-gold)]">
              <MapPin className="h-5 w-5 text-[var(--accent-gold)] shrink-0 mt-0.5" strokeWidth={1.25} />
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-secondary)]">Regional Headquarters</span>
                <p className="mt-1 font-medium text-[var(--text-primary)]">
                  Mumbai & Pune, Maharashtra, India
                </p>
                <p className="mt-0.5 text-xs text-[var(--text-secondary)] font-sans">
                  In-House Millwork & Fabrication Facility: Mumbai
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Assurance Badges */}
        <div className="mt-12 pt-8 border-t border-[var(--border-primary)] grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
            <Clock className="h-4 w-4 text-[var(--accent-gold)]" strokeWidth={1.25} />
            <span>24h Response SLA</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
            <ShieldCheck className="h-4 w-4 text-[var(--accent-gold)]" strokeWidth={1.25} />
            <span>Non-Disclosure Protected</span>
          </div>
        </div>
      </div>

      {/* Right: Contact / Inquiry Form */}
      <div className="lg:col-span-7 bg-[var(--bg-surface)] border border-[var(--border-primary)] p-8 sm:p-10 shadow-sm transition-colors">
        {state?.success ? (
          <div className="py-12 px-4 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] mb-4">
              <CheckCircle2 className="h-8 w-8" strokeWidth={1.25} />
            </div>
            <h3 className="font-heading text-2xl text-[var(--text-primary)]">
              Inquiry Dispatched Successfully
            </h3>
            <p className="mt-3 text-sm text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed">
              {state.message}
            </p>
          </div>
        ) : (
          <form action={formAction} className="space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-gold)]">
                Project Inquiry Form
              </span>
              <h2 className="mt-1 font-heading text-2xl text-[var(--text-primary)]">
                Submit Specifications & Requirements
              </h2>
            </div>

            {state?.message && !state.success && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs leading-relaxed">
                {state.message}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-2"
                >
                  Full Legal Name *
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  placeholder="e.g. Rahul Mehta"
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] px-4 py-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-gold)] transition-colors"
                />
                {state?.errors?.fullName && (
                  <p className="mt-1 text-xs text-red-500">{state.errors.fullName}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-2"
                >
                  Corporate / Personal Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] px-4 py-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-gold)] transition-colors"
                />
                {state?.errors?.email && (
                  <p className="mt-1 text-xs text-red-500">{state.errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-2"
                >
                  Phone / Mobile Number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91 98200 00000"
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] px-4 py-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-gold)] transition-colors"
                />
                {state?.errors?.phone && (
                  <p className="mt-1 text-xs text-red-500">{state.errors.phone}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="project"
                  className="block text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-2"
                >
                  Project / Space Reference
                </label>
                <input
                  id="project"
                  name="project"
                  type="text"
                  defaultValue={projectParam}
                  placeholder="e.g. Modern Office Reception Lounge"
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] px-4 py-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-gold)] transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-2"
              >
                Project Scope & Details *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Share your carpet area, timeline, architectural drawings status, or specific joinery requirements..."
                className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] px-4 py-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-gold)] transition-colors resize-none"
              />
              {state?.errors?.message && (
                <p className="mt-1 text-xs text-red-500">{state.errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full inline-flex items-center justify-center gap-2 bg-[var(--accent-gold)] text-neutral-950 font-semibold uppercase tracking-[0.18em] text-xs py-4 px-6 transition-all duration-300 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black disabled:opacity-50 shadow-sm"
            >
              {isPending ? "Transmitting Inquiry..." : "Submit Project Inquiry"}
              <Send className="h-4 w-4" strokeWidth={1.25} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
