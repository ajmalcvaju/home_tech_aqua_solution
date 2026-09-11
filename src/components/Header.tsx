"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MapPin, ShieldCheck, Home, Droplets, Wrench, Info, PhoneCall, ChevronRight } from "lucide-react";
import BrandLogo from "./BrandLogo";
import WhatsAppIcon from "./WhatsAppIcon";

interface HeaderProps {
  onOpenQuoteModal?: (productName?: string) => void;
}

export default function Header({ onOpenQuoteModal }: HeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Home page starts on dark hero background
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if header should be transparent (at top of Home page)
  const isTransparent = isHomePage && !isScrolled;

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Products", href: "/products", icon: Droplets },
    { name: "Services", href: "/services", icon: Wrench },
    { name: "About Us", href: "/about", icon: Info },
    { name: "Contact Us", href: "/contact", icon: PhoneCall },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Info Bar */}
      <div
        className={`hidden md:block text-xs py-1.5 px-4 transition-colors duration-300 ${
          isTransparent
            ? "bg-[#051426]/90 text-slate-300 border-b border-cyan-500/20"
            : "bg-[#06182C] text-white border-b border-cyan-500/20"
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
              <MapPin className="w-3.5 h-3.5" /> Calicut, Kerala & Surrounding Regions
            </span>
            <span className="hidden md:inline-block text-slate-600">|</span>
            <span className="hidden md:flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" /> Authorized Sales & Service
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href="tel:+919061548607"
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" /> +91 90615 48607
            </a>
            <a
              href="https://wa.me/919061548607?text=Hi%20HomeTech,%20I%20want%20to%20inquire%20about%20Water%20Purifiers"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-current" /> WhatsApp Live
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar: Transparent overlay on hero, solid white on scroll */}
      <nav
        className={`w-full transition-all duration-300 ${
          isTransparent
            ? "bg-[#092542]/80 backdrop-blur-md py-4 border-b border-white/10 text-white"
            : "bg-white/95 backdrop-blur-md shadow-md py-3.5 border-b border-slate-100 text-slate-900"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo - lightMode when transparent */}
          <Link href="/" className="flex items-center gap-2 group">
            <BrandLogo lightMode={isTransparent} className="h-10 sm:h-11" />
          </Link>

          {/* Navigation Links in Center */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-bold transition-all ${
                    isTransparent
                      ? isActive
                        ? "text-cyan-300 font-extrabold border-b-2 border-[#00C4DF] pb-0.5"
                        : "text-slate-100 hover:text-cyan-300"
                      : isActive
                      ? "text-[#0B192C] font-extrabold border-b-2 border-[#00C4DF] pb-0.5"
                      : "text-slate-700 hover:text-[#00C4DF]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Cyan Pill CTA Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/contact#booking"
              className="px-6 py-2.5 text-sm font-extrabold text-[#06182C] bg-[#00C4DF] hover:bg-[#00B2CB] rounded-full transition-all shadow-md hover:shadow-lg hover:scale-[1.02] cursor-pointer"
            >
              Book a Service
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg focus:outline-none transition-colors ${
                isTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-slate-800 hover:bg-slate-100"
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Standard Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white text-slate-900 border-b border-slate-200 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="px-4 pt-3 pb-5 space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                      isActive
                        ? "text-[#00C4DF] bg-cyan-50 font-bold"
                        : "text-slate-800 hover:text-[#00C4DF] hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-between gap-3">
                <a
                  href="tel:+919061548607"
                  className="flex-1 text-center py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-lg text-xs transition-colors"
                >
                  📞 Call Us
                </a>
                <a
                  href="https://wa.me/919061548607?text=Hi%20HomeTech,%20I%20want%20to%20inquire%20about%20Water%20Purifiers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 px-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg text-xs transition-colors shadow-sm"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
