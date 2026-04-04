const galleriaHero = "/assets/bags/galleria-hero.jpg";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Heart, ShoppingCart, Eye } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";
import { useState } from "react";

const CHARCOAL = "#2c2c2c";
const RED = "#c0392b";

const products = [
  { name: "The Classic Flap", brand: "Maison Noir", price: "$2,450", tag: "TRENDING" },
  { name: "Structured Tote", brand: "Atelier Blanc", price: "$1,890", tag: "" },
  { name: "Chain Crossbody", brand: "Casa Roma", price: "$1,650", tag: "NEW IN" },
  { name: "Mini Bucket Bag", brand: "Petite Lune", price: "$1,290", tag: "" },
  { name: "Oversized Clutch", brand: "Studio V", price: "$980", tag: "EDITORS' PICK" },
  { name: "Woven Hobo", brand: "Tessuto", price: "$2,100", tag: "" },
];

const brands = ["Maison Noir", "Atelier Blanc", "Casa Roma", "Petite Lune", "Studio V", "Tessuto"];

export default function GalleriaTemplate() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <PageLayout>
      <UseTemplateButton templateName="Galleria" />

      {/* Hero */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0">
          <img src={galleriaHero} alt="Galleria bag collection" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm tracking-[0.5em] uppercase text-white/60 mb-4">Multi-Brand Destination</p>
            <h1 className="text-5xl md:text-7xl text-white mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 300 }}>
              Galleria
            </h1>
            <p className="text-lg text-white/70 mb-10 max-w-md mx-auto">The world's finest designer bags, curated in one destination.</p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="font-bold text-white rounded-none px-10" style={{ background: RED }}>
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/30 rounded-none px-10 hover:bg-white/10">
                New Arrivals
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brands Bar */}
      <section className="py-6 border-y border-border">
        <div className="container flex flex-wrap items-center justify-center gap-10">
          {brands.map((b) => (
            <span key={b} className="text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground cursor-pointer transition-colors">{b}</span>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Editor's Selection</h2>
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
                <div className="aspect-[3/4] overflow-hidden mb-5 relative" style={{ background: "linear-gradient(135deg, #f5f5f5, #e8e8e8)" }}>
                  {p.tag && (
                    <span className="absolute top-4 left-4 z-10 text-[10px] tracking-widest font-medium px-3 py-1 text-white" style={{ background: RED }}>{p.tag}</span>
                  )}
                  {hovered === i && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-black/30 flex items-center justify-center gap-4">
                      <button className="p-3 bg-white text-foreground hover:scale-110 transition-transform"><ShoppingCart className="h-5 w-5" /></button>
                      <button className="p-3 bg-white text-foreground hover:scale-110 transition-transform"><Heart className="h-5 w-5" /></button>
                      <button className="p-3 bg-white text-foreground hover:scale-110 transition-transform"><Eye className="h-5 w-5" /></button>
                    </motion.div>
                  )}
                </div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground">{p.brand}</p>
                <h3 className="font-medium text-lg mt-1">{p.name}</h3>
                <p className="font-bold mt-1">{p.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial */}
      <section className="py-20" style={{ background: CHARCOAL }}>
        <div className="container max-w-3xl text-center">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: RED }}>The Journal</p>
          <h2 className="text-3xl md:text-4xl text-white font-light mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            "A bag should be an investment, not an impulse."
          </h2>
          <p className="text-white/60 leading-relaxed">
            — Galleria Editorial, on the art of curating a timeless handbag collection. We believe in fewer, better pieces that stand the test of time.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container grid md:grid-cols-3 gap-10 text-center">
          {[
            { title: "Personal Styling", desc: "Book a one-on-one session with our bag consultants." },
            { title: "Authentication", desc: "Every piece verified and certified by our experts." },
            { title: "Concierge Service", desc: "White-glove delivery with complimentary gift wrapping." },
          ].map((s) => (
            <div key={s.title}>
              <h3 className="font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 border-t border-border">
        <div className="container max-w-md text-center">
          <h2 className="text-2xl font-light mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>The Inner Circle</h2>
          <p className="text-sm text-muted-foreground mb-6">Priority access to new arrivals, private sales, and exclusive events.</p>
          <div className="flex gap-3">
            <input type="email" placeholder="Your email" className="flex-1 px-4 py-3 border border-border bg-background text-foreground text-sm" />
            <Button className="text-white font-bold rounded-none px-6" style={{ background: RED }}>Join</Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}








