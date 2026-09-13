// ── Central Data Store ─────────────────────────────────

export const company = {
  name: "GK Space Solutions LLP",
  shortName: "GK Space",
  tagline: "Crafting Spaces with Precision. Delivering Excellence with Integrity.",
  description:
    "A distinguished interior contracting and furniture solutions firm with over 25 years of industry expertise, delivering refined residential and commercial interiors built on quality, innovation, and trust.",
  phone: "+91 98204 01179",
  email: "gkspacesolutionllp@gmail.com",
  address: "Mumbai, India",
  yearsExperience: 25,
  foundedYear: 2000,
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Portfolio PPT", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export type SocialLink = {
  label: string;
  href: string;
  icon: "instagram" | "linkedin" | "facebook" | "youtube";
};

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://instagram.com/gkspacesolutions",
    icon: "instagram",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/gkspacesolutions",
    icon: "linkedin",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/gkspacesolutions",
    icon: "facebook",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@gkspacesolutions",
    icon: "youtube",
  },
];

export const footerQuickLinks: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export interface CompanyStat {
  value: string;
  label: string;
  subtext: string;
}

export const companyStats: CompanyStat[] = [
  {
    value: "25+",
    label: "Years Experience",
    subtext: "Master interior craftsmanship & engineering",
  },
  {
    value: "350+",
    label: "Executed Projects",
    subtext: "Commercial headquarters & luxury residences",
  },
  {
    value: "100%",
    label: "Quality Delivery",
    subtext: "Zero-compromise material & turnkey execution",
  },
  {
    value: "50K+",
    label: "Sq. Ft. In-House Facility",
    subtext: "Bespoke architectural millwork & fabrication",
  },
];

export interface ProjectItem {
  id: string;
  title: string;
  category: "Corporate" | "Residential" | "Hospitality" | "Millwork";
  categoryLabel: string;
  location: string;
  image: string;
  year: string;
  scope: string;
}

export const projectCategories = [
  { id: "all", label: "All Works" },
  { id: "Corporate", label: "Corporate" },
  { id: "Residential", label: "Residential" },
  { id: "Hospitality", label: "Hospitality" },
  { id: "Millwork", label: "Millwork & Bespoke" },
] as const;

export const showcaseProjects: ProjectItem[] = [
  {
    id: "vfs-headquarters",
    title: "VFS Global Headquarters",
    category: "Corporate",
    categoryLabel: "Corporate Interiors",
    location: "BKC, Mumbai",
    image: "/img/vfs.jpeg",
    year: "2024",
    scope: "Turnkey Contracting & Acoustic Fit-out",
  },
  {
    id: "aster-penthouse",
    title: "The Aster Luxury Residence",
    category: "Residential",
    categoryLabel: "Luxury Residential",
    location: "Worli, Mumbai",
    image: "/img/home_interior.jpeg",
    year: "2023",
    scope: "Complete Civil & Interior Execution",
  },
  {
    id: "apex-executive-lobby",
    title: "Apex Corporate Reception & Lobby",
    category: "Corporate",
    categoryLabel: "Corporate Interiors",
    location: "Nariman Point, Mumbai",
    image: "/img/reception.jpeg",
    year: "2024",
    scope: "Marble Cladding & Architectural Lighting",
  },
  {
    id: "art-deco-suite",
    title: "Artisan Master Suite",
    category: "Residential",
    categoryLabel: "Luxury Residential",
    location: "Juhu, Mumbai",
    image: "/img/bedroom3.jpeg",
    year: "2023",
    scope: "Bespoke Paneling & Integrated Lighting",
  },
  {
    id: "executive-boardroom",
    title: "High-Caliber Conference Suite",
    category: "Corporate",
    categoryLabel: "Corporate Interiors",
    location: "Lower Parel, Mumbai",
    image: "/img/meetingroom.jpeg",
    year: "2024",
    scope: "Acoustic Partitions & Custom Table",
  },
  {
    id: "bespoke-kitchen",
    title: "Architectural Precision Kitchen",
    category: "Millwork",
    categoryLabel: "Bespoke Millwork",
    location: "Bandra West, Mumbai",
    image: "/img/modular-kitchen.jpg",
    year: "2023",
    scope: "Hardware Engineering & Quartz Surfaces",
  },
  {
    id: "vfs-cafeteria",
    title: "VFS Executive Dining & Lounge",
    category: "Corporate",
    categoryLabel: "Corporate Interiors",
    location: "Mumbai",
    image: "/img/vfs_cafetaria.jpeg",
    year: "2024",
    scope: "Turnkey Fit-out & Ceiling Geometry",
  },
  {
    id: "alba-heritage",
    title: "Alba Classical Residence",
    category: "Residential",
    categoryLabel: "Luxury Residential",
    location: "South Mumbai",
    image: "/img/portfolio-1.jpg",
    year: "2022",
    scope: "Restoration & Contemporary Millwork",
  },
  {
    id: "workstation-wing",
    title: "Ergonomic Financial Workspace",
    category: "Corporate",
    categoryLabel: "Corporate Interiors",
    location: "Andheri East, Mumbai",
    image: "/img/officecommon.jpeg",
    year: "2023",
    scope: "Modular Systems & Electrical Infrastructure",
  },
  {
    id: "walkin-wardrobe",
    title: "Couture Dressing Suite",
    category: "Millwork",
    categoryLabel: "Bespoke Millwork",
    location: "Pali Hill, Mumbai",
    image: "/img/wardrobe.jpg",
    year: "2023",
    scope: "Veneer Joinery & Sensor Illumination",
  },
  {
    id: "hospitality-lounge",
    title: "Grand Atrium & Guest Lounge",
    category: "Hospitality",
    categoryLabel: "Hospitality",
    location: "Mumbai",
    image: "/img/portfolio-4.jpg",
    year: "2022",
    scope: "Turnkey Ceiling & Specialty Finishes",
  },
  {
    id: "sculptural-dining",
    title: "Contemporary Architectural Dining",
    category: "Residential",
    categoryLabel: "Luxury Residential",
    location: "Khar, Mumbai",
    image: "/img/dinningroom.jpg",
    year: "2023",
    scope: "Suspended Brass Lighting & Custom Joinery",
  },
  {
    id: "client-reception",
    title: "Private Wealth Client Salon",
    category: "Corporate",
    categoryLabel: "Corporate Interiors",
    location: "Fort, Mumbai",
    image: "/img/waiting_area.jpeg",
    year: "2024",
    scope: "Custom Furnishings & Acoustic Walls",
  },
  {
    id: "executive-study",
    title: "Private Study & Book Repository",
    category: "Residential",
    categoryLabel: "Luxury Residential",
    location: "Prabhadevi, Mumbai",
    image: "/img/studyroom.jpg",
    year: "2023",
    scope: "Floor-to-Ceiling Shelving & Desk",
  },
  {
    id: "sky-terrace",
    title: "Veranda Sky Terrace & Living",
    category: "Residential",
    categoryLabel: "Luxury Residential",
    location: "Versova, Mumbai",
    image: "/img/apartment-balcony.jpg",
    year: "2023",
    scope: "Weather-Resistant Decking & Planters",
  },
];

export interface ServicePreview {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const servicesPreview: ServicePreview[] = [
  {
    number: "01",
    title: "Turnkey Interior Contracting",
    description:
      "Comprehensive end-to-end execution covering civil construction, MEP engineering, high-spec flooring, and immaculate finishes under a single point of accountability.",
    deliverables: ["Civil & Structural Works", "MEP & HVAC Integration", "Flawless Surface Finishes"],
  },
  {
    number: "02",
    title: "Corporate & Commercial Fit-Outs",
    description:
      "Transforming enterprise workspaces, boardrooms, and executive facilities into inspiring environments optimized for productivity, acoustics, and corporate identity.",
    deliverables: ["Acoustic Glass Partitions", "Modular Workstations", "Executive Boardrooms"],
  },
  {
    number: "03",
    title: "Luxury Residential Execution",
    description:
      "Bringing architect-designed luxury homes, duplexes, and penthouses into physical reality with uncompromising adherence to finishes, tolerances, and artisan detailing.",
    deliverables: ["Custom Stone & Marble Masonry", "Smart Home Coordination", "Concealed Architectural Ceilings"],
  },
  {
    number: "04",
    title: "Bespoke Millwork & Furniture",
    description:
      "Crafted in our specialized manufacturing facility with German machinery, delivering tailor-made cabinetry, luxury wardrobes, and custom modular kitchens.",
    deliverables: ["German Hardware Integration", "Precision Veneer Matching", "Modular Kitchen Systems"],
  },
];

export interface ValuePillar {
  title: string;
  description: string;
}

export const whyChoosePillars: ValuePillar[] = [
  {
    title: "Architectural Precision",
    description:
      "Zero deviation from engineering schematics. Every detail, reveal line, and junction is executed to millimeter accuracy.",
  },
  {
    title: "25+ Years Legacy",
    description:
      "A quarter-century track record trusted by top Indian enterprises, high-profile homeowners, and leading architectural practices.",
  },
  {
    title: "In-House Manufacturing",
    description:
      "Direct control over millwork quality, timing, and craftsmanship through our dedicated, modern production facility in Mumbai.",
  },
  {
    title: "Transparent Turnkey Governance",
    description:
      "Rigorous BOQ control, proactive project timelines, and transparent reporting ensure no surprises at handover.",
  },
];

