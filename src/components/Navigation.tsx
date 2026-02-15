"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#cases", label: "Cases" },
  { href: "#background", label: "Background" },
  { href: "#publications", label: "Publications" },
  { href: "#work", label: "Work" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 mt-8 mx-12 rounded-full ${
      scrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto" style={{ padding: "0 24px" }}>
        <div className="flex items-center justify-between" style={{ height: "100px" }}>
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <Image
              src="/images/logo.png"
              alt="Covenant LLP"
              width={150}
              height={45}
              className="h-10 md:h-16 w-auto transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-5 py-2 text-xl font-medium text-black hover:text-[#CCA45B] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA & Phone */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="tel:+1234567890" className="flex items-center gap-2 text-black hover:text-[#CCA45B] transition-colors">
              <div className="w-10 h-10 rounded-full border border-[#CCA45B] flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-xl font-medium">Call Us</span>
            </a>
            <a
              href="#contact"
              className="bg-[#CCA45B] text-[#0d0d0d] font-semibold rounded-full hover:bg-white transition-all duration-300"
              style={{ padding: "14px 28px" }}
            >
              Free Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-[#CCA45B] hover:text-[#0d0d0d] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0d0d0d] border-t border-white/10 shadow-xl">
          <div style={{ padding: "24px" }}>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-white/80 hover:text-[#CCA45B] hover:bg-white/5 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="border-t border-white/10 mt-4 pt-4">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full bg-[#CCA45B] text-[#0d0d0d] text-center font-semibold rounded-xl"
                style={{ padding: "16px" }}
              >
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
