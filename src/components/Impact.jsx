"use client";

import { useEffect, useState, useRef } from "react";

function CountUp({ end, duration = 2000, suffix = "", prefix = "", decimals = 0 }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;
    const startValue = 0;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentValue = startValue + easedProgress * (end - startValue);
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function Impact() {
  const stats = [
    {
      id: 1,
      end: 250,
      suffix: "+",
      label: "Brands Scaled",
      desc: "From local startups to global companies",
      colorHex: "#F27224", // TEANEMA Orange
    },
    {
      id: 2,
      end: 4.8,
      decimals: 1,
      suffix: "x",
      label: "Avg. ROAS",
      desc: "Optimized ad budgets that convert revenue",
      colorHex: "#0062BE", // TEANEMA Blue
    },
    {
      id: 3,
      end: 120,
      prefix: "₹",
      suffix: "Cr+",
      label: "Ad Spend Managed",
      desc: "Highly controlled, high-return campaigns",
      colorHex: "#F27224", // TEANEMA Orange
    },
    {
      id: 4,
      end: 96,
      suffix: "%",
      label: "Client Retention",
      desc: "Long-term partnerships built on performance",
      colorHex: "#0062BE", // TEANEMA Blue
    },
  ];

  return (
    <section id="impact" className="relative bg-white py-24 md:py-32 border-y border-slate-100 overflow-hidden">
      
      {/* Very subtle ambient glows in the background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-50/80 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto reveal">
          <p className="text-brand-blue text-[11px] font-extrabold uppercase tracking-[0.2em] mb-4">Our Impact</p>
          <h2 className="text-4xl md:text-5xl font-extrabold font-display text-[#3E2723] tracking-tight leading-[1.1] mb-6">
            Numbers That Speak Louder Than Promises.
          </h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            We don't deal in vanity metrics. Every campaign we run is heavily optimized for actual revenue growth and market dominance.
          </p>
        </div>

        {/* 4-Column Minimal Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 lg:gap-12 relative z-10">
          {stats.map((stat, index) => (
            <div 
              key={stat.id} 
              className="group flex flex-col items-center text-center reveal cursor-default"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Stat Value */}
              <div className="text-5xl md:text-6xl lg:text-7xl font-black font-display tracking-tighter text-[#3E2723] mb-4 transition-transform duration-500 ease-out group-hover:scale-110">
                <CountUp
                  end={stat.end}
                  decimals={stat.decimals || 0}
                  prefix={stat.prefix || ""}
                  suffix={stat.suffix || ""}
                />
              </div>

              {/* Expanding Colored Accent Line */}
              <div 
                className="h-1 w-8 rounded-full mb-6 transition-all duration-500 ease-out group-hover:w-16" 
                style={{ backgroundColor: stat.colorHex }}
              />

              {/* Text Info */}
              <h3 className="text-xl font-bold text-[#3E2723] font-display mb-3">
                {stat.label}
              </h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-[200px] lg:max-w-none">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
