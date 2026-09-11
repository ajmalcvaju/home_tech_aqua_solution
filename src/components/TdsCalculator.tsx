"use client";

import React, { useState } from "react";
import { Sliders, Sparkles, CheckCircle2, ShieldAlert, ArrowRight, Droplets } from "lucide-react";

interface TdsCalculatorProps {
  onOpenQuoteModal?: (customDetail?: string) => void;
}

export default function TdsCalculator({ onOpenQuoteModal }: TdsCalculatorProps) {
  const [tds, setTds] = useState(450);

  // Recommendation logic based on TDS level
  const getRecommendation = (val: number) => {
    if (val <= 200) {
      return {
        badge: "Soft / Low Minerals Water",
        badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
        description: "Municipal or treated corporation water. UV + UF purification is ideal to eliminate bacteria while preserving natural minerals.",
        recommendedModel: "Nice Lite UV + UF Mineral Purifier",
        techDetails: ["UV Disinfection Stage", "Ultra-Filtration Membrane", "Natural Mineral Enhancer"],
      };
    } else if (val <= 750) {
      return {
        badge: "Moderate Hardness / Dissolved Salts",
        badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
        description: "Standard municipal or borewell water. Multi-stage RO with Mineral Booster and TDS Controller is ideal for healthy taste and safety.",
        recommendedModel: "Nice Grand RO + UV + UF + TDS Controller (Copper & Alkaline)",
        techDetails: ["Multi-Stage RO Membrane", "Active Copper Cartridge", "Alkaline pH Balance (7.5-8.5)", "TDS Adjuster"],
      };
    } else if (val <= 1500) {
      return {
        badge: "Hard Borewell / Mineralized Water",
        badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
        description: "High TDS borewell water causing scaling in geysers and pipes. High-pressure RO with automatic anti-scalant or Water Softener pre-filter recommended.",
        recommendedModel: "HomeTech Heavy-Borewell RO + FRP Water Softener Unit",
        techDetails: ["High-Rejection RO Membrane", "Iron & Manganese Pre-Filter", "Food-Grade Resin Hardness Removal"],
      };
    } else {
      return {
        badge: "Brackish Water / Commercial Hardness",
        badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
        description: "Extremely high dissolved solids and brackish salinity. Requires Commercial Skid-Mounted RO Plant or UF/DM De-mineralization Unit.",
        recommendedModel: "HomeTech Commercial Skid-Mounted RO (250 - 2000 LPH)",
        techDetails: ["Heavy Industrial Pumps", "Automatic Backwash Filter", "High-Flow Membrane Array", "CPCB Standards"],
      };
    }
  };

  const rec = getRecommendation(tds);

  return (
    <section className="py-16 bg-gradient-to-b from-[#081829] via-[#0B2238] to-[#081829] text-white relative overflow-hidden">
      {/* Background Glow Overlay */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Droplets className="w-4 h-4" /> Instant TDS Assessment
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Water TDS & Purifier Recommendation
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-amber-400 mx-auto mt-3 mb-4 rounded-full" />
        </div>

        {/* Calculator Main Box */}
        <div className="bg-[#0D2947]/80 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Slider Control */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Sliders className="w-5 h-5 text-cyan-400" />
                Test Your Input Water TDS (PPM)
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Slide to your area's raw water TDS level to get instant purification recommendations from our water engineering team.
              </p>
            </div>

            {/* Live Readout Display */}
            <div className="bg-[#071626] p-6 rounded-2xl border border-slate-700/60 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-300">Input Raw Water Hardness:</span>
              <div className="text-right">
                <span className="text-3xl sm:text-4xl font-black text-cyan-400 tracking-tight">
                  {tds} <span className="text-lg font-bold text-slate-300">PPM</span>
                </span>
              </div>
            </div>

            {/* Slider Track */}
            <div className="space-y-4 pt-2">
              <input
                type="range"
                min="50"
                max="2500"
                step="25"
                value={tds}
                onChange={(e) => setTds(Number(e.target.value))}
                className="w-full h-3 bg-gradient-to-r from-emerald-400 via-cyan-400 via-amber-400 to-red-500 rounded-lg appearance-none cursor-pointer accent-cyan-400 shadow-inner focus:outline-none"
              />

              {/* Ticks & Markers matching reference image 1 */}
              <div className="grid grid-cols-4 text-[11px] font-semibold text-slate-400 text-center">
                <span className={`transition-colors ${tds <= 200 ? "text-emerald-400 font-bold" : ""}`}>
                  50 PPM (Soft)
                </span>
                <span className={`transition-colors ${tds > 200 && tds <= 750 ? "text-cyan-400 font-bold" : ""}`}>
                  500 PPM (Moderate)
                </span>
                <span className={`transition-colors ${tds > 750 && tds <= 1500 ? "text-amber-400 font-bold" : ""}`}>
                  1200 PPM (Hard Borewell)
                </span>
                <span className={`transition-colors ${tds > 1500 ? "text-purple-400 font-bold" : ""}`}>
                  2500 PPM (Brackish)
                </span>
              </div>
            </div>

            {/* Water quality tip */}
            <div className="flex items-start gap-2.5 text-xs text-slate-400 bg-slate-800/40 p-3 rounded-xl border border-slate-700/40">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                Unsure of your exact TDS? Book our <strong className="text-cyan-300">Free Doorstep Water Quality Test</strong> in Calicut & surrounding areas.
              </span>
            </div>
          </div>

          {/* Right Column: Dynamic Recommendation Panel matching image 1 */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#0A3258] to-[#07223D] p-6 sm:p-8 rounded-2xl border border-cyan-400/30 flex flex-col justify-between shadow-lg relative">
            <div className="space-y-4">
              {/* Category Badge */}
              <div className="inline-block">
                <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border shadow-sm ${rec.badgeColor}`}>
                  {rec.badge}
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-200 text-sm leading-relaxed font-medium">
                {rec.description}
              </p>

              {/* Recommended Model Title */}
              <div className="pt-2">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-1">
                  Engineered Recommendation:
                </span>
                <h4 className="text-xl font-black text-cyan-300 leading-snug">
                  {rec.recommendedModel}
                </h4>
              </div>

              {/* Tech Highlights */}
              <div className="pt-2 space-y-2">
                {rec.techDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button
                onClick={() =>
                  onOpenQuoteModal
                    ? onOpenQuoteModal(`TDS Level: ${tds} PPM - Model: ${rec.recommendedModel}`)
                    : window.open(
                        `https://wa.me/919778031990?text=Hi%20HomeTech,%20my%20water%20TDS%20is%20around%20${tds}%20PPM.%20Please%20send%20a%20quote%20for%20${encodeURIComponent(
                          rec.recommendedModel
                        )}`,
                        "_blank"
                      )
                }
                className="w-full py-3.5 px-6 rounded-xl font-extrabold text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Get Free Quote for This TDS Level</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
