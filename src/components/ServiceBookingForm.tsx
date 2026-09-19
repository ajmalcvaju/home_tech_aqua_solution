"use client";

import React, { useState } from "react";
import { CheckCircle2, MessageSquare, Send, Sparkles, Loader2, Calendar } from "lucide-react";

interface ServiceBookingFormProps {
  isServiceMode?: boolean;
}

export default function ServiceBookingForm({ isServiceMode = false }: ServiceBookingFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Free Doorstep Water Test",
    warrantyStatus: "O/W",
    purchaseDate: "",
    address: "",
    date: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload: Record<string, string> = {
        _subject: `New Service Request: ${formData.service} - ${formData.name || "Customer"}`,
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
        ? "service@hometechkerala.com"
        : "sales@hometechkerala.com";

      await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error("Error submitting service booking request:", error);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  const handleWhatsAppInstant = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setSubmitted(true);

    const details = [
      `Hi HomeTech Aqua Solutions,`,
      ``,
      `I would like to submit a request for doorstep service:`,
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
    <section id="booking" className="py-20 bg-gradient-to-br from-slate-50 via-cyan-50/40 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column matching reference image 4 */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-600">
                BOOK A SERVICE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] mt-1 leading-tight">
                Get a free water test at your doorstep
              </h2>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Tell us a little about your requirement and our team will get back to you to schedule a visit — for a new installation, an AMC, or a free water quality test.
            </p>

            {/* Checklist */}
            <div className="space-y-3 pt-2">
              {[
                "No-obligation site visit & free water test",
                "Transparent quotes, no hidden charges",
                "Certified technicians & genuine spare parts",
                "Response within 24 hours guaranteed",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-slate-800 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Instant WhatsApp Button matching image 4 */}
            <div className="pt-4">
              <button
                onClick={handleWhatsAppInstant}
                className="w-full sm:w-auto px-6 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold rounded-2xl shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-3 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>Book Instantly on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Right Column Form Box matching reference image 4 */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl shadow-2xl border border-slate-200/80">
            <h3 className="text-2xl font-black text-[#0B192C] mb-6 border-b border-slate-100 pb-4">
              {isServiceMode ? "Book Doorstep Purifier Service" : "Request a Free Water Test"}
            </h3>

            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">Request Sent Successfully!</h4>
                <p className="text-slate-600 text-sm max-w-sm mx-auto">
                  Our Calicut engineering team will call you back to confirm your requested doorstep appointment.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-slate-900 text-white font-bold text-sm rounded-xl mt-4"
                >
                  Submit Another Booking
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Service Needed *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white text-slate-900 font-semibold"
                    >
                      <option value="Free Doorstep Water Test">Free Doorstep Water Test</option>
                      <option value="Copper & Alkaline RO Purifier">Copper & Alkaline RO Purifier</option>
                      <option value="Water Softener System">Water Softener System</option>
                      <option value="Iron Removal Unit">Iron Removal Unit</option>
                      <option value="UF / DM Plant">UF / DM Plant</option>
                      <option value="Packaged STP / ETP Unit">Packaged STP / ETP Unit</option>
                      <option value="Water Test Kit & AMC">Water Test Kit & AMC</option>
                    </select>
                  </div>
                </div>

                {/* Service-Specific Warranty Status (I/W vs O/W) & Date of Purchase */}
                {isServiceMode && (
                  <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-cyan-200/80">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Warranty Status *
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, warrantyStatus: "I/W" })}
                          className={`py-2.5 px-3 rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                            formData.warrantyStatus === "I/W"
                              ? "bg-[#0B192C] text-cyan-300 border-[#0B192C] shadow-sm"
                              : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                          }`}
                        >
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                          In Warranty (I/W)
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, warrantyStatus: "O/W" })}
                          className={`py-2.5 px-3 rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                            formData.warrantyStatus === "O/W"
                              ? "bg-[#0B192C] text-cyan-300 border-[#0B192C] shadow-sm"
                              : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                          }`}
                        >
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
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
                          <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                          <input
                            type="date"
                            required={formData.warrantyStatus === "I/W"}
                            value={formData.purchaseDate}
                            onChange={(e) => setFormData({ ...formData, purchaseDate: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-900 font-semibold"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Address *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="House / building, street, city (e.g. Calicut)"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white text-slate-900"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Message
                    </label>
                    <input
                      type="text"
                      placeholder="Anything else we should know?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white text-slate-900"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#0B192C] hover:bg-slate-800 disabled:opacity-70 text-white font-extrabold rounded-xl text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 text-cyan-400 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-cyan-400" />
                        <span>Submit Request</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
