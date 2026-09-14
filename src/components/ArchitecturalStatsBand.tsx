import { Sparkles, Building2, MapPin, ShieldCheck } from "lucide-react";

interface StatItem {
  value: string;
  label: string;
  description: string;
  icon: typeof Sparkles;
}

const stats: StatItem[] = [
  {
    value: "Turnkey",
    label: "Bespoke Architectural Execution",
    description: "Master interior fit-outs, bespoke joinery, and turnkey commercial space solutions executed across India.",
    icon: Sparkles,
  },
  {
    value: "100+",
    label: "Projects Executed",
    description: "Commercial headquarters, diplomatic salons, and luxury residences across India.",
    icon: Building2,
  },
  {
    value: "Pan-India",
    label: "Pan-India Presence",
    description: "Full turnkey interior fit-outs and dedicated joinery & millwork execution across India.",
    icon: MapPin,
  },
  {
    value: "100%",
    label: "Turnkey Delivery",
    description: "Single-source accountability from bare-shell interiors to defect-free handover.",
    icon: ShieldCheck,
  },
];

export default function ArchitecturalStatsBand() {
  return (
    <section
      aria-label="GK Space Solutions Architectural Credentials"
      className="relative border-y border-[var(--border-ui)] bg-[var(--bg-alt)] py-12 sm:py-16 transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-[var(--border-primary)]">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex flex-col justify-between ${
                  idx > 0 ? "lg:pl-8" : ""
                } ${idx < stats.length - 1 ? "lg:pr-8" : ""}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-[var(--text-primary)] tracking-tight">
                      {stat.value}
                    </span>
                    <div className="p-2 rounded-full border border-[var(--border-primary)] bg-[var(--bg-primary)] text-[var(--accent-gold)]">
                      <Icon className="h-4 w-4" strokeWidth={1.25} />
                    </div>
                  </div>

                  <h3 className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-gold)] font-mono">
                    {stat.label}
                  </h3>

                  <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed font-sans">
                    {stat.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[var(--border-primary)]/40 flex items-center justify-between text-[10px] font-mono text-[var(--text-secondary)]">
                  <span>GK Space Solutions LLP</span>
                  <span className="text-[var(--accent-gold)] font-semibold">Verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
