import Link from "next/link";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Star, ArrowLeft, Search, Filter } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";

const products = [
  { name: "Ankara Maxi Dress", price: "$45", rating: 4.8, reviews: 124, image: "from-pink-400 to-rose-500", tag: "Bestseller" },
  { name: "Dashiki Print Shirt", price: "$32", rating: 4.6, reviews: 89, image: "from-amber-400 to-orange-500", tag: "New" },
  { name: "Kente Clutch Bag", price: "$28", rating: 4.9, reviews: 203, image: "from-yellow-400 to-amber-500", tag: null },
  { name: "Beaded Necklace Set", price: "$18", rating: 4.7, reviews: 156, image: "from-emerald-400 to-teal-500", tag: "Popular" },
  { name: "Wax Print Headwrap", price: "$15", rating: 4.5, reviews: 67, image: "from-violet-400 to-purple-500", tag: null },
  { name: "Embroidered Kaftan", price: "$55", rating: 4.9, reviews: 312, image: "from-rose-400 to-pink-600", tag: "Premium" },
  { name: "African Print Sneakers", price: "$62", rating: 4.4, reviews: 45, image: "from-blue-400 to-indigo-500", tag: "New" },
  { name: "Cowrie Shell Earrings", price: "$12", rating: 4.8, reviews: 178, image: "from-orange-400 to-red-500", tag: null },
];

const categories = ["All", "Dresses", "Tops", "Accessories", "Bags", "Shoes", "Jewelry"];

export default function FashionTemplate() {
  return (
    <PageLayout>
      <UseTemplateButton templateName="Fashion" />
      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-pink-500 to-rose-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9zdmc+')] opacity-30" />
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-semibold mb-4">
              Fashion Forward Template
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-primary-foreground mb-4">
              African Style,<br />Global Fashion
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Celebrate heritage through contemporary African fashion
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                Shop Collection
              </Button>
              <Link href="/afrify">
                <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                  <ArrowLeft className="h-4 w-4" /> Back to Templates
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories + Products */}
      <section className="py-16">
        <div className="container">
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-card">
              <Search className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Search products...</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === "All"
                    ? "bg-foreground text-background"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
            <button className="ml-auto flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-sm">
              <Filter className="h-4 w-4" /> Filter
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group"
              >
                <div className={`relative aspect-[3/4] rounded-2xl bg-gradient-to-br ${product.image} mb-3 overflow-hidden`}>
                  {product.tag && (
                    <span className="absolute top-3 left-3 px-2 py-1 bg-foreground/80 text-background text-xs font-bold rounded-full">
                      {product.tag}
                    </span>
                  )}
                  <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="h-4 w-4 text-primary-foreground" />
                  </button>
                  <div className="absolute bottom-0 inset-x-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" className="w-full bg-foreground/80 backdrop-blur-sm text-background hover:bg-foreground/90">
                      <ShoppingCart className="h-4 w-4" /> Add to Cart
                    </Button>
                  </div>
                </div>
                <h3 className="font-semibold text-sm">{product.name}</h3>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-bold">{product.price}</span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="h-3 w-3 fill-accent text-accent" />
                    {product.rating} ({product.reviews})
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







