import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft, Search, User, ShoppingBag, Heart, Star,
  ChevronDown, ChevronRight, Menu, Sparkles, Leaf, Truck, RotateCcw
} from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";
const heroImg = "/assets/beauty/wonder-hero.jpg";
const heroVideo = "/assets/beauty/wonder-hero-video.mp4";

const CREAM = "#f5f0ea";
const DARK = "#2c2420";
const WARM = "#c4a882";

const products = [
  { name: "Glow Serum", price: "$42.00", tag: "BESTSELLER", rating: 4.9 },
  { name: "Hydra Cloud Cream", price: "$38.00", tag: "", rating: 4.8 },
  { name: "Vitamin C Drops", price: "$36.00", tag: "NEW", rating: 4.9 },
  { name: "Rose Petal Toner", price: "$28.00", tag: "", rating: 4.7 },
  { name: "Gentle Cleanser", price: "$24.00", tag: "", rating: 4.8 },
  { name: "Night Recovery Oil", price: "$48.00", tag: "BESTSELLER", rating: 5.0 },
  { name: "SPF 50 Glow Shield", price: "$32.00", tag: "NEW", rating: 4.7 },
  { name: "Lip Treatment Balm", price: "$18.00", tag: "", rating: 4.6 },
];

const collections = [
  { name: "Skincare", emoji: "🧴", desc: "Nourish & protect" },
  { name: "Bodycare", emoji: "🛁", desc: "Pamper yourself" },
  { name: "Haircare", emoji: "💆", desc: "Shine & strength" },
  { name: "Sets & Gifts", emoji: "🎁", desc: "Curated bundles" },
];

const testimonials = [
  { name: "Ava M.", text: "Every product feels like a dream. The packaging is magical and the results are real!", rating: 5 },
  { name: "Chloe L.", text: "The cloud cream is unlike anything I've ever tried. My skin drinks it up!", rating: 5 },
  { name: "Nina P.", text: "Wonder made me fall in love with skincare again. Simple, effective, beautiful.", rating: 5 },
];

export default function WonderTemplate() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <PageLayout>
      <UseTemplateButton templateName="Wonder" />

      {/* Scrolling Announcement Bar */}
      <div className="w-full py-2 overflow-hidden" style={{ background: DARK }}>
        <div className="whitespace-nowrap animate-marquee">
          <span className="text-[11px] tracking-[0.15em]" style={{ color: CREAM + "CC" }}>
            {Array(8).fill("Free Shipping Over $50! Returns are always on us. ✦ ").join("")}
          </span>
        </div>
      </div>

      {/* Nav */}
      <nav className="w-full py-4 border-b" style={{ background: CREAM, borderColor: DARK + "10" }}>
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Menu className="h-5 w-5 cursor-pointer" style={{ color: DARK }} />
            <span className="text-sm font-medium cursor-pointer hover:opacity-70" style={{ color: DARK }}>Shop</span>
            <span className="text-sm font-medium cursor-pointer hover:opacity-70" style={{ color: DARK }}>Bestseller</span>
            <span className="text-sm font-medium cursor-pointer hover:opacity-70" style={{ color: DARK }}>Sale</span>
          </div>
          <div className="flex items-center gap-1 text-xs" style={{ color: DARK + "80" }}>
            🇺🇸 USD <ChevronDown className="h-3 w-3" />
          </div>
          <div className="flex items-center gap-5" style={{ color: DARK }}>
            <Search className="h-4 w-4 cursor-pointer hover:opacity-70" />
            <User className="h-4 w-4 cursor-pointer hover:opacity-70" />
            <ShoppingBag className="h-4 w-4 cursor-pointer hover:opacity-70" />
          </div>
        </div>
      </nav>

      {/* Hero with Video */}
      <section className="relative w-full" style={{ height: "90vh" }}>
        <video
          src={heroVideo}
          poster={heroImg}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <h1
              className="text-[8rem] md:text-[12rem] font-light text-white leading-none tracking-tight"
              style={{ fontFamily: "'Georgia', serif", mixBlendMode: "overlay", opacity: 0.9 }}
            >
              beauty
            </h1>
          </motion.div>
        </div>
        <div className="absolute bottom-16 left-0 right-0 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <p className="text-sm text-white/90 mb-1">Discover your Beauty.</p>
            <p className="text-sm text-white/90 mb-6">Where skincare Begins.</p>
            <ChevronDown className="h-6 w-6 text-white/60 mx-auto animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Mission with Inline Emojis */}
      <section className="py-20" style={{ background: CREAM }}>
        <div className="container max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: WARM }}>Empower Your Skin care</p>
            <h2 className="text-2xl md:text-3xl leading-relaxed" style={{ fontFamily: "'Georgia', serif", color: DARK }}>
              The harmony between powerful 🧴 high-performance ingredients
              and exceptionally simple 🌿 skincare routines.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-medium" style={{ fontFamily: "'Georgia', serif", color: DARK }}>Shop Collections</h2>
            <Link href="#" className="text-xs tracking-[0.15em] uppercase flex items-center gap-1 hover:opacity-70" style={{ color: WARM }}>
              View All <ChevronRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {collections.map((col, i) => (
              <motion.div
                key={col.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer rounded-2xl p-8 text-center transition-all hover:shadow-lg"
                style={{ background: CREAM }}
              >
                <div className="text-4xl mb-4">{col.emoji}</div>
                <h3 className="font-medium mb-1" style={{ color: DARK }}>{col.name}</h3>
                <p className="text-xs" style={{ color: DARK + "60" }}>{col.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16" style={{ background: CREAM }}>
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-medium" style={{ fontFamily: "'Georgia', serif", color: DARK }}>Bestsellers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredProduct(i)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative aspect-square rounded-xl overflow-hidden mb-4" style={{ background: "white" }}>
                  <div className="w-full h-full flex items-center justify-center">
                    <Sparkles className="h-12 w-12 transition-transform duration-300 group-hover:scale-110" style={{ color: WARM + "40" }} />
                  </div>
                  {product.tag && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] tracking-wider uppercase font-bold rounded-full text-white" style={{ background: DARK }}>
                      {product.tag}
                    </span>
                  )}
                  <AnimatePresence>
                    {hoveredProduct === i && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute bottom-3 left-3 right-3"
                      >
                        <Button className="w-full rounded-full text-xs tracking-wider uppercase" style={{ background: DARK, color: CREAM }}>
                          Quick Add
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <button className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="h-4 w-4" style={{ color: DARK }} />
                  </button>
                </div>
                <h3 className="text-sm font-medium mb-1" style={{ color: DARK }}>{product.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm" style={{ color: DARK }}>{product.price}</span>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-3 w-3" fill={j < Math.floor(product.rating) ? WARM : "transparent"} stroke={WARM} strokeWidth={1.5} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="py-12 border-y" style={{ borderColor: DARK + "10", background: "white" }}>
        <div className="container">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { icon: Leaf, label: "Clean Beauty" },
              { icon: Truck, label: "Free Shipping" },
              { icon: RotateCcw, label: "Easy Returns" },
            ].map((feat, i) => (
              <motion.div
                key={feat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <feat.icon className="h-5 w-5" style={{ color: WARM }} />
                <span className="text-xs tracking-widest uppercase" style={{ color: DARK }}>{feat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ background: CREAM }}>
        <div className="container">
          <h2 className="text-2xl font-medium text-center mb-12" style={{ fontFamily: "'Georgia', serif", color: DARK }}>
            What our community says
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl" style={{ background: "white" }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4" fill={WARM} stroke={WARM} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-6 italic" style={{ color: DARK + "CC" }}>"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ background: WARM }}>
                    {t.name.charAt(0)}
                  </div>
                  <span className="text-sm font-medium" style={{ color: DARK }}>{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center" style={{ background: DARK }}>
        <div className="container max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: WARM }}>Join the Wonder</p>
            <h2 className="text-3xl md:text-4xl text-white mb-6" style={{ fontFamily: "'Georgia', serif" }}>
              Discover your beauty ritual
            </h2>
            <p className="text-sm mb-8" style={{ color: CREAM + "99" }}>
              Subscribe for 15% off your first order and exclusive access to new launches.
            </p>
            <div className="flex items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3.5 text-sm border-0 outline-none rounded-l-full"
                style={{ background: CREAM, color: DARK }}
              />
              <Button className="rounded-r-full px-8 py-3.5 text-xs tracking-wider uppercase font-medium" style={{ background: WARM, color: "white" }}>
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back */}
      <section className="py-8 text-center" style={{ background: CREAM }}>
        <Link href="/afrify/templates/beauty">
          <Button variant="ghost" className="text-sm" style={{ color: DARK }}>
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Beauty Templates
          </Button>
        </Link>
      </section>
    </PageLayout>
  );
}









