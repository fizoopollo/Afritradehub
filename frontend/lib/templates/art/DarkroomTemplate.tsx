import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, ShoppingCart, Heart, Truck, HeartHandshake, ShieldCheck, Sparkles, ChevronDown, Star, Mail } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";

const heroImg = "/assets/darkroom/hero.jpg";
const poster1 = "/assets/darkroom/poster1.jpg";
const poster2 = "/assets/darkroom/poster2.jpg";
const poster3 = "/assets/darkroom/poster3.jpg";
const poster4 = "/assets/darkroom/poster4.jpg";
const poster5 = "/assets/darkroom/poster5.jpg";
const poster6 = "/assets/darkroom/poster6.jpg";

const BG = "#0a0a0a";
const SURFACE = "#141414";
const ACCENT_PINK = "#e84393";
const ACCENT_PURPLE = "#6c5ce7";
const TEXT = "#f0f0f0";
const TEXT_MUTED = "#888";

const navLinks = ["Posters", "Collections", "Pages", "Inspiration", "Blog", "Features"];

const trustBadges = [
  { icon: Truck, text: "Fast & free delivery" },
  { icon: HeartHandshake, text: "Satisfaction guaranteed" },
  { icon: ShieldCheck, text: "Buy with confidence" },
  { icon: Sparkles, text: "Rated excellent" },
];

const products = [
  { img: poster1, name: "Neon Metropolis", price: "$34.95", tag: "" },
  { img: poster2, name: "Cosmic Arrival", price: "$29.95", tag: "BESTSELLER" },
  { img: poster3, name: "Night Watcher", price: "$34.95", oldPrice: "$44.95", tag: "SALE" },
  { img: poster4, name: "Synthwave Sunset", price: "$24.95", tag: "" },
  { img: poster5, name: "Chrome Entity", price: "$39.95", tag: "NEW" },
  { img: poster6, name: "Digital Fragments", price: "$27.95", tag: "" },
];

const collections = [
  { name: "Sci-Fi", count: 42, img: poster1 },
  { name: "Synthwave", count: 28, img: poster4 },
  { name: "Cyberpunk", count: 35, img: poster3 },
  { name: "Abstract", count: 19, img: poster6 },
];

const testimonials = [
  { name: "Ansel C.", text: "Print quality is insane — the colors pop even more in person. My wall is now a gallery.", rating: 5 },
  { name: "Diana K.", text: "Fast delivery, perfect packaging. The poster arrived flawless.", rating: 5 },
  { name: "Hiroshi T.", text: "Been ordering from Artiflex for a year. Never disappointed, always impressed.", rating: 5 },
];

export default function DarkroomTemplate() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div style={{ background: BG, color: TEXT }} className="min-h-screen font-sans">
      {/* Gradient Announcement Bar */}
      <div
        className="text-center py-2 text-xs tracking-wide"
        style={{ background: `linear-gradient(90deg, ${ACCENT_PINK}, ${ACCENT_PURPLE}, ${ACCENT_PINK})` }}
      >
        🔥 Don't Miss Out: Shop Summer Sale Now →
      </div>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-4" style={{ background: SURFACE }}>
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-black tracking-[0.15em] uppercase">ARTIFLEX</h1>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <button key={l} className="text-sm hover:text-white/60 transition-colors flex items-center gap-1" style={{ color: TEXT_MUTED }}>
                {l}
                {(l === "Posters" || l === "Collections" || l === "Pages") && <ChevronDown size={12} />}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="hover:opacity-60 transition-opacity"><Search size={18} /></button>
          <button className="hover:opacity-60 transition-opacity hidden md:block"><User size={18} /></button>
          <button className="hover:opacity-60 transition-opacity"><ShoppingCart size={18} /></button>
        </div>
      </nav>

      {/* Trust Bar */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-12 py-3 border-b" style={{ background: SURFACE, borderColor: "#222" }}>
        {trustBadges.map(({ icon: Icon, text }, i) => (
          <div key={i} className="flex items-center gap-2 text-xs" style={{ color: TEXT_MUTED }}>
            <Icon size={14} />
            <span>{text}</span>
          </div>
        ))}
      </div>

      {/* Hero */}
      <section className="relative">
        <div className="relative h-[60vh] md:h-[75vh] overflow-hidden">
          <img src={heroImg} alt="Art posters on dark wall" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col items-center justify-end pb-16 text-center px-6">
            <h2 className="text-3xl md:text-6xl font-light mb-6" style={{ fontFamily: "'Georgia', serif" }}>
              Find your future
            </h2>
            <button
              className="px-8 py-3 rounded-sm text-sm font-medium border border-white/40 hover:bg-white hover:text-black transition-all"
            >
              Shop all posters
            </button>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl text-center mb-10" style={{ fontFamily: "'Georgia', serif" }}>
          Browse Collections
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {collections.map((col, i) => (
            <motion.div
              key={i}
              className="group cursor-pointer relative aspect-[3/4] rounded-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img src={col.img} alt={col.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-lg font-semibold">{col.name}</h3>
                <p className="text-xs" style={{ color: TEXT_MUTED }}>{col.count} posters</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gradient Divider / Marquee */}
      <div
        className="py-4 text-center text-sm font-medium tracking-widest uppercase"
        style={{ background: `linear-gradient(90deg, ${ACCENT_PURPLE}, ${ACCENT_PINK}, ${ACCENT_PURPLE})` }}
      >
        ✦ New Arrivals Every Week ✦ Free Shipping Over $50 ✦ Premium Print Quality ✦
      </div>

      {/* Featured Posters */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl" style={{ fontFamily: "'Georgia', serif" }}>
            Trending Posters
          </h2>
          <button className="text-sm underline underline-offset-4 hover:opacity-60 transition-opacity" style={{ color: TEXT_MUTED }}>
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
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-3" style={{ background: SURFACE }}>
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {p.tag && (
                  <span
                    className="absolute top-3 left-3 text-[10px] font-bold tracking-wider px-3 py-1 rounded-full text-white"
                    style={{ background: p.tag === "SALE" ? ACCENT_PINK : p.tag === "BESTSELLER" ? ACCENT_PURPLE : "#333" }}
                  >
                    {p.tag}
                  </span>
                )}
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart size={14} style={{ color: ACCENT_PINK }} />
                </button>
                <AnimatePresence>
                  {hovered === i && (
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute bottom-3 left-3 right-3 py-2.5 rounded-lg text-xs font-semibold text-white"
                      style={{ background: `linear-gradient(90deg, ${ACCENT_PINK}, ${ACCENT_PURPLE})` }}
                    >
                      Add to Cart
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
              <h3 className="text-sm font-medium mb-1">{p.name}</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold" style={{ color: ACCENT_PINK }}>{p.price}</span>
                {p.oldPrice && <span className="text-xs line-through" style={{ color: TEXT_MUTED }}>{p.oldPrice}</span>}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl text-center mb-12" style={{ fontFamily: "'Georgia', serif" }}>
          What Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-xl p-6 md:p-8" style={{ background: SURFACE }}>
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={14} fill={s < t.rating ? ACCENT_PINK : "none"} stroke={s < t.rating ? ACCENT_PINK : "#333"} />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: TEXT_MUTED }}>"{t.text}"</p>
              <p className="text-xs font-semibold">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section
        className="py-16 md:py-20 px-6 text-center"
        style={{ background: `linear-gradient(135deg, ${ACCENT_PURPLE}22, ${ACCENT_PINK}22)` }}
      >
        <Mail size={28} className="mx-auto mb-4" style={{ color: ACCENT_PINK }} />
        <h2 className="text-2xl md:text-3xl mb-3" style={{ fontFamily: "'Georgia', serif" }}>
          Join the Dark Side
        </h2>
        <p className="text-sm max-w-md mx-auto mb-6" style={{ color: TEXT_MUTED }}>
          Get exclusive drops, limited editions, and 10% off your first order.
        </p>
        <div className="flex max-w-md mx-auto gap-2">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 px-5 py-3 rounded-lg text-sm bg-white/5 border border-white/10 text-white placeholder:text-white/30 outline-none focus:border-white/30"
          />
          <button
            className="px-6 py-3 rounded-lg text-sm font-medium text-white"
            style={{ background: `linear-gradient(90deg, ${ACCENT_PINK}, ${ACCENT_PURPLE})` }}
          >
            Subscribe
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12" style={{ background: SURFACE }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div>
              <h3 className="text-lg font-black tracking-[0.15em] uppercase mb-4">ARTIFLEX</h3>
              <p className="text-xs leading-relaxed" style={{ color: TEXT_MUTED }}>
                Premium retro-futuristic art prints for walls that demand attention.
              </p>
            </div>
            {[
              { title: "Shop", links: ["All Posters", "New Arrivals", "Best Sellers", "Sale"] },
              { title: "Info", links: ["About", "Inspiration", "Blog", "Careers"] },
              { title: "Help", links: ["FAQ", "Shipping", "Returns", "Contact"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-semibold tracking-wider uppercase mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l}>
                      <button className="text-xs hover:text-white transition-colors" style={{ color: TEXT_MUTED }}>{l}</button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: "#222" }}>
            <p className="text-[10px]" style={{ color: TEXT_MUTED }}>© 2026 Artiflex. All rights reserved.</p>
            <div className="flex gap-4 text-[10px]" style={{ color: TEXT_MUTED }}>
              <span>Privacy</span>
              <span>Terms</span>
              <span>Cookies</span>
            </div>
          </div>
        </div>
      </footer>

      <UseTemplateButton templateName="Darkroom" />
    </div>
  );
}








