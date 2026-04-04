"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function HelpAbandonedCheckoutsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild aria-label="Back to abandoned checkouts">
          <Link href="/abandoned-checkouts">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Recover abandoned checkouts</h1>
          <p className="text-muted-foreground">How to use the abandoned checkouts feature.</p>
        </div>
      </div>
      <div className="rounded-lg border border-border bg-card p-6 max-w-2xl prose prose-sm dark:prose-invert">
        <p>
          When a customer adds items to their cart but doesn’t complete payment, their session appears under <strong>Abandoned Checkouts</strong>.
        </p>
        <p>
          You can send a follow-up email, offer a discount, or remind them to complete the order. Recovering even a small share of abandoned carts can improve revenue.
        </p>
        <p className="text-muted-foreground">
          Connect your email or automation tool to send recovery emails when new abandoned checkouts appear.
        </p>
      </div>
    </div>
  );
}
