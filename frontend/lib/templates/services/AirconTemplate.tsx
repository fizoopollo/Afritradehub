const airconHero = "/assets/beauty/beautech-hero.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Phone, Fan, Thermometer, Wrench, Shield, Clock, Star, MapPin, CheckCircle } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";

const services = [
  { icon: Fan, name: "AC Installation", desc: "Professional installation for residential and commercial units.", price: "From $299" },
  { icon: Wrench, name: "Repair & Maintenance", desc: "Fast diagnostics and repair for all HVAC brands.", price: "From $89" },
  { icon: Thermometer, name: "Heating Systems", desc: "Furnace and heat pump installation and servicing.", price: "From $199" },
  { icon: Shield, name: "Annual Contracts", desc: "Preventive maintenance plans to keep systems running optimally.", price: "From $49/mo" },
];

const trustBadges = ["Licensed & Bonded", "EPA Certified", "10-Year Warranty", "24/7 Emergency", "Free Estimates"];

const serviceAreas = ["Downtown", "Westside", "East End", "North Hills", "South Bay", "Suburbia", "Metro Center", "Uptown"];

export default function AirconTemplate() {
  return (
    <PageLayout>
      <UseTemplateButton templateName="Aircon" />
      {/* Hero */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={airconHero} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(21,128,61,0.85), rgba(22,101,52,0.85))" }} />
        </div>
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-emerald-300/30 blur-[100px]" />
        </div>
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white text-sm font-medium mb-6">
                ❄️ HVAC Experts Since 2005
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                Stay Cool,<br />Stay Comfortable<br />Always
              </h1>
              <p className="text-lg text-white/70 mb-8 max-w-lg">
                Professional HVAC installation, repair, and maintenance. Keeping your home at the perfect temperature year-round.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-green-900 hover:bg-white/90 font-bold">
                  Book Service <ArrowRight className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Phone className="h-5 w-5" /> (555) 987-6543
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <div className="rounded-3xl bg-white/10 backdrop-blur-sm p-8">
                <h3 className="text-white font-bold text-xl mb-4">Quick Booking</h3>
                <div className="space-y-3">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm" />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm" />
                  <select className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white/60 text-sm">
                    <option>Select Service</option>
                    <option>AC Installation</option>
                    <option>Repair</option>
                    <option>Maintenance</option>
                  </select>
                  <Button className="w-full bg-emerald-400 text-emerald-950 hover:bg-emerald-300 font-bold">Submit Request</Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-6 border-b border-border bg-card">
        <div className="container flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          {trustBadges.map((b) => (
            <span key={b} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" /> {b}</span>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-14">Our Services</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((s, i) => (
              <motion.div key={s.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                  <s.icon className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="text-xl font-bold mb-2">{s.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{s.desc}</p>
                <span className="font-bold text-green-700">{s.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-muted/30">
        <div className="container text-center">
          <h2 className="text-3xl font-black mb-4">Service Areas</h2>
          <p className="text-muted-foreground mb-10">We proudly serve these communities and surrounding areas</p>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-2xl mx-auto">
            {serviceAreas.map((a) => (
              <span key={a} className="px-4 py-2 rounded-full border border-border bg-card text-sm font-medium flex items-center gap-2">
                <MapPin className="h-3 w-3 text-green-600" /> {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #15803d, #166534)" }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Beat the Heat</h2>
          <p className="text-white/70 text-lg mb-8 max-w-md mx-auto">Schedule your service today and enjoy comfort all year round.</p>
          <Button size="lg" className="bg-white text-green-900 hover:bg-white/90 font-bold">Schedule Now</Button>
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








