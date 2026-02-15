"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#cases", label: "Cases" },
  { href: "#background", label: "Background" },
  { href: "#publications", label: "Publications" },
  { href: "#work", label: "Work" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto" style={{ padding: "0 24px" }}>
        <div className="flex items-center justify-between" style={{ height: "120px" }}>
          <a href="#" className="flex items-center group">
            <Image
              src="/images/logo.png"
              alt="Covenant LLP"
              width={150}
              height={45}
              className="h-20 w-auto transition-transform group-hover:scale-105"
            />
          </a>
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#1a1a2e] transition-colors line-animation"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 bg-[#1a1a2e] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#CCA45B] hover:text-[#1a1a2e] transition-all duration-300 hover:shadow-lg hover:shadow-[#CCA45B]/25"
            >
              Get in Touch
            </a>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl animate-slide-up">
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-600 hover:text-[#1a1a2e] hover:bg-gray-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 bg-[#1a1a2e] text-white text-center rounded-lg mt-4"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
