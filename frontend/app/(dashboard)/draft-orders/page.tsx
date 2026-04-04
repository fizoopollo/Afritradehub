"use client";

import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import Link from "next/link";

export default function DraftOrdersPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Draft Orders</h1>
          <p className="text-muted-foreground">
            Create and manage draft orders before converting to orders.
          </p>
        </div>
        <Button asChild>
          <Link href="/draft-orders/new">Create draft order</Link>
        </Button>
      </div>

      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border bg-muted/20 p-12 text-center">
        <FileText className="h-12 w-12 text-muted-foreground mb-4" aria-hidden />
        <p className="text-muted-foreground mb-2">No draft orders yet</p>
        <p className="text-sm text-muted-foreground max-w-sm mb-4">
          Create a new draft order to add products and send to customers.
        </p>
        <Button asChild>
          <Link href="/draft-orders/new">Create new draft order</Link>
        </Button>
      </div>
    </div>
  );
}
