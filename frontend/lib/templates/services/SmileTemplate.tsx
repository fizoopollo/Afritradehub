const smileHero = "/assets/beauty/luxe-hero.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Phone, Clock, MapPin, Heart, Shield, Smile, Star, CheckCircle } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";

const services = [
  { name: "General Dentistry", desc: "Comprehensive check-ups, cleanings, fillings, and preventive care.", icon: Smile },
  { name: "Cosmetic Dentistry", desc: "Whitening, veneers, bonding, and smile makeover treatments.", icon: Star },
  { name: "Orthodontics", desc: "Braces, clear aligners, and corrective jaw treatments.", icon: Shield },
  { name: "Pediatric Care", desc: "Gentle, child-friendly dental care from first tooth to teen.", icon: Heart },
  { name: "Oral Surgery", desc: "Extractions, implants, and advanced surgical procedures.", icon: CheckCircle },
  { name: "Emergency Care", desc: "Same-day emergency dental treatments when you need it most.", icon: Phone },
];

const team = [
  { name: "Dr. Amina Osei", role: "Lead Dentist", specialty: "Cosmetic & Restorative" },
  { name: "Dr. Ben Kariuki", role: "Orthodontist", specialty: "Braces & Aligners" },
  { name: "Dr. Fatima Diallo", role: "Pediatric Specialist", specialty: "Children's Dentistry" },
];

export default function SmileTemplate() {
  return (
    <PageLayout>
      <UseTemplateButton templateName="Smile" />
      {/* Hero */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={smileHero} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(13,148,136,0.85), rgba(8,145,178,0.85))" }} />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-80 h-80 rounded-full bg-white/30 blur-3xl" />
        </div>
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white text-sm font-medium mb-6">
                🦷 Award-Winning Dental Practice
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                Pioneering Excellence in Dental Care
              </h1>
              <p className="text-lg text-white/70 mb-8 max-w-lg">
                Where cutting-edge technology meets compassionate care. Your smile is in expert hands.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-teal-800 hover:bg-white/90 font-bold">
                  Book Appointment <ArrowRight className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Phone className="h-5 w-5" /> Emergency Line
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <div className="rounded-3xl bg-white/10 backdrop-blur-sm p-8">
                <h3 className="text-white font-bold text-xl mb-6">Opening Hours</h3>
                <div className="space-y-3 text-white/80">
                  {[
                    { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
                    { day: "Saturday", hours: "9:00 AM – 2:00 PM" },
                    { day: "Sunday", hours: "Emergency Only" },
                  ].map((h) => (
                    <div key={h.day} className="flex justify-between text-sm">
                      <span>{h.day}</span><span className="font-medium">{h.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/20 flex items-center gap-3 text-white/70 text-sm">
                  <MapPin className="h-4 w-4" /> 45 Health Boulevard, Accra, Ghana
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg">Comprehensive dental care for the whole family</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow group"
              >
                <div className="h-12 w-12 rounded-xl bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-4">
                  <s.icon className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{s.name}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-14">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-teal-200 to-cyan-200 mx-auto mb-4 flex items-center justify-center">
                  <Smile className="h-12 w-12 text-teal-600" />
                </div>
                <h3 className="font-bold text-lg">{t.name}</h3>
                <p className="text-sm text-muted-foreground">{t.role}</p>
                <p className="text-xs text-muted-foreground mt-1">{t.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #0d9488, #0891b2)" }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Your Best Smile Awaits</h2>
          <p className="text-white/70 text-lg mb-8 max-w-md mx-auto">New patients welcome. Book your first visit today — it's easier than you think.</p>
          <Button size="lg" className="bg-white text-teal-800 hover:bg-white/90 font-bold">Schedule Now</Button>
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








