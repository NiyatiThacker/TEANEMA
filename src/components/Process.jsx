"use client";

import { useState } from "react";

export default function Process() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const steps = [
    {
      id: "01",
      title: "Discovery & Audit",
      description: "We dig deep into your brand, competitors, and current analytics to find real, high-impact growth opportunities.",
      hoverBorder: "rgba(242,114,36,0.5)",
      glowShadow: "0 0 32px rgba(242,114,36,0.3)",
      iconColor: "#F27224",
      iconBg: "rgba(242,114,36,0.1)",
      barColor: "#F27224",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#F27224" strokeWidth="2">
          <circle cx="11" cy="11" r="6" />
          <path d="M20 20 L16 16" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M8 11 H14" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: "02",
      title: "Strategy & Planning",
      description: "A custom roadmap built around your business goals, target metrics, ad budgets, and scaling timeline.",
      hoverBorder: "rgba(0,98,190,0.5)",
      glowShadow: "0 0 32px rgba(0,98,190,0.3)",
      iconColor: "#0062BE",
      iconBg: "rgba(0,98,190,0.1)",
      barColor: "#0062BE",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#0062BE" strokeWidth="2">
          <circle cx="12" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="18" r="3" />
          <path d="M12 9 L8 15 M12 9 L16 15" strokeWidth="1.8" />
        </svg>
      )
    },
    {
      id: "03",
      title: "Execution & Launch",
      description: "Campaigns, copywriting, optimized layouts, and creatives go live — fast, clean, and fully tracked.",
      hoverBorder: "rgba(242,114,36,0.4)",
      glowShadow: "0 0 32px rgba(242,114,36,0.3)",
      iconColor: "#F27224",
      iconBg: "rgba(242,114,36,0.08)",
      barColor: "#F27224",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#F27224" strokeWidth="2">
          <path d="M12 2 L15 9 L22 9 L17 14 L19 21 L12 17 L5 21 L7 14 L2 9 L9 9 Z" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: "04",
      title: "Optimize & Scale",
      description: "We analyze daily performance, refine targeting, and double down on what drives revenue every single month.",
      hoverBorder: "rgba(0,98,190,0.4)",
      glowShadow: "0 0 32px rgba(0,98,190,0.3)",
      iconColor: "#0062BE",
      iconBg: "rgba(0,98,190,0.08)",
      barColor: "#0062BE",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#0062BE" strokeWidth="2">
          <path d="M4 20 L20 4 M13 4 H20 V11" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 12 A 8 8 0 0 0 12 20" strokeWidth="1.8" strokeDasharray="3 3" />
        </svg>
      )
    }
  ];

  return (
    <section 
      id="process" 
      className="py-24 md:py-32 bg-slate-50 relative overflow-hidden z-10 border-b border-slate-100"
    >
      {/* Brand ambient blobs */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full blur-[100px] pointer-events-none z-0 blob-1" style={{ background: "radial-gradient(circle, rgba(0,98,190,0.07) 0%, transparent 70%)" }} />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-[120px] pointer-events-none z-0 blob-2" style={{ background: "radial-gradient(circle, rgba(242,114,36,0.07) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 reveal">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#F27224" }}>Our Process</p>
          <h2 className="text-4xl md:text-5xl font-extrabold font-display text-[#3E2723] tracking-tight leading-tight">
            How We Take You From <span className="gradient-text">Zero to Growth</span>
          </h2>
        </div>

        {/* Hover Expansion Accordion */}
        <div className="flex flex-col md:flex-row w-full h-[800px] md:h-[600px] gap-4 md:gap-6 reveal reveal-delay-1">
          {steps.map((step, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div 
                key={step.id}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`relative flex flex-col justify-end overflow-hidden rounded-[2.5rem] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer group border border-slate-200 ${
                  isHovered 
                    ? 'flex-[2.5] md:flex-[3.5] bg-white shadow-2xl' 
                    : 'flex-1 md:flex-1 bg-white/40 opacity-70 hover:opacity-100'
                }`}
              >
                
                {/* Background Watermark Icon (only visible when expanded) */}
                <div 
                  className={`absolute -bottom-16 -right-16 transition-all duration-700 ease-out transform pointer-events-none ${
                    isHovered ? 'scale-100 translate-x-0 opacity-[0.03]' : 'scale-50 translate-x-12 opacity-0'
                  }`} 
                >
                  <div className="w-96 h-96" style={{ color: step.iconColor }}>
                    {step.icon}
                  </div>
                </div>
                
                {/* Top Number/Icon Badge */}
                <div className="absolute top-6 left-6 md:top-8 md:left-8 flex flex-col md:flex-row items-center gap-4">
                  <div 
                    className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-all duration-500 z-10" 
                    style={{ background: isHovered ? step.iconBg : 'rgba(241, 245, 249, 0.8)' }}
                  >
                    <div className={`transition-all duration-500 ${isHovered ? 'scale-100 opacity-100' : 'scale-90 opacity-40 grayscale'}`}>
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* The number when NOT hovered (fades out when hovered) */}
                  <span 
                    className={`font-display font-black text-2xl md:text-3xl transition-all duration-500 absolute left-20 md:left-24 whitespace-nowrap ${
                      isHovered ? 'opacity-0 translate-x-4' : 'opacity-40 translate-x-0'
                    }`} 
                    style={{ color: step.iconColor }}
                  >
                    {step.id}
                  </span>
                </div>

                {/* Desktop Rotated Title (Visible only when NOT hovered) */}
                <div 
                  className={`hidden md:block absolute bottom-12 left-1/2 -translate-x-1/2 origin-bottom-left -rotate-90 whitespace-nowrap transition-all duration-500 z-10 ${
                    isHovered ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  }`}
                >
                  <h3 className="text-xl font-bold font-display text-slate-800 tracking-wider">
                    {step.title}
                  </h3>
                </div>

                {/* The Expanded Content */}
                <div 
                  className={`p-8 md:p-12 flex flex-col justify-end h-full w-full transition-all duration-700 delay-100 absolute bottom-0 left-0 right-0 ${
                    isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-6 mb-4 md:mb-6">
                    <span className="font-display font-black text-6xl md:text-8xl opacity-20 leading-none" style={{ color: step.iconColor }}>
                      {step.id}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-bold font-display text-[#3E2723] leading-tight mb-1 md:mb-2 whitespace-normal md:whitespace-nowrap">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-lg md:max-w-2xl font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Color Accent Bar */}
                <div 
                  className={`absolute bottom-0 left-0 right-0 h-1.5 transition-all duration-700 ease-out transform ${
                    isHovered ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                  }`}
                  style={{ background: step.barColor }}
                />

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
