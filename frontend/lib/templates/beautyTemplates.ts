export type BeautyTemplate = {
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
  products: { name: string; desc: string; price: string }[];
  testimonials: { name: string; text: string }[];
  stats: { value: string; label: string }[];
};

export const beautyTemplates: BeautyTemplate[] = [
  {
    slug: "beyours",
    name: "Be Yours",
    image: "/assets/beauty/beyours.jpg",
    price: "$350",
    rating: "98%",
    tag: "NEW",
    gradient: "linear-gradient(135deg, #fce4ec 0%, #f8bbd0 50%, #f48fb1 100%)",
    accent: "pink",
    tagline: "Naturally Radiant",
    description: "Luxurious skincare with peonies and botanicals for a soft, radiant complexion.",
    products: [
      { name: "Peony Moisturizer", desc: "Deep hydration with peony extract.", price: "$48" },
      { name: "Rose Toner", desc: "Gentle balancing rose water toner.", price: "$32" },
      { name: "Vitamin C Serum", desc: "Brightening serum for radiant skin.", price: "$56" },
    ],
    testimonials: [
      { name: "Emma R.", text: "My skin has never looked this radiant. Absolutely love it!" },
      { name: "Sarah K.", text: "The peony moisturizer is pure luxury in a jar." },
    ],
    stats: [
      { value: "50K+", label: "Happy Customers" },
      { value: "98%", label: "Satisfaction" },
    ],
  },
  {
    slug: "wonder",
    name: "Wonder",
    image: "/assets/beauty/wonder.jpg",
    price: "$390",
    rating: "100%",
    tag: "",
    gradient: "linear-gradient(135deg, #fce4ec 0%, #f8bbd0 50%, #e1bee7 100%)",
    accent: "rose",
    tagline: "Dreamy Beauty",
    description: "Ethereal cosmetics floating in dreamy pastel clouds — beauty that inspires wonder.",
    products: [
      { name: "Cloud Cream", desc: "Weightless whipped moisturizer.", price: "$52" },
      { name: "Dream Palette", desc: "12-shade pastel eyeshadow palette.", price: "$48" },
      { name: "Petal Blush", desc: "Buildable cream blush duo.", price: "$34" },
    ],
    testimonials: [
      { name: "Ava M.", text: "Every product feels like a dream. The packaging is magical!" },
    ],
    stats: [
      { value: "30K+", label: "Fans" },
      { value: "100%", label: "Rating" },
    ],
  },
  {
    slug: "sleek",
    name: "Sleek",
    image: "/assets/beauty/sleek.jpg",
    price: "$350",
    rating: "100%",
    tag: "",
    gradient: "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #333333 100%)",
    accent: "zinc",
    tagline: "Modern Minimalism",
    description: "Black and white cosmetics with clean geometric design for the modern minimalist.",
    products: [
      { name: "Matte Foundation", desc: "Full coverage matte finish foundation.", price: "$42" },
      { name: "Precision Liner", desc: "Ultra-fine tip liquid eyeliner.", price: "$24" },
      { name: "Sculpt Contour Kit", desc: "Dual-ended contour and highlight stick.", price: "$36" },
    ],
    testimonials: [
      { name: "Mia S.", text: "Sleek's packaging is as refined as the products inside." },
    ],
    stats: [
      { value: "40K+", label: "Users" },
      { value: "100%", label: "Rating" },
    ],
  },
  {
    slug: "luxe",
    name: "Luxe",
    image: "/assets/beauty/luxe.jpg",
    price: "$490",
    rating: "100%",
    tag: "PREMIUM",
    gradient: "linear-gradient(135deg, #fff8e1 0%, #ffe082 50%, #ffd54f 100%)",
    accent: "amber",
    tagline: "Opulent Beauty",
    description: "Gold-accented luxury cosmetics on marble — the pinnacle of premium beauty.",
    products: [
      { name: "24K Gold Serum", desc: "Gold-infused anti-aging serum.", price: "$120" },
      { name: "Caviar Eye Cream", desc: "Luxury caviar rejuvenating eye cream.", price: "$95" },
      { name: "Diamond Powder", desc: "Illuminating setting powder.", price: "$78" },
    ],
    testimonials: [
      { name: "Victoria H.", text: "Luxe is the only brand worthy of my vanity." },
    ],
    stats: [
      { value: "10K+", label: "VIP Members" },
      { value: "100%", label: "Rating" },
    ],
  },
];

export function getBeautyTemplateBySlug(slug: string): BeautyTemplate | undefined {
  return beautyTemplates.find((t) => t.slug === slug);
}
