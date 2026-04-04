const courierHero = "/assets/bags/courier-hero.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Truck, Shield, RotateCcw, Star, Heart, ShoppingCart } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";
import { useState } from "react";

const ACCENT = "#8b5e3c";

const products = [
  { name: "Heritage Messenger", price: "$389", old: "$459", tag: "BEST SELLER" },
  { name: "Urban Satchel", price: "$299", old: "$349", tag: "" },
  { name: "Commuter Briefcase", price: "$449", old: "$529", tag: "NEW" },
  { name: "Field Reporter Bag", price: "$329", old: "$399", tag: "" },
  { name: "Crossbody Explorer", price: "$249", old: "$299", tag: "" },
  { name: "Vintage Mail Carrier", price: "$369", old: "$429", tag: "LIMITED" },
];

const categories = [
  { name: "Messenger Bags", count: "45+ styles" },
  { name: "Briefcases", count: "30+ styles" },
  { name: "Crossbody", count: "25+ styles" },
  { name: "Laptop Bags", count: "20+ styles" },
];

const trustBadges = [
  { icon: Truck, text: "Free shipping over $200" },
  { icon: Shield, text: "Lifetime warranty" },
  { icon: RotateCcw, text: "30-day returns" },
];

export default function CourierTemplate() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <PageLayout>
      <UseTemplateButton templateName="Courier" />

      {/* Hero */}
      <section className="relative py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={courierHero} alt="Courier leather bag" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>
        <div className="container relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-lg">
            <p className="text-sm tracking-[0.3em] uppercase mb-4" style={{ color: ACCENT }}>Handcrafted Since 1987</p>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Carry Your<br />Story Forward
            </h1>
            <p className="text-lg text-white/70 mb-8">Premium leather bags built to age beautifully and last a lifetime.</p>
            <div className="flex gap-4">
              <Button size="lg" className="font-bold text-white" style={{ background: ACCENT }}>
                Shop Collection <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10">
                Our Story
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-4 border-y border-border">
        <div className="container flex flex-wrap items-center justify-center gap-10 text-sm font-medium text-muted-foreground">
          {trustBadges.map((b) => (
            <span key={b.text} className="flex items-center gap-2"><b.icon className="h-4 w-4" /> {b.text}</span>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-black mb-8">Shop by Category</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl p-8 text-center cursor-pointer hover:shadow-lg transition-shadow border border-border"
                style={{ background: `linear-gradient(135deg, hsl(30 30% 95%), hsl(30 20% 90%))` }}
              >
                <h3 className="text-lg font-bold mb-1">{c.name}</h3>
                <p className="text-sm text-muted-foreground">{c.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 rounded-full" style={{ background: ACCENT }} />
            <h2 className="text-2xl md:text-3xl font-black">Featured Bags</h2>
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
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-stone-200 to-stone-300 relative">
                  {p.tag && (
                    <span className="absolute top-3 left-3 z-10 text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: ACCENT }}>{p.tag}</span>
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
                  <span className="font-bold" style={{ color: ACCENT }}>{p.price}</span>
                  <span className="text-sm text-muted-foreground line-through">{p.old}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20">
        <div className="container max-w-3xl text-center">
          <p className="text-sm tracking-[0.3em] uppercase mb-4" style={{ color: ACCENT }}>Our Heritage</p>
          <h2 className="text-3xl md:text-4xl font-black mb-6">Crafted for the Journey</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every Courier bag begins as a single piece of full-grain leather, hand-selected for character and durability. Our artisans combine traditional saddlery techniques with modern design to create bags that improve with every mile.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-2xl font-black mb-8 text-center">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "James K.", text: "My messenger bag only gets better with age. 5 years in and it looks incredible." },
              { name: "Sarah M.", text: "The quality of the leather is unmatched. Worth every penny." },
              { name: "David L.", text: "I've replaced every bag I own with Courier. Nothing else compares." },
            ].map((t) => (
              <div key={t.name} className="p-6 rounded-xl border border-border bg-card">
                <div className="flex gap-1 mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}</div>
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
          <h2 className="text-2xl font-black mb-3">Join the Courier Club</h2>
          <p className="text-muted-foreground mb-6">Early access to new releases and member-only pricing.</p>
          <div className="flex gap-3">
            <input type="email" placeholder="Your email" className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground" />
            <Button className="text-white font-bold" style={{ background: ACCENT }}>Subscribe</Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}








