"use client";

import Link from "next/link";
import { HelpCircle } from "lucide-react";

export default function HelpPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Help</h1>
      <p className="text-muted-foreground">Guides and support for Afritradehub & Afrify.</p>
      <div className="rounded-lg border border-border bg-card p-6 max-w-xl">
        <ul className="space-y-2">
          <li>
            <Link href="/help/abandoned-checkouts" className="text-primary hover:underline">
              Recover abandoned checkouts
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
