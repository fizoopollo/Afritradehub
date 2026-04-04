import { Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminMarketing() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Marketing</h1>
        <Button variant="default" size="sm">Create campaign</Button>
      </div>
      <div className="bg-card rounded-xl border border-border p-12 text-center">
        <Megaphone className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h2 className="text-lg font-semibold mb-2">Grow your business with marketing</h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">
          Create marketing campaigns and automations to reach your customers and drive sales.
        </p>
      </div>
    </div>
  );
}
