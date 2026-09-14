"use client";

import { useState, useRef } from "react";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  UploadCloud,
  FileText,
  X,
  Send,
  Phone,
  Mail,
  Layers,
  Sparkles,
  HardHat,
  Hammer,
  Compass,
  MessageSquare,
} from "lucide-react";
import { company, openRoles, type JobRole } from "@/lib/data";

const MAX_FILE_SIZE = 4 * 1024 * 1024; // 4MB

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<string>("Senior Interior Architect");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [experience, setExperience] = useState("3–5 Years");
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleRoleSelect = (roleTitle: string) => {
    setSelectedRole(roleTitle);
    const formElement = document.getElementById("apply-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    const selected = e.target.files?.[0];
    if (!selected) {
      setFile(null);
      return;
    }

    if (selected.size > MAX_FILE_SIZE) {
      setFileError("File exceeds the 4MB limit. Please upload a compressed document or provide a portfolio link.");
      setFile(null);
      if (e.target) e.target.value = "";
      return;
    }

    setFile(selected);
  };

  const removeFile = () => {
    setFile(null);
    setFileError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const readFileAsBase64 = (f: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(f);
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult(null);

    if (phone.length < 10) {
      setPhoneError("Please enter a valid 10-digit mobile number.");
      const phoneInput = document.getElementById("phone");
      if (phoneInput) phoneInput.focus();
      return;
    }

    setIsSubmitting(true);

    try {
      let resumePayload = undefined;
      if (file) {
        const base64Content = await readFileAsBase64(file);
        resumePayload = {
          filename: file.name,
          content: base64Content,
        };
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "career",
          name: fullName,
          email,
          phone,
          role: selectedRole,
          experience,
          portfolioUrl,
          message,
          resume: resumePayload,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error?.message || data.error || "Failed to submit application.");
      }

      setResult({
        success: true,
        message: `Thank you, ${fullName}. Your candidacy for the ${selectedRole} position has been transmitted directly to our executive hiring team.`,
      });

      // Reset form
      setFullName("");
      setEmail("");
      setPhone("");
      setPortfolioUrl("");
      setMessage("");
      removeFile();
    } catch (err: any) {
      console.error("[APPLICATION SUBMIT ERROR]:", err);
      setResult({
        success: false,
        message: err.message || "An unexpected error occurred while transmitting your application. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredRoles =
    activeCategory === "all"
      ? openRoles
      : openRoles.filter((role) => role.category === activeCategory);

  const isTradeOrSiteRole = [
    "Site Supervisor / Fit-out Foreman",
    "Master Joiner / Carpenter Lead (Woodwork & Millwork)",
    "Finishing Specialist (PU Polish, Acoustic & Paint Lead)",
    "MEP & Electrical Site Technician",
    "Site Execution Engineer (Fit-Out & MEP)",
    "Skilled Craftsman / Trade Application",
    "Site Supervision Trainee",
  ].includes(selectedRole);

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
              We are a team of meticulous engineers, interior architects, and master millwork craftsmen dedicated to structural excellence and aesthetic refinement. Explore our career opportunities across India.
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
                Bespoke Architectural Execution
              </p>
              <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
                Clear leadership ladders, competitive compensation, and transparent recognition across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OPEN ROLES DIRECTORY ───────────────────────────────── */}
      <section className="py-20 bg-[var(--bg-surface)] border-b border-[var(--border-primary)] transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase font-mono">
              Current Openings
            </span>
            <h2 className="mt-2 font-heading text-3xl sm:text-4xl text-[var(--text-primary)] tracking-tight">
              Opportunities Across Disciplines
            </h2>
            <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed font-sans">
              Explore open positions spanning interior architecture, turnkey site management, and specialized craftsmanship trades across India.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-[var(--border-primary)] pb-4">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === "all"
                  ? "bg-[#DFB163] text-[#0B0B0C] font-semibold shadow-sm"
                  : "bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-primary)]"
              }`}
            >
              All Positions ({openRoles.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("design")}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === "design"
                  ? "bg-[#DFB163] text-[#0B0B0C] font-semibold shadow-sm"
                  : "bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-primary)]"
              }`}
            >
              Design &amp; Architecture ({openRoles.filter((r) => r.category === "design").length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("execution")}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === "execution"
                  ? "bg-[#DFB163] text-[#0B0B0C] font-semibold shadow-sm"
                  : "bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-primary)]"
              }`}
            >
              Site Execution &amp; Supervision ({openRoles.filter((r) => r.category === "execution").length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("trades")}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === "trades"
                  ? "bg-[#DFB163] text-[#0B0B0C] font-semibold shadow-sm"
                  : "bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-primary)]"
              }`}
            >
              Master Trades &amp; Craftsmen ({openRoles.filter((r) => r.category === "trades").length})
            </button>
          </div>

          <div className="mt-8 space-y-6">
            {filteredRoles.map((role) => (
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

                    {/* Scope of Execution Highlight */}
                    <div className="mt-4 pt-4 border-t border-[var(--border-primary)]">
                      <p className="text-[11px] font-mono uppercase tracking-wider text-[var(--accent-gold)] font-semibold mb-2.5 flex items-center gap-1.5">
                        <Layers className="h-3.5 w-3.5 text-[var(--accent-gold)]" strokeWidth={1.5} />
                        Scope of Execution &amp; Key Focus:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {role.scope.map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center text-xs font-sans px-3 py-1.5 bg-[var(--bg-surface)] border border-[var(--border-primary)] text-[var(--text-primary)] font-medium"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] mr-2 shrink-0" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Requirements List */}
                    <div className="mt-4 pt-3 border-t border-[var(--border-primary)]/60">
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
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#DFB163] px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#0B0B0C] transition-all duration-300 hover:bg-white cursor-pointer"
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
            <span className="text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase font-mono">
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
                    {result.success ? "Application Successfully Transmitted" : "Submission Requires Attention"}
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
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                <div className="flex items-center bg-[var(--bg-primary)] border border-[var(--border-primary)] focus-within:border-[var(--accent-gold)] transition-colors">
                  <span className="flex items-center px-3 py-3 border-r border-[var(--border-primary)] text-xs font-mono text-[var(--accent-gold)] select-none bg-[var(--bg-surface)] font-medium">
                    +91
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    inputMode="numeric"
                    maxLength={10}
                    required
                    value={phone}
                    onChange={handlePhoneChange}
                    onBlur={handlePhoneBlur}
                    placeholder="98204 01179"
                    className="w-full bg-transparent px-3 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]/60 focus:outline-none"
                  />
                </div>
                {phoneError && (
                  <p className="mt-1.5 text-xs text-red-500 font-sans">
                    {phoneError}
                  </p>
                )}
              </div>

              {/* Position Applied */}
              <div>
                <label
                  htmlFor="position"
                  className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] font-mono mb-2"
                >
                  Role / Designation Applied For *
                </label>
                <select
                  id="position"
                  name="position"
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] px-4 py-3 text-sm text-[var(--text-primary)] focus:border-[var(--accent-gold)] focus:outline-none transition-colors cursor-pointer"
                >
                  <optgroup label="Architecture & Design">
                    <option value="Senior Interior Architect">Senior Interior Architect</option>
                    <option value="3D Visualizer & CAD Specialist">3D Visualizer & CAD Specialist</option>
                    <option value="Turnkey Fit-Out Project Manager">Turnkey Fit-Out Project Manager</option>
                  </optgroup>
                  <optgroup label="On-Site Execution & Supervision">
                    <option value="Site Execution Engineer (Fit-Out & MEP)">Site Execution Engineer (Fit-Out & MEP)</option>
                    <option value="Site Supervisor / Fit-out Foreman">Site Supervisor / Fit-out Foreman</option>
                  </optgroup>
                  <optgroup label="Skilled Execution Trades & Craftsmen">
                    <option value="Master Joiner / Carpenter Lead (Woodwork & Millwork)">Master Joiner / Carpenter Lead (Woodwork & Millwork)</option>
                    <option value="Finishing Specialist (PU Polish, Acoustic & Paint Lead)">Finishing Specialist (PU Polish, Acoustic & Paint Lead)</option>
                    <option value="MEP & Electrical Site Technician">MEP & Electrical Site Technician</option>
                  </optgroup>
                  <optgroup label="General Applications">
                    <option value="General Architectural Inquiry">General Architectural Inquiry</option>
                    <option value="Skilled Craftsman / Trade Application">Skilled Craftsman / Trade Application</option>
                    <option value="Site Supervision Trainee">Site Supervision Trainee</option>
                  </optgroup>
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
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] px-4 py-3 text-sm text-[var(--text-primary)] focus:border-[var(--accent-gold)] focus:outline-none transition-colors cursor-pointer"
                >
                  <option value="1–3 Years">1–3 Years (Junior Level)</option>
                  <option value="3–5 Years">3–5 Years (Mid Level)</option>
                  <option value="5–8 Years">5–8 Years (Senior Level)</option>
                  <option value="8+ Years">8+ Years (Principal / Lead)</option>
                  <option value="Fresh Graduate">Graduate / Apprentice</option>
                </select>
              </div>

              {/* Portfolio Link */}
              <div>
                <label
                  htmlFor="portfolioUrl"
                  className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] font-mono mb-2"
                >
                  Portfolio / LinkedIn URL (Optional)
                </label>
                <input
                  type="url"
                  id="portfolioUrl"
                  name="portfolioUrl"
                  value={portfolioUrl}
                  onChange={(e) => setPortfolioUrl(e.target.value)}
                  placeholder="https://drive.google.com/... or linkedin.com/in/..."
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]/60 focus:border-[var(--accent-gold)] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Note for Trade & Execution Applicants */}
            {isTradeOrSiteRole && (
              <div className="p-4 sm:p-5 bg-[var(--bg-primary)] border border-[var(--accent-gold)]/40 flex items-start gap-3.5">
                <Sparkles className="h-5 w-5 text-[var(--accent-gold)] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-xs font-mono uppercase tracking-wider text-[var(--accent-gold)] font-semibold">
                    Craftsman &amp; Site Execution Guidance
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-sans">
                    A formal resume PDF is <strong>optional</strong>. If you do not have a digital CV document, you may leave the file upload blank and describe your on-site trade skills, contractor background, or past projects in the <em>Work Summary</em> box below.
                  </p>
                </div>
              </div>
            )}

            {/* Resume / Portfolio Attachment */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] font-mono">
                  Resume / Dossier (Optional — PDF, DOC, DOCX — Max 4MB)
                </label>
                <span className="text-[11px] font-mono text-[var(--accent-gold)]">
                  Optional for Trade Craftsmen
                </span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] mb-2.5 font-sans">
                Craftsmen & trade leads without a formal CV PDF may leave this empty and detail past work in the summary box below.
              </p>

              <input
                ref={fileInputRef}
                type="file"
                id="resumeUpload"
                name="resumeUpload"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />

              {!file ? (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="group relative flex flex-col items-center justify-center p-6 border-2 border-dashed border-[var(--border-primary)] hover:border-[var(--accent-gold)] bg-[var(--bg-primary)] transition-all cursor-pointer text-center"
                >
                  <div className="p-3 rounded-full bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] mb-3 group-hover:scale-110 transition-transform">
                    <UploadCloud className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-[var(--text-primary)]">
                    Click to select resume document
                  </p>
                  <p className="text-[11px] text-[var(--text-secondary)] mt-1 font-mono">
                    Supported formats: .pdf, .doc, .docx (Max 4MB)
                  </p>
                </div>
              ) : (
                <div className="flex items-center justify-between p-4 bg-[var(--bg-primary)] border border-[var(--accent-gold)]/60">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded bg-[var(--accent-gold)]/15 text-[var(--accent-gold)] flex-shrink-0">
                      <FileText className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs sm:text-sm font-medium text-[var(--text-primary)] truncate">
                        {file.name}
                      </p>
                      <p className="text-[10px] font-mono text-[var(--text-secondary)]">
                        {(file.size / (1024 * 1024)).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={removeFile}
                    className="p-1.5 text-neutral-400 hover:text-red-500 transition-colors cursor-pointer"
                    title="Remove file"
                  >
                    <X className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                </div>
              )}

              {fileError && (
                <div className="mt-2 flex items-center gap-1.5 text-xs text-red-500 font-sans">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" strokeWidth={1.5} />
                  <span>{fileError}</span>
                </div>
              )}
            </div>

            {/* Message / Cover Note */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] font-mono mb-2"
              >
                Work Summary / Trade Experience / Cover Note
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="For site supervisors & skilled trades: detail your hands-on execution experience, past fit-out projects, joinery, PU polish, electrical, or foreman track record. For design roles: outline software skills, portfolio overview, and landmark projects executed..."
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
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#DFB163] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#0B0B0C] transition-all duration-300 hover:bg-white disabled:opacity-50 cursor-pointer shadow-sm"
              >
                {isSubmitting ? (
                  <span>Submitting Application...</span>
                ) : (
                  <>
                    <span>Submit Application</span>
                    <Send className="h-3.5 w-3.5" strokeWidth={1.25} />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Direct Assistance for Trade Applicants */}
          <div className="mt-8 p-6 bg-[var(--bg-surface)] border border-[var(--border-primary)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)] font-sans">
              <Phone className="h-5 w-5 text-[var(--accent-gold)] shrink-0" />
              <span>
                Applying as a skilled site foreman, carpenter, painter, or MEP technician and prefer direct phone/WhatsApp communication?
              </span>
            </div>
            <a
              href="https://wa.me/919820401179?text=Hi%2C%20I%20am%20applying%20for%20an%20on-site%20execution%20%2F%20craftsman%20position%20at%20GK%20Space%20Solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#DFB163] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0B0B0C] transition-all hover:bg-white shrink-0"
            >
              <span>WhatsApp Recruitment</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
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
