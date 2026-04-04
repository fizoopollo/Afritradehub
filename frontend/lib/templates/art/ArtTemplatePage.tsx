import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Star, Palette, Frame, Eye, Image, Brush, Gem } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";
import { getArtTemplateBySlug } from "@/data/artTemplates";
import NotFound from "@/pages/NotFound";

const iconPool = [Palette, Frame, Eye, Image, Brush, Gem];

export default function ArtTemplatePage() {
  const { slug } = useParams<{ slug: string }>();
  const template = slug ? getArtTemplateBySlug(slug) : undefined;

  if (!template) return <NotFound />;

  return (
    <PageLayout>
      <UseTemplateButton templateName="Art" />

      {/* Hero */}
      <section className="relative py-24 md:py-36 overflow-hidden" style={{ background: template.gradient }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
        </div>
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
                â˜… {template.name} â€” Art Template
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                {template.tagline}
              </h1>
              <p className="text-lg text-white/70 mb-8 max-w-lg">{template.description}</p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 font-bold">
                  Explore <ArrowRight className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="relative rounded-3xl overflow-hidden">
                <img src={template.image} alt={template.name} className="w-full h-full object-cover rounded-3xl" />
                <div className="absolute inset-0 bg-black/40 rounded-3xl" />
                <div className="absolute inset-0 p-8 grid grid-cols-2 gap-4 items-end">
                  {template.stats.map((s) => (
                    <div key={s.label} className="text-center p-4 rounded-2xl bg-white/10 backdrop-blur-sm">
                      <p className="text-3xl font-black text-white">{s.value}</p>
                      <p className="text-sm text-white/60 mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black mb-4">What We Offer</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Explore our curated range of creative services</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {template.services.map((s, i) => {
              const Icon = iconPool[i % iconPool.length];
              return (
                <motion.div key={s.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all bg-card">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{s.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary">{s.price}</span>
                    <Button size="sm" variant="ghost">View â†’</Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-14">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Browse", desc: "Explore our collection and find what inspires you." },
              { step: "02", title: "Connect", desc: "Reach out to discuss your vision and requirements." },
              { step: "03", title: "Create", desc: "We bring your artistic vision to life with expertise." },
            ].map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <span className="inline-block text-5xl font-black text-primary/20 mb-4">{s.step}</span>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-14">What People Say</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {template.testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl border border-border bg-card">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{t.text}"</p>
                <p className="font-bold">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: template.gradient }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto">Use this template to build your dream art platform today.</p>
          <Button size="lg" className="bg-white text-black hover:bg-white/90 font-bold">Use This Template</Button>
        </div>
      </section>

      <section className="py-8 bg-muted/30">
        <div className="container text-center">
          <Link href="/afrify/templates-store"><Button variant="ghost"><ArrowLeft className="h-4 w-4" /> Back to Templates</Button></Link>
        </div>
      </section>
    </PageLayout>
  );
}

