"use client";

import React, { useState, useEffect } from "react";
import { Phone, ChevronUp, X } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FloatingActions() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none">
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919061548607?text=Hi%20HomeTech%20Aqua%20Solutions,%20I%20would%20like%20to%20inquire%20about%20a%20Water%20Purifier%20/%20Free%20Water%20Test."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group relative"
        aria-label="Contact on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping group-hover:hidden" />
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white relative z-10" />
      </a>

      {/* Quick Phone Call Button */}
      <a
        href="tel:+919061548607"
        className="w-12 h-12 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300"
        aria-label="Call Now"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Scroll to top button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 bg-[#0B192C] hover:bg-slate-800 text-cyan-400 rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-all duration-300 border border-slate-700"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
