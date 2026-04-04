const sonikHero = "/assets/beauty/phenomena-hero.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Leaf, Droplets, Wind, Heart, Clock, Star, Phone } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";

const therapies = [
  { name: "Deep Tissue Massage", duration: "60 min", price: "$120", desc: "Targeted relief for chronic tension and deep muscle knots." },
  { name: "Hot Stone Therapy", duration: "75 min", price: "$150", desc: "Smooth heated stones placed to melt away stress and tension." },
  { name: "Aromatherapy", duration: "60 min", price: "$110", desc: "Essential oil blends customized for relaxation and renewal." },
  { name: "Facial Rejuvenation", duration: "45 min", price: "$95", desc: "Restore your skin's natural glow with organic treatments." },
  { name: "Couples Retreat", duration: "90 min", price: "$280", desc: "Share a relaxing spa experience with your partner." },
  { name: "Prenatal Massage", duration: "60 min", price: "$130", desc: "Gentle, supportive bodywork designed for expectant mothers." },
];

const values = [
  { icon: Leaf, title: "100% Organic", desc: "All products are natural, organic, and ethically sourced." },
  { icon: Heart, title: "Holistic Approach", desc: "We treat the whole person — mind, body, and spirit." },
  { icon: Wind, title: "Tranquil Setting", desc: "Our spaces are designed for deep relaxation and calm." },
];

export default function SonikTemplate() {
  return (
    <PageLayout>
      <UseTemplateButton templateName="Sonik" />
      {/* Hero */}
      <section className="relative py-28 md:py-40 overflow-hidden" style={{ background: "linear-gradient(180deg, #1a3a2a 0%, #0f2e1f 100%)" }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full bg-emerald-400/20 blur-[120px]" />
        </div>
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-sm uppercase tracking-[0.4em] text-emerald-300/60 mb-6">Spa & Wellness</p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Where Therapeutic<br />Services Meet<br />Everyday Calm
            </h1>
            <p className="text-lg text-emerald-100/50 max-w-xl mx-auto mb-10">
              Restore balance and find your center. Boutique spa experiences designed for modern life.
            </p>
            <Button size="lg" className="bg-emerald-400 text-emerald-950 hover:bg-emerald-300 font-bold rounded-full px-10">
              Book Your Session <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16" style={{ background: "#f0f5f1" }}>
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="h-14 w-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="h-7 w-7 text-emerald-700" />
                </div>
                <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapies */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Our Therapies</h2>
            <p className="text-muted-foreground text-lg">Choose the treatment that speaks to you</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {therapies.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" /> {t.duration}</span>
                  <span className="text-lg font-bold text-emerald-700">{t.price}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{t.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{t.desc}</p>
                <Button size="sm" variant="outline" className="w-full">Book Now</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery placeholder */}
      <section className="py-20" style={{ background: "#f0f5f1" }}>
        <div className="container">
          <h2 className="text-3xl font-serif font-bold text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Our Space</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[sonikHero, sonikHero, sonikHero, sonikHero].map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="aspect-square rounded-2xl overflow-hidden"
              >
                <img src={img} alt="Spa space" className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "linear-gradient(180deg, #1a3a2a, #0f2e1f)" }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Begin Your Wellness Journey</h2>
          <p className="text-emerald-100/50 text-lg mb-8 max-w-md mx-auto">Your first visit includes a complimentary consultation.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-emerald-400 text-emerald-950 hover:bg-emerald-300 font-bold rounded-full px-10">Book Now</Button>
            <Button size="lg" variant="outline" className="border-emerald-400/30 text-white hover:bg-white/10 rounded-full px-10">
              <Phone className="h-5 w-5" /> Call Us
            </Button>
          </div>
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








