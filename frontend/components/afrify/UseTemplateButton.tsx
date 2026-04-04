import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export default function UseTemplateButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.4 }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-6 sm:bottom-6 z-50"
    >
      <Link to="/signup">
        <Button size="default" className="rounded-full shadow-xl px-5 sm:px-6 font-bold gap-2 sm:text-base text-sm">
          <Rocket className="h-4 w-4 sm:h-5 sm:w-5" /> Use This Template
        </Button>
      </Link>
    </motion.div>
  );
}
