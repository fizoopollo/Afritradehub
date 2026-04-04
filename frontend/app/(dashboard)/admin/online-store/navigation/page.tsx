import { Menu } from "lucide-react";

export default function AdminOnlineStoreNavigation() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Navigation</h1>
      <div className="space-y-4">
        {["Main menu", "Footer menu"].map((menu) => (
          <div key={menu} className="bg-card rounded-xl border border-border p-6">
            <div className="flex items-center gap-3">
              <Menu className="h-5 w-5 text-muted-foreground" />
              <div>
                <h3 className="font-semibold">{menu}</h3>
                <p className="text-sm text-muted-foreground">0 menu items</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
