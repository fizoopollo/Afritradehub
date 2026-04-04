export type BagsTemplate = {
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

export const bagsTemplates: BagsTemplate[] = [
  {
    slug: "leather",
    name: "Leather",
    image: "/assets/bags/leather.jpg",
    price: "$380",
    rating: "97%",
    tag: "NEW",
    gradient: "linear-gradient(135deg, #8b6f47 0%, #a88462 50%, #d4a574 100%)",
    accent: "amber",
    tagline: "Premium Leather Craftsmanship",
    description: "Luxurious leather bags and accessories handcrafted with traditional techniques and premium materials.",
    products: [
      { name: "Vintage Leather Tote", desc: "Handcrafted Italian leather tote bag.", price: "$349" },
      { name: "Crossbody Messenger", desc: "Classic leather shoulder bag for travel.", price: "$279" },
      { name: "Leather Passport Holder", desc: "Premium leather travel essentials.", price: "$89" },
      { name: "Monogram Leather Backpack", desc: "Custom leather backpack with initials.", price: "$449" },
    ],
    testimonials: [
      { name: "Isabella M.", text: "The craftsmanship is impeccable. Worth every penny." },
      { name: "James D.", text: "My leather bag has aged beautifully over the years." },
    ],
    stats: [
      { value: "8K+", label: "Bags Sold" },
      { value: "97%", label: "Satisfaction" },
    ],
  },
  {
    slug: "courier",
    name: "Courier",
    image: "/assets/bags/courier.jpg",
    price: "$360",
    rating: "95%",
    tag: "",
    gradient: "linear-gradient(135deg, #424242 0%, #616161 50%, #9e9e9e 100%)",
    accent: "slate",
    tagline: "Professional Carry Solutions",
    description: "Functional courier and messenger bags designed for professionals who value style and practicality.",
    products: [
      { name: "Urban Courier Bag", desc: "Sleek messenger bag for city commuting.", price: "$189" },
      { name: "Laptop Messenger", desc: "Professional laptop messenger with organization.", price: "$199" },
      { name: "Tech Organizer Bag", desc: "Multiple compartments for gadgets and tech.", price: "$159" },
      { name: "Weekender Duffel", desc: "Compact travel duffel for short trips.", price: "$229" },
    ],
    testimonials: [
      { name: "Alex T.", text: "Perfect for my daily commute. Stylish and practical." },
      { name: "Sarah K.", text: "Best bag I've ever owned for work and travel." },
    ],
    stats: [
      { value: "12K+", label: "Bags Sold" },
      { value: "95%", label: "Satisfaction" },
    ],
  },
  {
    slug: "galleria",
    name: "Galleria",
    image: "/assets/bags/galleria.jpg",
    price: "$400",
    rating: "96%",
    tag: "PREMIUM",
    gradient: "linear-gradient(135deg, #e8d4c0 0%, #d4a5a5 50%, #9d6e6e 100%)",
    accent: "rose",
    tagline: "Designer Fashion Bags",
    description: "High-fashion designer bags and luxury accessories for those with impeccable taste.",
    products: [
      { name: "Milano Designer Clutch", desc: "Limited edition designer evening clutch.", price: "$595" },
      { name: "Signature Shoulder Bag", desc: "Iconic designer shoulder handbag.", price: "$795" },
      { name: "Quilted Crossbody", desc: "Quilted leather crossbody by renowned designer.", price: "$1095" },
      { name: "Evening Minaudière", desc: "Elegant metal evening bag with crystals.", price: "$1295" },
    ],
    testimonials: [
      { name: "Duchess L.", text: "The epitome of luxury and elegance." },
      { name: "Countess V.", text: "These bags are true works of art." },
    ],
    stats: [
      { value: "3.5K+", label: "Designer Bags Sold" },
      { value: "96%", label: "Satisfaction" },
    ],
  },
  {
    slug: "prestige",
    name: "Prestige",
    image: "/assets/bags/prestige.jpg",
    price: "$420",
    rating: "98%",
    tag: "PREMIUM",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #3d3d3d 50%, #d4af37 100%)",
    accent: "yellow",
    tagline: "Luxury Timepiece & Accessory",
    description: "Ultra-premium luxury bags and exclusive accessories with VIP concierge service.",
    products: [
      { name: "Hermès Inspired Tote", desc: "Premium leather tote with signature details.", price: "$2400" },
      { name: "Gold-Trimmed Portfolio", desc: "Executive leather portfolio with gold accents.", price: "$1800" },
      { name: "Crystal-Studded Belle", desc: "Evening bag with Swarovski crystals.", price: "$2600" },
      { name: "Crocodile Clutch", desc: "Exotic crocodile leather evening clutch.", price: "$3200" },
    ],
    testimonials: [
      { name: "Mr. Blackwell", text: "Prestige lives up to its name in every way." },
      { name: "Madame Beaumont", text: "The ultimate luxury bag collection." },
    ],
    stats: [
      { value: "1.2K+", label: "Prestige Bags Sold" },
      { value: "98%", label: "Satisfaction" },
    ],
  },
  {
    slug: "tote",
    name: "Tote",
    image: "/assets/bags/tote.jpg",
    price: "$320",
    rating: "94%",
    tag: "",
    gradient: "linear-gradient(135deg, #f5deb3 0%, #daa520 50%, #b8860b 100%)",
    accent: "amber",
    tagline: "Classic Canvas & Organic",
    description: "Sustainable canvas and organic tote bags perfect for eco-conscious shoppers.",
    products: [
      { name: "Organic Canvas Tote", desc: "100% organic cotton canvas shopper.", price: "$49" },
      { name: "Hemp Market Bag", desc: "Sustainable hemp fiber market tote.", price: "$59" },
      { name: "Recycled Plastic Tote", desc: "Made from recycled ocean plastic.", price: "$54" },
      { name: "Linen Farmer's Tote", desc: "Natural linen farmers market bag.", price: "$69" },
    ],
    testimonials: [
      { name: "Green L.", text: "Sustainable, stylish, and super practical." },
      { name: "Eco M.", text: "Finally, bags that align with my values." },
    ],
    stats: [
      { value: "25K+", label: "Eco Bags Sold" },
      { value: "94%", label: "Satisfaction" },
    ],
  },
  {
    slug: "voyage",
    name: "Voyage",
    image: "/assets/bags/voyage.jpg",
    price: "$390",
    rating: "96%",
    tag: "NEW",
    gradient: "linear-gradient(135deg, #1e88e5 0%, #42a5f5 50%, #80d8ff 100%)",
    accent: "blue",
    tagline: "Travel & Adventure Gear",
    description: "Purpose-built travel bags and luggage for adventurers and frequent travelers.",
    products: [
      { name: "Expandable Roller Luggage", desc: "TSA-approved carry-on with expandable storage.", price: "$279" },
      { name: "Adventure Hiking Pack", desc: "60L capacity backpack for trekking.", price: "$199" },
      { name: "Travel Organizer Bundle", desc: "Complete set of packing cubes and organizers.", price: "$89" },
      { name: "Waterproof Dry Bag", desc: "IPX7 waterproof bag for water sports.", price: "$129" },
    ],
    testimonials: [
      { name: "Adventurer Jim", text: "Perfect for all my travels. Never lets me down." },
      { name: "Digital Nomad D.", text: "Best travel bag I've owned. Worth the investment." },
    ],
    stats: [
      { value: "18K+", label: "Travel Bags Sold" },
      { value: "96%", label: "Satisfaction" },
    ],
  },
  {
    slug: "daypacker",
    name: "DayPacker",
    image: "/assets/bags/daypacker.jpg",
    price: "$280",
    rating: "93%",
    tag: "",
    gradient: "linear-gradient(135deg, #7cb342 0%, #9ccc65 50%, #c5e1a5 100%)",
    accent: "green",
    tagline: "Daily Commute Perfect",
    description: "Comfortable, stylish daypacks for daily use, commuting, and casual outings.",
    products: [
      { name: "Ergonomic DayPack", desc: "Comfortable 20L backpack for daily use.", price: "$89" },
      { name: "Tech-Friendly Backpack", desc: "Laptop and tech organizer daypack.", price: "$109" },
      { name: "Convertible Sling Bag", desc: "Crossbody to backpack conversion bag.", price: "$79" },
      { name: "Compact Shoulder Bag", desc: "Small shoulder bag for essentials.", price: "$59" },
    ],
    testimonials: [
      { name: "Commuter C.", text: "Perfect for my daily commute. So comfortable." },
      { name: "Student S.", text: "Best daypack for classes and campus life." },
    ],
    stats: [
      { value: "32K+", label: "Daypacks Sold" },
      { value: "93%", label: "Satisfaction" },
    ],
  },
];

export function getBagsTemplateBySlug(slug: string): BagsTemplate | undefined {
  return bagsTemplates.find((t) => t.slug === slug);
}
