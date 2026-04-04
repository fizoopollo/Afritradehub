"use client";

import { Button } from "@/components/ui/button";
import { BarChart3, Building2, Package, ShoppingCart, ArrowRight } from "lucide-react";
import Link from "next/link";

const shortcuts = [
  { href: "/companies", label: "Companies", icon: Building2 },
  { href: "/products", label: "Products", icon: Package },
  { href: "/orders", label: "Orders", icon: ShoppingCart },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your platform activity and shortcuts.
        </p>
      </div>

      {/* Analytics cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Total Companies", value: "—", desc: "Verified businesses" },
          { title: "Total Products", value: "—", desc: "Listed items" },
          { title: "Orders (30d)", value: "—", desc: "Recent orders" },
          { title: "Revenue", value: "—", desc: "This month" },
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-lg border border-border bg-card p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <BarChart3 className="h-4 w-4" />
              <span className="text-sm font-medium">{card.title}</span>
            </div>
            <p className="mt-2 text-2xl font-bold">{card.value}</p>
            <p className="text-xs text-muted-foreground">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Shortcut buttons */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Shortcuts</h2>
        <div className="flex flex-wrap gap-3">
          {shortcuts.map((s) => {
            const Icon = s.icon;
            return (
              <Button key={s.href} variant="outline" asChild>
                <Link href={s.href} className="gap-2">
                  <Icon className="h-4 w-4" />
                  {s.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            );
          })}
        </div>
      </div>

      {/* Recent activity placeholder */}
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="text-lg font-semibold mb-4">Recent activity</h2>
        <p className="text-sm text-muted-foreground">
          No recent activity. Data will appear when you have companies, orders, and products.
        </p>
      </div>
    </div>
  );
}
