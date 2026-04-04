'use client';

import { ArrowLeft, Eye, Download, Heart, Share2, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

// Import all template types and getters
import { getArtTemplateBySlug } from '@/lib/templates/artTemplates';
import { getBeautyTemplateBySlug } from '@/lib/templates/beautyTemplates';
import { getAutoTemplateBySlug } from '@/lib/templates/autoTemplates';
import { getBagsTemplateBySlug } from '@/lib/templates/bagsTemplates';
import { getServicesTemplateBySlug } from '@/lib/templates/servicesTemplates';
import { getElectronicsTemplateBySlug } from '@/lib/templates/electronicsTemplates';
import { getFashionTemplateBySlug } from '@/lib/templates/fashionTemplates';
import { getFoodTemplateBySlug } from '@/lib/templates/foodTemplates';
import { getHandmadeTemplateBySlug } from '@/lib/templates/handmadeTemplates';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ThemeDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [isLiked, setIsLiked] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  // Try to find the template in all template sources
  const template =
    getArtTemplateBySlug(slug) ||
    getBeautyTemplateBySlug(slug) ||
    getAutoTemplateBySlug(slug) ||
    getBagsTemplateBySlug(slug) ||
    getServicesTemplateBySlug(slug) ||
    getElectronicsTemplateBySlug(slug) ||
    getFashionTemplateBySlug(slug) ||
    getFoodTemplateBySlug(slug) ||
    getHandmadeTemplateBySlug(slug);

  if (!template) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Theme not found</h1>
          <p className="text-muted-foreground mb-8">We couldn't find the template you're looking for.</p>
          <Link href="/admin/online-store/themes">
            <Button size="lg">Back to themes</Button>
          </Link>
        </div>
      </motion.div>
    );
  }

  const hasServices = 'services' in template;
  const items = hasServices ? (template as any).services : (template as any).products;
  const itemsLabel = hasServices ? 'Services' : 'Products';

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20"
    >
      {/* Hero Section with Gradient Background */}
      <motion.div
        variants={itemVariants}
        className="relative w-full overflow-hidden"
        style={{
          background: template.gradient,
        }}
      >
        <div className="absolute inset-0 opacity-10 bg-pattern" />
        
        {/* Header */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <Link
              href="/admin/online-store/themes"
              className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to themes
            </Link>
            <div className="flex gap-3">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsLiked(!isLiked)}
                  className={`${isLiked ? 'bg-red-100 text-red-700 border-red-200' : 'bg-white/10 text-white border-white/20'} backdrop-blur-sm`}
                >
                  <Heart className={`h-4 w-4 mr-1 ${isLiked ? 'fill-current' : ''}`} />
                  {isLiked ? 'Liked' : 'Like'}
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="sm" className="bg-white/10 text-white border-white/20 backdrop-blur-sm hover:bg-white/20">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="default" size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                  <Download className="h-4 w-4 mr-1" />
                  Use Template
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <motion.div
          variants={itemVariants}
          className="relative max-w-7xl mx-auto px-6 py-12"
        >
          <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={template.image}
              alt={template.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Area */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-12">
            {/* Header */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-4xl md:text-5xl font-bold">{template.name}</h1>
                {template.tag && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  >
                    {template.tag}
                  </motion.span>
                )}
              </div>
              <p className="text-xl text-muted-foreground mb-4">{template.tagline}</p>
              <p className="text-base leading-relaxed text-foreground/80">{template.description}</p>
            </div>

            {/* Items/Services/Products Grid */}
            <motion.div variants={containerVariants}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">{itemsLabel}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map((item: any, idx: number) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    onMouseEnter={() => setHoveredItem(idx)}
                    onMouseLeave={() => setHoveredItem(null)}
                    whileHover={{ y: -4 }}
                    className="group relative bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg overflow-hidden"
                  >
                    {/* Gradient Background */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br from-blue-500 to-purple-500 transition-opacity" />

                    <div className="relative z-10">
                      <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{item.desc}</p>
                      <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">{item.price}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Testimonials */}
            <motion.div variants={containerVariants}>
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold">Testimonials</h2>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {template.testimonials.map((testimonial, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="bg-card border border-border rounded-xl p-6 relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-300" />
                    
                    <div className="relative z-10">
                      <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <div className="flex gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Sidebar */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Price Card */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl"
              >
                <p className="text-sm opacity-90 mb-2">Starting Price</p>
                <p className="text-4xl font-bold mb-6">{template.price}</p>

                <div className="mb-6 pb-6 border-b border-white/20">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-semibold">{template.rating}</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-300 text-yellow-300" />
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold mb-3">
                    Use This Template
                  </Button>
                </motion.div>
                <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                  Preview Live Demo
                </Button>
              </motion.div>

              {/* Stats Card */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-card border border-border rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-4">Why Choose This Template</h3>
                <div className="space-y-4">
                  {template.stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                    >
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-lg font-bold text-blue-600 dark:text-blue-400">{stat.value}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Feature List */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-card border border-border rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-4">Template Includes</h3>
                <ul className="space-y-3">
                  {[
                    '✨ Professional Design',
                    '📱 Mobile Responsive',
                    '⚡ Fast Performance',
                    '🎨 Customizable',
                    '🔧 Easy Setup',
                    '💬 Support Included',
                  ].map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="text-sm text-foreground/80 flex items-center gap-2"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
