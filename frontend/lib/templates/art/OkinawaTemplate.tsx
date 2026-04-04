import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, ShoppingBag, Heart, Menu, ChevronLeft, ChevronRight, Truck, RotateCcw, Leaf, Star, ArrowRight, Mail } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";

const heroImg = "/assets/okinawa/hero.jpg";
const product1 = "/assets/okinawa/product1.jpg";
const product2 = "/assets/okinawa/product2.jpg";
const product3 = "/assets/okinawa/product3.jpg";
const product4 = "/assets/okinawa/product4.jpg";
const product5 = "/assets/okinawa/product5.jpg";
const product6 = "/assets/okinawa/product6.jpg";
const collection1 = "/assets/okinawa/collection1.jpg";
const collection2 = "/assets/okinawa/collection2.jpg";
const cherryImg = "/assets/okinawa/cherry.jpg";
const kimonoImg = "/assets/okinawa/kimono.jpg";

const CORAL = "#e8836b";
const CREAM = "#fdf6f0";
const DARK = "#2a1f1a";
const WARM_WHITE = "#fff9f5";

const collections = [
  { name: "Art Supplies", img: collection1 },
  { name: "Greeting Cards", img: collection2 },
  { name: "Origami", img: product3 },
  { name: "Paintings", img: product1 },
  { name: "Paper Supplies", img: product5 },
  { name: "Posters", img: product4 },
];

const products = [
  { img: product1, name: "Among the Blossoms", price: "CHF 950.00", tag: "" },
  { img: product2, name: "Animal Hobonichi Stamp Set", price: "CHF 25.00", tag: "" },
  { img: product3, name: "Ceramic Lucky Cat Figurine", price: "CHF 19.00", tag: "" },
  { img: product4, name: "Handmade Watercolours Set", price: "CHF 199.00", tag: "NEW" },
  { img: product5, name: "Cherry Blossom Rubber Stamp", price: "CHF 9.00", tag: "" },
  { img: product6, name: "Squirrel Travel Brushes", price: "CHF 199.00", tag: "" },
];

const specialOffer = [
  { img: product6, name: "Último Evolution Brush", price: "CHF 115.00", tag: "" },
  { img: product4, name: "Handmade Watercolours (10)", price: "CHF 199.00", tag: "" },
  { img: product5, name: "Soft Pastels Portrait Set", price: "CHF 89.00", tag: "" },
  { img: product1, name: "Soft Pastels – 36 Sticks", price: "CHF 250.00", oldPrice: "CHF 299.00", tag: "-17%" },
  { img: product2, name: "Heavy Body Acrylic Paint", price: "CHF 15.99", tag: "" },
  { img: product3, name: "Transparent Watercolours 24", price: "CHF 45.00", tag: "" },
];

const testimonials = [
  { name: "Sven", location: "Rotterdam, Netherlands", text: "I absolutely love Okinawa Art Supplies! The quality of their products is amazing. I ordered a watercolor set and a few sketch pads, and the materials are smooth, vibrant, and easy to work with.", rating: 5 },
  { name: "Vincent", location: "Geneva, Swiss", text: "What really impressed me was the care they take: packaging was secure, delivery was fast, and the items arrived in perfect condition.", rating: 5 },
  { name: "Marc", location: "Nice, France", text: "I appreciate the vibe of the shop: it feels like a small family‑run brand that cares about artistry, environment and customer happiness. I'll definitely order again.", rating: 5 },
];

const tabs = ["New products", "Special offer", "Best seller", "Popular"];

export default function OkinawaTemplate() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [marqueeOffset, setMarqueeOffset] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setMarqueeOffset((p) => p - 1), 30);
    return () => clearInterval(id);
  }, []);

  const activeProducts = activeTab === 1 ? specialOffer : products;

  return (
    <div style={{ background: CREAM, color: DARK }} className="min-h-screen">
      {/* Announcement Bar */}
      <div
        className="flex items-center justify-between px-6 md:px-12 py-2.5 text-xs"
        style={{ background: CORAL, color: "#fff", fontFamily: "'Courier New', monospace" }}
      >
        <span>Try before you buy - This weekend</span>
        <span className="hidden md:inline">+01 122 334 566</span>
        <span><strong>Free shipping</strong> on all orders over $50</span>
      </div>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-4" style={{ background: "transparent", position: "absolute", top: 40, left: 0, right: 0, zIndex: 20 }}>
        <div className="flex items-center gap-4">
          <button className="text-white hover:opacity-70 transition-opacity"><Menu size={22} /></button>
          <button className="text-white hover:opacity-70 transition-opacity"><Search size={20} /></button>
        </div>
        <h1
          className="text-2xl md:text-3xl text-white"
          style={{ fontFamily: "'Brush Script MT', 'Segoe Script', cursive", fontStyle: "italic" }}
        >
          Relax <span className="font-normal">Okinawa</span>
        </h1>
        <div className="flex items-center gap-4">
          <button className="text-white hover:opacity-70 transition-opacity hidden md:block"><User size={20} /></button>
          <button className="text-white hover:opacity-70 transition-opacity relative">
            <ShoppingBag size={20} />
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[85vh] overflow-hidden">
        <img src={heroImg} alt="Torii gate pathway" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center px-6">
          <h2
            className="text-4xl md:text-7xl text-white mb-6 leading-tight"
            style={{ fontFamily: "'Brush Script MT', 'Segoe Script', cursive" }}
          >
            Inspired by<br />Imagination
          </h2>
          <p className="text-sm md:text-base text-white/80 max-w-lg mb-8" style={{ fontFamily: "'Courier New', monospace" }}>
            Bring your ideas to life with quality art supplies designed to spark creativity and fuel your passion.
          </p>
          <button
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-medium text-white transition-all hover:scale-105"
            style={{ background: CORAL, fontFamily: "'Brush Script MT', 'Segoe Script', cursive", fontSize: "1.1rem" }}
          >
            shop now <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Featured Collection List */}
      <section className="py-10 px-6 md:px-12">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex-1 h-px" style={{ background: `${CORAL}40` }} />
          <h2
            className="text-xl md:text-2xl whitespace-nowrap"
            style={{ fontFamily: "'Brush Script MT', 'Segoe Script', cursive", color: CORAL }}
          >
            Featured collection list
          </h2>
          <div className="flex-1 h-px" style={{ background: `${CORAL}40` }} />
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {collections.map((col, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 w-40 md:w-48 cursor-pointer group snap-start"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden mb-3 bg-white shadow-sm">
                <img src={col.img} alt={col.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <p className="text-xs font-semibold text-center tracking-wide">{col.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Explore Store - Tabbed Products */}
      <section className="py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <h2
          className="text-2xl md:text-3xl text-center mb-2"
          style={{ fontFamily: "'Brush Script MT', 'Segoe Script', cursive" }}
        >
          Explore our store
        </h2>
        <div className="flex justify-center gap-6 mb-10 flex-wrap">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className="text-xs font-semibold tracking-wider uppercase py-2 transition-all"
              style={{
                borderBottom: activeTab === i ? `2px solid ${CORAL}` : "2px solid transparent",
                color: activeTab === i ? CORAL : `${DARK}80`,
              }}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {activeProducts.map((p, i) => (
            <motion.div
              key={`${activeTab}-${i}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group cursor-pointer"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-3 bg-white shadow-sm">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                {p.tag && (
                  <span
                    className="absolute top-3 left-3 text-[10px] font-bold tracking-wider px-3 py-1 rounded-full text-white"
                    style={{ background: p.tag.startsWith("-") ? CORAL : DARK }}
                  >
                    {p.tag}
                  </span>
                )}
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  <Heart size={14} style={{ color: CORAL }} />
                </button>
                <AnimatePresence>
                  {hovered === i && (
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute bottom-3 left-3 right-3 py-2.5 rounded-xl text-xs font-semibold tracking-wider text-white"
                      style={{ background: CORAL }}
                    >
                      Add to Cart
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
              <p className="text-[10px] opacity-40 mb-0.5" style={{ fontFamily: "'Courier New', monospace" }}>Relax Okinawa</p>
              <h3 className="text-sm font-medium mb-1">{p.name}</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">{p.price}</span>
                {"oldPrice" in p && p.oldPrice && <span className="text-xs line-through opacity-40">{(p as any).oldPrice}</span>}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fold Your Creativity */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="rounded-3xl overflow-hidden shadow-lg">
          <img src={cherryImg} alt="Cherry blossom" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2
            className="text-3xl md:text-4xl mb-4"
            style={{ fontFamily: "'Brush Script MT', 'Segoe Script', cursive" }}
          >
            Fold Your Creativity
          </h2>
          <p className="text-sm leading-relaxed opacity-60 mb-6" style={{ fontFamily: "'Courier New', monospace" }}>
            We are your destination for all things creative — offering a curated selection of paintings, art supplies, origami paper, craft papers, posters, stamps, and sculptures. Whether you're an artist, hobbyist, or collector, our shop brings together quality products and inspiring designs to fuel your imagination.
          </p>
          <button
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white transition-all hover:scale-105"
            style={{ background: CORAL }}
          >
            About us <ArrowRight size={14} />
          </button>
        </div>
      </section>

      {/* Scrolling Marquee */}
      <div className="py-5 overflow-hidden" style={{ background: `${CORAL}10` }}>
        <div className="whitespace-nowrap flex items-center" style={{ transform: `translateX(${marqueeOffset}px)` }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-8 mx-4">
              <span
                className="text-xl md:text-2xl tracking-wide"
                style={{ fontFamily: "'Brush Script MT', 'Segoe Script', cursive", color: CORAL }}
              >
                Color awaits
              </span>
              <span style={{ color: `${CORAL}40` }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <h2
          className="text-2xl md:text-3xl text-center mb-12"
          style={{ fontFamily: "'Brush Script MT', 'Segoe Script', cursive" }}
        >
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl p-6 md:p-8 bg-white shadow-sm">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={14} fill={s < t.rating ? CORAL : "none"} stroke={s < t.rating ? CORAL : "#ddd"} />
                ))}
              </div>
              <p className="text-sm leading-relaxed opacity-70 mb-6" style={{ fontFamily: "'Courier New', monospace" }}>
                "{t.text}"
              </p>
              <p className="text-sm font-semibold">{t.name}</p>
              <p className="text-xs opacity-40">{t.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Art That Speaks Banner */}
      <section className="relative h-[50vh] overflow-hidden">
        <img src={kimonoImg} alt="Japanese kimono textile" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-6">
          <h2
            className="text-3xl md:text-5xl text-white mb-4"
            style={{ fontFamily: "'Brush Script MT', 'Segoe Script', cursive" }}
          >
            Art That Speaks
          </h2>
          <p className="text-sm text-white/70 max-w-md mb-6" style={{ fontFamily: "'Courier New', monospace" }}>
            Bring your walls to life with stunning paintings that inspire every day.
          </p>
          <button
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white transition-all hover:scale-105"
            style={{ background: CORAL }}
          >
            shop now <ArrowRight size={14} />
          </button>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 px-6" style={{ background: WARM_WHITE }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: Truck, title: "Free shipping", desc: "anywhere" },
            { icon: RotateCcw, title: "30 day free", desc: "returns" },
            { icon: Leaf, title: "Environmentally", desc: "friendly" },
          ].map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <Icon size={24} style={{ color: CORAL }} strokeWidth={1.5} />
              <p className="text-sm font-semibold">{title}</p>
              <p className="text-xs opacity-50">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-20 px-6 text-center" style={{ background: CORAL }}>
        <Mail size={28} className="mx-auto mb-4 text-white" />
        <h2
          className="text-2xl md:text-3xl mb-3 text-white"
          style={{ fontFamily: "'Brush Script MT', 'Segoe Script', cursive" }}
        >
          Subscribe to our emails
        </h2>
        <p className="text-sm text-white/70 max-w-md mx-auto mb-6" style={{ fontFamily: "'Courier New', monospace" }}>
          Your information is safe and secure with us.
        </p>
        <div className="flex max-w-md mx-auto gap-2">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-5 py-3 rounded-xl text-sm bg-white/20 border border-white/30 text-white placeholder-white/50 outline-none focus:border-white/60"
          />
          <button className="px-6 py-3 rounded-xl text-sm font-medium bg-white" style={{ color: CORAL }}>
            Subscribe
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12" style={{ background: DARK, color: `${CREAM}cc` }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div>
              <h3
                className="text-xl mb-4"
                style={{ fontFamily: "'Brush Script MT', 'Segoe Script', cursive", color: CREAM }}
              >
                Relax Okinawa
              </h3>
              <p className="text-xs leading-relaxed opacity-50" style={{ fontFamily: "'Courier New', monospace" }}>
                Your destination for Japanese-inspired art supplies and creative tools.
              </p>
            </div>
            {[
              { title: "Shop", links: ["Art Supplies", "Paintings", "Origami", "Posters"] },
              { title: "About", links: ["Our Story", "Artisans", "Blog", "Press"] },
              { title: "Help", links: ["FAQ", "Shipping", "Returns", "Contact"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-semibold tracking-wider uppercase mb-4" style={{ color: CREAM }}>
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l}>
                      <button className="text-xs opacity-50 hover:opacity-100 transition-opacity">{l}</button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: `${CREAM}15` }}>
            <p className="text-[10px] opacity-40">© 2026 Relax Okinawa. All rights reserved.</p>
            <div className="flex gap-4 text-[10px] opacity-40">
              <span>Privacy</span>
              <span>Terms</span>
              <span>Cookies</span>
            </div>
          </div>
        </div>
      </footer>

      <UseTemplateButton templateName="Okinawa" />
    </div>
  );
}








