"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Bell,
  ShoppingCart,
  User,
  ChevronDown,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 flex h-14 items-center gap-4 border-b border-border bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      role="banner"
    >
      {/* Global search */}
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none"
            aria-hidden
          />
          <Input
            type="search"
            placeholder="Search companies, products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setSearchOpen(true)}
            onBlur={() => setTimeout(() => setSearchOpen(false), 150)}
            className="pl-9 bg-muted/50"
            aria-label="Search"
            aria-expanded={searchOpen}
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Notifications */}
        <Button
          variant="ghost"
          size="icon"
          aria-label="Notifications"
          aria-expanded={notificationsOpen}
          onClick={() => setNotificationsOpen(!notificationsOpen)}
        >
          <Bell className="h-5 w-5" />
        </Button>

        {/* Cart */}
        <Button
          variant="ghost"
          size="icon"
          aria-label="Cart (0 items)"
          asChild
        >
          <Link href="/cart">
            <ShoppingCart className="h-5 w-5" />
          </Link>
        </Button>

        {/* User menu */}
        <div className="relative">
          <Button
            variant="ghost"
            className="gap-2 pl-2 pr-2"
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            aria-label="User menu"
            aria-expanded={userMenuOpen}
            aria-haspopup="true"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
              <User className="h-4 w-4" />
            </div>
            <span className="hidden md:inline text-sm font-medium">Account</span>
            <ChevronDown
              className={cn("h-4 w-4 transition-transform", userMenuOpen && "rotate-180")}
            />
          </Button>

          {userMenuOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                aria-hidden
                onClick={() => setUserMenuOpen(false)}
              />
              <div
                className="absolute right-0 top-full z-50 mt-1 w-56 rounded-md border border-border bg-card py-1 shadow-lg"
                role="menu"
              >
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-sm hover:bg-accent"
                  role="menuitem"
                  onClick={() => setUserMenuOpen(false)}
                >
                  Profile
                </Link>
                <Link
                  href="/subscription"
                  className="block px-4 py-2 text-sm hover:bg-accent"
                  role="menuitem"
                  onClick={() => setUserMenuOpen(false)}
                >
                  Subscription
                </Link>
                <button
                  type="button"
                  className="flex w-full items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                  role="menuitem"
                  onClick={() => {
                    setUserMenuOpen(false);
                    // TODO: logout
                  }}
                >
                  <LogOut className="h-4 w-4" />
                  Log out
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
