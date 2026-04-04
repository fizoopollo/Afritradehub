export type AutoTemplate = {
  slug: string;
  name: string;
  image: string;
  price: string;
  rating: string;
  tag: string;
  gradient: string;
  accent: string;
  tagline: string;
  description: string;
  services: { name: string; desc: string; price: string }[];
  testimonials: { name: string; text: string }[];
  stats: { value: string; label: string }[];
};

export const autoTemplates: AutoTemplate[] = [
  {
    slug: "drive",
    name: "Drive",
    image: "/assets/auto/drive.jpg",
    price: "$380",
    rating: "96%",
    tag: "NEW",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #e94560 100%)",
    accent: "red",
    tagline: "Speed & Performance",
    description: "High-octane automotive template for dealerships and car enthusiasts showcasing vehicle excellence.",
    services: [
      { name: "Vehicle Financing", desc: "Flexible financing options for your dream car.", price: "From 0% APR" },
      { name: "Maintenance Plans", desc: "Comprehensive maintenance and service packages.", price: "From $799/year" },
      { name: "Trade-In Evaluation", desc: "Fair value assessment for your current vehicle.", price: "Free" },
    ],
    testimonials: [
      { name: "Marcus T.", text: "Found my dream car at the best price. Incredible service!" },
      { name: "Jessica R.", text: "Professional, honest, and they really know cars." },
    ],
    stats: [
      { value: "2.5K+", label: "Cars Sold" },
      { value: "96%", label: "Customer Satisfaction" },
    ],
  },
  {
    slug: "torque",
    name: "Torque",
    image: "/assets/auto/torque.jpg",
    price: "$410",
    rating: "97%",
    tag: "PREMIUM",
    gradient: "linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 50%, #ff6b35 100%)",
    accent: "orange",
    tagline: "Pure Power",
    description: "Performance-focused template for automotive shops, tuners, and custom car specialists.",
    services: [
      { name: "Custom Tuning", desc: "Engine tuning and performance optimization.", price: "From $1200" },
      { name: "Suspension Work", desc: "Advanced suspension setup and alignment.", price: "From $850" },
      { name: "Custom Builds", desc: "Complete custom vehicle builds from scratch.", price: "From $25000" },
    ],
    testimonials: [
      { name: "David M.", text: "Transformed my car into a beast. Best money I've spent." },
      { name: "Alex L.", text: "Experts in their field. Incredible attention to detail." },
    ],
    stats: [
      { value: "800+", label: "Custom Builds" },
      { value: "97%", label: "Satisfaction" },
    ],
  },
  {
    slug: "fleet",
    name: "Fleet",
    image: "/assets/auto/fleet.jpg",
    price: "$395",
    rating: "95%",
    tag: "",
    gradient: "linear-gradient(135deg, #264653 0%, #2a9d8f 50%, #e9c46a 100%)",
    accent: "cyan",
    tagline: "Fleet Management Solutions",
    description: "Comprehensive fleet management template for corporate vehicle operations and logistics.",
    services: [
      { name: "Fleet Maintenance", desc: "Scheduled maintenance for your entire fleet.", price: "From $2000/mo" },
      { name: "GPS Tracking", desc: "Real-time vehicle tracking and analytics.", price: "From $50/vehicle/mo" },
      { name: "Fuel Management", desc: "Fuel optimization and cost reduction strategies.", price: "From $1500/mo" },
    ],
    testimonials: [
      { name: "Robert C.", text: "Cut our fleet costs by 30% with their solutions." },
      { name: "Patricia B.", text: "Professional, efficient, and incredibly reliable." },
    ],
    stats: [
      { value: "5000+", label: "Vehicles Managed" },
      { value: "95%", label: "Satisfaction" },
    ],
  },
  {
    slug: "garage",
    name: "Garage",
    image: "/assets/auto/garage.jpg",
    price: "$350",
    rating: "94%",
    tag: "",
    gradient: "linear-gradient(135deg, #3a3a3a 0%, #555555 50%, #ffa500 100%)",
    accent: "amber",
    tagline: "Neighborhood Service Center",
    description: "Community-focused auto repair shop template featuring local expertise and honest service.",
    services: [
      { name: "General Maintenance", desc: "Oil changes, inspections, and routine service.", price: "From $50" },
      { name: "Brake Service", desc: "Complete brake system inspection and repair.", price: "From $200" },
      { name: "Tire Service", desc: "Tire sales, rotation, balancing, and alignment.", price: "From $80" },
    ],
    testimonials: [
      { name: "Carlos H.", text: "Been going there for 10 years. Trustworthy and fair." },
      { name: "Linda M.", text: "They really care about their customers." },
    ],
    stats: [
      { value: "15K+", label: "Customers Served" },
      { value: "94%", label: "Satisfaction" },
    ],
  },
  {
    slug: "maranello",
    name: "Maranello",
    image: "/assets/auto/maranello.jpg",
    price: "$450",
    rating: "99%",
    tag: "PREMIUM",
    gradient: "linear-gradient(135deg, #8b0000 0%, #d32f2f 50%, #ffcc00 100%)",
    accent: "red",
    tagline: "Exotic & Luxury Cars",
    description: "Elite luxury sports car dealership template for high-end, exotic, and collectible vehicles.",
    services: [
      { name: "Exotic Sales", desc: "Curated selection of rare and exotic supercars.", price: "From $150000" },
      { name: "Concierge Service", desc: "White-glove service for luxury vehicle owners.", price: "Included" },
      { name: "Bespoke Customization", desc: "Custom modifications for luxury and exotic cars.", price: "From $50000" },
    ],
    testimonials: [
      { name: "Sheikh R.", text: "The finest selection and service in the region." },
      { name: "Victoria P.", text: "Treated like royalty. Exceptional experience." },
    ],
    stats: [
      { value: "200+", label: "Exotic Cars Sold" },
      { value: "99%", label: "Satisfaction" },
    ],
  },
  {
    slug: "nitro",
    name: "Nitro",
    image: "/assets/auto/nitro.jpg",
    price: "$400",
    rating: "96%",
    tag: "NEW",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #ff6b00 50%, #ffcc00 100%)",
    accent: "yellow",
    tagline: "Drag Racing & Motorsports",
    description: "High-energy racing template for motorsports teams, drag racing, and performance events.",
    services: [
      { name: "Racing Events", desc: "Professional drag racing and motorsport events.", price: "From $5000" },
      { name: "Speed Training", desc: "Driver training for racing and performance driving.", price: "From $1500" },
      { name: "Vehicle Prep", desc: "Full-service vehicle preparation for racing.", price: "From $3000" },
    ],
    testimonials: [
      { name: "Tony D.", text: "The fastest times in the region. Absolutely legendary." },
      { name: "Ryan S.", text: "Best racing team I've worked with." },
    ],
    stats: [
      { value: "250+", label: "Race Events" },
      { value: "96%", label: "Satisfaction" },
    ],
  },
  {
    slug: "evo",
    name: "Evo",
    image: "/assets/auto/evo.jpg",
    price: "$370",
    rating: "95%",
    tag: "",
    gradient: "linear-gradient(135deg, #0066cc 0%, #00cc99 50%, #ffgg33 100%)",
    accent: "blue",
    tagline: "Evolution Ready",
    description: "Modern automotive template for dealerships focusing on vehicle evolution and new models.",
    services: [
      { name: "New Model Showcase", desc: "Latest vehicle releases and pre-order options.", price: "Contact for details" },
      { name: "Trade Programs", desc: "Best trade-in values for upgrade programs.", price: "Fair market value" },
      { name: "Extended Warranty", desc: "Extended care and protection plans.", price: "From $1500" },
    ],
    testimonials: [
      { name: "Emma G.", text: "Always up to date with the latest models." },
      { name: "Michael W.", text: "Great deals on new vehicles. Highly recommended." },
    ],
    stats: [
      { value: "3.2K+", label: "New Cars Sold" },
      { value: "95%", label: "Satisfaction" },
    ],
  },
];

export function getAutoTemplateBySlug(slug: string): AutoTemplate | undefined {
  return autoTemplates.find((t) => t.slug === slug);
}
