import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingCart, Heart, Star, Sparkles, Quote, TrendingUp } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";
import { beautyTemplates } from "@/data/beautyTemplates";

export default function BeautyTemplatePage() {
  const { slug } = useParams<{ slug: string }>();
  const template = beautyTemplates.find((t) => t.slug === slug);

  if (!template) {
    return (
      <PageLayout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Template not found</h1>
          <Link href="/afrify/templates/beauty">
            <Button variant="outline"><ArrowLeft className="h-4 w-4 mr-2" /> Back to Beauty Templates</Button>
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <UseTemplateButton />

      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden" style={{ background: template.gradient }}>
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Sparkles className="h-10 w-10 text-primary-foreground mx-auto mb-4" />
            <h1 className="text-4xl md:text-6xl font-black text-primary-foreground mb-4">{template.name}</h1>
            <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-2">{template.tagline}</p>
            <p className="text-sm text-primary-foreground/60 max-w-md mx-auto mb-8">{template.description}</p>
            <Link href="/afrify/templates/beauty">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Beauty
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container -mt-10 relative z-10 mb-12">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
          <img src={template.image} alt={template.name} className="w-full h-64 md:h-96 object-cover" />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="container mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {template.stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="text-center p-4 rounded-xl bg-muted/50">
              <div className="text-2xl font-black text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="flex items-center gap-2 mb-8">
            <ShoppingCart className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-black">Products</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {template.products.map((product, i) => (
              <motion.div key={product.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="group bg-card rounded-xl border border-border p-5 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-foreground">{product.name}</h3>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="h-4 w-4 text-muted-foreground hover:text-primary" />
                  </button>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{product.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg">{product.price}</span>
                  <Button size="sm" variant="outline">Add to Cart</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center gap-2 mb-8">
            <Star className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-black">What Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {template.testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6">
                <Quote className="h-6 w-6 text-muted-foreground/30 mb-3" />
                <p className="text-sm text-muted-foreground mb-4 italic">"{t.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <span className="text-sm font-semibold">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: template.gradient }}>
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <TrendingUp className="h-8 w-8 text-primary-foreground mx-auto mb-4" />
            <h2 className="text-3xl font-black text-primary-foreground mb-4">Start Your Beauty Journey</h2>
            <p className="text-primary-foreground/70 mb-6 max-w-md mx-auto">
              Use the {template.name} template to launch your beauty brand today.
            </p>
            <Button size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
              Get Started — {template.price}
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}


