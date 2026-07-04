"use client";

import { useEffect, useState, useRef } from "react";

function CountUp({ end, duration = 1800, suffix = "", prefix = "", decimals = 0 }) {
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
  }, [hasStarted, end, duration]);

  return (
    <span ref={elementRef} className="tabular-nums font-bold font-display text-current">
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
      colorClass: "text-[#F59E0B]", // Amber
      shadowClass: "hover:shadow-[0_25px_60px_-12px_rgba(245,158,11,0.3)]",
    },
    {
      id: 2,
      end: 4.8,
      decimals: 1,
      suffix: "x",
      label: "Avg. ROAS Delivered",
      desc: "Optimized ad budgets that convert revenue",
      colorClass: "text-[#3B82F6]", // Blue
      shadowClass: "hover:shadow-[0_25px_60px_-12px_rgba(59,130,246,0.3)]",
    },
    {
      id: 3,
      end: 120,
      prefix: "₹",
      suffix: "Cr+",
      label: "Ad Spend Managed",
      desc: "Highly controlled, high-return campaigns",
      colorClass: "text-[#EF4444]", // Red
      shadowClass: "hover:shadow-[0_25px_60px_-12px_rgba(239,68,68,0.3)]",
    },
    {
      id: 4,
      end: 96,
      suffix: "%",
      label: "Client Retention Rate",
      desc: "Long-term partnerships built on performance",
      colorClass: "text-[#10B981]", // Green
      shadowClass: "hover:shadow-[0_25px_60px_-12px_rgba(16,185,129,0.3)]",
    },
  ];

  return (
    <section id="impact" className="relative bg-slate-50 border-y border-slate-100 z-10">
      {/* Decorative details */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-slate-100/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-slate-100 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Side - Sticky Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-40 reveal">
            <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">Our Impact</p>
            <h2 className="text-4xl md:text-6xl font-bold font-display text-slate-900 tracking-tight leading-tight">
              Numbers That Speak Louder Than Promises.
            </h2>
            <p className="mt-6 text-lg text-slate-500 max-w-md">
              We don't deal in vanity metrics. Every campaign we run is heavily optimized for actual revenue growth and market dominance.
            </p>
          </div>

          {/* Right Side - Massive Scrolling Metrics */}
          <div className="lg:col-span-7 flex flex-col gap-32 md:gap-48 pt-10 lg:pt-20 pb-20">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className={`flex flex-col reveal reveal-delay-${(index % 3) + 1}`}
              >
                {/* Animated Massive Stat Value */}
                <div className={`text-7xl md:text-8xl lg:text-9xl font-black font-display tracking-tighter leading-none mb-4 md:mb-6 ${stat.colorClass}`}>
                  <CountUp
                    end={stat.end}
                    decimals={stat.decimals || 0}
                    prefix={stat.prefix || ""}
                    suffix={stat.suffix || ""}
                  />
                </div>

                {/* Stat Label */}
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-3 md:mb-4">
                  {stat.label}
                </h3>

                {/* Stat Desc */}
                <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-lg leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
