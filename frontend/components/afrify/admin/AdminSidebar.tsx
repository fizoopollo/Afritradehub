import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home, ShoppingCart, Package, Users, FileText, BarChart3,
  Megaphone, Tag, Store, Settings, ChevronDown, ChevronRight,
  Search, Globe, PanelLeftClose, PanelLeft
} from "lucide-react";
import { cn } from "@/lib/utils";

const mainNav = [
  { label: "Home", href: "/admin", icon: Home },
  { label: "Orders", href: "/admin/orders", icon: ShoppingCart },
  { label: "Products", href: "/admin/products", icon: Package },
  { label: "Customers", href: "/admin/customers", icon: Users },
  { label: "Content", href: "/admin/content", icon: FileText },
  { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { label: "Marketing", href: "/admin/marketing", icon: Megaphone },
  { label: "Discounts", href: "/admin/discounts", icon: Tag },
];

const onlineStoreSubNav = [
  { label: "Themes", href: "/admin/online-store/themes" },
  { label: "Blog posts", href: "/admin/online-store/blog" },
  { label: "Pages", href: "/admin/online-store/pages" },
  { label: "Navigation", href: "/admin/online-store/navigation" },
  { label: "Preferences", href: "/admin/online-store/preferences" },
];

interface AdminSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export default function AdminSidebar({ collapsed, onToggle }: AdminSidebarProps) {
  const pathname = usePathname();
  const [storeOpen, setStoreOpen] = useState(
    pathname.startsWith("/admin/online-store")
  );

  const isActive = (href: string) =>
    href === "/admin"
      ? pathname === "/admin"
      : pathname.startsWith(href);

  const linkClass = (href: string) =>
    cn(
      "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
      isActive(href)
        ? "bg-[hsl(var(--admin-sidebar-active))] text-[hsl(var(--admin-sidebar-fg-active))]"
        : "text-[hsl(var(--admin-sidebar-fg))] hover:bg-[hsl(var(--admin-sidebar-hover))] hover:text-[hsl(var(--admin-sidebar-fg-active))]"
    );

  if (collapsed) {
    return (
      <aside className="w-14 bg-[hsl(var(--admin-sidebar-bg))] border-r border-[hsl(var(--admin-sidebar-border))] flex flex-col items-center py-4 gap-1 shrink-0">
        <button onClick={onToggle} className="p-2 rounded-lg text-[hsl(var(--admin-sidebar-fg))] hover:bg-[hsl(var(--admin-sidebar-hover))] mb-4">
          <PanelLeft className="h-5 w-5" />
        </button>
        {mainNav.map((item) => (
          <Link key={item.href} href={item.href} className={cn(
            "p-2 rounded-lg transition-colors",
            isActive(item.href)
              ? "bg-[hsl(var(--admin-sidebar-active))] text-[hsl(var(--admin-sidebar-fg-active))]"
              : "text-[hsl(var(--admin-sidebar-fg))] hover:bg-[hsl(var(--admin-sidebar-hover))]"
          )}>
            <item.icon className="h-5 w-5" />
          </Link>
        ))}
        <Link href="/admin/online-store/themes" className={cn(
          "p-2 rounded-lg transition-colors",
          pathname.startsWith("/admin/online-store")
            ? "bg-[hsl(var(--admin-sidebar-active))] text-[hsl(var(--admin-sidebar-fg-active))]"
            : "text-[hsl(var(--admin-sidebar-fg))] hover:bg-[hsl(var(--admin-sidebar-hover))]"
        )}>
          <Store className="h-5 w-5" />
        </Link>
        <div className="mt-auto">
          <Link href="/admin/settings" className={cn(
            "p-2 rounded-lg transition-colors",
            isActive("/admin/settings")
              ? "bg-[hsl(var(--admin-sidebar-active))] text-[hsl(var(--admin-sidebar-fg-active))]"
              : "text-[hsl(var(--admin-sidebar-fg))] hover:bg-[hsl(var(--admin-sidebar-hover))]"
          )}>
            <Settings className="h-5 w-5" />
          </Link>
        </div>
      </aside>
    );
  }

  return (
    <aside className="w-60 bg-[hsl(var(--admin-sidebar-bg))] border-r border-[hsl(var(--admin-sidebar-border))] flex flex-col shrink-0 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <Globe className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-sm font-bold text-[hsl(var(--admin-sidebar-fg-active))]">Afrify</span>
        </div>
        <button onClick={onToggle} className="p-1.5 rounded-lg text-[hsl(var(--admin-sidebar-fg))] hover:bg-[hsl(var(--admin-sidebar-hover))]">
          <PanelLeftClose className="h-4 w-4" />
        </button>
      </div>

      {/* Search */}
      <div className="px-3 mb-2">
        <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg bg-[hsl(var(--admin-sidebar-hover))] text-[hsl(var(--admin-sidebar-fg))] text-sm hover:bg-[hsl(var(--admin-sidebar-active))] transition-colors">
          <Search className="h-4 w-4" />
          <span>Search</span>
          <kbd className="ml-auto text-xs bg-[hsl(var(--admin-sidebar-bg))] px-1.5 py-0.5 rounded">⌘K</kbd>
        </button>
      </div>

      {/* Main nav */}
      <nav className="flex-1 px-3 space-y-0.5">
        {mainNav.map((item) => (
          <Link key={item.href} href={item.href} className={linkClass(item.href)}>
            <item.icon className="h-5 w-5 shrink-0" />
            {item.label}
          </Link>
        ))}

        {/* Online Store (expandable) */}
        <div>
          <button
            onClick={() => setStoreOpen(!storeOpen)}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors w-full",
              pathname.startsWith("/admin/online-store")
                ? "bg-[hsl(var(--admin-sidebar-active))] text-[hsl(var(--admin-sidebar-fg-active))]"
                : "text-[hsl(var(--admin-sidebar-fg))] hover:bg-[hsl(var(--admin-sidebar-hover))] hover:text-[hsl(var(--admin-sidebar-fg-active))]"
            )}
          >
            <Store className="h-5 w-5 shrink-0" />
            Online Store
            {storeOpen ? (
              <ChevronDown className="h-4 w-4 ml-auto" />
            ) : (
              <ChevronRight className="h-4 w-4 ml-auto" />
            )}
          </button>
          {storeOpen && (
            <div className="ml-8 mt-0.5 space-y-0.5">
              {onlineStoreSubNav.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  className={cn(
                    "block px-3 py-1.5 rounded-lg text-sm transition-colors",
                    pathname === sub.href
                      ? "text-[hsl(var(--admin-sidebar-fg-active))] font-medium"
                      : "text-[hsl(var(--admin-sidebar-fg))] hover:text-[hsl(var(--admin-sidebar-fg-active))]"
                  )}
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Bottom */}
      <div className="px-3 py-4 border-t border-[hsl(var(--admin-sidebar-border))]">
        <Link href="/admin/settings" className={linkClass("/admin/settings")}>
          <Settings className="h-5 w-5 shrink-0" />
          Settings
        </Link>
      </div>
    </aside>
  );
}
