import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, ArrowLeft, Search, User, ShoppingBag, Heart,
  Star, ChevronRight, Sparkles, Quote, Leaf, Shield, Truck, Gift
} from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";
const heroImg = "/assets/beauty/beyours-hero.jpg";
const heroVideo = "/assets/beauty/beyours-hero-video.mp4";

const WARM = "#c8956c";
const BLUSH = "#f5e6de";
const DARK = "#1a1612";

const navLinks = ["BRANDS", "SKINCARE", "BABY & KIDS", "HAIR CARE", "BODY CARE", "EXPLORE", "OUR STORES"];

const categories = [
  { name: "Skincare", count: 42, icon: "🧴" },
  { name: "Hair Care", count: 28, icon: "💆" },
  { name: "Body Care", count: 35, icon: "🛁" },
  { name: "Baby & Kids", count: 18, icon: "👶" },
];

const products = [
  { name: "Buttah Skin Cocoshea Revitalizing Cream", price: "$23.99", tag: "BESTSELLER", rating: 4.8 },
  { name: "Vitamin C Brightening Serum", price: "$34.99", tag: "", rating: 4.9 },
  { name: "Hydrating Rose Water Toner", price: "$18.99", tag: "NEW", rating: 4.7 },
  { name: "Shea Butter Body Lotion", price: "$21.99", tag: "", rating: 4.8 },
  { name: "Gentle Foaming Cleanser", price: "$16.99", tag: "", rating: 4.6 },
  { name: "Overnight Recovery Mask", price: "$28.99", tag: "BESTSELLER", rating: 4.9 },
  { name: "SPF 50 Daily Moisturizer", price: "$26.99", tag: "NEW", rating: 4.7 },
  { name: "Nourishing Hair Oil", price: "$19.99", tag: "", rating: 4.8 },
];

const testimonials = [
  { name: "Amara J.", text: "My skin has never felt this nourished. The cocoa butter cream is pure heaven on my skin!", rating: 5 },
  { name: "Keisha M.", text: "Finally a brand that truly understands melanin-rich skin. Every product is a winner.", rating: 5 },
  { name: "Fatima R.", text: "The vitamin C serum gave me the glow I've been chasing for years. Absolutely love it!", rating: 5 },
];

const features = [
  { icon: Leaf, title: "100% Natural", desc: "Clean ingredients, no harsh chemicals" },
  { icon: Shield, title: "Dermatologist Tested", desc: "Safe for all skin types" },
  { icon: Truck, title: "Free Shipping", desc: "On orders over $50" },
  { icon: Gift, title: "Gift Wrapping", desc: "Beautiful packaging included" },
];

export default function BeYoursTemplate() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <PageLayout>
      <UseTemplateButton templateName="BeYours" />

      {/* Announcement Bar */}
      <div className="w-full py-2.5 text-center text-xs tracking-[0.2em] uppercase" style={{ background: DARK, color: BLUSH }}>
        🔥 Black Friday Sale: Save up to 60% with code <span className="font-bold">BLACKFRIDAY</span>
      </div>

      {/* Mega Nav */}
      <nav className="w-full border-b" style={{ borderColor: WARM + "20", background: BLUSH }}>
        <div className="container flex items-center justify-between py-3">
          <div className="flex items-center gap-2 text-xs" style={{ color: DARK + "80" }}>
            🌍 UNITED STATES (USD $)
          </div>
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <span key={link} className="text-xs tracking-[0.15em] font-medium cursor-pointer hover:opacity-70 transition-opacity" style={{ color: DARK }}>
                {link}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4" style={{ color: DARK }}>
            <Search className="h-4 w-4 cursor-pointer hover:opacity-70" />
            <Heart className="h-4 w-4 cursor-pointer hover:opacity-70" />
            <User className="h-4 w-4 cursor-pointer hover:opacity-70" />
            <div className="relative">
              <ShoppingBag className="h-4 w-4 cursor-pointer hover:opacity-70" />
              <span className="absolute -top-1.5 -right-1.5 h-3.5 w-3.5 rounded-full text-[9px] font-bold flex items-center justify-center text-white" style={{ background: WARM }}>0</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative w-full" style={{ height: "85vh" }}>
        <video
          src={heroVideo}
          poster={heroImg}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-end">
          <div className="pr-12 md:pr-24 text-right max-w-lg">
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: WARM }}>#UPNEXT</p>
              <h1 className="text-5xl md:text-7xl font-light text-white mb-2" style={{ fontFamily: "'Georgia', serif" }}>
                On the <span className="italic" style={{ color: WARM }}>Horizon</span>
              </h1>
              <div className="mt-8">
                <Button className="rounded-none px-10 py-3 text-xs tracking-[0.2em] uppercase font-medium border-2" style={{ background: "transparent", borderColor: "white", color: "white" }}>
                  GET NOTIFIED
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 text-center" style={{ background: BLUSH }}>
        <div className="container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Georgia', serif", color: DARK }}>
              Truly <span className="italic" style={{ color: WARM }}>love the skin</span> you're in
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: DARK + "99" }}>
              Our vision is to give melanin rich skin the attention it deserves. We don't want
              to just <span className="underline decoration-wavy" style={{ textDecorationColor: WARM }}>nurture</span> your skin—we want you to discover the <span className="underline decoration-wavy" style={{ textDecorationColor: WARM }}>beauty</span> that lies within.
            </p>
            <p className="text-sm mt-6" style={{ color: DARK + "70" }}>
              ✨ Everyone needs a lil' Buttah — baby ✨
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-medium" style={{ fontFamily: "'Georgia', serif", color: DARK }}>Shop by Category</h2>
            <Link href="#" className="text-xs tracking-[0.15em] uppercase flex items-center gap-1 hover:opacity-70" style={{ color: WARM }}>
              View All <ChevronRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-lg"
                style={{ background: BLUSH }}
              >
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h3 className="font-medium mb-1" style={{ color: DARK }}>{cat.name}</h3>
                <p className="text-xs" style={{ color: DARK + "60" }}>{cat.count} products</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16" style={{ background: BLUSH + "80" }}>
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-medium" style={{ fontFamily: "'Georgia', serif", color: DARK }}>Bestsellers</h2>
            <Link href="#" className="text-xs tracking-[0.15em] uppercase flex items-center gap-1 hover:opacity-70" style={{ color: WARM }}>
              Shop All <ChevronRight className="h-3 w-3" />
            </Link>
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
                    <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] tracking-wider uppercase font-bold rounded-full text-white" style={{ background: WARM }}>
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
                        <Button className="w-full rounded-none text-xs tracking-wider uppercase" style={{ background: DARK, color: BLUSH }}>
                          Quick Add
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <button className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="h-4 w-4" style={{ color: DARK }} />
                  </button>
                </div>
                <h3 className="text-sm font-medium mb-1 line-clamp-2" style={{ color: DARK }}>{product.name}</h3>
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
      <section className="py-12 border-y" style={{ borderColor: WARM + "20", background: "white" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="h-12 w-12 rounded-full flex items-center justify-center shrink-0" style={{ background: BLUSH }}>
                  <feat.icon className="h-5 w-5" style={{ color: WARM }} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold" style={{ color: DARK }}>{feat.title}</h4>
                  <p className="text-xs" style={{ color: DARK + "70" }}>{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ background: BLUSH }}>
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
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: WARM }}>Join the Movement</p>
            <h2 className="text-3xl md:text-4xl text-white mb-6" style={{ fontFamily: "'Georgia', serif" }}>
              Start your skin journey today
            </h2>
            <p className="text-sm mb-8" style={{ color: BLUSH + "99" }}>
              Subscribe and get 15% off your first order, plus exclusive access to new launches.
            </p>
            <div className="flex items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3.5 text-sm border-0 outline-none"
                style={{ background: BLUSH, color: DARK }}
              />
              <Button className="rounded-none px-8 py-3.5 text-xs tracking-wider uppercase font-medium" style={{ background: WARM, color: "white" }}>
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back */}
      <section className="py-8 text-center" style={{ background: BLUSH }}>
        <Link href="/afrify/templates/beauty">
          <Button variant="ghost" className="text-sm" style={{ color: DARK }}>
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Beauty Templates
          </Button>
        </Link>
      </section>
    </PageLayout>
  );
}









