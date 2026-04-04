"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NewDraftOrderPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild aria-label="Back to draft orders">
          <Link href="/draft-orders">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Create draft order</h1>
          <p className="text-muted-foreground">Add line items and convert to an order later.</p>
        </div>
      </div>
      <div className="rounded-lg border border-border bg-card p-6 max-w-xl">
        <p className="text-sm text-muted-foreground">
          Draft order form (company, line items, notes) will go here. Connect to POST /api/orders/drafts/ when ready.
        </p>
        <Button className="mt-4" disabled>Create draft</Button>
      </div>
    </div>
  );
}
