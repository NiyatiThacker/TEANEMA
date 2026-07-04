"use client";

import { useEffect, useState } from "react";
import { VscSearch, VscMegaphone, VscCode, VscHeart } from "react-icons/vsc";

export default function AboutHero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleScrollToCTA = (e) => {
    e.preventDefault();
    const element = document.querySelector("#about-cta");
    if (element) {
      const navbarHeight = 80;
      const targetPosition = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const words = "Marketing That Earns Attention, Not Just Impressions.".split(" ");

  return (
    <section className="relative h-[100dvh] md:h-[85vh] min-h-[500px] md:min-h-[650px] w-full overflow-hidden bg-black flex items-center justify-center pt-24 pb-16">
      {/* Video Background (Retained as requested) */}
      {isMounted && (
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-contain md:object-cover md:scale-[1.15] z-0 opacity-80"
        >
          <source src="/about_bg2.mp4" type="video/mp4" />
        </video>
      )}
      
      {/* Soft overlay to ensure readability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-0" />

      {/* Floating Parallax Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <VscSearch className="absolute top-[20%] left-[10%] text-white/10 w-16 h-16 animate-pulse" style={{ animationDuration: '4s' }} />
        <VscMegaphone className="absolute bottom-[20%] left-[20%] text-white/10 w-20 h-20 animate-bounce" style={{ animationDuration: '6s' }} />
        <VscCode className="absolute top-[30%] right-[15%] text-white/10 w-24 h-24 animate-pulse" style={{ animationDuration: '5s' }} />
        <VscHeart className="absolute bottom-[30%] right-[10%] text-white/10 w-12 h-12 animate-bounce" style={{ animationDuration: '7s' }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-20 text-center flex flex-col items-center">
        
        {/* Animated Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.1] mb-6 flex flex-wrap justify-center gap-x-3 gap-y-2">
          {words.map((word, i) => (
            <span
              key={i}
              className={`inline-block transition-all duration-700 transform ${
                isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {word === "Attention," || word === "Impressions." ? (
                <span className="text-[#F27224]">{word}</span>
              ) : (
                word
              )}
            </span>
          ))}
        </h1>

        {/* Supporting Line */}
        <p 
          className={`text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mb-8 transition-all duration-1000 delay-[800ms] transform ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          From strategy to execution, we help brands build visibility, drive engagement, and turn clicks into customers — across every digital channel that matters.
        </p>

        {/* Service Line */}
        <p 
          className={`text-sm md:text-base text-slate-400 font-semibold tracking-wide mb-10 transition-all duration-1000 delay-[1000ms] transform ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          SEO • Paid Ads • Social Media • Branding • Content • Web Development
        </p>

        {/* Magnetic Hover CTA Button */}
        <div 
          className={`transition-all duration-1000 delay-[1200ms] transform ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#about-cta"
            onClick={handleScrollToCTA}
            className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#F27224] text-white font-bold text-lg hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(242,114,36,0.3)] hover:shadow-[0_0_30px_rgba(242,114,36,0.6)] overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Let's Build Something Great
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            {/* Hover pulse effect */}
            <div className="absolute inset-0 z-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <div 
          className={`absolute bottom-[-60px] animate-bounce transition-all duration-1000 delay-[1500ms] ${
            isMounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-2 bg-white/60 rounded-full animate-pulse"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
