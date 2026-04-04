const leapHero = "/assets/beauty/blockshop-hero.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Megaphone, BarChart3, PenTool, Globe, Target, Rocket, Star, CheckCircle } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";

const services = [
  { icon: Megaphone, title: "Brand Strategy", desc: "Define your unique position and build a brand that resonates with your audience." },
  { icon: PenTool, title: "Creative Design", desc: "Eye-catching visuals, logos, and brand identities that leave lasting impressions." },
  { icon: Globe, title: "Digital Marketing", desc: "SEO, PPC, social media, and content marketing strategies that drive results." },
  { icon: BarChart3, title: "Analytics & Insights", desc: "Data-driven decisions with comprehensive reporting and performance tracking." },
];

const process = [
  { step: "01", title: "Discover", desc: "We learn your business, audience, and goals inside and out." },
  { step: "02", title: "Strategize", desc: "Craft a custom roadmap with clear milestones and KPIs." },
  { step: "03", title: "Execute", desc: "Launch campaigns with precision across all channels." },
  { step: "04", title: "Optimize", desc: "Continuously refine based on real-time data and insights." },
];

const stats = [
  { value: "300+", label: "Campaigns Launched" },
  { value: "95%", label: "Client Retention" },
  { value: "10x", label: "Avg. ROI" },
  { value: "50+", label: "Team Members" },
];

export default function LeapTemplate() {
  return (
    <PageLayout>
      <UseTemplateButton templateName="Leap" />
      {/* Hero */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={leapHero} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(217,70,239,0.8), rgba(162,28,175,0.8), rgba(124,58,237,0.8))" }} />
        </div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-white/20 blur-[100px]" />
        </div>
        <div className="container relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white text-sm font-medium mb-6">
              🚀 Marketing Agency
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Your marketing shouldn't feel like a guessing game
            </h1>
            <p className="text-lg text-white/70 mb-8 max-w-lg">
              We turn uncertainty into strategy, and strategy into measurable growth. Let's make your brand unforgettable.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-white/90 font-bold">
                Start a Project <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl md:text-4xl font-black text-primary">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black mb-4">What We Do</h2>
            <p className="text-muted-foreground text-lg">Full-service marketing solutions for ambitious brands</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow group"
              >
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-14">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {process.map((p, i) => (
              <motion.div key={p.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <span className="inline-block text-5xl font-black text-primary/20 mb-4">{p.step}</span>
                <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio placeholder */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-black text-center mb-14">Featured Work</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {["Brand Redesign — Luxe Co.", "Social Campaign — FitLife", "Website Launch — TechNova", "Content Strategy — GreenEats", "PPC Campaign — CloudServe", "Email Series — StyleBox"].map((p, i) => (
              <motion.div key={p} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-fuchsia-100 to-purple-100 dark:from-fuchsia-900/20 dark:to-purple-900/20 flex items-center justify-center p-6 group cursor-pointer hover:shadow-md transition-shadow"
              >
                <p className="font-bold text-center text-sm">{p}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #d946ef, #7c3aed)" }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Ready to Leap?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-md mx-auto">Let's talk about your next big move. First consultation is on us.</p>
          <Button size="lg" className="bg-white text-purple-900 hover:bg-white/90 font-bold">Get in Touch</Button>
        </div>
      </section>

      <section className="py-8">
        <div className="container text-center">
          <Link href="/afrify/templates/services"><Button variant="ghost"><ArrowLeft className="h-4 w-4" /> Back to Service Templates</Button></Link>
        </div>
      </section>
    </PageLayout>
  );
}








