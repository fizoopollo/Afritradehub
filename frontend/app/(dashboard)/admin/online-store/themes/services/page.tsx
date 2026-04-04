'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function ServicesTemplate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100">
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black text-teal-900 mb-6">
              PROFESSIONAL SERVICES
            </h1>
            <p className="text-xl text-teal-800 mb-8">
              Tailored service solutions for businesses and individuals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-teal-900 text-white hover:bg-teal-800 font-bold">
                Explore Services
              </Button>
              <Link href="/admin/online-store/themes">
                <Button size="lg" variant="outline" className="border-teal-900 text-teal-900 hover:bg-teal-50">
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
