"use client";

import { useEffect, useRef, useState } from "react";

export default function Milestones() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  const timelineItems = [
    {
      year: "2019",
      title: "Agency Founded",
      description: "Founded with a single client and a big idea: marketing that pays for itself.",
      color: "bg-brand-yellow text-brand-yellow",
      borderColor: "border-brand-yellow/30",
      accentBg: "bg-amber-50",
      dotShadow: "shadow-brand-yellow/35",
      delay: 200,
    },
    {
      year: "2021",
      title: "Crossed 50+ Brands",
      description: "Served over 50 brands across high-impact e-commerce, real estate, and fintech.",
      color: "bg-brand-blue text-brand-blue",
      borderColor: "border-brand-blue/30",
      accentBg: "bg-blue-50",
      dotShadow: "shadow-brand-blue/35",
      delay: 500,
    },
    {
      year: "2023",
      title: "Performance Wing Expansion",
      description: "Opened performance marketing wing, managing ₹50Cr+ in annual ad spend.",
      color: "bg-brand-red text-brand-red",
      borderColor: "border-brand-red/30",
      accentBg: "bg-red-50",
      dotShadow: "shadow-brand-red/35",
      delay: 800,
    },
    {
      year: "2025",
      title: "Top Growth Partner Status",
      description: "Recognized as a top-rated growth partner with a 96% client retention rate.",
      color: "bg-brand-green text-brand-green",
      borderColor: "border-brand-green/30",
      accentBg: "bg-emerald-50",
      dotShadow: "shadow-brand-green/35",
      delay: 1100,
    },
    {
      year: "2026",
      title: "250+ Brands Scaled",
      description: "Over 250 brands scaled, and still growing — one measurable result at a time.",
      color: "bg-brand-yellow text-brand-yellow",
      borderColor: "border-brand-yellow/30",
      accentBg: "bg-amber-50",
      dotShadow: "shadow-brand-yellow/35",
      delay: 1400,
    },
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="milestones" 
      ref={sectionRef}
      className="py-24 md:py-32 bg-slate-50 relative overflow-hidden z-10 border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-20 md:mb-28 transition-all transform duration-[600ms] ${
            isVisible ? "opacity-100 translate-y-0 ease-out" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">Our Journey</p>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-900 tracking-tight leading-tight">
            From Two Laptops to a Full-Service Growth Engine
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto py-8">
          
          {/* Central Vertical Line (Draws Top to Bottom on Scroll) */}
          <div 
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[4px] -translate-x-[2px] bg-slate-200 rounded-full z-0 overflow-hidden"
          >
            <div 
              className="w-full bg-slate-900 rounded-full transition-all duration-[1500ms] ease-out origin-top"
              style={{
                height: isVisible ? "100%" : "0%",
              }}
            />
          </div>

          {/* Timeline Nodes */}
          <div className="flex flex-col gap-16 md:gap-20">
            {timelineItems.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={item.year}
                  className={`flex flex-col md:flex-row items-start relative z-10 md:justify-between w-full`}
                >
                  {/* Left Column Spacer (for desktop alternating cards) */}
                  <div className={`hidden md:block w-[46%] ${isEven ? "" : "order-last"}`} />
                  
                  {/* Timeline Glowing dot indicator */}
                  <div 
                    className={`absolute left-6 md:left-1/2 w-8 h-8 rounded-full bg-white border-4 border-slate-200 -translate-x-[14px] flex items-center justify-center z-20 transition-all transform duration-[500ms] shadow-lg ${item.dotShadow}`}
                    style={{
                      borderColor: isVisible ? "#0f172a" : "#e2e8f0",
                      transform: isVisible ? "translateX(-14px) scale(1)" : "translateX(-14px) scale(0)",
                      transitionDelay: isVisible ? `${item.delay}ms` : "0ms",
                    }}
                  >
                    <span 
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-[400ms] ${
                        isVisible ? item.color.split(" ")[0] : "bg-transparent"
                      }`}
                      style={{
                        transitionDelay: isVisible ? `${item.delay + 150}ms` : "0ms",
                      }}
                    />
                  </div>

                  {/* Milestone Card */}
                  <div 
                    className={`w-[85%] md:w-[46%] pl-10 md:pl-0 transition-all transform duration-[600ms]`}
                    style={{
                      transform: isVisible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.96)",
                      opacity: isVisible ? 1 : 0,
                      transitionDelay: isVisible ? `${item.delay}ms` : "0ms",
                    }}
                  >
                    <div className={`p-6 md:p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 relative group`}>
                      {/* Year badge */}
                      <span className={`inline-block px-3.5 py-1 rounded-full font-display font-black text-sm mb-4 ${item.accentBg} ${item.color.split(" ")[1]}`}>
                        {item.year}
                      </span>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold font-display text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">
                        {item.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-slate-500 text-sm font-normal leading-relaxed">
                        {item.description}
                      </p>
                    </div>
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
