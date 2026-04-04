import { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingBag, Search, User, Menu, X, Sun, ChevronLeft, ChevronRight, Star, Truck, Shield, RotateCcw, Heart } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";

const heroImg = "/assets/monochrome/hero.jpg";
const art1 = "/assets/monochrome/art1.jpg";
const art2 = "/assets/monochrome/art2.jpg";
const art3 = "/assets/monochrome/art3.jpg";
const art4 = "/assets/monochrome/art4.jpg";
const art5 = "/assets/monochrome/art5.jpg";
const art6 = "/assets/monochrome/art6.jpg";
const lifestyleImg = "/assets/monochrome/lifestyle.jpg";

const CREAM = "#f5f0e8";
const DARK = "#1a1a1a";
const ACCENT = "#c8f542"; // neon green-yellow accent like the theme badge

const announcements = [
  "FREE SHIPPING AND DELIVERY ON ALL ORDERS",
  "NEW COLLECTION — CREATIVE HORIZONS NOW LIVE",
  "USE CODE ART20 FOR 20% OFF YOUR FIRST ORDER",
];

const navLinks = ["STARTER SITES", "SHOP", "ABOUT", "FEATURES"];

const products = [
  { name: "Pop Circles No. 7", artist: "Elena Voss", price: "$89.00", comparePrice: "$120.00", image: art1, badge: "Sale" },
  { name: "Chromatic Spheres", artist: "Marco Bellini", price: "$145.00", image: art2 },
  { name: "Terra Form", artist: "Yuki Tanaka", price: "$95.00", image: art3, badge: "New" },
  { name: "Wave Study", artist: "David Park", price: "$175.00", image: art4 },
  { name: "Botanical Garden", artist: "Lina Björk", price: "$110.00", comparePrice: "$140.00", image: art5, badge: "Sale" },
  { name: "Pink Expression", artist: "Sofia Reyes", price: "$220.00", image: art6, badge: "Limited" },
];

const collections = [
  { name: "Abstract", count: 24 },
  { name: "Botanical", count: 18 },
  { name: "Geometric", count: 31 },
  { name: "Minimalist", count: 15 },
];

const testimonials = [
  { text: "The prints are absolutely stunning. The quality exceeded my expectations and they look incredible in my living room.", name: "Sarah K.", rating: 5 },
  { text: "Fast shipping, beautiful packaging, and the colors are even more vibrant in person. Will definitely order again.", name: "James L.", rating: 5 },
  { text: "I've purchased from many art print stores online and this is by far the best. The attention to detail is remarkable.", name: "Mia R.", rating: 5 },
];

export default function MonochromeTemplate() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [announcementIndex, setAnnouncementIndex] = useState(0);
  const { scrollY } = useScroll();
  const headerBg = useTransform(scrollY, [0, 100], ["rgba(245,240,232,0)", "rgba(245,240,232,0.98)"]);

  const nextAnnouncement = () => setAnnouncementIndex((i) => (i + 1) % announcements.length);
  const prevAnnouncement = () => setAnnouncementIndex((i) => (i - 1 + announcements.length) % announcements.length);

  return (
    <div className="min-h-screen" style={{ backgroundColor: CREAM, color: DARK }}>
      <UseTemplateButton templateName="Monochrome" />

      {/* Announcement Bar */}
      <div className="relative py-2.5 text-center text-xs tracking-[0.2em] font-medium overflow-hidden" style={{ backgroundColor: DARK, color: CREAM }}>
        <div className="flex items-center justify-center gap-4">
          <button onClick={prevAnnouncement} className="opacity-60 hover:opacity-100 transition-opacity">
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>
          <AnimatePresence mode="wait">
            <motion.span
              key={announcementIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {announcements[announcementIndex]}
            </motion.span>
          </AnimatePresence>
          <button onClick={nextAnnouncement} className="opacity-60 hover:opacity-100 transition-opacity">
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Sticky Header */}
      <motion.header
        style={{ backgroundColor: headerBg }}
        className="sticky top-0 z-40 backdrop-blur-md border-b transition-colors"
        initial={false}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Left nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button key={link} className="text-xs tracking-[0.15em] font-medium hover:opacity-60 transition-opacity" style={{ color: DARK }}>
                {link}
              </button>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Logo */}
          <Link href="/afrify/templates/art/monochrome" className="absolute left-1/2 -translate-x-1/2">
            <span className="text-2xl tracking-[0.3em] font-light" style={{ fontFamily: "'Georgia', serif", color: DARK }}>
              monochrome
            </span>
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-1.5 text-xs tracking-[0.1em] font-medium" style={{ color: DARK }}>
              <Sun className="h-4 w-4" /> LIGHT
            </button>
            <button className="hover:opacity-60 transition-opacity"><Search className="h-4.5 w-4.5" style={{ color: DARK }} /></button>
            <button className="hover:opacity-60 transition-opacity hidden sm:block"><User className="h-4.5 w-4.5" style={{ color: DARK }} /></button>
            <button className="relative hover:opacity-60 transition-opacity">
              <ShoppingBag className="h-4.5 w-4.5" style={{ color: DARK }} />
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center" style={{ backgroundColor: ACCENT, color: DARK }}>0</span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden border-t"
              style={{ borderColor: `${DARK}15` }}
            >
              <div className="px-6 py-6 space-y-4">
                {navLinks.map((link) => (
                  <button key={link} onClick={() => setMobileOpen(false)} className="block text-sm tracking-[0.15em] font-medium" style={{ color: DARK }}>
                    {link}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative">
          <img src={heroImg} alt="Creative Horizons — art prints in modern living room" className="w-full h-[60vh] md:h-[85vh] object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)" }} />

          {/* Hero text */}
          <div className="absolute inset-0 flex items-center">
            <div className="px-8 md:px-16 max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6"
                style={{ color: "#fff", fontFamily: "'Georgia', serif" }}
              >
                CREATIVE<br />HORIZONS
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-sm md:text-base mb-8 max-w-md"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                Inspiring posters to transform your space with emotion and artistic flair.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <button
                  className="px-8 py-3 text-xs tracking-[0.2em] font-semibold border-2 hover:opacity-80 transition-opacity"
                  style={{ borderColor: "#fff", color: "#fff", backgroundColor: "transparent" }}
                >
                  SHOP COLLECTION
                </button>
              </motion.div>
            </div>
          </div>

          {/* Rotating badge */}
          <motion.div
            className="absolute top-8 right-8 md:top-16 md:right-16 w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center"
            style={{ backgroundColor: ACCENT }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <span className="text-lg md:text-2xl font-black" style={{ color: DARK }}>✳</span>
          </motion.div>
        </div>
      </section>

      {/* Scrolling Marquee */}
      <section className="py-4 overflow-hidden border-y" style={{ borderColor: `${DARK}20` }}>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mx-4" style={{ color: DARK, fontFamily: "'Georgia', serif" }}>
              ART FOR THE HEART AND SOUL&nbsp;&nbsp;·&nbsp;&nbsp;
            </span>
          ))}
        </motion.div>
      </section>

      {/* Promo Banners */}
      <section className="grid md:grid-cols-2">
        <div className="p-10 md:p-16 flex flex-col justify-center" style={{ backgroundColor: ACCENT }}>
          <span className="text-xs tracking-[0.2em] font-semibold mb-4" style={{ color: DARK }}>LIMITED TIME</span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ color: DARK, fontFamily: "'Georgia', serif" }}>
            BIG SALE<br />ALERT
          </h2>
          <p className="text-sm mb-6 opacity-70" style={{ color: DARK }}>Up to 40% off selected art prints. Don't miss out.</p>
          <button className="self-start px-6 py-2.5 text-xs tracking-[0.15em] font-semibold border-2 hover:opacity-80 transition-opacity" style={{ borderColor: DARK, color: DARK }}>
            SHOP SALE
          </button>
        </div>
        <div className="relative min-h-[300px]">
          <img src={lifestyleImg} alt="Art gallery wall in modern home" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-end p-10 md:p-16" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }}>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "#fff", fontFamily: "'Georgia', serif" }}>MAKE THE MOMENT YOURS</h3>
              <button className="text-xs tracking-[0.15em] font-semibold underline underline-offset-4" style={{ color: "#fff" }}>
                EXPLORE →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-xs tracking-[0.2em] font-semibold opacity-50" style={{ color: DARK }}>BROWSE BY</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2" style={{ color: DARK, fontFamily: "'Georgia', serif" }}>Collections</h2>
            </div>
            <button className="text-xs tracking-[0.15em] font-semibold underline underline-offset-4 hover:opacity-60 transition-opacity" style={{ color: DARK }}>
              VIEW ALL
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {collections.map((col, i) => (
              <motion.button
                key={col.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-8 text-center border hover:border-current transition-colors"
                style={{ borderColor: `${DARK}20`, color: DARK }}
              >
                <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "'Georgia', serif" }}>{col.name}</h3>
                <span className="text-xs opacity-50">{col.count} prints</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 border-t" style={{ borderColor: `${DARK}15` }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-xs tracking-[0.2em] font-semibold opacity-50" style={{ color: DARK }}>CURATED</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2" style={{ color: DARK, fontFamily: "'Georgia', serif" }}>Best Sellers</h2>
            </div>
            <button className="text-xs tracking-[0.15em] font-semibold underline underline-offset-4 hover:opacity-60 transition-opacity" style={{ color: DARK }}>
              SHOP ALL
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
                <div className="relative overflow-hidden mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.badge && (
                    <span
                      className="absolute top-3 left-3 px-3 py-1 text-[10px] tracking-[0.15em] font-bold"
                      style={{
                        backgroundColor: product.badge === "Sale" ? "#e53935" : product.badge === "New" ? ACCENT : DARK,
                        color: product.badge === "New" ? DARK : "#fff",
                      }}
                    >
                      {product.badge.toUpperCase()}
                    </span>
                  )}
                  {/* Hover actions */}
                  <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="flex gap-2">
                      <button className="flex-1 py-2.5 text-xs tracking-[0.1em] font-semibold" style={{ backgroundColor: DARK, color: CREAM }}>
                        ADD TO CART
                      </button>
                      <button className="p-2.5" style={{ backgroundColor: DARK, color: CREAM }}>
                        <Heart className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xs opacity-50 tracking-[0.1em]">{product.artist}</p>
                  <h3 className="text-sm font-semibold" style={{ color: DARK }}>{product.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold" style={{ color: DARK }}>{product.price}</span>
                    {product.comparePrice && (
                      <span className="text-xs line-through opacity-40">{product.comparePrice}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artist */}
      <section className="grid md:grid-cols-2 border-t" style={{ borderColor: `${DARK}15` }}>
        <div className="p-10 md:p-20 flex flex-col justify-center" style={{ backgroundColor: DARK }}>
          <span className="text-xs tracking-[0.2em] font-semibold mb-6" style={{ color: ACCENT }}>FEATURED ARTIST</span>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6" style={{ color: CREAM, fontFamily: "'Georgia', serif" }}>
            "Art is not what you see, but what you make others see."
          </h2>
          <p className="text-sm leading-relaxed mb-8 opacity-70" style={{ color: CREAM }}>
            Elena Voss is a contemporary artist known for bold compositions and vibrant color palettes.
            Her work has been exhibited in galleries across Europe and North America, and her prints have found homes
            in thousands of spaces worldwide.
          </p>
          <button className="self-start px-6 py-2.5 text-xs tracking-[0.15em] font-semibold border hover:opacity-80 transition-opacity" style={{ borderColor: CREAM, color: CREAM }}>
            VIEW COLLECTION
          </button>
        </div>
        <div className="relative min-h-[400px]">
          <img src={art6} alt="Featured artist work — Pink Expression" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs tracking-[0.2em] font-semibold opacity-50" style={{ color: DARK }}>REVIEWS</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2" style={{ color: DARK, fontFamily: "'Georgia', serif" }}>What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border"
                style={{ borderColor: `${DARK}15` }}
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-current" style={{ color: DARK }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-6 opacity-70" style={{ color: DARK }}>"{t.text}"</p>
                <p className="text-xs tracking-[0.1em] font-semibold" style={{ color: DARK }}>— {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-y py-12" style={{ borderColor: `${DARK}15` }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: "Free Shipping", desc: "On all orders" },
              { icon: Shield, title: "Secure Payment", desc: "256-bit encrypted" },
              { icon: RotateCcw, title: "Easy Returns", desc: "30-day policy" },
              { icon: Heart, title: "Made With Care", desc: "Museum-quality prints" },
            ].map((b, i) => (
              <div key={b.title} className="text-center">
                <b.icon className="h-6 w-6 mx-auto mb-3 opacity-60" style={{ color: DARK }} />
                <h4 className="text-sm font-semibold mb-1" style={{ color: DARK }}>{b.title}</h4>
                <p className="text-xs opacity-50" style={{ color: DARK }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24" style={{ backgroundColor: DARK }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="text-xs tracking-[0.2em] font-semibold mb-4 block" style={{ color: ACCENT }}>STAY IN THE LOOP</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: CREAM, fontFamily: "'Georgia', serif" }}>
            Join Our Newsletter
          </h2>
          <p className="text-sm mb-8 opacity-60" style={{ color: CREAM }}>
            Be the first to know about new releases, exclusive offers, and artist stories.
          </p>
          <form className="flex gap-0 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 text-sm border-0 outline-none"
              style={{ backgroundColor: "rgba(255,255,255,0.1)", color: CREAM }}
            />
            <button className="px-6 py-3 text-xs tracking-[0.15em] font-bold" style={{ backgroundColor: ACCENT, color: DARK }}>
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t" style={{ borderColor: `${DARK}15`, backgroundColor: CREAM }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { title: "Shop", links: ["All Prints", "Abstract", "Botanical", "Geometric", "New Arrivals", "Sale"] },
              { title: "Help", links: ["Contact Us", "Shipping Info", "Returns", "FAQ", "Size Guide"] },
              { title: "About", links: ["Our Story", "Artists", "Sustainability", "Press", "Careers"] },
              { title: "Follow", links: ["Instagram", "Pinterest", "Twitter", "TikTok"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-xs tracking-[0.2em] font-semibold mb-4" style={{ color: DARK }}>{col.title.toUpperCase()}</h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <button className="text-sm opacity-60 hover:opacity-100 transition-opacity" style={{ color: DARK }}>{link}</button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: `${DARK}15` }}>
            <span className="text-xl tracking-[0.3em] font-light" style={{ fontFamily: "'Georgia', serif", color: DARK }}>
              monochrome
            </span>
            <p className="text-xs opacity-40" style={{ color: DARK }}>© 2025 Monochrome. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to templates */}
      <section className="py-6 text-center" style={{ backgroundColor: `${DARK}08` }}>
        <Link href="/afrify/templates-store">
          <Button variant="ghost" className="text-sm">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Templates
          </Button>
        </Link>
      </section>
    </div>
  );
}








