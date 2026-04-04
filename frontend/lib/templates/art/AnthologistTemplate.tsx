import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Heart, Search, Menu, ChevronLeft, ChevronRight, Star, Truck, ShieldCheck, RefreshCw, Mail } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";

const heroImg = "/assets/anthologist/hero.jpg";
const product1 = "/assets/anthologist/product1.jpg";
const product2 = "/assets/anthologist/product2.jpg";
const product3 = "/assets/anthologist/product3.jpg";
const product4 = "/assets/anthologist/product4.jpg";
const product5 = "/assets/anthologist/product5.jpg";
const product6 = "/assets/anthologist/product6.jpg";
const lifestyleImg = "/assets/anthologist/lifestyle.jpg";

const PINK = "#f5b5b5";
const CORAL = "#f07070";
const CREAM = "#fdf6f0";
const DARK = "#2a1f14";
const SAGE = "#8a9a7a";

const navLinks = ["Catalog", "News", "About us", "Contact"];

const products = [
  { img: product1, name: "Anemone Watercolor Print", price: "$48.00", tag: "NEW" },
  { img: product2, name: "Dried Wildflower Bouquet", price: "$62.00", oldPrice: "$78.00", tag: "SALE" },
  { img: product3, name: "Botanical Illustration Book", price: "$35.00", tag: "" },
  { img: product4, name: "Flora Ceramic Bowl", price: "$44.00", tag: "" },
  { img: product5, name: "Glass Fern Vase", price: "$28.00", tag: "NEW" },
  { img: product6, name: "Pressed Flower Frame", price: "$96.00", tag: "" },
];

const collections = [
  { name: "Botanical Prints", count: 24, img: product1 },
  { name: "Dried Florals", count: 18, img: product2 },
  { name: "Ceramics", count: 12, img: product4 },
];

const testimonials = [
  { name: "Helena R.", text: "Every piece tells a story. The curation is impeccable — scholarly yet accessible.", rating: 5 },
  { name: "Marcus T.", text: "The botanical prints arrived beautifully packaged. Museum-quality presentation.", rating: 5 },
  { name: "Ingrid P.", text: "I've been collecting from Kentia for two years. Each piece grows more meaningful.", rating: 4 },
];

export default function AnthologistTemplate() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [heroSlide, setHeroSlide] = useState(0);

  const heroSlides = [
    { title: "The best thing since\nplastic flowers", cta: "Browse our collections" },
    { title: "Curated botanicals\nfor every space", cta: "Shop new arrivals" },
    { title: "Art that grows\nwith you", cta: "Explore the catalog" },
  ];

  return (
    <div style={{ background: CREAM, color: DARK, fontFamily: "'Georgia', 'Times New Roman', serif" }} className="min-h-screen">
      {/* Announcement Bar */}
      <div style={{ background: CORAL }} className="text-white text-center text-xs py-2 tracking-widest uppercase">
        Free shipping on orders over $75 · Use code BLOOM at checkout
      </div>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-4" style={{ background: CREAM }}>
        <div className="flex items-center gap-6">
          {navLinks.map((l) => (
            <button key={l} className="hidden md:block text-sm hover:opacity-60 transition-opacity" style={{ color: DARK }}>
              {l}
            </button>
          ))}
          <button className="md:hidden"><Menu size={20} /></button>
        </div>
        <h1 className="text-3xl md:text-4xl font-normal tracking-wide" style={{ fontFamily: "'Georgia', serif" }}>
          Kentia
        </h1>
        <div className="flex items-center gap-4">
          <button className="hover:opacity-60 transition-opacity"><Search size={18} /></button>
          <button className="hover:opacity-60 transition-opacity relative">
            <ShoppingBag size={18} />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-[10px] text-white flex items-center justify-center" style={{ background: CORAL }}>2</span>
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: PINK }}>
        <div className="relative h-[70vh] md:h-[85vh]">
          <img src={heroImg} alt="Botanical arrangement" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={heroSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-6xl leading-tight text-white whitespace-pre-line" style={{ fontFamily: "'Georgia', serif", textShadow: "0 2px 20px rgba(0,0,0,0.2)" }}>
                  {heroSlides[heroSlide].title}
                </h2>
                <button
                  className="mt-8 px-8 py-3 rounded-full text-sm font-sans font-medium tracking-wide text-white hover:brightness-110 transition-all"
                  style={{ background: CORAL }}
                >
                  {heroSlides[heroSlide].cta}
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Hero nav arrows */}
          <button
            onClick={() => setHeroSlide((p) => (p - 1 + heroSlides.length) % heroSlides.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center hover:bg-white/50 transition-colors"
          >
            <ChevronLeft size={20} className="text-white" />
          </button>
          <button
            onClick={() => setHeroSlide((p) => (p + 1) % heroSlides.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center hover:bg-white/50 transition-colors"
          >
            <ChevronRight size={20} className="text-white" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setHeroSlide(i)}
                className="w-2 h-2 rounded-full transition-all"
                style={{ background: i === heroSlide ? "white" : "rgba(255,255,255,0.4)" }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl text-center mb-12" style={{ fontFamily: "'Georgia', serif" }}>
          Our best sellers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {products.map((p, i) => (
            <motion.div
              key={i}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredProduct(i)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-3">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                {p.tag && (
                  <span
                    className="absolute top-3 left-3 text-[10px] font-sans font-semibold tracking-wider px-2.5 py-1 rounded-full text-white"
                    style={{ background: p.tag === "SALE" ? CORAL : SAGE }}
                  >
                    {p.tag}
                  </span>
                )}
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white">
                  <Heart size={14} style={{ color: CORAL }} />
                </button>
                <AnimatePresence>
                  {hoveredProduct === i && (
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute bottom-3 left-3 right-3 py-2.5 rounded-full text-xs font-sans font-semibold text-white tracking-wide"
                      style={{ background: CORAL }}
                    >
                      Add to Cart
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
              <h3 className="text-sm md:text-base mb-1">{p.name}</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm font-sans" style={{ color: CORAL }}>{p.price}</span>
                {p.oldPrice && (
                  <span className="text-xs font-sans line-through opacity-40">{p.oldPrice}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="px-8 py-3 rounded-full text-sm font-sans tracking-wide border-2 hover:text-white transition-all" style={{ borderColor: CORAL, color: CORAL }} onMouseEnter={e => { e.currentTarget.style.background = CORAL; e.currentTarget.style.color = 'white'; }} onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = CORAL; }}>
            View all products
          </button>
        </div>
      </section>

      {/* Lifestyle Banner */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img src={lifestyleImg} alt="Botanical lifestyle" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center px-6">
          <p className="text-white/80 text-xs font-sans tracking-[0.3em] uppercase mb-4">The Collection</p>
          <h2 className="text-3xl md:text-5xl text-white" style={{ fontFamily: "'Georgia', serif" }}>
            Where nature meets art
          </h2>
          <button className="mt-6 px-8 py-3 rounded-full text-sm font-sans tracking-wide bg-white hover:bg-white/90 transition-colors" style={{ color: DARK }}>
            Explore the story
          </button>
        </div>
      </section>

      {/* Shop by Collection */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl text-center mb-12" style={{ fontFamily: "'Georgia', serif" }}>
          Shop by collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((col, i) => (
            <motion.div
              key={i}
              className="group cursor-pointer relative aspect-[4/5] rounded-xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img src={col.img} alt={col.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl text-white mb-1" style={{ fontFamily: "'Georgia', serif" }}>{col.name}</h3>
                <p className="text-white/70 text-xs font-sans">{col.count} items</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-t border-b" style={{ borderColor: `${DARK}10` }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 text-center">
          {[
            { icon: Truck, title: "Free Shipping", desc: "On orders over $75" },
            { icon: ShieldCheck, title: "Secure Payment", desc: "100% encrypted checkout" },
            { icon: RefreshCw, title: "Easy Returns", desc: "30-day return policy" },
          ].map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <Icon size={24} style={{ color: CORAL }} strokeWidth={1.5} />
              <h4 className="text-sm font-sans font-semibold">{title}</h4>
              <p className="text-xs font-sans opacity-50">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl text-center mb-12" style={{ fontFamily: "'Georgia', serif" }}>
          What our collectors say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-xl p-6 md:p-8" style={{ background: "white" }}>
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={14} fill={s < t.rating ? "#f5c542" : "none"} stroke={s < t.rating ? "#f5c542" : "#ddd"} />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-4 opacity-70 font-sans">"{t.text}"</p>
              <p className="text-xs font-sans font-semibold">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-20 px-6 text-center" style={{ background: PINK }}>
        <Mail size={28} className="mx-auto mb-4" style={{ color: CORAL }} />
        <h2 className="text-2xl md:text-3xl mb-3" style={{ fontFamily: "'Georgia', serif" }}>
          Join the anthology
        </h2>
        <p className="text-sm font-sans opacity-60 max-w-md mx-auto mb-6">
          Be the first to discover new collections, botanical stories, and exclusive offers.
        </p>
        <div className="flex max-w-md mx-auto gap-2">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-5 py-3 rounded-full text-sm font-sans bg-white border-none outline-none"
            style={{ color: DARK }}
          />
          <button className="px-6 py-3 rounded-full text-sm font-sans font-medium text-white" style={{ background: CORAL }}>
            Subscribe
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12" style={{ background: DARK, color: `${CREAM}cc` }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div>
              <h3 className="text-lg mb-4" style={{ fontFamily: "'Georgia', serif", color: CREAM }}>Kentia</h3>
              <p className="text-xs font-sans leading-relaxed opacity-60">
                Curated botanical art & home décor for the discerning collector.
              </p>
            </div>
            {[
              { title: "Shop", links: ["All Products", "New Arrivals", "Best Sellers", "Sale"] },
              { title: "About", links: ["Our Story", "Artists", "Sustainability", "Press"] },
              { title: "Help", links: ["FAQ", "Shipping", "Returns", "Contact"] },
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
            <p className="text-[10px] font-sans opacity-40">© 2026 Kentia. All rights reserved.</p>
            <div className="flex gap-4 text-[10px] font-sans opacity-40">
              <span>Privacy</span>
              <span>Terms</span>
              <span>Cookies</span>
            </div>
          </div>
        </div>
      </footer>

      <UseTemplateButton templateName="Anthologist" />
    </div>
  );
}








