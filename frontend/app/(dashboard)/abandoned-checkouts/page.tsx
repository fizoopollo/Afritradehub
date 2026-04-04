"use client";

import { Button } from "@/components/ui/button";
import { CreditCard, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function AbandonedCheckoutsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Abandoned Checkouts</h1>
        <p className="text-muted-foreground">
          Recover customers who didn’t complete checkout.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border bg-muted/20 p-12 text-center">
        <CreditCard className="h-16 w-16 text-muted-foreground mb-4" aria-hidden />
        <p className="text-lg font-medium mb-1">No abandoned checkouts</p>
        <p className="text-sm text-muted-foreground max-w-md mb-6">
          When a customer leaves without completing payment, their cart will appear here so you can follow up with email or incentives.
        </p>
        <Button variant="outline" asChild>
          <Link href="/help/abandoned-checkouts" className="gap-2">
            <HelpCircle className="h-4 w-4" />
            Learn how to recover checkouts
          </Link>
        </Button>
      </div>
    </div>
  );
}
