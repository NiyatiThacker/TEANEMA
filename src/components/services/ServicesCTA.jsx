"use client";

import { useEffect, useRef, useState } from "react";

export default function ServicesCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

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
      id="services-cta" 
      ref={sectionRef}
      className={`py-24 md:py-32 bg-white relative overflow-hidden z-10 border-b border-slate-100 transition-all duration-[800ms] ${
        isVisible ? "opacity-100 ease-out" : "opacity-0"
      }`}
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-yellow via-brand-blue to-brand-green" />
      
      {/* Shifting blurred auras */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-50 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
        
        {/* Heading */}
        <h2 
          className={`text-3xl md:text-5xl font-extrabold font-display tracking-tight text-[#3E2723] leading-tight mb-6 transition-all transform duration-[650ms] ${
            isVisible ? "opacity-100 translate-y-0 ease-out" : "opacity-0 translate-y-6"
          }`}
        >
          Let's Build Something Extraordinary Together.
        </h2>

        {/* Subtext */}
        <p 
          className={`text-base md:text-lg text-slate-500 font-normal leading-relaxed max-w-2xl mb-10 transition-all transform duration-[650ms] ${
            isVisible ? "opacity-100 translate-y-0 ease-out delay-100" : "opacity-0 translate-y-6"
          }`}
        >
          Whether you're launching a new brand, scaling an existing business, or planning your next big campaign, TeaNema is ready to turn your vision into measurable success.
        </p>

        {/* Pulsing CTA Button */}
        <div 
          className={`transition-all transform duration-[600ms] ${
            isVisible ? "opacity-100 translate-y-0 ease-out delay-200" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="/#contact"
            className="relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#3E2723] text-white font-semibold text-base hover:bg-[#3E2723] hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-slate-950/10 cursor-pointer overflow-hidden group btn-pulse"
          >
            Talk to Our Team →
          </a>
        </div>

        {/* CSS Keyframes for Pulse/Glow */}
        <style>{`
          @keyframes buttonPulse {
            0% { box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.15), 0 0 0 0px rgba(59, 130, 246, 0.4); }
            50% { box-shadow: 0 15px 30px -5px rgba(15, 23, 42, 0.2), 0 0 0 12px rgba(59, 130, 246, 0); }
            100% { box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.15), 0 0 0 0px rgba(59, 130, 246, 0); }
          }
          .btn-pulse {
            animation: buttonPulse 2.2s infinite ease-in-out;
          }
        `}</style>
      </div>
    </section>
  );
}
