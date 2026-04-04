import Link from "next/link";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Clock, MapPin, ArrowLeft, Star, Truck } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";

const categories = [
  { name: "Fresh Fruits", emoji: "🍎", count: 24 },
  { name: "Vegetables", emoji: "🥬", count: 38 },
  { name: "Grains & Spices", emoji: "🌾", count: 15 },
  { name: "Dairy & Eggs", emoji: "🥛", count: 12 },
  { name: "Meat & Fish", emoji: "🥩", count: 20 },
  { name: "Beverages", emoji: "🥤", count: 18 },
];

const products = [
  { name: "Organic Plantains", price: "$4.50", unit: "per bunch", image: "from-yellow-300 to-yellow-500", fresh: true },
  { name: "Scotch Bonnet Peppers", price: "$2.00", unit: "per lb", image: "from-red-400 to-orange-500", fresh: true },
  { name: "Basmati Rice 5kg", price: "$12.00", unit: "per bag", image: "from-amber-200 to-amber-400", fresh: false },
  { name: "Palm Oil (1L)", price: "$6.50", unit: "per bottle", image: "from-orange-400 to-red-400", fresh: false },
  { name: "Fresh Tilapia", price: "$8.00", unit: "per kg", image: "from-blue-300 to-cyan-400", fresh: true },
  { name: "Cassava Flour", price: "$5.00", unit: "per 2kg", image: "from-amber-100 to-amber-300", fresh: false },
];

export default function FoodTemplate() {
  return (
    <PageLayout>
      <UseTemplateButton templateName="Food" />
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-emerald-500 to-green-600 overflow-hidden">
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-5xl mb-4 block">🛒</span>
            <h1 className="text-4xl md:text-6xl font-black text-primary-foreground mb-4">
              Fresh Market
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-6">
              Farm-fresh groceries delivered to your door
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm">
                <Truck className="h-4 w-4" /> Free delivery over $25
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm">
                <Clock className="h-4 w-4" /> Same-day delivery
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm">
                <MapPin className="h-4 w-4" /> Lagos, Accra, Nairobi
              </div>
            </div>
            <Link href="/afrify">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                <ArrowLeft className="h-4 w-4" /> Back to Templates
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-black mb-6">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center gap-2 p-5 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all cursor-pointer"
              >
                <span className="text-3xl">{cat.emoji}</span>
                <span className="font-semibold text-sm">{cat.name}</span>
                <span className="text-xs text-muted-foreground">{cat.count} items</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 bg-surface-sunken">
        <div className="container">
          <h2 className="text-2xl font-black mb-6">Popular Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-2xl border border-border overflow-hidden group"
              >
                <div className={`relative aspect-square bg-gradient-to-br ${product.image}`}>
                  {product.fresh && (
                    <span className="absolute top-3 left-3 px-2 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                      Fresh
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{product.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <div>
                      <span className="text-lg font-bold">{product.price}</span>
                      <span className="text-xs text-muted-foreground ml-1">{product.unit}</span>
                    </div>
                    <Button size="sm" variant="outline" className="h-9 w-9 p-0">
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







