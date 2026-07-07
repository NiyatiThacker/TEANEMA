"use client";

import { useEffect, useRef, useState } from "react";

// Helper component for the Magnetic Button effect
function MagneticButton({ children, href, className }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    
    // Calculate distance from center
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    // Apply a weak "pull" factor (0.2 means it moves 20% of the distance to the mouse)
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <a
      href={href}
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`block transition-transform duration-150 ease-out ${className}`}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      {children}
    </a>
  );
}

export default function AboutCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleContainerMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section 
      id="about-cta" 
      ref={sectionRef}
      className="py-32 md:py-48 bg-white relative overflow-hidden z-10 group"
    >
      <div 
        ref={containerRef}
        onMouseMove={handleContainerMouseMove}
        className="absolute inset-0 w-full h-full"
      >
        {/* Grid texture removed per user request */}
        
        {/* Interactive Mouse Spotlight - Brand Orange */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(242,114,36,0.06), transparent 40%)`
          }}
        />
        
        {/* Secondary tighter spotlight - Brand Blue */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,98,190,0.04), transparent 40%)`
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center pointer-events-none">
        
        <h2 
          className={`text-5xl md:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-[#3E2723] mb-8 transition-all transform duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          Got a Brand <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-400">Ready to Stand Out?</span>
        </h2>
        
        <p 
          className={`text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-2xl mb-14 transition-all transform duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          Whether you're launching, scaling, or reinventing your brand, TeaNema is here to bring your vision to life through creative strategy, impactful storytelling, and result-driven marketing.
        </p>
        
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-8 transition-all transform duration-1000 delay-400 pointer-events-auto ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
          }`}
        >
          {/* Magnetic Primary Button */}
          <MagneticButton href="/#contact">
            <div className="group/btn relative inline-flex items-center justify-center px-10 py-5 font-bold text-white bg-[#F27224] rounded-full overflow-hidden transition-all duration-300 shadow-xl shadow-orange-500/20 hover:shadow-[0_10px_40px_rgba(242,114,36,0.3)]">
              <span className="absolute inset-0 bg-[#e05a0a] w-0 group-hover/btn:w-full transition-all duration-300 ease-out z-0" />
              <span className="relative z-10 flex items-center gap-3 text-lg tracking-wide">
                Let's Build Your Brand
                <svg className="w-6 h-6 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          </MagneticButton>

          {/* Magnetic Secondary CTA */}
          <MagneticButton href="#">
            <div className="inline-flex items-center justify-center px-6 py-4 font-bold text-slate-600 hover:text-[#3E2723] transition-colors duration-300 text-lg">
              Talk to Our Team
            </div>
          </MagneticButton>
        </div>

      </div>
    </section>
  );
}
