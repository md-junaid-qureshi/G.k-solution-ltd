import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Compass,
  Hammer,
  Clock,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Phone,
  Building2,
  Users,
  Award,
} from "lucide-react";
import { company, companyStats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us | Over 25+ Years of Architectural Excellence",
  description:
    "Learn about GK Space Solutions LLP, a premier interior contracting and turnkey execution firm headquartered in Mumbai with over 25 years of master craftsmanship across Maharashtra.",
};

interface TeamMember {
  name: string;
  role: string;
  experience: string;
  focus: string;
  image: string;
}

const leadershipTeam: TeamMember[] = [
  {
    name: "Ganesh Kumar Sharma",
    role: "Founder & Managing Director",
    experience: "25+ Years Experience",
    focus:
      "Turnkey interior contracting, civil engineering governance, and strategic enterprise client relations across commercial and residential landmarks.",
    image: "/projects/team1.jpeg",
  },
  {
    name: "Aditya Kumar Sharma",
    role: "Partner & Head of Architectural Planning",
    experience: "12+ Years Experience",
    focus:
      "Design development, spatial ergonomics, CAD shop drawing detailing, and precision material curation for luxury penthouses and corporate suites.",
    image: "/projects/person1.jpg",
  },
  {
    name: "Pintu Kumar",
    role: "Head of Site Operations & Quality Control",
    experience: "15+ Years Experience",
    focus:
      "Full lifecycle site execution, MEP infrastructure, false ceiling grids, quality checklists, and zero-defect handover supervision.",
    image: "/projects/person2.jpg",
  },
];

const corePhilosophy = [
  {
    title: "Function",
    desc: "Spaces must perform flawlessly. We engineer layouts for natural circulation, acoustic clarity, and intuitive ergonomics tailored to modern demands.",
  },
  {
    title: "Aesthetics",
    desc: "Restraint over transient trends. We balance architectural proportions in warm brass, natural marble, acoustic glass, and hand-selected veneers.",
  },
  {
    title: "Craftsmanship",
    desc: "Millimeter-tolerance joinery fabricated in our modern in-house millwork facility with German machinery and 25 years of artisan expertise.",
  },
  {
    title: "Experience",
    desc: "The emotional resonance of a space. We build environments that cultivate institutional prestige for corporations and tranquility for homeowners.",
  },
];

const fiveStepProcess = [
  {
    step: "01",
    name: "Discover",
    desc: "Rigorous site assessment, structural feasibility, MEP baseline audits, and comprehensive client brief alignment.",
  },
  {
    step: "02",
    name: "Concept",
    desc: "Spatial layout zoning, moodboard articulation, circulation studies, and preliminary material validations.",
  },
  {
    step: "03",
    name: "Design",
    desc: "Detailed shop drawings, technical 3D visualization, MEP schematics, and zero-variance BOQ finalization.",
  },
  {
    step: "04",
    name: "Execute",
    desc: "Civil site works, in-house millwork fabrication, acoustic partitions, and precision electrical runs.",
  },
  {
    step: "05",
    name: "Deliver",
    desc: "Snag-free quality audits, MEP commissioning, structured client walkthrough, and warranty handover.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-[var(--bg-primary)] min-h-screen transition-colors duration-300">
      {/* ── 1. EDITORIAL HEADER (Cinematic Dark Obsidian) ────── */}
      <section className="relative border-b border-neutral-800 bg-[#0B0B0C] text-[#F5F5F0] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#DFB163] uppercase">
              <Clock className="h-3.5 w-3.5" strokeWidth={1.25} />
              Heritage & Industry Standing — Est. 2000
            </span>
            <h1 className="mt-4 font-heading text-3xl sm:text-5xl lg:text-6xl text-[#F5F5F0] tracking-tight">
              Over 25+ Years of Architectural & Interior Excellence
            </h1>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
              GK Space Solutions LLP is an established interior contracting and turnkey execution firm headquartered in Mumbai, delivering premier corporate workspaces, hospitality lounges, and luxury residential environments across Mumbai, Pune, and Maharashtra.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. COMPANY OVERVIEW & STATS STRIP ─────────────────── */}
      <section className="py-20 bg-[var(--bg-surface)] border-b border-[var(--border-primary)] transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-16 border-b border-[var(--border-primary)]">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase">
                The Firm
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl text-[var(--text-primary)] tracking-tight">
                Bridging architectural ambition with buildable reality.
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-sans">
                Founded by master contractor Ganesh Kumar Sharma, GK Space Solutions LLP has grown from an artisanal joinery workshop into a full-scale interior contracting powerhouse. Over the past quarter century, we have served as the trusted execution arm for leading architects, developers, and corporate enterprises.
              </p>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-sans">
                Our distinct advantage lies in our 50,000+ sq. ft. dedicated manufacturing facility in Mumbai. By producing our own bespoke millwork, modular kitchens, and custom acoustic paneling in-house, we eliminate contractor delays and maintain millimeter-level tolerances on every installation.
              </p>
            </div>

            <div className="lg:col-span-6 relative aspect-[16/11] overflow-hidden border border-[var(--border-primary)] shadow-xl bg-[#0B0B0C]">
              <Image
                src="/projects/meetingroom.jpeg"
                alt="GK Space Solutions Corporate Boardroom Execution"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#0B0B0C]/90 backdrop-blur-sm border border-neutral-700 text-xs text-[#F5F5F0] font-mono">
                Corporate Conference Suite &mdash; Pune Turnkey Fit-Out
              </div>
            </div>
          </div>

          {/* Metric Cards */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyStats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 bg-[var(--bg-primary)] border border-[var(--border-primary)] transition-all hover:border-[var(--accent-gold)] hover:shadow-md"
              >
                <span className="font-heading text-4xl sm:text-5xl font-light text-[var(--text-primary)]">
                  {stat.value}
                </span>
                <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent-gold)] font-mono">
                  {stat.label}
                </span>
                <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                  {stat.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. CORE PHILOSOPHY ────────────────────────────────── */}
      <section className="py-24 bg-[var(--bg-primary)] border-b border-[var(--border-primary)] transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase">
              Design & Execution Tenets
            </span>
            <h2 className="mt-2 font-heading text-3xl sm:text-4xl text-[var(--text-primary)] tracking-tight">
              Our Core Philosophy
            </h2>
            <p className="mt-3 text-sm text-[var(--text-secondary)] font-sans leading-relaxed">
              Every space contracted by GK Space Solutions LLP is shaped by four fundamental pillars that guide engineering decisions and material selections.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePhilosophy.map((item, idx) => (
              <div
                key={item.title}
                className="p-6 bg-[var(--bg-surface)] border border-[var(--border-primary)] transition-all duration-300 hover:border-[var(--accent-gold)]"
              >
                <span className="font-mono text-xs font-semibold text-[var(--accent-gold)]">
                  0{idx + 1}. PILLAR
                </span>
                <h3 className="mt-3 font-heading text-xl text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. THE 5-STEP OPERATIONAL PROCESS (Cinematic Dark) ─── */}
      <section className="py-24 bg-[#0B0B0C] text-[#F5F5F0] border-b border-neutral-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#DFB163] uppercase">
              Operational Governance
            </span>
            <h2 className="mt-2 font-heading text-3xl sm:text-4xl lg:text-5xl text-[#F5F5F0] tracking-tight">
              The 5-Step Turnkey Process
            </h2>
            <p className="mt-3 text-sm text-neutral-400 font-sans leading-relaxed">
              From structural audit to defect-free handover, our verified process guarantees predictable timelines, cost containment, and engineering rigor.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {fiveStepProcess.map((step) => (
              <div
                key={step.step}
                className="p-6 border border-neutral-800 bg-[#141415] flex flex-col justify-between"
              >
                <div>
                  <span className="font-heading text-3xl text-[#DFB163] font-light">
                    {step.step}
                  </span>
                  <h3 className="mt-3 font-mono text-sm font-semibold uppercase tracking-wider text-[#F5F5F0]">
                    {step.name}
                  </h3>
                  <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-neutral-800 text-[10px] text-[#DFB163] font-mono">
                  Stage Sign-off
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. LEADERSHIP TEAM GRID ───────────────────────────── */}
      <section className="py-24 bg-[var(--bg-surface)] transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase">
              <Users className="h-3.5 w-3.5" strokeWidth={1.25} />
              Key Leadership
            </span>
            <h2 className="mt-2 font-heading text-3xl sm:text-4xl text-[var(--text-primary)] tracking-tight">
              The Leadership Behind Every Landmark
            </h2>
            <p className="mt-3 text-sm text-[var(--text-secondary)] font-sans leading-relaxed">
              Meet the executive leaders steering turnkey operations, architectural detailing, and construction integrity at GK Space Solutions LLP.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam.map((leader) => (
              <div
                key={leader.name}
                className="group flex flex-col bg-[var(--bg-primary)] border border-[var(--border-primary)] overflow-hidden transition-all duration-300 hover:border-[var(--accent-gold)] hover:shadow-xl"
              >
                {/* Photo Frame */}
                <div className="relative aspect-[4/3] w-full bg-[#0B0B0C] overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/70 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 bg-[#0B0B0C]/90 backdrop-blur-sm text-[#DFB163] text-[10px] font-mono uppercase px-2 py-0.5 border border-neutral-700">
                    {leader.experience}
                  </div>
                </div>

                {/* Info Block */}
                <div className="p-6 flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-xl text-[var(--text-primary)] group-hover:text-[var(--accent-gold)] transition-colors">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-gold)] font-mono mt-1">
                      {leader.role}
                    </p>
                    <p className="mt-3 text-xs text-[var(--text-secondary)] leading-relaxed font-sans">
                      {leader.focus}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[var(--border-primary)] text-[11px] font-mono text-[var(--text-secondary)]">
                    GK Space Solutions LLP Leadership
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. BOTTOM CTA STRIP (Rich Obsidian Aesthetic) ────── */}
      <section className="py-20 bg-[#0B0B0C] text-[#F5F5F0] border-t border-neutral-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#DFB163] uppercase">
            Experience Our Work
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl text-[#F5F5F0] tracking-tight max-w-3xl">
            Explore the Architectural Presentation Deck
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 max-w-xl font-sans leading-relaxed">
            Review verified case studies, shop-floor capabilities, and detailed project specifications in our interactive corporate presentation.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 bg-[#DFB163] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#0B0B0C] hover:bg-white transition-colors"
            >
              Open Interactive Pitch Deck
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.25} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-neutral-700 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#F5F5F0] hover:border-[#DFB163] transition-colors"
            >
              Get In Touch
              <ArrowRight className="h-4 w-4" strokeWidth={1.25} />
            </Link>
          </div>

          <p className="mt-6 text-xs text-neutral-400 font-mono">
            Direct Line: +91 98204 01179 &bull; Email: {company.email}
          </p>
        </div>
      </section>
    </div>
  );
}
