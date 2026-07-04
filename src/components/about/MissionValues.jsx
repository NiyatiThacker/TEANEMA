"use client";

import { useEffect, useRef, useState } from "react";

export default function MissionValues() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  const values = [
    {
      id: "01",
      title: "Radical Transparency",
      description: "No vanity metrics, no inflated reports. You see exactly what's working and what isn't — full access to live dashboards, always.",
      borderColor: "border-brand-yellow hover:border-brand-yellow/30",
      glowColor: "hover:shadow-[0_0_30px_rgba(245,158,11,0.12)]",
      textColor: "text-brand-yellow",
      circleBg: "bg-brand-yellow/10",
      side: "left"
    },
    {
      id: "02",
      title: "Growth Over Guesswork",
      description: "Every strategy is backed by data, testing, and iteration — not trends or assumptions. We let analytics dictate budgets, not opinions.",
      borderColor: "border-brand-blue hover:border-brand-blue/30",
      glowColor: "hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]",
      textColor: "text-brand-blue",
      circleBg: "bg-brand-blue/10",
      side: "right"
    },
    {
      id: "03",
      title: "Partnership, Not Vendorship",
      description: "We treat your goals like our own. Your growth is the only KPI that matters to us. If your bottom line doesn't scale, we fail.",
      borderColor: "border-brand-red hover:border-brand-red/30",
      glowColor: "hover:shadow-[0_0_30px_rgba(239,68,68,0.12)]",
      textColor: "text-brand-red",
      circleBg: "bg-brand-red/10",
      side: "left"
    },
    {
      id: "04",
      title: "Speed With Precision",
      description: "We move fast without cutting corners — because in marketing, timing is everything. Campaigns launched in days, optimized hourly.",
      borderColor: "border-brand-green hover:border-brand-green/30",
      glowColor: "hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]",
      textColor: "text-brand-green",
      circleBg: "bg-brand-green/10",
      side: "right"
    }
  ];

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
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="mission-values" 
      ref={sectionRef}
      className={`py-24 md:py-32 bg-white relative overflow-hidden z-10 border-b border-slate-100 transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-24 md:mb-32 transition-all transform duration-[600ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-3">What Drives Us</p>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
            The Principles Behind Every Campaign
          </h2>
        </div>

        {/* Vertical Storytelling Timeline Flow (Zigzag) */}
        <div className="relative">
          
          {/* Vertical Center Track (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-slate-100 rounded-full -translate-x-1/2 z-0 overflow-hidden">
            <div 
              className="w-full bg-gradient-to-b from-brand-yellow via-brand-blue via-brand-red to-brand-green transition-all duration-[1800ms] ease-out"
              style={{
                height: isVisible ? "100%" : "0%",
              }}
            />
          </div>

          {/* Timeline Nodes & Branching Cards */}
          <div className="flex flex-col gap-12 md:gap-16 relative z-10">
            {values.map((val, index) => {
              const isLeft = val.side === "left";
              return (
                <div 
                  key={val.id}
                  className={`flex flex-col md:flex-row items-center w-full relative ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  
                  {/* Timeline Center Node Badge (Desktop) */}
                  <div 
                    className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-4 border-white shadow-md items-center justify-center font-display font-black text-xs transition-all duration-350 z-20 group-hover:scale-110 ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                    } ${val.circleBg} ${val.textColor}`}
                    style={{
                      transitionDelay: isVisible ? `${index * 150}ms` : "0ms"
                    }}
                  >
                    {val.id}
                  </div>

                  {/* Branching Card Panel */}
                  <div 
                    className={`w-full md:w-[45%] bg-slate-50/50 border border-slate-100 rounded-3xl p-8 shadow-sm transition-all duration-350 hover:-translate-y-1 relative group cursor-default ${
                      val.borderColor
                    } ${val.glowColor} ${
                      isVisible 
                        ? "opacity-100 translate-x-0 ease-out" 
                        : `opacity-0 ${isLeft ? "md:-translate-x-10" : "md:translate-x-10"} translate-y-6`
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${index * 200}ms` : "0ms"
                    }}
                  >
                    {/* Header: Badge + Title */}
                    <div className="flex items-center gap-4 mb-5">
                      <div className={`md:hidden w-8 h-8 rounded-lg flex items-center justify-center font-display font-black text-xs ${val.circleBg} ${val.textColor}`}>
                        {val.id}
                      </div>
                      <h3 className={`text-xl font-bold font-display text-slate-900 transition-colors duration-300 ${val.textColor}`}>
                        {val.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-slate-500 text-sm leading-relaxed font-normal">
                      {val.description}
                    </p>

                    {/* Giant Watermark outline number */}
                    <div 
                      className="hidden md:block absolute bottom-3 right-6 text-7xl font-black font-display text-transparent select-none pointer-events-none group-hover:scale-105 transition-all duration-500 opacity-40"
                      style={{
                        WebkitTextStroke: "1.5px rgba(226, 232, 240, 0.7)",
                      }}
                    >
                      {val.id}
                    </div>

                    {/* Bottom hover bar accent */}
                    <div className={`absolute bottom-0 left-8 right-8 h-1 rounded-t-full transition-transform scale-x-0 group-hover:scale-x-100 duration-300 ${
                      index === 0 ? "bg-brand-yellow" : index === 1 ? "bg-brand-blue" : index === 2 ? "bg-brand-red" : "bg-brand-green"
                    }`} />

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
