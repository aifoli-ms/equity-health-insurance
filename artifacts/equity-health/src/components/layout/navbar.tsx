import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/plans/corporate", label: "Plans" },
    { href: "/providers", label: "Provider Directory" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-brand-navy sticky top-0 z-50 w-full shadow-sm">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-white text-xl font-bold tracking-tight">
          Equity Health
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-white text-sm font-medium pb-1 border-b-2 transition-colors ${
                location === link.href || (location.startsWith("/plans") && link.href.includes("plans"))
                  ? "border-brand-red"
                  : "border-transparent hover:border-brand-red/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-navy border-t border-brand-navy-light px-4 py-4 space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-white text-base font-medium py-2 ${
                location === link.href || (location.startsWith("/plans") && link.href.includes("plans"))
                  ? "text-brand-red border-l-4 border-brand-red pl-2"
                  : "pl-3"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
