import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, ShoppingCart, Heart, ChevronLeft, ChevronRight, Truck, RotateCcw, PackageCheck, Star, Mail } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";

const heroImg = "/assets/clay/hero.jpg";
const product1 = "/assets/clay/product1.jpg";
const product2 = "/assets/clay/product2.jpg";
const product3 = "/assets/clay/product3.jpg";
const product4 = "/assets/clay/product4.jpg";
const product5 = "/assets/clay/product5.jpg";
const product6 = "/assets/clay/product6.jpg";
const collection1 = "/assets/clay/collection1.jpg";
const collection2 = "/assets/clay/collection2.jpg";

const CREAM = "#f7f3ed";
const YELLOW = "#e8d44d";
const BROWN = "#3a2a1a";
const TERRACOTTA = "#c0704a";

const marqueeWords = ["PREMIUM", "FLEXIBLE", "COMFORT", "STYLISH"];

const products = [
  { img: product1, name: "Speckled Stoneware Mug", price: "$38.00", tag: "NEW" },
  { img: product2, name: "Artist Brush Set", price: "$52.00", tag: "" },
  { img: product3, name: "Organic Form Bowl", price: "$64.00", oldPrice: "$80.00", tag: "SALE" },
  { img: product4, name: "Mini Canvas Kit", price: "$28.00", tag: "" },
  { img: product5, name: "Terracotta Column Vase", price: "$95.00", tag: "" },
  { img: product6, name: "Clay Figurine Collection", price: "$120.00", tag: "FEATURED" },
];

const collections = [
  { name: "Art Hue Canvas", desc: "Hand-painted originals on premium cotton canvas.", img: collection1 },
  { name: "Pixel Pigments", desc: "Digital art meets traditional craft in vibrant prints.", img: collection2 },
];

const testimonials = [
  { name: "Clay B.", text: "The pottery classes are meditative and joyful. Every piece feels like a personal triumph.", rating: 5 },
  { name: "Terra K.", text: "My custom dining set is a work of art. The craftsmanship is exceptional.", rating: 5 },
  { name: "Ash W.", text: "The studio membership is the best investment I've made for my creative practice.", rating: 5 },
];

export default function ClayTemplate() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [marqueeOffset, setMarqueeOffset] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setMarqueeOffset((p) => p - 1), 30);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ background: CREAM, color: BROWN }} className="min-h-screen">
      {/* Announcement Bar */}
      <div className="flex items-center justify-center gap-4 py-2.5 text-xs tracking-wide" style={{ background: YELLOW }}>
        <button><ChevronLeft size={14} /></button>
        <span>10% on all prepaid orders</span>
        <button><ChevronRight size={14} /></button>
      </div>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 bg-white">
        <h1 className="text-2xl italic" style={{ fontFamily: "'Georgia', serif", color: TERRACOTTA }}>
          Handcraft
        </h1>
        <div className="hidden md:flex items-center gap-8">
          {["HOME", "🟧 SHOP CRAFTS", "PAINTINGS", "CONTACT"].map((l) => (
            <button key={l} className="text-[11px] font-semibold tracking-wider hover:opacity-60 transition-opacity">
              {l}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button className="hover:opacity-60 transition-opacity"><Search size={18} /></button>
          <button className="hover:opacity-60 transition-opacity hidden md:block"><User size={18} /></button>
          <button className="hover:opacity-60 transition-opacity relative">
            <ShoppingCart size={18} />
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full text-[9px] text-white flex items-center justify-center" style={{ background: TERRACOTTA }}>0</span>
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[55vh] md:h-[75vh] overflow-hidden">
        <img src={heroImg} alt="Handcrafting clay" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent flex items-center">
          <div className="px-8 md:px-16 max-w-lg">
            <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/70 mb-3">EXPLORE OUR CRAFTS</p>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
              WE LOVE THE WAY WE WORK
            </h2>
            <p className="text-sm text-white/70 mb-6 leading-relaxed font-sans">
              Crafts like you've never seen before! Explore our collection of top-of-the-line supplies for all your creative endeavors.
            </p>
            <button className="px-6 py-2.5 text-xs font-semibold tracking-wider uppercase bg-white/10 border border-white/30 text-white hover:bg-white hover:text-black transition-all">
              SHOP NOW
            </button>
          </div>
        </div>
      </section>

      {/* Scrolling Marquee */}
      <div className="py-4 overflow-hidden border-y" style={{ borderColor: `${BROWN}15` }}>
        <div className="whitespace-nowrap flex items-center" style={{ transform: `translateX(${marqueeOffset}px)` }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-6 mx-4">
              {marqueeWords.map((w, j) => (
                <span key={j} className="flex items-center gap-6">
                  <span className="text-xl md:text-3xl italic tracking-wide" style={{ fontFamily: "'Georgia', serif", color: `${BROWN}30` }}>
                    {w}
                  </span>
                  <span className="text-lg" style={{ color: `${BROWN}20` }}>•</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: Truck, title: "FREE INTERNATIONAL SHIPPING", desc: "Enjoy the convenience of free international shipping on all orders. Shop with ease from anywhere in the world." },
            { icon: RotateCcw, title: "45 DAYS RETURN", desc: "Enjoy peace of mind with our generous 45 days return window. Your satisfaction is our priority, no questions asked." },
            { icon: PackageCheck, title: "FAST DELIVERY", desc: "Enjoy efficient and reliable shipping services for all your online orders. Fast delivery is our top priority." },
          ].map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: `${YELLOW}40` }}>
                <Icon size={22} style={{ color: TERRACOTTA }} strokeWidth={1.5} />
              </div>
              <h4 className="text-[11px] font-bold tracking-wider">{title}</h4>
              <p className="text-xs font-sans opacity-50 leading-relaxed max-w-xs">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Collections */}
      <section className="py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl text-center mb-10" style={{ fontFamily: "'Georgia', serif" }}>
          Shop Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collections.map((col, i) => (
            <motion.div
              key={i}
              className="group cursor-pointer relative aspect-[4/3] rounded-xl overflow-hidden"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <img src={col.img} alt={col.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/60 mb-1">{col.name}</p>
                <p className="text-xs text-white/70 font-sans">{col.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl" style={{ fontFamily: "'Georgia', serif" }}>
            Featured Crafts
          </h2>
          <button className="text-xs font-semibold tracking-wider uppercase underline underline-offset-4 hover:opacity-60 transition-opacity">
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
              <div className="relative aspect-square rounded-xl overflow-hidden mb-3 bg-white">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                {p.tag && (
                  <span
                    className="absolute top-3 left-3 text-[10px] font-bold tracking-wider px-3 py-1 rounded-full text-white"
                    style={{ background: p.tag === "SALE" ? TERRACOTTA : p.tag === "FEATURED" ? BROWN : `${BROWN}cc` }}
                  >
                    {p.tag}
                  </span>
                )}
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart size={14} style={{ color: TERRACOTTA }} />
                </button>
                <AnimatePresence>
                  {hovered === i && (
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute bottom-3 left-3 right-3 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase text-white"
                      style={{ background: BROWN }}
                    >
                      Add to Cart
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
              <h3 className="text-sm font-medium mb-1 font-sans">{p.name}</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold font-sans">{p.price}</span>
                {p.oldPrice && <span className="text-xs font-sans line-through opacity-40">{p.oldPrice}</span>}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl text-center mb-12" style={{ fontFamily: "'Georgia', serif" }}>
          What Our Makers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-xl p-6 md:p-8 bg-white">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={14} fill={s < t.rating ? YELLOW : "none"} stroke={s < t.rating ? YELLOW : "#ddd"} />
                ))}
              </div>
              <p className="text-sm font-sans leading-relaxed opacity-70 mb-4">"{t.text}"</p>
              <p className="text-xs font-sans font-semibold">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-20 px-6 text-center" style={{ background: YELLOW }}>
        <Mail size={28} className="mx-auto mb-4" style={{ color: BROWN }} />
        <h2 className="text-2xl md:text-3xl mb-3" style={{ fontFamily: "'Georgia', serif" }}>
          Join the Craft Circle
        </h2>
        <p className="text-sm font-sans opacity-60 max-w-md mx-auto mb-6">
          Get exclusive access to new collections, workshop invites, and maker stories.
        </p>
        <div className="flex max-w-md mx-auto gap-2">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-5 py-3 rounded-lg text-sm font-sans bg-white border-none outline-none"
            style={{ color: BROWN }}
          />
          <button className="px-6 py-3 rounded-lg text-sm font-sans font-medium text-white" style={{ background: BROWN }}>
            Subscribe
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12" style={{ background: BROWN, color: `${CREAM}cc` }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div>
              <h3 className="text-lg italic mb-4" style={{ fontFamily: "'Georgia', serif", color: CREAM }}>Handcraft</h3>
              <p className="text-xs font-sans leading-relaxed opacity-50">
                Premium handcrafted art supplies & pottery for creative souls.
              </p>
            </div>
            {[
              { title: "Shop", links: ["All Products", "Ceramics", "Paintings", "Supplies"] },
              { title: "About", links: ["Our Story", "Artisans", "Studio", "Press"] },
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
            <p className="text-[10px] font-sans opacity-40">© 2026 Handcraft. All rights reserved.</p>
            <div className="flex gap-4 text-[10px] font-sans opacity-40">
              <span>Privacy</span>
              <span>Terms</span>
              <span>Cookies</span>
            </div>
          </div>
        </div>
      </footer>

      <UseTemplateButton templateName="Clay" />
    </div>
  );
}








