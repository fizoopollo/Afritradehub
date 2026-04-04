const garageHero = "/assets/auto/garage-hero.jpg";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ShoppingCart, Search, CheckCircle, Wrench, Truck, Shield, Phone, Star, Heart, Tag } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";
import { useState } from "react";

const RED = "#c0392b";

const products = [
  { name: "Heavy Duty Brake Kit", price: "$389", old: "$489", badge: "UP TO 50% OFF", gradient: "from-stone-700 to-stone-900" },
  { name: "LED Light Bar 42\"", price: "$199", old: "$349", badge: "UP TO 80% OFF", gradient: "from-stone-600 to-stone-800" },
  { name: "Air Intake System", price: "$279", old: "$399", badge: "UP TO 50% OFF", gradient: "from-red-900 to-stone-900" },
  { name: "Suspension Lift Kit 3\"", price: "$549", old: "$699", badge: "HOT DEAL", gradient: "from-amber-900 to-stone-800" },
  { name: "Performance Exhaust", price: "$459", old: "$599", badge: "NEW", gradient: "from-stone-800 to-stone-900" },
  { name: "Off-Road Bumper Guard", price: "$329", old: "$449", badge: "BEST SELLER", gradient: "from-stone-700 to-stone-800" },
];

const dealCategories = [
  { label: "Hot Deals", icon: Tag, gradient: "from-red-600 to-red-800" },
  { label: "New Parts", icon: Wrench, gradient: "from-stone-600 to-stone-800" },
  { label: "Parts Finder", icon: Search, gradient: "from-stone-700 to-stone-900" },
];

const trustItems = ["Free shipping over $500", "Hassle-free returns", "10,000+ positive reviews", "30 days money back"];

export default function GarageTemplate() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <PageLayout>
      <UseTemplateButton templateName="Garage" />

      {/* Top bar */}
      <div className="py-2 text-sm text-center font-medium text-white" style={{ background: "#1a1a1a" }}>
        🔧 Tool Deals Live — Limited Time Only! <ArrowRight className="inline h-3 w-3" />
      </div>

      {/* Trust banner */}
      <div className="py-2.5 border-b border-border bg-card">
        <div className="container flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
          {trustItems.map((t) => (
            <span key={t} className="flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5" style={{ color: RED }} /> {t}</span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={garageHero} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-white text-xs font-bold mb-6" style={{ background: RED }}>
              Flash Sale Now On!
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-white uppercase leading-tight mb-4">
              New Auto Gear<br />At Affordable<br />Prices
            </h1>
            <Button size="lg" className="font-bold text-white mt-4" style={{ background: RED }}>
              View All Offers <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Deal Categories */}
      <section className="py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6">
            {dealCategories.map((d, i) => (
              <motion.div key={d.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`relative h-40 rounded-2xl bg-gradient-to-br ${d.gradient} cursor-pointer group overflow-hidden flex items-center justify-center`}
              >
                <d.icon className="h-10 w-10 text-white/20 absolute top-4 right-4" />
                <div className="text-center relative z-10">
                  <h3 className="text-white font-black text-xl uppercase">{d.label}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 uppercase">Top Deals This Week</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
              >
                <div className={`aspect-square bg-gradient-to-br ${p.gradient} flex items-center justify-center relative`}>
                  <Wrench className="h-16 w-16 text-white/10" />
                  <span className="absolute top-3 left-3 px-2 py-0.5 text-white text-[10px] font-bold rounded" style={{ background: RED }}>{p.badge}</span>
                  <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="h-4 w-4 text-white" />
                  </button>
                  <AnimatePresence>
                    {hovered === i && (
                      <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                        className="absolute bottom-3 left-3 right-3 py-2.5 rounded-lg text-xs font-bold text-white" style={{ background: RED }}
                      >
                        <ShoppingCart className="inline h-4 w-4 mr-1" /> Add to Cart
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm">{p.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-bold" style={{ color: RED }}>{p.price}</span>
                    <span className="text-muted-foreground text-sm line-through">{p.old}</span>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, j) => <Star key={j} className="h-3 w-3 fill-amber-400 text-amber-400" />)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Help CTA */}
      <section className="py-20" style={{ background: RED }}>
        <div className="container text-center">
          <Phone className="h-10 w-10 text-white/40 mx-auto mb-4" />
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-4">Need Expert Help?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-md mx-auto">Our team of auto experts is ready to help you find the right parts.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white font-bold" style={{ color: RED }}>Call (555) 123-4567</Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">Live Chat</Button>
          </div>
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








