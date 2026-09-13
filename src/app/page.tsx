"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import TdsCalculator from "@/components/TdsCalculator";
import ProductCard from "@/components/ProductCard";
import StatsCounter from "@/components/StatsCounter";
import Testimonials from "@/components/Testimonials";
import ServiceBookingForm from "@/components/ServiceBookingForm";
import QuoteModal from "@/components/QuoteModal";
import { PRODUCTS_DATA } from "@/data/products";
import { ShieldCheck, Droplets, Sparkles, ArrowRight, Award, Clock, Activity, Star, Zap, CheckCircle2 } from "lucide-react";

export default function HomePage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const featuredProductIds = [
    "flonix-relax-black-copper-ro",
    "organic-curvv-zinc-copper-ro",
    "sarwans-wave-krystal-ro",
    "blue-mount-aura-white-blue",
  ];

  const featuredProducts = PRODUCTS_DATA.filter((p) => featuredProductIds.includes(p.id)).sort(
    (a, b) => featuredProductIds.indexOf(a.id) - featuredProductIds.indexOf(b.id)
  );
  const [selectedProduct, setSelectedProduct] = useState("");
  const [activeTab, setActiveTab] = useState<"residential" | "commercial" | "inverter">("residential");
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartPos, setTouchStartPos] = useState<{ x: number; y: number } | null>(null);

  const tabs: Array<"residential" | "commercial" | "inverter"> = ["residential", "commercial", "inverter"];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = tabs.indexOf(prev);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    if (e.touches && e.touches[0]) {
      setTouchStartPos({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      });
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsPaused(false);
    if (!touchStartPos || !e.changedTouches || !e.changedTouches[0]) return;

    const touchEndObj = e.changedTouches[0];
    const deltaX = touchEndObj.clientX - touchStartPos.x;
    const deltaY = touchEndObj.clientY - touchStartPos.y;

    // Minimum 35px horizontal swipe distance & horizontal > vertical to allow page scrolling
    if (Math.abs(deltaX) > 35 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        // Swiped Left -> Move to Next Slide
        setActiveTab((prev) => {
          const currentIndex = tabs.indexOf(prev);
          return tabs[(currentIndex + 1) % tabs.length];
        });
      } else {
        // Swiped Right -> Move to Previous Slide
        setActiveTab((prev) => {
          const currentIndex = tabs.indexOf(prev);
          return tabs[(currentIndex - 1 + tabs.length) % tabs.length];
        });
      }
    }
    setTouchStartPos(null);
  };

  const handleOpenQuote = (productName?: string) => {
    setSelectedProduct(productName || "Copper & Alkaline RO Purifier");
    setIsQuoteOpen(true);
  };

  const heroDetails = {
    residential: {
      badge: "Smart Home RO + UV + Copper",
      title: "Pure Drinking Water for Your Family",
      desc: "Eliminates 99.9% TDS, heavy metals & bacteria while enriching water with copper & alkaline minerals.",
      highlight: "15 LPH Flow | Active Copper Cartridge",
      image: "/hero_family_purifier.png",
      alt: "Happy family enjoying pure water from HomeTech water purifier",
      badgeTitle: "Certified Water Guarantee",
      badgeSub: "Genuine authorized spare parts only",
    },
    commercial: {
      badge: "Commercial RO Plants (250 - 2000 LPH)",
      title: "High-Capacity Purifiers for Businesses",
      desc: "Skid-mounted commercial RO systems for hotels, hospitals, clinics, and offices across Kerala.",
      highlight: "Stainless Steel Skid | Continuous TDS Monitor",
      image: "/hero_commercial_ro_plant.jpg",
      alt: "High-capacity commercial industrial RO water treatment plant with digital monitoring",
      badgeTitle: "Industrial RO Technology",
      badgeSub: "Continuous TDS & Flow Monitor",
    },
    inverter: {
      badge: "Pure Sine Wave Inverters & Li-Ion Batteries",
      title: "Uninterrupted Power Backup Solutions",
      desc: "High-capacity smart inverters and lithium/tubular batteries for homes, offices, and heavy commercial loads.",
      highlight: "Pure Sine Wave | Long Backup Warranty",
      image: "/hero_inverter_backup.png",
      alt: "Family enjoying uninterrupted power backup in home with smart inverter",
      badgeTitle: "Pure Sine Wave Power",
      badgeSub: "Up to 84 Months Comprehensive Warranty",
    },
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-cyan-500 selection:text-white">
      <Header onOpenQuoteModal={handleOpenQuote} />

      <main className="flex-1">
        {/* COMPACT ULTRA-ELEGANT HERO SECTION WITH AUTO-SLIDE & TOUCH SWIPE */}
        <section
          className="relative bg-gradient-to-r from-[#041527] via-[#092847] to-[#0E3A68] text-white py-10 lg:py-14 overflow-hidden touch-pan-y"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={() => {
            setIsPaused(false);
            setTouchStartPos(null);
          }}
        >
          {/* Animated Background Water Particle Orbs */}
          <div className="absolute top-1/4 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute bottom-5 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Quick Segment Switcher Bar */}
            <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-1 scrollbar-none">
              <button
                onClick={() => setActiveTab("residential")}
                className={`px-3.5 py-1 rounded-full text-[11px] font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
                  activeTab === "residential"
                    ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30 scale-105"
                    : "bg-white/10 text-slate-300 hover:bg-white/20"
                }`}
              >
                <Zap className="w-3 h-3" /> Residential RO
              </button>
              <button
                onClick={() => setActiveTab("commercial")}
                className={`px-3.5 py-1 rounded-full text-[11px] font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
                  activeTab === "commercial"
                    ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30 scale-105"
                    : "bg-white/10 text-slate-300 hover:bg-white/20"
                }`}
              >
                <Activity className="w-3 h-3" /> Commercial Plants
              </button>
              <button
                onClick={() => setActiveTab("inverter")}
                className={`px-3.5 py-1 rounded-full text-[11px] font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
                  activeTab === "inverter"
                    ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30 scale-105"
                    : "bg-white/10 text-slate-300 hover:bg-white/20"
                }`}
              >
                <Zap className="w-3 h-3" /> Inverter & Battery
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Hero Left Content */}
              <div className="lg:col-span-6 space-y-3.5 text-left">
                {/* Dynamic Category Tag */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md">
                  <Droplets className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
                  <span>{heroDetails[activeTab].badge}</span>
                </div>

                {/* Main Compact Headline */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-snug text-white">
                  New Professional <br />
                  <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-amber-300 bg-clip-text text-transparent">
                    {heroDetails[activeTab].title}
                  </span>
                </h1>

                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed max-w-lg font-normal opacity-90">
                  {heroDetails[activeTab].desc}
                </p>

                {/* Highlight Feature Pill */}
                <div className="inline-flex items-center gap-1.5 bg-slate-900/80 px-3 py-1 rounded-lg border border-cyan-500/30 text-[11px] text-cyan-300 font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{heroDetails[activeTab].highlight}</span>
                </div>

                {/* Golden Compact CTA Buttons */}
                <div className="pt-1 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => handleOpenQuote()}
                    className="relative overflow-hidden group px-6 py-2.5 bg-gradient-to-r from-[#D4AF37] via-[#E2A85C] to-[#C59B27] hover:from-[#E2A85C] hover:to-[#B38A1F] text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] cursor-pointer border border-amber-300/60"
                  >
                    <span className="relative z-10 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>GET A QUOTE</span>
                    </span>
                    <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </button>

                  <Link
                    href="#booking"
                    className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/20 backdrop-blur-md transition-all flex items-center gap-1.5 shadow"
                  >
                    <span>Free Doorstep Test</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-300" />
                  </Link>
                </div>

                {/* Compact Key Benefit Highlights */}
                <div className="pt-2 grid grid-cols-3 gap-2 max-w-md border-t border-cyan-400/20">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Certified Quality</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
                    <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>99.9% Purity</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>24-Hr Support</span>
                  </div>
                </div>
              </div>

              {/* Hero Right Visual Presentation */}
              <div className="lg:col-span-6 relative flex justify-center items-center">
                <div className="relative w-full max-w-lg animate-hero-slide-up">
                  {/* Glowing background aura */}
                  <div className="absolute -inset-4 bg-gradient-to-t from-cyan-400/25 via-blue-500/15 to-transparent rounded-[36px] blur-2xl pointer-events-none" />

                  {/* Main Lifestyle Image Box */}
                  <div className="relative rounded-[28px] overflow-hidden shadow-2xl border border-white/10 bg-slate-900 group">
                    <img
                      src={heroDetails[activeTab].image}
                      alt={heroDetails[activeTab].alt}
                      className="w-full h-auto max-h-[480px] sm:max-h-[520px] object-cover mx-auto group-hover:scale-[1.02] transition-all duration-500"
                    />

                    {/* Floating Warranty Pill Badge matching exact reference image design */}
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md text-slate-900 p-3 sm:p-3.5 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-3 max-w-[260px] sm:max-w-xs animate-hero-float">
                      <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-black text-slate-900 leading-tight">
                          {heroDetails[activeTab].badgeTitle}
                        </h4>
                        <p className="text-[10px] font-semibold text-slate-500 mt-0.5">
                          {heroDetails[activeTab].badgeSub}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Water Splash Wave SVG Overlay */}
          <div className="w-full overflow-hidden leading-none absolute bottom-0 left-0 right-0 pointer-events-none opacity-40">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="relative block w-full h-8 text-cyan-950 fill-current"
            >
              <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z" />
            </svg>
          </div>
        </section>

        {/* OUR FEATURED PRODUCTS SECTION */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-600">
                BESTSELLERS & TOP RATED
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight mt-1">
                Featured Products
              </h2>
              <p className="text-slate-600 text-sm mt-2 font-medium">
                Explore Kerala&apos;s most trusted multi-stage Copper, Zinc & Alkaline RO water purifiers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onEnquire={handleOpenQuote} />
              ))}
            </div>
          </div>
        </section>

        {/* INTERACTIVE TDS CALCULATOR SECTION */}
        <TdsCalculator onOpenQuoteModal={handleOpenQuote} />

        {/* PRODUCT CATEGORIES SHOWCASE SECTION matching user preference */}
        <section className="py-20 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-600">
                OUR PRODUCTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092540] tracking-tight mt-1">
                Product Categories
              </h2>
              <div className="w-12 h-1 bg-cyan-500 mx-auto mt-2.5 rounded-full" />
              <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed max-w-xl mx-auto font-medium">
                Purification systems and power backup solutions for every need. Explore our main product categories below.
              </p>
            </div>

            {/* Product Category Cards Grid - 5 Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {[
                {
                  id: "domestic-purifier",
                  name: "Domestic Purifier",
                  subtitle: "Multi-Stage RO + UV + UF, Copper & Alkaline Purifiers",
                  badge: "Residential",
                  image: "/domestic_purifier_category.png",
                  count: "30+ Models",
                },
                {
                  id: "water-treatment-plant",
                  name: "Water Treatment Plant",
                  subtitle: "FRP Vessel Sand, Sediment, Carbon & Iron Remover Filters",
                  badge: "Water Filtration",
                  image: "/aqua_solve_blue_vessel.png",
                  count: "Custom Vessel",
                },
                {
                  id: "ro-treatment-plant",
                  name: "RO Treatment Plant",
                  subtitle: "Commercial & Industrial High-Flow RO Plants (50-5000 LPH)",
                  badge: "Commercial RO",
                  image: "/ro_treatment_plant_skid.png",
                  count: "Skid Mounted",
                },
                {
                  id: "water-cooler",
                  name: "Water Cooler",
                  subtitle: "Food-Grade SS 304 Stainless Steel Normal & Cold Dispensers",
                  badge: "Commercial Cooler",
                  image: "/water_cooler_ss304.png",
                  count: "Dual Tap Chiller",
                },
                {
                  id: "inverter",
                  name: "Inverter",
                  subtitle: "Smart Pure Sine Wave Home Inverters & UPS Systems",
                  badge: "Power Backup",
                  image: "/inverter_category.jpg",
                  count: "Sine Wave UPS",
                },
              ].map((cat) => (
                <Link
                  key={cat.id}
                  href={`/products?category=${encodeURIComponent(cat.name)}`}
                  className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group h-full relative cursor-pointer hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="bg-[#E3F2FD] border border-[#BBDEFB] text-[#0277BD] text-[10px] font-black px-3 py-1 rounded-xl uppercase tracking-wider">
                        {cat.badge}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400">
                        {cat.count}
                      </span>
                    </div>

                    <div className="h-44 w-full flex items-center justify-center p-2 rounded-2xl bg-slate-50/50 my-2">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="max-h-40 w-auto object-contain mx-auto transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <h3 className="text-lg font-black text-[#0B1E36] text-center leading-snug my-2 group-hover:text-[#009FE3] transition-colors">
                      {cat.name}
                    </h3>

                    <p className="text-xs text-slate-500 text-center font-medium leading-relaxed mb-4 line-clamp-2">
                      {cat.subtitle}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-center">
                    <span className="w-full bg-[#009FE3] group-hover:bg-[#0088C7] text-white text-xs font-extrabold py-2.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5">
                      <span>Explore Category</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* KEY METRICS COUNTER SECTION */}
        <StatsCounter />

        {/* TESTIMONIALS SECTION */}
        <Testimonials />

        {/* BOOK A SERVICE SECTION */}
        <ServiceBookingForm />
      </main>

      <Footer />
      <FloatingActions />

      {/* Interactive Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialProduct={selectedProduct}
      />
    </div>
  );
}
