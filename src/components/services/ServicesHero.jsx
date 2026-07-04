"use client";

import { useEffect, useState } from "react";

export default function ServicesHero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleScrollToCTA = (e) => {
    e.preventDefault();
    const element = document.querySelector("#services-cta");
    if (element) {
      const navbarHeight = 80;
      const targetPosition = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-white">
      {/* Dynamic background mesh */}
      {/* Grid texture removed per user request */}
      
      {/* Background soft color auras */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-brand-blue/10 rounded-full blur-[80px]"
          style={{
            animation: "heroFloat 14s infinite ease-in-out",
          }}
        />
        <div 
          className="absolute top-10 right-1/4 w-[400px] h-[400px] bg-brand-yellow/10 rounded-full blur-[90px]"
          style={{
            animation: "heroFloat 18s infinite ease-in-out 2s",
          }}
        />
      </div>

      <style>{`
        @keyframes heroFloat {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(25px, -25px) scale(1.08); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div 
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-150 bg-blue-50/60 text-brand-blue text-sm font-semibold tracking-wide mb-8 transition-all duration-700 transform ${
            isMounted 
              ? "opacity-100 translate-y-0 filter-none" 
              : "opacity-0 translate-y-4 blur-[4px]"
          }`}
        >
          What We Offer
        </div>

        {/* Headline */}
        <h1 
          className={`text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-slate-900 leading-[1.15] mb-8 transition-all duration-700 delay-75 transform ${
            isMounted 
              ? "opacity-100 translate-y-0 filter-none" 
              : "opacity-0 translate-y-6 blur-[8px]"
          }`}
        >
          Every Service You Need to Be<br />
          <span className="text-brand-blue">Seen, Remembered, and Chosen</span>
        </h1>

        {/* Subheadline */}
        <p 
          className={`text-lg md:text-xl text-slate-650 font-normal leading-relaxed max-w-2xl mb-10 transition-all duration-700 delay-150 transform ${
            isMounted 
              ? "opacity-100 translate-y-0 filter-none" 
              : "opacity-0 translate-y-6 blur-[6px]"
          }`}
        >
          From high-impact advertising to full-funnel digital marketing — we build campaigns and creative that don't just look good, they perform.
        </p>

        {/* CTA Button */}
        <div 
          className={`transition-all duration-700 delay-300 transform ${
            isMounted 
              ? "opacity-100 translate-y-0 filter-none" 
              : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#services-cta"
            onClick={handleScrollToCTA}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-900 text-white font-semibold text-base hover:bg-black hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-slate-950/10"
          >
            Talk to Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
