"use client";

import { useEffect } from "react";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import TextPressure from "./TextPressure";

export default function Hero() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const navbarHeight = 80;
      const targetPosition = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    // Scroll reveal observer for the slogan content section
    const reveals = document.querySelectorAll(".reveal-hero");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* 1. Full-screen Video Hero */}
      <section className="relative min-h-[100dvh] w-full overflow-hidden flex items-center bg-[#060810]">

        {/* Background Video */}
        <video
          src="/DIGI.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-contain md:object-cover z-0"
        />
        {/* Soft dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/10 z-0 pointer-events-none" />

        {/* Scroll indicator */}
        <a
          href="#intro-content"
          onClick={(e) => handleScrollTo(e, "#intro-content")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 group cursor-pointer text-white select-none"
        >
          <span className="text-[10px] font-extrabold uppercase tracking-widest opacity-40 group-hover:opacity-70 transition-opacity">Scroll to Explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/25 flex items-start justify-center p-1 group-hover:border-white/50 transition-colors">
            <div className="w-1 h-1.5 rounded-full bg-white animate-scroll-dot" />
          </div>
        </a>

        {/* CSS Keyframes */}
        <style>{`
          @keyframes scrollDot {
            0% { transform: translateY(0); opacity: 0; }
            25% { opacity: 1; }
            75% { transform: translateY(14px); opacity: 0; }
            100% { transform: translateY(0); opacity: 0; }
          }
          .animate-scroll-dot { animation: scrollDot 2.2s infinite ease-in-out; }
          .reveal-hero {
            opacity: 0;
            transform: translateY(32px) scale(0.98);
            transition: all 850ms cubic-bezier(0.16, 1, 0.3, 1);
            will-change: transform, opacity;
          }
          .reveal-hero.active { opacity: 1; transform: translateY(0) scale(1); }
          .reveal-delay-100 { transition-delay: 100ms; }
          .reveal-delay-300 { transition-delay: 300ms; }
        `}</style>
      </section>

      {/* 2. Speed of Growth — TextPressure Section */}
      <section
        className="relative w-full overflow-hidden flex flex-col items-center justify-center bg-white border-b border-slate-100"
        style={{ paddingTop: "60px", paddingBottom: "60px" }}
      >
        {/* Brand ambient blobs */}
        <div
          className="absolute top-0 right-0 w-[550px] h-[550px] rounded-full blur-[160px] pointer-events-none blob-1"
          style={{ background: "radial-gradient(circle, rgba(242,114,36,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none blob-2"
          style={{ background: "radial-gradient(circle, rgba(0,98,190,0.08) 0%, transparent 70%)" }}
        />
        {/* Grid texture removed per user request */}

        <div className="relative z-20 flex flex-col items-center w-full px-6">

          {/* Animated live-dot label */}
          <div className="mb-8 flex items-center gap-3">
            <div className="w-16 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(242,114,36,0.4))" }} />
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#F27224" }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#F27224" }} />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: "#F27224" }}>What We Deliver</span>
            </div>
            <div className="w-16 h-px" style={{ background: "linear-gradient(90deg, rgba(0,98,190,0.4), transparent)" }} />
          </div>

          {/* Interactive TextPressure */}
          <div className="w-full max-w-5xl" style={{ height: "160px" }}>
            <TextPressure
              text="Speed of Growth"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#CC5500"
              strokeColor="#9b91c4"
              minFontSize={36}
            />
          </div>

          {/* Brand accent underline */}
          <div
            className="mt-2 w-24 h-1 rounded-full"
            style={{ background: "linear-gradient(90deg, #F27224, #0062BE)" }}
          />

          {/* Sub-caption */}
          <p className="mt-5 text-base text-slate-500 font-medium text-center max-w-lg leading-relaxed">
            Hover over the text to feel the pressure —
            <span style={{ color: "#F27224" }}> marketing that accelerates at every stage.</span>
          </p>
        </div>
      </section>

      {/* 3. Slogan Content Section (Triggered on Scroll) */}
      <section
        id="intro-content"
        className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-white scroll-mt-20 border-b border-slate-100"
      >
        {/* Brand ambient blobs */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-[130px] pointer-events-none z-0 blob-1" style={{ background: "radial-gradient(circle, rgba(0,98,190,0.07) 0%, transparent 70%)" }} />
        <div className="absolute bottom-10 left-10 w-[380px] h-[380px] rounded-full blur-[110px] pointer-events-none z-0 blob-2" style={{ background: "radial-gradient(circle, rgba(242,114,36,0.06) 0%, transparent 70%)" }} />
        {/* Grid texture removed per user request */}

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Right Content — ScrollStack approach */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col relative h-[500px] w-full reveal-hero reveal-delay-100 mt-10 lg:mt-0">
            <style>{`
              .hero-scroll-stack .scroll-stack-inner {
                padding: 1rem 0 !important;
                min-height: 100% !important;
              }
              .hero-scroll-stack .scroll-stack-card {
                height: 380px !important;
                padding: 3rem !important;
                border-radius: 2rem !important;
                margin-top: 0 !important;
                background: rgba(255, 255, 255, 0.95) !important;
                backdrop-filter: blur(12px) !important;
                border: 1px solid rgba(0,0,0,0.05) !important;
                box-shadow: 0 10px 40px -10px rgba(0,0,0,0.08) !important;
              }
              /* Hide scrollbar for internal scroller */
              .hero-scroll-stack::-webkit-scrollbar {
                display: none;
              }
              .hero-scroll-stack {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>
            
            <ScrollStack
              useWindowScroll={false}
              itemDistance={40}
              itemScale={0.05}
              itemStackDistance={20}
              stackPosition="5%"
              scaleEndPosition="2%"
              baseScale={0.9}
              blurAmount={1.2}
              className="hero-scroll-stack h-full w-full"
            >
              {/* Card 1: Main Headline */}
              <ScrollStackItem itemClassName="hero-stack-card flex flex-col justify-center text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-slate-900 leading-[1.08] mb-4">
                  Grow Your Brand.
                  <span className="block mt-1" style={{ color: "#0062BE" }}>
                    Dominate Your Market.
                  </span>
                </h1>
                <div className="mt-4 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#F27224" }} />
                    <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#F27224" }} />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Scroll inside to explore</span>
                </div>
              </ScrollStackItem>

              {/* Card 2: Slogan & Subhead */}
              <ScrollStackItem itemClassName="hero-stack-card flex flex-col justify-center text-left">
                <div className="font-display font-black text-4xl sm:text-5xl text-slate-950 leading-[0.95] tracking-tight mb-5">
                  Making<br />
                  Advertising<br />
                  Great again!
                </div>
                <p className="text-lg text-slate-650 font-normal leading-relaxed max-w-md">
                  We help businesses turn clicks into customers with data-driven SEO, performance marketing, and content strategies that actually move revenue.
                </p>
              </ScrollStackItem>

              {/* Card 3: CTAs */}
              <ScrollStackItem itemClassName="hero-stack-card flex flex-col justify-center text-left">
                <h3 className="text-3xl font-extrabold font-display text-slate-900 mb-6 tracking-tight">Ready to scale?</h3>
                <div className="flex flex-col gap-4 w-full sm:w-4/5 max-w-sm">
                  <a
                    href="#contact"
                    onClick={(e) => handleScrollTo(e, "#contact")}
                    className="btn-primary w-full text-center py-4"
                  >
                    Get Your Free Marketing Audit
                  </a>
                  <a
                    href="#services"
                    onClick={(e) => handleScrollTo(e, "#services")}
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold text-base hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-200 text-center shadow-sm"
                    style={{ borderColor: "rgba(0,98,190,0.2)" }}
                  >
                    See Our Work
                  </a>
                </div>
                <p className="text-sm text-slate-500 font-medium tracking-wide flex items-center gap-2 mt-6">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  No contracts. No jargon.
                </p>
              </ScrollStackItem>
            </ScrollStack>
          </div>

          {/* Hero Left Visual: Logo/Video — now ORDER 1 on desktop */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative w-full flex justify-center lg:justify-start reveal-hero reveal-delay-300">
            <div 
              className="w-full max-w-[600px] select-none relative group lg:-translate-x-4 mix-blend-multiply"
              style={{
                maskImage: "radial-gradient(ellipse at center, black 55%, transparent 88%)",
                WebkitMaskImage: "radial-gradient(ellipse at center, black 55%, transparent 88%)",
              }}
            >
              <video
                src="/create_animation.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover filter contrast-[1.18] brightness-[1.03]"
              />
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}
