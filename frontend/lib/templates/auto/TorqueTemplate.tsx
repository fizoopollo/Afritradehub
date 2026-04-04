const torqueHero = "/assets/auto/torque-hero.jpg";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ShoppingCart, Heart, Star, Phone, Shield, Truck, RotateCcw, Zap } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";
import { useState } from "react";

const BLUE = "#1a3a6a";
const ORANGE = "#e07c24";

const categories = [
  { name: "Helmets", icon: "🪖", count: 85 },
  { name: "Jackets", icon: "🧥", count: 64 },
  { name: "Boots", icon: "👢", count: 42 },
  { name: "Gloves", icon: "🧤", count: 38 },
  { name: "Accessories", icon: "⚙️", count: 120 },
];

const products = [
  { name: "Carbon Fiber Helmet", price: "$349", category: "Helmets", gradient: "from-slate-700 to-slate-900" },
  { name: "Leather Riding Jacket", price: "$289", category: "Jackets", gradient: "from-stone-700 to-stone-800" },
  { name: "Armored Race Boots", price: "$199", category: "Boots", gradient: "from-stone-600 to-stone-800" },
  { name: "Kevlar Riding Gloves", price: "$79", category: "Gloves", gradient: "from-amber-900 to-stone-800" },
  { name: "LED Tail Light Kit", price: "$59", category: "Accessories", gradient: "from-blue-900 to-slate-900" },
  { name: "Bluetooth Intercom Set", price: "$149", category: "Accessories", gradient: "from-slate-800 to-slate-900" },
];

const trustBadges = [
  { icon: Truck, text: "Free shipping over $100" },
  { icon: Shield, text: "2-year warranty" },
  { icon: RotateCcw, text: "30-day returns" },
  { icon: Phone, text: "Expert support" },
];

export default function TorqueTemplate() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <PageLayout>
      <UseTemplateButton templateName="Torque" />

      {/* Navbar accent */}
      <div className="py-2 text-center text-xs font-medium text-white" style={{ background: BLUE }}>
        <Phone className="inline h-3 w-3 mr-1" /> +44 (0) 1234 567 — Mon-Fri 9AM to 5PM
      </div>

      {/* Hero */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={torqueHero} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>
        <div className="container relative max-w-xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
              Gear Up for the<br />Ride of a Lifetime.
            </h1>
            <p className="text-lg text-white/70 mb-8">
              Explore our premium collection of motorcycle accessories and parts, crafted to elevate your riding experience.
            </p>
            <Button size="lg" className="font-bold text-white" style={{ background: BLUE }}>
              Shop Now <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16" style={{ background: BLUE }}>
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-2">Shop by Category</h2>
          <p className="text-white/60 text-sm mb-10">Gear up with the essentials for every ride.</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((c, i) => (
              <motion.div key={c.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 cursor-pointer hover:bg-white/20 transition-colors text-center"
              >
                <span className="text-3xl mb-2 block">{c.icon}</span>
                <h3 className="text-white font-bold text-sm">{c.name}</h3>
                <p className="text-white/50 text-xs">{c.count} items</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-black">Featured Gear</h2>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold text-white cursor-pointer" style={{ background: ORANGE }}>Flash Sale</span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-muted text-muted-foreground cursor-pointer">New Arrivals</span>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
              >
                <div className={`aspect-square bg-gradient-to-br ${p.gradient} flex items-center justify-center relative`}>
                  <Zap className="h-16 w-16 text-white/10" />
                  <span className="absolute top-3 left-3 px-2 py-0.5 bg-white/10 backdrop-blur-sm text-white text-[10px] font-bold rounded-full">{p.category}</span>
                  <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="h-4 w-4 text-white" />
                  </button>
                  <AnimatePresence>
                    {hovered === i && (
                      <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                        className="absolute bottom-3 left-3 right-3 py-2.5 rounded-lg text-xs font-bold text-white" style={{ background: ORANGE }}
                      >
                        Add to Cart
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm">{p.name}</h3>
                  <span className="font-bold" style={{ color: ORANGE }}>{p.price}</span>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, j) => <Star key={j} className="h-3 w-3 fill-amber-400 text-amber-400" />)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-10 border-y border-border">
        <div className="container flex flex-wrap items-center justify-center gap-8 text-sm">
          {trustBadges.map((b) => (
            <span key={b.text} className="flex items-center gap-2 text-muted-foreground"><b.icon className="h-5 w-5" style={{ color: BLUE }} /> {b.text}</span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: `linear-gradient(135deg, ${BLUE}, #0f2240)` }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Ride With Confidence</h2>
          <p className="text-white/60 text-lg mb-8 max-w-md mx-auto">Premium motorcycle gear from the world's top brands.</p>
          <Button size="lg" className="font-bold text-white" style={{ background: ORANGE }}>Explore Collection</Button>
        </div>
      </section>

      <section className="py-8">
        <div className="container text-center">
          <Link href="/afrify/templates/auto"><Button variant="ghost"><ArrowLeft className="h-4 w-4" /> Back to Auto Templates</Button></Link>
        </div>
      </section>
    </PageLayout>
  );
}








