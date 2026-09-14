// ── Central Data Store ─────────────────────────────────

export const company = {
  name: "GK Space Solutions LLP",
  shortName: "GK Space",
  tagline: "Crafting Spaces with Precision. Delivering Excellence with Integrity.",
  description:
    "A distinguished interior contracting and turnkey execution firm delivering bespoke architectural interiors and precision joinery across India, built on quality, innovation, and trust.",
  phone: "+91 98204 01179",
  email: "gkspacesolutionllp@gmail.com",
  address: "Across India",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
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
    href: "https://www.instagram.com/gk_space_solutions?stkn=MXI3emltMmJ4bmJtdA==",
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
  { label: "Portfolio", href: "/portfolio" },
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
    value: "Turnkey",
    label: "Bespoke Architectural Execution",
    subtext: "Master interior craftsmanship & precision turnkey fit-outs across India",
  },
  {
    value: "100+",
    label: "Projects Executed",
    subtext: "Turnkey corporate landmarks & luxury private residences across India",
  },
  {
    value: "Pan-India",
    label: "Pan-India Presence",
    subtext: "Nationwide execution & dedicated 50,000+ sq. ft. fabrication facility",
  },
  {
    value: "100%",
    label: "Turnkey Delivery",
    subtext: "Single-source contracting from bare-shell to defect-free handover",
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
    scope: "Complete Turnkey Interior Execution",
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
      "Comprehensive end-to-end execution covering interior construction, MEP engineering, high-spec flooring, and immaculate finishes under a single point of accountability.",
    deliverables: ["Interior Structural Works", "MEP & HVAC Integration", "Flawless Surface Finishes"],
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
    title: "Precision Turnkey Execution",
    description:
      "A proven track record of architectural excellence trusted by top Indian enterprises, high-profile homeowners, and leading architectural practices.",
  },
  {
    title: "In-House Manufacturing",
    description:
      "Direct control over millwork quality, timing, and craftsmanship through our dedicated, modern in-house production facility.",
  },
  {
    title: "Transparent Turnkey Governance",
    description:
      "Rigorous BOQ control, proactive project timelines, and transparent reporting ensure no surprises at handover.",
  },
];

export interface JobRole {
  id: string;
  title: string;
  department: string;
  category: "design" | "execution" | "trades";
  categoryLabel: string;
  location: string;
  type: string;
  experience: string;
  scope: string[];
  summary: string;
  requirements: string[];
}

export const openRoles: JobRole[] = [
  {
    id: "senior-architect",
    title: "Senior Interior Architect",
    department: "Architecture & Design",
    category: "design",
    categoryLabel: "Design & Architecture",
    location: "Mumbai (On-site / Studio)",
    type: "Full-Time",
    experience: "5–8 Years",
    scope: [
      "Concept-to-Execution Detailing & Spatial Planning",
      "Client Presentations & Design Directives",
      "High-Spec Technical Construction Documentation",
    ],
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
    category: "design",
    categoryLabel: "Design & Architecture",
    location: "Pan-India / Studio",
    type: "Full-Time",
    experience: "3–5 Years",
    scope: [
      "Hyper-Photorealistic 3D Interior Renderings",
      "Architectural Lighting Studies & Material Mapping",
      "Precision Millwork Shop Drawings & CAD Drafting",
    ],
    summary:
      "Transform architectural schematics into hyper-photorealistic interior renderings, lighting studies, and precision millwork shop drawings.",
    requirements: [
      "High proficiency in 3ds Max, Corona/V-Ray, Photoshop, and AutoCAD.",
      "Acute sensibility for material textures, natural illumination, and luxury styling.",
      "Ability to interpret architectural blueprints and MEP coordinates rapidly.",
    ],
  },
  {
    id: "project-manager",
    title: "Turnkey Fit-Out Project Manager",
    department: "Project Management",
    category: "design",
    categoryLabel: "Design & Architecture",
    location: "Pan-India (Site & Studio)",
    type: "Full-Time",
    experience: "7+ Years",
    scope: [
      "Turnkey Contract Lifecycle & BOQ Tracking",
      "Vendor Orchestration & Multi-Trade Coordination",
      "Procurement Governance & Milestone Handover",
    ],
    summary:
      "Full lifecycle ownership of commercial interior contracts: BOQ tracking, vendor orchestration, client liaison, and handover governance.",
    requirements: [
      "Extensive background managing commercial contracts upwards of 20,000 sq. ft.",
      "Comprehensive mastery of project scheduling, procurement, and cost-variance control.",
      "Exceptional leadership and negotiation acumen.",
    ],
  },
  {
    id: "site-engineer",
    title: "Site Execution Engineer (Fit-Out & MEP)",
    department: "Site Operations & Contracting",
    category: "execution",
    categoryLabel: "Site Execution & Supervision",
    location: "Pan-India (On-site)",
    type: "Full-Time",
    experience: "4–7 Years",
    scope: [
      "Daily Site Contracting & Civil-MEP Integration",
      "False Ceiling, Drywall Systems & Marble Dry-Lay",
      "Site Safety Compliance & Milestone Verification",
    ],
    summary:
      "Supervise daily site contracting, MEP integrations, false ceiling frameworks, and flawless quality compliance across active fit-out sites.",
    requirements: [
      "Diploma / Degree in Engineering with turnkey interior execution experience.",
      "Hands-on mastery of screeding, marble dry-lay, drywall systems, and MEP routing.",
      "Stringent adherence to site safety, milestone timelines, and material verification.",
    ],
  },
  {
    id: "site-supervisor-foreman",
    title: "Site Supervisor / Fit-out Foreman",
    department: "Site Operations & Execution",
    category: "execution",
    categoryLabel: "Site Execution & Supervision",
    location: "Pan-India (On-Site)",
    type: "Full-Time / On-Site",
    experience: "3–7 Years",
    scope: [
      "Pan-India Site Coordination",
      "Vendor Management",
      "Quality & Safety Inspection",
    ],
    summary:
      "Oversee day-to-day on-site fit-out operations, orchestrate trade contractors, enforce rigorous safety protocols, and ensure architectural specifications are executed without deviation.",
    requirements: [
      "Pan-India Site Coordination & multi-contractor oversight across active fit-out sites.",
      "Vendor Management, daily progress tracking, and material logistics.",
      "Quality & Safety Inspection with zero tolerance for craftsmanship defects.",
    ],
  },
  {
    id: "master-joiner-carpenter-lead",
    title: "Master Joiner / Carpenter Lead (Woodwork & Millwork)",
    department: "Joinery & Custom Millwork",
    category: "trades",
    categoryLabel: "Skilled Execution Trades & Craftsmen",
    location: "Pan-India (Facility & Site)",
    type: "Full-Time / Facility & Site",
    experience: "5+ Years",
    scope: [
      "Luxury Millwork Installation",
      "Modular Furniture Assembly",
      "Blueprint Execution",
    ],
    summary:
      "Direct luxury joinery fabrication, intricate architectural woodwork installations, and custom millwork detailing for flagship corporate workspaces and private penthouses.",
    requirements: [
      "Luxury Millwork Installation and precision veneer alignment.",
      "Modular Furniture Assembly, hardware fitting, and acoustic panelling.",
      "Blueprint Execution interpreting detailed architectural shop drawings.",
    ],
  },
  {
    id: "finishing-specialist-pu-polish",
    title: "Finishing Specialist (PU Polish, Acoustic & Paint Lead)",
    department: "Surface Finishing & Treatments",
    category: "trades",
    categoryLabel: "Skilled Execution Trades & Craftsmen",
    location: "Pan-India (Project-Based)",
    type: "Contract / Project-Based",
    experience: "4+ Years",
    scope: [
      "High-End Veneer & PU Finishes",
      "Acoustic Fabric Panel Installation",
      "Texture Mastery",
    ],
    summary:
      "Execute high-spec architectural finishes including polyurethane (PU) polish, veneer staining, acoustic fabric paneling, and premium wall textures across flagship fit-outs.",
    requirements: [
      "High-End Veneer & PU Finishes across matte, satin, and high-gloss textures.",
      "Acoustic Fabric Panel Installation and stretch fabric wall systems.",
      "Texture Mastery, surface prep, and defect-free handover detailing.",
    ],
  },
  {
    id: "mep-electrical-technician",
    title: "MEP & Electrical Site Technician",
    department: "MEP & Technical Systems",
    category: "trades",
    categoryLabel: "Skilled Execution Trades & Craftsmen",
    location: "Pan-India (On-Site)",
    type: "Full-Time / On-Site",
    experience: "3+ Years",
    scope: [
      "Architectural Lighting Layouts",
      "Concealed Wiring",
      "HVAC & Fire Safety Coordination",
    ],
    summary:
      "Execute concealed conduits, architectural lighting grids, DB dressing, and ensure seamless synchronization with HVAC and fire-fighting layouts.",
    requirements: [
      "Architectural Lighting Layouts, LED driver racks, and fixture placement.",
      "Concealed Wiring, distribution boards, and commercial circuit balancing.",
      "HVAC & Fire Safety Coordination adhering to strict safety codes.",
    ],
  },
];


