import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ShoppingBag, User, Menu, X, ChevronLeft, ChevronRight, Instagram, Sun, Star, Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import UseTemplateButton from "@/components/UseTemplateButton";

const heroImg = "/assets/sunset/hero.jpg";
const goldenField = "/assets/sunset/golden-field.jpg";
const tropicalLeaf = "/assets/sunset/tropical-leaf.jpg";
const mistyForest = "/assets/sunset/misty-forest.jpg";
const desert = "/assets/sunset/desert.jpg";
const orchid = "/assets/sunset/orchid.jpg";
const lakeDawn = "/assets/sunset/lake-dawn.jpg";
const coastal = "/assets/sunset/coastal.jpg";

const BG = "#f7f0e8";
const TEXT = "#3d3228";
const ACCENT = "#8b7355";
const DARK = "#3d3228";

const collections = [
  { name: "Landscapes", image: goldenField, count: 28 },
  { name: "Botanicals", image: tropicalLeaf, count: 16 },
  { name: "Forests", image: mistyForest, count: 22 },
  { name: "Deserts", image: desert, count: 14 },
];

const products = [
  { name: "Golden Hour Meadow", price: "$145.00", comparePrice: "$180.00", image: goldenField, badge: "Sale" },
  { name: "Monstera Morning", price: "$95.00", comparePrice: "", image: tropicalLeaf, badge: "" },
  { name: "Forest Whisper", price: "$125.00", comparePrice: "", image: mistyForest, badge: "New" },
  { name: "Sahara Dusk", price: "$160.00", comparePrice: "", image: desert, badge: "" },
  { name: "White Orchid Study", price: "$85.00", comparePrice: "$110.00", image: orchid, badge: "Sale" },
  { name: "Alpine Reflection", price: "$175.00", comparePrice: "", image: lakeDawn, badge: "" },
  { name: "Coastal Fury", price: "$155.00", comparePrice: "", image: coastal, badge: "Best Seller" },
  { name: "Golden Fields II", price: "$135.00", comparePrice: "", image: goldenField, badge: "" },
];

const reviews = [
  { name: "Sarah M.", text: "Absolutely stunning prints. The color accuracy is incredible — better than I expected.", stars: 5 },
  { name: "James K.", text: "The framing quality is superb. These prints transformed our living room completely.", stars: 5 },
  { name: "Mei L.", text: "Fast delivery, eco-friendly packaging, and gallery-quality prints. Will order again!", stars: 5 },
];

export default function SunsetTemplate() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [announcementIndex, setAnnouncementIndex] = useState(0);
  const announcements = [
    "Planet friendly packaging — always!",
    "Free shipping on orders over $150",
    "New collection: Desert Dreams",
  ];

  const nextAnnouncement = () => setAnnouncementIndex((i) => (i + 1) % announcements.length);
  const prevAnnouncement = () => setAnnouncementIndex((i) => (i - 1 + announcements.length) % announcements.length);

  return (
    <div className="min-h-screen" style={{ backgroundColor: BG, color: TEXT, fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      <UseTemplateButton templateName="Sunset" />

      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-2 text-xs" style={{ backgroundColor: DARK, color: "#f7f0e8" }}>
        <div className="flex items-center gap-3">
          <a href="#" className="hover:opacity-70 transition-opacity">
            <Instagram className="h-3.5 w-3.5" />
          </a>
          <span className="opacity-60">store@email.com</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={prevAnnouncement} className="hover:opacity-70"><ChevronLeft className="h-3 w-3" /></button>
          <motion.span
            key={announcementIndex}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center min-w-[200px]"
          >
            {announcements[announcementIndex]}
          </motion.span>
          <button onClick={nextAnnouncement} className="hover:opacity-70"><ChevronRight className="h-3 w-3" /></button>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-xs">
          <a href="#" className="hover:opacity-70 transition-opacity">About</a>
          <a href="#" className="hover:opacity-70 transition-opacity">FAQ</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Returns</a>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b" style={{ backgroundColor: BG, borderColor: "#e0d5c5" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Left nav */}
            <nav className="hidden lg:flex items-center gap-6 text-xs tracking-[0.1em] uppercase" style={{ fontFamily: "sans-serif" }}>
              <a href="#store" className="py-5 hover:opacity-60 transition-opacity">Store</a>
              <a href="#collections" className="py-5 hover:opacity-60 transition-opacity">Collections</a>
              <a href="#" className="py-5 hover:opacity-60 transition-opacity">Demos</a>
              <a href="#" className="py-5 text-red-600 font-semibold hover:opacity-60 transition-opacity">Sale</a>
            </nav>

            <button className="lg:hidden py-4" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            {/* Center Logo */}
            <Link href="/afrify/templates/art/sunset" className="flex flex-col items-center py-3">
              <Sun className="h-6 w-6 mb-1" style={{ color: ACCENT }} />
              <span className="text-[10px] tracking-[0.35em] uppercase font-semibold" style={{ fontFamily: "sans-serif", color: ACCENT }}>
                Sunset Studio
              </span>
            </Link>

            {/* Right actions */}
            <div className="flex items-center gap-4">
              <span className="hidden lg:inline text-[10px] tracking-[0.1em] uppercase" style={{ fontFamily: "sans-serif", color: ACCENT }}>
                United Kingdom (USD $)
              </span>
              <button className="hover:opacity-60 transition-opacity"><User className="h-4 w-4" /></button>
              <button className="hover:opacity-60 transition-opacity relative">
                <ShoppingBag className="h-4 w-4" />
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full text-[9px] flex items-center justify-center text-white" style={{ backgroundColor: ACCENT }}>1</span>
              </button>
              <button className="hover:opacity-60 transition-opacity"><Search className="h-4 w-4" /></button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="lg:hidden px-6 pb-6 space-y-3 border-t" style={{ borderColor: "#e0d5c5" }}>
            {["Store", "Collections", "Demos", "Sale"].map((item) => (
              <a key={item} href="#" className="block py-2 text-sm" style={{ fontFamily: "sans-serif", color: item === "Sale" ? "#c53030" : TEXT }}>
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </header>

      {/* Hero - Split Layout */}
      <section className="grid lg:grid-cols-[1.2fr_1fr] min-h-[500px] md:min-h-[600px]">
        <div className="overflow-hidden">
          <motion.img
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
            src={heroImg}
            alt="Nature photography prints displayed in a warm interior"
            className="w-full h-full object-cover min-h-[350px]"
          />
        </div>
        <div className="flex flex-col justify-center px-8 md:px-14 py-12" style={{ backgroundColor: "#ede4d8" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h1 className="text-3xl md:text-4xl leading-snug mb-4" style={{ fontFamily: "'Georgia', serif" }}>
              Nature's beauty in every photo
            </h1>
            <p className="text-sm leading-relaxed opacity-70 mb-8 max-w-md" style={{ fontFamily: "sans-serif" }}>
              Immerse yourself in the breathtaking world of nature photography as we embark on a journey through the majesty of our planet.
            </p>
            <a href="#store">
              <Button
                className="rounded-full px-8 py-5 text-sm font-medium"
                style={{ backgroundColor: DARK, color: "#f7f0e8", fontFamily: "sans-serif" }}
              >
                Shop now
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 md:py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-xl md:text-3xl leading-relaxed italic" style={{ fontFamily: "'Georgia', serif" }}>
            Emotions, experiences, and memories find their perfect sanctuary in{" "}
            <span className="underline underline-offset-4 decoration-1" style={{ textDecorationColor: ACCENT }}>the art of photography</span>.
            Cherish our world, behold its breathtaking beauty.
          </p>
        </motion.div>
      </section>

      {/* Collections Grid */}
      <section id="collections" className="px-6 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl md:text-3xl" style={{ fontFamily: "'Georgia', serif" }}>Shop by collection</h2>
            <a href="#" className="text-xs tracking-[0.1em] uppercase hover:opacity-60 transition-opacity" style={{ fontFamily: "sans-serif", color: ACCENT }}>
              View all →
            </a>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {collections.map((col, i) => (
              <motion.div
                key={col.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-lg mb-3">
                  <img src={col.image} alt={col.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="text-sm font-medium" style={{ fontFamily: "sans-serif" }}>{col.name}</h3>
                <p className="text-xs opacity-50" style={{ fontFamily: "sans-serif" }}>{col.count} prints</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="store" className="px-6 pb-16 md:pb-24" style={{ backgroundColor: "#ede4d8" }}>
        <div className="max-w-7xl mx-auto pt-16 md:pt-24">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl md:text-3xl" style={{ fontFamily: "'Georgia', serif" }}>Featured prints</h2>
            <a href="#" className="text-xs tracking-[0.1em] uppercase hover:opacity-60 transition-opacity" style={{ fontFamily: "sans-serif", color: ACCENT }}>
              Shop all →
            </a>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
            {products.map((p, i) => (
              <motion.div
                key={p.name + i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="aspect-square overflow-hidden rounded-lg mb-3 relative">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  {p.badge && (
                    <span
                      className="absolute top-2 left-2 text-[10px] tracking-[0.1em] uppercase px-2.5 py-1 rounded-full font-medium"
                      style={{
                        backgroundColor: p.badge === "Sale" ? "#c53030" : DARK,
                        color: "#f7f0e8",
                        fontFamily: "sans-serif",
                      }}
                    >
                      {p.badge}
                    </span>
                  )}
                  {/* Quick add on hover */}
                  <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      className="w-full rounded-full text-xs font-medium py-2"
                      style={{ backgroundColor: DARK, color: "#f7f0e8", fontFamily: "sans-serif" }}
                    >
                      Add to cart
                    </Button>
                  </div>
                </div>
                <h3 className="text-sm font-medium" style={{ fontFamily: "sans-serif" }}>{p.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm font-medium" style={{ fontFamily: "sans-serif" }}>{p.price}</span>
                  {p.comparePrice && (
                    <span className="text-xs line-through opacity-40" style={{ fontFamily: "sans-serif" }}>{p.comparePrice}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Feature - About */}
      <section className="grid lg:grid-cols-2 min-h-[500px]">
        <div className="flex flex-col justify-center px-8 md:px-16 py-16" style={{ backgroundColor: BG }}>
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Leaf className="h-8 w-8 mb-6" style={{ color: ACCENT }} />
            <h2 className="text-3xl md:text-4xl leading-snug mb-6" style={{ fontFamily: "'Georgia', serif" }}>
              Sustainably printed,<br />beautifully framed
            </h2>
            <p className="text-sm leading-relaxed opacity-70 mb-4 max-w-md" style={{ fontFamily: "sans-serif" }}>
              Every print is produced using eco-friendly inks on FSC-certified paper. Our frames are handcrafted from sustainably sourced timber, and all packaging is plastic-free and fully recyclable.
            </p>
            <p className="text-sm leading-relaxed opacity-70 mb-8 max-w-md" style={{ fontFamily: "sans-serif" }}>
              We plant a tree for every order placed — over 12,000 trees and counting.
            </p>
            <a href="#">
              <Button
                className="rounded-full px-8 py-5 text-sm font-medium"
                style={{ backgroundColor: DARK, color: "#f7f0e8", fontFamily: "sans-serif" }}
              >
                Our story
              </Button>
            </a>
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <img src={coastal} alt="Dramatic coastal sunset" className="w-full h-full object-cover min-h-[400px]" />
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-24 px-6" style={{ backgroundColor: "#ede4d8" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl text-center mb-12" style={{ fontFamily: "'Georgia', serif" }}>What our customers say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl"
                style={{ backgroundColor: BG }}
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-current" style={{ color: "#c59a3a" }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed opacity-70 mb-4 italic" style={{ fontFamily: "'Georgia', serif" }}>
                  "{r.text}"
                </p>
                <p className="text-xs font-medium tracking-[0.1em] uppercase" style={{ fontFamily: "sans-serif" }}>{r.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: "🌱", label: "Eco-Friendly Inks" },
            { icon: "🖼️", label: "Handcrafted Frames" },
            { icon: "🌍", label: "Carbon Neutral Shipping" },
            { icon: "🎁", label: "Gift Wrapping Available" },
          ].map((b) => (
            <div key={b.label}>
              <span className="text-2xl mb-2 block">{b.icon}</span>
              <p className="text-xs tracking-[0.1em] uppercase font-medium" style={{ fontFamily: "sans-serif" }}>{b.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 px-6" style={{ backgroundColor: DARK, color: "#f7f0e8" }}>
        <div className="max-w-xl mx-auto text-center">
          <Sun className="h-8 w-8 mx-auto mb-4 opacity-50" />
          <h2 className="text-2xl md:text-3xl mb-3" style={{ fontFamily: "'Georgia', serif" }}>Join the Sunset Studio community</h2>
          <p className="text-sm opacity-60 mb-8 leading-relaxed" style={{ fontFamily: "sans-serif" }}>
            Subscribe for new releases, behind-the-scenes, and exclusive discounts.
          </p>
          <div className="flex gap-0 rounded-full overflow-hidden border" style={{ borderColor: "rgba(247,240,232,0.2)" }}>
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-5 py-3 text-sm bg-transparent outline-none placeholder:opacity-40"
              style={{ color: "#f7f0e8", fontFamily: "sans-serif" }}
            />
            <Button
              className="rounded-full px-6 text-sm font-medium m-1"
              style={{ backgroundColor: "#f7f0e8", color: DARK, fontFamily: "sans-serif" }}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t" style={{ borderColor: "#e0d5c5", backgroundColor: BG }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            {[
              { title: "Shop", links: ["All Prints", "New Arrivals", "Best Sellers", "Sale", "Gift Cards"] },
              { title: "Collections", links: ["Landscapes", "Botanicals", "Forests", "Deserts", "Coastal"] },
              { title: "Info", links: ["About Us", "Sustainability", "Shipping", "Returns", "FAQ"] },
              { title: "Connect", links: ["Instagram", "Pinterest", "Contact Us", "Wholesale"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-xs tracking-[0.15em] uppercase font-semibold mb-3" style={{ fontFamily: "sans-serif" }}>{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm opacity-50 hover:opacity-100 transition-opacity" style={{ fontFamily: "sans-serif" }}>{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: "#e0d5c5" }}>
            <div className="flex items-center gap-2">
              <Sun className="h-4 w-4" style={{ color: ACCENT }} />
              <span className="text-[10px] tracking-[0.2em] uppercase opacity-40" style={{ fontFamily: "sans-serif" }}>© 2026 Sunset Studio</span>
            </div>
            <Link href="/afrify/templates-store">
              <Button variant="ghost" className="text-xs opacity-60 hover:opacity-100 rounded-full" style={{ fontFamily: "sans-serif" }}>
                ← Back to Templates
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}








