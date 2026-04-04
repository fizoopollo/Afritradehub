import Link from "next/link";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ThumbsUp, Star, Eye } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";

const templates = [
  {
    name: "Genius",
    category: "Home Services",
    price: "$210",
    rating: 100,
    gradient: "from-blue-500 to-indigo-600",
    tagline: "Home Services at Your Doorstep",
    features: ["Booking System", "Service Listings", "Client Logos"],
    isNew: false,
    path: "/afrify/templates/services/genius",
  },
  {
    name: "Noteable",
    category: "Stationery & Gifts",
    price: "$400",
    rating: 96,
    gradient: "from-amber-100 to-rose-200",
    tagline: "The Easiest Way to Customize Stationery",
    features: ["Product Grid", "Brand Logos", "Newsletter"],
    isNew: false,
    path: "/afrify/templates/services/noteable",
  },
  {
    name: "Workflow",
    category: "Tech & Maintenance",
    price: "$380",
    rating: 87,
    gradient: "from-slate-700 to-slate-900",
    tagline: "Your Trusted Partner in Modern Tech Maintenance",
    features: ["Service Grid", "Statistics", "Tech Support"],
    isNew: true,
    path: "/afrify/templates/services/workflow",
  },
  {
    name: "Grain",
    category: "Coaching & Consulting",
    price: "$380",
    rating: 91,
    gradient: "from-stone-400 to-stone-600",
    tagline: "Meet Your New Clarity Coach",
    features: ["About Section", "Press Logos", "Service Tiers"],
    isNew: false,
    path: "/afrify/templates/services/grain",
  },
  {
    name: "Smile Hub",
    category: "Dental & Health",
    price: "$290",
    rating: 100,
    gradient: "from-teal-400 to-cyan-600",
    tagline: "Pioneering Excellence in Dental Care",
    features: ["Service Grid", "Opening Hours", "Contact Info"],
    isNew: true,
    path: "/afrify/templates/services/smile",
  },
  {
    name: "Panorama",
    category: "Interior Design",
    price: "$290",
    rating: 100,
    gradient: "from-stone-600 to-stone-900",
    tagline: "Furniture & Interior Design Services",
    features: ["Portfolio", "Category Nav", "Brand Story"],
    isNew: false,
    path: "/afrify/templates/services/panorama",
  },
  {
    name: "Printing",
    category: "Print & Media",
    price: "$320",
    rating: 100,
    gradient: "from-blue-600 to-blue-800",
    tagline: "Your Trusted Print Media Partner",
    features: ["Product Grid", "Category Tabs", "Testimonials"],
    isNew: false,
    path: "/afrify/templates/services/printing",
  },
  {
    name: "Sonik",
    category: "Spa & Wellness",
    price: "$270",
    rating: 100,
    gradient: "from-green-700 to-emerald-900",
    tagline: "Where therapeutic services meet everyday calm",
    features: ["Therapy Cards", "Booking Flow", "Gallery"],
    isNew: false,
    path: "/afrify/templates/services/sonik",
  },
  {
    name: "Leap",
    category: "Marketing Agency",
    price: "$350",
    rating: 91,
    gradient: "from-pink-400 to-fuchsia-600",
    tagline: "Your marketing shouldn't feel like a guessing game",
    features: ["Service Cards", "Process Steps", "Portfolio"],
    isNew: false,
    path: "/afrify/templates/services/leap",
  },
  {
    name: "Aircon",
    category: "HVAC & Maintenance",
    price: "$320",
    rating: 100,
    gradient: "from-green-500 to-green-700",
    tagline: "Stay Cool, Stay Comfortable Always",
    features: ["Booking Form", "Trust Badges", "Service Areas"],
    isNew: false,
    path: "/afrify/templates/services/aircon",
  },
  {
    name: "Tattoo Studio",
    category: "Tattoo & Body Art",
    price: "$320",
    rating: 100,
    gradient: "from-red-600 to-red-900",
    tagline: "Ink That Tells Your Story",
    features: ["Gallery Grid", "Artist Profiles", "Promo Banners"],
    isNew: false,
    path: "/afrify/templates/services/tattoo",
  },
  {
    name: "Enthusiast",
    category: "Beauty & Lifestyle",
    price: "$300",
    rating: 100,
    gradient: "from-amber-300 to-amber-500",
    tagline: "Elevate your everyday style",
    features: ["Lookbook", "Shop Grid", "CTA Banners"],
    isNew: false,
    path: "/afrify/templates/services/enthusiast",
  },
];

export default function ServicesTemplate() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-violet-500 to-purple-700 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_60%)]" />
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-black text-primary-foreground mb-4">
              Service Templates
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Professional templates for every service business — from salons to agencies
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
              <p className="text-muted-foreground">{templates.length} service templates available</p>
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
                onClick={() => { 
                  if (t.path) window.location.href = t.path;
                }}
              >
                <div className={`relative h-56 rounded-2xl bg-gradient-to-br ${t.gradient} overflow-hidden mb-4`}>
                  {/* Simulated browser chrome */}
                  <div className="absolute top-0 inset-x-0 h-7 bg-black/20 backdrop-blur-sm flex items-center px-3 gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-white/30" />
                    <span className="h-2 w-2 rounded-full bg-white/30" />
                    <span className="h-2 w-2 rounded-full bg-white/30" />
                    <span className="ml-2 text-[10px] text-white/50 font-mono truncate">{t.name.toLowerCase().replace(/\s/g, "")}.afrify.store</span>
                  </div>

                  {/* Content preview */}
                  <div className="absolute inset-0 pt-10 px-5 pb-5 flex flex-col justify-end">
                    <p className="text-white/70 text-xs font-medium mb-1">{t.category}</p>
                    <p className="text-white font-bold text-sm leading-snug max-w-[200px]">{t.tagline}</p>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Button size="sm" variant="secondary" className="shadow-lg">
                      <Eye className="h-4 w-4" /> Preview
                    </Button>
                  </div>

                  {/* Badges */}
                  {t.isNew && (
                    <span className="absolute top-9 right-3 px-2 py-0.5 bg-primary text-primary-foreground text-[10px] font-bold rounded-full uppercase tracking-wider">
                      New
                    </span>
                  )}
                </div>

                {/* Info */}
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

                {/* Feature tags */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {t.features.map((f) => (
                    <span key={f} className="text-[11px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <UseTemplateButton templateName="Services" />
    </PageLayout>
  );
}








