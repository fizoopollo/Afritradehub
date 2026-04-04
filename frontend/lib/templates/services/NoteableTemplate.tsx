import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag, Search, User, ChevronRight, Star, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
const heroImg = "/assets/beauty/routin-hero.jpg";
const product1 = "/assets/beauty/sleek-hero.jpg";
const product2 = "/assets/beauty/stretch-hero.jpg";
const product3 = "/assets/beauty/vantage-hero.jpg";
const product4 = "/assets/beauty/vogue-hero.jpg";

const navLinks = ["INVITATIONS", "STATIONERY", "JOURNALS", "GIFTS", "BLOG", "SALE"];

const brandLogos = ["VOGUE", "House Beautiful", "BAZAAR", "dwell"];

const products = [
  {
    name: "Wedding Suite",
    price: "$89.00",
    comparePrice: "$120.00",
    image: product1,
    badge: "Best Seller",
  },
  {
    name: "Monogram Journal",
    price: "$45.00",
    image: product2,
  },
  {
    name: "Thank You Cards",
    price: "$24.00",
    image: product3,
    badge: "New",
  },
  {
    name: "Botanical Cards",
    price: "$32.00",
    image: product4,
  },
];

const categories = [
  { name: "Paper Party", desc: "Festive designs for every celebration", image: product1 },
  { name: "Daily Notes", desc: "Elevate your everyday writing", image: product2 },
  { name: "Gift Sets", desc: "Curated bundles they'll love", image: product3 },
];

const testimonials = [
  { name: "Sarah M.", text: "The quality of these invitations exceeded all expectations. Our guests were truly impressed.", rating: 5 },
  { name: "James T.", text: "Beautiful monogramming on the journals. Perfect corporate gifts.", rating: 5 },
  { name: "Emily R.", text: "I've ordered three times now. The botanical cards are simply stunning.", rating: 5 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function NoteableTemplate() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF8F5", color: "#3B3228" }}>
      {/* Back to templates */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/afrify/templates/services">
          <Button size="sm" variant="ghost" className="backdrop-blur-md bg-white/70 hover:bg-white/90 shadow-sm" style={{ color: "#3B3228" }}>
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>
        </Link>
      </div>

      {/* Top bar */}
      <div className="text-center py-2 text-xs tracking-widest" style={{ backgroundColor: "#EDE8E0", color: "#6B5E4F" }}>
        FREE SHIPPING ON ORDERS OVER $75 · USE CODE <span className="font-semibold">NOTE15</span>
      </div>

      {/* Header / Nav */}
      <header className="border-b" style={{ borderColor: "#E8E2D9", backgroundColor: "#FAF8F5" }}>
        <div className="container mx-auto px-6 flex items-center justify-between py-4">
          <User className="h-5 w-5 cursor-pointer" style={{ color: "#6B5E4F" }} />
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}>
              Note·able
            </h1>
            <nav className="hidden md:flex items-center gap-6 mt-3">
              {navLinks.map((l) => (
                <span key={l} className="text-[11px] tracking-[0.2em] cursor-pointer hover:opacity-60 transition-opacity" style={{ color: "#6B5E4F" }}>
                  {l}
                </span>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Search className="h-5 w-5 cursor-pointer" style={{ color: "#6B5E4F" }} />
            <div className="relative">
              <ShoppingBag className="h-5 w-5 cursor-pointer" style={{ color: "#6B5E4F" }} />
              <span className="absolute -top-1.5 -right-1.5 h-4 w-4 rounded-full text-[10px] flex items-center justify-center text-white" style={{ backgroundColor: "#8B7355" }}>
                2
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
        style={{ minHeight: "70vh" }}
      >
        <img src={heroImg} alt="Custom stationery" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(250,248,245,0.7) 40%, transparent 100%)" }} />
        <div className="relative container mx-auto px-6 flex items-center" style={{ minHeight: "70vh" }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-lg"
          >
            <h2 className="text-4xl md:text-6xl leading-tight mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400, color: "#3B3228" }}>
              The Easiest Way to Customize Stationery
            </h2>
            <button
              className="px-8 py-3 text-xs tracking-[0.25em] border transition-all hover:opacity-80"
              style={{ borderColor: "#3B3228", color: "#3B3228", backgroundColor: "transparent" }}
            >
              START CUSTOMIZING
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Brand Logos */}
      <section className="py-10 border-y" style={{ borderColor: "#E8E2D9", backgroundColor: "#F5F0EA" }}>
        <div className="container mx-auto px-6 flex items-center justify-center gap-12 md:gap-20 flex-wrap">
          {brandLogos.map((logo) => (
            <span
              key={logo}
              className="text-lg md:text-2xl tracking-wide opacity-40"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400, color: "#3B3228" }}
            >
              {logo}
            </span>
          ))}
        </div>
      </section>

      {/* Category Tiles */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group cursor-pointer relative overflow-hidden rounded-sm"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6" style={{ background: "linear-gradient(to top, rgba(59,50,40,0.6) 0%, transparent 50%)" }}>
                  <h3 className="text-white text-2xl mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}>
                    {cat.name}
                  </h3>
                  <p className="text-white/70 text-sm">{cat.desc}</p>
                  <span className="mt-3 text-white text-xs tracking-[0.2em] flex items-center gap-1 group-hover:gap-2 transition-all">
                    SHOP NOW <ChevronRight className="h-3 w-3" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16" style={{ backgroundColor: "#F5F0EA" }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] mb-3" style={{ color: "#8B7355" }}>CURATED COLLECTION</p>
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}>
              Our Bestsellers
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <motion.div
                key={p.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-4">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  {p.badge && (
                    <span className="absolute top-3 left-3 text-[10px] tracking-[0.15em] px-3 py-1 rounded-sm text-white" style={{ backgroundColor: "#8B7355" }}>
                      {p.badge}
                    </span>
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-full py-2 text-xs tracking-[0.2em] text-white transition-opacity" style={{ backgroundColor: "#3B3228" }}>
                      QUICK ADD
                    </button>
                  </div>
                </div>
                <h3 className="text-sm font-medium" style={{ color: "#3B3228" }}>{p.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm" style={{ color: "#8B7355" }}>{p.price}</span>
                  {p.comparePrice && (
                    <span className="text-xs line-through" style={{ color: "#B8AFA4" }}>{p.comparePrice}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] mb-3" style={{ color: "#8B7355" }}>WHAT CUSTOMERS SAY</p>
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}>
              Reviews
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center p-6"
              >
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" style={{ color: "#C4A96A" }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#6B5E4F", fontStyle: "italic" }}>
                  "{t.text}"
                </p>
                <p className="text-xs tracking-[0.15em] font-semibold" style={{ color: "#3B3228" }}>{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16" style={{ backgroundColor: "#EDE8E0" }}>
        <div className="container mx-auto px-6 text-center max-w-md">
          <h2 className="text-2xl md:text-3xl mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}>
            Stay in the Loop
          </h2>
          <p className="text-sm mb-6" style={{ color: "#6B5E4F" }}>
            Subscribe for exclusive designs, early access, and 10% off your first order.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 text-sm border rounded-sm outline-none"
              style={{ borderColor: "#D4CEC5", backgroundColor: "#FAF8F5", color: "#3B3228" }}
            />
            <button className="px-6 py-3 text-xs tracking-[0.2em] text-white" style={{ backgroundColor: "#3B3228" }}>
              JOIN
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#FAF8F5" }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div>
              <h4 className="text-xs tracking-[0.2em] font-semibold mb-4" style={{ color: "#3B3228" }}>SHOP</h4>
              {["Invitations", "Stationery", "Journals", "Gift Sets"].map((l) => (
                <p key={l} className="text-sm mb-2 cursor-pointer hover:opacity-60 transition-opacity" style={{ color: "#6B5E4F" }}>{l}</p>
              ))}
            </div>
            <div>
              <h4 className="text-xs tracking-[0.2em] font-semibold mb-4" style={{ color: "#3B3228" }}>HELP</h4>
              {["FAQ", "Shipping", "Returns", "Contact"].map((l) => (
                <p key={l} className="text-sm mb-2 cursor-pointer hover:opacity-60 transition-opacity" style={{ color: "#6B5E4F" }}>{l}</p>
              ))}
            </div>
            <div>
              <h4 className="text-xs tracking-[0.2em] font-semibold mb-4" style={{ color: "#3B3228" }}>ABOUT</h4>
              {["Our Story", "Sustainability", "Press", "Careers"].map((l) => (
                <p key={l} className="text-sm mb-2 cursor-pointer hover:opacity-60 transition-opacity" style={{ color: "#6B5E4F" }}>{l}</p>
              ))}
            </div>
            <div>
              <h4 className="text-xs tracking-[0.2em] font-semibold mb-4" style={{ color: "#3B3228" }}>FOLLOW</h4>
              {["Instagram", "Pinterest", "Facebook", "TikTok"].map((l) => (
                <p key={l} className="text-sm mb-2 cursor-pointer hover:opacity-60 transition-opacity" style={{ color: "#6B5E4F" }}>{l}</p>
              ))}
            </div>
          </div>
          <div className="text-center pt-6 border-t" style={{ borderColor: "#E8E2D9" }}>
            <p className="text-2xl mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}>Note·able</p>
            <p className="text-xs" style={{ color: "#B8AFA4" }}>© 2026 Note·able. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}








