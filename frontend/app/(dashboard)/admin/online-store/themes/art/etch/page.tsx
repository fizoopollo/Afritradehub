'use client';

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, ShoppingBag, User, Menu, X, ArrowRight, Star, ChevronRight, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const collections = [
  { name: "City Night", count: 24 },
  { name: "Botanicals", count: 18 },
  { name: "Seascapes", count: 31 },
  { name: "Abstract", count: 42 },
];

const products = [
  { name: "Golden Hour I", artist: "Elena Maris", price: "$185" },
  { name: "Quiet Study", artist: "Theo Laurent", price: "$120" },
  { name: "Form No. 7", artist: "Yuki Tanaka", price: "$240" },
  { name: "Civic Lines", artist: "Ravi Kapoor", price: "$165" },
  { name: "Dusk Palette", artist: "Elena Maris", price: "$210" },
  { name: "Neon Drift", artist: "Zara Okonkwo", price: "$195" },
  { name: "Petal Study III", artist: "Theo Laurent", price: "$95" },
  { name: "Summit Light", artist: "Ravi Kapoor", price: "$280" },
];

const artists = [
  { name: "Elena Maris", specialty: "Landscapes & Seascapes", works: 47 },
  { name: "Theo Laurent", specialty: "Portraiture & Botanical", works: 32 },
  { name: "Yuki Tanaka", specialty: "Abstract Expressionism", works: 28 },
  { name: "Ravi Kapoor", specialty: "Architecture & Urban", works: 39 },
];

const marqueeText = "Hand-signed & certified • Custom framing & finishing • Strictly LIMITED EDITIONS • Free shipping on orders over $300 • ";

export default function EtchTemplate() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerBg = useTransform(scrollY, [0, 100], ["rgba(245,241,234,0)", "rgba(245,241,234,1)"]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5f1ea", color: "#1a1a1a", fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      <div className="text-center py-2 text-xs tracking-[0.2em] uppercase" style={{ backgroundColor: "#1a1a1a", color: "#f5f1ea" }}>
        Free shipping on orders over $300
      </div>

      <motion.header
        style={{ backgroundColor: headerBg }}
        className="sticky top-0 z-40 transition-shadow"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <div className="flex items-center gap-8">
            <Link href="/admin/online-store/themes/art/etch" className="text-2xl font-bold tracking-[0.3em] uppercase" style={{ fontFamily: "'Georgia', serif" }}>
              E T C H
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm tracking-[0.15em] uppercase">
            <a href="#shop" className="hover:opacity-60 transition-opacity">Shop</a>
            <a href="#collections" className="hover:opacity-60 transition-opacity">Collections</a>
            <a href="#artists" className="hover:opacity-60 transition-opacity">Artists</a>
            <a href="#about" className="hover:opacity-60 transition-opacity">About</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hover:opacity-60 transition-opacity"><Search className="h-4 w-4" /></button>
            <button className="hover:opacity-60 transition-opacity"><User className="h-4 w-4" /></button>
            <button className="hover:opacity-60 transition-opacity relative">
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full text-[8px] flex items-center justify-center text-white" style={{ backgroundColor: "#1a1a1a" }}>0</span>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden px-6 pb-6 space-y-4 text-sm tracking-[0.15em] uppercase"
            style={{ backgroundColor: "#f5f1ea" }}
          >
            <a href="#shop" className="block py-2 border-b" style={{ borderColor: "#d4cec4" }}>Shop</a>
            <a href="#collections" className="block py-2 border-b" style={{ borderColor: "#d4cec4" }}>Collections</a>
            <a href="#artists" className="block py-2 border-b" style={{ borderColor: "#d4cec4" }}>Artists</a>
            <a href="#about" className="block py-2">About</a>
          </motion.div>
        )}
      </motion.header>

      <section className="relative h-[85vh] min-h-[600px] overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,26,26,0.6) 0%, rgba(26,26,26,0.1) 50%, transparent 100%)" }} />
        <div className="absolute inset-0 flex items-end pb-20">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
              <p className="text-sm tracking-[0.3em] uppercase text-white/80 mb-4">Prints worth living with</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] max-w-2xl mb-4" style={{ fontFamily: "'Georgia', serif" }}>
                Limited and open edition prints from emerging and established artists.
              </h1>
              <a href="#shop">
                <Button className="mt-6 rounded-none px-8 py-6 text-sm tracking-[0.2em] uppercase font-normal" style={{ backgroundColor: "#f5f1ea", color: "#1a1a1a" }}>
                  Shop Art <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden py-4 border-y" style={{ borderColor: "#d4cec4", backgroundColor: "#1a1a1a" }}>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap text-sm tracking-[0.15em] uppercase"
          style={{ color: "#f5f1ea" }}
        >
          {marqueeText.repeat(6)}
        </motion.div>
      </div>

      <section id="collections" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase opacity-50 mb-2">Browse by</p>
              <h2 className="text-3xl md:text-4xl font-light" style={{ fontFamily: "'Georgia', serif" }}>Collections</h2>
            </div>
            <a href="#" className="text-sm tracking-[0.15em] uppercase hover:opacity-60 transition-opacity flex items-center gap-2">
              View all <ChevronRight className="h-3 w-3" />
            </a>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {collections.map((col, i) => (
              <motion.div
                key={col.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer p-6 border"
                style={{ borderColor: "#d4cec4" }}
              >
                <h3 className="text-lg font-medium tracking-wide">{col.name}</h3>
                <p className="text-sm opacity-50">{col.count} prints</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="shop" className="py-20 md:py-28" style={{ backgroundColor: "#eee8de" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase opacity-50 mb-2">Curated for you</p>
              <h2 className="text-3xl md:text-4xl font-light" style={{ fontFamily: "'Georgia', serif" }}>New Arrivals</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {products.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden mb-4 bg-gray-400 rounded">
                  <div className="w-full h-full" />
                </div>
                <p className="text-xs opacity-50 mb-1">{p.artist}</p>
                <h3 className="text-base font-medium">{p.name}</h3>
                <p className="text-sm mt-1">{p.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="artists" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase opacity-50 mb-2">The creatives</p>
            <h2 className="text-3xl md:text-4xl font-light" style={{ fontFamily: "'Georgia', serif" }}>Our Artists</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {artists.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group cursor-pointer"
              >
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-5 bg-gray-400" />
                <h3 className="text-lg font-medium">{a.name}</h3>
                <p className="text-sm opacity-50 mt-1">{a.specialty}</p>
                <p className="text-xs opacity-40 mt-1">{a.works} works</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 md:py-28" style={{ backgroundColor: "#eee8de" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase opacity-50 mb-4">Why Etch</p>
          <h2 className="text-3xl md:text-4xl font-light mb-12" style={{ fontFamily: "'Georgia', serif" }}>Prints Worth Living With</h2>
          <div className="grid sm:grid-cols-3 gap-10">
            {[
              { title: "Hand-Signed", desc: "Every limited edition print is personally signed by the artist with a certificate of authenticity." },
              { title: "Museum Quality", desc: "Printed on archival-grade, acid-free paper using Giclée technology for colors that last a lifetime." },
              { title: "Custom Framing", desc: "Choose from our selection of handcrafted frames, each made from sustainably sourced materials." },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: "#1a1a1a" }}>
                  <Star className="h-5 w-5" style={{ color: "#f5f1ea" }} />
                </div>
                <h3 className="text-lg font-medium mb-2">{v.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28" style={{ backgroundColor: "#1a1a1a", color: "#f5f1ea" }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <Mail className="h-8 w-8 mx-auto mb-6 opacity-50" />
          <h2 className="text-2xl md:text-3xl font-light mb-4" style={{ fontFamily: "'Georgia', serif" }}>Stay in the Frame</h2>
          <p className="text-sm opacity-60 mb-8 leading-relaxed">
            Subscribe for early access to new releases, artist features, and exclusive collector's editions.
          </p>
          <div className="flex gap-0">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 text-sm border bg-transparent outline-none placeholder:opacity-40"
              style={{ borderColor: "#f5f1ea33", color: "#f5f1ea" }}
            />
            <Button className="rounded-none px-6 py-3 text-sm tracking-[0.15em] uppercase font-normal" style={{ backgroundColor: "#f5f1ea", color: "#1a1a1a" }}>
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-16 border-t" style={{ borderColor: "#d4cec4", backgroundColor: "#f5f1ea" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: "#d4cec4" }}>
            <p className="text-xs tracking-[0.2em] uppercase opacity-40">© 2026 Etch — All rights reserved</p>
            <Link href="/admin/online-store/themes">
              <Button variant="ghost" className="text-xs tracking-[0.15em] uppercase opacity-60 hover:opacity-100">
                ← Back to Templates
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
