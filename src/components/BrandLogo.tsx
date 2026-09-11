"use client";
import React from "react";

interface BrandLogoProps {
  className?: string;
  lightMode?: boolean;
}

export default function BrandLogo({ className = "h-11", lightMode = false }: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <img
        src="/logo.jpg"
        alt="HomeTech Water Purifier Logo"
        className="h-full w-auto max-h-12 object-contain rounded-sm"
      />
    </div>
  );
}
