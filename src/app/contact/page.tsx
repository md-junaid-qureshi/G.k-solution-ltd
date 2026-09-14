import { Suspense } from "react";
import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact & Project Inquiries | GK Space Solutions LLP",
  description:
    "Consult directly with the engineering and turnkey contracting leadership at GK Space Solutions LLP for corporate, hospitality, and residential interior projects across India.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-28 pb-24 sm:pb-32 bg-[var(--bg-primary)] transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Suspense
          fallback={
            <div className="py-24 text-center text-xs font-mono uppercase tracking-widest text-[var(--text-secondary)]">
              Loading Inquiry Terminal...
            </div>
          }
        >
          <ContactClient />
        </Suspense>
      </div>
    </main>
  );
}
