import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart, Heart, ChevronDown, Star, Truck, ShieldCheck, RotateCcw, Mail } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";

const heroImg = "/assets/totem/hero.jpg";
const product1 = "/assets/totem/product1.jpg";
const product2 = "/assets/totem/product2.jpg";
const product3 = "/assets/totem/product3.jpg";
const product4 = "/assets/totem/product4.jpg";
const product5 = "/assets/totem/product5.jpg";
const product6 = "/assets/totem/product6.jpg";

const TEAL = "#1a5c50";
const CREAM = "#f5f0e8";
const GOLD = "#d4a825";
const DARK = "#1a1a1a";

const categories = [
  { name: "Office", img: product1 },
  { name: "Decor", img: product2 },
  { name: "Kitchen", img: product3 },
  { name: "Wooden", img: product4 },
];

const products = [
  { img: product1, name: "Walnut Writing Desk", price: "$1,280", tag: "" },
  { img: product2, name: "Abstract Form Sculpture", price: "$420", tag: "FEATURED" },
  { img: product3, name: "Hand-Turned Bowl", price: "$165", tag: "" },
  { img: product4, name: "Curved Back Bar Stool", price: "$580", oldPrice: "$680", tag: "SALE" },
  { img: product5, name: "Earth Glaze Vase", price: "$195", tag: "NEW" },
  { img: product6, name: "Ancestral Totem", price: "$890", tag: "" },
];

const marqueeText = "Where Artistry and Craftsmanship Converge";

const testimonials = [
  { name: "Cedar R.", text: "The totem they carved for our garden is awe-inspiring. True artisan quality.", rating: 5 },
  { name: "Stone H.", text: "Authentic craftsmanship — you can feel the heritage in every piece.", rating: 5 },
  { name: "Willow J.", text: "The workshop connected me to ancient creative traditions. Transformative.", rating: 5 },
];

export default function TotemTemplate() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [marqueeOffset, setMarqueeOffset] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setMarqueeOffset((p) => p - 1), 30);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ background: CREAM, color: DARK }} className="min-h-screen">
      {/* Announcement */}
      <div style={{ background: TEAL }} className="text-center py-2.5 text-xs tracking-wider text-white/90">
        New Summer Collection: Embrace Creativity and Colors Today!
      </div>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 border-b" style={{ borderColor: `${DARK}10` }}>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full" style={{ background: TEAL }} />
          <span className="text-lg font-bold tracking-wider uppercase" style={{ fontFamily: "'Georgia', serif" }}>BLUM</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {["Collections", "Events", "About us", "Presets"].map((l) => (
            <button key={l} className="text-sm flex items-center gap-1 hover:opacity-60 transition-opacity">
              {l}
              {(l === "Collections" || l === "Presets") && <ChevronDown size={14} />}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button className="hover:opacity-60 transition-opacity"><Search size={18} /></button>
          <button className="hover:opacity-60 transition-opacity relative">
            <ShoppingCart size={18} />
          </button>
        </div>
      </nav>

      {/* Hero Text */}
      <section className="text-center py-16 md:py-20 px-6 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl leading-tight mb-4" style={{ fontFamily: "'Georgia', serif" }}>
          Elevate Your Space
        </h1>
        <p className="text-sm md:text-base opacity-60 max-w-lg mx-auto mb-8 font-sans leading-relaxed">
          Enhance your space with unique, handcrafted art from Crafts. Each piece tells a story, each creation sparks imagination.
        </p>
        <button
          className="px-8 py-3 rounded-full text-sm font-sans font-medium text-white hover:brightness-110 transition-all"
          style={{ background: DARK }}
        >
          See latest products
        </button>
      </section>

      {/* Category Grid with "Featured now" starburst */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto relative">
        {/* Starburst badge */}
        <div className="absolute -top-4 left-4 md:left-8 z-10">
          <div className="relative w-20 h-20 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full absolute" style={{ color: GOLD }}>
              <polygon
                fill="currentColor"
                points="50,0 58,35 95,20 68,45 100,60 65,60 75,95 50,70 25,95 35,60 0,60 32,45 5,20 42,35"
              />
            </svg>
            <span className="relative z-10 text-[10px] font-sans font-bold text-center leading-tight" style={{ color: DARK }}>
              Featured<br />now
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              className="group cursor-pointer relative rounded-xl overflow-hidden"
              style={{ background: "#e8e2d8" }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-square p-6 flex items-center justify-center">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-3/4 h-3/4 object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="px-4 pb-4">
                <h3 className="text-sm font-sans font-medium">{cat.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Scrolling Marquee */}
      <section className="py-6 mt-16 overflow-hidden" style={{ background: TEAL }}>
        <div className="whitespace-nowrap" style={{ transform: `translateX(${marqueeOffset}px)` }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="inline-block text-white/90 text-lg md:text-2xl mx-8 italic" style={{ fontFamily: "'Georgia', serif" }}>
              {marqueeText} ✦
            </span>
          ))}
        </div>
      </section>

      {/* Story / About Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden">
            <img src={heroImg} alt="Craft workshop" className="w-full h-80 md:h-[450px] object-cover" />
          </div>
          <div>
            <p className="text-xs font-sans tracking-[0.3em] uppercase opacity-40 mb-4">Our Story</p>
            <h2 className="text-2xl md:text-4xl leading-tight mb-6" style={{ fontFamily: "'Georgia', serif" }}>
              The Journey Of How We Craft
            </h2>
            <p className="text-sm font-sans leading-relaxed opacity-60 mb-4">
              Every piece begins with a conversation between the artisan and the raw material. We believe that the best handcrafted objects are born from patience, skill, and a deep respect for tradition.
            </p>
            <p className="text-sm font-sans leading-relaxed opacity-60 mb-8">
              Our collective of craftspeople spans woodworkers, ceramicists, sculptors, and metalworkers — each bringing generations of expertise to every creation.
            </p>
            <button className="text-sm font-sans font-medium underline underline-offset-4 hover:opacity-60 transition-opacity">
              Read our full story →
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-4xl" style={{ fontFamily: "'Georgia', serif" }}>
            Featured Creations
          </h2>
          <button className="text-sm font-sans underline underline-offset-4 hover:opacity-60 transition-opacity">
            View all
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {products.map((p, i) => (
            <motion.div
              key={i}
              className="group cursor-pointer"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative aspect-square rounded-xl overflow-hidden mb-3" style={{ background: "#e8e2d8" }}>
                <div className="w-full h-full flex items-center justify-center p-8">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {p.tag && (
                  <span
                    className="absolute top-3 left-3 text-[10px] font-sans font-bold tracking-wider px-3 py-1 rounded-full text-white"
                    style={{ background: p.tag === "SALE" ? "#c0392b" : p.tag === "FEATURED" ? GOLD : TEAL }}
                  >
                    {p.tag}
                  </span>
                )}
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart size={14} style={{ color: TEAL }} />
                </button>
                <AnimatePresence>
                  {hovered === i && (
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute bottom-3 left-3 right-3 py-2.5 rounded-full text-xs font-sans font-semibold text-white"
                      style={{ background: DARK }}
                    >
                      Add to Cart
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
              <h3 className="text-sm font-sans font-medium mb-1">{p.name}</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm font-sans font-semibold">{p.price}</span>
                {p.oldPrice && <span className="text-xs font-sans line-through opacity-40">{p.oldPrice}</span>}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-t border-b" style={{ borderColor: `${DARK}10` }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 text-center">
          {[
            { icon: Truck, title: "Worldwide Shipping", desc: "Carefully packaged & insured" },
            { icon: ShieldCheck, title: "Artisan Guarantee", desc: "Authenticity certified" },
            { icon: RotateCcw, title: "Hassle-Free Returns", desc: "30-day return window" },
          ].map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <Icon size={24} style={{ color: TEAL }} strokeWidth={1.5} />
              <h4 className="text-sm font-sans font-semibold">{title}</h4>
              <p className="text-xs font-sans opacity-50">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl text-center mb-12" style={{ fontFamily: "'Georgia', serif" }}>
          Loved by Collectors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-xl p-6 md:p-8 bg-white">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={14} fill={s < t.rating ? GOLD : "none"} stroke={s < t.rating ? GOLD : "#ddd"} />
                ))}
              </div>
              <p className="text-sm font-sans leading-relaxed opacity-70 mb-4">"{t.text}"</p>
              <p className="text-xs font-sans font-semibold">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-20 px-6 text-center text-white" style={{ background: TEAL }}>
        <Mail size={28} className="mx-auto mb-4 opacity-80" />
        <h2 className="text-2xl md:text-3xl mb-3" style={{ fontFamily: "'Georgia', serif" }}>
          Join the Craft Circle
        </h2>
        <p className="text-sm font-sans opacity-60 max-w-md mx-auto mb-6">
          Get first access to new collections, studio events, and exclusive maker stories.
        </p>
        <div className="flex max-w-md mx-auto gap-2">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 px-5 py-3 rounded-full text-sm font-sans bg-white/10 border border-white/20 text-white placeholder:text-white/40 outline-none focus:border-white/50"
          />
          <button className="px-6 py-3 rounded-full text-sm font-sans font-medium bg-white hover:bg-white/90 transition-colors" style={{ color: TEAL }}>
            Subscribe
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12" style={{ background: DARK, color: `${CREAM}cc` }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 rounded-full" style={{ background: TEAL }} />
                <span className="text-sm font-bold tracking-wider uppercase" style={{ color: CREAM }}>BLUM</span>
              </div>
              <p className="text-xs font-sans leading-relaxed opacity-50">
                Handcrafted art & furniture for spaces that tell stories.
              </p>
            </div>
            {[
              { title: "Shop", links: ["All Products", "New Arrivals", "Collections", "Events"] },
              { title: "Company", links: ["About Us", "Our Artisans", "Sustainability", "Press"] },
              { title: "Support", links: ["FAQ", "Shipping", "Returns", "Contact"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-sans font-semibold tracking-wider uppercase mb-4" style={{ color: CREAM }}>
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l}>
                      <button className="text-xs font-sans opacity-50 hover:opacity-100 transition-opacity">{l}</button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: `${CREAM}15` }}>
            <p className="text-[10px] font-sans opacity-40">© 2026 Blum Crafts. All rights reserved.</p>
            <div className="flex gap-4 text-[10px] font-sans opacity-40">
              <span>Privacy</span>
              <span>Terms</span>
              <span>Cookies</span>
            </div>
          </div>
        </div>
      </footer>

      <UseTemplateButton templateName="Totem" />
    </div>
  );
}








