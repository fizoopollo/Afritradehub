'use client';

import { Eye, MoreHorizontal, Upload, Plus, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Import all template data
import { artTemplates } from '@/lib/templates/artTemplates';
import { beautyTemplates } from '@/lib/templates/beautyTemplates';
import { autoTemplates } from '@/lib/templates/autoTemplates';
import { bagsTemplates } from '@/lib/templates/bagsTemplates';
import { servicesTemplates } from '@/lib/templates/servicesTemplates';
import { electronicsTemplates } from '@/lib/templates/electronicsTemplates';
import { fashionTemplates } from '@/lib/templates/fashionTemplates';
import { foodTemplates } from '@/lib/templates/foodTemplates';
import { handmadeTemplates } from '@/lib/templates/handmadeTemplates';

const currentTheme = {
  name: 'Afrify Premium',
  role: 'Live theme',
  version: '1.0',
  lastSaved: '2 hours ago',
};

type TemplateCategory = {
  name: string;
  templates: Array<{
    slug: string;
    name: string;
    image: string;
    price: string;
    rating: string;
    tag: string;
    gradient: string;
  }>;
  icon: string;
  color: string;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const categories: TemplateCategory[] = [
  {
    name: 'Art Gallery',
    templates: artTemplates.map((t) => ({ ...t, href: `/templates/${t.slug}` })) as any,
    icon: '🎨',
    color: 'from-blue-500 to-purple-600',
  },
  {
    name: 'Beauty & Wellness',
    templates: beautyTemplates.map((t) => ({ ...t, href: `/templates/${t.slug}` })) as any,
    icon: '💄',
    color: 'from-pink-500 to-rose-600',
  },
  {
    name: 'Automotive',
    templates: autoTemplates.map((t) => ({ ...t, href: `/templates/${t.slug}` })) as any,
    icon: '🚗',
    color: 'from-red-500 to-orange-600',
  },
  {
    name: 'Bags & Accessories',
    templates: bagsTemplates.map((t) => ({ ...t, href: `/templates/${t.slug}` })) as any,
    icon: '👜',
    color: 'from-amber-500 to-orange-600',
  },
  {
    name: 'Services',
    templates: servicesTemplates.map((t) => ({ ...t, href: `/templates/${t.slug}` })) as any,
    icon: '🔧',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'Electronics',
    templates: electronicsTemplates.map((t) => ({ ...t, href: `/templates/${t.slug}` })) as any,
    icon: '💻',
    color: 'from-slate-600 to-slate-800',
  },
  {
    name: 'Fashion',
    templates: fashionTemplates.map((t) => ({ ...t, href: `/templates/${t.slug}` })) as any,
    icon: '👗',
    color: 'from-fuchsia-500 to-pink-600',
  },
  {
    name: 'Food & Beverage',
    templates: foodTemplates.map((t) => ({ ...t, href: `/templates/${t.slug}` })) as any,
    icon: '🍽️',
    color: 'from-amber-600 to-red-600',
  },
  {
    name: 'Handmade & Crafts',
    templates: handmadeTemplates.map((t) => ({ ...t, href: `/templates/${t.slug}` })) as any,
    icon: '🎁',
    color: 'from-purple-500 to-pink-600',
  },
];

const totalTemplates = categories.reduce((sum, cat) => sum + cat.templates.length, 0);

export default function AdminOnlineStoreThemes() {
  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* Header */}
        <motion.div variants={cardVariants} className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-2">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-4xl font-bold">Theme Library</h1>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="text-2xl"
                >
                  ✨
                </motion.div>
              </div>
              <p className="text-lg text-muted-foreground">
                Browse and select from {totalTemplates}+ professionally designed templates for your store
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Upload className="h-4 w-4 mr-1" /> Upload
              </Button>
              <Button variant="default" size="sm">
                <Plus className="h-4 w-4 mr-1" /> Create New
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Current Theme Section */}
        <motion.div variants={cardVariants} className="mb-16">
          <h2 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-4">
            Active Theme
          </h2>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl border border-white/20 overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-96 bg-white/10 flex-shrink-0 p-8 flex items-center justify-center text-white">
              <div className="text-center">
                <Sparkles className="h-16 w-16 mx-auto mb-4 opacity-60" />
                <p className="text-sm opacity-80">Current Theme Preview</p>
              </div>
            </div>
            <div className="flex-1 p-8 text-white">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-2xl font-bold">{currentTheme.name}</h3>
                  <p className="text-sm opacity-90">{currentTheme.role}</p>
                </div>
                <span className="px-3 py-1 bg-white/20 backdrop-blur text-xs font-semibold rounded-full">
                  v{currentTheme.version}
                </span>
              </div>
              <p className="text-sm opacity-80 mb-6">Last saved: {currentTheme.lastSaved}</p>
              <div className="flex gap-3">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                  Customize Theme
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Eye className="h-4 w-4 mr-1" /> Preview
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Template Categories */}
        <motion.div variants={containerVariants} className="space-y-20">
          {categories.map((category, categoryIdx) => (
            <motion.div key={category.name} variants={cardVariants}>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className={`bg-gradient-to-br ${category.color} px-4 py-2 rounded-lg text-white font-bold text-xl`}>
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{category.name}</h2>
                  <p className="text-sm text-muted-foreground">{category.templates.length} templates available</p>
                </div>
              </div>

              {/* Template Grid */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {category.templates.map((template: any, idx: number) => (
                  <motion.div key={template.slug} variants={cardVariants}>
                    <Link href={`/templates/${template.slug}`} className="group h-full">
                      <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col group-hover:-translate-y-1">
                        {/* Template Image */}
                        <div
                          className="relative w-full h-40 overflow-hidden bg-muted group-hover:scale-110 transition-transform duration-300"
                          style={{ background: template.gradient }}
                        >
                          {template.image && (
                            <img
                              src={template.image}
                              alt={template.name}
                              onError={(e) => {
                                (e.target as any).style.display = 'none';
                              }}
                              className="w-full h-full object-cover"
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />

                          {/* Tag */}
                          {template.tag && (
                            <motion.span
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              className="absolute top-2 right-2 px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold rounded-full"
                            >
                              {template.tag}
                            </motion.span>
                          )}
                        </div>

                        {/* Template Info */}
                        <div className="flex-1 p-4 flex flex-col">
                          <h3 className="font-bold text-base mb-1 line-clamp-1">{template.name}</h3>

                          {/* Rating */}
                          <div className="flex items-center gap-1 mb-3">
                            <div className="flex gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-yellow-400">
                                  ★
                                </span>
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground">{template.rating}</span>
                          </div>

                          {/* Price */}
                          <div className="flex-1" />
                          <div className="mb-3">
                            <p className="text-sm text-muted-foreground">Starting at</p>
                            <p className="text-lg font-bold text-blue-600">{template.price}</p>
                          </div>

                          {/* CTA Button */}
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold text-sm hover:from-blue-600 hover:to-blue-700 transition-all"
                          >
                            Use Template
                          </motion.button>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div variants={cardVariants} className="mt-20 text-center py-12 border-t border-border">
          <h3 className="text-2xl font-bold mb-3">Ready to get started?</h3>
          <p className="text-muted-foreground mb-6">
            Choose a template and customize it to match your brand identity
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              Browse All Templates
            </Button>
            <Button size="lg" variant="outline">
              View Documentation
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
