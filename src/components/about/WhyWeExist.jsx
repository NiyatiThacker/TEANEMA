"use client";

import { useEffect, useRef, useState } from "react";
import { VscChecklist, VscGraphLine, VscLayout, VscFilter } from "react-icons/vsc";

export default function WhyWeExist() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "Data-Driven Approach",
      description: "Every strategy is backed by deep research, analytics, and real performance data — never assumptions.",
      icon: <VscGraphLine className="w-8 h-8 md:w-10 md:h-10 text-[#F27224]" />
    },
    {
      title: "Transparent Reporting",
      description: "No jargon, no hidden numbers. You always know exactly where your budget is going and the ROI it generates.",
      icon: <VscChecklist className="w-8 h-8 md:w-10 md:h-10 text-[#0062BE]" />
    },
    {
      title: "Tailored Strategies",
      description: "We abandon cookie-cutter templates. Every roadmap is uniquely architected around your brand and your specific audience.",
      icon: <VscLayout className="w-8 h-8 md:w-10 md:h-10 text-[#10B981]" />
    },
    {
      title: "Full-Funnel Expertise",
      description: "From initial awareness to final conversion, we expertly manage the entire customer journey under one unified roof.",
      icon: <VscFilter className="w-8 h-8 md:w-10 md:h-10 text-[#F27224]" />
    }
  ];

  return (
    <section 
      id="why-us" 
      ref={sectionRef}
      className="py-24 md:py-32 bg-slate-50 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div 
          className={`transition-all transform duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F27224] mb-4">
            Why Brands Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold font-display text-slate-900 tracking-tight mb-16 md:mb-24">
            Why People Stick Around
          </h2>
          
          <div className="flex flex-col gap-12 md:gap-16">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 group cursor-default">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-[2rem] bg-white shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold font-display text-slate-900 mb-2 md:mb-4 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
