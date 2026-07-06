"use client";

import { useEffect, useState, useRef } from "react";

function CountUp({ end, duration = 1800, suffix = "", prefix = "", decimals = 0 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const startValue = 0;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing: easeOutExpo
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
  }, [end, duration]);

  return (
    <span className="tabular-nums font-bold font-display text-current">
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function Impact() {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);

  const stats = [
    {
      id: 1,
      end: 250,
      suffix: "+",
      label: "Brands Scaled",
      desc: "From local startups to global companies",
      colorClass: "text-[#F27224]",
      colorHex: "#F27224",
    },
    {
      id: 2,
      end: 4.8,
      decimals: 1,
      suffix: "x",
      label: "Avg. ROAS Delivered",
      desc: "Optimized ad budgets that convert revenue",
      colorClass: "text-[#0062BE]",
      colorHex: "#0062BE",
    },
    {
      id: 3,
      end: 120,
      prefix: "₹",
      suffix: "Cr+",
      label: "Ad Spend Managed",
      desc: "Highly controlled, high-return campaigns",
      colorClass: "text-[#F27224]",
      colorHex: "#F27224",
    },
    {
      id: 4,
      end: 96,
      suffix: "%",
      label: "Client Retention Rate",
      desc: "Long-term partnerships built on performance",
      colorClass: "text-[#0062BE]",
      colorHex: "#0062BE",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const start = windowHeight / 2;
      const totalDistance = rect.height;
      const currentDistance = start - rect.top;
      
      let newProgress = currentDistance / totalDistance;
      newProgress = Math.max(0, Math.min(1, newProgress));
      
      setProgress(newProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // init
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="impact" className="relative bg-[#060810] py-24 md:py-32 overflow-hidden z-10 border-y border-white/5">
      
      {/* Background ambient blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0062BE]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F27224]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-24 max-w-3xl mx-auto px-6 relative z-20 reveal">
        <p className="text-[#F27224] text-sm font-bold uppercase tracking-widest mb-3">Our Impact</p>
        <h2 className="text-4xl md:text-6xl font-bold font-display text-white tracking-tight leading-tight">
          Numbers That Speak Louder Than Promises.
        </h2>
        <p className="mt-6 text-lg text-slate-400 max-w-xl mx-auto">
          We don't deal in vanity metrics. Every campaign we run is heavily optimized for actual revenue growth and market dominance.
        </p>
      </div>

      {/* Timeline */}
      <div ref={containerRef} className="relative max-w-5xl mx-auto px-6 pb-20 md:pb-32">
        {/* Base Line */}
        <div className="absolute left-[34px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2 rounded-full" />
        
        {/* Glowing Progress Line */}
        <div 
           className="absolute left-[33px] md:left-1/2 top-0 w-[4px] md:-translate-x-1/2 rounded-full shadow-[0_0_15px_#F27224]"
           style={{ 
             height: `${progress * 100}%`,
             background: "linear-gradient(to bottom, #F27224, #0062BE)",
             transition: "height 0.1s ease-out"
           }}
        />

        {/* Timeline Items */}
        <div className="flex flex-col gap-24 md:gap-32 relative z-10">
           {stats.map((stat, index) => {
              const isEven = index % 2 === 0;
              const itemThreshold = index / Math.max(1, stats.length - 1);
              const isActive = progress >= itemThreshold - 0.05;

              return (
                <div key={stat.id} className={`flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                   
                   {/* Empty space for alternating layout on desktop */}
                   <div className="hidden md:block md:w-1/2" />

                   {/* Center Node (Dot) */}
                   <div className="absolute left-[35px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-[3px] border-[#060810] transition-all duration-500 z-20"
                        style={{
                           backgroundColor: isActive ? stat.colorHex : "#334155",
                           boxShadow: isActive ? `0 0 20px ${stat.colorHex}` : 'none',
                           transform: `translateX(-50%) scale(${isActive ? 1.5 : 1})`
                        }}
                   />

                   {/* Content Card */}
                   <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                      <div className={`transition-all duration-700 transform ${isActive ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-8'}`}>
                         <div className={`text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tighter leading-none mb-3 ${stat.colorClass} transition-all duration-1000`}
                              style={{ textShadow: isActive ? `0 0 40px ${stat.colorHex}50` : 'none' }}
                         >
                            {isActive ? (
                              <CountUp end={stat.end} decimals={stat.decimals || 0} prefix={stat.prefix || ""} suffix={stat.suffix || ""} duration={1200} />
                            ) : "0"}
                         </div>
                         <h3 className="text-2xl md:text-3xl font-bold text-white font-display mb-2">{stat.label}</h3>
                         <p className="text-slate-400 text-base md:text-lg">{stat.desc}</p>
                      </div>
                   </div>
                </div>
              )
           })}
        </div>
      </div>
    </section>
  );
}
