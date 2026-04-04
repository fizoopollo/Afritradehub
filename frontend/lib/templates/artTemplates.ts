export type ArtTemplate = {
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

export const artTemplates: ArtTemplate[] = [
  {
    slug: "etch",
    name: "Etch",
    image: "/assets/art/etch.jpg",
    price: "$370",
    rating: "94%",
    tag: "NEW",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    accent: "sky",
    tagline: "Precision Meets Artistry",
    description: "Fine line art, etchings, and detailed illustrations brought to life through timeless craftsmanship.",
    services: [
      { name: "Custom Etchings", desc: "Hand-etched artwork on metal, glass, or wood surfaces.", price: "From $500" },
      { name: "Print Editions", desc: "Limited edition fine art prints from original etchings.", price: "From $120" },
      { name: "Workshops", desc: "Learn the art of etching in hands-on studio sessions.", price: "From $85" },
    ],
    testimonials: [
      { name: "Claire D.", text: "The detail in their etchings is breathtaking. A true master's touch." },
      { name: "Thomas R.", text: "My commissioned piece is the centerpiece of our gallery." },
    ],
    stats: [
      { value: "2K+", label: "Artworks Created" },
      { value: "98%", label: "Client Satisfaction" },
    ],
  },
  {
    slug: "brutalist",
    name: "Brutalist",
    image: "/assets/art/brutalist.jpg",
    price: "$400",
    rating: "99%",
    tag: "",
    gradient: "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #333333 100%)",
    accent: "neutral",
    tagline: "Raw. Bold. Unapologetic.",
    description: "A striking brutalist aesthetic for galleries and artists who challenge convention.",
    services: [
      { name: "Exhibition Design", desc: "Bold, raw exhibition spaces that make a statement.", price: "From $2,000" },
      { name: "Catalog Design", desc: "Striking art catalogs with brutalist typography.", price: "From $800" },
    ],
    testimonials: [
      { name: "Max B.", text: "Finally, a design that matches the intensity of our art." },
    ],
    stats: [
      { value: "300+", label: "Projects" },
      { value: "99%", label: "Satisfaction" },
    ],
  },
  {
    slug: "sunset",
    name: "Sunset",
    image: "/assets/art/sunset.jpg",
    price: "$380",
    rating: "98%",
    tag: "",
    gradient: "linear-gradient(135deg, #2d1b4e 0%, #8b3a62 50%, #e07c4f 100%)",
    accent: "orange",
    tagline: "Warmth in Every Frame",
    description: "Photography and art showcased in warm, inviting tones that draw viewers in.",
    services: [
      { name: "Photo Prints", desc: "Golden hour photography on archival paper.", price: "From $200" },
      { name: "Canvas Wraps", desc: "Gallery-wrapped canvas prints in warm tones.", price: "From $350" },
    ],
    testimonials: [
      { name: "Sophia L.", text: "The warmth of their prints transforms any room." },
    ],
    stats: [
      { value: "5K+", label: "Prints Sold" },
      { value: "98%", label: "Satisfaction" },
    ],
  },
  {
    slug: "monochrome",
    name: "Monochrome",
    image: "/assets/art/monochrome.jpg",
    price: "$320",
    rating: "94%",
    tag: "",
    gradient: "linear-gradient(135deg, #0d0d0d 0%, #262626 50%, #404040 100%)",
    accent: "zinc",
    tagline: "The Power of Black & White",
    description: "Stripped-back monochrome design that lets artwork speak for itself.",
    services: [
      { name: "B&W Photography", desc: "Fine art black and white photography.", price: "From $300" },
      { name: "Charcoal Portraits", desc: "Hand-drawn charcoal portrait commissions.", price: "From $600" },
    ],
    testimonials: [
      { name: "Leo H.", text: "There's an elegance to monochrome that nothing else captures." },
    ],
    stats: [
      { value: "3K+", label: "Artworks" },
      { value: "94%", label: "Satisfaction" },
    ],
  },
  {
    slug: "ocean",
    name: "Ocean",
    image: "/assets/art/ocean.jpg",
    price: "$360",
    rating: "96%",
    tag: "NEW",
    gradient: "linear-gradient(135deg, #d4edda 0%, #3a8a7a 50%, #1a5a5a 100%)",
    accent: "teal",
    tagline: "Calming Coastal Vibes",
    description: "Serene ocean-inspired artwork with mint and teal tones perfect for galleries and print shops.",
    services: [
      { name: "Water Color Prints", desc: "Beautiful watercolor art prints inspired by the sea.", price: "From $180" },
      { name: "Ceramic Gallery", desc: "Hand-crafted ceramic pieces with coastal themes.", price: "From $250" },
      { name: "Gallery Installation", desc: "Professional installation of your ocean-themed collection.", price: "From $400" },
    ],
    testimonials: [
      { name: "Marina K.", text: "Brings the tranquility of the ocean to every room." },
      { name: "James W.", text: "The seascape collection is absolutely stunning." },
    ],
    stats: [
      { value: "8K+", label: "Prints Sold" },
      { value: "96%", label: "Satisfaction" },
    ],
  },
  {
    slug: "okinawa",
    name: "Okinawa",
    image: "/assets/art/okinawa.jpg",
    price: "$410",
    rating: "97%",
    tag: "PREMIUM",
    gradient: "linear-gradient(135deg, #e0f2f1 0%, #80cbc4 50%, #00695c 100%)",
    accent: "cyan",
    tagline: "Tropical Paradise",
    description: "Vibrant tropical art inspired by Okinawan landscapes and traditional designs.",
    services: [
      { name: "Tropical Canvas", desc: "Large canvas tropical artwork for statement walls.", price: "From $650" },
      { name: "Fashion Design", desc: "Textile design services with tropical patterns.", price: "From $800" },
      { name: "Custom Artwork", desc: "Bespoke tropical pieces commissioned to order.", price: "From $500" },
    ],
    testimonials: [
      { name: "Yuki T.", text: "Captures the essence of island beauty perfectly." },
      { name: "Akira S.", text: "My favorite tropical art collection yet." },
    ],
    stats: [
      { value: "4.2K+", label: "Canvas Orders" },
      { value: "97%", label: "Satisfaction" },
    ],
  },
  {
    slug: "portfolio",
    name: "Portfolio",
    image: "/assets/art/portfolio.jpg",
    price: "$340",
    rating: "95%",
    tag: "",
    gradient: "linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 50%, #9e9e9e 100%)",
    accent: "slate",
    tagline: "Showcase Your Best Work",
    description: "Clean, professional portfolio template perfect for artists and designers to showcase their finest creations.",
    services: [
      { name: "Portfolio Setup", desc: "Professional portfolio installation and optimization.", price: "From $299" },
      { name: "Print Curation", desc: "Expert advice on which work to showcase and how.", price: "From $500" },
      { name: "Photography", desc: "Professional photography of your artwork for the portfolio.", price: "From $350" },
    ],
    testimonials: [
      { name: "Alex R.", text: "Finally, a portfolio template that lets my work shine." },
      { name: "Jordan M.", text: "Helped me land 3 gallery exhibitions." },
    ],
    stats: [
      { value: "600+", label: "Artists Using" },
      { value: "95%", label: "Satisfaction" },
    ],
  },
  {
    slug: "totem",
    name: "Totem",
    image: "/assets/art/totem.jpg",
    price: "$420",
    rating: "98%",
    tag: "NEW",
    gradient: "linear-gradient(135deg, #8b4513 0%, #d2691e 50%, #cd853f 100%)",
    accent: "amber",
    tagline: "Indigenous & Cultural Art",
    description: "Celebrating indigenous art traditions with earthy tones and spiritual aesthetics that honor cultural heritage.",
    services: [
      { name: "Indigenous Crafts", desc: "Authentic handmade indigenous artwork and crafts.", price: "From $300" },
      { name: "Cultural Gallery", desc: "Gallery space dedicated to indigenous artists.", price: "From $1500/mo" },
      { name: "Artist Collaboration", desc: "Partner with indigenous artists for unique work.", price: "From $2000" },
    ],
    testimonials: [
      { name: "Keanu W.", text: "True representation of indigenous excellence." },
      { name: "Rainbow S.", text: "Honoring our ancestors through beautiful art." },
    ],
    stats: [
      { value: "250+", label: "Featured Artists" },
      { value: "98%", label: "Satisfaction" },
    ],
  },
  {
    slug: "wrong",
    name: "Wrong",
    image: "/assets/art/wrong.jpg",
    price: "$330",
    rating: "93%",
    tag: "",
    gradient: "linear-gradient(135deg, #ffebee 0%, #ef5350 50%, #c62828 100%)",
    accent: "red",
    tagline: "Bold Statement Art",
    description: "Daring and provocative art for those who challenge norms and celebrate unconventional perspectives.",
    services: [
      { name: "Statement Pieces", desc: "Bold, controversial artwork that sparks conversation.", price: "From $400" },
      { name: "Art Installations", desc: "Large-scale installations for galleries and spaces.", price: "From $5000" },
      { name: "Limited Edition Prints", desc: "Numbered print editions of provocative work.", price: "From $150" },
    ],
    testimonials: [
      { name: "Morgan L.", text: "Finally art that says what needs to be said." },
      { name: "Casey B.", text: "Bold, fearless, and unforgettable." },
    ],
    stats: [
      { value: "180+", label: "Installations" },
      { value: "93%", label: "Satisfaction" },
    ],
  },
  {
    slug: "anthologist",
    name: "Anthologist",
    image: "/assets/art/anthologist.jpg",
    price: "$380",
    rating: "97%",
    tag: "",
    gradient: "linear-gradient(135deg, #ede7f6 0%, #9575cd 50%, #512da8 100%)",
    accent: "indigo",
    tagline: "Literary & Book Art",
    description: "Art inspired by literature, poetry, and the written word—perfect for bookish souls and literary enthusiasts.",
    services: [
      { name: "Book Illustrations", desc: "Custom illustrations for published and self-published books.", price: "From $800" },
      { name: "Literary Prints", desc: "Beautiful prints featuring famous literary quotes.", price: "From $120" },
      { name: "Manuscript Illumination", desc: "Decorative manuscript design and enhancement.", price: "From $600" },
    ],
    testimonials: [
      { name: "Isabel G.", text: "Brings literature to visual life beautifully." },
      { name: "Marcus T.", text: "The perfect blend of art and words." },
    ],
    stats: [
      { value: "1.2K+", label: "Books Illustrated" },
      { value: "97%", label: "Satisfaction" },
    ],
  },
  {
    slug: "clay",
    name: "Clay",
    image: "/assets/art/clay.jpg",
    price: "$350",
    rating: "96%",
    tag: "NEW",
    gradient: "linear-gradient(135deg, #d7ccc8 0%, #a1887f 50%, #6d4c41 100%)",
    accent: "amber",
    tagline: "Sculptural & Ceramic Art",
    description: "Earthy ceramic and sculptural work celebrating the beauty of handcrafted clay art and pottery.",
    services: [
      { name: "Custom Pottery", desc: "Handmade custom pottery pieces and functional ware.", price: "From $150" },
      { name: "Sculpting Classes", desc: "Learn pottery and sculpture from master artisans.", price: "From $95/session" },
      { name: "Gallery Display", desc: "Professional display and sale of ceramic works.", price: "From $1200/mo" },
    ],
    testimonials: [
      { name: "Elena V.", text: "Each piece tells a story. Absolutely captivating." },
      { name: "Daniel C.", text: "The tactile beauty of handmade pottery at its finest." },
    ],
    stats: [
      { value: "3.5K+", label: "Pieces Created" },
      { value: "96%", label: "Satisfaction" },
    ],
  },
  {
    slug: "darkroom",
    name: "Darkroom",
    image: "/assets/art/darkroom.jpg",
    price: "$390",
    rating: "98%",
    tag: "PREMIUM",
    gradient: "linear-gradient(135deg, #3e2723 0%, #5d4037 50%, #8d6e63 100%)",
    accent: "slate",
    tagline: "Fine Art Photography",
    description: "Dark, moody fine art photography showcasing the beauty found in shadows, contrast, and dramatic light.",
    services: [
      { name: "Fine Art Printing", desc: "Professional archival quality fine art prints.", price: "From $250" },
      { name: "Photography Sessions", desc: "Bespoke fine art photography sessions.", price: "From $600" },
      { name: "Darkroom Workshops", desc: "Traditional darkroom techniques and film processing.", price: "From $250/day" },
    ],
    testimonials: [
      { name: "Lucas H.", text: "The depth and emotion in every photograph is stunning." },
      { name: "Victoria J.", text: "Master-level photography that takes your breath away." },
    ],
    stats: [
      { value: "6.8K+", label: "Prints Sold" },
      { value: "98%", label: "Satisfaction" },
    ],
  },
  {
    slug: "exhibit",
    name: "Exhibit",
    image: "/assets/art/exhibit.jpg",
    price: "$400",
    rating: "97%",
    tag: "NEW",
    gradient: "linear-gradient(135deg, #f3e5f5 0%, #ce93d8 50%, #7b1fa2 100%)",
    accent: "purple",
    tagline: "Gallery & Exhibition",
    description: "Modern gallery template perfect for showcasing exhibitions, artist features, and curated collections.",
    services: [
      { name: "Exhibition Curation", desc: "Professional curation and organization of exhibitions.", price: "From $1000" },
      { name: "Gallery Space Rental", desc: "Beautiful gallery space for showcasing your work.", price: "From $2000/mo" },
      { name: "Opening Reception Planning", desc: "Full event planning for your art opening.", price: "From $1500" },
    ],
    testimonials: [
      { name: "Priya M.", text: "My first successful gallery exhibition thanks to this platform." },
      { name: "Reuben D.", text: "Professional, elegant, and artist-focused." },
    ],
    stats: [
      { value: "500+", label: "Exhibitions" },
      { value: "97%", label: "Satisfaction" },
    ],
  },
  {
    slug: "mio",
    name: "Mio",
    image: "/assets/art/mio.jpg",
    price: "$360",
    rating: "95%",
    tag: "",
    gradient: "linear-gradient(135deg, #fff3e0 0%, #ffe0b2 50%, #ff9800 100%)",
    accent: "orange",
    tagline: "Warm & Inviting",
    description: "Warm, welcoming art template with golden tones perfect for contemporary art galleries and boutique studios.",
    services: [
      { name: "Contemporary Art Sales", desc: "Commission original contemporary artworks.", price: "From $800" },
      { name: "Art Consultation", desc: "Expert advice on building an art collection.", price: "From $300/hour" },
      { name: "Studio Tours", desc: "Behind-the-scenes studio visits and artist meetings.", price: "From $150" },
    ],
    testimonials: [
      { name: "Sophia A.", text: "Warm, welcoming, and genuinely inspired every visit." },
      { name: "David K.", text: "My favorite art space in the whole city." },
    ],
    stats: [
      { value: "4.8K+", label: "Gallery Visitors/mo" },
      { value: "95%", label: "Satisfaction" },
    ],
  },
];

export function getArtTemplateBySlug(slug: string): ArtTemplate | undefined {
  return artTemplates.find((t) => t.slug === slug);
}
