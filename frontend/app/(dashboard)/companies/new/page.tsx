"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NewCompanyPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild aria-label="Back to companies">
          <Link href="/companies">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Add company</h1>
          <p className="text-muted-foreground">Create a new company profile.</p>
        </div>
      </div>
      <div className="rounded-lg border border-border bg-card p-6 max-w-xl">
        <p className="text-sm text-muted-foreground">
          Company form will go here (name, description, country, verification, etc.). Connect to POST /api/companies/ when ready.
        </p>
        <Button className="mt-4" disabled>Save company</Button>
      </div>
    </div>
  );
}
