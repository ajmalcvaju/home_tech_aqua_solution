"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import QuoteModal from "@/components/QuoteModal";
import StatsCounter from "@/components/StatsCounter";
import { ShieldCheck, Award, Users, CheckCircle2, Droplets, Target, Sparkles, MapPin } from "lucide-react";

export default function AboutPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-cyan-500 selection:text-white">
      <Header onOpenQuoteModal={() => setIsQuoteOpen(true)} />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="bg-gradient-to-r from-[#06182C] via-[#0B2545] to-[#081C33] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-extrabold uppercase tracking-wider">
              About HomeTech Aqua Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
              Ensuring Purity for Every Home & Enterprise
            </h1>
            <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
              We are a premier water engineering and purification company based in Calicut, providing certified domestic purifiers, commercial RO plants, and wastewater treatment solutions.
            </p>
          </div>
        </section>

        {/* Story & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-600">
                  OUR MISSION & VISION
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C]">
                  Pure water, healthier lives, and sustainable engineering
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Founded with a vision to eliminate water contamination issues in borewells, wells, and municipal supplies across Kerala, HomeTech Aqua Solutions brings state-of-the-art multi-stage RO, UV, UF, Copper & Alkaline technology right to your doorstep.
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Whether it is stripping high TDS and iron from hard borewell water in residential villas or commissioning CPCB-compliant packaged STP/ETP units for commercial complexes, our certified engineering team delivers zero-compromise purity.
                </p>

                <div className="pt-2 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-200">
                    <h4 className="text-lg font-bold text-cyan-900">Genuine Parts</h4>
                    <p className="text-xs text-slate-600 mt-1">100% authorized membranes, pumps, and media filters.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                    <h4 className="text-lg font-bold text-emerald-900">Expert Support</h4>
                    <p className="text-xs text-slate-600 mt-1">Prompt technician visits & comprehensive AMC support.</p>
                  </div>
                </div>
              </div>

              {/* Right Image Container - Exact user attached engineering image */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
                  <img
                    src="/about_engineering.png"
                    alt="HomeTech Sustainable Water Engineering Team"
                    className="w-full h-80 sm:h-96 object-cover mx-auto group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Badge */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
                    <div>
                      <h4 className="text-xs font-black text-slate-900">Sustainable Engineering</h4>
                      <p className="text-[10px] text-slate-500 font-semibold">Certified Engineers & CPCB Compliance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4-Step Workflow Section */}
        <section className="py-20 bg-slate-100/70 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-600">
                HOW WE WORK
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] mt-1">
                Our 4-Step Doorstep Service Process
              </h2>
              <p className="text-slate-600 text-sm mt-3">
                Seamless, transparent, and hassle-free water quality optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Doorstep Water Test",
                  desc: "Our technician visits your location to measure TDS, hardness, pH, and iron levels.",
                },
                {
                  step: "02",
                  title: "Custom Solution",
                  desc: "We recommend the precise RO, Softener, or Iron filter model tailored to your water report.",
                },
                {
                  step: "03",
                  title: "Expert Installation",
                  desc: "Trained technicians install the system cleanly with pressure testing & mineral balancing.",
                },
                {
                  step: "04",
                  title: "Ongoing AMC Care",
                  desc: "Scheduled filter changes, emergency breakdown visits, and dedicated service support.",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md relative">
                  <span className="text-4xl font-black text-cyan-500/20 absolute top-4 right-6">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-extrabold text-[#0B192C] mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <StatsCounter />
      </main>

      <Footer />
      <FloatingActions />

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}
