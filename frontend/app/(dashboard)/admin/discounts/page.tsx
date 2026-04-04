import { Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminDiscounts() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Discounts</h1>
        <Button variant="default" size="sm">Create discount</Button>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-4 border-b border-border">
        {["All", "Product", "Order", "Shipping"].map((tab, i) => (
          <button
            key={tab}
            className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
              i === 0 ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="bg-card rounded-xl border border-border p-12 text-center">
        <Tag className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h2 className="text-lg font-semibold mb-2">Manage discounts and promotions</h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">
          Create discount codes and automatic discounts to promote your products.
        </p>
      </div>
    </div>
  );
}
