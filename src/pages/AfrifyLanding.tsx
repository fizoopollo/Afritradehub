import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import {
  LayoutGrid, Palette, Smartphone, ShoppingCart, CreditCard,
  BarChart3, ArrowRight, Check, Zap, Globe, Package
} from "lucide-react";

const steps = [
  { icon: Palette, title: "Choose a Template", desc: "Pick from dozens of mobile-first templates designed for African markets." },
  { icon: LayoutGrid, title: "Drag & Drop", desc: "Customize every element with our intuitive visual editor." },
  { icon: Package, title: "Add Products", desc: "Upload products, set pricing, and manage inventory effortlessly." },
  { icon: CreditCard, title: "Set Up Payments", desc: "Accept mobile money, cards, and bank transfers in minutes." },
  { icon: Globe, title: "Publish & Sell", desc: "Go live with your own custom domain and start selling." },
];

const templates = [
  { name: "Fashion Forward", category: "Fashion", color: "from-pink-500 to-rose-500" },
  { name: "Fresh Market", category: "Food & Grocery", color: "from-emerald-500 to-green-500" },
  { name: "TechStore Pro", category: "Electronics", color: "from-blue-500 to-indigo-500" },
  { name: "Artisan Crafts", category: "Handmade", color: "from-amber-500 to-orange-500" },
  { name: "Service Hub", category: "Services", color: "from-violet-500 to-purple-500" },
  { name: "Beauty Glow", category: "Beauty", color: "from-rose-400 to-pink-500" },
];

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    features: ["Up to 10 products", "Basic templates", "Standard support", "Afrify subdomain"],
    cta: "Start Free",
    variant: "outline" as const,
  },
  {
    name: "Growth",
    price: "$19",
    period: "/month",
    features: ["Unlimited products", "Premium templates", "Custom domain", "Analytics dashboard", "Discount codes", "Priority support"],
    cta: "Start Growing",
    variant: "hero" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$79",
    period: "/month",
    features: ["Everything in Growth", "API access", "Multi-currency", "Multi-language", "Dedicated manager", "SLA guarantee"],
    cta: "Contact Sales",
    variant: "gold" as const,
  },
];

export default function AfrifyLanding() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-surface-sunken overflow-hidden">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-6">
              <Zap className="h-4 w-4" /> Afrify Store Builder
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6">
              Your Store,{" "}
              <span className="text-gradient-orange">Your Way</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Build a beautiful online store in minutes. Accept mobile money, manage orders, and grow your business — all from one dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button variant="orange" size="xl">
                  Start Building Free <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="xl">
                <Smartphone className="h-5 w-5" /> View Demo Store
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Launch in 5 Easy Steps</h2>
            <p className="text-muted-foreground text-lg">From zero to live store in under 30 minutes</p>
          </div>
          <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center relative"
              >
                <div className="h-14 w-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-7 w-7 text-secondary" />
                </div>
                <div className="absolute top-7 left-[60%] w-[calc(100%-20px)] h-[2px] bg-border hidden md:block last:hidden" />
                <h3 className="font-bold mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates */}
      <section className="py-24 bg-surface-sunken">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Beautiful Templates</h2>
            <p className="text-muted-foreground text-lg">Start with a design, make it yours</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {templates.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group cursor-pointer"
              >
                <div className={`h-48 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center mb-3 group-hover:scale-[1.02] transition-transform duration-300`}>
                  <LayoutGrid className="h-12 w-12 text-primary-foreground/60" />
                </div>
                <h3 className="font-bold">{t.name}</h3>
                <p className="text-sm text-muted-foreground">{t.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Simple Pricing</h2>
            <p className="text-muted-foreground text-lg">Start free, grow when you're ready</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl p-6 border ${
                  plan.popular ? "border-secondary shadow-glow-orange" : "border-border"
                } bg-card`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-orange-gradient text-secondary-foreground text-xs font-bold rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant={plan.variant} className="w-full">
                  {plan.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
