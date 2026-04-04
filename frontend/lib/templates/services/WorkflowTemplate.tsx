const workflowHero = "/assets/beauty/purity-hero.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft, ArrowRight, Monitor, Shield, Search, Zap,
  Settings, Headphones, Package, BarChart3, CheckCircle
} from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";

const features = [
  { icon: Shield, title: "Secure Store", desc: "Enterprise-grade security protecting your digital assets and customer data with advanced encryption." },
  { icon: BarChart3, title: "Insightful Statistics", desc: "Real-time analytics and reporting dashboards to track performance and growth metrics." },
  { icon: Search, title: "Efficient Search", desc: "Lightning-fast search functionality with filters, helping customers find exactly what they need." },
  { icon: Zap, title: "Lightning Speed", desc: "Optimized performance with sub-second load times and seamless user experiences." },
  { icon: Settings, title: "Functionality", desc: "Highly flexible platform with customizable workflows that adapt to your business needs." },
  { icon: Monitor, title: "Responsive Design", desc: "Perfectly adapted interfaces across all devices — desktop, tablet, and mobile." },
  { icon: Headphones, title: "Tech Support", desc: "24/7 dedicated technical support team ready to resolve any issues quickly." },
  { icon: Package, title: "Packages", desc: "Tiered service packages designed to scale with your business from startup to enterprise." },
];

const partners = ["ChromeWire", "Spectra", "Innotel 2", "NanoSphere", "CodeCell"];

const plans = [
  { name: "Starter", price: "$49", period: "/mo", features: ["5 Projects", "Basic Analytics", "Email Support", "1 Team Member"], highlight: false },
  { name: "Professional", price: "$129", period: "/mo", features: ["Unlimited Projects", "Advanced Analytics", "Priority Support", "10 Team Members", "API Access", "Custom Domain"], highlight: true },
  { name: "Enterprise", price: "Custom", period: "", features: ["Everything in Pro", "Dedicated Manager", "SLA Guarantee", "Unlimited Team", "On-premise Option", "Custom Integrations"], highlight: false },
];

export default function WorkflowTemplate() {
  return (
    <PageLayout>
      <UseTemplateButton templateName="Workflow" />
      {/* Top Banner */}
      <div className="bg-foreground text-background text-center py-2 text-sm font-medium">
        ⚡ Scale & Treat Yourself to Efficiency. Free consultation available.
      </div>

      {/* Hero */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-sm text-muted-foreground mb-4 uppercase tracking-widest">Modern Solutions</p>
              <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
                Your Trusted Partner in Modern Tech Maintenance
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Say goodbye to complicated tech maintenance with efficient and practical management systems for your needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="font-bold">Get Started <ArrowRight className="h-5 w-5" /></Button>
                <Button size="lg" variant="outline">Learn More</Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <img src={workflowHero} alt="Tech maintenance workspace" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-8 border-y border-border">
        <div className="container">
          <p className="text-center text-xs text-muted-foreground uppercase tracking-widest mb-6">Trusted by leading companies</p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {partners.map((p) => (
              <span key={p} className="text-xl font-black text-muted-foreground/40 tracking-tight">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Customised Services to Meet Your Unique Needs</h2>
            <p className="text-muted-foreground text-lg">Explore our suite of tailored solutions built to streamline your business operations.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow"
              >
                <f.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-14">Choose Your Plan</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {plans.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-2xl border bg-card ${p.highlight ? "border-primary shadow-lg scale-105" : "border-border"}`}
              >
                {p.highlight && <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full mb-4">Popular</span>}
                <h3 className="text-xl font-bold mb-1">{p.name}</h3>
                <div className="mb-6"><span className="text-4xl font-black">{p.price}</span><span className="text-muted-foreground">{p.period}</span></div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm"><CheckCircle className="h-4 w-4 text-primary shrink-0" /> {f}</li>
                  ))}
                </ul>
                <Button className="w-full" variant={p.highlight ? "default" : "outline"}>Get Started</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Back */}
      <section className="py-8">
        <div className="container text-center">
          <Link href="/afrify/templates/services">
            <Button variant="ghost"><ArrowLeft className="h-4 w-4" /> Back to Service Templates</Button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}








