import Link from "next/link";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowLeft, Star, Zap, Shield, Truck } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";

const products = [
  { name: "Smartphone Pro 128GB", price: "$299", oldPrice: "$349", rating: 4.7, image: "from-slate-600 to-slate-800", badge: "Hot Deal" },
  { name: "Wireless Earbuds X3", price: "$45", oldPrice: null, rating: 4.5, image: "from-blue-600 to-indigo-700", badge: null },
  { name: 'Smart TV 43"', price: "$380", oldPrice: "$450", rating: 4.8, image: "from-gray-700 to-gray-900", badge: "Save 15%" },
  { name: "Solar Power Bank 20K", price: "$25", oldPrice: null, rating: 4.6, image: "from-emerald-600 to-teal-700", badge: "Eco" },
  { name: "Laptop Stand & Hub", price: "$55", oldPrice: "$65", rating: 4.4, image: "from-zinc-500 to-zinc-700", badge: null },
  { name: "Bluetooth Speaker", price: "$35", oldPrice: null, rating: 4.3, image: "from-violet-600 to-purple-700", badge: "New" },
];

const features = [
  { icon: Zap, title: "Fast Shipping", desc: "2-day delivery across major cities" },
  { icon: Shield, title: "1 Year Warranty", desc: "Full manufacturer warranty" },
  { icon: Truck, title: "Free Returns", desc: "30-day hassle-free returns" },
];

export default function ElectronicsTemplate() {
  return (
    <PageLayout>
      <UseTemplateButton templateName="Electronics" />
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-600 to-indigo-800 overflow-hidden">
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-black text-primary-foreground mb-4">
              TechStore Pro
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Latest electronics at unbeatable prices
            </p>
            <Link href="/afrify">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                <ArrowLeft className="h-4 w-4" /> Back to Templates
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-border py-6">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((f) => (
              <div key={f.title} className="flex items-center gap-3 justify-center">
                <f.icon className="h-5 w-5 text-primary" />
                <div>
                  <span className="font-semibold text-sm">{f.title}</span>
                  <span className="text-xs text-muted-foreground ml-2">{f.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl font-black mb-8">Featured Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-2xl border border-border overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <div className={`relative aspect-square bg-gradient-to-br ${product.image} flex items-center justify-center`}>
                  {product.badge && (
                    <span className="absolute top-3 left-3 px-2 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm mb-2">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold">{product.price}</span>
                      {product.oldPrice && (
                        <span className="text-sm text-muted-foreground line-through">{product.oldPrice}</span>
                      )}
                    </div>
                    <Button size="sm" variant="default" className="h-9 w-9 p-0">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}







