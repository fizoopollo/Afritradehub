const toteHero = "/assets/bags/tote-hero.jpg";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Recycle, Heart, ShoppingCart, Star } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";
import { useState } from "react";

const SAND = "#b8a88a";

const products = [
  { name: "Everyday Canvas Tote", price: "$49", tag: "BEST SELLER" },
  { name: "Market Bag — Large", price: "$59", tag: "" },
  { name: "Minimalist Shopper", price: "$39", tag: "ECO" },
  { name: "Beach & Beyond", price: "$55", tag: "NEW" },
  { name: "Studio Tote — Washed", price: "$65", tag: "" },
  { name: "Weekend Carry-All", price: "$79", tag: "" },
];

export default function ToteTemplate() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <PageLayout>
      <UseTemplateButton templateName="Tote" />

      {/* Hero */}
      <section className="relative py-28 md:py-40 overflow-hidden" style={{ background: "#f7f4ef" }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <p className="text-sm tracking-[0.3em] uppercase mb-4" style={{ color: SAND }}>Sustainably Made</p>
              <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 text-foreground">
                Simple.<br />Honest.<br />Essential.
              </h1>
              <p className="text-lg text-muted-foreground mb-8">Organic cotton tote bags designed for everyday life.</p>
              <Button size="lg" className="font-bold text-white" style={{ background: SAND }}>
                Shop Totes <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
              <img src={toteHero} alt="Canvas tote bag" className="w-full rounded-2xl shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 border-y border-border">
        <div className="container flex flex-wrap items-center justify-center gap-12 text-sm">
          {[
            { icon: Leaf, text: "100% Organic Cotton" },
            { icon: Recycle, text: "Zero-Waste Production" },
            { icon: Heart, text: "Fair Trade Certified" },
          ].map((v) => (
            <span key={v.text} className="flex items-center gap-2 text-muted-foreground font-medium">
              <v.icon className="h-5 w-5" style={{ color: SAND }} /> {v.text}
            </span>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-center">Our Collection</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="group cursor-pointer"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 relative" style={{ background: "linear-gradient(135deg, #f0ebe3, #e5ddd0)" }}>
                  {p.tag && (
                    <span className="absolute top-3 left-3 z-10 text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: SAND }}>{p.tag}</span>
                  )}
                  {hovered === i && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-black/30 flex items-center justify-center gap-3">
                      <button className="p-3 rounded-full bg-white text-foreground hover:scale-110 transition-transform"><ShoppingCart className="h-5 w-5" /></button>
                      <button className="p-3 rounded-full bg-white text-foreground hover:scale-110 transition-transform"><Heart className="h-5 w-5" /></button>
                    </motion.div>
                  )}
                </div>
                <h3 className="font-bold">{p.name}</h3>
                <p className="font-bold mt-1" style={{ color: SAND }}>{p.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20" style={{ background: "#f7f4ef" }}>
        <div className="container max-w-3xl text-center">
          <p className="text-sm tracking-[0.3em] uppercase mb-4" style={{ color: SAND }}>Our Impact</p>
          <h2 className="text-3xl md:text-4xl font-black mb-6">Less Is More</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Each Tote bag replaces approximately 700 single-use plastic bags over its lifetime. Made from GOTS-certified organic cotton, dyed with plant-based inks, and shipped in compostable packaging.
          </p>
          <div className="grid grid-cols-3 gap-8">
            {[
              { value: "50K+", label: "Bags Sold" },
              { value: "35M", label: "Plastic Bags Replaced" },
              { value: "100%", label: "Carbon Neutral" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-black" style={{ color: SAND }}>{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl font-black mb-8 text-center">Customer Love</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Emma R.", text: "The quality is amazing for the price. I use mine every single day." },
              { name: "Liam H.", text: "Finally a tote that's sturdy enough for groceries AND looks great." },
              { name: "Olivia K.", text: "Love knowing my bag is making a difference. Beautiful design too." },
            ].map((t) => (
              <div key={t.name} className="p-6 rounded-xl border border-border bg-card">
                <div className="flex gap-1 mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}</div>
                <p className="text-muted-foreground mb-3">"{t.text}"</p>
                <p className="font-bold text-sm">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 border-t border-border">
        <div className="container max-w-lg text-center">
          <h2 className="text-2xl font-black mb-3">Stay in the Loop</h2>
          <p className="text-muted-foreground mb-6">New drops, sustainability updates, and 10% off your first order.</p>
          <div className="flex gap-3">
            <input type="email" placeholder="Your email" className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground" />
            <Button className="text-white font-bold" style={{ background: SAND }}>Join</Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}








