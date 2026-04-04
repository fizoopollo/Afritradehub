"use client";

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function EditCompanyPage() {
  const params = useParams();
  const slug = params.slug as string;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild aria-label="Back to companies">
          <Link href="/companies">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Edit company</h1>
          <p className="text-muted-foreground">{slug ? `Editing: ${slug}` : "Company profile"}</p>
        </div>
      </div>
      <div className="rounded-lg border border-border bg-card p-6 max-w-xl">
        <p className="text-sm text-muted-foreground">
          Edit form will load company via GET /api/companies/{slug}/ and submit with PATCH. Connect when ready.
        </p>
        <Button className="mt-4" disabled>Save changes</Button>
      </div>
    </div>
  );
}
