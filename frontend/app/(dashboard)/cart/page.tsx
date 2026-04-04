"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function CartPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Cart</h1>
        <p className="text-muted-foreground">Items you’ve added for checkout.</p>
      </div>
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border bg-muted/20 p-12 text-center">
        <ShoppingCart className="h-12 w-12 text-muted-foreground mb-4" aria-hidden />
        <p className="text-muted-foreground mb-4">Your cart is empty.</p>
        <Button asChild>
          <Link href="/products">Browse products</Link>
        </Button>
      </div>
    </div>
  );
}
