"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ProductCard from "@/components/ProductCard";
import QuoteModal from "@/components/QuoteModal";
import { PRODUCTS_DATA, Product } from "@/data/products";
import { Filter, CheckCircle2, Sparkles, SlidersHorizontal, ShieldCheck } from "lucide-react";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Products");
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get("category");
      if (catParam) {
        setSelectedCategory(catParam);
      }
    }
  }, []);

  const categories = [
    "All Products",
    "Domestic Purifier",
    "Water Treatment Plant",
    "RO Treatment Plant",
    "Water Cooler",
    "Inverter",
  ];

  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    return (
      selectedCategory === "All" ||
      selectedCategory === "All Products" ||
      product.category === selectedCategory
    );
  });

  const handleOpenQuote = (productName?: string) => {
    setSelectedProduct(productName || "Copper & Alkaline RO Purifier");
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-cyan-500 selection:text-white">
      <Header onOpenQuoteModal={handleOpenQuote} />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="bg-gradient-to-r from-[#06182C] via-[#0B2545] to-[#081C33] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-extrabold uppercase tracking-wider">
              Comprehensive Product Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
              Water Purification Systems & Treatment Plants
            </h1>
            <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
              From compact home RO purifiers to high-capacity industrial treatment plants and commercial water coolers, explore our full range of certified solutions.
            </p>
          </div>
        </section>

        {/* Filter Controls Bar */}
        <section className="bg-white border-b border-slate-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3.5">
            {/* Pill Category Tabs */}
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto w-full py-1 scrollbar-none justify-start md:justify-center flex-nowrap px-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-[#0B3C70] text-white shadow-md shadow-blue-900/20 scale-105"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Product Cards Grid matching Screenshots 1, 2, 3 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
                <p className="text-slate-500 font-medium">No products match your filter criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory("All Products");
                  }}
                  className="mt-4 px-5 py-2 bg-[#00A8CC] text-white font-bold text-xs rounded-full"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onEnquire={handleOpenQuote}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Product Selection Matrix Section matching Screenshot 4 */}
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-[#092540] tracking-tight">
                Product Selection Matrix
              </h2>
              <div className="w-12 h-1 bg-cyan-500 mx-auto mt-2 rounded-full" />
              <p className="text-slate-600 text-xs sm:text-sm mt-3 font-medium">
                Compare water filter attributes to identify which configuration fits your source parameters.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-lg">
              <table className="w-full text-left text-xs sm:text-sm text-slate-700 bg-white">
                <thead className="bg-[#0B3C70] text-white text-xs font-bold uppercase tracking-wider">
                  <tr>
                    <th className="py-4 px-6">Product Model</th>
                    <th className="py-4 px-6">Category</th>
                    <th className="py-4 px-6">Ideal Source Water</th>
                    <th className="py-4 px-6">Max TDS Handle</th>
                    <th className="py-4 px-6">Electricity Needs</th>
                    <th className="py-4 px-6">Reject Water Ratio</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  <tr className="hover:bg-cyan-50/40 transition-colors">
                    <td className="py-4 px-6 font-extrabold text-[#092540]">Blue Mount Elite Black with Smart LED</td>
                    <td className="py-4 px-6">Domestic RO / UF</td>
                    <td className="py-4 px-6">Flexible (Borewell & Municipal)</td>
                    <td className="py-4 px-6 font-bold text-cyan-700">1200 PPM (RO Mode)</td>
                    <td className="py-4 px-6">Yes (RO Mode) / Direct (SN Mode)</td>
                    <td className="py-4 px-6">RO Mode Only (Approx. 55%)</td>
                  </tr>
                  <tr className="hover:bg-cyan-50/40 transition-colors">
                    <td className="py-4 px-6 font-extrabold text-[#092540]">Aqua Pex Lupeeno Alkaline Series (RO + UV + UF + ALK)</td>
                    <td className="py-4 px-6">Domestic Alkaline RO</td>
                    <td className="py-4 px-6">Borewell, Tanker & Municipal Water</td>
                    <td className="py-4 px-6 font-bold text-cyan-700">1800 PPM (High TDS RO)</td>
                    <td className="py-4 px-6">Yes (Standard 230V)</td>
                    <td className="py-4 px-6">Approx. 50%</td>
                  </tr>
                  <tr className="hover:bg-cyan-50/40 transition-colors">
                    <td className="py-4 px-6 font-extrabold text-[#092540]">1st Choice Chrome Copper Smart RO</td>
                    <td className="py-4 px-6">Smart Touch Alkaline RO</td>
                    <td className="py-4 px-6">High TDS Borewell & Municipal</td>
                    <td className="py-4 px-6 font-bold text-cyan-700">1800 PPM (Active Copper RO)</td>
                    <td className="py-4 px-6">Yes (Standard 230V)</td>
                    <td className="py-4 px-6">Approx. 50%</td>
                  </tr>
                  <tr className="hover:bg-cyan-50/40 transition-colors">
                    <td className="py-4 px-6 font-extrabold text-[#092540]">McLord & Organic Series Ai Qua Smart LED (7-Stage RO + Cu + Zc + ALK)</td>
                    <td className="py-4 px-6">7-Stage Smart LED RO</td>
                    <td className="py-4 px-6">High TDS Borewell, Tanker & Municipal</td>
                    <td className="py-4 px-6 font-bold text-cyan-700">2000 PPM (High TDS RO + TDS Controller)</td>
                    <td className="py-4 px-6">Yes (Standard 230V)</td>
                    <td className="py-4 px-6">Approx. 50%</td>
                  </tr>
                  <tr className="hover:bg-cyan-50/40 transition-colors">
                    <td className="py-4 px-6 font-extrabold text-[#092540]">Chrome RO Smart+ (Copper + Alkaline)</td>
                    <td className="py-4 px-6">Domestic RO / Copper + ALK</td>
                    <td className="py-4 px-6">Borewell & Municipal Supply</td>
                    <td className="py-4 px-6 font-bold text-cyan-700">1500 PPM</td>
                    <td className="py-4 px-6">Yes (Standard 230V)</td>
                    <td className="py-4 px-6">Approx. 50%</td>
                  </tr>
                  <tr className="hover:bg-cyan-50/40 transition-colors">
                    <td className="py-4 px-6 font-extrabold text-[#092540]">Wave Krafting Perfection (Black / White Hot & Normal RO)</td>
                    <td className="py-4 px-6">Domestic Hot & Normal RO</td>
                    <td className="py-4 px-6">Borewell & Municipal Supply</td>
                    <td className="py-4 px-6 font-bold text-cyan-700">1500 PPM</td>
                    <td className="py-4 px-6">Yes (RO + Built-in Heater)</td>
                    <td className="py-4 px-6">Approx. 50%</td>
                  </tr>
                  <tr className="hover:bg-cyan-50/40 transition-colors">
                    <td className="py-4 px-6 font-extrabold text-[#092540]">Wave Krystal (Standard & Digital RO)</td>
                    <td className="py-4 px-6">Domestic RO / Digital TDS</td>
                    <td className="py-4 px-6">Borewell & Municipal Supply</td>
                    <td className="py-4 px-6 font-bold text-cyan-700">1800 PPM (Digital Monitor)</td>
                    <td className="py-4 px-6">Yes (Standard 230V)</td>
                    <td className="py-4 px-6">Approx. 50%</td>
                  </tr>
                  <tr className="hover:bg-cyan-50/40 transition-colors">
                    <td className="py-4 px-6 font-extrabold text-[#092540]">Purosis Puroaqua+ (14L Tank RO + ALK)</td>
                    <td className="py-4 px-6">Domestic RO / 14L Tank</td>
                    <td className="py-4 px-6">Borewell & Municipal Supply</td>
                    <td className="py-4 px-6 font-bold text-cyan-700">1500 PPM</td>
                    <td className="py-4 px-6">Yes (Standard 230V)</td>
                    <td className="py-4 px-6">Approx. 50%</td>
                  </tr>
                  <tr className="hover:bg-cyan-50/40 transition-colors">
                    <td className="py-4 px-6 font-extrabold text-[#092540]">Purella Supra+ (ISI Certified RO)</td>
                    <td className="py-4 px-6">Domestic RO / ISI Grade</td>
                    <td className="py-4 px-6">Borewell & Municipal Supply</td>
                    <td className="py-4 px-6 font-bold text-cyan-700">1500 PPM</td>
                    <td className="py-4 px-6">Yes (Standard 230V)</td>
                    <td className="py-4 px-6">Approx. 50%</td>
                  </tr>
                  <tr className="hover:bg-cyan-50/40 transition-colors">
                    <td className="py-4 px-6 font-extrabold text-[#092540]">Aqua Era Shapure Core Series (UV + UF)</td>
                    <td className="py-4 px-6">Domestic UV + UF</td>
                    <td className="py-4 px-6">Corporation / Municipal Supply</td>
                    <td className="py-4 px-6 font-bold text-cyan-700">200 PPM (Low TDS Only)</td>
                    <td className="py-4 px-6">Low Power (UV Lamp Only)</td>
                    <td className="py-4 px-6">0% (Zero Water Waste)</td>
                  </tr>
                  <tr className="hover:bg-cyan-50/40 transition-colors">
                    <td className="py-4 px-6 font-extrabold text-[#092540]">Organic Series CURVV (15L Heavy Metal RO)</td>
                    <td className="py-4 px-6">Domestic RO / 15L Tank</td>
                    <td className="py-4 px-6">High TDS Borewell & Municipal</td>
                    <td className="py-4 px-6 font-bold text-cyan-700">1800 PPM (Heavy Metal RO)</td>
                    <td className="py-4 px-6">Yes (Standard 230V)</td>
                    <td className="py-4 px-6">Approx. 50%</td>
                  </tr>
                  <tr className="hover:bg-cyan-50/40 transition-colors">
                    <td className="py-4 px-6 font-extrabold text-[#092540]">Dolphin Next Generation Black (Alkaline RO)</td>
                    <td className="py-4 px-6">Domestic RO / Smoked Tank</td>
                    <td className="py-4 px-6">Borewell & Municipal Supply</td>
                    <td className="py-4 px-6 font-bold text-cyan-700">1500 PPM</td>
                    <td className="py-4 px-6">Yes (Standard 230V)</td>
                    <td className="py-4 px-6">Approx. 50%</td>
                  </tr>
                  <tr className="hover:bg-cyan-50/40 transition-colors">
                    <td className="py-4 px-6 font-extrabold text-[#092540]">Dolphin Next Generation (UV + UF)</td>
                    <td className="py-4 px-6">Domestic UV + UF</td>
                    <td className="py-4 px-6">Corporation / Municipal Supply</td>
                    <td className="py-4 px-6 font-bold text-cyan-700">200 PPM (Low TDS Only)</td>
                    <td className="py-4 px-6">Low Power (UV Lamp Only)</td>
                    <td className="py-4 px-6">0% (Zero Water Waste)</td>
                  </tr>
                  <tr className="hover:bg-cyan-50/40 transition-colors">
                    <td className="py-4 px-6 font-extrabold text-[#092540]">LX TWO Titanium, Aqua Jade, Aquatec Plus & Aqua Innovica Lavish (UV + UF)</td>
                    <td className="py-4 px-6">Domestic UV + UF</td>
                    <td className="py-4 px-6">Direct Municipal Water Supply</td>
                    <td className="py-4 px-6 font-bold text-cyan-700">250 PPM (Low TDS Municipal Water)</td>
                    <td className="py-4 px-6">Low Power (UV Disinfection)</td>
                    <td className="py-4 px-6">0% (Zero Water Waste)</td>
                  </tr>
                  <tr className="hover:bg-cyan-50/40 transition-colors">
                    <td className="py-4 px-6 font-extrabold text-[#092540]">Wave UTC (Under-Sink RO)</td>
                    <td className="py-4 px-6">Under-Sink UTC RO</td>
                    <td className="py-4 px-6">Modular Kitchen Sinks & Countertops</td>
                    <td className="py-4 px-6 font-bold text-cyan-700">1800 PPM (Hydrostatic Tank)</td>
                    <td className="py-4 px-6">Yes (Standard 230V)</td>
                    <td className="py-4 px-6">Approx. 50%</td>
                  </tr>
                  <tr className="hover:bg-cyan-50/40 transition-colors">
                    <td className="py-4 px-6 font-extrabold text-[#092540]">Blue Mount Crown UTC (Under-Sink RO)</td>
                    <td className="py-4 px-6">Under-Sink UTC RO</td>
                    <td className="py-4 px-6">Modular Kitchen Sinks & Countertops</td>
                    <td className="py-4 px-6 font-bold text-cyan-700">1800 PPM (Silver Shakti)</td>
                    <td className="py-4 px-6">Yes (Standard 230V)</td>
                    <td className="py-4 px-6">Approx. 50%</td>
                  </tr>
                  <tr className="hover:bg-cyan-50/40 transition-colors">
                    <td className="py-4 px-6 font-extrabold text-[#092540]">Aqua X-ilent (Black & White 3-in-1 Copper RO)</td>
                    <td className="py-4 px-6">Domestic RO / 3-in-1 Copper</td>
                    <td className="py-4 px-6">Borewell & Municipal Supply</td>
                    <td className="py-4 px-6 font-bold text-cyan-700">1500 PPM</td>
                    <td className="py-4 px-6">Yes (Standard 230V)</td>
                    <td className="py-4 px-6">Approx. 50%</td>
                  </tr>
                  <tr className="hover:bg-cyan-50/40 transition-colors">
                    <td className="py-4 px-6 font-extrabold text-[#092540]">Aqua Solve Sediment Filter</td>
                    <td className="py-4 px-6">Sediment Filter</td>
                    <td className="py-4 px-6">Turbid / muddy well water</td>
                    <td className="py-4 px-6 font-bold text-cyan-700">Suspended Solids Only</td>
                    <td className="py-4 px-6">No</td>
                    <td className="py-4 px-6">Backwash wash only</td>
                  </tr>
                  <tr className="hover:bg-cyan-50/40 transition-colors">
                    <td className="py-4 px-6 font-extrabold text-[#092540]">Aqua Solve Iron Remover Filter</td>
                    <td className="py-4 px-6">Iron Filter</td>
                    <td className="py-4 px-6">Reddish well water</td>
                    <td className="py-4 px-6 font-bold text-cyan-700">Iron up to 5 PPM</td>
                    <td className="py-4 px-6">No</td>
                    <td className="py-4 px-6">Backwash wash only</td>
                  </tr>
                  <tr className="hover:bg-cyan-50/40 transition-colors">
                    <td className="py-4 px-6 font-extrabold text-[#092540]">Aqua Solve Carbon Filter</td>
                    <td className="py-4 px-6">Carbon Filter</td>
                    <td className="py-4 px-6">Foul odor & chlorine water</td>
                    <td className="py-4 px-6 font-bold text-cyan-700">Organic Impurities</td>
                    <td className="py-4 px-6">No</td>
                    <td className="py-4 px-6">Backwash wash only</td>
                  </tr>
                  <tr className="hover:bg-cyan-50/40 transition-colors">
                    <td className="py-4 px-6 font-extrabold text-[#092540]">Aqua Solve Commercial RO Plant</td>
                    <td className="py-4 px-6">Commercial RO</td>
                    <td className="py-4 px-6">High TDS Borewell / Saline</td>
                    <td className="py-4 px-6 font-bold text-cyan-700">2500+ PPM</td>
                    <td className="py-4 px-6">High Voltage (3-Phase)</td>
                    <td className="py-4 px-6">Approx. 40 - 50%</td>
                  </tr>
                  <tr className="hover:bg-cyan-50/40 transition-colors">
                    <td className="py-4 px-6 font-extrabold text-[#092540]">Ionix 50 LPH Commercial RO Plant</td>
                    <td className="py-4 px-6">Small Commercial RO</td>
                    <td className="py-4 px-6">Clinics, Offices & Large Homes</td>
                    <td className="py-4 px-6 font-bold text-cyan-700">1800 PPM (TDS Controller)</td>
                    <td className="py-4 px-6">Single Phase (230V)</td>
                    <td className="py-4 px-6">Approx. 45%</td>
                  </tr>
                  <tr className="hover:bg-cyan-50/40 transition-colors">
                    <td className="py-4 px-6 font-extrabold text-[#092540]">Aqua Solve STP / ETP Plants</td>
                    <td className="py-4 px-6">Packaged STP / ETP</td>
                    <td className="py-4 px-6">Industrial & Domestic Sewage</td>
                    <td className="py-4 px-6 font-bold text-cyan-700">Unlimited Raw Effluent</td>
                    <td className="py-4 px-6">3-Phase Power Backup</td>
                    <td className="py-4 px-6">Zero Liquid Discharge (ZLD)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialProduct={selectedProduct}
      />
    </div>
  );
}
