"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ServiceBookingForm from "@/components/ServiceBookingForm";
import QuoteModal from "@/components/QuoteModal";
import { Phone, Mail, MapPin, MessageSquare, ChevronDown, Clock, ShieldCheck, FileText, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is TDS and what level is safe for drinking water?",
      a: "TDS stands for Total Dissolved Solids (measured in PPM). Water below 200 PPM is soft municipal water (suited for UV+UF). Water between 200 PPM and 1200 PPM requires multi-stage RO with TDS controller and copper/alkaline enrichment to make it safe and healthy.",
    },
    {
      q: "What warranty and service support do you provide?",
      a: "All purifiers and systems come with manufacturer warranty on core components, backed by our dedicated technician team for installation, maintenance, and AMC servicing across Kerala.",
    },
    {
      q: "Is the doorstep water quality test completely free?",
      a: "Yes! We offer a no-obligation doorstep water testing service in Calicut and surrounding regions. Our certified engineer will test your water's TDS, pH, and hardness level on the spot.",
    },
    {
      q: "What is the difference between a Water Softener and an RO Purifier?",
      a: "A Water Softener uses food-grade ion exchange resin to eliminate calcium & magnesium hardness from borewell water before it enters your home pipes, protecting geysers, hair, and tiles. An RO Purifier purifies drinking water at the kitchen tap by removing dissolved salts, heavy metals, and bacteria.",
    },
    {
      q: "How fast can an engineer visit for emergency repairs or AMC servicing?",
      a: "Our dedicated service fleet responds within 24 hours across Calicut, Malappuram, Wayanad, and nearby Kerala regions.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-cyan-500 selection:text-white">
      <Header onOpenQuoteModal={() => setIsQuoteOpen(true)} />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="bg-gradient-to-r from-[#06182C] via-[#0B2545] to-[#081C33] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-extrabold uppercase tracking-wider">
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
              Contact Us & Schedule Doorstep Service
            </h1>
            <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
              Have questions or need a free water quality analysis? Reach out to our Calicut office or request a quick doorstep technician visit.
            </p>
          </div>
        </section>

        {/* Contact Info Overview Cards */}
        <section className="py-10 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone Lines */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md flex items-start gap-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-[#0B192C] text-base leading-tight">Phone Hotline</h3>
                  <a href="tel:+919061548607" className="text-sm font-bold text-cyan-700 block mt-1 hover:underline">
                    +91 90615 48607
                  </a>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Sales, Service & Free Water Testing
                  </p>
                  <span className="text-[11px] text-emerald-600 font-semibold block mt-2">
                    ● Mon-Sat (8:30 AM - 7:30 PM)
                  </span>
                </div>
              </div>

              {/* Email & WhatsApp */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md flex items-start gap-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-[#0B192C] text-base leading-tight">Email & WhatsApp Support</h3>
                  <a href="mailto:sales@hometechkerala.com" className="text-xs font-bold text-slate-800 block mt-1 hover:underline break-all">
                    sales@hometechkerala.com
                  </a>
                  <a
                    href="https://wa.me/919061548607"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mt-2 hover:bg-emerald-100 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Store Locations & Embedded Google Maps Section */}
        <section className="py-14 bg-[#081829] text-white border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-2">
              <span className="px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-extrabold uppercase tracking-wider inline-block">
                Visit Our Stores
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Our Store Locations & Google Maps View
              </h2>
              <p className="text-slate-400 text-sm max-w-xl mx-auto">
                Locate our Head Office in Ramanattukara, Display Center in Kozhikode, or Branch Office in Puthukkode directly on Google Maps.
              </p>
            </div>

            {/* Store Cards Grid with Maps Embedded directly in each card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Head Office - Ramanattukara Store Grid Card */}
              <div className="bg-[#0b1f38] rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 text-[11px] font-black uppercase tracking-wider inline-block">
                    HEAD OFFICE
                  </span>
                  <h3 className="text-2xl font-black text-white">Ramanattukara Store</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Chemmalil Masjid Building, Nisari Junction, Ramanattukara, Kozhikode, Kerala 673633
                  </p>
                </div>

                {/* Map View directly inside Card 1 */}
                <div className="w-full h-72 sm:h-80 rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-950 relative shadow-inner">
                  <iframe
                    title="HomeTech Aqua Solutions Ramanattukara Store Google Map"
                    src="https://maps.google.com/maps?q=Chammalil%20Juma%20Masjid,%20NH%2066,%20Ramanattukara,%20Kozhikode,%20Kerala%20673633&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0 filter contrast-[1.05]"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <a
                  href="https://maps.app.goo.gl/at8QKtB8cB1csU8U8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-cyan-500 hover:bg-cyan-400 text-[#06182C] font-black text-xs sm:text-sm rounded-2xl transition-all shadow-lg text-center flex items-center justify-center gap-2 tracking-wide"
                >
                  <MapPin className="w-4 h-4" /> Get Directions on Google Maps ↗
                </a>
              </div>

              {/* Display Center - Kozhikode Grid Card */}
              <div className="bg-[#0b1f38] rounded-3xl p-6 sm:p-8 border border-blue-500/30 shadow-2xl flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <span className="px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/40 text-blue-300 text-[11px] font-black uppercase tracking-wider inline-block">
                    DISPLAY CENTER
                  </span>
                  <h3 className="text-2xl font-black text-white">Display Center</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    VC Building, Parammal By-pass, Near LP School, Kozhikode, PIN: 673632
                  </p>
                </div>

                {/* Map View directly inside Card 2 */}
                <div className="w-full h-72 sm:h-80 rounded-2xl overflow-hidden border border-blue-500/30 bg-slate-950 relative shadow-inner">
                  <iframe
                    title="HomeTech Aqua Solutions Display Center Kozhikode Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3913.97914786391!2d75.86751937504792!3d11.1891784889858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDExJzIyLjAiTiA3NcKwNTInMTIuMyJF!5e0!3m2!1sen!2sin!4v1789798915176!5m2!1sen!2sin"
                    className="w-full h-full border-0 filter contrast-[1.05]"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <a
                  href="https://www.google.com/maps?q=11.1891785,75.8675194"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-black text-xs sm:text-sm rounded-2xl transition-all shadow-lg text-center flex items-center justify-center gap-2 tracking-wide"
                >
                  <MapPin className="w-4 h-4" /> Get Directions on Google Maps ↗
                </a>
              </div>

              {/* Branch Office - Puthukkode Grid Card */}
              <div className="bg-[#0b1f38] rounded-3xl p-6 sm:p-8 border border-emerald-500/30 shadow-2xl flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 text-[11px] font-black uppercase tracking-wider inline-block">
                    BRANCH OFFICE
                  </span>
                  <h3 className="text-2xl font-black text-white">Puthukkode Branch</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Pallipadi Puthukkode Road, Near Irfan Flour Mill, Kozhikode, PIN: 673632
                  </p>
                </div>

                {/* Map View directly inside Card 3 */}
                <div className="w-full h-72 sm:h-80 rounded-2xl overflow-hidden border border-emerald-500/30 bg-slate-950 relative shadow-inner">
                  <iframe
                    title="HomeTech Aqua Solutions Puthukkode Branch Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3913.97517898433!2d75.87547219999999!3d11.189472199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDExJzIyLjEiTiA3NcKwNTInMzEuNyJF!5e0!3m2!1sen!2sin!4v1789799436963!5m2!1sen!2sin"
                    className="w-full h-full border-0 filter contrast-[1.05]"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <a
                  href="https://maps.app.goo.gl/mwRUbmBp6GN9b7rx9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm rounded-2xl transition-all shadow-lg text-center flex items-center justify-center gap-2 tracking-wide"
                >
                  <MapPin className="w-4 h-4" /> Get Directions on Google Maps ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Service Booking Form */}
        <ServiceBookingForm />

        {/* Interactive FAQ Accordion */}
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-600">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-3xl font-extrabold text-[#0B192C] mt-1">
                Got Questions? We Have Answers.
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-sm"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full p-5 text-left font-bold text-[#0B192C] bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-4 transition-colors cursor-pointer"
                    >
                      <span className="text-sm sm:text-base">{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-cyan-600 shrink-0 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="p-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-white">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}
