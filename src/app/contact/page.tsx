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

        {/* Contact Info Cards matching reference image 4 */}
        <section className="py-12 -mt-8 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Office Location */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-[#0B192C] text-lg">Ramanattukara Store</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Chemmalil Masjid Building, Nisari Junction, Ramanattukara, Kozhikode, Kerala 673633
                  </p>
                  <a
                    href="https://maps.app.goo.gl/at8QKtB8cB1csU8U8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-cyan-600 hover:text-cyan-700 mt-2 underline"
                  >
                    <MapPin className="w-3 h-3" /> Get Directions on Google Maps ↗
                  </a>
                </div>
              </div>

              {/* Phone Lines */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-[#0B192C] text-lg">Phone Hotline</h3>
                  <a href="tel:+919061548607" className="text-sm font-bold text-cyan-700 block mt-1 hover:underline">
                    +91 90615 48607
                  </a>
                  <a href="tel:+919061548607" className="text-xs text-slate-600 block mt-0.5">
                    +91 90615 48607 (Sales & Service)
                  </a>
                  <span className="text-[11px] text-emerald-600 font-semibold block mt-2">
                    ● Lines open Mon-Sat (8:30 AM - 7:30 PM)
                  </span>
                </div>
              </div>

              {/* Email & WhatsApp */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-[#0B192C] text-lg">Email & Digital</h3>
                  <a href="mailto:hometechaquasolutions@gmail.com" className="text-xs font-bold text-slate-800 block mt-1 hover:underline">
                    hometechaquasolutions@gmail.com
                  </a>
                  <a
                    href="https://wa.me/919061548607"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mt-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Service Booking Form */}
        <ServiceBookingForm />

        {/* Store Location & Google Maps Navigation Banner */}
        <section className="py-12 bg-slate-900 text-white border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="bg-gradient-to-r from-[#0B2545] to-[#06182C] rounded-3xl p-8 border border-cyan-500/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-extrabold uppercase tracking-wider">
                  Store Location
                </span>
                <h3 className="text-2xl font-black text-white">Visit Our Ramanattukara Showroom</h3>
                <p className="text-slate-300 text-sm max-w-xl">
                  Chemmalil Masjid Building, Nisari Junction, Ramanattukara, Kozhikode, Kerala 673633
                </p>
              </div>
              <a
                href="https://maps.app.goo.gl/at8QKtB8cB1csU8U8"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-[#06182C] font-extrabold text-sm rounded-full transition-all shadow-lg hover:scale-105 shrink-0 flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" /> Open in Google Maps ↗
              </a>
            </div>

            {/* Embedded Google Maps Container */}
            <div className="w-full h-80 sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-slate-700/80 bg-slate-950 relative">
              <iframe
                title="HomeTech Aqua Solutions Store Location Google Map"
                src="https://maps.google.com/maps?q=Chemmalil%20Masjid%20Building,%20Nisari%20Junction,%20Ramanattukara,%20Kozhikode,%20Kerala%20673633&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter contrast-[1.05]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

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
