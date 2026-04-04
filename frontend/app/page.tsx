"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/landing/PageLayout";
import {
  Search,
  Globe,
  ShieldCheck,
  TrendingUp,
  Store,
  LayoutGrid,
  ArrowRight,
  Users,
  Package,
  MessageSquare,
  Zap,
  BarChart3,
  CheckCircle2,
  Star,
  Wand2,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const stats = [
  { value: "50K+", label: "Businesses" },
  { value: "34", label: "Countries" },
  { value: "$2.8B", label: "Trade Volume" },
  { value: "98%", label: "Satisfaction" },
];

const tradehubFeatures = [
  {
    icon: Search,
    title: "Smart Directory" as const,
    desc: "Find verified African suppliers and buyers with AI-powered search across 34 countries.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Verification" as const,
    desc: "Multi-tier verification system with badges, reviews, and certification tracking.",
  },
  {
    icon: MessageSquare,
    title: "RFQ System" as const,
    desc: "Post requirements, receive competitive quotes, and negotiate directly on the platform.",
  },
  {
    icon: BarChart3,
    title: "Trade Analytics" as const,
    desc: "Track profile views, inquiry rates, and conversion metrics in real-time.",
  },
];

const afrifyFeatures = [
  {
    icon: LayoutGrid,
    title: "Drag & Drop Builder" as const,
    desc: "Build stunning online stores with our visual editor — no coding needed.",
  },
  {
    icon: Store,
    title: "Theme Marketplace" as const,
    desc: "Premium templates designed for African markets with mobile-first optimization.",
  },
  {
    icon: Package,
    title: "Product Management" as const,
    desc: "Manage inventory, variants, digital goods, and bulk imports with ease.",
  },
  {
    icon: Zap,
    title: "Mobile Money Ready" as const,
    desc: "Accept M-Pesa, MTN Mobile Money, Stripe, and 40+ payment methods.",
  },
];

const testimonials = [
  {
    name: "Amara Okafor",
    role: "CEO, Lagos Textiles",
    text: "Afritradehub connected us with 200+ buyers across West Africa in just 3 months.",
    rating: 5,
  },
  {
    name: "Kwame Asante",
    role: "Founder, GhanaGreen",
    text: "Afrify made it possible to launch our online store in a single afternoon. Sales tripled!",
    rating: 5,
  },
  {
    name: "Fatima Hassan",
    role: "MD, Nairobi Imports",
    text: "The RFQ system saved us 60% on procurement costs. Game-changer for our business.",
    rating: 5,
  },
];

export default function HomePage() {
  const [heroTitle, setHeroTitle] = useState("Trade Across Africa, Build Without Limits");
  const [heroSubtitle, setHeroSubtitle] = useState(
    "Connect with verified suppliers, discover new markets, or launch your own online store — all on one platform built for African business.",
  );
  const [editorOpen, setEditorOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const savedTitle = window.localStorage.getItem("visualEdits.heroTitle");
    const savedSubtitle = window.localStorage.getItem("visualEdits.heroSubtitle");
    if (savedTitle) setHeroTitle(savedTitle);
    if (savedSubtitle) setHeroSubtitle(savedSubtitle);
  }, []);

  const handleSave = () => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("visualEdits.heroTitle", heroTitle);
    window.localStorage.setItem("visualEdits.heroSubtitle", heroSubtitle);
    setEditorOpen(false);
  };

  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-foreground">
        <div className="absolute inset-0">
          <img
            src="/hero-bg.jpg"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/80 to-foreground" />
        </div>

        <div className="container relative z-10 py-24 md:py-36 text-center">
          <motion.div initial="hidden" animate="visible" className="max-w-4xl mx-auto">
            <motion.div
              custom={0}
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <Globe className="h-4 w-4" />
              Africa&apos;s #1 B2B Trade Platform
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-background mb-6"
            >
              {heroTitle}
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-lg md:text-xl text-background/60 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              {heroSubtitle}
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="default" size="lg" asChild>
                <Link href="/tradehub">
                  Explore Marketplace
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/afrify">
                  Build Your Store
                  <Store className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-primary">{stat.value}</div>
                <div className="text-sm text-background/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-surface-sunken">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Afritradehub
            </span>
            <h2 className="text-3xl md:text-5xl font-black mt-3 mb-4">B2B Directory &amp; Marketplace</h2>
            <p className="text-muted-foreground text-lg">
              Discover, connect, and trade with verified businesses across the continent.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tradehubFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-glow-primary transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-hero-gradient group-hover:text-primary-foreground transition-all duration-300">
                  <f.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link href="/tradehub">
                Browse Directory <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Afrify</span>
            <h2 className="text-3xl md:text-5xl font-black mt-3 mb-4">Build Your Online Store</h2>
            <p className="text-muted-foreground text-lg">
              Launch a beautiful, mobile-first store in minutes with drag-and-drop simplicity.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {afrifyFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card rounded-2xl p-6 border border-border hover:border-secondary/30 hover:shadow-glow-orange transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-orange-gradient group-hover:text-secondary-foreground transition-all duration-300">
                  <f.icon className="h-6 w-6 text-secondary group-hover:text-secondary-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link href="/afrify">
                Start Building <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-sunken">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-5xl font-black mt-3 mb-4">Trusted Across Africa</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed">"{t.text}"</p>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-hero-gradient">
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-black text-primary-foreground mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-10">
            Join 50,000+ businesses already trading on Africa&apos;s most trusted platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-background text-foreground hover:bg-muted" asChild>
              <Link href="/signup">
                Get Started Free
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/30" asChild>
              <Link href="/about">
                Learn More
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Floating visual edits button & panel */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {editorOpen && (
          <div className="w-80 rounded-xl border border-border bg-background/95 shadow-lg p-4 space-y-3">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <Wand2 className="h-4 w-4 text-secondary" />
                <span className="text-sm font-semibold">Visual edits</span>
              </div>
              <button
                type="button"
                className="text-xs text-muted-foreground hover:text-foreground"
                onClick={() => setEditorOpen(false)}
              >
                Close
              </button>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">Hero title</label>
              <textarea
                className="w-full rounded-md border border-border bg-background px-2 py-1 text-sm"
                rows={2}
                value={heroTitle}
                onChange={(e) => setHeroTitle(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">Hero subtitle</label>
              <textarea
                className="w-full rounded-md border border-border bg-background px-2 py-1 text-sm"
                rows={3}
                value={heroSubtitle}
                onChange={(e) => setHeroSubtitle(e.target.value)}
              />
            </div>
            <div className="flex justify-end gap-2 pt-1">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setHeroTitle("Trade Across Africa, Build Without Limits");
                  setHeroSubtitle(
                    "Connect with verified suppliers, discover new markets, or launch your own online store — all on one platform built for African business.",
                  );
                }}
              >
                Reset
              </Button>
              <Button size="sm" onClick={handleSave}>
                Save
              </Button>
            </div>
          </div>
        )}

        <Button
          size="icon"
          variant="outline"
          className="rounded-full shadow-md bg-background/90 backdrop-blur"
          onClick={() => setEditorOpen((open) => !open)}
          aria-label="Toggle visual edit mode"
        >
          <Wand2 className="h-5 w-5" />
        </Button>
      </div>
    </PageLayout>
  );
}
