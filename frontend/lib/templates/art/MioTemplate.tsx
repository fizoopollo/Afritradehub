import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Search, ShoppingBag, User, ChevronLeft, ChevronRight, X, Star, Truck, Shield, RotateCcw, Mail } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";

const hero1 = "/assets/mio/hero1.jpg";
const hero2 = "/assets/mio/hero2.jpg";
const hero3 = "/assets/mio/hero3.jpg";
const collection1 = "/assets/mio/collection1.jpg";
const collection2 = "/assets/mio/collection2.jpg";
const collection3 = "/assets/mio/collection3.jpg";
const collection4 = "/assets/mio/collection4.jpg";
const aboutImg = "/assets/mio/about.jpg";

const WARM = "#1a1a1a";
const CREAM = "#faf6f1";
const ACCENT = "#c45a3c";

const heroSlides = [
  { image: hero1, title: "ONE HUNDRED\nSHOREDITCH", subtitle: "Cooperating with Lore Group, led by creative director Jacu Strauss for the second time, we worked on the project for One Hundred Shoreditch Hotel in London, UK." },
  { image: hero2, title: "GOLDEN\nHORIZONS", subtitle: "A breathtaking collection of large-scale abstract works that explore the interplay between light, texture, and raw emotion." },
  { image: hero3, title: "TERRA\nSCULPTURA", subtitle: "Monumental terracotta sculptures that challenge perception and redefine the boundaries of contemporary form." },
];

const brands = "Aman Hotel • Veuve Clicquot • Lladró • PuroBio Cosmetics • Buddha Bar • Mäntelhaus Keiserand • Guerlain • LVMH Group • Gucci • Cartier • ";

const collections = [
  { image: collection1, title: "Abstract Expressions", count: "24 pieces" },
  { image: collection2, title: "Sculptural Forms", count: "18 pieces" },
  { image: collection3, title: "Golden Hour", count: "32 pieces" },
  { image: collection4, title: "Mixed Media", count: "15 pieces" },
];

const products = [
  { image: collection1, name: "Coral Reverie", price: "$1,200", comparePrice: "$1,500", badge: "Sale" },
  { image: collection2, name: "Vessel No. 7", price: "$890", comparePrice: "", badge: "" },
  { image: collection3, name: "Amber Horizon", price: "$2,400", comparePrice: "", badge: "New" },
  { image: collection4, name: "Terra Fragment", price: "$680", comparePrice: "$850", badge: "Sale" },
  { image: hero2, name: "Solaris Triptych", price: "$4,500", comparePrice: "", badge: "" },
  { image: hero3, name: "Form Study III", price: "$1,100", comparePrice: "", badge: "New" },
];

const reviews = [
  { name: "Isabella M.", text: "The quality and curation is unlike anything I've seen. Every piece tells a story.", rating: 5 },
  { name: "Marcus T.", text: "Stunning artwork that transformed our entire living space. Exceptional service.", rating: 5 },
  { name: "Eloise K.", text: "From browsing to delivery, the experience was seamless and luxurious.", rating: 5 },
];

function CountdownTimer() {
  const [time, setTime] = useState({ days: 6, hours: 14, mins: 56, secs: 24 });
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { days, hours, mins, secs } = prev;
        secs--;
        if (secs < 0) { secs = 59; mins--; }
        if (mins < 0) { mins = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        if (days < 0) return prev;
        return { days, hours, mins, secs };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <span className="font-mono tracking-wider text-xs">
      {time.days} : {pad(time.hours)} : {pad(time.mins)} : {pad(time.secs)}
    </span>
  );
}

export default function MioTemplate() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPromo, setShowPromo] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="min-h-screen" style={{ backgroundColor: CREAM, color: WARM }}>
      <UseTemplateButton templateName="Mio" />

      {/* Promo Bar */}
      <AnimatePresence>
        {showPromo && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="relative text-center py-2.5 px-4 text-xs tracking-widest"
            style={{ backgroundColor: WARM, color: CREAM }}
          >
            <div className="flex items-center justify-center gap-4">
              <span className="uppercase">Up to 50% off</span>
              <CountdownTimer />
              <button
                className="px-4 py-1 text-[10px] font-bold uppercase tracking-widest border rounded-none hover:opacity-80 transition-opacity"
                style={{ borderColor: CREAM, color: CREAM }}
              >
                Shop Now
              </button>
            </div>
            <button onClick={() => setShowPromo(false)} className="absolute right-3 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity">
              <X className="h-3.5 w-3.5" style={{ color: CREAM }} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <nav className="sticky top-0 z-40 backdrop-blur-xl border-b" style={{ backgroundColor: `${CREAM}ee`, borderColor: `${WARM}10` }}>
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-lg font-bold tracking-[0.2em] uppercase" style={{ fontFamily: "'Georgia', serif" }}>
            MIO GALLERY
          </span>
          <div className="hidden md:flex items-center gap-8 text-xs tracking-[0.15em] uppercase">
            {["Shop", "About", "Projects", "Contact", "Theme Features"].map((item) => (
              <button key={item} className="hover:opacity-60 transition-opacity">{item}</button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:opacity-60 transition-opacity"><User className="h-4 w-4" /></button>
            <button className="hover:opacity-60 transition-opacity"><Search className="h-4 w-4" /></button>
            <button className="relative hover:opacity-60 transition-opacity">
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full text-[8px] font-bold flex items-center justify-center" style={{ backgroundColor: ACCENT, color: "white" }}>2</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Slideshow */}
      <section className="relative h-[80vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img src={heroSlides[currentSlide].image} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 flex items-center justify-center text-center z-10 px-6">
          <motion.div
            key={`text-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.05em] leading-tight mb-6 whitespace-pre-line"
              style={{ color: CREAM, fontFamily: "'Georgia', serif" }}
            >
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-sm md:text-base max-w-lg mx-auto mb-8 leading-relaxed" style={{ color: `${CREAM}bb` }}>
              {heroSlides[currentSlide].subtitle}
            </p>
            <button
              className="px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] border-2 hover:bg-white/10 transition-all"
              style={{ borderColor: CREAM, color: CREAM }}
            >
              Read More
            </button>
          </motion.div>
        </div>

        {/* Slide navigation */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border flex items-center justify-center hover:bg-white/10 transition-all" style={{ borderColor: `${CREAM}60`, color: CREAM }}>
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border flex items-center justify-center hover:bg-white/10 transition-all" style={{ borderColor: `${CREAM}60`, color: CREAM }}>
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className="w-2 h-2 rounded-full transition-all"
              style={{ backgroundColor: i === currentSlide ? CREAM : `${CREAM}50` }}
            />
          ))}
        </div>
      </section>

      {/* Brand Marquee */}
      <section className="py-4 overflow-hidden border-y" style={{ borderColor: `${WARM}15` }}>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap"
        >
          <span className="text-sm tracking-[0.15em] uppercase" style={{ color: `${WARM}60` }}>
            {brands.repeat(4)}
          </span>
        </motion.div>
      </section>

      {/* Collection List */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-center text-3xl md:text-4xl tracking-[0.15em] uppercase mb-14"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Collection List
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {collections.map((col, i) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden mb-4">
                  <img
                    src={col.image}
                    alt={col.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-sm tracking-[0.1em] uppercase font-medium">{col.title}</h3>
                <p className="text-xs mt-1" style={{ color: `${WARM}70` }}>{col.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-6" style={{ backgroundColor: WARM }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-14">
            <h2
              className="text-3xl md:text-4xl tracking-[0.15em] uppercase"
              style={{ fontFamily: "'Georgia', serif", color: CREAM }}
            >
              Featured Works
            </h2>
            <button className="text-xs tracking-[0.15em] uppercase hover:opacity-70 transition-opacity" style={{ color: `${CREAM}80` }}>
              View All →
            </button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square overflow-hidden mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {product.badge && (
                    <span
                      className="absolute top-3 left-3 px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
                      style={{
                        backgroundColor: product.badge === "Sale" ? ACCENT : WARM,
                        color: CREAM,
                      }}
                    >
                      {product.badge}
                    </span>
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      className="w-full py-3 text-xs font-bold uppercase tracking-[0.15em] hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: CREAM, color: WARM }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <h3 className="text-sm tracking-[0.05em]" style={{ color: CREAM }}>{product.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm font-medium" style={{ color: CREAM }}>{product.price}</span>
                  {product.comparePrice && (
                    <span className="text-xs line-through" style={{ color: `${CREAM}50` }}>{product.comparePrice}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Split Section */}
      <section className="grid lg:grid-cols-2">
        <div className="aspect-video lg:aspect-auto">
          <img src={aboutImg} alt="Gallery interior" className="w-full h-full object-cover" />
        </div>
        <div className="flex items-center px-8 md:px-16 py-16 lg:py-0" style={{ backgroundColor: CREAM }}>
          <div>
            <span className="text-xs tracking-[0.2em] uppercase mb-4 block" style={{ color: ACCENT }}>About the Gallery</span>
            <h2 className="text-3xl md:text-4xl tracking-[0.05em] leading-tight mb-6" style={{ fontFamily: "'Georgia', serif" }}>
              Where Art Meets<br />Intentional Living
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: `${WARM}80` }}>
              Mio Gallery is a curated space for contemporary art that celebrates warmth, 
              craftsmanship, and the transformative power of creative expression. Founded in 
              2019, we've partnered with over 200 emerging and established artists worldwide.
            </p>
            <button
              className="px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] border-2 hover:bg-black hover:text-white transition-all"
              style={{ borderColor: WARM, color: WARM }}
            >
              Our Story
            </button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-6" style={{ backgroundColor: `${WARM}08` }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-center text-3xl md:text-4xl tracking-[0.15em] uppercase mb-14"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4" style={{ fill: ACCENT, color: ACCENT }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4 italic" style={{ color: `${WARM}80` }}>
                  "{review.text}"
                </p>
                <p className="text-xs font-bold tracking-[0.1em] uppercase">{review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 px-6 border-y" style={{ borderColor: `${WARM}15` }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Truck, label: "Free Shipping", desc: "On orders over $200" },
            { icon: Shield, label: "Secure Payment", desc: "256-bit SSL encryption" },
            { icon: RotateCcw, label: "Easy Returns", desc: "30-day return policy" },
            { icon: Mail, label: "Support", desc: "Mon-Fri, 9am-6pm" },
          ].map(({ icon: Icon, label, desc }) => (
            <div key={label} className="text-center">
              <Icon className="h-5 w-5 mx-auto mb-2" style={{ color: ACCENT }} />
              <p className="text-xs font-bold tracking-[0.1em] uppercase mb-1">{label}</p>
              <p className="text-[11px]" style={{ color: `${WARM}60` }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 text-center" style={{ backgroundColor: WARM }}>
        <div className="max-w-lg mx-auto">
          <h2
            className="text-2xl md:text-3xl tracking-[0.15em] uppercase mb-4"
            style={{ fontFamily: "'Georgia', serif", color: CREAM }}
          >
            Stay Inspired
          </h2>
          <p className="text-sm mb-8" style={{ color: `${CREAM}70` }}>
            Subscribe for exclusive previews, artist stories, and early access to new collections.
          </p>
          <div className="flex gap-0">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 text-sm border-0 outline-none"
              style={{ backgroundColor: `${CREAM}10`, color: CREAM }}
            />
            <button
              className="px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] transition-opacity hover:opacity-90"
              style={{ backgroundColor: ACCENT, color: CREAM }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t" style={{ backgroundColor: CREAM, borderColor: `${WARM}15` }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            <div>
              <h4 className="text-xs font-bold tracking-[0.15em] uppercase mb-4">Shop</h4>
              <div className="space-y-2">
                {["All Art", "Paintings", "Sculpture", "Photography", "Prints"].map((item) => (
                  <p key={item} className="text-xs hover:opacity-60 cursor-pointer transition-opacity" style={{ color: `${WARM}70` }}>{item}</p>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-[0.15em] uppercase mb-4">About</h4>
              <div className="space-y-2">
                {["Our Story", "Artists", "Press", "Careers", "Sustainability"].map((item) => (
                  <p key={item} className="text-xs hover:opacity-60 cursor-pointer transition-opacity" style={{ color: `${WARM}70` }}>{item}</p>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-[0.15em] uppercase mb-4">Help</h4>
              <div className="space-y-2">
                {["FAQ", "Shipping", "Returns", "Contact", "Size Guide"].map((item) => (
                  <p key={item} className="text-xs hover:opacity-60 cursor-pointer transition-opacity" style={{ color: `${WARM}70` }}>{item}</p>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-[0.15em] uppercase mb-4">Follow Us</h4>
              <div className="space-y-2">
                {["Instagram", "Pinterest", "Twitter", "Facebook"].map((item) => (
                  <p key={item} className="text-xs hover:opacity-60 cursor-pointer transition-opacity" style={{ color: `${WARM}70` }}>{item}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t" style={{ borderColor: `${WARM}15` }}>
            <span className="text-sm font-bold tracking-[0.2em] uppercase" style={{ fontFamily: "'Georgia', serif" }}>MIO GALLERY</span>
            <p className="text-[11px] mt-2 md:mt-0" style={{ color: `${WARM}50` }}>© 2026 Mio Gallery. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Templates */}
      <section className="py-8 text-center" style={{ backgroundColor: `${WARM}05` }}>
        <Link href="/afrify/templates-store">
          <Button variant="ghost"><ArrowLeft className="h-4 w-4" /> Back to Templates</Button>
        </Link>
      </section>
    </div>
  );
}








