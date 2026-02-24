import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, ShieldCheck, Globe, Users, Zap } from "lucide-react";

const tradehubPlans = [
  {
    name: "Free",
    price: "$0",
    period: "",
    features: ["Basic company listing", "5 product listings", "3 RFQ responses/month", "Community support"],
    variant: "outline" as const,
  },
  {
    name: "Premium",
    price: "$49",
    period: "/month",
    features: ["Featured placement", "Unlimited products", "Unlimited RFQs", "Analytics dashboard", "Verification badge", "Priority support"],
    variant: "hero" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "/month",
    features: ["Everything in Premium", "API access", "Dedicated account manager", "Custom branding", "SLA guarantee", "White-label options"],
    variant: "gold" as const,
  },
];

const features = [
  { icon: ShieldCheck, title: "Verified Trust", desc: "Multi-tier verification gives your business credibility across the continent." },
  { icon: Globe, title: "Pan-African Reach", desc: "Access buyers and suppliers in 34+ African countries from a single platform." },
  { icon: Users, title: "Growing Network", desc: "Join 50,000+ businesses already trading on the platform." },
  { icon: Zap, title: "Mobile-First", desc: "Built for how Africa does business — fast, mobile, and money-transfer ready." },
];

export default function PricingPage() {
  return (
    <PageLayout>
      <section className="py-24 bg-surface-sunken">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              Plans That <span className="text-gradient-primary">Scale With You</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're just starting or running a large enterprise, we have a plan that fits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tradehub Plans */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-2xl font-bold text-center mb-2">Afritradehub Plans</h2>
          <p className="text-center text-muted-foreground mb-12">For B2B directory and marketplace access</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {tradehubPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl p-6 border bg-card ${plan.popular ? "border-primary shadow-glow-primary" : "border-border"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-hero-gradient text-primary-foreground text-xs font-bold rounded-full">
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
                <Button variant={plan.variant} className="w-full">Get Started</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-surface-sunken">
        <div className="container">
          <h2 className="text-3xl font-black text-center mb-12">Why Businesses Choose Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-hero-gradient text-center">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-black text-primary-foreground mb-4">Start Trading Today</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">No credit card required. Get started with our free plan.</p>
          <Link to="/signup">
            <Button variant="gold" size="xl">
              Create Free Account <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
