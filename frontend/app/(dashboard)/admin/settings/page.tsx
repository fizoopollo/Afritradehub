import Link from "next/link";
import {
  Store, CreditCard, Truck, Users, Bell, Globe, Shield,
  FileText, Package, Palette, ArrowRight
} from "lucide-react";

const settingsSections = [
  { icon: Store, title: "Store details", desc: "Manage your store name, address, and contact information.", href: "/admin/settings" },
  { icon: CreditCard, title: "Payments", desc: "Enable and manage your store's payment providers.", href: "/admin/settings" },
  { icon: Truck, title: "Shipping and delivery", desc: "Manage how you ship orders to customers.", href: "/admin/settings" },
  { icon: Users, title: "Customer accounts", desc: "Manage how customers log in to your store.", href: "/admin/settings" },
  { icon: Bell, title: "Notifications", desc: "Manage notifications sent to you and your customers.", href: "/admin/settings" },
  { icon: Globe, title: "Languages", desc: "Manage the languages your store supports.", href: "/admin/settings" },
  { icon: Shield, title: "Policies", desc: "Manage your store's legal policies.", href: "/admin/settings" },
  { icon: FileText, title: "Billing", desc: "Manage your subscription and billing information.", href: "/admin/settings" },
  { icon: Package, title: "Locations", desc: "Manage the places you stock inventory and fulfill orders.", href: "/admin/settings" },
  { icon: Palette, title: "Brand", desc: "Manage your store's brand assets.", href: "/admin/settings" },
];

export default function AdminSettings() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <div className="bg-card rounded-xl border border-border divide-y divide-border overflow-hidden">
        {settingsSections.map((s) => (
          <Link key={s.title} href={s.href} className="flex items-center gap-4 px-6 py-4 hover:bg-muted/50 transition-colors">
            <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
              <s.icon className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm">{s.title}</p>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );
}
