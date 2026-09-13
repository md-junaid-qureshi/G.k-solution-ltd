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
        className="group fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full border border-[#EBE7DF] dark:border-neutral-800 bg-white/95 dark:bg-[#1C1A18]/95 px-4 py-3 text-[#1C1917] dark:text-[#FBF9F5] shadow-xl backdrop-blur-md transition-all duration-300 hover:border-[#C5A059] hover:shadow-[0_10px_25px_rgba(197,160,89,0.25)] hover:-translate-y-0.5"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C5A059] opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#C5A059]" />
        </span>
        <MessageSquare className="h-4 w-4 text-[#C5A059]" strokeWidth={1.25} />
        <span className="text-xs font-medium tracking-wider uppercase">
          WhatsApp
        </span>
      </Link>
    </aside>
  );
}
