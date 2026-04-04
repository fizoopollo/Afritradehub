import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminCustomers() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Customers</h1>
        <Button variant="default" size="sm">Add customer</Button>
      </div>
      <div className="bg-card rounded-xl border border-border p-12 text-center">
        <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h2 className="text-lg font-semibold mb-2">Everything customers-related in one place</h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">
          Manage customer details, see customer order history, and group customers into segments.
        </p>
      </div>
    </div>
  );
}
