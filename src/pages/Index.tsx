import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import {
  Search, Globe, ShieldCheck, TrendingUp, Store, LayoutGrid,
  ArrowRight, Users, Package, MessageSquare, Zap, BarChart3,
  CheckCircle2, Star, Sprout, Shirt, Smartphone, Building,
  Cog, Gem
} from "lucide-react";

const categories = [
  { icon: Sprout, name: "Agriculture & Food", count: "12,450 suppliers" },
  { icon: Shirt, name: "Fashion & Apparel", count: "8,230 suppliers" },
  { icon: Smartphone, name: "Electronics", count: "15,670 suppliers" },
  { icon: Building, name: "Construction", count: "6,890 suppliers" },
  { icon: Cog, name: "Machinery", count: "4,120 suppliers" },
  { icon: Gem, name: "Mining & Metals", count: "2,340 suppliers" },
];
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
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
  { icon: Search, title: "Smart Directory", desc: "Find verified African suppliers and buyers with AI-powered search across 34 countries." },
  { icon: ShieldCheck, title: "Trust & Verification", desc: "Multi-tier verification system with badges, reviews, and certification tracking." },
  { icon: MessageSquare, title: "RFQ System", desc: "Post requirements, receive competitive quotes, and negotiate directly on the platform." },
  { icon: BarChart3, title: "Trade Analytics", desc: "Track profile views, inquiry rates, and conversion metrics in real-time." },
];

const afrifySFeatures = [
  { icon: LayoutGrid, title: "Drag & Drop Builder", desc: "Build stunning online stores with our visual editor — no coding needed." },
  { icon: Store, title: "Theme Marketplace", desc: "Premium templates designed for African markets with mobile-first optimization." },
  { icon: Package, title: "Product Management", desc: "Manage inventory, variants, digital goods, and bulk imports with ease." },
  { icon: Zap, title: "Mobile Money Ready", desc: "Accept M-Pesa, MTN Mobile Money, Stripe, and 40+ payment methods." },
];

const testimonials = [
  { name: "Amara Okafor", role: "CEO, Lagos Textiles", text: "AfriTradeHub connected us with 200+ buyers across West Africa in just 3 months.", rating: 5 },
  { name: "Kwame Asante", role: "Founder, GhanaGreen", text: "Afrify made it possible to launch our online store in a single afternoon. Sales tripled!", rating: 5 },
  { name: "Fatima Hassan", role: "MD, Nairobi Imports", text: "The RFQ system saved us 60% on procurement costs. Game-changer for our business.", rating: 5 },
];

export default function LandingPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/80 to-foreground" />
        </div>

        <div className="container relative z-10 py-24 md:py-36 text-center">
          <motion.div initial="hidden" animate="visible" className="max-w-4xl mx-auto">
            <motion.div custom={0} variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              <Globe className="h-4 w-4" />
              Africa's #1 B2B Trade Platform
            </motion.div>

            <motion.h1 custom={1} variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-background mb-6">
              Connect with Verified{" "}
              <span className="text-gradient-primary">African Suppliers</span>
            </motion.h1>

            <motion.p custom={2} variants={fadeUp} className="text-lg md:text-xl text-background/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              Access millions of products from trusted manufacturers and wholesalers across the continent.
            </motion.p>

            <motion.div custom={3} variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tradehub">
                <Button variant="hero" size="xl">
                  Explore Marketplace
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/afrify">
                <Button variant="orange" size="xl">
                  Build Your Store
                  <Store className="h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats */}
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

      {/* Browse by Category */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-black">Browse by Category</h2>
            <Link to="/tradehub" className="text-primary font-bold hover:underline flex items-center gap-1">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all text-center cursor-pointer"
              >
                <div className="h-16 w-16 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                  <cat.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-sm mb-1">{cat.name}</h3>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{cat.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AfriTradeHub Section */}
      <section className="py-24 bg-surface-sunken">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">AfriTradeHub</span>
            <h2 className="text-3xl md:text-5xl font-black mt-3 mb-4">B2B Directory & Marketplace</h2>
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
            <Link to="/tradehub">
              <Button variant="heroOutline" size="lg">
                Browse Directory <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Afrify Section */}
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
            {afrifySFeatures.map((f, i) => (
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
            <Link to="/afrify">
              <Button variant="orange" size="lg">
                Start Building <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface-sunken">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Testimonials</span>
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

      {/* CTA */}
      <section className="py-24 bg-hero-gradient">
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-black text-primary-foreground mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-10">
            Join 50,000+ businesses already trading on Africa's most trusted platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button variant="gold" size="xl">
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="heroOutline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
