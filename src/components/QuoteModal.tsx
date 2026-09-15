"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, Phone, Calendar, MapPin, User, Mail, Loader2 } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
  isServiceMode?: boolean;
}

export default function QuoteModal({
  isOpen,
  onClose,
  initialProduct = "",
  isServiceMode = false,
}: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: initialProduct || "Copper & Alkaline RO Purifier",
    warrantyStatus: "O/W",
    purchaseDate: "",
    address: "",
    date: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload: Record<string, string> = {
        _subject: `New ${isServiceMode ? "Service" : "Quote"} Request: ${formData.service} - ${formData.name || "Customer"}`,
        _template: "table",
        "Customer Name": formData.name,
        "Phone Number": formData.phone,
        "Email Address": formData.email || "Not specified",
        "Service Needed": formData.service,
      };

      if (isServiceMode) {
        payload["Warranty Status"] = formData.warrantyStatus === "I/W" ? "In Warranty (I/W)" : "Out of Warranty (O/W)";
        if (formData.warrantyStatus === "I/W") {
          payload["Date of Purchase"] = formData.purchaseDate || "Not specified";
        }
      }

      payload["Address / City"] = formData.address;
      payload["Preferred Date"] = formData.date || "Flexible";
      payload["Message / Details"] = formData.message || "None";

      const targetEmail = isServiceMode
        ? "service@hometechaquasolutions.com"
        : "sales@hometechaquasolutions.com";

      await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error("Error submitting quote request:", error);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  const handleWhatsAppDirect = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setSubmitted(true);

    const details = [
      `Hi HomeTech Aqua Solutions,`,
      ``,
      `I would like to request a ${isServiceMode ? "Service Booking" : "Quote / Service"}:`,
      `👤 *Name:* ${formData.name || "Not specified"}`,
      `📞 *Phone:* ${formData.phone || "Not specified"}`,
      formData.email ? `✉️ *Email:* ${formData.email}` : null,
      `🛠️ *Service Needed:* ${formData.service}`,
      isServiceMode ? `🛡️ *Warranty Status:* ${formData.warrantyStatus === "I/W" ? "In Warranty (I/W)" : "Out of Warranty (O/W)"}` : null,
      isServiceMode && formData.warrantyStatus === "I/W" && formData.purchaseDate ? `📅 *Date of Purchase:* ${formData.purchaseDate}` : null,
      formData.address ? `📍 *Address:* ${formData.address}` : null,
      formData.date ? `📅 *Preferred Date:* ${formData.date}` : null,
      formData.message ? `📝 *Message:* ${formData.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`https://wa.me/919061548607?text=${encodeURIComponent(details)}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-lg w-full max-h-[90vh] flex flex-col overflow-hidden relative">
        {/* Modal Header */}
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
              {isServiceMode ? "Doorstep Service Request" : "Fast Response Guaranteed"}
            </span>
            <h3 className="text-lg sm:text-2xl font-black text-white mt-0.5">
              {isServiceMode ? "Book Service & Repair" : "Get a Free Quote & Water Test"}
            </h3>
            <p className="text-slate-300 text-[11px] sm:text-xs mt-0.5 leading-snug">
              Tell us your requirements — our technical team in Calicut will call you back within 24 hours.
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-6 sm:py-8 space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-slate-900">Thank You!</h4>
              <p className="text-slate-600 text-xs sm:text-sm max-w-xs mx-auto">
                Your request has been received. Our water engineering team will reach out shortly.
              </p>
              <div className="pt-3 flex flex-col gap-2">
                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full py-2.5 sm:py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 fill-current" /> Instant Connect on WhatsApp
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
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              {/* Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all text-slate-900"
                    />
                  </div>
                </div>
              </div>

              {/* Email & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Service Needed *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all text-slate-900 font-medium"
                  >
                    <option value="Copper & Alkaline RO Purifier">Copper & Alkaline RO Purifier</option>
                    <option value="Water Softener System">Water Softener System</option>
                    <option value="Iron Removal Unit">Iron Removal Unit</option>
                    <option value="UF / DM Plant">UF / DM Plant (Lab/Industrial)</option>
                    <option value="Packaged STP / ETP Unit">Packaged STP / ETP Unit</option>
                    <option value="Free Doorstep Water Test">Free Doorstep Water Test</option>
                    <option value="Water Purifier Repair / Service">Purifier Repair / AMC</option>
                  </select>
                </div>
              </div>

              {/* Service-Specific Warranty Fields: I/W or O/W and Date of Purchase */}
              {isServiceMode && (
                <div className="space-y-3 bg-slate-50 p-3.5 rounded-2xl border border-cyan-200/80">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Warranty Status *
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, warrantyStatus: "I/W" })}
                        className={`py-2 px-3 rounded-xl text-xs font-extrabold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                          formData.warrantyStatus === "I/W"
                            ? "bg-[#0B192C] text-cyan-300 border-[#0B192C] shadow-sm"
                            : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        In Warranty (I/W)
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, warrantyStatus: "O/W" })}
                        className={`py-2 px-3 rounded-xl text-xs font-extrabold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                          formData.warrantyStatus === "O/W"
                            ? "bg-[#0B192C] text-cyan-300 border-[#0B192C] shadow-sm"
                            : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                        Out of Warranty (O/W)
                      </button>
                    </div>
                  </div>

                  {formData.warrantyStatus === "I/W" && (
                    <div className="animate-in fade-in slide-in-from-top-1 duration-200">
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Date of Purchase *
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="date"
                          required={formData.warrantyStatus === "I/W"}
                          value={formData.purchaseDate}
                          onChange={(e) => setFormData({ ...formData, purchaseDate: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-900 font-medium"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Address */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Address / City *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="House/Building, street, city (e.g. Calicut)"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all text-slate-900"
                  />
                </div>
              </div>

              {/* Preferred Date & Message */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Message / Details
                  </label>
                  <input
                    type="text"
                    placeholder="Any specific note?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all text-slate-900"
                  />
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-3 bg-[#0B192C] hover:bg-slate-800 disabled:opacity-70 text-white font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 text-cyan-400 animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-cyan-400" /> Submit Request
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" /> Book via WhatsApp
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
