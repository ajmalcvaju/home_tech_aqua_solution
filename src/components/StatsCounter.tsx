"use client";

import React, { useState, useEffect, useRef } from "react";
import { Building2, Home, Users, ShieldCheck } from "lucide-react";

export default function StatsCounter() {
  const [counts, setCounts] = useState({
    commercial: 0,
    residential: 0,
    customers: 0,
    purity: 0,
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const targets = {
      commercial: 1000,
      residential: 6900,
      customers: 12000,
      purity: 99.9,
    };

    const duration = 2000;
    let frameId: number;

    const startCounting = () => {
      if (startedRef.current) return;
      startedRef.current = true;

      const startTime = performance.now();

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setCounts({
          commercial: targets.commercial * easeOut,
          residential: targets.residential * easeOut,
          customers: targets.customers * easeOut,
          purity: targets.purity * easeOut,
        });

        if (progress < 1) {
          frameId = requestAnimationFrame(tick);
        } else {
          setCounts(targets);
        }
      };

      frameId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          startCounting();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const fallbackTimer = setTimeout(() => {
      startCounting();
    }, 250);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const stats = [
    {
      display: `${Math.floor(counts.commercial)}+`,
      label: "Commercial Projects",
      icon: Building2,
      desc: "Hotels, Hospitals & Offices",
    },
    {
      display: `${Math.floor(counts.residential)}+`,
      label: "Residential Projects",
      icon: Home,
      desc: "Villas & Apartments",
    },
    {
      display: `${Math.floor(counts.customers).toLocaleString()}+`,
      label: "Happy Customers",
      icon: Users,
      desc: "Trusted Across Kerala",
    },
    {
      display: `${counts.purity.toFixed(1)}%`,
      label: "Purity Guaranteed",
      icon: ShieldCheck,
      desc: "Certified Water Standards",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-r from-[#EDF7FF] via-[#E1F3FE] to-[#D8EFFD] py-8 sm:py-11 border-y border-cyan-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact Elegant Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-600/10 border border-cyan-500/30 text-cyan-800 text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md">
            <span>PROVEN TRACK RECORD</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#092540] mt-2 tracking-tight">
            Trusted Water Solutions Across Kerala
          </h2>
          <div className="w-12 h-1 bg-cyan-500 mx-auto mt-2 rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white px-4 py-4 rounded-2xl border border-cyan-100/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center relative group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#00A8CC] text-white flex items-center justify-center shadow-sm shadow-cyan-500/20 mb-2">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="text-2xl sm:text-3xl font-black text-[#073059] tracking-tight font-mono">
                  {stat.display}
                </div>

                <div className="text-xs sm:text-sm font-extrabold text-[#092540] mt-1">
                  {stat.label}
                </div>

                <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                  {stat.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
