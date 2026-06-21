import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/plans", label: "Plans" },
  { href: "/providers", label: "Provider Directory" },
  { href: "/about", label: "About Us" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isActive = (href: string) =>
    location === href || (href.includes("plans") && location.startsWith("/plans"));

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#F5F5F5] shadow-sm">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center">
        {/* Logo — left */}
        <Link href="/" className="shrink-0">
          <img src="/images/logo.png" alt="Equity Health Insurance" className="h-12" />
        </Link>

        {/* Centre links */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-brand-navy text-base font-medium pb-1 border-b-2 transition-colors ${
                isActive(link.href)
                  ? "border-brand-red"
                  : "border-transparent hover:border-brand-red/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact pill — right */}
        <div className="hidden md:flex shrink-0">
          <Link
            href="/contact"
            className="text-base font-semibold px-6 py-2.5 rounded-full transition-colors bg-brand-red text-white hover:bg-brand-red/85"
          >
            Contact
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-brand-navy p-2 ml-auto"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#F5F5F5] border-t border-gray-200 px-4 py-4 space-y-4">
          {[...navLinks, { href: "/contact", label: "Contact" }].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-base font-medium py-2 transition-colors ${
                isActive(link.href) || location === link.href
                  ? "text-brand-red border-l-4 border-brand-red pl-2"
                  : "text-brand-navy pl-3"
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
