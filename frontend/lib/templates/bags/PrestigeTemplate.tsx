const prestigeHero = "/assets/bags/prestige-hero.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Heart, ShoppingCart, Gem, Award, Clock } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";
import { useState } from "react";

const GOLD = "#c9a96e";

const products = [
  { name: "Maison Tote", price: "$1,290", tag: "SIGNATURE" },
  { name: "Parisian Clutch", price: "$890", tag: "" },
  { name: "Boulevard Shoulder Bag", price: "$1,450", tag: "NEW SEASON" },
  { name: "Riviera Mini", price: "$750", tag: "" },
  { name: "Château Weekender", price: "$2,100", tag: "EXCLUSIVE" },
  { name: "Atelier Crossbody", price: "$980", tag: "" },
];

export default function PrestigeTemplate() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <PageLayout>
      <UseTemplateButton templateName="Prestige" />

      {/* Hero */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0">
          <img src={prestigeHero} alt="Prestige handbag" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm tracking-[0.4em] uppercase mb-4" style={{ color: GOLD }}>The New Collection</p>
            <h1 className="text-5xl md:text-7xl text-white mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Timeless Elegance
            </h1>
            <p className="text-lg text-white/70 mb-10 max-w-md mx-auto">Meticulously crafted in Italian leather. Designed to be treasured.</p>
            <Button size="lg" className="font-medium text-black px-10 rounded-none" style={{ background: GOLD }}>
              Discover <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <div className="py-3 overflow-hidden border-y" style={{ borderColor: GOLD + "30" }}>
        <div className="whitespace-nowrap animate-marquee">
          <span className="text-xs tracking-[0.4em] uppercase text-muted-foreground">
            {Array(10).fill("✦ Handcrafted in Italy ✦ Limited Editions ✦ Complimentary Monogramming ✦ Free Worldwide Shipping ").join("")}
          </span>
        </div>
      </div>

      {/* Products */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: GOLD }}>Curated Selection</p>
            <h2 className="text-3xl md:text-4xl font-light" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Our Signature Pieces</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="aspect-[3/4] rounded-none overflow-hidden mb-5 relative" style={{ background: "linear-gradient(135deg, #f5f0e8, #e8e0d0)" }}>
                  {p.tag && (
                    <span className="absolute top-4 left-4 z-10 text-[10px] tracking-widest font-medium px-3 py-1 bg-black text-white">{p.tag}</span>
                  )}
                  {hovered === i && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-black/30 flex items-center justify-center gap-4">
                      <button className="p-3 bg-white text-black hover:scale-110 transition-transform"><ShoppingCart className="h-5 w-5" /></button>
                      <button className="p-3 bg-white text-black hover:scale-110 transition-transform"><Heart className="h-5 w-5" /></button>
                    </motion.div>
                  )}
                </div>
                <h3 className="font-light text-lg tracking-wide">{p.name}</h3>
                <p className="mt-1 font-medium" style={{ color: GOLD }}>{p.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { icon: Gem, title: "Finest Materials", desc: "Only the most exquisite Italian full-grain leathers make it into our atelier." },
              { icon: Award, title: "Master Artisans", desc: "Each piece is handcrafted by artisans with decades of experience." },
              { icon: Clock, title: "Timeless Design", desc: "Created to transcend trends and become a lasting part of your wardrobe." },
            ].map((v) => (
              <div key={v.title}>
                <v.icon className="h-8 w-8 mx-auto mb-4" style={{ color: GOLD }} />
                <h3 className="text-lg font-medium mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial */}
      <section className="py-20">
        <div className="container max-w-3xl text-center">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: GOLD }}>The Maison</p>
          <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>A Legacy of Excellence</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Founded in Florence in 1952, Prestige has been synonymous with uncompromising quality and understated luxury. Our bags are not merely accessories — they are companions for life's most meaningful moments.
          </p>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 border-t border-border">
        <div className="container max-w-md text-center">
          <h2 className="text-2xl font-light mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Private Access</h2>
          <p className="text-sm text-muted-foreground mb-6">Be the first to discover new collections and exclusive offers.</p>
          <div className="flex gap-3">
            <input type="email" placeholder="Your email" className="flex-1 px-4 py-3 border border-border bg-background text-foreground text-sm" />
            <Button className="text-black font-medium rounded-none px-6" style={{ background: GOLD }}>Join</Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}








