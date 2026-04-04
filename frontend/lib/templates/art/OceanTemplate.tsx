import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ShoppingBag, Search, User, ChevronLeft, ChevronRight, Star, Truck, ShieldCheck, RefreshCw, Heart } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";

const hero1 = "/assets/ocean/hero1.jpg";
const hero2 = "/assets/ocean/hero2.jpg";
const product1 = "/assets/ocean/product1.jpg";
const product2 = "/assets/ocean/product2.jpg";
const product3 = "/assets/ocean/product3.jpg";
const product4 = "/assets/ocean/product4.jpg";
const product5 = "/assets/ocean/product5.jpg";
const product6 = "/assets/ocean/product6.jpg";

/* ── palette ── */
const MINT = "#d4edda";
const DARK = "#1a2a2a";
const CREAM = "#faf9f6";
const TEAL = "#3a8a7a";
const SAND = "#f5f0e8";

const NAV_LINKS = ["New", "Sale", "Paintings", "Cards & Prints", "Ceramics", "Our Story", "Blog"];

const heroSlides = [
  { img: hero1, sub: "Hit the right notes", title: "Making\nyour mark", cta: "Shop Now" },
  { img: hero1, sub: "New collection", title: "Ocean\nDreams", cta: "Explore" },
  { img: hero1, sub: "Limited edition", title: "Coastal\nVibes", cta: "Discover" },
];

const products = [
  { img: product1, name: "Tidal Watercolour", type: "Art Print", price: "£45.00", sale: "", badge: "" },
  { img: product2, name: "Little Whale Card", type: "Greeting Card", price: "£3.00", sale: "", badge: "NEW" },
  { img: product3, name: "Wave Coaster Set", type: "Ceramics", price: "£28.00", sale: "£22.00", badge: "SALE" },
  { img: product4, name: "Coral Fan Print", type: "Art Print", price: "£38.00", sale: "", badge: "" },
  { img: product5, name: "Ocean Journal", type: "Stationery", price: "£18.00", sale: "", badge: "NEW" },
  { img: product6, name: "Seashell Postcards", type: "Card Set", price: "£12.00", sale: "", badge: "" },
];

const categories = [
  { name: "Paintings", count: 24, img: product1 },
  { name: "Cards & Prints", count: 36, img: product4 },
  { name: "Ceramics", count: 18, img: product3 },
];

const reviews = [
  { name: "Kai N.", rating: 5, text: "The seascape print brings the ocean right into our living room. Absolutely stunning quality." },
  { name: "Marina S.", rating: 5, text: "Their ceramics are like holding the sea in your hands. Beautiful craftsmanship." },
  { name: "Dylan W.", rating: 4, text: "The surf art perfectly captures the energy of the waves. Love my new piece!" },
];

const ff = (s: string) => ({ fontFamily: s });
const SERIF = "'Georgia', 'Times New Roman', serif";
const SANS = "'Helvetica Neue', Arial, sans-serif";

export default function OceanTemplate() {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + heroSlides.length) % heroSlides.length);
  const next = () => setCurrent((p) => (p + 1) % heroSlides.length);

  return (
    <div style={{ background: CREAM, color: DARK, ...ff(SANS) }}>
      {/* ── Announcement bar ── */}
      <div style={{ background: MINT }} className="text-center py-2.5 text-sm tracking-wide" {...ff(SANS)}>
        Free delivery on orders over £30
      </div>

      {/* ── Navbar ── */}
      <header className="border-b" style={{ borderColor: "#e8e4dc" }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <button className="flex items-center gap-2 text-sm" style={{ color: TEAL }}>
            <Mail className="w-4 h-4" /> Get Updates
          </button>
          <h1 className="text-3xl font-bold tracking-tight" style={{ ...ff(SERIF), color: DARK }}>Ocean</h1>
          <div className="flex items-center gap-4">
            <button><User className="w-5 h-5" style={{ color: DARK }} /></button>
            <button><Search className="w-5 h-5" style={{ color: DARK }} /></button>
            <button className="relative"><ShoppingBag className="w-5 h-5" style={{ color: DARK }} /><span className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-[10px] flex items-center justify-center text-white" style={{ background: TEAL }}>0</span></button>
          </div>
        </div>
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-8 pb-3">
          {NAV_LINKS.map((l) => (
            <button key={l} className="text-sm hover:opacity-70 transition-opacity" style={{ color: DARK }}>{l}</button>
          ))}
        </nav>
      </header>

      {/* ── Split Hero ── */}
      <section className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid md:grid-cols-[2fr_1fr] gap-4" style={{ minHeight: 480 }}>
          {/* Main slideshow */}
          <div className="relative rounded-xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={heroSlides[current].img}
                alt=""
                className="w-full h-full object-cover absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
            <div className="relative z-10 p-10 md:p-14 flex flex-col justify-end h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-${current}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-sm font-medium text-white/80 mb-1">{heroSlides[current].sub}</p>
                  <h2 className="text-4xl md:text-5xl font-bold text-white whitespace-pre-line leading-tight mb-6" style={ff(SERIF)}>
                    {heroSlides[current].title}
                  </h2>
                  <button className="px-7 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105" style={{ background: TEAL, color: "white" }}>
                    {heroSlides[current].cta}
                  </button>
                </motion.div>
              </AnimatePresence>
              {/* Dots */}
              <div className="flex gap-2 mt-6">
                {heroSlides.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)} className="w-2.5 h-2.5 rounded-full transition-all" style={{ background: i === current ? "white" : "rgba(255,255,255,0.4)" }} />
                ))}
              </div>
            </div>
            {/* Arrows */}
            <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center hover:bg-white transition">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center hover:bg-white transition">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          {/* Side image */}
          <div className="hidden md:block rounded-xl overflow-hidden">
            <img src={hero2} alt="Studio display" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ── Welcome + New Arrivals ── */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={ff(SERIF)}>Welcome to the pint-sized department store!</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
              Our team is small but perfectly formed! We stock all the best things — cards, gifts, homewares, stationery, art prints, ceramics, you name it. Everything is carefully curated to bring a little joy to your day.
            </p>
            <button className="mt-6 text-sm font-semibold underline underline-offset-4" style={{ color: TEAL }}>Learn more →</button>
          </div>
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold" style={ff(SERIF)}>New Arrivals</h3>
              <button className="text-sm font-medium flex items-center gap-1" style={{ color: TEAL }}>See all <ChevronRight className="w-4 h-4" /></button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {products.slice(0, 4).map((p, i) => (
                <div
                  key={i}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="relative rounded-lg overflow-hidden mb-3 aspect-[3/4]" style={{ background: SAND }}>
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    {p.badge && (
                      <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold text-white" style={{ background: p.badge === "SALE" ? "#d94f4f" : TEAL }}>
                        {p.badge}
                      </span>
                    )}
                    <AnimatePresence>
                      {hovered === i && (
                        <motion.button
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute bottom-3 left-3 right-3 py-2.5 rounded-full text-xs font-semibold text-white"
                          style={{ background: TEAL }}
                        >
                          Add to Cart
                        </motion.button>
                      )}
                    </AnimatePresence>
                    <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="w-4 h-4" style={{ color: DARK }} />
                    </button>
                  </div>
                  <p className="text-xs" style={{ color: "#999" }}>{p.type}</p>
                  <p className="text-sm font-medium mt-0.5">{p.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    {p.sale ? (
                      <>
                        <span className="text-sm font-semibold" style={{ color: "#d94f4f" }}>{p.sale}</span>
                        <span className="text-xs line-through" style={{ color: "#999" }}>{p.price}</span>
                      </>
                    ) : (
                      <span className="text-sm">{p.price}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Shop by Category ── */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={ff(SERIF)}>Shop by Category</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="relative rounded-xl overflow-hidden cursor-pointer group"
              style={{ height: 320 }}
            >
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white" style={ff(SERIF)}>{cat.name}</h3>
                <p className="text-white/70 text-sm mt-1">{cat.count} items</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Full Product Grid ── */}
      <section style={{ background: SAND }} className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={ff(SERIF)}>Featured Collection</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <div
                key={i}
                className="group cursor-pointer"
                onMouseEnter={() => setHovered(100 + i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="relative rounded-lg overflow-hidden mb-3 aspect-square" style={{ background: CREAM }}>
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  {p.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded text-[10px] font-bold text-white" style={{ background: p.badge === "SALE" ? "#d94f4f" : TEAL }}>
                      {p.badge}
                    </span>
                  )}
                  <AnimatePresence>
                    {hovered === 100 + i && (
                      <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute bottom-4 left-4 right-4 py-3 rounded-full text-sm font-semibold text-white"
                        style={{ background: TEAL }}
                      >
                        Add to Cart
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
                <p className="text-xs" style={{ color: "#999" }}>{p.type}</p>
                <p className="text-sm font-semibold mt-1">{p.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  {p.sale ? (
                    <>
                      <span className="text-sm font-semibold" style={{ color: "#d94f4f" }}>{p.sale}</span>
                      <span className="text-xs line-through" style={{ color: "#999" }}>{p.price}</span>
                    </>
                  ) : (
                    <span className="text-sm">{p.price}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust badges ── */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-3 gap-8 text-center">
          {[
            { icon: Truck, label: "Free Shipping", desc: "On orders over £30" },
            { icon: ShieldCheck, label: "Secure Checkout", desc: "SSL encrypted payments" },
            { icon: RefreshCw, label: "Easy Returns", desc: "30-day return policy" },
          ].map(({ icon: Icon, label, desc }, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: MINT }}>
                <Icon className="w-5 h-5" style={{ color: TEAL }} />
              </div>
              <h4 className="text-sm font-semibold">{label}</h4>
              <p className="text-xs" style={{ color: "#999" }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Reviews ── */}
      <section style={{ background: SAND }} className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={ff(SERIF)}>What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="rounded-xl p-6" style={{ background: CREAM }}>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4" fill={j < r.rating ? "#e8b84b" : "none"} stroke={j < r.rating ? "#e8b84b" : "#ccc"} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#555" }}>"{r.text}"</p>
                <p className="text-xs font-semibold">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="py-16" style={{ background: TEAL }}>
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={ff(SERIF)}>Stay in the Loop</h2>
          <p className="text-white/70 text-sm mb-6">Subscribe for new arrivals, exclusive offers, and ocean-inspired inspiration.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-full text-sm outline-none"
              style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}
            />
            <button className="px-6 py-3 rounded-full text-sm font-semibold" style={{ background: "white", color: TEAL }}>Subscribe</button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-14 border-t" style={{ background: CREAM, borderColor: "#e8e4dc" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={ff(SERIF)}>Ocean</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#888" }}>A curated collection of ocean-inspired art, stationery, and homewares.</p>
            </div>
            {[
              { title: "Shop", links: ["New Arrivals", "Paintings", "Cards & Prints", "Ceramics", "Sale"] },
              { title: "About", links: ["Our Story", "Blog", "Press", "Stockists"] },
              { title: "Help", links: ["Shipping", "Returns", "FAQ", "Contact"] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="text-sm font-semibold mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l}><button className="text-sm hover:opacity-70 transition-opacity" style={{ color: "#888" }}>{l}</button></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-6 border-t flex items-center justify-between text-xs" style={{ borderColor: "#e8e4dc", color: "#999" }}>
            <span>© 2026 Ocean. All rights reserved.</span>
            <div className="flex gap-4">
              <button className="hover:opacity-70">Privacy</button>
              <button className="hover:opacity-70">Terms</button>
            </div>
          </div>
        </div>
      </footer>

      <UseTemplateButton templateName="Ocean" />
    </div>
  );
}








