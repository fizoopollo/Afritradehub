'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function BagsTemplate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100">
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black text-amber-900 mb-6">
              LUXURY BAGS
            </h1>
            <p className="text-xl text-amber-800 mb-8">
              Handcrafted leather bags and accessories for the discerning traveler.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-amber-900 text-white hover:bg-amber-800 font-bold">
                Shop Collection
              </Button>
              <Link href="/admin/online-store/themes">
                <Button size="lg" variant="outline" className="border-amber-900 text-amber-900 hover:bg-amber-50">
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
