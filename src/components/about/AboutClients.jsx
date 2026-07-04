"use client";

import { useEffect, useRef, useState } from "react";
import LogoLoop from "../LogoLoop";

export default function AboutClients() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // For animated stats
  const [brands, setBrands] = useState(0);
  const [impressions, setImpressions] = useState(0);
  const [retention, setRetention] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
          
          // Count up effect
          const duration = 2000; 
          const steps = 60;
          const stepTime = Math.abs(Math.floor(duration / steps));
          
          let currentStep = 0;
          const interval = setInterval(() => {
            currentStep++;
            setBrands(Math.round(0 + (currentStep / steps) * 50));
            setImpressions(Math.round(0 + (currentStep / steps) * 10));
            setRetention(Math.round(0 + (currentStep / steps) * 95));
            
            if (currentStep >= steps) {
              clearInterval(interval);
              setBrands(50);
              setImpressions(10);
              setRetention(95);
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const logos = [
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
      colorClass: "hover:text-black",
      svg: (
        <svg className="h-5.5 w-auto fill-current" viewBox="0 0 90 30">
          <polygon points="5,4 18,8 18,22 5,26" fill="none" stroke="currentColor" strokeWidth="2.2" />
          <text x="30" y="20" className="font-display font-semibold text-sm tracking-widest">CRED</text>
        </svg>
      )
    },
    {
      name: "PVR INOX",
      colorClass: "hover:text-[#EAB308]",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 130 30">
          <text x="5" y="21" className="font-display font-black text-sm tracking-widest">PVR<tspan className="font-light">INOX</tspan></text>
        </svg>
      )
    },
    {
      name: "KFC",
      colorClass: "hover:text-[#E5142E]",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 70 30">
          <text x="5" y="22" className="font-display font-black text-xl italic tracking-tighter">KFC</text>
        </svg>
      )
    },
    {
      name: "MakeMyTrip",
      colorClass: "hover:text-[#D9232D]",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 130 30">
          <text x="5" y="21" className="font-sans font-bold text-sm tracking-tight">make<tspan className="text-[#D9232D] group-hover:text-current">my</tspan>trip</text>
        </svg>
      )
    }
  ];

  return (
    <section 
      id="about-clients" 
      ref={sectionRef}
      className="py-24 md:py-32 bg-slate-50 relative overflow-hidden z-10 border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all transform duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-slate-900 tracking-tight mb-4">
            Brands That Bet on Us (And Won)
          </h2>
          <p className="text-lg text-slate-600">
            We're proud to have partnered with businesses of all sizes — from ambitious startups to established industry leaders.
          </p>
        </div>

        {/* Marquee Logo Loop */}
        <div 
          className={`mb-24 transition-all transform duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <LogoLoop
            logos={logos}
            speed={40}
            direction="left"
            logoHeight={80}
            gap={100}
            hoverSpeed={10}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutColor="#f8fafc" // matches bg-slate-50
            renderItem={(logo, key) => (
              <div 
                key={key} 
                className={`flex items-center justify-center text-slate-400 grayscale hover:grayscale-0 transition-all duration-300 transform group ${logo.colorClass} cursor-pointer min-w-[160px] [&>svg]:!h-12 [&>svg]:md:!h-16 [&>svg]:!w-auto`}
              >
                {logo.svg}
              </div>
            )}
          />
        </div>

        {/* Stats Strip */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center transition-all transform duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-100">
            <h3 className="text-4xl md:text-5xl font-black font-display text-slate-900 mb-2">
              {brands}<span className="text-[#F27224]">+</span>
            </h3>
            <p className="text-slate-500 font-medium uppercase tracking-wider text-sm">Brands Served</p>
          </div>
          
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-100">
            <h3 className="text-4xl md:text-5xl font-black font-display text-slate-900 mb-2">
              {impressions}<span className="text-[#0062BE]">M+</span>
            </h3>
            <p className="text-slate-500 font-medium uppercase tracking-wider text-sm">Impressions Generated</p>
          </div>
          
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-100">
            <h3 className="text-4xl md:text-5xl font-black font-display text-slate-900 mb-2">
              {retention}<span className="text-[#10B981]">%</span>
            </h3>
            <p className="text-slate-500 font-medium uppercase tracking-wider text-sm">Client Retention</p>
          </div>
        </div>

      </div>
    </section>
  );
}
