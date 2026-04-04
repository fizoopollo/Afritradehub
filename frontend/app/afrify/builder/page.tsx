"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/landing/PageLayout";
import {
  LayoutGrid,
  Palette,
  Smartphone,
  ShoppingCart,
  CreditCard,
  BarChart3,
  ArrowRight,
  X,
  ArrowLeft,
} from "lucide-react";

const templates = [
  { id: 1, name: "Fashion Forward", category: "Fashion", color: "from-pink-500 to-rose-500", icon: "👗" },
  { id: 2, name: "Fresh Market", category: "Food & Grocery", color: "from-emerald-500 to-green-500", icon: "🍎" },
  { id: 3, name: "TechStore Pro", category: "Electronics", color: "from-blue-500 to-indigo-500", icon: "💻" },
  { id: 4, name: "Artisan Crafts", category: "Handmade", color: "from-amber-500 to-orange-500", icon: "🎨" },
  { id: 5, name: "Service Hub", category: "Services", color: "from-violet-500 to-purple-500", icon: "🔧" },
  { id: 6, name: "Beauty Glow", category: "Beauty", color: "from-rose-400 to-pink-500", icon: "💄" },
  { id: 7, name: "Book Haven", category: "Books & Education", color: "from-cyan-500 to-blue-500", icon: "📚" },
  { id: 8, name: "Sports Pro", category: "Sports & Fitness", color: "from-red-500 to-orange-500", icon: "⚽" },
  { id: 9, name: "Home & Garden", category: "Home Decor", color: "from-lime-500 to-green-500", icon: "🏡" },
  { id: 10, name: "Jewelry Sparkle", category: "Jewelry", color: "from-yellow-400 to-amber-400", icon: "💎" },
  { id: 11, name: "Auto Parts Hub", category: "Automotive", color: "from-slate-600 to-gray-700", icon: "🚗" },
  { id: 12, name: "Pet Paradise", category: "Pet Supplies", color: "from-orange-400 to-red-400", icon: "🐾" },
  { id: 13, name: "Health & Wellness", category: "Health", color: "from-green-500 to-emerald-600", icon: "⚕️" },
  { id: 14, name: "Gaming Zone", category: "Gaming", color: "from-purple-600 to-pink-500", icon: "🎮" },
  { id: 15, name: "Vintage Vibes", category: "Vintage", color: "from-amber-700 to-yellow-600", icon: "🕰️" },
  { id: 16, name: "Luxury Store", category: "Premium", color: "from-purple-500 to-indigo-600", icon: "👑" },
  { id: 17, name: "Organic Living", category: "Eco", color: "from-green-400 to-teal-500", icon: "🌱" },
  { id: 18, name: "Music Shop", category: "Music", color: "from-pink-400 to-purple-500", icon: "🎵" },
  { id: 19, name: "Kids Store", category: "Children", color: "from-yellow-300 to-pink-300", icon: "🧸" },
  { id: 20, name: "Travel Deals", category: "Travel", color: "from-blue-400 to-cyan-500", icon: "✈️" },
];

export default function StoreBuilderPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<(typeof templates)[0] | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleSelectTemplate = (template: (typeof templates)[0]) => {
    setSelectedTemplate(template);
    setShowPreview(true);
  };

  const handleStartBuilding = () => {
    if (selectedTemplate) {
      // Here you would typically save the user's template choice and redirect to the actual editor
      window.location.href = `/afrify/editor?template=${selectedTemplate.id}`;
    }
  };

  return (
    <PageLayout>
      <Link href="/afrify" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-secondary transition-colors px-4 py-2 rounded-lg bg-muted/50 hover:bg-muted border border-border mb-8">
        <ArrowLeft className="h-4 w-4" />
        Back to Afrify
      </Link>
      
      <section className="py-16 md:py-24">
        <div className="container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl md:text-5xl font-black mb-4">
              Choose Your <span className="text-gradient-orange">Store Template</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pick one of our 20+ professionally designed templates. Customize it later to match your unique brand.
            </p>
          </motion.div>

          {/* Templates Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {templates.map((template, i) => (
              <motion.button
                key={template.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleSelectTemplate(template)}
                className={`group relative rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                  selectedTemplate?.id === template.id
                    ? "border-secondary shadow-glow-orange"
                    : "border-border hover:border-secondary/50"
                }`}
              >
                {/* Template Preview */}
                <div
                  className={`h-40 bg-gradient-to-br ${template.color} flex flex-col items-center justify-center text-white relative overflow-hidden`}
                >
                  <div className="text-6xl mb-2">{template.icon}</div>
                  {selectedTemplate?.id === template.id && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="bg-secondary text-secondary-foreground rounded-full p-2">
                        <ArrowRight className="h-6 w-6" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Template Info */}
                <div className="p-4 bg-card">
                  <h3 className="font-bold text-left">{template.name}</h3>
                  <p className="text-sm text-muted-foreground text-left">{template.category}</p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              disabled={!selectedTemplate}
              onClick={handleStartBuilding}
            >
              Start Building <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            {selectedTemplate && (
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  setShowPreview(true);
                }}
              >
                <Smartphone className="h-5 w-5 mr-2" />
                Preview Template
              </Button>
            )}
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20"
          >
            <h2 className="text-2xl font-black text-center mb-10">What's Included</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-bold mb-2">Fully Customizable</h3>
                <p className="text-sm text-muted-foreground">Edit colors, fonts, layouts, and more</p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-bold mb-2">Add Products</h3>
                <p className="text-sm text-muted-foreground">Upload unlimited products with images and pricing</p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-bold mb-2">Accept Payments</h3>
                <p className="text-sm text-muted-foreground">Mobile money, cards, and bank transfers</p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-bold mb-2">Track Sales</h3>
                <p className="text-sm text-muted-foreground">Real-time analytics and order management</p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <LayoutGrid className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-bold mb-2">Mobile Ready</h3>
                <p className="text-sm text-muted-foreground">Your store looks perfect on any device</p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-bold mb-2">Instant Launch</h3>
                <p className="text-sm text-muted-foreground">Go live and start selling immediately</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Template Preview Modal */}
      {showPreview && selectedTemplate && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-card rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowPreview(false)}
              className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-muted-foreground/20 flex items-center justify-center hover:bg-muted-foreground/30 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Preview Content */}
            <div className="p-8">
              <div className="text-center mb-8">
                <div className="text-8xl mb-4">{selectedTemplate.icon}</div>
                <h2 className="text-3xl font-black mb-2">{selectedTemplate.name}</h2>
                <p className="text-muted-foreground">{selectedTemplate.category}</p>
              </div>

              {/* Mock Store Preview */}
              <div
                className={`h-96 bg-gradient-to-br ${selectedTemplate.color} rounded-xl mb-8 flex items-center justify-center text-white/50`}
              >
                <div className="text-center">
                  <Smartphone className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg opacity-75">Store Preview</p>
                </div>
              </div>

              {/* Features List */}
              <div className="mb-8">
                <h3 className="font-bold mb-4">Template Features:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-secondary" />
                    Modern, professional design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-secondary" />
                    Mobile-optimized layout
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-secondary" />
                    Product showcase sections
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-secondary" />
                    Customer testimonials area
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-secondary" />
                    Contact & inquiry forms
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={handleStartBuilding} size="lg" className="flex-1">
                  Start Building <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button
                  onClick={() => setShowPreview(false)}
                  variant="outline"
                  size="lg"
                  className="flex-1"
                >
                  Choose Different
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </PageLayout>
  );
}
