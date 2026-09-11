"use client";
import React from "react";

interface BrandLogoProps {
  className?: string;
  lightMode?: boolean;
}

export default function BrandLogo({ className = "h-11", lightMode = false }: BrandLogoProps) {
  const textColor = lightMode ? "#FFFFFF" : "#0B192C";
  const subTextColor = lightMode ? "#38BDF8" : "#00A8CC";

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* SVG Icon matching exact logo shape */}
      <svg
        viewBox="0 0 160 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto drop-shadow-sm"
      >
        {/* Left H Bar */}
        <path
          d="M 12 40 L 38 32 L 38 126 L 12 126 Z"
          fill={lightMode ? "#FFFFFF" : "#0B192C"}
        />
        {/* Right H / T Bar */}
        <path
          d="M 44 48 L 96 32 L 96 14 L 105 11 L 105 64 L 78 64 L 78 126 L 44 126 Z"
          fill="#00C4DF"
        />
        {/* Top T Bar Slope */}
        <path
          d="M 12 40 L 96 14 L 96 40 L 40 54 L 40 126 L 12 126 Z"
          fill={lightMode ? "#FFFFFF" : "#0B192C"}
        />
        {/* Center Water Drop inside Icon */}
        <path
          d="M 68 44 C 54 60 52 76 52 86 C 52 99 59 109 68 109 C 77 109 84 99 84 86 C 84 76 82 60 68 44 Z"
          fill="#00C4DF"
        />
        <path
          d="M 68 50 C 58 64 56 76 56 84 C 56 94 61 102 68 102 C 75 102 80 94 80 84 C 80 76 78 64 68 50 Z"
          fill={lightMode ? "#0B192C" : "#FFFFFF"}
        />
        {/* Droplet on right */}
        <path
          d="M 148 108 C 142 118 140 126 140 132 C 140 137 144 141 148 141 C 152 141 156 137 156 132 C 156 126 154 118 148 108 Z"
          fill="#00C4DF"
        />
      </svg>

      {/* Brand Text */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className="font-black tracking-tight text-lg sm:text-xl font-sans"
          style={{ color: textColor, lineHeight: "1" }}
        >
          HOMETECH
        </span>
        <span
          className="text-[10px] font-bold tracking-[0.22em] uppercase mt-1"
          style={{ color: subTextColor }}
        >
          Water Purifier
        </span>
      </div>
    </div>
  );
}
