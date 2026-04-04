const leatherHero = "/assets/bags/leather-hero.jpg";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scissors, Star, Heart, ShoppingCart, Hammer } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";
import { useState } from "react";

const COGNAC = "#a0522d";

const products = [
  { name: "Bifold Wallet", price: "$129", tag: "SIGNATURE" },
  { name: "Card Holder Slim", price: "$69", tag: "" },
  { name: "Belt — Saddle Tan", price: "$149", tag: "BEST SELLER" },
  { name: "Passport Cover", price: "$89", tag: "" },
  { name: "Key Organizer", price: "$59", tag: "NEW" },
  { name: "Watch Roll", price: "$179", tag: "" },
];

const process = [
  { step: "01", title: "Select", desc: "We hand-pick the finest hides from sustainable tanneries." },
  { step: "02", title: "Cut", desc: "Every piece is cut by hand with precision blades." },
  { step: "03", title: "Stitch", desc: "Saddle-stitched with waxed linen thread for durability." },
  { step: "04", title: "Finish", desc: "Edges are burnished and sealed for a flawless result." },
];

export default function LeatherTemplate() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <PageLayout>
      <UseTemplateButton templateName="Leather" />

      {/* Hero */}
      <section className="relative py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={leatherHero} alt="Leather workshop" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
        </div>
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <Scissors className="h-10 w-10 mx-auto mb-6 text-white/60" />
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              Made by Hand
            </h1>
            <p className="text-lg text-white/70 mb-8 max-w-md mx-auto">Small-batch leather goods crafted in our Brooklyn workshop.</p>
            <Button size="lg" className="font-bold text-white" style={{ background: COGNAC }}>
              Shop Now <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-black mb-10 text-center">Our Process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} className="text-center">
                <p className="text-4xl font-black mb-3" style={{ color: COGNAC }}>{s.step}</p>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <Hammer className="h-6 w-6" style={{ color: COGNAC }} />
            <h2 className="text-2xl md:text-3xl font-black">Handcrafted Goods</h2>
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
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 relative" style={{ background: "linear-gradient(135deg, #d4b896, #c4a07a)" }}>
                  {p.tag && (
                    <span className="absolute top-3 left-3 z-10 text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: COGNAC }}>{p.tag}</span>
                  )}
                  {hovered === i && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-black/40 flex items-center justify-center gap-3">
                      <button className="p-3 rounded-full bg-white text-foreground hover:scale-110 transition-transform"><ShoppingCart className="h-5 w-5" /></button>
                      <button className="p-3 rounded-full bg-white text-foreground hover:scale-110 transition-transform"><Heart className="h-5 w-5" /></button>
                    </motion.div>
                  )}
                </div>
                <h3 className="font-bold text-lg">{p.name}</h3>
                <p className="font-bold mt-1" style={{ color: COGNAC }}>{p.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Monogramming */}
      <section className="py-20">
        <div className="container max-w-3xl text-center">
          <p className="text-sm tracking-[0.3em] uppercase mb-4" style={{ color: COGNAC }}>Personalize It</p>
          <h2 className="text-3xl md:text-4xl font-black mb-6">Free Monogramming</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Every piece can be hot-stamped with your initials at no extra cost. Choose from three font styles and gold or blind deboss. The perfect personal touch or gift.
          </p>
          <Button size="lg" variant="outline" className="font-bold">
            Learn More <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-2xl font-black mb-8 text-center">Customer Reviews</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Mark T.", text: "The wallet patina after 2 years is absolutely gorgeous. Best I've owned." },
              { name: "Rachel S.", text: "Bought the belt as a gift — the monogramming made it extra special." },
              { name: "Tom D.", text: "You can feel the quality the moment you hold it. Incredible craftsmanship." },
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
          <h2 className="text-2xl font-black mb-3">Workshop Updates</h2>
          <p className="text-muted-foreground mb-6">New products, behind-the-scenes, and workshop event invites.</p>
          <div className="flex gap-3">
            <input type="email" placeholder="Your email" className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground" />
            <Button className="text-white font-bold" style={{ background: COGNAC }}>Subscribe</Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}








