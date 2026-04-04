export type ElectronicsTemplate = {
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

export const electronicsTemplates: ElectronicsTemplate[] = [
  {
    slug: "techvision",
    name: "TechVision",
    image: "/assets/electronics/techvision.jpg",
    price: "$400",
    rating: "97%",
    tag: "NEW",
    gradient: "linear-gradient(135deg, #0d1b2a 0%, #1d3557 50%, #457b9d 100%)",
    accent: "blue",
    tagline: "Latest Tech Innovation",
    description: "Cutting-edge electronics and gadgets for tech enthusiasts and early adopters.",
    products: [
      { name: "UltraBook Pro", desc: "Lightweight professional laptop with 16GB RAM.", price: "$1499" },
      { name: "SmartWatch Elite", desc: "Advanced fitness tracking and smart assistant.", price: "$399" },
      { name: "Wireless Earbuds Pro", desc: "Noise-canceling earbuds with 8-hour battery.", price: "$199" },
      { name: "4K Webcam", desc: "Professional 4K streaming camera for creators.", price: "$299" },
    ],
    testimonials: [
      { name: "Tech Guru T.", text: "Always have the latest tech at great prices." },
      { name: "Early Adopter E.", text: "Amazing selection and knowledgeable staff." },
    ],
    stats: [
      { value: "50K+", label: "Products Sold" },
      { value: "97%", label: "Satisfaction" },
    ],
  },
  {
    slug: "digital-hub",
    name: "Digital Hub",
    image: "/assets/electronics/digitalhub.jpg",
    price: "$380",
    rating: "95%",
    tag: "",
    gradient: "linear-gradient(135deg, #e3f2fd 0%, #64b5f6 50%, #1565c0 100%)",
    accent: "cyan",
    tagline: "All Your Digital Needs",
    description: "Comprehensive electronics and accessories for computers, phones, and smart devices.",
    products: [
      { name: "USB-C Hub Elite", desc: "7-in-1 USB-C hub with charging and video.", price: "$79" },
      { name: "Mechanical Keyboard", desc: "RGB mechanical gaming keyboard.", price: "$129" },
      { name: "Wireless Mouse", desc: "Ergonomic wireless mouse with precision tracking.", price: "$49" },
      { name: "Monitor Light Bar", desc: "Eye-care monitor light bar for reduced strain.", price: "$89" },
    ],
    testimonials: [
      { name: "Programmer P.", text: "Quality accessories that enhance my setup." },
      { name: "Remote Worker R.", text: "Everything I need for my home office." },
    ],
    stats: [
      { value: "80K+", label: "Accessories Sold" },
      { value: "95%", label: "Satisfaction" },
    ],
  },
  {
    slug: "gadget-galaxy",
    name: "Gadget Galaxy",
    image: "/assets/electronics/gadgetgalaxy.jpg",
    price: "$390",
    rating: "96%",
    tag: "PREMIUM",
    gradient: "linear-gradient(135deg, #1a0033 0%, #330066 50%, #6600cc 100%)",
    accent: "purple",
    tagline: "Innovative Gadgets Universe",
    description: "Exclusive and innovative gadgets that you won't find anywhere else.",
    products: [
      { name: "Smart Home Starter Kit", desc: "Complete home automation system.", price: "$599" },
      { name: "Drone Ultra", desc: "4K camera drone with 30-minute flight time.", price: "$899" },
      { name: "Robot Vacuum Pro", desc: "AI-powered self-emptying robot vacuum.", price: "$799" },
      { name: "Voice Assistant Plus", desc: "Premium voice assistant with multi-room audio.", price: "$299" },
    ],
    testimonials: [
      { name: "Smart Home S.", text: "Transformed my home with cutting-edge tech." },
      { name: "Gadget Lover G.", text: "Always finding the coolest new products." },
    ],
    stats: [
      { value: "12K+", label: "Smart Devices Sold" },
      { value: "96%", label: "Satisfaction" },
    ],
  },
];

export function getElectronicsTemplateBySlug(slug: string): ElectronicsTemplate | undefined {
  return electronicsTemplates.find((t) => t.slug === slug);
}
