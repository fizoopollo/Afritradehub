export type FashionTemplate = {
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

export const fashionTemplates: FashionTemplate[] = [
  {
    slug: "couture",
    name: "Couture",
    image: "/assets/fashion/couture.jpg",
    price: "$420",
    rating: "98%",
    tag: "PREMIUM",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 50%, #d4af37 100%)",
    accent: "yellow",
    tagline: "High Fashion Elegance",
    description: "Luxury haute couture and designer fashion for those with refined taste.",
    products: [
      { name: "Silk Evening Gown", desc: "Hand-tailored silk evening gown by renowned designer.", price: "$2500" },
      { name: "Designer Blazer", desc: "Premium tailored blazer in Italian wool.", price: "$1200" },
      { name: "Couture Ball Gown", desc: "Custom-made ball gown with crystal embellishments.", price: "$3500" },
      { name: "Bespoke Wedding Dress", desc: "Custom bridal gown with personalized design.", price: "$4000" },
    ],
    testimonials: [
      { name: "Duchess D.", text: "The epitome of luxury and sophistication." },
      { name: "Socialite S.", text: "Only couture brand that truly understands elegance." },
    ],
    stats: [
      { value: "2K+", label: "Couture Pieces Sold" },
      { value: "98%", label: "Satisfaction" },
    ],
  },
  {
    slug: "streetwise",
    name: "Streetwise",
    image: "/assets/fashion/streetwise.jpg",
    price: "$350",
    rating: "94%",
    tag: "NEW",
    gradient: "linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 50%, #feca57 100%)",
    accent: "red",
    tagline: "Urban Style Culture",
    description: "Contemporary streetwear and urban fashion for the modern generation.",
    products: [
      { name: "Graphic Hoodie", desc: "Oversized hoodie with trendy graphic design.", price: "$59" },
      { name: "Cargo Pants", desc: "Multi-pocket cargo pants in neutral tones.", price: "$79" },
      { name: "Streetwear Sneakers", desc: "Limited edition collaborative sneakers.", price: "$129" },
      { name: "Urban Bomber Jacket", desc: "Lightweight bomber jacket with street vibes.", price: "$89" },
    ],
    testimonials: [
      { name: "Fashion Youth F.", text: "This is real street fashion, not just hype." },
      { name: "Creative Creator C.", text: "Perfect for expressing my personal style." },
    ],
    stats: [
      { value: "45K+", label: "Pieces Sold" },
      { value: "94%", label: "Satisfaction" },
    ],
  },
  {
    slug: "eco-threads",
    name: "Eco Threads",
    image: "/assets/fashion/ecothreads.jpg",
    price: "$340",
    rating: "96%",
    tag: "",
    gradient: "linear-gradient(135deg, #2c5f2d 0%, #97bc62 50%, #d4e8d4 100%)",
    accent: "green",
    tagline: "Sustainable Fashion",
    description: "Eco-friendly, ethically-made fashion for the conscious consumer.",
    products: [
      { name: "Organic Cotton Tee", desc: "100% organic cotton t-shirt, sustainably grown.", price: "$34" },
      { name: "Recycled Denim Jacket", desc: "Jacket made from recycled denim materials.", price: "$99" },
      { name: "Hemp Dress", desc: "Breathable hemp dress perfect for warm weather.", price: "$74" },
      { name: "Linen Pants", desc: "Natural linen pants in earthy tones.", price: "$84" },
    ],
    testimonials: [
      { name: "Eco Warrior E.", text: "Finally fashion that aligns with my values." },
      { name: "Conscious Consumer C.", text: "Beautiful AND sustainable. Best of both worlds." },
    ],
    stats: [
      { value: "28K+", label: "Eco Pieces Sold" },
      { value: "96%", label: "Satisfaction" },
    ],
  },
];

export function getFashionTemplateBySlug(slug: string): FashionTemplate | undefined {
  return fashionTemplates.find((t) => t.slug === slug);
}
