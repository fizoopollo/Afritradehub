const panoramaHero = "/assets/beauty/grasse-hero.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Sofa, Lamp, PenTool, Palette, Eye, Star } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";

const categories = [
  { name: "Living Room", count: 48 },
  { name: "Bedroom", count: 36 },
  { name: "Kitchen", count: 24 },
  { name: "Office", count: 18 },
  { name: "Outdoor", count: 12 },
];

const portfolio = [
  { title: "Modern Minimalist Apartment", style: "Contemporary", gradient: "from-stone-300 to-stone-400" },
  { title: "Rustic Farmhouse Revival", style: "Farmhouse", gradient: "from-amber-200 to-amber-300" },
  { title: "Scandinavian Loft", style: "Nordic", gradient: "from-slate-200 to-slate-300" },
  { title: "Art Deco Penthouse", style: "Art Deco", gradient: "from-yellow-200 to-amber-200" },
  { title: "Coastal Beach House", style: "Coastal", gradient: "from-blue-200 to-sky-200" },
  { title: "Industrial Workspace", style: "Industrial", gradient: "from-gray-300 to-gray-400" },
];

export default function PanoramaTemplate() {
  return (
    <PageLayout>
      <UseTemplateButton templateName="Panorama" />
      {/* Hero */}
      <section className="relative py-28 md:py-40 overflow-hidden" style={{ background: "#1a1a1a" }}>
        <div className="container relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-stone-400 mb-6">Interior Design Studio</p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Furniture &<br />Interior Design
            </h1>
            <p className="text-lg text-stone-400 max-w-xl mx-auto mb-10">
              Crafting beautiful, functional spaces that reflect your personality and elevate your everyday life.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-stone-900 hover:bg-white/90 rounded-none px-10 font-medium">
                View Portfolio <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-stone-600 text-white hover:bg-white/10 rounded-none px-10">
                Book Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 border-b border-border">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {categories.map((c) => (
              <button key={c.name} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {c.name} <span className="text-xs text-muted-foreground/50">({c.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Designing spaces that inspire since 2008
              </h2>
              <p className="text-muted-foreground mb-4">
                Panorama was born from a simple belief: that great design should be accessible. We combine timeless aesthetics with modern functionality to create interiors that truly feel like home.
              </p>
              <p className="text-muted-foreground mb-8">
                From concept to completion, our team of seasoned designers works closely with each client to bring their vision to life.
              </p>
              <div className="flex gap-8">
                <div><p className="text-3xl font-bold">200+</p><p className="text-sm text-muted-foreground">Projects</p></div>
                <div><p className="text-3xl font-bold">15+</p><p className="text-sm text-muted-foreground">Years</p></div>
                <div><p className="text-3xl font-bold">50+</p><p className="text-sm text-muted-foreground">Awards</p></div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="aspect-[3/4] rounded-sm overflow-hidden">
                <img src={panoramaHero} alt="Luxury interior design" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-14" style={{ fontFamily: "'Playfair Display', serif" }}>Featured Projects</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group cursor-pointer"
              >
                <div className={`aspect-[4/3] rounded-sm bg-gradient-to-br ${p.gradient} flex items-center justify-center mb-3 group-hover:scale-[1.02] transition-transform`}>
                  <Eye className="h-8 w-8 text-stone-500/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-bold">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.style}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "#1a1a1a" }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Let's Create Your Dream Space</h2>
          <p className="text-stone-400 text-lg mb-8 max-w-md mx-auto">Schedule a complimentary consultation with our design team.</p>
          <Button size="lg" className="bg-white text-stone-900 hover:bg-white/90 rounded-none px-10">Get in Touch</Button>
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








