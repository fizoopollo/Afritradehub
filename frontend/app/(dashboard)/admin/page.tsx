import Link from "next/link";
import { ArrowRight, Package, Palette, CreditCard, Globe, ShoppingCart, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const setupSteps = [
  { icon: Palette, title: "Customize your theme", desc: "Choose and edit a theme to match your brand.", href: "/admin/online-store/themes", done: false },
  { icon: Package, title: "Add your first product", desc: "Write a description, add photos, and set pricing.", href: "/admin/products", done: false },
  { icon: CreditCard, title: "Set up payments", desc: "Choose a provider to accept payments.", href: "/admin/settings", done: false },
  { icon: Globe, title: "Add a custom domain", desc: "Connect your domain or buy a new one.", href: "/admin/settings", done: false },
];

export default function AdminHome() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold mb-1">Welcome to your store 👋</h1>
        <p className="text-muted-foreground">Here's a guide to get started. Follow the steps below to set up your store.</p>
      </div>

      {/* Setup guide */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <h2 className="font-semibold">Setup guide</h2>
          <p className="text-sm text-muted-foreground">Use this personalized guide to get your store up and running.</p>
        </div>
        <div className="divide-y divide-border">
          {setupSteps.map((step) => (
            <Link key={step.title} href={step.href} className="flex items-center gap-4 px-6 py-4 hover:bg-muted/50 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <step.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm">{step.title}</p>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />
            </Link>
          ))}
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: "Total orders", value: "0", icon: ShoppingCart },
          { label: "Total sales", value: "$0.00", icon: CreditCard },
          { label: "Visitors", value: "0", icon: BarChart3 },
        ].map((stat) => (
          <div key={stat.label} className="bg-card rounded-xl border border-border p-5">
            <div className="flex items-center gap-3 mb-3">
              <stat.icon className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
