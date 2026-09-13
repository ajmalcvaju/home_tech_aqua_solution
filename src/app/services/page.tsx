"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import QuoteModal from "@/components/QuoteModal";
import ServiceBookingForm from "@/components/ServiceBookingForm";
import { Wrench, ShieldCheck, Droplets, CheckCircle2, Clock, Cpu, Building2, Sparkles, Phone, MessageSquare } from "lucide-react";

export default function ServicesPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleOpenQuote = (serviceName?: string) => {
    setSelectedService(serviceName || "Water Purifier Repair / Service");
    setIsQuoteOpen(true);
  };

  const servicesList = [
    {
      title: "Domestic RO & Purifier Servicing",
      icon: Wrench,
      description:
        "Comprehensive maintenance, membrane changes, sediment & carbon filter replacements, leak repair, and pump servicing for all RO purifier brands.",
      features: [
        "100% Genuine authorized spare parts",
        "Free TDS level calibration after repair",
        "Same-day doorstep engineer visit",
        "4-Year zero service charge policy*",
      ],
      badge: "Fast 24-Hr Visit",
    },
    {
      title: "Commercial RO Plant Installation",
      icon: Building2,
      description:
        "Custom engineered high-capacity RO systems (250 LPH to 10,000 LPH) for hotels, hospitals, schools, clinics, and commercial offices across Kerala.",
      features: [
        "Stainless steel Skid-mounted frame",
        "Automatic high-pressure pump protection",
        "Continuous conductivity & TDS monitoring",
        "Turnkey installation & operational handover",
      ],
      badge: "Turnkey Engineering",
    },
    {
      title: "Water Softener & Iron Removal Setup",
      icon: Droplets,
      description:
        "Heavy-duty FRP tank installation for borewells with yellow iron stains, foul smell, and pipe scaling. Protects geysers, hair, skin, and tiles.",
      features: [
        "Food-grade cation exchange resin media",
        "Automatic / manual multiport backwash valve",
        "Eliminates yellow tile stains & metallic odour",
        "Prevents scale build-up in solar heaters",
      ],
      badge: "Zero Scaling Solution",
    },
    {
      title: "Packaged STP / ETP Unit Commissioning",
      icon: Cpu,
      description:
        "Compact sewage treatment (STP) & effluent treatment (ETP) plants for residential communities, apartments, and factories to achieve CPCB compliance.",
      features: [
        "MBBR / SBR / FAB advanced bioprocess",
        "Odorless & quiet eco-friendly operation",
        "Recycled water suitable for flushing & gardens",
        "Full regulatory compliance documentation",
      ],
      badge: "CPCB Eco Certified",
    },
    {
      title: "Doorstep Water Quality TDS & pH Testing",
      icon: ShieldCheck,
      description:
        "Free doorstep visit by certified technicians using digital TDS meters, pH probes, and hardness reagents to analyze raw water conditions.",
      features: [
        "On-the-spot mineral & hardness report",
        "No-obligation purifier model consultation",
        "Analysis for well, municipal & tanker water",
        "Completely free for Calicut & nearby areas",
      ],
      badge: "100% Free Doorstep Test",
    },
    {
      title: "Annual Maintenance Contracts (AMC)",
      icon: Clock,
      description:
        "Worry-free AMC packages covering scheduled filter changes, genuine membrane replacements, emergency breakdown visits, and zero labor charges.",
      features: [
        "Scheduled preventive maintenance visits",
        "Free replacement of worn filter cartridges",
        "Priority 24-hour emergency breakdown support",
        "Extends total lifespan of your RO unit",
      ],
      badge: "Peace of Mind",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-cyan-500 selection:text-white">
      <Header onOpenQuoteModal={handleOpenQuote} />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="bg-gradient-to-r from-[#06182C] via-[#0B2545] to-[#081C33] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-extrabold uppercase tracking-wider">
              Expert Water Engineering Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
              Installation, Maintenance & AMC Services
            </h1>
            <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
              Backbone support by certified technicians — from doorstep home purifier servicing to full industrial STP/ETP maintenance contracts.
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:7356125838"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-[#06182C] font-black text-sm transition-all shadow-xl shadow-cyan-500/20 hover:scale-105 cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Contact Us: 7356125838</span>
              </a>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesList.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                  >
                    <div className="space-y-4">
                      {/* Top Header */}
                      <div className="flex items-center justify-between">
                        <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 group-hover:bg-[#0B192C] group-hover:text-cyan-300 transition-colors">
                          <Icon className="w-7 h-7" />
                        </div>
                        <span className="text-[11px] font-extrabold text-cyan-700 bg-cyan-100/60 px-3 py-1 rounded-full uppercase tracking-wider border border-cyan-200">
                          {service.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-extrabold text-[#0B192C] group-hover:text-cyan-600 transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-slate-600 text-sm leading-relaxed">
                        {service.description}
                      </p>

                      <div className="pt-3 border-t border-slate-100 space-y-2">
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6">
                      <button
                        onClick={() => handleOpenQuote(service.title)}
                        className="w-full py-3 px-4 rounded-xl bg-[#0B192C] hover:bg-slate-800 text-white font-extrabold text-sm transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                      >
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        <span>Book Service / Request Quote</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* AMC Pricing Plans Section */}
        <section id="amc" className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-600">
                ANNUAL MAINTENANCE CONTRACTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] mt-1">
                Choose Your AMC Protection Plan
              </h2>
              <p className="text-slate-600 text-sm mt-3">
                Ensure 365 days of uninterrupted mineral-rich water with zero unexpected repair costs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Plan 1: Basic Care */}
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-md flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Basic Care Plan
                  </span>
                  <h3 className="text-2xl font-black text-[#0B192C] mt-1">Filter Service AMC</h3>
                  <p className="text-xs text-slate-500 mt-2">
                    Ideal for standard municipal water purifiers.
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-200 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 3 Scheduled Maintenance Visits / Year
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Sediment & Pre-Carbon Replacement
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Zero Service & Labor Charges
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Free Doorstep Water TDS Checks
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleOpenQuote("Basic Filter Service AMC")}
                  className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-sm transition-all"
                >
                  Enquire Basic AMC
                </button>
              </div>

              {/* Plan 2: Comprehensive Protection */}
              <div className="bg-[#0B192C] text-white rounded-3xl p-8 border-2 border-cyan-400 shadow-2xl flex flex-col justify-between space-y-6 relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-amber-500 text-slate-950 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                    Comprehensive Care
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1">Total RO Protection AMC</h3>
                  <p className="text-xs text-slate-300 mt-2">
                    Complete peace of mind covering all filters, electrical parts & membrane.
                  </p>
                  <div className="mt-4 pt-4 border-t border-cyan-500/30 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" /> 4 Scheduled Preventive Maintenance Visits
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Free High-Rejection RO Membrane
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Booster Pump & SMPS Electrical Cover
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Unlimited Free Breakdown Calls
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleOpenQuote("Comprehensive Total RO Protection AMC")}
                  className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black rounded-xl text-sm transition-all shadow-lg shadow-amber-500/20"
                >
                  Get Comprehensive AMC Quote
                </button>
              </div>

              {/* Plan 3: Commercial & Industrial */}
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-md flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Commercial & Industrial
                  </span>
                  <h3 className="text-2xl font-black text-[#0B192C] mt-1">Plant AMC & Operator Support</h3>
                  <p className="text-xs text-slate-500 mt-2">
                    For Hotels, Hospitals, STP/ETP Units & Commercial Plants.
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-200 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Monthly Preventive Inspections
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Media Replacement & Backwash Support
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> CPCB Compliance Water Audit
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Dedicated Site Engineer Hotline
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleOpenQuote("Commercial & Industrial Plant AMC")}
                  className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-sm transition-all"
                >
                  Enquire Plant AMC
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Book Doorstep Service Form */}
        <ServiceBookingForm isServiceMode={true} />
      </main>

      <Footer />
      <FloatingActions />

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialProduct={selectedService}
        isServiceMode={true}
      />
    </div>
  );
}
