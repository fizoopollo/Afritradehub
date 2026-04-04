const fleetHero = "/assets/auto/fleet-hero.jpg";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Heart, Star, Shield, Truck, Eye, Camera, Radio, Lock, Gauge } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";
import { useState } from "react";

const INDIGO = "#4338ca";

const products = [
  { name: "4K Dual Dashcam Pro", price: "$179", category: "Dashcams", icon: Camera, gradient: "from-indigo-900 to-slate-900" },
  { name: "Hands-Free Car Kit", price: "$89", category: "Bluetooth", icon: Radio, gradient: "from-violet-900 to-slate-900" },
  { name: "Keyless Protector Shield", price: "$49", category: "Security", icon: Lock, gradient: "from-purple-900 to-slate-900" },
  { name: "Smart Tire Pressure Monitor", price: "$69", category: "Monitoring", icon: Gauge, gradient: "from-blue-900 to-slate-900" },
  { name: "GPS Fleet Tracker", price: "$129", category: "Tracking", icon: Eye, gradient: "from-indigo-800 to-slate-900" },
  { name: "Parking Sensor Kit", price: "$99", category: "Safety", icon: Shield, gradient: "from-slate-700 to-slate-900" },
];

const features = [
  { title: "Precision Engineering", desc: "Where precision engineering meets uncompromising reliability.", icon: Gauge },
  { title: "Fleet Solutions", desc: "Advanced mileage registration and fleet management systems.", icon: Truck },
  { title: "24/7 Monitoring", desc: "Real-time vehicle monitoring and security alerts.", icon: Eye },
];

export default function FleetTemplate() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <PageLayout>
      <UseTemplateButton templateName="Fleet" />

      {/* Top bar */}
      <div className="py-2 text-center text-xs font-medium text-white" style={{ background: `linear-gradient(90deg, ${INDIGO}, #6366f1)` }}>
        🚗 Plug & Play Installation • ⭐ 4.8 on Trustpilot • 🔄 Free exchange within 30 days
      </div>

      {/* Hero */}
      <section className="relative py-28 md:py-44 overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img src={fleetHero} alt="" className="w-full h-full object-cover opacity-60" />
        </div>
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm font-medium mb-4" style={{ color: "#818cf8" }}>Drive Smart. Drive Secure.</p>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Premium Vehicle Tech<br />for Safety & Control.
            </h1>
            <p className="text-white/60 max-w-lg mx-auto mb-8">
              Discover our hand-picked selection of dashcams, hands-free car kits, and keyless protectors, all designed to keep you safe and in control.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="font-bold text-white rounded-full px-8" style={{ background: INDIGO }}>
                Explore <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8">
                More Info
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl border border-border bg-card"
              >
                <div className="h-14 w-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: `${INDIGO}20` }}>
                  <f.icon className="h-7 w-7" style={{ color: INDIGO }} />
                </div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4">Our Products</h2>
          <p className="text-muted-foreground text-center mb-12">Technology you can rely on, every drive.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
              >
                <div className={`aspect-square bg-gradient-to-br ${p.gradient} flex items-center justify-center relative`}>
                  <p.icon className="h-16 w-16 text-white/10" />
                  <span className="absolute top-3 left-3 px-2 py-0.5 bg-white/10 backdrop-blur-sm text-white text-[10px] font-bold rounded-full">{p.category}</span>
                  <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="h-4 w-4 text-white" />
                  </button>
                  <AnimatePresence>
                    {hovered === i && (
                      <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                        className="absolute bottom-3 left-3 right-3 py-2.5 rounded-lg text-xs font-bold text-white" style={{ background: INDIGO }}
                      >
                        Add to Cart
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm">{p.name}</h3>
                  <span className="font-bold" style={{ color: INDIGO }}>{p.price}</span>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, j) => <Star key={j} className="h-3 w-3 fill-amber-400 text-amber-400" />)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Upgrade Your Drive</h2>
          <p className="text-white/50 text-lg mb-8 max-w-md mx-auto">Smart vehicle technology for the modern driver.</p>
          <Button size="lg" className="font-bold text-white rounded-full px-10" style={{ background: INDIGO }}>Shop Now</Button>
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








