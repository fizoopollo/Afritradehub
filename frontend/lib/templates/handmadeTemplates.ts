export type HandmadeTemplate = {
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

export const handmadeTemplates: HandmadeTemplate[] = [
  {
    slug: "artisan-craft",
    name: "Artisan Craft",
    image: "/assets/handmade/artisancraft.jpg",
    price: "$360",
    rating: "97%",
    tag: "NEW",
    gradient: "linear-gradient(135deg, #d7ccc8 0%, #bcaaa4 50%, #8d6e63 100%)",
    accent: "brown",
    tagline: "Handmade with Heart",
    description: "Unique handcrafted items made by skilled artisans with attention to every detail.",
    products: [
      { name: "Hand-Carved Wood Box", desc: "Intricately carved wooden box with natural finish.", price: "$85" },
      { name: "Woven Basket Set", desc: "Set of 3 woven baskets in traditional patterns.", price: "$120" },
      { name: "Hand-Painted Pottery", desc: "Unique hand-painted ceramic pieces.", price: "$45" },
      { name: "Macramé Wall Hanging", desc: "Beautiful handwoven macramé wall art.", price: "$95" },
    ],
    testimonials: [
      { name: "Artisan Lover A.", text: "Each piece tells a story of craftsmanship." },
      { name: "Collector C.", text: "Supporting real artisans making real art." },
    ],
    stats: [
      { value: "6K+", label: "Handmade Pieces Sold" },
      { value: "97%", label: "Satisfaction" },
    ],
  },
  {
    slug: "jewelry-artistry",
    name: "Jewelry Artistry",
    image: "/assets/handmade/jewelryartistry.jpg",
    price: "$400",
    rating: "98%",
    tag: "PREMIUM",
    gradient: "linear-gradient(135deg, #fff8dc 0%, #ffd700 50%, #daa520 100%)",
    accent: "yellow",
    tagline: "Handcrafted Jewelry Excellence",
    description: "Exquisite handcrafted jewelry featuring precious metals and gemstones.",
    products: [
      { name: "Gold Engagement Ring", desc: "Custom 18K gold engagement ring with diamonds.", price: "$2500" },
      { name: "Silver Pendant Necklace", desc: "Delicate sterling silver necklace with gemstone.", price: "$185" },
      { name: "Handmade Bracelet Assortment", desc: "Set of 5 artisan bracelets in various styles.", price: "$250" },
      { name: "Pearl Drop Earrings", desc: "Elegant pearl earrings with gold accents.", price: "$320" },
    ],
    testimonials: [
      { name: "Bride B.", text: "My custom ring is absolutely stunning and unique." },
      { name: "Jewelry Enthusiast J.", text: "Real craftsmanship in every piece." },
    ],
    stats: [
      { value: "3.5K+", label: "Jewelry Pieces Sold" },
      { value: "98%", label: "Satisfaction" },
    ],
  },
  {
    slug: "textile-weaving",
    name: "Textile Weaving",
    image: "/assets/handmade/textileweaving.jpg",
    price: "$350",
    rating: "96%",
    tag: "",
    gradient: "linear-gradient(135deg, #c8e6c9 0%, #66bb6a 50%, #2e7d32 100%)",
    accent: "green",
    tagline: "Handwoven Textiles",
    description: "Beautiful handwoven textiles and fabrics created using traditional looms and natural dyes.",
    products: [
      { name: "Hand-Dyed Scarf", desc: "Silk scarf in natural hand-dyed patterns.", price: "$89" },
      { name: "Woven Wall Tapestry", desc: "Large handwoven textile tapestry for walls.", price: "$350" },
      { name: "Handwoven Throw Blanket", desc: "Cozy organic cotton woven blanket.", price: "$145" },
      { name: "Natural Fiber Place Mats", desc: "Set of 4 handwoven natural fiber mats.", price: "$68" },
    ],
    testimonials: [
      { name: "Textile Lover T.", text: "The quality and uniqueness of each piece is incredible." },
      { name: "Home Decorator H.", text: "Adds authentic character to any interior." },
    ],
    stats: [
      { value: "7.2K+", label: "Textiles Sold" },
      { value: "96%", label: "Satisfaction" },
    ],
  },
];

export function getHandmadeTemplateBySlug(slug: string): HandmadeTemplate | undefined {
  return handmadeTemplates.find((t) => t.slug === slug);
}
