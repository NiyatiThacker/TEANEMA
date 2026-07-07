"use client";

import { useState, useEffect } from "react";

export default function OurProcess() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/teanema-banners/1.png",
    "/teanema-banners/2.png",
    "/teanema-banners/3.png",
    "/teanema-banners/4.png",
    "/teanema-banners/5.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section 
      id="our-process" 
      className="py-24 md:py-32 bg-slate-50 relative overflow-hidden z-10 border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header matching the screenshot vibe */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-display text-[#3E2723] tracking-tight">
            Behind the Curtain
          </h2>
        </div>

        {/* Image Slideshow Container */}
        <div className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-200 aspect-[4/3] sm:aspect-[16/9] lg:aspect-[2/1] bg-white">
          
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Process Banner ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 z-20">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? "bg-[#0062BE] scale-125 w-6" 
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={() => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center text-slate-800 hover:bg-white hover:scale-110 transition-all z-20"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center text-slate-800 hover:bg-white hover:scale-110 transition-all z-20"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
        </div>
      </div>
    </section>
  );
}
