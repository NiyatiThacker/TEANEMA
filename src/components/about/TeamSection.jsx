"use client";

import { useEffect, useRef, useState } from "react";
import TextType from "../TextType";

export default function TeamSection() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="founder" 
      ref={sectionRef}
      className="py-24 md:py-32 bg-white relative overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Text (Sliding up) */}
          <div 
            className={`flex flex-col items-start transition-all transform duration-1000 ${
              isVisible ? "opacity-100 translate-y-0 ease-out" : "opacity-0 translate-y-12"
            }`}
          >
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#F27224] mb-4">
              How We Started
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-display text-slate-900 tracking-tight leading-[1.1] mb-10">
              <span className="block mb-1 lg:mb-2">Meet</span>
              <span className="block text-[#F27224] min-h-[1.2em]">
                <TextType
                  text={["The Founder", "The Visionary", "Deep Shah"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                  loop={true}
                />
              </span>
            </h2>
            
            <div className="flex flex-col gap-6 text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
              <p>
                Established in 2019 by <strong className="text-slate-900 font-bold">Deep Shah</strong>,
              </p>
              <p>
                TEANEMA was founded as a digital marketing agency strictly dedicated to elevating ordinary businesses to the stature of highly respected, established brands.
              </p>
              <p>
                Through our collaboration with national and international clients, we have consistently set industry benchmarks, refusing to settle for vanity metrics when real revenue is on the line.
              </p>
              <p>
                Our unwavering commitment to excellence is deeply reflected in our innovative solutions and standardized approach, which collectively drive massive, impactful results for our partners.
              </p>
            </div>
          </div>

          {/* Right Column: Founder Image (Fading in) */}
          <div 
            className={`flex flex-col items-center lg:items-end transition-all transform duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0 ease-out" : "opacity-0 translate-x-12"
            }`}
          >
            {/* Image Wrapper */}
            <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] group bg-slate-100 border border-slate-100">
              
              {/* Replace src with the actual image of the founder */}
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop" 
                alt="Deep Shah - Founder" 
                className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
              />
              
              {/* Soft overlay for premium feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Brand Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F27224] opacity-20 blur-[50px] mix-blend-multiply" />
            </div>
            
            {/* Name and Title directly under the image (Center-aligned to match the image width) */}
            <div className="mt-8 text-center w-full max-w-[450px] flex flex-col items-center">
              <h3 className="text-3xl md:text-4xl font-black font-display text-slate-900 uppercase tracking-wide">
                Deep Shah
              </h3>
              <p className="text-[#F27224] font-bold tracking-[0.2em] uppercase mt-3 text-sm">
                Founder
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
