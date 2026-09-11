"use client";

import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onEnquire?: (productName: string) => void;
}

export default function ProductCard({ product, onEnquire }: ProductCardProps) {
  // Category display helper label
  const categoryLabel = product.category.toUpperCase();

  const handleInquire = () => {
    if (onEnquire) {
      onEnquire(product.name);
    }

    const text = [
      `Hi HomeTech Aqua Solutions,`,
      ``,
      `I am interested in inquiring about this product:`,
      `📦 *Product:* ${product.name}`,
      `🏷️ *Category:* ${product.category}`,
      `💰 *Price:* ${product.price || "Contact for Quote"}`,
      product.mrp ? `🏷️ *MRP:* ${product.mrp}` : null,
      ``,
      `✨ *Key Features:*`,
      ...product.highlights.map((h) => `• ${h}`),
      ``,
      `Please share availability and best price details.`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`https://wa.me/919061548607?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full relative">
      <div>
        {/* Top Badges Row matching exact reference screenshot */}
        <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
          {/* Left Category Light Cyan Pill */}
          <span className="bg-[#E3F2FD] border border-[#BBDEFB] text-[#0277BD] text-[10px] sm:text-[11px] font-black px-3 py-1.5 rounded-xl uppercase tracking-wider text-center">
            {categoryLabel}
          </span>

          {/* Right Filled Bright Blue Edition Badge */}
          <span className="bg-[#009FE3] text-white text-[10px] sm:text-[11px] font-black px-3.5 py-1.5 rounded-xl uppercase tracking-wider shadow-sm text-center">
            {product.badge || "SPECIAL OFFER"}
          </span>
        </div>

        {/* Center Product Image Box matching reference */}
        <Link
          href={`/products/${product.id}`}
          className="block my-3 cursor-pointer"
        >
          <div className="h-52 sm:h-56 w-full flex items-center justify-center p-2 rounded-2xl bg-slate-50/50">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-48 sm:max-h-52 w-auto object-contain mx-auto transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>

        {/* Product Title */}
        <Link href={`/products/${product.id}`} className="block group">
          <h3 className="text-base sm:text-lg font-extrabold text-[#0B1E36] text-center leading-snug my-3 group-hover:text-[#009FE3] transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Key Highlights Checklist with Green Checkmarks */}
        <div className="space-y-2 my-4 px-1">
          {product.highlights.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 font-medium leading-tight">
              <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 stroke-[2.5]" />
              <span className="line-clamp-2">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Price & Inquire Action Row */}
      <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between gap-2">
        <div className="flex items-baseline gap-1.5 flex-wrap">
          <span className="text-xl sm:text-2xl font-black text-[#0B3C70] tracking-tight">
            {product.price || "Get Quote"}
          </span>
          {product.mrp && (
            <span className="text-xs font-semibold text-slate-400 line-through">
              {product.mrp}
            </span>
          )}
        </div>

        <button
          onClick={handleInquire}
          className="bg-[#009FE3] hover:bg-[#0088C7] text-white text-xs sm:text-sm font-extrabold px-5 py-2.5 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer shrink-0"
        >
          Inquire
        </button>
      </div>
    </div>
  );
}
