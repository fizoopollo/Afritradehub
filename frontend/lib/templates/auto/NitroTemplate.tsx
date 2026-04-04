const nitroHero = "/assets/auto/nitro-hero.jpg";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ShoppingCart, Heart, Star, Zap, Settings, Gauge, Wrench } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";
import { useState, useEffect } from "react";

const LIME = "#c8e600";
const DARK = "#0a0a0a";

const products = [
  { name: "Carbon Fiber Splitter", price: "€399", category: "Aero", gradient: "from-zinc-800 to-zinc-900" },
  { name: "Performance Coilovers", price: "€1,249", category: "Suspension", gradient: "from-zinc-700 to-zinc-900" },
  { name: "Titanium Exhaust System", price: "€2,899", category: "Exhaust", gradient: "from-zinc-800 to-black" },
  { name: "ECU Tuning Module", price: "€699", category: "Electronics", gradient: "from-zinc-700 to-zinc-800" },
  { name: "Forged Alloy Wheels 19\"", price: "€1,899", category: "Wheels", gradient: "from-zinc-800 to-zinc-900" },
  { name: "Racing Bucket Seats", price: "€799", category: "Interior", gradient: "from-zinc-700 to-zinc-900" },
];

const collections = ["Body Kits", "Suspension", "Exhaust", "Wheels", "Interior", "Electronics"];

export default function NitroTemplate() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [marqueeOffset, setMarqueeOffset] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setMarqueeOffset((p) => p - 1), 30);
    return () => clearInterval(id);
  }, []);

  const marqueeText = "NO STOCK • MAKE YOUR CAR UNIQUE • PERFORMANCE PARTS • CUSTOM TUNING • ";

  return (
    <PageLayout>
      <UseTemplateButton templateName="Nitro" />

      {/* Top bar */}
      <div className="py-2 text-center text-xs font-medium" style={{ background: LIME, color: DARK }}>
        ⚡ Get in touch with Kitsune Performance
      </div>

      {/* Hero */}
      <section className="relative py-28 md:py-44 overflow-hidden" style={{ background: DARK }}>
        <div className="absolute inset-0">
          <img src={nitroHero} alt="" className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        </div>
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <h1 className="text-6xl md:text-9xl font-black leading-none mb-4" style={{ color: LIME }}>
              No Stock
            </h1>
            <p className="text-xl text-white/60 mb-8">Make your car unique</p>
            <Button size="lg" className="font-bold rounded-lg px-10" style={{ background: LIME, color: DARK }}>
              Tune Me <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <div className="py-3 overflow-hidden" style={{ background: LIME }}>
        <div className="whitespace-nowrap" style={{ transform: `translateX(${marqueeOffset % 1000}px)` }}>
          <span className="text-sm font-black uppercase tracking-wider" style={{ color: DARK }}>
            {marqueeText.repeat(10)}
          </span>
        </div>
      </div>

      {/* Collections */}
      <section className="py-16" style={{ background: DARK }}>
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-4">Collection List</h2>
          <p className="text-white/40 text-center mb-10">Browse by category</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {collections.map((c, i) => (
              <motion.div key={c} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="border border-zinc-800 rounded-xl p-6 text-center cursor-pointer hover:border-lime-400/50 transition-colors group"
              >
                <Settings className="h-6 w-6 text-zinc-600 group-hover:text-lime-400 transition-colors mx-auto mb-2" />
                <h3 className="text-white font-bold text-sm">{c}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16" style={{ background: "#111" }}>
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-12">Featured Parts</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group rounded-2xl border border-zinc-800 overflow-hidden hover:border-lime-400/30 transition-colors cursor-pointer"
                onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
              >
                <div className={`aspect-square bg-gradient-to-br ${p.gradient} flex items-center justify-center relative`}>
                  <Gauge className="h-16 w-16 text-white/5" />
                  <span className="absolute top-3 left-3 px-2 py-0.5 text-[10px] font-bold rounded-full" style={{ background: `${LIME}20`, color: LIME }}>{p.category}</span>
                  <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="h-4 w-4 text-white" />
                  </button>
                  <AnimatePresence>
                    {hovered === i && (
                      <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                        className="absolute bottom-3 left-3 right-3 py-2.5 rounded-lg text-xs font-bold" style={{ background: LIME, color: DARK }}
                      >
                        Add to Cart
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
                <div className="p-4" style={{ background: "#0f0f0f" }}>
                  <h3 className="font-bold text-sm text-white">{p.name}</h3>
                  <span className="font-bold" style={{ color: LIME }}>{p.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: LIME }}>
        <div className="container text-center">
          <Zap className="h-10 w-10 mx-auto mb-4" style={{ color: DARK }} />
          <h2 className="text-3xl md:text-5xl font-black mb-4" style={{ color: DARK }}>Ready to Tune?</h2>
          <p className="text-lg mb-8 max-w-md mx-auto" style={{ color: `${DARK}99` }}>Build your dream setup with our performance parts.</p>
          <Button size="lg" className="font-bold rounded-lg px-10 text-white" style={{ background: DARK }}>Browse All Parts</Button>
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








