import Link from "next/link";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { ArrowLeft, ArrowRight } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";
const courierHero = "/assets/bags/courier-hero.jpg";
const prestigeHero = "/assets/bags/prestige-hero.jpg";
const voyageHero = "/assets/bags/voyage-hero.jpg";
const toteHero = "/assets/bags/tote-hero.jpg";
const leatherHero = "/assets/bags/leather-hero.jpg";
const galleriaHero = "/assets/bags/galleria-hero.jpg";

const templates = [
  { name: "Courier", desc: "Heritage leather messenger bags", image: courierHero, path: "/afrify/templates/bags/courier", price: "$400", gradient: "from-amber-900/80 to-stone-900/80" },
  { name: "Prestige", desc: "Luxury designer handbags", image: prestigeHero, path: "/afrify/templates/bags/prestige", price: "$400", gradient: "from-yellow-800/60 to-stone-800/80" },
  { name: "Voyage", desc: "Travel & adventure gear", image: voyageHero, path: "/afrify/templates/bags/voyage", price: "$100", gradient: "from-green-900/80 to-stone-900/80" },
  { name: "Tote", desc: "Sustainable canvas totes", image: toteHero, path: "/afrify/templates/bags/tote", price: "$380", gradient: "from-stone-600/60 to-stone-800/80" },
  { name: "Leather", desc: "Handcrafted leather goods", image: leatherHero, path: "/afrify/templates/bags/leather", price: "$100", gradient: "from-orange-900/80 to-stone-900/80" },
  { name: "Galleria", desc: "Multi-brand bag destination", image: galleriaHero, path: "/afrify/templates/bags/galleria", price: "$300", gradient: "from-red-900/60 to-stone-900/80" },
];

export default function BagsTemplate() {
  return (
    <PageLayout>
      <div className="container py-8">
        <Link href="/afrify/templates-store" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Templates Store
        </Link>

        <h1 className="text-3xl md:text-5xl font-black mb-3">Bags Templates</h1>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl">Premium store templates designed for bag brands, leather goods, and travel accessories.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((t, i) => (
            <Link key={t.name} to={t.path}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 relative">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${t.gradient} opacity-60 group-hover:opacity-40 transition-opacity`} />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-black">{t.name}</h3>
                    <p className="text-sm text-white/80">{t.desc}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-foreground">{t.price}</span>
                  <span className="text-sm text-muted-foreground flex items-center gap-1 group-hover:text-foreground transition-colors">
                    Preview <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
      <UseTemplateButton templateName="Bags" />
    </PageLayout>
  );
}








