'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Sparkles, ShoppingCart, Heart } from "lucide-react";

const products = [
  { name: "Shea Butter Moisturizer", price: "$18", rating: 4.9, tag: "Organic" },
  { name: "African Black Soap", price: "$8", rating: 4.8, tag: "Bestseller" },
  { name: "Argan Oil Hair Serum", price: "$22", rating: 4.7, tag: null },
  { name: "Cocoa Butter Lip Balm", price: "$6", rating: 4.6, tag: null },
  { name: "Baobab Face Mask", price: "$15", rating: 4.9, tag: "New" },
  { name: "Marula Oil Blend", price: "$28", rating: 4.8, tag: "Premium" },
  { name: "Hibiscus Hair Rinse", price: "$12", rating: 4.5, tag: null },
  { name: "Turmeric Glow Serum", price: "$20", rating: 4.7, tag: "Trending" },
];

export default function BeautyTemplate() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-rose-400 to-pink-600 overflow-hidden">
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Sparkles className="h-10 w-10 text-white mx-auto mb-4" />
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              Beauty Glow
            </h1>
            <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
              Natural African beauty products for radiant skin & hair
            </p>
            <Link href="/admin/online-store/themes">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                <ArrowLeft className="h-4 w-4" /> Back to Templates
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl font-black mb-8">Our Collection</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group"
              >
                <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-amber-200 to-amber-400 mb-3">
                  {product.tag && (
                    <span className="absolute top-3 left-3 px-2 py-1 bg-black/80 text-white text-xs font-bold rounded-full">
                      {product.tag}
                    </span>
                  )}
                  <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="h-4 w-4 text-white" />
                  </button>
                </div>
                <h3 className="font-semibold text-sm">{product.name}</h3>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs text-gray-600">{product.rating}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-bold">{product.price}</span>
                  <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                    <ShoppingCart className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
