"use client";

import React, { useState } from "react";
import { X, Phone, User, MapPin, CheckCircle2, Loader2, Send } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

export default function CallbackModal({ isOpen, onClose, productName = "" }: CallbackModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    location: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("https://formsubmit.co/ajax/sales@hometechaquasolutions.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          _subject: `Callback Request: ${productName || "Product"} - ${formData.name || "Customer"}`,
          _template: "table",
          "Product Name": productName || "General Product Enquiry",
          "Customer Name": formData.name,
          "Mobile Number": formData.mobile,
          "Location / City": formData.location,
        }),
      });
    } catch (error) {
      console.error("Error submitting callback request:", error);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  const handleWhatsApp = () => {
    const details = [
      `Hi HomeTech Aqua Solutions,`,
      ``,
      `I would like to request a Callback for:`,
      productName ? `📦 *Product:* ${productName}` : null,
      `👤 *Name:* ${formData.name || "Not specified"}`,
      `📞 *Mobile Number:* ${formData.mobile || "Not specified"}`,
      `📍 *Location:* ${formData.location || "Not specified"}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`https://wa.me/919061548607?text=${encodeURIComponent(details)}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-md w-full overflow-hidden relative">
        {/* Header */}
        <div className="bg-[#0B192C] text-white p-4 sm:p-5 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="pr-8">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-cyan-400">
              Fast Response Guaranteed
            </span>
            <h3 className="text-lg sm:text-2xl font-black text-white mt-0.5">Request a Callback</h3>
            {productName && (
              <p className="text-slate-300 text-[11px] sm:text-xs mt-0.5 font-medium line-clamp-1">
                For: <span className="text-cyan-300 font-bold">{productName}</span>
              </p>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Callback Requested!</h4>
              <p className="text-slate-600 text-xs sm:text-sm max-w-xs mx-auto">
                Thank you! Our technical specialist will call you back on your mobile number shortly.
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={handleWhatsApp}
                  className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" /> Instant Connect on WhatsApp
                </button>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="w-full py-2 text-xs sm:text-sm text-slate-500 hover:text-slate-800 font-semibold"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white text-slate-900 font-medium"
                  />
                </div>
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Mobile Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white text-slate-900 font-medium"
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Location / City *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="House/Building, street, city (e.g. Calicut)"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white text-slate-900 font-medium"
                  />
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-[#0B192C] hover:bg-slate-800 disabled:opacity-70 text-white font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 text-cyan-400 animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-cyan-400" /> Submit Callback Request
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
