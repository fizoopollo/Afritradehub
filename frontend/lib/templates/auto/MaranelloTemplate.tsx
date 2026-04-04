const maranelloHero = "/assets/auto/maranello-hero.jpg";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Search, ShoppingCart, Truck, Shield, RotateCcw, Tag, Star, Heart, CheckCircle } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";
import { useState } from "react";

const CORAL = "#dc4a3a";

const products = [
  { name: "All-Terrain Pro 265/70R17", price: "$189", old: "$229", category: "Off-Road", gradient: "from-stone-700 to-stone-800" },
  { name: "Highway Cruiser 225/65R17", price: "$149", old: "$179", category: "Touring", gradient: "from-stone-600 to-stone-700" },
  { name: "Sport Grip 245/40R18", price: "$219", old: "$269", category: "Performance", gradient: "from-red-900 to-stone-900" },
  { name: "Winter Shield 215/55R17", price: "$169", old: "$199", category: "Winter", gradient: "from-blue-900 to-stone-800" },
  { name: "Mud Warrior 33x12.5R15", price: "$249", old: "$299", category: "Off-Road", gradient: "from-amber-900 to-stone-800" },
  { name: "EcoRide 205/60R16", price: "$129", old: "$159", category: "Eco", gradient: "from-emerald-900 to-stone-800" },
];

const categories = [
  { name: "All-Terrain", count: "120+ tires", gradient: "from-amber-700 to-amber-900" },
  { name: "Performance", count: "85+ tires", gradient: "from-red-700 to-red-900" },
  { name: "Winter Tires", count: "60+ tires", gradient: "from-blue-700 to-blue-900" },
  { name: "Truck & SUV", count: "150+ tires", gradient: "from-stone-600 to-stone-800" },
];

const trustBadges = [
  { icon: Truck, text: "Same-day shipping, daily" },
  { icon: Shield, text: "Price protection" },
  { icon: RotateCcw, text: "Free returns" },
  { icon: Tag, text: "Weekly special offers" },
];

export default function MaranelloTemplate() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <PageLayout>
      <UseTemplateButton templateName="Maranello" />

      {/* Hero */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={maranelloHero} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
        <div className="container relative">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
              Traction<br />to Trust
            </h1>
            <p className="text-lg text-white/70 mb-8 max-w-md">
              Experience superior traction and control with our high-performance tires, ensuring safety and performance in any driving condition.
            </p>
            <Button size="lg" className="font-bold rounded-lg text-white" style={{ background: CORAL }}>
              Shop for Tires <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-4" style={{ background: CORAL }}>
        <div className="container flex flex-wrap items-center justify-center gap-8 text-sm text-white font-medium">
          {trustBadges.map((b) => (
            <span key={b.text} className="flex items-center gap-2"><b.icon className="h-4 w-4" /> {b.text}</span>
          ))}
        </div>
      </section>

      {/* Tire Finder */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 rounded-full" style={{ background: CORAL }} />
            <h2 className="text-2xl md:text-3xl font-black">Search for Tires by Size</h2>
          </div>
          <div className="grid sm:grid-cols-5 gap-4 items-end">
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Tire Type</label>
              <select className="w-full px-4 py-3 rounded-lg border border-border bg-card text-sm">
                <option>All-Season</option><option>Winter</option><option>Off-Road</option><option>Performance</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Width</label>
              <select className="w-full px-4 py-3 rounded-lg border border-border bg-card text-sm">
                <option>205</option><option>215</option><option>225</option><option>245</option><option>265</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Rim Size</label>
              <select className="w-full px-4 py-3 rounded-lg border border-border bg-card text-sm">
                <option>15"</option><option>16"</option><option>17"</option><option>18"</option><option>19"</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Profile</label>
              <select className="w-full px-4 py-3 rounded-lg border border-border bg-card text-sm">
                <option>40</option><option>55</option><option>60</option><option>65</option><option>70</option>
              </select>
            </div>
            <Button className="font-bold text-white" style={{ background: CORAL }}>
              <Search className="h-4 w-4" /> Search
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 rounded-full" style={{ background: CORAL }} />
            <h2 className="text-2xl md:text-3xl font-black">Shop by Category</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((c, i) => (
              <motion.div key={c.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`relative h-44 rounded-2xl bg-gradient-to-br ${c.gradient} overflow-hidden cursor-pointer group`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-bold text-lg">{c.name}</p>
                  <p className="text-white/60 text-sm">{c.count}</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="h-5 w-5 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="h-8 w-1 rounded-full" style={{ background: CORAL }} />
              <h2 className="text-2xl md:text-3xl font-black">Best Sellers</h2>
            </div>
            <Button variant="ghost" className="font-medium">View All →</Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
              >
                <div className={`aspect-square bg-gradient-to-br ${p.gradient} flex items-center justify-center relative`}>
                  <ShoppingCart className="h-16 w-16 text-white/10" />
                  <span className="absolute top-3 left-3 px-2 py-0.5 bg-white/10 backdrop-blur-sm text-white text-[10px] font-bold rounded-full">{p.category}</span>
                  <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="h-4 w-4 text-white" />
                  </button>
                  <AnimatePresence>
                    {hovered === i && (
                      <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                        className="absolute bottom-3 left-3 right-3 py-2.5 rounded-lg text-xs font-bold text-white" style={{ background: CORAL }}
                      >
                        Add to Cart
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm">{p.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-bold" style={{ color: CORAL }}>{p.price}</span>
                    <span className="text-muted-foreground text-sm line-through">{p.old}</span>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, j) => <Star key={j} className="h-3 w-3 fill-amber-400 text-amber-400" />)}
                    <span className="text-xs text-muted-foreground ml-1">(128)</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: `linear-gradient(135deg, ${CORAL}, #a03028)` }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Ready to Ride?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-md mx-auto">Find the perfect tires for your vehicle. Free shipping on all orders.</p>
          <Button size="lg" className="bg-white font-bold rounded-lg" style={{ color: CORAL }}>Shop All Tires</Button>
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








