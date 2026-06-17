import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-brand-navy py-12 md:py-16 text-white border-t-4 border-brand-red">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Equity Health</h3>
            <p className="text-text-muted text-sm max-w-xs">
              Providing affordable, comprehensive, and reliable health insurance coverage for individuals, families, and businesses across Ghana.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-red-light">Quick Links</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/plans/corporate" className="hover:text-white transition-colors">Our Plans</Link></li>
              <li><Link href="/providers" className="hover:text-white transition-colors">Find a Provider</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-red-light">Contact Info</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>123 Independence Avenue, Ridge, Accra</li>
              <li>PO Box CT 1234, Cantonments</li>
              <li>0800 123 456 (Toll Free)</li>
              <li>support@equityhealth.com.gh</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-brand-navy-light text-center md:text-left">
          <p className="text-xs text-text-muted leading-relaxed">
            Equity Health Insurance Ghana is regulated by the National Insurance Commission (NIC). License No. [NIC/HI/2019/044]. © 2024 Equity Health Insurance Ghana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
