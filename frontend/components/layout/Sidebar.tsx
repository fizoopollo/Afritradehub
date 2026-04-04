"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useUIStore } from "@/stores/uiStore";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Building2,
  Package,
  FileText,
  ShoppingCart,
  Truck,
  CreditCard,
  MessageSquare,
  User,
  Settings,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  Store,
  Palette,
  BarChart3,
  Globe,
  BookOpen,
  Megaphone,
  Users,
  Tag,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems: { href: string; label: string; icon: React.ElementType; group?: string }[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard, group: "Main" },
  { href: "/admin", label: "Store Admin", icon: Store, group: "Store Management" },
  { href: "/admin/analytics", label: "Analytics", icon: BarChart3, group: "Store Management" },
  { href: "/admin/products", label: "Products", icon: Package, group: "Store Management" },
  { href: "/admin/orders", label: "Orders", icon: ShoppingCart, group: "Store Management" },
  { href: "/admin/customers", label: "Customers", icon: Users, group: "Store Management" },
  { href: "/admin/discounts", label: "Discounts", icon: Tag, group: "Store Management" },
  { href: "/admin/online-store/themes", label: "Themes", icon: Palette, group: "Store Management" },
  { href: "/admin/online-store/pages", label: "Pages", icon: FileText, group: "Store Management" },
  { href: "/admin/online-store/navigation", label: "Navigation", icon: Globe, group: "Store Management" },
  { href: "/admin/blog", label: "Blog", icon: BookOpen, group: "Store Management" },
  { href: "/admin/marketing", label: "Marketing", icon: Megaphone, group: "Store Management" },
  { href: "/admin/settings", label: "Settings", icon: Settings, group: "Store Management" },
  { href: "/companies", label: "Companies", icon: Building2, group: "Main" },
  { href: "/messages", label: "Messages", icon: MessageSquare, group: "Main" },
  { href: "/subscription", label: "Subscription", icon: CreditCard, group: "Main" },
  { href: "/profile", label: "Profile", icon: User, group: "Main" },
];

export function Sidebar() {
  const pathname = usePathname();
  const sidebarOpen = useUIStore((s) => s.sidebarOpen);
  const toggleSidebar = useUIStore((s) => s.toggleSidebar);

  return (
    <aside
      className={cn(
        "flex flex-col border-r border-border bg-card text-card-foreground transition-[width] duration-200 ease-in-out",
        sidebarOpen ? "w-64" : "w-[4.5rem]"
      )}
      aria-label="Main navigation"
    >
      <div className="flex h-14 items-center justify-between border-b border-border px-3">
        <AnimatePresence mode="wait">
          {sidebarOpen ? (
            <motion.div
              key="logo-open"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 overflow-hidden"
            >
              <span className="font-semibold text-primary">Afritradehub</span>
              <span className="text-muted-foreground">/</span>
              <span className="text-sm text-muted-foreground">Afrify</span>
            </motion.div>
          ) : (
            <motion.div
              key="logo-closed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary font-bold"
              aria-hidden
            >
              A
            </motion.div>
          )}
        </AnimatePresence>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
          className="shrink-0"
        >
          {sidebarOpen ? (
            <ChevronLeft className="h-5 w-5" />
          ) : (
            <ChevronRight className="h-5 w-5" />
          )}
        </Button>
      </div>

      <nav className="flex-1 overflow-y-auto py-2 px-2" aria-label="Primary">
        <ul className="space-y-0.5">
          {/* Back to Afritrade Button */}
          <li className="mb-4 pb-4 border-b border-border">
            <Link
              href="/tradehub"
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <ArrowLeft className="h-5 w-5 shrink-0" aria-hidden />
              <AnimatePresence mode="wait">
                {sidebarOpen && (
                  <motion.span
                    key="label"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.15 }}
                    className="overflow-hidden whitespace-nowrap"
                  >
                    Back to Afritrade
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          </li>
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname.startsWith(item.href));
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                    "hover:bg-accent hover:text-accent-foreground",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset",
                    isActive
                      ? "bg-primary/10 text-primary border-l-2 border-primary ml-0 -ml-[2px] pl-[14px]"
                      : "text-muted-foreground"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon
                    className={cn("h-5 w-5 shrink-0", isActive && "text-primary")}
                    aria-hidden
                  />
                  <AnimatePresence mode="wait">
                    {sidebarOpen && (
                      <motion.span
                        key="label"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.15 }}
                        className="overflow-hidden whitespace-nowrap"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
