"use client";

import React, { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Salman",
      role: "DOCTOR",
      rating: 5,
      quote:
        "Thank you for the quick response. I want to let you know that I really appreciate the great customer assistance at HomeTech Aqua Solutions. The water taste and mineral balance in our hospital clinic has been exceptional!",
      cardBg: "bg-[#00A8CC] text-white",
      starColor: "text-amber-300 fill-amber-300",
    },
    {
      name: "Raheem",
      role: "BUSINESSMAN",
      rating: 5,
      quote:
        "I appreciate how quickly you resolved the problem for me. We installed a 500 LPH Commercial RO plant for our hotel and the zero-maintenance performance has exceeded our expectations. I will definitely be recommending your company to my friends.",
      cardBg: "bg-[#073A75] text-white",
      starColor: "text-amber-300 fill-amber-300",
    },
    {
      name: "Anjali Menon",
      role: "VILLA OWNER, CALICUT",
      rating: 5,
      quote:
        "Our borewell water had severe iron stains and high TDS. HomeTech installed an FRP Iron Removal Unit + Water Softener. Within 48 hours, water clarity returned and scale build-up disappeared completely!",
      cardBg: "bg-[#061C33] text-white border border-cyan-500/20",
      starColor: "text-amber-400 fill-amber-400",
    },
    {
      name: "Rajesh Kumar",
      role: "SCHOOL ADMINISTRATOR",
      rating: 5,
      quote:
        "The doorstep water quality test was completely free and super informative. Their engineering team suggested the exact alkaline RO model suited for 400+ students. Maintenance support is outstanding.",
      cardBg: "bg-[#024B66] text-white border border-cyan-400/20",
      starColor: "text-amber-400 fill-amber-400",
    },
    {
      name: "Faisal K.V.",
      role: "RESTAURANT OWNER",
      rating: 5,
      quote:
        "Installed HomeTech commercial RO water cooler in our main dining space. Fast chilling, pure tasting water, and zero complaints from staff or guests. Highly recommended!",
      cardBg: "bg-[#0052A3] text-white",
      starColor: "text-amber-300 fill-amber-300",
    },
    {
      name: "Dr. Lakshmi Nair",
      role: "CLINIC DIRECTOR",
      rating: 5,
      quote:
        "Clean, mineralized alkaline water is essential for our medical facility. HomeTech's prompt installation and 5-year free service guarantee make them the top choice in Kerala.",
      cardBg: "bg-[#008BB0] text-white",
      starColor: "text-amber-300 fill-amber-300",
    },
  ];

  // Group testimonials into pairs (2 per slide)
  const slides = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    slides.push(testimonials.slice(i, i + 2));
  }

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto scroll effect every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [slides.length, isPaused]);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header matching reference screenshot */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-[#092540] tracking-tight">
            Testimonials
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto mt-2.5 rounded-full" />
          <p className="text-slate-600 text-xs sm:text-sm mt-3 font-medium">
            Read what doctors, business owners, and homeowners say about our water purity solutions.
          </p>
        </div>

        {/* Carousel Container (2 per row auto-scrolling) */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {slides.map((pair, slideIdx) => (
                <div
                  key={slideIdx}
                  className="w-full shrink-0 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-1"
                >
                  {pair.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 min-h-[260px] ${item.cardBg}`}
                    >
                      {/* Decorative background quote mark */}
                      <Quote className="w-16 h-16 absolute top-6 right-6 opacity-20" />

                      <div className="space-y-4 relative z-10">
                        <div className="space-y-1">
                          <h3 className="text-2xl font-black">{item.name}</h3>
                          <p className="text-xs uppercase tracking-widest opacity-80 font-bold">
                            {item.role}
                          </p>
                        </div>

                        {/* Rating Stars */}
                        <div className="flex items-center gap-1">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className={`w-5 h-5 ${item.starColor}`} />
                          ))}
                        </div>

                        {/* Quote Content */}
                        <p className="italic text-sm sm:text-base leading-relaxed opacity-95 pt-2">
                          &quot;{item.quote}&quot;
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 flex items-center justify-between max-w-xs mx-auto">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonials"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:bg-cyan-500 hover:text-white transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Slide Indicators */}
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`transition-all duration-300 cursor-pointer ${
                    activeSlide === i
                      ? "w-8 h-2.5 rounded-full bg-[#00A8CC]"
                      : "w-2.5 h-2.5 rounded-full bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next testimonials"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:bg-cyan-500 hover:text-white transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
