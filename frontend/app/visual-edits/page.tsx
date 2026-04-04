"use client";

import { PageLayout } from "@/components/landing/PageLayout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Wand2 } from "lucide-react";

export default function VisualEditsPage() {
  return (
    <PageLayout>
      <section className="py-24">
        <div className="container max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-secondary/10 text-secondary mb-2">
            <Wand2 className="h-6 w-6" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black">Visual edits</h1>
          <p className="text-muted-foreground text-lg">
            A dedicated space for visually tweaking your Afritradehub & Afrify experience – layouts, colors,
            and components – without touching backend logic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg">
              <Link href="/afrify">Start from Afrify</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/tradehub">Start from directory</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

