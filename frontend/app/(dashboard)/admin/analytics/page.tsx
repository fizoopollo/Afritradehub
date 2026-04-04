import { BarChart3, TrendingUp, Eye, ShoppingCart, DollarSign } from "lucide-react";

const metrics = [
  { label: "Total sales", value: "$0.00", change: "+0%", icon: DollarSign },
  { label: "Online store sessions", value: "0", change: "+0%", icon: Eye },
  { label: "Returning customer rate", value: "0%", change: "+0%", icon: TrendingUp },
  { label: "Conversion rate", value: "0%", change: "+0%", icon: ShoppingCart },
];

export default function AdminAnalytics() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Analytics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {metrics.map((m) => (
          <div key={m.label} className="bg-card rounded-xl border border-border p-5">
            <div className="flex items-center gap-2 mb-3">
              <m.icon className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{m.label}</span>
            </div>
            <div className="flex items-end gap-2">
              <span className="text-2xl font-bold">{m.value}</span>
              <span className="text-xs text-muted-foreground mb-1">{m.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-card rounded-xl border border-border p-8 text-center">
        <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h2 className="text-lg font-semibold mb-2">No data to show yet</h2>
        <p className="text-muted-foreground text-sm">Your analytics will appear here once your store starts getting traffic and sales.</p>
      </div>
    </div>
  );
}
