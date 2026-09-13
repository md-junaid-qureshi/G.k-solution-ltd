"use client";

import { useState, useTransition } from "react";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  UploadCloud,
  Send,
  Building,
  GraduationCap,
  Sparkles,
  Phone,
  Mail,
} from "lucide-react";
import { submitApplication, type ApplicationResponse } from "@/app/actions/apply";
import { company } from "@/lib/data";

interface JobRole {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  summary: string;
  requirements: string[];
}

const openRoles: JobRole[] = [
  {
    id: "senior-architect",
    title: "Senior Interior Architect",
    department: "Architecture & Design",
    location: "Mumbai (On-site / Studio)",
    type: "Full-Time",
    experience: "5–8 Years",
    summary:
      "Lead design development, spatial planning, and high-spec technical detailing for landmark corporate headquarters and ultra-luxury penthouses.",
    requirements: [
      "B.Arch / Diploma in Interior Architecture with proven luxury portfolio.",
      "Expertise in AutoCAD, SketchUp, and technical construction documentation.",
      "Track record of client presentations and vendor detailing.",
    ],
  },
  {
    id: "3d-visualizer",
    title: "3D Visualizer & CAD Specialist",
    department: "Visualization & Drafting",
    location: "Mumbai / Pune (Studio)",
    type: "Full-Time",
    experience: "3–5 Years",
    summary:
      "Transform architectural schematics into hyper-photorealistic interior renderings, lighting studies, and precision millwork shop drawings.",
    requirements: [
      "High proficiency in 3ds Max, Corona/V-Ray, Photoshop, and AutoCAD.",
      "Acute sensibility for material textures, natural illumination, and luxury styling.",
      "Ability to interpret architectural blueprints and MEP coordinates rapidly.",
    ],
  },
  {
    id: "site-engineer",
    title: "Site Execution Engineer (Civil & MEP)",
    department: "Site Operations & Contracting",
    location: "Mumbai (On-site)",
    type: "Full-Time",
    experience: "4–7 Years",
    summary:
      "Supervise daily site contracting, MEP integrations, false ceiling frameworks, and flawless quality compliance across active fit-out sites.",
    requirements: [
      "B.E. Civil / Diploma in Civil Engineering with turnkey interior experience.",
      "Hands-on mastery of screeding, marble dry-lay, drywall systems, and MEP routing.",
      "Stringent adherence to site safety, milestone timelines, and material verification.",
    ],
  },
  {
    id: "project-manager",
    title: "Turnkey Fit-Out Project Manager",
    department: "Project Management",
    location: "Mumbai (Site & Studio)",
    type: "Full-Time",
    experience: "7+ Years",
    summary:
      "Full lifecycle ownership of commercial interior contracts: BOQ tracking, vendor orchestration, client liaison, and handover governance.",
    requirements: [
      "Extensive background managing commercial contracts upwards of 20,000 sq. ft.",
      "Comprehensive mastery of project scheduling, procurement, and cost-variance control.",
      "Exceptional leadership and negotiation acumen.",
    ],
  },
];

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<string>("Senior Interior Architect");
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<ApplicationResponse | null>(null);

  const handleRoleSelect = (roleTitle: string) => {
    setSelectedRole(roleTitle);
    const formElement = document.getElementById("apply-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const response = await submitApplication(null, formData);
      setResult(response);
      if (response.success) {
        (e.target as HTMLFormElement).reset();
      }
    });
  };

  return (
    <div className="flex flex-col bg-[var(--bg-primary)] min-h-screen transition-colors duration-300">
      {/* ── EDITORIAL HEADER (Cinematic Dark Obsidian) ────────── */}
      <section className="relative border-b border-neutral-800 bg-[#0B0B0C] text-[#F5F5F0] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#DFB163] uppercase">
              <Briefcase className="h-3.5 w-3.5" strokeWidth={1.25} />
              Careers at GK Space Solutions
            </span>
            <h1 className="mt-4 font-heading text-3xl sm:text-5xl lg:text-6xl text-[#F5F5F0] tracking-tight">
              Build Exceptional Spaces With Us
            </h1>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
              We are a team of meticulous engineers, interior architects, and master millwork craftsmen dedicated to structural excellence and aesthetic refinement. Explore our career opportunities across Mumbai and Pune.
            </p>
          </div>

          {/* Value Highlights */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-neutral-800">
            <div className="flex flex-col">
              <span className="text-xs font-mono uppercase tracking-wider text-[#DFB163]">
                Excellence Driven
              </span>
              <p className="mt-1 text-sm text-[#F5F5F0] font-medium">
                High-Stakes Architecture
              </p>
              <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
                Work on signature corporate HQs and luxury residences without compromises.
              </p>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-mono uppercase tracking-wider text-[#DFB163]">
                In-House Infrastructure
              </span>
              <p className="mt-1 text-sm text-[#F5F5F0] font-medium">
                50K+ Sq. Ft. Facility
              </p>
              <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
                Direct exposure to bespoke German millwork, joinery machinery, and prototypes.
              </p>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-mono uppercase tracking-wider text-[#DFB163]">
                Career Longevity
              </span>
              <p className="mt-1 text-sm text-[#F5F5F0] font-medium">
                25-Year Industry Standing
              </p>
              <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
                Clear leadership ladders, competitive compensation, and transparent recognition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OPEN ROLES DIRECTORY ───────────────────────────────── */}
      <section className="py-20 bg-[var(--bg-surface)] border-b border-[var(--border-primary)] transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase">
              Current Openings
            </span>
            <h2 className="mt-2 font-heading text-3xl sm:text-4xl text-[var(--text-primary)] tracking-tight">
              Opportunities Across Disciplines
            </h2>
            <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed font-sans">
              Select a position below to view responsibilities and begin your application.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {openRoles.map((role) => (
              <div
                key={role.id}
                className="group p-6 sm:p-8 bg-[var(--bg-primary)] border border-[var(--border-primary)] transition-all duration-300 hover:border-[var(--accent-gold)] hover:shadow-lg"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="max-w-3xl">
                    {/* Role Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-[10px] font-mono uppercase px-2.5 py-1 bg-[#141415] dark:bg-[#0B0B0C] text-[#F5F5F0] border border-neutral-800">
                        {role.department}
                      </span>
                      <span className="text-[10px] font-mono uppercase px-2.5 py-1 bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-primary)] flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-[var(--accent-gold)]" strokeWidth={1.25} />
                        {role.location}
                      </span>
                      <span className="text-[10px] font-mono uppercase px-2.5 py-1 bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-primary)] flex items-center gap-1">
                        <Clock className="h-3 w-3 text-[var(--accent-gold)]" strokeWidth={1.25} />
                        {role.type} ({role.experience})
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl text-[var(--text-primary)] group-hover:text-[var(--accent-gold)] transition-colors">
                      {role.title}
                    </h3>

                    <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed font-sans">
                      {role.summary}
                    </p>

                    {/* Requirements List */}
                    <div className="mt-4 pt-4 border-t border-[var(--border-primary)]">
                      <p className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-primary)] font-semibold mb-2">
                        Key Qualifications:
                      </p>
                      <ul className="space-y-1.5">
                        {role.requirements.map((req) => (
                          <li
                            key={req}
                            className="flex items-center gap-2 text-xs text-[var(--text-secondary)]"
                          >
                            <CheckCircle2
                              className="h-3.5 w-3.5 text-[var(--accent-gold)] flex-shrink-0"
                              strokeWidth={1.25}
                            />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Apply Trigger */}
                  <div className="lg:self-center flex-shrink-0">
                    <button
                      type="button"
                      onClick={() => handleRoleSelect(role.title)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#DFB163] px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#0B0B0C] transition-all duration-300 hover:bg-white"
                    >
                      Apply For This Role
                      <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.25} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MINIMALIST APPLICATION FORM ────────────────────────── */}
      <section id="apply-form" className="py-24 bg-[var(--bg-primary)] transition-colors duration-300">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase">
              Direct Application Portal
            </span>
            <h2 className="mt-2 font-heading text-3xl sm:text-4xl text-[var(--text-primary)] tracking-tight">
              Submit Your Candidacy
            </h2>
            <p className="mt-3 text-sm text-[var(--text-secondary)] font-sans leading-relaxed">
              Complete the credentials below. Your dossier will be reviewed directly by our principal architect and site operations heads.
            </p>
          </div>

          {/* Submission Feedback Toast / Banner */}
          {result && (
            <div
              className={`mb-8 p-6 border transition-all ${
                result.success
                  ? "border-[var(--accent-gold)] bg-[var(--bg-surface)] text-[var(--text-primary)]"
                  : "border-red-400 bg-red-50 text-red-900 dark:bg-red-950/40 dark:text-red-300"
              }`}
            >
              <div className="flex items-start gap-3">
                {result.success ? (
                  <CheckCircle2 className="h-5 w-5 text-[var(--accent-gold)] flex-shrink-0 mt-0.5" strokeWidth={1.25} />
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" strokeWidth={1.25} />
                )}
                <div>
                  <h4 className="font-heading text-base font-semibold">
                    {result.success ? "Application Successfully Transmitted" : "Submission Required Attention"}
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm leading-relaxed">
                    {result.message}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-12 bg-[var(--bg-surface)] border border-[var(--border-primary)] shadow-sm space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] font-mono mb-2"
                >
                  Full Legal Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]/60 focus:border-[var(--accent-gold)] focus:outline-none transition-colors"
                />
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] font-mono mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="name@domain.com"
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]/60 focus:border-[var(--accent-gold)] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Contact Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] font-mono mb-2"
                >
                  Contact Telephone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="+91 98204 01179"
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]/60 focus:border-[var(--accent-gold)] focus:outline-none transition-colors"
                />
              </div>

              {/* Position Applied */}
              <div>
                <label
                  htmlFor="position"
                  className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] font-mono mb-2"
                >
                  Position Applied *
                </label>
                <select
                  id="position"
                  name="position"
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] px-4 py-3 text-sm text-[var(--text-primary)] focus:border-[var(--accent-gold)] focus:outline-none transition-colors"
                >
                  {openRoles.map((r) => (
                    <option key={r.id} value={r.title}>
                      {r.title} ({r.department})
                    </option>
                  ))}
                  <option value="General Architectural Inquiry">
                    General Architectural Inquiry
                  </option>
                  <option value="Site Supervision Trainee">
                    Site Supervision Trainee
                  </option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Experience Level */}
              <div>
                <label
                  htmlFor="experience"
                  className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] font-mono mb-2"
                >
                  Experience Level *
                </label>
                <select
                  id="experience"
                  name="experience"
                  required
                  defaultValue="3–5 Years"
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] px-4 py-3 text-sm text-[var(--text-primary)] focus:border-[var(--accent-gold)] focus:outline-none transition-colors"
                >
                  <option value="1–3 Years">1–3 Years (Junior Level)</option>
                  <option value="3–5 Years">3–5 Years (Mid Level)</option>
                  <option value="5–8 Years">5–8 Years (Senior Level)</option>
                  <option value="8+ Years">8+ Years (Principal / Lead)</option>
                  <option value="Fresh Graduate">Graduate / Intern</option>
                </select>
              </div>

              {/* Portfolio Link */}
              <div>
                <label
                  htmlFor="portfolioUrl"
                  className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] font-mono mb-2"
                >
                  Portfolio / LinkedIn URL
                </label>
                <input
                  type="url"
                  id="portfolioUrl"
                  name="portfolioUrl"
                  placeholder="https://drive.google.com/... or linkedin.com/in/..."
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]/60 focus:border-[var(--accent-gold)] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Message / Cover Note */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] font-mono mb-2"
              >
                Cover Note / Key Strengths
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Detail your experience with turnkey interior contracting, software skills, or landmark projects executed..."
                className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]/60 focus:border-[var(--accent-gold)] focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit Action */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[var(--border-primary)]">
              <p className="text-xs text-[var(--text-secondary)] font-mono">
                Direct recruitment desk: {company.email}
              </p>

              <button
                type="submit"
                disabled={isPending}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#DFB163] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#0B0B0C] transition-all duration-300 hover:bg-white disabled:opacity-50"
              >
                {isPending ? (
                  <span>Submitting Dossier...</span>
                ) : (
                  <>
                    <span>Submit Application</span>
                    <Send className="h-3.5 w-3.5" strokeWidth={1.25} />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ── TALENT DESK CONTACT ────────────────────────────────── */}
      <section className="py-12 bg-[var(--bg-surface)] border-t border-[var(--border-primary)] transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-[var(--text-secondary)]">
            Prefer direct communication?
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--text-primary)]">
            <a
              href="mailto:gkspacesolutionllp@gmail.com"
              className="inline-flex items-center gap-2 hover:text-[var(--accent-gold)] transition-colors"
            >
              <Mail className="h-4 w-4 text-[var(--accent-gold)]" strokeWidth={1.25} />
              gkspacesolutionllp@gmail.com
            </a>
            <span className="text-[var(--border-primary)]">|</span>
            <a
              href="tel:+919820401179"
              className="inline-flex items-center gap-2 hover:text-[var(--accent-gold)] transition-colors"
            >
              <Phone className="h-4 w-4 text-[var(--accent-gold)]" strokeWidth={1.25} />
              +91 98204 01179
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
