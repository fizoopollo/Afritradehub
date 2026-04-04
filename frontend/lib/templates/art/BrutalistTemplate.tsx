import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ShoppingBag, Menu, X, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import UseTemplateButton from "@/components/UseTemplateButton";

const art1 = "/assets/brutalist/art1.jpg";
const art2 = "/assets/brutalist/art2.jpg";
const art3 = "/assets/brutalist/art3.jpg";
const art4 = "/assets/brutalist/art4.jpg";
const art5 = "/assets/brutalist/art5.jpg";
const art6 = "/assets/brutalist/art6.jpg";
const book1 = "/assets/brutalist/book1.jpg";

const artistNames = [
  "HENRI-EDMOND CROSS",
  "VINCENT VAN GOGH",
  "JULIE DE GRAAG",
  "UTAGAWA HIROSHIGE",
  "PIET MONDRIAN",
  "FRANZ KLINE",
  "YAYOI KUSAMA",
  "JEAN-MICHEL BASQUIAT",
];

const products = [
  { name: "Starry Night Study", artist: "Vincent Van Gogh", price: "$2,400", image: art3, year: "1889" },
  { name: "Mediterranean Cypress", artist: "Henri-Edmond Cross", price: "$3,100", image: art2, year: "1908" },
  { name: "The Great Wave", artist: "Utagawa Hiroshige", price: "$1,800", image: art4, year: "1831" },
  { name: "Composition No. IX", artist: "Piet Mondrian", price: "$4,200", image: art5, year: "1942" },
  { name: "Untitled Black", artist: "Franz Kline", price: "$5,600", image: art1, year: "1957" },
  { name: "Form in Space", artist: "Contemporary", price: "$3,800", image: art6, year: "2024" },
];

const editorials = [
  { title: "The Return of Neo-Expressionism", date: "Feb 2026", excerpt: "How a new generation of painters is reclaiming emotional intensity in the age of digital detachment." },
  { title: "Collecting on a Budget", date: "Jan 2026", excerpt: "Five strategies for building a meaningful art collection without breaking the bank." },
  { title: "Why Museums Still Matter", date: "Dec 2025", excerpt: "In an increasingly virtual world, the physical gallery experience remains irreplaceable." },
];

const marqueeArtists = "SHOP ALL · HENRI-EDMOND CROSS · VINCENT VAN GOGH · JULIE DE GRAAG · UTAGAWA HIROSHIGE · PIET MONDRIAN · FRANZ KLINE · YAYOI KUSAMA · ";

export default function BrutalistTemplate() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#ffffff", color: "#000000", fontFamily: "'Arial', 'Helvetica Neue', sans-serif" }}>
      <UseTemplateButton templateName="Brutalist" />

      {/* Announcement Bar - Scrolling */}
      <div className="overflow-hidden py-2 border-b-2 border-black" style={{ backgroundColor: "#ffffff" }}>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap text-xs tracking-[0.1em]"
        >
          {"Free Shipping on all orders · ".repeat(12)}
        </motion.div>
      </div>

      {/* Navbar - Brutalist grid style */}
      <header className="border-b-2 border-black">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/afrify/templates/art/brutalist" className="px-6 py-4 text-2xl font-black tracking-tight border-r-2 border-black" style={{ fontFamily: "'Arial Black', 'Impact', sans-serif" }}>
            MoFA
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center flex-1">
            {["THE COLLECTION", "ARTISTS +", "BOOKSHOP", "EDITORIALS", "ABOUT"].map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s|\+/g, "")}`}
                className="px-6 py-4 text-xs font-bold tracking-[0.15em] uppercase border-r-2 border-black hover:bg-black hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center">
            <button className="px-4 py-4 border-l-2 border-black hover:bg-black hover:text-white transition-colors hidden lg:block">
              <Search className="h-4 w-4" />
            </button>
            <a href="#" className="px-6 py-4 text-xs font-bold tracking-[0.15em] uppercase border-l-2 border-black hover:bg-black hover:text-white transition-colors">
              CART (0)
            </a>
            <button className="px-4 py-4 border-l-2 border-black lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="lg:hidden border-t-2 border-black">
            {["THE COLLECTION", "ARTISTS", "BOOKSHOP", "EDITORIALS", "ABOUT"].map((item) => (
              <a key={item} href="#" className="block px-6 py-4 text-sm font-bold tracking-[0.15em] uppercase border-b-2 border-black hover:bg-black hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </header>

      {/* Hero - Giant MoFA Typography */}
      <section className="border-b-2 border-black">
        <div className="px-4 py-8 md:py-12">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[20vw] md:text-[18vw] font-black leading-[0.85] tracking-[-0.04em] text-center"
            style={{ fontFamily: "'Arial Black', 'Impact', sans-serif" }}
          >
            MoFA
          </motion.h1>
        </div>
      </section>

      {/* Artist Names Marquee */}
      <section className="border-b-2 border-black overflow-hidden py-4">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap"
        >
          <span className="text-4xl md:text-6xl font-black tracking-[-0.02em]" style={{ fontFamily: "'Arial Black', 'Impact', sans-serif" }}>
            {marqueeArtists.repeat(4)}
          </span>
        </motion.div>
      </section>

      {/* The Collection - Grid */}
      <section id="thecollection" className="border-b-2 border-black">
        <div className="px-6 py-6 border-b-2 border-black flex items-center justify-between">
          <h2 className="text-xs font-bold tracking-[0.2em] uppercase">The Collection</h2>
          <span className="text-xs font-bold tracking-[0.1em]">{products.length} WORKS</span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group cursor-pointer border-b-2 border-r-2 border-black"
            >
              <div className="aspect-square overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" />
              </div>
              <div className="p-4 border-t-2 border-black">
                <p className="text-[10px] font-bold tracking-[0.15em] uppercase opacity-50">{p.artist} · {p.year}</p>
                <h3 className="text-sm font-black uppercase tracking-wide mt-1">{p.name}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm font-bold">{p.price}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Artist - Full Width Split */}
      <section className="grid lg:grid-cols-2 border-b-2 border-black">
        <div className="border-b-2 lg:border-b-0 lg:border-r-2 border-black">
          <img src={art1} alt="Featured artwork" className="w-full h-full object-cover min-h-[400px]" />
        </div>
        <div className="flex flex-col justify-center p-8 md:p-16">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-6">Featured Artist</p>
          <h2 className="text-4xl md:text-6xl font-black leading-[0.9] tracking-[-0.02em] mb-6" style={{ fontFamily: "'Arial Black', 'Impact', sans-serif" }}>
            FRANZ<br />KLINE
          </h2>
          <p className="text-sm leading-relaxed mb-8 max-w-md">
            Known for his large-scale black and white paintings, Kline's work epitomizes the raw energy of Abstract
            Expressionism. His bold gestural strokes transformed the canvas into a battleground of form and emotion.
          </p>
          <div className="flex gap-4">
            <Button className="rounded-none bg-black text-white hover:bg-black/80 text-xs font-bold tracking-[0.15em] uppercase px-6 py-5">
              View Works <ArrowRight className="h-3.5 w-3.5 ml-2" />
            </Button>
            <Button variant="outline" className="rounded-none border-2 border-black text-xs font-bold tracking-[0.15em] uppercase px-6 py-5 hover:bg-black hover:text-white">
              Biography
            </Button>
          </div>
        </div>
      </section>

      {/* Bookshop */}
      <section id="bookshop" className="border-b-2 border-black">
        <div className="px-6 py-6 border-b-2 border-black">
          <h2 className="text-xs font-bold tracking-[0.2em] uppercase">Bookshop</h2>
        </div>
        <div className="grid lg:grid-cols-2">
          <div className="border-b-2 lg:border-b-0 lg:border-r-2 border-black overflow-hidden">
            <img src={book1} alt="Art book" className="w-full h-full object-cover min-h-[400px]" />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-16">
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4 opacity-50">New Release</p>
            <h3 className="text-3xl md:text-4xl font-black leading-[0.9] mb-4" style={{ fontFamily: "'Arial Black', 'Impact', sans-serif" }}>
              FORMS &<br />FIGURES
            </h3>
            <p className="text-sm leading-relaxed mb-2 max-w-md">
              A comprehensive survey of contemporary sculpture from the last decade. 320 pages, hardcover.
            </p>
            <p className="text-lg font-black mb-6">$65.00</p>
            <Button className="rounded-none bg-black text-white hover:bg-black/80 text-xs font-bold tracking-[0.15em] uppercase px-6 py-5 w-fit">
              Add to Cart <ArrowRight className="h-3.5 w-3.5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Editorials */}
      <section id="editorials" className="border-b-2 border-black">
        <div className="px-6 py-6 border-b-2 border-black flex items-center justify-between">
          <h2 className="text-xs font-bold tracking-[0.2em] uppercase">Editorials</h2>
          <a href="#" className="text-xs font-bold tracking-[0.1em] uppercase hover:underline">View All</a>
        </div>
        {editorials.map((e, i) => (
          <motion.a
            key={e.title}
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="block px-6 py-6 border-b-2 border-black hover:bg-black hover:text-white transition-colors group"
          >
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-50 mb-2">{e.date}</p>
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-2" style={{ fontFamily: "'Arial Black', 'Impact', sans-serif" }}>
                  {e.title}
                </h3>
                <p className="text-sm opacity-60 max-w-xl">{e.excerpt}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 mt-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
            </div>
          </motion.a>
        ))}
      </section>

      {/* About Section */}
      <section id="about" className="border-b-2 border-black">
        <div className="px-6 py-6 border-b-2 border-black">
          <h2 className="text-xs font-bold tracking-[0.2em] uppercase">About MoFA</h2>
        </div>
        <div className="grid lg:grid-cols-2">
          <div className="p-8 md:p-16 border-b-2 lg:border-b-0 lg:border-r-2 border-black">
            <h3 className="text-4xl md:text-5xl font-black leading-[0.9] tracking-[-0.02em] mb-8" style={{ fontFamily: "'Arial Black', 'Impact', sans-serif" }}>
              MUSEUM<br />OF FINE<br />ART
            </h3>
            <p className="text-sm leading-relaxed max-w-md mb-6">
              Founded in 2018, MoFA is an online gallery and print shop dedicated to making museum-quality art
              accessible to everyone. We partner directly with artists and estates to offer authenticated,
              limited-edition reproductions.
            </p>
            <p className="text-sm leading-relaxed max-w-md">
              Every print is produced on archival-grade paper using the finest Giclée printing technology,
              ensuring that colors remain vibrant for generations.
            </p>
          </div>
          <div className="grid grid-cols-2">
            {[
              { num: "2,400+", label: "Works Available" },
              { num: "180+", label: "Artists" },
              { num: "50K+", label: "Prints Sold" },
              { num: "99%", label: "Satisfaction" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col justify-center items-center p-8 border-b-2 border-r-2 border-black last:border-r-0 [&:nth-child(2)]:border-r-0 [&:nth-child(even)]:border-r-0">
                <span className="text-3xl md:text-4xl font-black" style={{ fontFamily: "'Arial Black', 'Impact', sans-serif" }}>{s.num}</span>
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase mt-2 opacity-50">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-b-2 border-black bg-black text-white">
        <div className="p-8 md:p-16 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black leading-[0.9] tracking-[-0.02em] mb-4" style={{ fontFamily: "'Arial Black', 'Impact', sans-serif" }}>
            JOIN THE<br />MAILING LIST
          </h2>
          <p className="text-xs tracking-[0.1em] uppercase opacity-50 mb-8">New releases · Artist features · Exhibition invites</p>
          <div className="flex border-2 border-white">
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="flex-1 px-4 py-3 text-xs tracking-[0.1em] uppercase bg-transparent outline-none placeholder:text-white/40"
            />
            <button className="px-6 py-3 bg-white text-black text-xs font-bold tracking-[0.15em] uppercase hover:bg-white/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Shop", links: ["The Collection", "New Arrivals", "Best Sellers", "Gift Cards"] },
            { title: "Artists", links: ["Directory", "Submit Work", "Commissions", "Residencies"] },
            { title: "Info", links: ["About", "Shipping", "Returns", "FAQ"] },
            { title: "Connect", links: ["Instagram", "Twitter", "Newsletter", "Contact"] },
          ].map((col) => (
            <div key={col.title} className="p-6 border-b-2 border-r-2 border-black last:border-r-0 [&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r-2">
              <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs uppercase tracking-[0.1em] opacity-50 hover:opacity-100 transition-opacity">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="px-6 py-4 border-b-2 border-black flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] tracking-[0.15em] uppercase opacity-40">© 2026 MoFA — Museum of Fine Art. All rights reserved.</p>
          <Link href="/afrify/templates-store">
            <Button variant="ghost" className="text-[10px] tracking-[0.15em] uppercase opacity-60 hover:opacity-100 rounded-none">
              ← Back to Templates
            </Button>
          </Link>
        </div>
      </footer>
    </div>
  );
}








