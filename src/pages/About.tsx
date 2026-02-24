import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Globe, Users, Target, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Community First",
    description: "Empowering businesses through collaboration and shared growth."
  },
  {
    icon: <Target className="h-6 w-6 text-primary" />,
    title: "Direct Impact",
    description: "Solving real problems for African businesses with tailored solutions."
  },
  {
    icon: <Rocket className="h-6 w-6 text-primary" />,
    title: "Innovation",
    description: "Leveraging cutting-edge technology to bridge trade gaps across the continent."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Empowering the Future of <span className="text-gradient-primary">African Trade</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Afritradehub is on a mission to digitize and connect the African B2B ecosystem,
              making it easier than ever for businesses to find partners and grow online.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                We believe in an Africa where every business, regardless of size, has access to the tools
                and networks they need to thrive. Our platform bridges the gap between traditional
                commerce and the digital economy.
              </p>
              <div className="p-6 rounded-2xl bg-muted border border-border">
                <Globe className="h-8 w-8 text-primary mb-4" />
                <p className="italic text-foreground">
                  "Building the digital infrastructure for the next generation of African entrepreneurs."
                </p>
              </div>
            </div>
            <div className="relative aspect-video rounded-3xl bg-hero-gradient overflow-hidden shadow-2xl flex items-center justify-center">
               <Globe className="h-24 w-24 text-primary-foreground opacity-20" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
