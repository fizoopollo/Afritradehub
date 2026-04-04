"use client";

import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { MarketingFooter } from "./Footer";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-16 w-full">{children}</main>
      <MarketingFooter />
    </div>
  );
}

