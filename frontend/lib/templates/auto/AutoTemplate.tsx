import Link from "next/link";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ThumbsUp, Eye } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";

const templates = [
  {
    name: "Maranello",
    category: "Tires & Parts",
    price: "$300",
    rating: 100,
    gradient: "from-red-700 to-stone-900",
    tagline: "Traction to Trust — Premium Tire Store",
    features: ["Tire Finder", "Product Grid", "Trust Bar"],
    isNew: true,
    path: "/afrify/templates/auto/maranello",
  },
  {
    name: "Garage",
    category: "Auto Gear & Parts",
    price: "$170",
    rating: 98,
    gradient: "from-red-800 to-stone-900",
    tagline: "New Auto Gear at Affordable Prices",
    features: ["Flash Sales", "Deal Cards", "Expert Help"],
    isNew: false,
    path: "/afrify/templates/auto/garage",
  },
  {
    name: "Torque",
    category: "Motorcycle Gear",
    price: "$250",
    rating: 100,
    gradient: "from-blue-800 to-amber-700",
    tagline: "Gear Up for the Ride of a Lifetime",
    features: ["Category Grid", "Featured Gear", "Trust Badges"],
    isNew: false,
    path: "/afrify/templates/auto/torque",
  },
  {
    name: "Fleet",
    category: "Vehicle Tech",
    price: "$100",
    rating: 96,
    gradient: "from-indigo-700 to-slate-900",
    tagline: "Premium Vehicle Tech for Safety & Control",
    features: ["Tech Cards", "Feature Grid", "Dark Theme"],
    isNew: true,
    path: "/afrify/templates/auto/fleet",
  },
  {
    name: "Nitro",
    category: "Custom Tuning",
    price: "$320",
    rating: 100,
    gradient: "from-lime-500 to-zinc-900",
    tagline: "No Stock — Make Your Car Unique",
    features: ["Marquee", "Collections", "Neon Accent"],
    isNew: false,
    path: "/afrify/templates/auto/nitro",
  },
  {
    name: "Drive",
    category: "Performance Wheels",
    price: "$320",
    rating: 92,
    gradient: "from-blue-600 to-slate-900",
    tagline: "Unleash Performance. Redefine Style.",
    features: ["Wheel Gallery", "Category Grid", "Build Setup"],
    isNew: false,
    path: "/afrify/templates/auto/drive",
  },
];

export default function AutoTemplate() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-red-600 to-stone-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_60%)]" />
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-black text-primary-foreground mb-4">
              Auto Templates
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
              High-octane templates for auto parts, tuning shops, and vehicle accessories
            </p>
            <Link href="/afrify">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                <ArrowLeft className="h-4 w-4" /> Back to Afrify
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Template Grid */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl font-black mb-1">Browse Templates</h2>
              <p className="text-muted-foreground">{templates.length} auto templates available</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group cursor-pointer"
                onClick={() => { if (t.path) window.location.href = t.path; }}
              >
                <div className={`relative h-56 rounded-2xl bg-gradient-to-br ${t.gradient} overflow-hidden mb-4`}>
                  <div className="absolute top-0 inset-x-0 h-7 bg-black/20 backdrop-blur-sm flex items-center px-3 gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-white/30" />
                    <span className="h-2 w-2 rounded-full bg-white/30" />
                    <span className="h-2 w-2 rounded-full bg-white/30" />
                    <span className="ml-2 text-[10px] text-white/50 font-mono truncate">{t.name.toLowerCase()}.afrify.store</span>
                  </div>
                  <div className="absolute inset-0 pt-10 px-5 pb-5 flex flex-col justify-end">
                    <p className="text-white/70 text-xs font-medium mb-1">{t.category}</p>
                    <p className="text-white font-bold text-sm leading-snug max-w-[200px]">{t.tagline}</p>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Button size="sm" variant="secondary" className="shadow-lg">
                      <Eye className="h-4 w-4" /> Preview
                    </Button>
                  </div>
                  {t.isNew && (
                    <span className="absolute top-9 right-3 px-2 py-0.5 bg-primary text-primary-foreground text-[10px] font-bold rounded-full uppercase tracking-wider">
                      New
                    </span>
                  )}
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg">{t.name}</h3>
                    <p className="text-sm text-muted-foreground">{t.category}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-bold">{t.price}</span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                      <ThumbsUp className="h-3 w-3" /> {t.rating}%
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {t.features.map((f) => (
                    <span key={f} className="text-[11px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{f}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <UseTemplateButton templateName="Auto" />
    </PageLayout>
  );
}








