"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck, FileText } from "lucide-react";
import BrandLogo from "./BrandLogo";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer() {
  return (
    <footer className="bg-[#061426] text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-5">
            <BrandLogo lightMode={true} className="h-12" />
            <p className="text-slate-400 text-sm leading-relaxed">
              Water & wastewater treatment solutions for residential, commercial and industrial clients — from a single home purifier to a full treatment plant.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {/* Facebook SVG */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800/80 hover:bg-cyan-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram SVG */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800/80 hover:bg-pink-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* WhatsApp SVG */}
              <a
                href="https://wa.me/919061548607"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800/80 hover:bg-emerald-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
              </a>

              {/* YouTube SVG */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800/80 hover:bg-red-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide border-b border-cyan-500/30 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  Products & Purifiers
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  Services & AMC
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide border-b border-cyan-500/30 pb-2 inline-block">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/products" className="hover:text-cyan-400 transition-colors">
                  RO & Alkaline Purifiers
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors">
                  Water Softener Plant
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors">
                  STP / ETP / WTP Units
                </Link>
              </li>
              <li>
                <Link href="/contact#booking" className="hover:text-cyan-400 transition-colors">
                  Free Water Testing
                </Link>
              </li>
              <li>
                <Link href="/services#amc" className="hover:text-cyan-400 transition-colors">
                  AMC & Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide border-b border-cyan-500/30 pb-2 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 block mb-0.5">
                      Head Office (Ramanattukara):
                    </span>
                    <a
                      href="https://maps.app.goo.gl/at8QKtB8cB1csU8U8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-300 transition-colors block text-xs leading-relaxed"
                    >
                      Chemmalil Masjid Building, Nisari Junction, Ramanattukara, Kozhikode, Kerala 673633
                    </a>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400 block mb-0.5">
                      Branch Office (Puthukkode):
                    </span>
                    <a
                      href="https://maps.app.goo.gl/mwRUbmBp6GN9b7rx9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-300 transition-colors block text-xs leading-relaxed text-slate-300"
                    >
                      VC Building, Puthukkode Pallipadi, Parammal By-pass, Near L.P School
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="tel:+919061548607" className="hover:text-cyan-400 transition-colors font-semibold">
                  +91 90615 48607
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:hometechaquasolutions@gmail.com" className="hover:text-cyan-400 transition-colors">
                  hometechaquasolutions@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <a
            href="https://wa.me/919061548607"
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-400 transition-colors cursor-pointer font-medium"
          >
            © 2026 HomeTech Aqua Solutions. All rights reserved.
          </a>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" /> Genuine Authorized Equipment
            </span>
            <span>Designed for HomeTech Aqua Solutions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
