"use client";

import { useQuery } from "@tanstack/react-query";
import { apiGet } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Plan {
  id: number;
  name: string;
  slug: string;
  price: string;
  currency: string;
  interval: string;
  features: string[];
  is_active: boolean;
}

export default function SubscriptionPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["subscription-plans"],
    queryFn: () => apiGet<{ results: Plan[] }>("/subscriptions/plans/"),
  });
  const plans = data?.results ?? [];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Subscription plans</h1>
        <p className="text-muted-foreground">
          Choose a plan. Upgrade or downgrade anytime.
        </p>
      </div>

      {isLoading && (
        <div className="flex justify-center py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" aria-hidden />
        </div>
      )}
      {plans && plans.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={cn(
                "rounded-lg border p-6 flex flex-col",
                plan.slug === "pro"
                  ? "border-primary bg-primary/5 shadow-md"
                  : "border-border bg-card"
              )}
            >
              <p className="font-semibold text-lg">{plan.name}</p>
              <p className="mt-2 text-2xl font-bold">
                {plan.currency} {plan.price}
                <span className="text-sm font-normal text-muted-foreground">/{plan.interval}</span>
              </p>
              <ul className="mt-4 flex-1 space-y-2">
                {plan.features?.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                className="mt-6"
                variant={plan.slug === "pro" ? "default" : "outline"}
              >
                {plan.slug === "pro" ? "Current plan" : "Upgrade"}
              </Button>
            </div>
          ))}
        </div>
      )}
      {plans && plans.length === 0 && !isLoading && (
        <p className="text-muted-foreground">No plans available. Add plans in the admin.</p>
      )}
    </div>
  );
}
