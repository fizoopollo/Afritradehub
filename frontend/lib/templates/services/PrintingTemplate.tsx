const printingHero = "/assets/beauty/grid-hero.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Printer, FileText, Image, BookOpen, Star, Package, Truck } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";

const products = [
  { name: "Business Cards", desc: "Premium quality cards on thick stock", price: "From $29", icon: FileText },
  { name: "Brochures", desc: "Tri-fold and bi-fold full-color brochures", price: "From $89", icon: BookOpen },
  { name: "Posters", desc: "Large format prints up to A0 size", price: "From $19", icon: Image },
  { name: "Banners", desc: "Indoor and outdoor vinyl banners", price: "From $49", icon: Package },
  { name: "Flyers", desc: "High-impact promotional flyers", price: "From $39", icon: FileText },
  { name: "Stickers", desc: "Custom die-cut and sheet stickers", price: "From $15", icon: Star },
];

const tabs = ["All Products", "Business", "Marketing", "Packaging", "Custom"];

const testimonials = [
  { name: "Mark A.", text: "Outstanding print quality and fast turnaround. Our go-to printing partner." },
  { name: "Linda P.", text: "The team goes above and beyond. They helped us design and print our entire brand collateral." },
  { name: "Kofi B.", text: "Competitive pricing without compromising on quality. Highly recommend their banner printing." },
];

export default function PrintingTemplate() {
  return (
    <PageLayout>
      <UseTemplateButton templateName="Printing" />
      {/* Hero */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={printingHero} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(30,58,95,0.85), rgba(30,64,175,0.85))" }} />
        </div>
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
              🖨️ Professional Print Services
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Your Trusted<br />Print Media Partner
            </h1>
            <p className="text-lg text-white/70 max-w-xl mx-auto mb-10">
              From business cards to large format — we bring your ideas to life with precision printing and vibrant colors.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-white/90 font-bold">
                Get a Quote <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Browse Products
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-4 border-b border-border sticky top-0 z-10 bg-background/95 backdrop-blur-sm">
        <div className="container">
          <div className="flex items-center justify-center gap-2 overflow-x-auto">
            {tabs.map((t, i) => (
              <button key={t} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`}>
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-14">Our Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow group cursor-pointer"
              >
                <div className="h-40 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 flex items-center justify-center mb-4 group-hover:scale-[1.02] transition-transform">
                  <p.icon className="h-12 w-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-1">{p.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-primary">{p.price}</span>
                  <Button size="sm" variant="ghost">Order →</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-black text-center mb-14">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Printer, title: "Premium Quality", desc: "State-of-the-art digital and offset printing technology." },
              { icon: Truck, title: "Fast Delivery", desc: "Same-day and next-day delivery options available." },
              { icon: Star, title: "100% Satisfaction", desc: "We guarantee you'll love the final product or we reprint free." },
            ].map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <f.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-black text-center mb-14">What Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-card"
              >
                <div className="flex gap-1 mb-4">{Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}</div>
                <p className="text-muted-foreground italic mb-4">"{t.text}"</p>
                <p className="font-bold">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #1e3a5f, #1e40af)" }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Ready to Print?</h2>
          <p className="text-white/70 text-lg mb-8">Get a free quote in minutes. No commitment required.</p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-white/90 font-bold">Request a Quote</Button>
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








