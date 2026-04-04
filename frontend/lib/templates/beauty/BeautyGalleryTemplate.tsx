import Link from "next/link";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles, ThumbsUp } from "lucide-react";
import { beautyTemplates } from "@/data/beautyTemplates";

export default function BeautyGalleryTemplate() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-rose-400 via-pink-500 to-fuchsia-600 overflow-hidden">
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Sparkles className="h-10 w-10 text-primary-foreground mx-auto mb-4" />
            <h1 className="text-4xl md:text-6xl font-black text-primary-foreground mb-4">Beauty Templates</h1>
            <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
              {beautyTemplates.length} stunning beauty & cosmetics store templates
            </p>
            <Link href="/afrify">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Afrify
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {beautyTemplates.map((t, i) => (
              <Link key={t.slug} to={`/afrify/templates/beauty/${t.slug}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 border border-border bg-muted group-hover:shadow-lg transition-shadow duration-300">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300" />
                  </div>
                  <h3 className="font-bold text-lg">{t.name}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{t.tagline}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="font-semibold text-foreground">{t.price}</span>
                    <span className="flex items-center gap-1 text-muted-foreground text-sm">
                      <ThumbsUp className="h-3.5 w-3.5" /> {t.rating}
                    </span>
                    {t.tag && (
                      <span className="text-xs px-2.5 py-0.5 rounded-full border border-border font-medium text-muted-foreground">
                        {t.tag}
                      </span>
                    )}
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}



