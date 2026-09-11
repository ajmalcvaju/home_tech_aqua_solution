"use client";
import React from "react";

interface BrandLogoProps {
  className?: string;
  lightMode?: boolean;
}

export default function BrandLogo({ className = "h-14", lightMode = false }: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <img
        src="/logo.jpg"
        alt="HomeTech Water Purifier Logo"
        className="h-full w-auto object-contain rounded-sm"
      />
    </div>
  );
}
