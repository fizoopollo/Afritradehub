const driveHero = "/assets/auto/drive-hero.jpg";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ShoppingCart, Heart, Star, Phone, Truck, Shield, RotateCcw, Circle } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";
import { useState } from "react";

const BLUE = "#2563eb";

const products = [
  { name: "Forged Monoblock 20\"", price: "$2,499", category: "Forged", gradient: "from-blue-900 to-slate-900" },
  { name: "Flow-Formed 19\" Set", price: "$1,699", category: "Flow Form", gradient: "from-slate-700 to-slate-900" },
  { name: "Carbon Fiber 21\" Set", price: "$3,999", category: "Carbon", gradient: "from-zinc-800 to-zinc-900" },
  { name: "Off-Road Beadlock 17\"", price: "$1,299", category: "Off-Road", gradient: "from-stone-700 to-stone-900" },
  { name: "Track-Spec 18\" Lightweight", price: "$2,199", category: "Racing", gradient: "from-blue-800 to-slate-900" },
  { name: "Mesh Design 20\" Chrome", price: "$1,899", category: "Luxury", gradient: "from-zinc-700 to-zinc-900" },
];

const categories = [
  { name: "Forged Wheels", count: "200+", gradient: "from-blue-700 to-blue-900" },
  { name: "Flow-Formed", count: "150+", gradient: "from-slate-600 to-slate-800" },
  { name: "Accessories", count: "300+", gradient: "from-zinc-700 to-zinc-900" },
  { name: "Tire Packages", count: "80+", gradient: "from-stone-600 to-stone-800" },
];

export default function DriveTemplate() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <PageLayout>
      <UseTemplateButton templateName="Drive" />

      {/* Top bar */}
      <div className="py-2 text-center text-xs font-medium text-white" style={{ background: "#111" }}>
        🚀 Free shipping on orders over $100 &nbsp;|&nbsp; 📞 24/7 Service: (000) 123 456 7890
      </div>

      {/* Hero */}
      <section className="relative py-28 md:py-44 overflow-hidden">
        <div className="absolute inset-0">
          <img src={driveHero} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-7xl font-black text-white uppercase leading-tight mb-4">
              Unleash<br />Performance.<br />Redefine Style.
            </h1>
            <p className="text-white/60 text-lg mb-8">Forged rims. Power, precision, presence.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold rounded-lg">
                Explore Rims
              </Button>
              <Button size="lg" className="font-bold text-white rounded-lg" style={{ background: BLUE }}>
                Build Your Setup <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4">Shop by Category</h2>
          <p className="text-muted-foreground text-center mb-12">Explore our full range of performance wheels and accessories.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((c, i) => (
              <motion.div key={c.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`relative h-48 rounded-2xl bg-gradient-to-br ${c.gradient} overflow-hidden cursor-pointer group`}
              >
                <Circle className="h-20 w-20 text-white/5 absolute top-4 right-4" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-bold text-lg">{c.name}</p>
                  <p className="text-white/50 text-sm">{c.count} products</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-black">Featured Wheels</h2>
            <Button variant="ghost" className="font-medium">View All →</Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
              >
                <div className={`aspect-square bg-gradient-to-br ${p.gradient} flex items-center justify-center relative`}>
                  <Circle className="h-20 w-20 text-white/5" />
                  <span className="absolute top-3 left-3 px-2 py-0.5 bg-white/10 backdrop-blur-sm text-white text-[10px] font-bold rounded-full">{p.category}</span>
                  <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="h-4 w-4 text-white" />
                  </button>
                  <AnimatePresence>
                    {hovered === i && (
                      <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                        className="absolute bottom-3 left-3 right-3 py-2.5 rounded-lg text-xs font-bold text-white" style={{ background: BLUE }}
                      >
                        Add to Cart
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm">{p.name}</h3>
                  <span className="font-bold" style={{ color: BLUE }}>{p.price}</span>
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
        <div className="container flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><Truck className="h-5 w-5" style={{ color: BLUE }} /> Free shipping over $100</span>
          <span className="flex items-center gap-2"><Shield className="h-5 w-5" style={{ color: BLUE }} /> Lifetime warranty</span>
          <span className="flex items-center gap-2"><RotateCcw className="h-5 w-5" style={{ color: BLUE }} /> Easy returns</span>
          <span className="flex items-center gap-2"><Phone className="h-5 w-5" style={{ color: BLUE }} /> 24/7 support</span>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: `linear-gradient(135deg, ${BLUE}, #1d4ed8)` }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Build Your Dream Setup</h2>
          <p className="text-white/60 text-lg mb-8 max-w-md mx-auto">Custom wheel and tire packages, built to your specs.</p>
          <Button size="lg" className="bg-white font-bold rounded-lg" style={{ color: BLUE }}>Get Started</Button>
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








