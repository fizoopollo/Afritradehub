import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminOrders() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Orders</h1>
        <Button variant="default" size="sm">Create order</Button>
      </div>
      <div className="bg-card rounded-xl border border-border p-12 text-center">
        <ShoppingCart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h2 className="text-lg font-semibold mb-2">Your orders will show here</h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">
          To get orders, you'll need to set up your store and start selling. This is where you'll manage and fulfill orders from customers.
        </p>
      </div>
    </div>
  );
}
