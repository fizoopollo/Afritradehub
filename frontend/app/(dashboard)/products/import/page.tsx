"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Upload } from "lucide-react";

export default function ImportProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild aria-label="Back to products">
          <Link href="/products">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Import products</h1>
          <p className="text-muted-foreground">Upload a CSV or file to bulk add products.</p>
        </div>
      </div>
      <div className="rounded-lg border border-dashed border-border bg-muted/20 p-12 max-w-xl text-center">
        <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" aria-hidden />
        <p className="text-sm text-muted-foreground mb-4">
          Drag and drop a file here, or click to select. CSV format supported.
        </p>
        <Button variant="outline" disabled>Select file</Button>
      </div>
    </div>
  );
}
