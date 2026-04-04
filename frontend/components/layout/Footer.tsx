"use client";

import Link from "next/link";

const footerLinks = {
  platform: [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Companies", href: "/companies" },
    { label: "Products", href: "/products" },
    { label: "Orders", href: "/orders" },
  ],
  support: [
    { label: "Contact", href: "/contact" },
    { label: "Help", href: "/help" },
    { label: "Documentation", href: "/docs" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer
      className="border-t border-border bg-card mt-auto"
      role="contentinfo"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <p className="font-semibold text-foreground mb-3">Afritradehub</p>
            <p className="text-sm text-muted-foreground">
              B2B directory and marketplace for verified African businesses.
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-3">Platform</p>
            <ul className="space-y-2">
              {footerLinks.platform.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-3">Support</p>
            <ul className="space-y-2">
              {footerLinks.support.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-3">Legal</p>
            <ul className="space-y-2">
              {footerLinks.legal.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Afritradehub & Afrify. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
              aria-label="Twitter"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
