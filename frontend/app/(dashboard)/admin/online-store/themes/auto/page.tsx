'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function AutoTemplate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-800">
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              AUTOMOTIVE GEAR
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Premium motorcycle and automotive apparel designed for style and safety.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-white/90 font-bold">
                Shop Collection
              </Button>
              <Link href="/admin/online-store/themes">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <ArrowLeft className="h-4 w-4 mr-2" /> Back
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
