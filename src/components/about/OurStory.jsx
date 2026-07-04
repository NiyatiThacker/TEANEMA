"use client";

import { useEffect, useRef, useState } from "react";

export default function OurStory() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      number: "2020",
      title: "The Beginning",
      description: "Founded with a simple goal: stop the guesswork and start measuring what matters. We realized the industry needed hard data, not just intuition.",
      colorClass: "text-[#F27224]",
      accentBg: "bg-[#F27224]/10"
    },
    {
      number: "150+",
      title: "Brands Scaled",
      description: "From ambitious local startups to global enterprise leaders, we expanded our footprint rapidly, turning clicks into real, measurable revenue across multiple industries.",
      colorClass: "text-[#0062BE]",
      accentBg: "bg-[#0062BE]/10"
    },
    {
      number: "45+",
      title: "Experts Today",
      description: "We are now a full-stack powerhouse of brilliant strategists, creatives, and data scientists dedicated to pushing boundaries and architecting growth every single day.",
      colorClass: "text-[#10B981]",
      accentBg: "bg-[#10B981]/10"
    }
  ];

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

  return (
    <section 
      id="our-story" 
      ref={sectionRef}
      className="py-24 md:py-32 bg-slate-50 relative overflow-hidden z-10"
    >
      {/* Background Soft Blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-[#F27224]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 w-[600px] h-[600px] bg-[#0062BE]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Header Section */}
        <div 
          className={`max-w-4xl mx-auto text-center mb-20 transition-all transform duration-1000 ${
            isVisible ? "opacity-100 translate-y-0 ease-out" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F27224] mb-4">How It All Kicked Off</p>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold font-display text-slate-900 tracking-tight leading-[1.1] mb-8">
            Built by Marketers Who Were Tired of Guesswork
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            It all started with a simple frustration — brands were spending money on marketing without knowing what actually worked. What began as a small team solving problems has grown into a full-service agency. Our mission has stayed exactly the same: <strong className="text-slate-900 font-semibold">deliver marketing that's measurable, honest, and built for real growth.</strong>
          </p>
        </div>

        {/* Interactive Hover Tabs Section */}
        <div 
          className={`transition-all transform duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0 ease-out" : "opacity-0 translate-y-16"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 p-8 md:p-16 relative overflow-hidden">
            
            {/* Dynamic Card Background Blob based on active tab */}
            <div 
              className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none transition-colors duration-1000 ${tabs[activeTab].accentBg}`} 
            />

            {/* Left Column: Massive Numbers (Hover Triggers) */}
            <div className="lg:col-span-5 flex flex-col gap-2 md:gap-4 lg:border-r lg:border-slate-100 pr-0 lg:pr-12 relative z-10">
              {tabs.map((tab, index) => (
                <div 
                  key={index}
                  onMouseEnter={() => setActiveTab(index)}
                  className={`cursor-pointer transition-all duration-500 flex items-center justify-center lg:justify-end py-4 lg:py-6 group rounded-3xl ${
                    activeTab === index 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-30 scale-95 hover:opacity-60'
                  }`}
                >
                  <h3 
                    className={`text-6xl sm:text-7xl lg:text-[7rem] font-black font-display tracking-tighter transition-colors duration-500 leading-none ${
                      activeTab === index ? tab.colorClass : 'text-slate-400'
                    }`}
                  >
                    {tab.number}
                  </h3>
                </div>
              ))}
            </div>

            {/* Right Column: Dynamic Content Pane */}
            <div className="lg:col-span-7 relative h-[250px] sm:h-[200px] lg:h-[350px] flex items-center pl-0 lg:pl-8 text-center lg:text-left z-10">
              {tabs.map((tab, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    activeTab === index 
                      ? 'opacity-100 translate-y-0 z-10' 
                      : 'opacity-0 translate-y-12 z-0 pointer-events-none'
                  }`}
                >
                  <h4 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold font-display mb-6 tracking-tight ${tab.colorClass}`}>
                    {tab.title}
                  </h4>
                  <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">
                    {tab.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
