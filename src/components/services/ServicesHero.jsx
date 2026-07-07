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
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-[#faf9f6]">
      {/* Grid Paper Texture */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-50"
        style={{
          backgroundSize: '40px 40px',
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)
          `
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center mt-8 md:mt-16">
        
        {/* Floating Stickers */}
        <div 
          className={`absolute top-[-25px] left-[15%] text-4xl hidden sm:block transition-all duration-1000 transform ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ animation: 'bounce 3s infinite ease-in-out' }}
        >
          🍒
        </div>
        
        <div 
          className={`absolute top-[-40px] right-[20%] text-5xl hidden sm:block transition-all duration-1000 delay-100 transform ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ animation: 'pulse 4s infinite ease-in-out' }}
        >
          💬
        </div>
        
        <div 
          className={`absolute bottom-[15%] right-[5%] md:right-[15%] text-5xl transition-all duration-1000 delay-200 transform ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div style={{ animation: 'spin 12s linear infinite' }}>🪩</div>
        </div>
        
        {/* Tape Label */}
        <div className={`absolute left-[-5%] md:left-[5%] top-[45%] bg-[#cce3eb] text-[#3E2723] text-[9px] md:text-[11px] font-mono font-bold tracking-widest px-3 py-1.5 border border-[#a2c8d6] -rotate-3 shadow-sm z-20 transition-all duration-1000 delay-300 transform ${isMounted ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}>
          OUR EXPERTISE
        </div>

        {/* Headlines */}
        <div className="relative z-10 mb-0 md:mb-[-5px]">
          {/* Pink Marker Highlight */}
          <div className={`absolute inset-0 bg-[#fce4eb] -z-10 -skew-x-2 scale-y-110 scale-x-110 transition-all duration-1000 delay-200 origin-left ${isMounted ? "scale-x-110 opacity-100" : "scale-x-0 opacity-0"}`}></div>
          <h1 className="text-5xl sm:text-6xl md:text-[75px] font-black tracking-tighter text-[#2a1c18] leading-none px-4">
            Solutions That Build,
          </h1>
        </div>
        
        <h2 className="text-4xl sm:text-5xl md:text-[65px] font-serif tracking-tight text-[#2a1c18] leading-none mb-0 md:mb-[-5px] z-10">
          Market & Elevate
        </h2>
        
        <h2 className="text-5xl sm:text-6xl md:text-[80px] font-serif font-bold tracking-tighter text-[#2a1c18] leading-none mb-8 z-10">
          Brands.
        </h2>

        {/* Description */}
        <p className={`text-lg md:text-xl text-slate-700 max-w-2xl text-center mb-12 z-10 font-medium transition-all duration-1000 delay-400 transform ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          From branding and CGI to digital marketing, production, web development, and outdoor advertising, TeaNema delivers creative solutions that help brands connect, grow, and stay memorable.
        </p>

        {/* Pill Button */}
        <div className={`relative z-20 transition-all duration-1000 delay-500 transform ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <a
            href="#services-cta"
            onClick={handleScrollToCTA}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-slate-300 bg-white/90 backdrop-blur-sm text-[#2a1c18] font-semibold text-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#f48fb1]"></span>
            Explore Our Services →
          </a>
        </div>
      </div>
      
      {/* Required keyframes for bounce if not built into tailwind by default */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
