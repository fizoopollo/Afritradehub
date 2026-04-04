import { Package, Plus, Upload, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminProducts() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm"><Upload className="h-4 w-4 mr-1" /> Import</Button>
          <Button variant="outline" size="sm"><MoreHorizontal className="h-4 w-4" /></Button>
          <Button variant="default" size="sm"><Plus className="h-4 w-4 mr-1" /> Add product</Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-4 border-b border-border">
        {["All", "Active", "Draft", "Archived"].map((tab, i) => (
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
        <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h2 className="text-lg font-semibold mb-2">Add your products</h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto mb-4">
          Start by stocking your store with products your customers will love.
        </p>
        <div className="flex gap-2 justify-center">
          <Button variant="default" size="sm"><Plus className="h-4 w-4 mr-1" /> Add product</Button>
          <Button variant="outline" size="sm"><Upload className="h-4 w-4 mr-1" /> Import</Button>
        </div>
      </div>
    </div>
  );
}
