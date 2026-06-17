import { Link } from "wouter";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-brand-navy py-8 text-white border-t-4 border-brand-red">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
          <div>
            <h3 className="text-lg font-bold">Equity Health Insurance</h3>
            <p className="text-text-muted text-sm mt-1">Comprehensive, value-for-money healthcare insurance across Ghana.</p>
          </div>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/TheEquityHealthInsurance" target="_blank" rel="noopener noreferrer" className="bg-brand-navy-light hover:bg-brand-red p-2 rounded-full transition-colors" aria-label="Facebook">
              <FaFacebookF className="w-3.5 h-3.5" />
            </a>
            <a href="https://www.instagram.com/equityhealthinsurance/" target="_blank" rel="noopener noreferrer" className="bg-brand-navy-light hover:bg-brand-red p-2 rounded-full transition-colors" aria-label="Instagram">
              <FaInstagram className="w-3.5 h-3.5" />
            </a>
            <a href="https://www.youtube.com/@equityhealthinsurance8394" target="_blank" rel="noopener noreferrer" className="bg-brand-navy-light hover:bg-brand-red p-2 rounded-full transition-colors" aria-label="YouTube">
              <FaYoutube className="w-3.5 h-3.5" />
            </a>
            <a href="https://www.linkedin.com/company/equity-health-insurance/" target="_blank" rel="noopener noreferrer" className="bg-brand-navy-light hover:bg-brand-red p-2 rounded-full transition-colors" aria-label="LinkedIn">
              <FaLinkedinIn className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-text-muted mb-6">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
          <Link href="/plans" className="hover:text-white transition-colors">Plans</Link>
          <Link href="/providers" className="hover:text-white transition-colors">HSP List</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          <a href="tel:+233501515122" className="hover:text-white transition-colors">0501515122/4</a>
        </div>

        <div className="pt-4 border-t border-brand-navy-light text-center md:text-left">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Equity Health Insurance Ghana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
