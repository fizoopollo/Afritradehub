import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Search, User, ShoppingBag, ChevronRight, Star } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";

const hero1 = "/assets/wrong/hero1.jpg";
const hero2 = "/assets/wrong/hero2.jpg";
const hero3 = "/assets/wrong/hero3.jpg";
const cat1 = "/assets/wrong/cat1.jpg";
const cat2 = "/assets/wrong/cat2.jpg";
const cat3 = "/assets/wrong/cat3.jpg";
const product1 = "/assets/wrong/product1.jpg";
const product2 = "/assets/wrong/product2.jpg";
const product3 = "/assets/wrong/product3.jpg";
const product4 = "/assets/wrong/product4.jpg";
const product5 = "/assets/wrong/product5.jpg";
const product6 = "/assets/wrong/product6.jpg";

const BG = "#f5f0eb";
const DARK = "#111111";

const slides = [
  { image: hero1, title: "PRIME", subtitle: "FIGURES", desc: "Unique pieces curated for collectors who care about the details." },
  { image: hero2, title: "RARE", subtitle: "KICKS", desc: "Limited edition sneakers and art collaborations." },
  { image: hero3, title: "POP", subtitle: "ICONS", desc: "Bold collectibles that challenge the ordinary." },
];

const categories = [
  { name: "Street Art", image: cat1, count: 48 },
  { name: "Collectibles", image: cat2, count: 124 },
  { name: "Print Editions", image: cat3, count: 67 },
];

const products = [
  { name: "Crimson Fox", image: product1, price: "$420", originalPrice: "$520", badge: "SALE" },
  { name: "Neon Skull", image: product2, price: "$380", originalPrice: "", badge: "" },
  { name: "Chrome Loop", image: product3, price: "$1,200", originalPrice: "", badge: "LIMITED" },
  { name: "Drip Cat", image: product4, price: "$290", originalPrice: "", badge: "NEW" },
  { name: "Golden Muse", image: product5, price: "$680", originalPrice: "", badge: "" },
  { name: "Blob Party", image: product6, price: "$340", originalPrice: "$400", badge: "SALE" },
];

function CountdownBar() {
  const [time, setTime] = useState({ d: 2, h: 2, m: 59, s: 36 });
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => {
        let { d, h, m, s } = t;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; d--; }
        if (d < 0) return { d: 0, h: 0, m: 0, s: 0 };
        return { d, h, m, s };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <div className="w-full py-2.5 px-4 flex items-center justify-between text-xs tracking-[0.2em] uppercase" style={{ backgroundColor: DARK, color: BG, fontFamily: "'Space Mono', 'Courier New', monospace" }}>
      <span className="font-bold">{pad(time.d)}D : {pad(time.h)}HRS : {pad(time.m)}MIN : {pad(time.s)}SEC</span>
      <span className="hidden sm:inline">Up to 50% Off: Unbeatable Sale</span>
      <span className="flex items-center gap-1 cursor-pointer hover:opacity-70 transition-opacity">↳ Explore Collection</span>
    </div>
  );
}

function Header() {
  return (
    <header className="w-full py-4 px-6 md:px-10 flex items-center justify-between" style={{ backgroundColor: BG }}>
      <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.15em] uppercase font-semibold" style={{ color: DARK }}>
        <a href="#" className="hover:opacity-60 transition-opacity">Shop</a>
        <a href="#" className="hover:opacity-60 transition-opacity">Collections</a>
        <a href="#" className="hover:opacity-60 transition-opacity">About</a>
        <a href="#" className="hover:opacity-60 transition-opacity">Features</a>
      </nav>
      <div className="flex-1 flex justify-center">
        <h1 className="text-3xl md:text-4xl font-black tracking-tight" style={{ color: DARK, fontFamily: "'Impact', 'Arial Black', sans-serif", fontStyle: "italic", letterSpacing: "-0.02em" }}>
          WR<span className="inline-block rotate-12">☆</span>NG
        </h1>
      </div>
      <div className="flex items-center gap-5 text-xs tracking-[0.15em] uppercase font-semibold" style={{ color: DARK }}>
        <span className="hidden md:flex items-center gap-4">
          <span className="opacity-50">LIGHT</span>
          <span className="w-5 h-px" style={{ backgroundColor: DARK }} />
          <span>DARK</span>
        </span>
        <Search className="h-4 w-4 cursor-pointer hover:opacity-60 transition-opacity" />
        <User className="h-4 w-4 cursor-pointer hover:opacity-60 transition-opacity" />
        <span className="flex items-center gap-1 cursor-pointer hover:opacity-60 transition-opacity">
          <ShoppingBag className="h-4 w-4" /> 0
        </span>
      </div>
    </header>
  );
}

function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative w-full overflow-hidden" style={{ backgroundColor: BG, minHeight: "85vh" }}>
      {/* Massive background text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={`title-${current}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.08, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div style={{ fontSize: "clamp(6rem, 20vw, 22rem)", fontFamily: "'Impact', 'Arial Black', sans-serif", color: DARK, lineHeight: 0.85, fontWeight: 900 }}>
              {slide.title}
            </div>
            <div style={{ fontSize: "clamp(6rem, 20vw, 22rem)", fontFamily: "'Impact', 'Arial Black', sans-serif", color: DARK, lineHeight: 0.85, fontWeight: 900 }}>
              {slide.subtitle}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Side peek images */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 md:w-24 h-48 md:h-64 overflow-hidden opacity-40">
        <img src={slides[(current - 1 + slides.length) % slides.length].image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 md:w-24 h-48 md:h-64 overflow-hidden opacity-40">
        <img src={slides[(current + 1) % slides.length].image} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={`image-${current}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="w-64 md:w-80 aspect-[3/4] rounded-sm overflow-hidden shadow-2xl mb-8"
          >
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          </motion.div>
        </AnimatePresence>

        <motion.p
          key={`desc-${current}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-sm text-sm mb-6"
          style={{ color: `${DARK}99`, fontFamily: "'Georgia', serif" }}
        >
          {slide.desc}
        </motion.p>

        <a href="#" className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold border-b pb-1 hover:opacity-60 transition-opacity" style={{ color: DARK, borderColor: DARK }}>
          ↳ Explore Collection
        </a>

        {/* Arrows */}
        <div className="absolute left-6 md:left-20 top-1/2 -translate-y-1/2">
          <button onClick={prev} className="p-3 hover:opacity-60 transition-opacity" style={{ color: DARK }}>
            <ArrowLeft className="h-8 w-8 stroke-[1.5]" />
          </button>
        </div>
        <div className="absolute right-6 md:right-20 top-1/2 -translate-y-1/2">
          <button onClick={next} className="p-3 hover:opacity-60 transition-opacity" style={{ color: DARK }}>
            <ArrowRight className="h-8 w-8 stroke-[1.5]" />
          </button>
        </div>
      </div>
    </section>
  );
}

function CategoriesSection() {
  return (
    <section className="px-6 md:px-10 py-16" style={{ backgroundColor: BG }}>
      <div className="flex items-center justify-between mb-8">
        <div>
          <span className="text-xs tracking-[0.2em] uppercase font-semibold" style={{ color: `${DARK}60` }}>Categories</span>
          <h2 className="text-3xl md:text-4xl font-black uppercase mt-1" style={{ color: DARK, fontFamily: "'Impact', 'Arial Black', sans-serif" }}>
            Shop by Categories
          </h2>
        </div>
        <a href="#" className="text-xs tracking-[0.15em] uppercase font-semibold flex items-center gap-1 hover:opacity-60 transition-opacity" style={{ color: DARK }}>
          View All <ChevronRight className="h-3 w-3" />
        </a>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative aspect-[4/3] rounded-sm overflow-hidden cursor-pointer"
          >
            <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-xl font-black uppercase text-white" style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}>{cat.name}</h3>
              <span className="text-xs text-white/70 tracking-wider">{cat.count} items</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FeaturedProducts() {
  return (
    <section className="px-6 md:px-10 py-16" style={{ backgroundColor: BG }}>
      <div className="flex items-center justify-between mb-8">
        <div>
          <span className="text-xs tracking-[0.2em] uppercase font-semibold" style={{ color: `${DARK}60` }}>Featured</span>
          <h2 className="text-3xl md:text-4xl font-black uppercase mt-1" style={{ color: DARK, fontFamily: "'Impact', 'Arial Black', sans-serif" }}>
            Best Sellers
          </h2>
        </div>
        <a href="#" className="text-xs tracking-[0.15em] uppercase font-semibold flex items-center gap-1 hover:opacity-60 transition-opacity" style={{ color: DARK }}>
          Shop All <ChevronRight className="h-3 w-3" />
        </a>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden mb-4" style={{ backgroundColor: "#e8e3de" }}>
              <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              {p.badge && (
                <span
                  className="absolute top-3 left-3 text-[10px] tracking-[0.2em] font-bold uppercase px-3 py-1 rounded-sm"
                  style={{
                    backgroundColor: p.badge === "SALE" ? "#e53e3e" : p.badge === "NEW" ? DARK : "#d69e2e",
                    color: "#fff",
                  }}
                >
                  {p.badge}
                </span>
              )}
              <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  className="text-xs tracking-[0.2em] uppercase font-bold px-6 py-3 rounded-sm transition-colors"
                  style={{ backgroundColor: DARK, color: BG }}
                >
                  Quick View
                </button>
              </div>
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider" style={{ color: DARK }}>{p.name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm font-bold" style={{ color: DARK }}>{p.price}</span>
              {p.originalPrice && (
                <span className="text-xs line-through" style={{ color: `${DARK}50` }}>{p.originalPrice}</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function MarqueeSection() {
  const text = "WRONG × COLLECTIBLES × ART × LIMITED EDITIONS × WRONG × COLLECTIBLES × ART × LIMITED EDITIONS × ";
  return (
    <div className="py-6 overflow-hidden" style={{ backgroundColor: DARK }}>
      <motion.div
        animate={{ x: [0, -1500] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="whitespace-nowrap flex"
      >
        <span className="text-4xl md:text-6xl font-black uppercase tracking-wider" style={{ color: BG, fontFamily: "'Impact', 'Arial Black', sans-serif", opacity: 0.9 }}>
          {text}{text}
        </span>
      </motion.div>
    </div>
  );
}

function TestimonialsSection() {
  const reviews = [
    { name: "Alex K.", text: "The quality of these collectibles is insane. Every detail is perfect.", rating: 5 },
    { name: "Mika T.", text: "Fastest shipping I've ever experienced. Packaging was museum-grade.", rating: 5 },
    { name: "Jordan P.", text: "My WRONG piece is the most talked-about art in my apartment.", rating: 5 },
  ];
  return (
    <section className="px-6 md:px-10 py-20" style={{ backgroundColor: BG }}>
      <div className="text-center mb-12">
        <span className="text-xs tracking-[0.2em] uppercase font-semibold" style={{ color: `${DARK}60` }}>Reviews</span>
        <h2 className="text-3xl md:text-4xl font-black uppercase mt-2" style={{ color: DARK, fontFamily: "'Impact', 'Arial Black', sans-serif" }}>
          What Collectors Say
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-sm"
            style={{ backgroundColor: "#ece7e1" }}
          >
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: r.rating }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-current" style={{ color: "#d69e2e" }} />
              ))}
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: `${DARK}cc`, fontFamily: "'Georgia', serif" }}>
              "{r.text}"
            </p>
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: DARK }}>{r.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function NewsletterSection() {
  return (
    <section className="px-6 md:px-10 py-20" style={{ backgroundColor: DARK }}>
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black uppercase mb-4" style={{ color: BG, fontFamily: "'Impact', 'Arial Black', sans-serif" }}>
          Join the Wrong Side
        </h2>
        <p className="text-sm mb-8" style={{ color: `${BG}99`, fontFamily: "'Georgia', serif" }}>
          Get exclusive drops, early access, and behind-the-scenes content delivered to your inbox.
        </p>
        <div className="flex gap-0">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 px-5 py-3.5 text-sm rounded-l-sm border-0 outline-none"
            style={{ backgroundColor: `${BG}15`, color: BG }}
          />
          <button
            className="px-6 py-3.5 text-xs tracking-[0.2em] uppercase font-bold rounded-r-sm transition-opacity hover:opacity-80"
            style={{ backgroundColor: BG, color: DARK }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

function WrongFooter() {
  return (
    <footer className="px-6 md:px-10 py-12" style={{ backgroundColor: DARK, borderTop: `1px solid ${BG}15` }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-xl font-black mb-4" style={{ color: BG, fontFamily: "'Impact', 'Arial Black', sans-serif", fontStyle: "italic" }}>
            WR☆NG
          </h3>
          <p className="text-xs leading-relaxed" style={{ color: `${BG}66` }}>
            Bold art. Limited editions. For collectors who break the rules.
          </p>
        </div>
        {[
          { title: "Shop", links: ["All Products", "New Arrivals", "Best Sellers", "Sale"] },
          { title: "Info", links: ["About Us", "Contact", "Shipping", "Returns"] },
          { title: "Follow", links: ["Instagram", "Twitter", "TikTok", "YouTube"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="text-xs tracking-[0.2em] uppercase font-bold mb-4" style={{ color: BG }}>{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-xs hover:opacity-100 transition-opacity" style={{ color: `${BG}66` }}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-6 flex items-center justify-between" style={{ borderTop: `1px solid ${BG}15` }}>
        <span className="text-[10px]" style={{ color: `${BG}40` }}>© 2025 Wrong. All rights reserved.</span>
        <span className="text-[10px]" style={{ color: `${BG}40` }}>Powered by Afrify</span>
      </div>
    </footer>
  );
}

export default function WrongTemplate() {
  return (
    <div style={{ backgroundColor: BG, color: DARK }}>
      <CountdownBar />
      <Header />
      <HeroCarousel />
      <CategoriesSection />
      <MarqueeSection />
      <FeaturedProducts />
      <TestimonialsSection />
      <NewsletterSection />
      <WrongFooter />
      <UseTemplateButton templateName="Wrong" />
    </div>
  );
}








