const grainHero = "/assets/beauty/beyond-hero.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Sparkles, Heart, Users, BookOpen, Star } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";

const services = [
  { title: "1:1 Coaching", desc: "Personalized sessions tailored to your unique goals and challenges.", price: "$200/session" },
  { title: "Group Workshops", desc: "Collaborative learning experiences with like-minded individuals.", price: "$85/person" },
  { title: "Corporate Retreats", desc: "Transform your team dynamics with immersive retreat experiences.", price: "Custom" },
  { title: "Online Courses", desc: "Self-paced digital programs for flexible personal development.", price: "From $149" },
];

const testimonials = [
  { name: "Priya S.", role: "Entrepreneur", text: "Working with Grain completely shifted my perspective. I finally have clarity on my business direction." },
  { name: "James T.", role: "Executive", text: "The coaching methodology is unlike anything I've experienced. Deeply transformative." },
  { name: "Adele N.", role: "Creative Director", text: "Every session left me feeling more aligned with my purpose. Cannot recommend enough." },
];

const pressLogos = ["Forbes", "Inc.", "Goop", "Well+Good", "MindBody"];

export default function GrainTemplate() {
  return (
    <PageLayout>
      <UseTemplateButton templateName="Grain" />
      {/* Hero */}
      <section className="relative py-28 md:py-40 overflow-hidden" style={{ background: "linear-gradient(180deg, #f5f0e8 0%, #ebe4d6 100%)" }}>
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-sm uppercase tracking-[0.3em] text-stone-500 mb-6">Life & Business Coaching</p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Meet Your New<br />Clarity Coach
            </h1>
            <p className="text-lg text-stone-600 max-w-xl mx-auto mb-10">
              Helping ambitious people find focus, build confidence, and create lives they love — one intentional step at a time.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-stone-900 text-white hover:bg-stone-800 font-medium rounded-full px-8">
                Book a Free Call <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-stone-400 text-stone-700 hover:bg-stone-100">
                Explore Programs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Press */}
      <section className="py-8 border-b" style={{ borderColor: "#e5ddd0" }}>
        <div className="container">
          <p className="text-center text-xs uppercase tracking-widest text-stone-400 mb-4">As seen in</p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {pressLogos.map((l) => (
              <span key={l} className="text-xl font-serif font-bold text-stone-300 italic">{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="aspect-[3/4] rounded-3xl overflow-hidden">
                <img src={grainHero} alt="Life coach in studio" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-sm uppercase tracking-[0.2em] text-stone-400 mb-4">About</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                I believe everyone deserves a life that feels aligned
              </h2>
              <p className="text-stone-600 mb-4">
                With over 10 years of experience in transformational coaching, I've helped hundreds of professionals and creatives unlock their potential and design lives that feel both meaningful and sustainable.
              </p>
              <p className="text-stone-600 mb-8">
                My approach blends evidence-based psychology with intuitive guidance, creating a space where breakthroughs happen naturally.
              </p>
              <div className="flex gap-8">
                <div><p className="text-3xl font-bold text-stone-900">500+</p><p className="text-sm text-stone-500">Clients Coached</p></div>
                <div><p className="text-3xl font-bold text-stone-900">10+</p><p className="text-sm text-stone-500">Years Experience</p></div>
                <div><p className="text-3xl font-bold text-stone-900">4.9</p><p className="text-sm text-stone-500">Avg Rating</p></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20" style={{ background: "#f5f0e8" }}>
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Service Tiers</h2>
            <p className="text-stone-600 text-lg">Find the right program for where you are</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-stone-200 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-stone-900 mb-2">{s.title}</h3>
                <p className="text-stone-500 text-sm mb-4">{s.desc}</p>
                <p className="font-bold text-stone-800">{s.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 text-center mb-14" style={{ fontFamily: "'Playfair Display', serif" }}>Client Stories</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-stone-200 bg-card"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-stone-600 italic mb-4">"{t.text}"</p>
                <p className="font-bold text-stone-900">{t.name}</p>
                <p className="text-sm text-stone-400">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "linear-gradient(180deg, #f5f0e8, #ebe4d6)" }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Ready to Begin?</h2>
          <p className="text-stone-600 text-lg mb-8 max-w-md mx-auto">Your first consultation is complimentary. Let's explore what's possible.</p>
          <Button size="lg" className="bg-stone-900 text-white hover:bg-stone-800 rounded-full px-10 font-medium">
            Schedule Your Free Call <ArrowRight className="h-5 w-5" />
          </Button>
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








