"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import QuoteModal from "@/components/QuoteModal";
import { PRODUCTS_DATA, Product } from "@/data/products";
import { Check, MessageCircle, Phone, ArrowLeft, ShieldCheck, Droplet, Sparkles } from "lucide-react";

// Helper function to calculate discount percentage
function getDiscountPercentage(priceStr?: string, mrpStr?: string): string | null {
  if (!priceStr || !mrpStr) return null;
  const priceNum = parseInt(priceStr.replace(/[^0-9]/g, ""), 10);
  const mrpNum = parseInt(mrpStr.replace(/[^0-9]/g, ""), 10);
  if (isNaN(priceNum) || isNaN(mrpNum) || mrpNum <= priceNum) return null;
  const percent = Math.round(((mrpNum - priceNum) / mrpNum) * 100);
  return `SAVE ${percent}%`;
}

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params?.id as string;
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProductName, setSelectedProductName] = useState("");

  const product = PRODUCTS_DATA.find((p) => p.id === productId) || PRODUCTS_DATA[0];

  // Get related products from the same category or overall catalog (excluding current product)
  const relatedProducts = PRODUCTS_DATA.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.category === "Domestic Purifier")
  ).slice(0, 4);

  const discountBadge = getDiscountPercentage(product.price, product.mrp);

  const handleOpenQuote = (name?: string) => {
    setSelectedProductName(name || product.name);
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-cyan-500 selection:text-white">
      <Header onOpenQuoteModal={handleOpenQuote} />

      <main className="flex-1">
        {/* Top Dark Navy Header Banner matching Screenshot 1 */}
        <section className="bg-gradient-to-r from-[#031527] via-[#0B3C70] to-[#005596] text-white py-14 px-4 sm:px-6 lg:px-8 text-center shadow-inner">
          <div className="max-w-4xl mx-auto space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight drop-shadow-sm">
              {product.name}
            </h1>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-cyan-200 mt-2 font-medium flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/products" className="hover:text-white transition-colors">
                Products
              </Link>
              <span>/</span>
              <span className="text-white font-semibold line-clamp-1">{product.name}</span>
            </div>
          </div>
        </section>

        {/* Main Product Card Container matching Screenshot 2 */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10 pb-16">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Product Image Container matching Screenshot 2 */}
            <div className="lg:col-span-5 bg-[#F8FAFC] border border-slate-200/60 rounded-2xl p-6 sm:p-8 flex items-center justify-center min-h-[360px] sm:min-h-[440px] shadow-inner relative group">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-[340px] sm:max-h-[380px] w-auto object-contain mx-auto transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Right Column: Product Specs & Actions matching Screenshot 2 */}
            <div className="lg:col-span-7 space-y-6">
              {/* Top Category & Edition Badges matching Screenshot 2 */}
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="bg-cyan-100/80 border border-cyan-200/80 text-cyan-700 font-extrabold text-[11px] sm:text-xs px-3.5 py-1 rounded-md uppercase tracking-wider">
                  {product.category}
                </span>
                <span className="bg-[#0096C7] text-white font-extrabold text-[11px] sm:text-xs px-3.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
                  {product.badge || "DELUXE EDITION"}
                </span>
              </div>

              {/* Main Product Title matching Screenshot 2 */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B192C] leading-tight">
                {product.name}
              </h2>

              {/* Green Price Container Box matching Screenshot 2 */}
              <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-2xl p-4 sm:p-5 flex items-center gap-4 flex-wrap">
                <span className="text-2xl sm:text-3xl font-black text-[#10B981]">
                  {product.price || "Get Quote"}
                </span>
                {product.mrp && (
                  <span className="text-base sm:text-lg font-bold text-slate-400 line-through">
                    {product.mrp.startsWith("₹") ? product.mrp : `₹${product.mrp}`}
                  </span>
                )}
                {discountBadge && (
                  <span className="bg-[#10B981] text-white font-black text-xs px-3 py-1 rounded-md uppercase tracking-wider shadow-sm ml-auto">
                    {discountBadge}
                  </span>
                )}
              </div>

              {/* Description Paragraph matching Screenshot 2 */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                {product.description}
              </p>

              {/* SYSTEM SPECIFICATIONS section matching Screenshot 2 */}
              <div className="pt-3 border-t border-slate-100 space-y-4">
                <h3 className="text-xs sm:text-sm font-black text-[#0B192C] uppercase tracking-wider">
                  SYSTEM SPECIFICATIONS
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5 stroke-[3]" />
                    <span>{product.specs.capacity} Storage Tank</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5 stroke-[3]" />
                    <span>{product.specs.technology}</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5 stroke-[3]" />
                    <span>{product.specs.warranty}</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5 stroke-[3]" />
                    <span>Ideal for {product.specs.idealFor}</span>
                  </div>
                  {product.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5 stroke-[3]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp & Call Buttons matching Screenshot 2 */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={`https://wa.me/919061548607?text=${encodeURIComponent(
                    `Hi HomeTech Aqua Solutions, I am interested in ${product.name} (${product.price || ""}). Please provide more details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#10B981] hover:bg-[#059669] text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2.5 cursor-pointer active:scale-95 flex-1"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Inquiry</span>
                </a>

                <a
                  href="tel:+919061548607"
                  className="bg-[#0077B6] hover:bg-[#023E8A] text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2.5 cursor-pointer active:scale-95 flex-1"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>Call +91 90615 48607</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Water Systems Section matching Screenshot 3 */}
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C] text-center mb-10 tracking-tight">
              Related Water Systems
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProduct) => {
                const relDiscount = getDiscountPercentage(relProduct.price, relProduct.mrp);
                return (
                  <div
                    key={relProduct.id}
                    className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Badges Row matching Screenshot 3 */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="bg-cyan-100/80 text-cyan-700 font-extrabold text-[10px] px-2.5 py-0.5 rounded-md uppercase tracking-wider border border-cyan-200/60">
                          {relProduct.category}
                        </span>
                        {relDiscount && (
                          <span className="bg-[#0096C7] text-white font-extrabold text-[10px] px-2.5 py-0.5 rounded-md uppercase tracking-wider shadow-sm">
                            {relDiscount}
                          </span>
                        )}
                      </div>

                      {/* Product Image Container matching Screenshot 3 */}
                      <div className="bg-[#F8FAFC] rounded-xl p-4 h-48 flex items-center justify-center mb-4 border border-slate-100">
                        <img
                          src={relProduct.image}
                          alt={relProduct.name}
                          className="max-h-40 w-auto object-contain mx-auto group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Product Title matching Screenshot 3 */}
                      <h3 className="text-sm font-extrabold text-[#0B192C] text-center line-clamp-2 leading-snug mb-3 group-hover:text-cyan-600 transition-colors">
                        {relProduct.name}
                      </h3>
                    </div>

                    {/* Price & View Button Container matching Screenshot 3 */}
                    <div className="text-center pt-3 border-t border-slate-100 space-y-3">
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-base font-black text-[#10B981]">
                          {relProduct.price || "Get Quote"}
                        </span>
                        {relProduct.mrp && (
                          <span className="text-xs font-semibold text-slate-400 line-through">
                            {relProduct.mrp.startsWith("₹") ? relProduct.mrp : `₹${relProduct.mrp}`}
                          </span>
                        )}
                      </div>

                      <Link
                        href={`/products/${relProduct.id}`}
                        className="w-full inline-flex items-center justify-center gap-1 bg-slate-900 hover:bg-[#0096C7] text-white text-xs font-bold py-2.5 rounded-xl transition-colors cursor-pointer"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} initialProduct={selectedProductName} />
    </div>
  );
}
