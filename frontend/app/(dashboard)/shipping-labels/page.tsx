"use client";

import { Button } from "@/components/ui/button";
import { Truck, Calculator } from "lucide-react";

export default function ShippingLabelsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Shipping Labels</h1>
        <p className="text-muted-foreground">
          View shipping info and calculate rates.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <Truck className="h-4 w-4" />
            <span className="text-sm font-medium">Carrier info</span>
          </div>
          <p className="text-sm">
            Connect a carrier to generate labels and track shipments. Labels will appear here once orders are fulfilled.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <Calculator className="h-4 w-4" />
            <span className="text-sm font-medium">Rate calculator</span>
          </div>
          <p className="text-sm mb-4">
            Get shipping rates by destination and weight.
          </p>
          <Button className="gap-2">
            <Calculator className="h-4 w-4" />
            Calculate rate
          </Button>
        </div>
      </div>

      <div className="rounded-lg border border-primary/20 bg-primary/5 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="font-medium">Need help with shipping?</p>
          <p className="text-sm text-muted-foreground">
            See our shipping guide or contact support for integration help.
          </p>
        </div>
        <Button variant="outline">View shipping guide</Button>
      </div>
    </div>
  );
}
