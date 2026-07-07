"use client";

import { useEffect, useRef, useState } from "react";
import LogoLoop from "./LogoLoop";

export default function TrustedBy() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          hasAnimated.current = true;
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      { threshold: 0.08 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const logos = [
    // Row 1
    {
      name: "Flipkart",
      colorClass: "hover:text-[#2874F0]",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 110 30">
          <text x="5" y="22" className="font-sans font-black text-lg italic tracking-tight">Flipkart</text>
          <circle cx="95" cy="15" r="10" className="fill-[#FCD34D]" />
          <path d="M92 12 H98 V18 C98 20, 92 20, 92 18 Z" className="fill-[#2874F0]" />
        </svg>
      )
    },
    {
      name: "CARS 24",
      colorClass: "hover:text-[#FF9F1B]",
      svg: (
        <svg className="h-6.5 w-auto fill-current" viewBox="0 0 110 30">
          <rect x="5" y="3" width="95" height="24" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <text x="12" y="20" className="font-display font-extrabold text-sm tracking-wide">CARS</text>
          <rect x="64" y="6" width="30" height="18" rx="2" className="fill-[#FF9F1B] group-hover:fill-current" />
          <text x="71" y="19" className="font-display font-black text-xs text-white">24</text>
        </svg>
      )
    },
    {
      name: "zepto",
      colorClass: "hover:text-[#5B21B6]",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 90 30">
          <text x="5" y="22" className="font-sans font-black text-2xl italic tracking-tighter">zepto</text>
        </svg>
      )
    },
    {
      name: "SHIVALIK",
      colorClass: "hover:text-[#3E2723]",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 100 30">
          <text x="5" y="21" className="font-display font-black text-sm tracking-widest">SHIVALIK</text>
          <line x1="5" y1="25" x2="95" y2="25" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    },
    {
      name: "Swiggy",
      colorClass: "hover:text-[#FC8019]",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 95 30">
          <path d="M10 5 C5 10 5 20 10 25 C12 22 12 18 10 15 Z" className="fill-[#FC8019]" />
          <text x="30" y="21" className="font-sans font-extrabold text-base">Swiggy</text>
        </svg>
      )
    },
    {
      name: "CRED",
      colorClass: "hover:text-[#3E2723]",
      svg: (
        <svg className="h-5.5 w-auto fill-current" viewBox="0 0 90 30">
          <polygon points="5,4 18,8 18,22 5,26" fill="none" stroke="currentColor" strokeWidth="2.2" />
          <text x="30" y="20" className="font-display font-semibold text-sm tracking-widest">CRED</text>
        </svg>
      )
    },
    // Row 2
    {
      name: "PHOENIX PALLADIUM",
      colorClass: "hover:text-slate-800",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 130 30">
          <path d="M10 5 L16 15 L22 5 Z M10 25 L16 15 L22 25 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <text x="32" y="19" className="font-display font-bold text-[8px] tracking-widest">PHOENIX PALLADIUM</text>
        </svg>
      )
    },
    {
      name: "JADE BLUE",
      colorClass: "hover:text-[#00519E]",
      svg: (
        <svg className="h-5.5 w-auto fill-current" viewBox="0 0 110 30">
          <rect x="5" y="4" width="95" height="22" rx="3" className="fill-none stroke-current" strokeWidth="2" />
          <text x="14" y="19" className="font-display font-black text-xs tracking-wider">JADE BLUE</text>
        </svg>
      )
    },
    {
      name: "TITANS",
      colorClass: "hover:text-[#D4AF37]",
      svg: (
        <svg className="h-6.5 w-auto fill-current" viewBox="0 0 100 30">
          <polygon points="10,25 22,5 34,25 22,20" fill="none" stroke="currentColor" strokeWidth="2" />
          <text x="44" y="21" className="font-sans font-black text-sm tracking-wider">TITANS</text>
        </svg>
      )
    },
    {
      name: "adani Foundation",
      colorClass: "hover:text-[#005691]",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 110 30">
          <text x="5" y="16" className="font-sans font-bold text-xs">adani</text>
          <text x="5" y="26" className="font-sans font-light text-[8px] uppercase tracking-wider">Foundation</text>
        </svg>
      )
    },
    {
      name: "CREDAI",
      colorClass: "hover:text-[#0F9D58]",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 100 30">
          <text x="5" y="21" className="font-display font-black text-sm tracking-widest">CREDAI</text>
          <polygon points="85,10 95,15 85,20" />
        </svg>
      )
    },
    {
      name: "LOFY",
      colorClass: "hover:text-slate-800",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 100 30">
          <text x="5" y="16" className="font-display font-black text-base tracking-widest">LOFY</text>
          <text x="5" y="25" className="font-sans font-medium text-[7px] uppercase tracking-wider">Home Store</text>
        </svg>
      )
    },
    // Row 3
    {
      name: "Haldiram's",
      colorClass: "hover:text-[#E21E26]",
      svg: (
        <svg className="h-7 w-auto fill-current" viewBox="0 0 110 30">
          <ellipse cx="50" cy="15" rx="45" ry="12" fill="none" stroke="currentColor" strokeWidth="2.2" />
          <text x="18" y="20" className="font-serif font-extrabold text-xs italic tracking-tighter">Haldiram's</text>
        </svg>
      )
    },
    {
      name: "cult store",
      colorClass: "hover:text-[#3E2723]",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 100 30">
          <circle cx="15" cy="15" r="4" />
          <line x1="15" y1="19" x2="15" y2="26" stroke="currentColor" strokeWidth="2" />
          <line x1="11" y1="21" x2="19" y2="21" stroke="currentColor" strokeWidth="2" />
          <text x="28" y="21" className="font-sans font-bold text-sm tracking-wide">cult store</text>
        </svg>
      )
    },
    {
      name: "TVS",
      colorClass: "hover:text-[#00529B]",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 100 30">
          <text x="5" y="22" className="font-sans font-black text-xl italic tracking-tighter">TVS</text>
          <path d="M55 8 L75 14 L65 22 Z" className="fill-[#E31837]" />
        </svg>
      )
    },
    {
      name: "CARATLANE",
      colorClass: "hover:text-[#8D348E]",
      svg: (
        <svg className="h-5.5 w-auto fill-current" viewBox="0 0 110 30">
          <circle cx="12" cy="15" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <text x="26" y="20" className="font-sans font-semibold text-xs tracking-wider">CARATLANE</text>
        </svg>
      )
    },
    {
      name: "ST REGIS",
      colorClass: "hover:text-[#111827]",
      svg: (
        <svg className="h-6.5 w-auto fill-current" viewBox="0 0 100 30">
          <text x="5" y="16" className="font-serif font-bold text-xs tracking-widest">ST REGIS</text>
          <text x="5" y="25" className="font-serif font-light text-[6px] tracking-widest uppercase">Hotels</text>
        </svg>
      )
    },
    {
      name: "SPACE",
      colorClass: "hover:text-[#FC8019]",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 100 30">
          <circle cx="15" cy="15" r="8" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
          <text x="32" y="21" className="font-display font-black text-sm tracking-widest">SPACE</text>
        </svg>
      )
    },
    // Row 4
    {
      name: "GOLDI SOLAR",
      colorClass: "hover:text-[#312E81]",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 110 30">
          <text x="5" y="16" className="font-display font-black text-sm tracking-wide">GOLDI</text>
          <text x="5" y="25" className="font-sans font-medium text-[8px] tracking-widest uppercase">Solar</text>
        </svg>
      )
    },
    {
      name: "NATURALS",
      colorClass: "hover:text-[#10B981]",
      svg: (
        <svg className="h-5.5 w-auto fill-current" viewBox="0 0 100 30">
          <text x="5" y="20" className="font-sans font-extrabold text-sm tracking-wider">NATURALS</text>
          <circle cx="92" cy="14" r="3" className="fill-[#10B981]" />
        </svg>
      )
    },
    {
      name: "THAKKAR",
      colorClass: "hover:text-[#0369A1]",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 100 30">
          <polygon points="8,5 18,5 20,25 6,25" fill="none" stroke="currentColor" strokeWidth="2" />
          <text x="30" y="21" className="font-display font-semibold text-xs tracking-wider">THAKKAR</text>
        </svg>
      )
    },
    {
      name: "ABH DEVELOPERS",
      colorClass: "hover:text-[#0F766E]",
      svg: (
        <svg className="h-5.5 w-auto fill-current" viewBox="0 0 120 30">
          <polygon points="5,22 15,7 25,22" fill="none" stroke="currentColor" strokeWidth="2" />
          <text x="34" y="20" className="font-display font-black text-xs">ABH DEVELOPERS</text>
        </svg>
      )
    },
    {
      name: "BIKES 24",
      colorClass: "hover:text-[#FF9F1B]",
      svg: (
        <svg className="h-6.5 w-auto fill-current" viewBox="0 0 110 30">
          <rect x="5" y="3" width="95" height="24" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <text x="10" y="20" className="font-display font-extrabold text-xs tracking-wide">BIKES</text>
          <rect x="66" y="6" width="28" height="18" rx="2" className="fill-[#FF9F1B]" />
          <text x="73" y="19" className="font-display font-black text-xs text-white">24</text>
        </svg>
      )
    },
    {
      name: "RENEEV",
      colorClass: "hover:text-[#0088CC]",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 100 30">
          <path d="M5 25 L15 5 L25 25 Z" fill="none" stroke="currentColor" strokeWidth="2" />
          <text x="32" y="21" className="font-display font-black text-sm tracking-wide">RENEEV</text>
        </svg>
      )
    },
    // Row 5
    {
      name: "MAHINDRA TRACTORS",
      colorClass: "hover:text-[#E31837]",
      svg: (
        <svg className="h-5.5 w-auto fill-current" viewBox="0 0 125 30">
          <text x="5" y="16" className="font-sans font-bold text-xs">mahindra</text>
          <text x="5" y="25" className="font-sans font-light text-[8px] uppercase tracking-widest">Tractors</text>
        </svg>
      )
    },
    {
      name: "PALLADIUM",
      colorClass: "hover:text-slate-800",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 110 30">
          <text x="5" y="21" className="font-display font-black text-base tracking-widest">PALLADIUM</text>
        </svg>
      )
    },
    {
      name: "SPACE ARCADE",
      colorClass: "hover:text-[#FC8019]",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 115 30">
          <text x="5" y="16" className="font-display font-black text-sm">SPACE</text>
          <text x="5" y="25" className="font-sans font-medium text-[7px] uppercase tracking-wider">Arcade</text>
        </svg>
      )
    },
    {
      name: "SPECTRA",
      colorClass: "hover:text-[#3E2723]",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 100 30">
          <polygon points="5,22 15,7 25,22 35,12 45,22" fill="none" stroke="currentColor" strokeWidth="2" />
          <text x="52" y="21" className="font-sans font-bold text-xs tracking-wider">SPECTRA</text>
        </svg>
      )
    },
    {
      name: "STELLAR",
      colorClass: "hover:text-[#008000]",
      svg: (
        <svg className="h-5.5 w-auto fill-current" viewBox="0 0 100 30">
          <text x="5" y="20" className="font-sans font-bold text-sm tracking-widest">STELLAR</text>
        </svg>
      )
    },
    {
      name: "QUTONE",
      colorClass: "hover:text-[#0D9488]",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 95 30">
          <text x="5" y="21" className="font-sans font-black text-base tracking-widest">QUTONE</text>
        </svg>
      )
    },
    // Row 6
    {
      name: "ISTANA",
      colorClass: "hover:text-[#0088CC]",
      svg: (
        <svg className="h-5.5 w-auto fill-current" viewBox="0 0 95 30">
          <polygon points="12,5 22,12 17,25 7,25 2,12" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <text x="30" y="20" className="font-display font-semibold text-xs tracking-wider">ISTANA</text>
        </svg>
      )
    },
    {
      name: "oberoi mall",
      colorClass: "hover:text-slate-800",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 110 30">
          <text x="5" y="21" className="font-serif font-bold text-sm italic">oberoi mall</text>
        </svg>
      )
    },
    {
      name: "Oliver Brown",
      colorClass: "hover:text-[#3B2F2F]",
      svg: (
        <svg className="h-5.5 w-auto fill-current" viewBox="0 0 110 30">
          <text x="5" y="20" className="font-serif font-black text-xs tracking-wide">OliverBrown</text>
        </svg>
      )
    },
    {
      name: "SHIVALIK REALTY",
      colorClass: "hover:text-[#3E2723]",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 120 30">
          <text x="5" y="16" className="font-display font-black text-[9px] tracking-widest">SHIVALIK</text>
          <text x="5" y="25" className="font-sans font-light text-[6px] tracking-widest uppercase">Institute of Real Estate</text>
        </svg>
      )
    },
    {
      name: "CLEAR",
      colorClass: "hover:text-[#DC2626]",
      svg: (
        <svg className="h-6.5 w-auto fill-current" viewBox="0 0 100 30">
          <rect x="5" y="4" width="70" height="22" rx="3" className="fill-[#DC2626] stroke-none" />
          <text x="14" y="20" className="font-sans font-black text-xs text-white tracking-widest">CLEAR</text>
        </svg>
      )
    },
    {
      name: "KAAVYARATNA",
      colorClass: "hover:text-[#DC2626]",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 120 30">
          <text x="5" y="21" className="font-display font-black text-xs tracking-wider">KAAVYARATNA</text>
        </svg>
      )
    },
    // Row 7
    {
      name: "SJ",
      colorClass: "hover:text-[#10B981]",
      svg: (
        <svg className="h-6.5 w-auto fill-current" viewBox="0 0 100 30">
          <rect x="5" y="4" width="22" height="22" rx="4" className="fill-[#10B981]" />
          <text x="9" y="20" className="font-sans font-bold text-xs text-white">SJ</text>
          <text x="34" y="19" className="font-display font-black text-[9px] tracking-wider">BUILDERS</text>
        </svg>
      )
    },
    {
      name: "SWATI",
      colorClass: "hover:text-[#991B1B]",
      svg: (
        <svg className="h-6.5 w-auto fill-current" viewBox="0 0 100 30">
          <rect x="5" y="4" width="90" height="22" rx="2" className="fill-[#991B1B]" />
          <text x="18" y="20" className="font-sans font-black text-xs text-white tracking-widest">SWATI</text>
        </svg>
      )
    },
    {
      name: "Volkswagen",
      colorClass: "hover:text-[#00519E]",
      svg: (
        <svg className="h-7 w-auto fill-current" viewBox="0 0 120 30">
          <circle cx="15" cy="15" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M9 11 L15 21 L21 11" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <text x="32" y="20" className="font-sans font-black text-xs tracking-wider">Volkswagen</text>
        </svg>
      )
    },
    {
      name: "UNITED FARMERS",
      colorClass: "hover:text-[#10B981]",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 120 30">
          <text x="5" y="21" className="font-display font-black text-[10px] tracking-wider">UNITED FARMERS</text>
        </svg>
      )
    },
    {
      name: "LIVERPOOL",
      colorClass: "hover:text-[#1E3A8A]",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 110 30">
          <text x="5" y="21" className="font-display font-black text-xs tracking-widest">LIVERPOOL</text>
        </svg>
      )
    },
    {
      name: "TABLT",
      colorClass: "hover:text-[#0284C7]",
      svg: (
        <svg className="h-6.5 w-auto fill-current" viewBox="0 0 100 30">
          <path d="M10 5 L16 11 M16 5 L10 11" stroke="currentColor" strokeWidth="2.5" />
          <text x="24" y="21" className="font-sans font-black text-sm tracking-wider">TABLT</text>
        </svg>
      )
    },
    // Row 8
    {
      name: "94.3 MY FM",
      colorClass: "hover:text-[#EC4899]",
      svg: (
        <svg className="h-7 w-auto fill-current" viewBox="0 0 100 30">
          <rect x="5" y="4" width="22" height="22" rx="6" className="fill-[#EC4899]" />
          <text x="9" y="19" className="font-sans font-black text-[9px] text-white">FM</text>
          <text x="34" y="20" className="font-sans font-black text-[9px] tracking-wider">MY FM</text>
        </svg>
      )
    },
    {
      name: "Happiness",
      colorClass: "hover:text-[#8B5CF6]",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 100 30">
          <text x="5" y="21" className="font-serif font-black text-base italic tracking-tight">Happiness</text>
        </svg>
      )
    },
    {
      name: "MILLENNIUM",
      colorClass: "hover:text-[#92400E]",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 110 30">
          <text x="5" y="21" className="font-display font-black text-xs tracking-widest">MILLENNIUM</text>
        </svg>
      )
    },
    {
      name: "PALASSIO",
      colorClass: "hover:text-[#3E2723]",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 100 30">
          <text x="5" y="21" className="font-display font-black text-xs tracking-widest">PALASSIO</text>
        </svg>
      )
    },
    {
      name: "PHOENIX CITADEL",
      colorClass: "hover:text-[#D97706]",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 120 30">
          <text x="5" y="21" className="font-display font-bold text-[9px] tracking-widest">PHOENIX CITADEL</text>
        </svg>
      )
    },
    {
      name: "navratna",
      colorClass: "hover:text-[#3E2723]",
      svg: (
        <svg className="h-5.5 w-auto fill-current" viewBox="0 0 100 30">
          <text x="5" y="21" className="font-sans font-light text-base tracking-tighter">navratna</text>
        </svg>
      )
    }
  ];

  return (
    <section 
      id="trusted" 
      ref={sectionRef}
      className="py-24 md:py-32 bg-slate-50 relative overflow-hidden z-10 border-y border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header matching the screenshot exactly */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all transform duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-display text-[#3E2723] tracking-tight mb-6">
            Every Frame Tells a Different Story.
          </h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            Here's a glimpse of the stories we've been fortunate enough to create together.
          </p>
        </div>

        {/* Dense Grid of Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-5">
          {logos.map((logo, index) => {
            // Convert 'hover:text-[color]' to just 'text-[color]' so they are always colored like the screenshot
            const staticColorClass = logo.colorClass.replace('hover:', '');
            
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 aspect-[4/3] flex items-center justify-center transition-all duration-700 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-slate-100 shadow-sm ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ 
                  transitionDelay: `${index * 30}ms`,
                  boxShadow: 'inset 0px -4px 10px rgba(0,0,0,0.02)' 
                }}
              >
                <div 
                  className={`w-full h-full flex items-center justify-center ${staticColorClass} [&>svg]:w-full [&>svg]:h-full [&>svg]:max-h-[65px] [&>svg]:max-w-[130px] object-contain transition-transform duration-300 group-hover:scale-125`}
                >
                  {logo.svg}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
