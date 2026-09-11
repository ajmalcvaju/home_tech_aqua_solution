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
              className={`p-2.5 rounded-xl focus:outline-none transition-colors ${
                isTransparent
                  ? "text-white bg-white/10 hover:bg-white/20"
                  : "text-slate-800 bg-slate-100 hover:bg-slate-200"
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Ultra-Premium Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#06182C] text-white border-b border-cyan-500/20 px-4 pt-4 pb-6 space-y-4 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const IconComponent = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-bold transition-all ${
                      isActive
                        ? "text-cyan-300 bg-cyan-500/15 border border-cyan-400/30 shadow-sm"
                        : "text-slate-200 hover:bg-slate-800/80 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${isActive ? "bg-cyan-500 text-slate-950" : "bg-slate-800 text-cyan-400"}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span>{link.name}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? "text-cyan-400 translate-x-0.5" : "text-slate-500"}`} />
                  </Link>
                );
              })}
            </div>

            {/* Mobile Drawer Quick Action Buttons */}
            <div className="pt-3 border-t border-slate-800 space-y-2.5">
              <Link
                href="/contact#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#00C4DF] hover:bg-[#00B2CB] text-[#06182C] font-black rounded-xl shadow-md text-sm transition-transform active:scale-[0.99]"
              >
                <Wrench className="w-4 h-4" /> Book a Service
              </Link>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://wa.me/919061548607?text=Hi%20HomeTech,%20I%20want%20to%20inquire%20about%20Water%20Purifiers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 font-bold rounded-xl text-xs hover:bg-emerald-600/30 transition-colors"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-current" /> WhatsApp
                </a>
                <a
                  href="tel:+919061548607"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-cyan-600/20 border border-cyan-500/30 text-cyan-300 font-bold rounded-xl text-xs hover:bg-cyan-600/30 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" /> Call Sales
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
