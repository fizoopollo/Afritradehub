import { Link } from "react-router-dom";
import { Globe } from "lucide-react";

const footerLinks = {
  Platform: [
    { label: "Afritradehub", href: "/tradehub" },
    { label: "Afrify Store Builder", href: "/afrify" },
    { label: "Pricing", href: "/pricing" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Documentation", href: "/docs" },
    { label: "Help Center", href: "/help" },
    { label: "Blog", href: "/blog" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-hero-gradient flex items-center justify-center">
                <Globe className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">Afritrade</span>
            </Link>
            <p className="text-sm text-background/60 leading-relaxed">
              Powering African trade through technology. Connect, build, grow.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-background/50 hover:text-background transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} Afritrade. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-xs text-background/40">🌍 Made for Africa, by Africa</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
