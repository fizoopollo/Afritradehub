import Link from "next/link";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, ArrowLeft, Star } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";

const products = [
  { name: "Hand-Woven Basket", price: "$35", artisan: "Amara K.", image: "from-amber-400 to-orange-500", material: "Sisal & Raffia" },
  { name: "Carved Wooden Mask", price: "$85", artisan: "Kwame O.", image: "from-amber-700 to-amber-900", material: "Mahogany" },
  { name: "Beaded Wall Art", price: "$120", artisan: "Fatima B.", image: "from-red-400 to-rose-600", material: "Glass Beads" },
  { name: "Clay Serving Bowl", price: "$42", artisan: "Nala M.", image: "from-orange-300 to-amber-500", material: "Terracotta" },
  { name: "Leather Journal", price: "$28", artisan: "Sekou D.", image: "from-amber-600 to-amber-800", material: "Cowhide Leather" },
  { name: "Batik Table Runner", price: "$38", artisan: "Ayo T.", image: "from-indigo-400 to-blue-600", material: "Cotton & Wax" },
];

export default function HandmadeTemplate() {
  return (
    <PageLayout>
      <UseTemplateButton templateName="Handmade" />
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-amber-500 to-orange-600 overflow-hidden">
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-5xl mb-4 block">🎨</span>
            <h1 className="text-4xl md:text-6xl font-black text-primary-foreground mb-4">
              Artisan Crafts
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Handcrafted treasures from Africa's finest artisans
            </p>
            <Link href="/afrify">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                <ArrowLeft className="h-4 w-4" /> Back to Templates
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl font-black mb-2">Featured Creations</h2>
          <p className="text-muted-foreground mb-8">Each piece tells a story</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-2xl border border-border overflow-hidden group"
              >
                <div className={`relative aspect-[4/3] bg-gradient-to-br ${product.image}`}>
                  <button className="absolute top-3 right-3 h-9 w-9 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="h-4 w-4 text-primary-foreground" />
                  </button>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{product.material}</span>
                  </div>
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">by {product.artisan}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black">{product.price}</span>
                    <Button size="sm">
                      <ShoppingCart className="h-4 w-4" /> Add to Cart
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







