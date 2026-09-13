import Link from "next/link";
import { MessageSquare } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "919820401179";
  const message = encodeURIComponent(
    "Hello GK Space Solutions, I would like to inquire about interior design and contracting services for my project."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <aside aria-label="WhatsApp Contact">
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact GK Space Solutions on WhatsApp"
        className="group fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full border border-neutral-700/70 bg-[#0B0B0C]/90 px-4 py-3 text-[#F5F5F0] shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-[#DFB163] hover:bg-[#0B0B0C] hover:shadow-[0_10px_25px_rgba(223,177,99,0.25)] hover:-translate-y-0.5"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#DFB163] opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#DFB163]" />
        </span>
        <MessageSquare className="h-4 w-4 text-[#DFB163]" strokeWidth={1.25} />
        <span className="text-xs font-medium tracking-wider uppercase text-[#F5F5F0]">
          WhatsApp
        </span>
      </Link>
    </aside>
  );
}
