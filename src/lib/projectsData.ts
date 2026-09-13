export type ProjectCategory = "All" | "Commercial" | "Corporate" | "Residential";

export interface GalleryProject {
  id: string;
  title: string;
  category: "Commercial" | "Corporate" | "Residential";
  imagePath: string;
  caption: string;
  location: string;
  scope: string;
  contractor: string;
}

export const galleryCategories: { id: ProjectCategory; label: string }[] = [
  { id: "All", label: "All Projects" },
  { id: "Commercial", label: "Commercial" },
  { id: "Corporate", label: "Corporate" },
  { id: "Residential", label: "Residential" },
];

export const projectsData: GalleryProject[] = [
  {
    id: "lounge-waiting-area",
    title: "Lounge / Waiting Area",
    category: "Commercial",
    imagePath: "/projects/waiting-area.jpeg",
    caption:
      "Step into a space where comfort meets contemporary design—crafted to welcome, relax, and impress from the very first moment.",
    location: "Mumbai, India",
    scope: "Turnkey Lounge Contracting & Acoustic Finishes",
    contractor: "GK Space Solutions LLP",
  },
  {
    id: "coffee-reception-hospitality",
    title: "Coffee / Reception / Hospitality Area",
    category: "Commercial",
    imagePath: "/projects/coffee.jpeg",
    caption:
      "Where would you pause first? A space designed to bring people together through thoughtful layout, modern finishes, and inviting atmosphere.",
    location: "Lower Parel, Mumbai",
    scope: "Custom Joinery & Hospitality Fit-Out",
    contractor: "GK Space Solutions LLP",
  },
  {
    id: "work-seating-area",
    title: "Work / Seating Area",
    category: "Corporate",
    imagePath: "/projects/working-2.jpeg",
    caption:
      "Imagine working in a space like this—designed to encourage focus, collaboration, and effortless comfort throughout the day.",
    location: "BKC, Mumbai",
    scope: "Ergonomic Systems & Wire Management",
    contractor: "GK Space Solutions LLP",
  },
  {
    id: "office-lounge-waiting-area",
    title: "Office Lounge / Waiting Area",
    category: "Corporate",
    imagePath: "/projects/office-waiting.jpeg",
    caption:
      "Modern office lounge designed with a clean layout and comfortable seating for a welcoming client experience.",
    location: "Nariman Point, Mumbai",
    scope: "Bespoke Millwork & Ambient Illumination",
    contractor: "GK Space Solutions LLP",
  },
  {
    id: "office-reception-waiting-lounge",
    title: "Office Reception / Waiting Lounge Area",
    category: "Corporate",
    imagePath: "/projects/waiting-2.jpeg",
    caption:
      "A spacious office reception and waiting area designed for functionality, comfort, and professional client interaction.",
    location: "Andheri East, Mumbai",
    scope: "Acoustic Wall Panels & Italian Marble",
    contractor: "GK Space Solutions LLP",
  },
  {
    id: "residential-bedroom-interior",
    title: "Residential Bedroom Interior",
    category: "Residential",
    imagePath: "/projects/bedroom-1.jpeg",
    caption:
      "A warm and contemporary bedroom interior designed with wooden finishes and smart storage for comfort and practicality.",
    location: "Worli, Mumbai",
    scope: "Veneer Paneling & Concealed Storage",
    contractor: "GK Space Solutions LLP",
  },
  {
    id: "modern-wooden-bedroom-design",
    title: "Modern Wooden Bedroom Design",
    category: "Residential",
    imagePath: "/projects/bedroom-2.jpeg",
    caption:
      "A warm and thoughtfully designed bedroom where natural wooden textures and soft detailing create a calm, inviting atmosphere for everyday living.",
    location: "Juhu, Mumbai",
    scope: "Artisan Joinery & Hardwood Finishes",
    contractor: "GK Space Solutions LLP",
  },
  {
    id: "contemporary-functional-bedroom",
    title: "Contemporary Functional Bedroom Interior",
    category: "Residential",
    imagePath: "/projects/bedroom-3.jpeg",
    caption:
      "How would your ideal space feel? Designed with precision and simplicity, this bedroom blends functionality with timeless wooden elegance.",
    location: "Bandra West, Mumbai",
    scope: "Master Suite Contracting & Cove Lighting",
    contractor: "GK Space Solutions LLP",
  },
  {
    id: "artistic-modern-bedroom-concept",
    title: "Artistic Modern Bedroom Concept",
    category: "Residential",
    imagePath: "/projects/bedroom-4.jpeg",
    caption:
      "A bold take on modern bedroom design—where creativity, unique form, and artistic detailing transform a simple space into a visual experience.",
    location: "Pali Hill, Mumbai",
    scope: "Architectural Detailing & Fluted Paneling",
    contractor: "GK Space Solutions LLP",
  },
  {
    id: "modern-office-reception-lounge",
    title: "Modern Office Reception Lounge",
    category: "Corporate",
    imagePath: "/projects/vfs-lounge.jpeg",
    caption:
      "What makes a first impression unforgettable? A vibrant welcome space designed to spark energy, creativity, and conversation the moment you walk in.",
    location: "BKC, Mumbai",
    scope: "Executive Salon & Partition Systems",
    contractor: "GK Space Solutions LLP",
  },
  {
    id: "contemporary-collaboration-lounge",
    title: "Contemporary Collaboration Lounge",
    category: "Corporate",
    imagePath: "/projects/meeting-room.jpeg",
    caption:
      "Where ideas take shape—an open, comfortable lounge designed to encourage collaboration, relaxation, and effortless team interaction.",
    location: "Pune, India",
    scope: "Acoustic Boardroom & Integrated AV",
    contractor: "GK Space Solutions LLP",
  },
  {
    id: "creative-cafeteria-breakout",
    title: "Creative Cafeteria / Breakout Space",
    category: "Commercial",
    imagePath: "/projects/vfs-cafeteria.jpeg",
    caption:
      "Step away, connect, and recharge—this thoughtfully designed cafeteria space brings people together in a relaxed and inspiring environment.",
    location: "Mumbai, India",
    scope: "Commercial Dining Contracting & Ceiling Baffles",
    contractor: "GK Space Solutions LLP",
  },
  {
    id: "modern-reception-desk-workspace",
    title: "Modern Reception Desk – Creative Workspace Design",
    category: "Corporate",
    imagePath: "/projects/office-desk.jpeg",
    caption:
      "What if a workspace could reflect creativity from the very first glance? A bold, modern reception design that combines functionality with a fresh, innovative aesthetic.",
    location: "Lower Parel, Mumbai",
    scope: "Solid Surface Fabrication & LED Inlays",
    contractor: "GK Space Solutions LLP",
  },
  {
    id: "contemporary-wooden-reception-counter",
    title: "Contemporary Wooden Reception Counter",
    category: "Commercial",
    imagePath: "/projects/reception.jpeg",
    caption:
      "A seamless blend of natural textures and modern craftsmanship—designed to create a professional yet welcoming first impression for every visitor.",
    location: "Fort, Mumbai",
    scope: "Bespoke Millwork & Brass Inlays",
    contractor: "GK Space Solutions LLP",
  },
  {
    id: "executive-corporate-headquarters",
    title: "Executive Corporate Headquarters",
    category: "Corporate",
    imagePath: "/projects/vfs.jpeg",
    caption:
      "Engineering spaces of consequence where precision turnkey execution meets institutional corporate authority.",
    location: "BKC, Mumbai",
    scope: "Full Lifecycle Civil & Interior Contracting",
    contractor: "GK Space Solutions LLP",
  },
];
