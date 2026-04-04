import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, ShoppingBag, Star, ArrowRight, ArrowUpRight } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";

const art1 = "/assets/exhibit/art1.jpg";
const art2 = "/assets/exhibit/art2.jpg";
const art3 = "/assets/exhibit/art3.jpg";
const art4 = "/assets/exhibit/art4.jpg";
const art5 = "/assets/exhibit/art5.jpg";
const art6 = "/assets/exhibit/art6.jpg";
const art7 = "/assets/exhibit/art7.jpg";
const art8 = "/assets/exhibit/art8.jpg";

const BLACK = "#0a0a0a";
const WHITE = "#fafafa";
const GRAY = "#888888";

const galleryItems = [
  { image: art1, title: "Chromatic Burst", artist: "Elena Voss", price: "CHF 3,200", year: "2024" },
  { image: art2, title: "Equilibrium", artist: "Marcus Chen", price: "CHF 8,500", year: "2023" },
  { image: art3, title: "Shoreline No. 4", artist: "Kai Andersson", price: "CHF 2,800", year: "2024" },
  { image: art4, title: "Spectrum", artist: "Yuki Tanaka", price: "CHF 4,100", year: "2023" },
  { image: art5, title: "Nocturne & Gold", artist: "Sofia Laurent", price: "CHF 5,600", year: "2024" },
  { image: art6, title: "Figure Study VII", artist: "James Holder", price: "CHF 1,900", year: "2022" },
  { image: art7, title: "Vessels", artist: "Ama Owusu", price: "CHF 2,200", year: "2024" },
  { image: art8, title: "Alpine Dawn", artist: "Lukas Braun", price: "CHF 3,400", year: "2023" },
];

const publications = [
  { title: "Exhibit Vol. 12", subtitle: "The Architecture Issue", year: "2024" },
  { title: "Exhibit Vol. 11", subtitle: "New Voices in Sculpture", year: "2023" },
  { title: "Exhibit Vol. 10", subtitle: "Colour & Form", year: "2023" },
];

const exhibitions = [
  { title: "Chromatic Futures", date: "Mar 15 — May 20, 2026", location: "Main Gallery" },
  { title: "Material Dialogues", date: "Jun 1 — Aug 30, 2026", location: "East Wing" },
  { title: "Intimate Landscapes", date: "Sep 10 — Nov 15, 2026", location: "North Hall" },
];

export default function ExhibitTemplate() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: WHITE, color: BLACK }}>
      <UseTemplateButton templateName="Exhibit" />

      {/* Navbar — 4-column Swiss layout */}
      <nav className="sticky top-0 z-40 border-b" style={{ backgroundColor: WHITE, borderColor: `${BLACK}15` }}>
        <div className="px-6 md:px-10 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-start text-sm">
            <div>
              <span className="font-medium tracking-tight">Exhibit</span>
            </div>
            <div className="hidden md:block">
              <span style={{ color: GRAY }}>Art en masse.</span>
            </div>
            <div className="hidden md:block text-sm leading-relaxed" style={{ color: GRAY }}>
              <span>Bahnhofplatz 94,</span><br />
              <span>Zurich, Switzerland</span><br />
              <span>Open Mon – Sat</span>
            </div>
            <div className="flex items-center justify-end gap-6 text-sm">
              {["Shop", "Publications", "About"].map((item) => (
                <button key={item} className="hover:opacity-50 transition-opacity">{item}</button>
              ))}
              <button className="hover:opacity-50 transition-opacity">Cart (0)</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero — Massive Typography */}
      <section className="px-6 md:px-10 pt-8 pb-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="leading-[0.85] tracking-[-0.04em] font-black"
          style={{
            fontSize: "clamp(5rem, 18vw, 20rem)",
            fontFamily: "'Arial Black', 'Impact', sans-serif",
            color: BLACK,
          }}
        >
          Exhibit
        </motion.h1>
      </section>

      {/* Thumbnail Strip */}
      <section className="px-6 md:px-10 pb-16">
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
          {galleryItems.slice(0, 6).map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="flex-shrink-0 w-28 md:w-36 cursor-pointer group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 md:px-10 pb-20">
        <div className="flex items-center justify-between mb-10 border-b pb-4" style={{ borderColor: `${BLACK}15` }}>
          <h2 className="text-xs tracking-[0.2em] uppercase" style={{ color: GRAY }}>Featured Works</h2>
          <span className="text-xs" style={{ color: GRAY }}>{galleryItems.length} pieces</span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredItem(i)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative aspect-square overflow-hidden mb-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
                {/* Quick view overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: `${BLACK}40` }}
                >
                  <button
                    className="px-5 py-2.5 text-[11px] tracking-[0.15em] uppercase font-medium"
                    style={{ backgroundColor: WHITE, color: BLACK }}
                  >
                    Quick View
                  </button>
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-medium leading-tight">{item.title}</h3>
                  <p className="text-xs mt-0.5" style={{ color: GRAY }}>{item.artist}</p>
                </div>
                <span className="text-xs" style={{ color: GRAY }}>{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            className="px-8 py-3 text-xs tracking-[0.2em] uppercase font-medium border hover:bg-black hover:text-white transition-all duration-300"
            style={{ borderColor: BLACK, color: BLACK }}
          >
            View All Works
          </button>
        </div>
      </section>

      {/* Large Feature Image */}
      <section className="px-6 md:px-10 pb-20">
        <div className="relative overflow-hidden cursor-pointer group">
          <img
            src={art2}
            alt="Featured sculpture"
            className="w-full h-[60vh] md:h-[80vh] object-cover group-hover:scale-[1.02] transition-transform duration-1000"
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12" style={{ background: `linear-gradient(transparent, ${BLACK}cc)` }}>
            <span className="text-xs tracking-[0.2em] uppercase mb-2 block" style={{ color: `${WHITE}80` }}>Now Showing</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight" style={{ color: WHITE, fontFamily: "'Arial Black', sans-serif" }}>
              Material Dialogues
            </h2>
            <p className="text-sm mt-2 max-w-md" style={{ color: `${WHITE}70` }}>
              An exploration of form, texture, and the space between objects. Featuring 12 international sculptors.
            </p>
          </div>
        </div>
      </section>

      {/* Exhibitions List */}
      <section className="px-6 md:px-10 pb-20">
        <h2 className="text-xs tracking-[0.2em] uppercase mb-8" style={{ color: GRAY }}>Upcoming Exhibitions</h2>
        <div className="divide-y" style={{ borderColor: `${BLACK}15` }}>
          {exhibitions.map((ex, i) => (
            <motion.div
              key={ex.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group py-6 md:py-8 flex items-center justify-between cursor-pointer hover:pl-2 transition-all"
              style={{ borderColor: `${BLACK}15` }}
            >
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-medium tracking-tight group-hover:opacity-70 transition-opacity">
                  {ex.title}
                </h3>
                <div className="flex gap-4 mt-1">
                  <span className="text-xs" style={{ color: GRAY }}>{ex.date}</span>
                  <span className="text-xs" style={{ color: GRAY }}>{ex.location}</span>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: GRAY }} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section className="px-6 md:px-10 pb-20" style={{ backgroundColor: BLACK, color: WHITE }}>
        <div className="py-20">
          <h2 className="text-xs tracking-[0.2em] uppercase mb-12" style={{ color: GRAY }}>Publications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {publications.map((pub, i) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] mb-4 flex items-center justify-center border" style={{ borderColor: `${WHITE}20` }}>
                  <div className="text-center px-6">
                    <p className="text-4xl md:text-5xl font-black tracking-[-0.03em] mb-2" style={{ fontFamily: "'Arial Black', sans-serif" }}>
                      {pub.title.split("Vol. ")[1] ? `Vol. ${pub.title.split("Vol. ")[1]}` : pub.title}
                    </p>
                    <p className="text-xs tracking-[0.1em] uppercase" style={{ color: GRAY }}>{pub.subtitle}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{pub.title}</span>
                  <span className="text-xs" style={{ color: GRAY }}>{pub.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="grid lg:grid-cols-2">
        <div className="px-8 md:px-16 py-20 flex items-center">
          <div>
            <h2 className="text-xs tracking-[0.2em] uppercase mb-6" style={{ color: GRAY }}>About the Gallery</h2>
            <p className="text-2xl md:text-3xl font-medium leading-relaxed tracking-tight mb-8">
              Exhibit is a contemporary art gallery based in Zurich, Switzerland. 
              We represent emerging and mid-career artists working across painting, 
              sculpture, photography, and new media.
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: GRAY }}>
              Founded in 2008, we have hosted over 150 exhibitions and worked with 
              more than 200 artists from 40 countries. Our mission is to make contemporary 
              art accessible while maintaining the highest curatorial standards.
            </p>
            <button
              className="text-xs tracking-[0.2em] uppercase font-medium underline underline-offset-4 hover:opacity-60 transition-opacity"
            >
              Read More
            </button>
          </div>
        </div>
        <div>
          <img src={art8} alt="Swiss Alps" className="w-full h-full object-cover min-h-[400px]" />
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-10 py-16 border-y" style={{ borderColor: `${BLACK}15` }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "150+", label: "Exhibitions" },
            { value: "200+", label: "Artists" },
            { value: "40", label: "Countries" },
            { value: "18", label: "Years" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-black tracking-tight" style={{ fontFamily: "'Arial Black', sans-serif" }}>
                {stat.value}
              </p>
              <p className="text-xs mt-1 tracking-[0.1em] uppercase" style={{ color: GRAY }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-6 md:px-10 py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">Stay in the loop.</h2>
        <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: GRAY }}>
          Subscribe for exhibition previews, artist interviews, and gallery news.
        </p>
        <div className="flex gap-0 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 px-4 py-3 text-sm border outline-none"
            style={{ borderColor: `${BLACK}20`, backgroundColor: "transparent" }}
          />
          <button
            className="px-6 py-3 text-xs tracking-[0.15em] uppercase font-medium"
            style={{ backgroundColor: BLACK, color: WHITE }}
          >
            Subscribe
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-10 py-12 border-t" style={{ borderColor: `${BLACK}15` }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <span className="text-sm font-medium">Exhibit</span>
            <p className="text-xs mt-2 leading-relaxed" style={{ color: GRAY }}>
              Art en masse.<br />
              Bahnhofplatz 94<br />
              Zurich, Switzerland
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.1em] uppercase mb-3 font-medium">Navigate</p>
            <div className="space-y-1.5">
              {["Shop", "Exhibitions", "Artists", "Publications", "About"].map((item) => (
                <p key={item} className="text-xs cursor-pointer hover:opacity-50 transition-opacity" style={{ color: GRAY }}>{item}</p>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs tracking-[0.1em] uppercase mb-3 font-medium">Information</p>
            <div className="space-y-1.5">
              {["Shipping", "Returns", "FAQ", "Privacy Policy", "Terms"].map((item) => (
                <p key={item} className="text-xs cursor-pointer hover:opacity-50 transition-opacity" style={{ color: GRAY }}>{item}</p>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs tracking-[0.1em] uppercase mb-3 font-medium">Follow</p>
            <div className="space-y-1.5">
              {["Instagram", "Twitter", "Pinterest", "Newsletter"].map((item) => (
                <p key={item} className="text-xs cursor-pointer hover:opacity-50 transition-opacity" style={{ color: GRAY }}>{item}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-6 border-t" style={{ borderColor: `${BLACK}15` }}>
          <p className="text-[11px]" style={{ color: GRAY }}>© 2026 Exhibit Gallery. All rights reserved.</p>
          <p className="text-[11px]" style={{ color: GRAY }}>Designed in Zurich</p>
        </div>
      </footer>

      {/* Back to Templates */}
      <section className="py-8 text-center" style={{ backgroundColor: `${BLACK}05` }}>
        <Link href="/afrify/templates-store">
          <Button variant="ghost"><ArrowLeft className="h-4 w-4" /> Back to Templates</Button>
        </Link>
      </section>
    </div>
  );
}








