const voyageHero = "/assets/bags/voyage-hero.jpg";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Compass, Mountain, Plane, Star, ShoppingCart, Heart } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";
import { useState } from "react";

const OLIVE = "#5a6e3a";

const products = [
  { name: "Expedition Backpack 45L", price: "$289", old: "$349", tag: "BEST SELLER" },
  { name: "Weekender Duffle", price: "$229", old: "", tag: "" },
  { name: "Trail Runner Daypack", price: "$149", old: "$179", tag: "NEW" },
  { name: "Nomad Messenger", price: "$199", old: "", tag: "" },
  { name: "Safari Camera Bag", price: "$259", old: "$299", tag: "" },
  { name: "Alpine Roll-Top", price: "$189", old: "$229", tag: "LIMITED" },
];

const destinations = [
  { icon: Mountain, name: "Mountain", tagline: "Built for altitude" },
  { icon: Plane, name: "City Escape", tagline: "Urban sophistication" },
  { icon: Compass, name: "Wilderness", tagline: "Off-grid ready" },
  { icon: MapPin, name: "Coastal", tagline: "Salt-resistant gear" },
];

export default function VoyageTemplate() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <PageLayout>
      <UseTemplateButton templateName="Voyage" />

      {/* Hero */}
      <section className="relative py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={voyageHero} alt="Voyage travel bags" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
        </div>
        <div className="container relative">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="max-w-lg">
            <p className="text-sm tracking-[0.3em] uppercase mb-4" style={{ color: "#b8c99a" }}>Adventure Awaits</p>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Bags Built<br />for the Road
            </h1>
            <p className="text-lg text-white/70 mb-8">Waxed canvas & leather travel gear engineered for explorers.</p>
            <Button size="lg" className="font-bold text-white" style={{ background: OLIVE }}>
              Explore Collection <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-black mb-8">Shop by Destination</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl p-8 text-center cursor-pointer border border-border hover:shadow-lg transition-all hover:border-transparent"
                style={{ background: "linear-gradient(135deg, hsl(90 15% 95%), hsl(90 10% 90%)" }}
              >
                <d.icon className="h-8 w-8 mx-auto mb-3" style={{ color: OLIVE }} />
                <h3 className="font-bold text-lg">{d.name}</h3>
                <p className="text-sm text-muted-foreground">{d.tagline}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 rounded-full" style={{ background: OLIVE }} />
            <h2 className="text-2xl md:text-3xl font-black">Top Picks</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08 }}
                className="group cursor-pointer"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 relative" style={{ background: "linear-gradient(135deg, #d4c9a8, #c2b68a)" }}>
                  {p.tag && (
                    <span className="absolute top-3 left-3 z-10 text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: OLIVE }}>{p.tag}</span>
                  )}
                  {hovered === i && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-black/40 flex items-center justify-center gap-3">
                      <button className="p-3 rounded-full bg-white text-foreground hover:scale-110 transition-transform"><ShoppingCart className="h-5 w-5" /></button>
                      <button className="p-3 rounded-full bg-white text-foreground hover:scale-110 transition-transform"><Heart className="h-5 w-5" /></button>
                    </motion.div>
                  )}
                </div>
                <h3 className="font-bold text-lg">{p.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-bold" style={{ color: OLIVE }}>{p.price}</span>
                  {p.old && <span className="text-sm text-muted-foreground line-through">{p.old}</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container max-w-3xl text-center">
          <p className="text-sm tracking-[0.3em] uppercase mb-4" style={{ color: OLIVE }}>Our Philosophy</p>
          <h2 className="text-3xl md:text-4xl font-black mb-6">Travel Light, Travel Right</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Voyage bags are made from military-grade waxed canvas and vegetable-tanned leather. We believe the best gear gets better with every trip — developing a unique patina that tells the story of your adventures.
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-2xl font-black mb-8 text-center">Traveler Reviews</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Alex P.", text: "Took my Expedition pack through 6 countries. Not a single stitch loose." },
              { name: "Maria G.", text: "The weekender duffle is perfectly sized for carry-on. Love the design." },
              { name: "Chen W.", text: "Beautiful craftsmanship. The canvas develops an amazing patina over time." },
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
      <section className="py-16">
        <div className="container max-w-lg text-center">
          <h2 className="text-2xl font-black mb-3">Join the Adventure</h2>
          <p className="text-muted-foreground mb-6">Get travel stories, new arrivals, and explorer-only deals.</p>
          <div className="flex gap-3">
            <input type="email" placeholder="Your email" className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground" />
            <Button className="text-white font-bold" style={{ background: OLIVE }}>Sign Up</Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}








