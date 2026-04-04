"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NewProductPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild aria-label="Back to products">
          <Link href="/products">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Add product</h1>
          <p className="text-muted-foreground">Create a new product listing.</p>
        </div>
      </div>
      <div className="rounded-lg border border-border bg-card p-6 max-w-xl">
        <p className="text-sm text-muted-foreground">
          Product form (name, price, quantity, availability, color, etc.) will go here. Connect to POST /api/products/ when ready.
        </p>
        <Button className="mt-4" disabled>Save product</Button>
      </div>
    </div>
  );
}
