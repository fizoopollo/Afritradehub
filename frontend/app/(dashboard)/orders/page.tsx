"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { apiGet } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

interface Order {
  id: number;
  status: string;
  total: string;
  created_at: string;
}

interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

const TABS = [
  { key: "", label: "All" },
  { key: "unpaid", label: "Unpaid" },
  { key: "preparing", label: "Preparing" },
  { key: "delivering", label: "Delivering" },
];

export default function OrdersPage() {
  const [tab, setTab] = useState("");

  const { data, isLoading, error } = useQuery({
    queryKey: ["orders", tab],
    queryFn: () => {
      const params = new URLSearchParams();
      if (tab) params.set("status", tab);
      return apiGet<PaginatedResponse<Order>>(`/orders/?${params.toString()}`);
    },
  });

  const orders = data?.results ?? [];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Orders</h1>
        <p className="text-muted-foreground">
          View and manage orders. Use tabs to filter by status.
        </p>
      </div>

      <div
        className="flex gap-1 border-b border-border"
        role="tablist"
        aria-label="Order status"
      >
        {TABS.map((t) => (
          <button
            key={t.key}
            role="tab"
            aria-selected={tab === t.key}
            onClick={() => setTab(t.key)}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-t-md border-b-2 -mb-px transition-colors",
              tab === t.key
                ? "border-primary text-primary bg-primary/5"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" aria-hidden />
        </div>
      )}
      {error && (
        <div className="rounded-md border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
          Failed to load orders.
        </div>
      )}
      {!isLoading && !error && (
        <div className="rounded-lg border border-border overflow-hidden">
          {orders.length === 0 ? (
            <div className="p-12 text-center text-muted-foreground">
              No orders in this tab. Orders will appear here when created.
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {orders.map((o) => (
                <li
                  key={o.id}
                  className="flex items-center justify-between p-4 hover:bg-muted/30"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                      <ShoppingCart className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Order #{o.id}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(o.created_at).toLocaleDateString()} · {o.total}
                      </p>
                    </div>
                  </div>
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-xs font-medium capitalize",
                      o.status === "unpaid" && "bg-yellow-100 text-yellow-800",
                      o.status === "preparing" && "bg-blue-100 text-blue-800",
                      o.status === "delivering" && "bg-green-100 text-green-800"
                    )}
                  >
                    {o.status}
                  </span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Button variant="ghost" size="sm">
                      Fulfill
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
