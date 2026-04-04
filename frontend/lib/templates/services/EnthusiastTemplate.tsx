const enthusiastHero = "/assets/beauty/amplify-hero.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ShoppingBag, Star, Eye, Heart, Sparkles } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";

const lookbook = [
  { title: "Summer Glow Collection", tag: "New Season", gradient: "from-amber-200 to-orange-200" },
  { title: "Everyday Essentials", tag: "Best Sellers", gradient: "from-rose-200 to-pink-200" },
  { title: "Self-Care Rituals", tag: "Trending", gradient: "from-purple-200 to-violet-200" },
];

const products = [
  { name: "Golden Hour Serum", price: "$48", category: "Skincare", gradient: "from-amber-100 to-yellow-100" },
  { name: "Velvet Lip Kit", price: "$32", category: "Makeup", gradient: "from-rose-100 to-pink-100" },
  { name: "Botanical Hair Oil", price: "$36", category: "Haircare", gradient: "from-green-100 to-emerald-100" },
  { name: "Crystal Face Roller", price: "$28", category: "Tools", gradient: "from-purple-100 to-violet-100" },
  { name: "Hydrating Mist", price: "$22", category: "Skincare", gradient: "from-blue-100 to-sky-100" },
  { name: "Brow Sculpt Pencil", price: "$18", category: "Makeup", gradient: "from-stone-100 to-stone-200" },
];

export default function EnthusiastTemplate() {
  return (
    <PageLayout>
      <UseTemplateButton templateName="Enthusiast" />
      {/* Hero */}
      <section className="relative py-28 md:py-40 overflow-hidden" style={{ background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)" }}>
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-900/60 mb-6">Beauty & Lifestyle</p>
            <h1 className="text-5xl md:text-7xl font-black text-amber-950 leading-tight mb-6">
              Elevate Your<br />Everyday Style
            </h1>
            <p className="text-lg text-amber-900/70 max-w-xl mx-auto mb-10">
              Curated beauty products and lifestyle essentials for the modern enthusiast.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-amber-950 text-amber-100 hover:bg-amber-900 font-bold rounded-full px-10">
                Shop Now <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-amber-900/30 text-amber-950 hover:bg-amber-900/10 rounded-full px-10">
                View Lookbook
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lookbook */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-14">Lookbook</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {lookbook.map((l, i) => (
              <motion.div key={l.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className={`aspect-[3/4] rounded-2xl bg-gradient-to-br ${l.gradient} flex flex-col items-center justify-end p-6 mb-3 group-hover:scale-[1.02] transition-transform relative overflow-hidden`}>
                  <Sparkles className="h-12 w-12 text-amber-500/30 absolute top-6 right-6" />
                  <span className="px-3 py-1 bg-white/80 text-xs font-bold rounded-full mb-2">{l.tag}</span>
                  <h3 className="font-bold text-lg text-center">{l.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="flex items-center justify-between mb-14">
            <h2 className="text-3xl md:text-4xl font-black">Shop Bestsellers</h2>
            <Button variant="ghost" className="font-medium">View All →</Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group cursor-pointer bg-card rounded-2xl border border-border overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className={`aspect-square bg-gradient-to-br ${p.gradient} flex items-center justify-center relative`}>
                  <ShoppingBag className="h-12 w-12 text-amber-500/30" />
                  <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
                <div className="p-4">
                  <p className="text-xs text-muted-foreground mb-1">{p.category}</p>
                  <h3 className="font-bold">{p.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-bold">{p.price}</span>
                    <Button size="sm" variant="outline" className="text-xs">Add to Cart</Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #fbbf24, #d97706)" }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-amber-950 mb-4">Join the Enthusiast Club</h2>
              <p className="text-amber-900/70 text-lg mb-6">Get early access to new drops, exclusive discounts, and beauty tips delivered weekly.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Your email" className="flex-1 px-4 py-3 rounded-full bg-white/80 border-0 text-sm" />
                <Button className="bg-amber-950 text-amber-100 hover:bg-amber-900 rounded-full px-6">Subscribe</Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden">
                <img src={enthusiastHero} alt="Beauty products" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container text-center">
          <Link href="/afrify/templates/services"><Button variant="ghost"><ArrowLeft className="h-4 w-4" /> Back to Service Templates</Button></Link>
        </div>
      </section>
    </PageLayout>
  );
}








