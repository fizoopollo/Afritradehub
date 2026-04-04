const geniusHero = "/assets/beauty/aura-hero.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft, ArrowRight, Phone, Mail, MapPin, Clock,
  Wrench, Paintbrush, Zap, Droplets, Shield, Star, CheckCircle
} from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";

const services = [
  { icon: Wrench, name: "Plumbing", desc: "Expert plumbing repairs, installations, and maintenance for your home.", price: "From $89" },
  { icon: Paintbrush, name: "Painting", desc: "Interior and exterior painting services with premium quality paints.", price: "From $149" },
  { icon: Zap, name: "Electrical", desc: "Licensed electricians for wiring, fixtures, and electrical upgrades.", price: "From $99" },
  { icon: Droplets, name: "Cleaning", desc: "Deep cleaning, regular maintenance, and move-in/move-out cleaning.", price: "From $69" },
  { icon: Shield, name: "Security", desc: "Home security system installation, monitoring, and upgrades.", price: "From $199" },
  { icon: Wrench, name: "Handyman", desc: "General repairs, furniture assembly, and odd jobs around the house.", price: "From $59" },
];

const testimonials = [
  { name: "Sarah M.", rating: 5, text: "Genius completely transformed our home. The team was professional, punctual, and the quality exceeded expectations." },
  { name: "David K.", rating: 5, text: "Best home service provider we've ever used. Their booking system makes scheduling so easy." },
  { name: "Amara O.", rating: 5, text: "From electrical work to painting, they handle everything. One-stop shop for all home needs." },
];

const stats = [
  { value: "12K+", label: "Homes Serviced" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "150+", label: "Skilled Workers" },
  { value: "24/7", label: "Support Available" },
];

export default function GeniusTemplate() {
  return (
    <PageLayout>
      <UseTemplateButton templateName="Genius" />
      {/* Hero */}
      <section className="relative py-24 md:py-36 overflow-hidden" style={{ background: "linear-gradient(135deg, #1a1f71 0%, #2d3694 50%, #4a52c7 100%)" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
        </div>
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
                ★ Rated #1 Home Service Provider
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                Home Services at Your Doorstep
              </h1>
              <p className="text-lg text-white/70 mb-8 max-w-lg">
                Professional home maintenance, repair, and improvement services. Book trusted experts in minutes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-indigo-900 hover:bg-white/90 font-bold">
                  Book a Service <ArrowRight className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Phone className="h-5 w-5" /> Call Us Now
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="relative rounded-3xl overflow-hidden">
                <img src={geniusHero} alt="Home service professional" className="w-full h-full object-cover rounded-3xl" />
                <div className="absolute inset-0 bg-black/40 rounded-3xl" />
                <div className="absolute inset-0 p-8 grid grid-cols-2 gap-4 items-end">
                  {stats.map((s) => (
                    <div key={s.label} className="text-center p-4 rounded-2xl bg-white/10 backdrop-blur-sm">
                      <p className="text-3xl font-black text-white">{s.value}</p>
                      <p className="text-sm text-white/60 mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-6 border-b border-border bg-card">
        <div className="container flex flex-wrap items-center justify-center gap-8 text-muted-foreground text-sm">
          {["Licensed & Insured", "Background Checked", "Satisfaction Guaranteed", "Same Day Service", "Free Estimates"].map((t) => (
            <span key={t} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> {t}</span>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Professional solutions for every corner of your home</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all bg-card"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{s.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-primary">{s.price}</span>
                  <Button size="sm" variant="ghost">Book Now →</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-14">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Choose a Service", desc: "Browse our services and pick what you need." },
              { step: "02", title: "Book Online", desc: "Select a date and time that works for you." },
              { step: "03", title: "Relax", desc: "Our experts arrive on time and get it done right." },
            ].map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <span className="inline-block text-5xl font-black text-primary/20 mb-4">{s.step}</span>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-14">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl border border-border bg-card">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{t.text}"</p>
                <p className="font-bold">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #1a1f71, #4a52c7)" }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto">Book your first service today and experience the Genius difference.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-900 hover:bg-white/90 font-bold">Book Now</Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Phone className="h-5 w-5" /> (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      {/* Back */}
      <section className="py-8 bg-muted/30">
        <div className="container text-center">
          <Link href="/afrify/templates/services">
            <Button variant="ghost"><ArrowLeft className="h-4 w-4" /> Back to Service Templates</Button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}








