import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GK Space Solutions LLP | Luxury Interior Design Studio",
    template: "%s | GK Space Solutions LLP",
  },
  description:
    "A distinguished interior contracting and furniture solutions firm with over 25 years of industry expertise, delivering refined residential and commercial interiors in Mumbai, India.",
  keywords: [
    "interior design",
    "luxury interiors",
    "Mumbai interior designer",
    "commercial interiors",
    "residential design",
    "GK Space Solutions",
    "furniture solutions",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "GK Space Solutions LLP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <Navbar />
        <main className="flex-1 pt-[85px] sm:pt-[100px]">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
