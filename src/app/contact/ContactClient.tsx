"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, ShieldCheck, AlertCircle } from "lucide-react";
import { company } from "@/lib/data";

export default function ContactClient() {
  const searchParams = useSearchParams();
  const projectParam = searchParams.get("project") || "";

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [project, setProject] = useState(projectParam);
  const [message, setMessage] = useState("");

  const [phoneError, setPhoneError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    if (phone.length < 10) {
      setPhoneError("Please enter a valid 10-digit mobile number.");
      const input = document.getElementById("phone");
      if (input) input.focus();
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "inquiry",
          name: fullName,
          email,
          phone,
          projectType: project,
          message,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error?.message || data.error || "Failed to transmit inquiry.");
      }

      // Success
      setSuccessMessage("Thank you. Your architectural inquiry has been sent to our executive team.");
      setFullName("");
      setEmail("");
      setPhone("");
      setProject("");
      setMessage("");
    } catch (err: any) {
      console.error("[FORM SUBMIT ERROR]:", err);
      setErrorMessage(
        err.message || "An unexpected error occurred. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
        {successMessage ? (
          <div className="py-12 px-4 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent-gold)]/15 text-[var(--accent-gold)] mb-4">
              <CheckCircle2 className="h-8 w-8" strokeWidth={1.25} />
            </div>
            <h3 className="font-heading text-2xl text-[var(--text-primary)]">
              Inquiry Dispatched Successfully
            </h3>
            <p className="mt-3 text-sm text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed">
              {successMessage}
            </p>
            <button
              onClick={() => setSuccessMessage(null)}
              className="mt-6 inline-flex items-center gap-2 border border-[var(--border-primary)] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] transition-colors cursor-pointer"
            >
              Send Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-gold)]">
                Project Inquiry Form
              </span>
              <h2 className="mt-1 font-heading text-2xl text-[var(--text-primary)]">
                Submit Specifications & Requirements
              </h2>
            </div>

            {errorMessage && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs leading-relaxed flex items-start gap-2.5">
                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" strokeWidth={1.25} />
                <span>{errorMessage}</span>
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
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Rahul Mehta"
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] px-4 py-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-gold)] transition-colors"
                />
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] px-4 py-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-gold)] transition-colors"
                />
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
                <div className="flex items-center bg-[var(--bg-primary)] border border-[var(--border-primary)] focus-within:border-[var(--accent-gold)] transition-colors">
                  <span className="flex items-center px-3 py-3 border-r border-[var(--border-primary)] text-xs font-mono text-[var(--accent-gold)] select-none bg-[var(--bg-surface)] font-medium">
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
                    className="w-full bg-transparent px-3 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]/50 focus:outline-none"
                  />
                </div>
                {phoneError && (
                  <p className="mt-1.5 text-xs text-red-500 font-sans">
                    {phoneError}
                  </p>
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
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share your carpet area, timeline, architectural drawings status, or specific joinery requirements..."
                className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] px-4 py-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-gold)] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 bg-[var(--accent-gold)] text-neutral-950 font-semibold uppercase tracking-[0.18em] text-xs py-4 px-6 transition-all duration-300 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black disabled:opacity-50 shadow-sm cursor-pointer"
            >
              {isSubmitting ? "Sending Inquiry..." : "Submit Project Inquiry"}
              <Send className="h-4 w-4" strokeWidth={1.25} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
