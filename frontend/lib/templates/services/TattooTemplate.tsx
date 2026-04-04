import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Menu, ArrowLeft, ChevronRight, Star, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import UseTemplateButton from "@/components/UseTemplateButton";
const heroImg = "/assets/beauty/wonder-hero.jpg";
const design1 = "/assets/beauty/adelle-hero.jpg";
const design2 = "/assets/beauty/adorn-hero.jpg";
const design3 = "/assets/beauty/align-hero.jpg";
const design4 = "/assets/beauty/amplify-hero.jpg";
const design5 = "/assets/beauty/aura-hero.jpg";

const designs = [
  { name: "Skull & Roses", price: "$180", image: design1, category: "Traditional" },
  { name: "Geometric Star", price: "$120", image: design2, category: "Geometric" },
  { name: "Botanical Bloom", price: "$150", image: design3, category: "Fine Line" },
  { name: "Snake & Dagger", price: "$200", image: design4, category: "Traditional" },
  { name: "Monarch", price: "$90", image: design5, category: "Fine Line" },
];

const artists = [
  { name: "Marcus Vega", specialty: "Black & Grey Realism", experience: "12 years" },
  { name: "Yuki Tanaka", specialty: "Fine Line & Botanical", experience: "8 years" },
  { name: "Dominic Cruz", specialty: "Traditional & Neo-Trad", experience: "15 years" },
];

const marqueeItems = [
  "SIGN UP & GET 15% OFF",
  "FREE DELIVERY, RETURN & EXCHANGE",
  "BOOK YOUR SESSION TODAY",
  "FREE DELIVERY, RETURN & EXCHANGE",
];

export default function TattooTemplate() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#111111", color: "#F5F5F0" }}>
      {/* Back */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/afrify/templates/services">
          <Button size="sm" variant="ghost" className="backdrop-blur-md bg-black/50 hover:bg-black/70 shadow-sm text-white">
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>
        </Link>
      </div>

      {/* Marquee Banner */}
      <div className="overflow-hidden py-2.5" style={{ backgroundColor: "#C41E1E" }}>
        <div className="flex animate-marquee whitespace-nowrap gap-8">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="text-[11px] tracking-[0.2em] text-white font-medium flex items-center gap-8">
              {item} <span className="text-white/40">—</span>
            </span>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="border-b" style={{ borderColor: "#222" }}>
        <div className="container mx-auto px-6 flex items-center justify-between py-4">
          <Menu className="h-5 w-5 cursor-pointer text-white/70 hover:text-white transition-colors" />
          <h1
            className="text-2xl md:text-3xl tracking-wide"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900, letterSpacing: "0.05em" }}
          >
            Tattoo Studio
          </h1>
          <Search className="h-5 w-5 cursor-pointer text-white/70 hover:text-white transition-colors" />
        </div>
      </header>

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden"
        style={{ minHeight: "75vh" }}
      >
        <img src={heroImg} alt="Tattoo studio" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(17,17,17,0.3) 0%, rgba(17,17,17,0.7) 100%)" }} />
        <div className="relative container mx-auto px-6 flex items-center justify-center text-center" style={{ minHeight: "75vh" }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h2
              className="text-5xl md:text-7xl leading-tight mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700 }}
            >
              Ink That Tells<br />Your Story
            </h2>
            <p className="text-sm md:text-base text-white/60 mb-8 max-w-md mx-auto">
              A story of community, shared experience, and authentic friendship.
            </p>
            <button
              className="px-10 py-3 text-xs tracking-[0.3em] font-semibold transition-all hover:brightness-110"
              style={{ backgroundColor: "#C41E1E", color: "#fff" }}
            >
              DISCOVER
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* New Ink Arrivals */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-4">
            <p className="text-xs tracking-[0.4em] mb-2" style={{ color: "#C41E1E" }}>STICKERS</p>
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700 }}>
              New Ink Arrivals
            </h2>
          </div>
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs tracking-[0.15em] text-white/40">{designs.length} NEW PRODUCTS</p>
            <div className="flex gap-4">
              {["MEN", "WOMEN", "VIEW ALL"].map((f) => (
                <span key={f} className="text-xs tracking-[0.15em] cursor-pointer text-white/50 hover:text-white transition-colors">
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {designs.map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square overflow-hidden rounded-sm mb-3" style={{ backgroundColor: "#fafafa" }}>
                  <img
                    src={d.image}
                    alt={d.name}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute top-2 left-2 text-[9px] tracking-[0.15em] px-2 py-0.5 rounded-sm bg-black/80 text-white">
                    {d.category}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-white/90">{d.name}</h3>
                <p className="text-sm" style={{ color: "#C41E1E" }}>{d.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-20" style={{ backgroundColor: "#1A1A1A" }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs tracking-[0.4em] mb-4" style={{ color: "#C41E1E" }}>ABOUT US</p>
              <h2 className="text-3xl md:text-5xl leading-tight mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700 }}>
                Where Art<br />Meets Skin
              </h2>
              <p className="text-sm leading-relaxed text-white/50 mb-8 max-w-md">
                Our studio brings together world-class artists with a passion for creating 
                meaningful, lasting pieces. Every tattoo we create is a collaboration between 
                artist and canvas — your story, our craft.
              </p>
              <button
                className="px-8 py-3 text-xs tracking-[0.25em] border transition-all hover:bg-white hover:text-black"
                style={{ borderColor: "#F5F5F0", color: "#F5F5F0" }}
              >
                LEARN MORE
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="aspect-square overflow-hidden rounded-sm"
            >
              <img src={heroImg} alt="Studio" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Artists */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.4em] mb-2" style={{ color: "#C41E1E" }}>OUR TEAM</p>
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700 }}>
              Meet the Artists
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {artists.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center p-8 border rounded-sm"
                style={{ borderColor: "#222" }}
              >
                <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold" style={{ backgroundColor: "#1A1A1A", color: "#C41E1E" }}>
                  {a.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="text-lg font-semibold mb-1">{a.name}</h3>
                <p className="text-sm text-white/50 mb-1">{a.specialty}</p>
                <p className="text-xs text-white/30">{a.experience}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20" style={{ backgroundColor: "#C41E1E" }}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl text-white mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700 }}>
            Ready to Get Inked?
          </h2>
          <p className="text-white/70 text-sm mb-8 max-w-md mx-auto">
            Book a free consultation with one of our artists. Walk-ins welcome.
          </p>
          <button className="px-10 py-3 text-xs tracking-[0.3em] font-semibold bg-white text-black hover:bg-white/90 transition-colors">
            BOOK NOW
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t" style={{ borderColor: "#222" }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div>
              <h4 className="text-xs tracking-[0.2em] font-semibold mb-4 text-white">SHOP</h4>
              {["Flash Designs", "Custom Work", "Stickers", "Aftercare"].map((l) => (
                <p key={l} className="text-sm mb-2 cursor-pointer text-white/40 hover:text-white transition-colors">{l}</p>
              ))}
            </div>
            <div>
              <h4 className="text-xs tracking-[0.2em] font-semibold mb-4 text-white">STUDIO</h4>
              {["Our Artists", "Gallery", "Book Session", "Gift Cards"].map((l) => (
                <p key={l} className="text-sm mb-2 cursor-pointer text-white/40 hover:text-white transition-colors">{l}</p>
              ))}
            </div>
            <div>
              <h4 className="text-xs tracking-[0.2em] font-semibold mb-4 text-white">INFO</h4>
              {["FAQ", "Aftercare Guide", "Pricing", "Contact"].map((l) => (
                <p key={l} className="text-sm mb-2 cursor-pointer text-white/40 hover:text-white transition-colors">{l}</p>
              ))}
            </div>
            <div>
              <h4 className="text-xs tracking-[0.2em] font-semibold mb-4 text-white">FOLLOW</h4>
              {["Instagram", "TikTok", "YouTube", "Twitter"].map((l) => (
                <p key={l} className="text-sm mb-2 cursor-pointer text-white/40 hover:text-white transition-colors">{l}</p>
              ))}
            </div>
          </div>
          <div className="text-center pt-6 border-t" style={{ borderColor: "#222" }}>
            <p className="text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Tattoo Studio</p>
            <p className="text-xs text-white/30">© 2026 Tattoo Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
      <UseTemplateButton templateName="Tattoo" />
    </div>
  );
}








