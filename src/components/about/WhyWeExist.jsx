"use client";

import { useEffect, useRef, useState } from "react";
import { VscChecklist, VscGraphLine, VscLayout, VscFilter, VscHeart, VscDeviceCameraVideo, VscOrganization } from "react-icons/vsc";

export default function WhyWeExist() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "Brewed, Never Rushed",
      description: "Every great idea deserves time to develop. We believe in thoughtful strategy before flawless execution.",
      icon: <VscFilter className="w-8 h-8 md:w-10 md:h-10 text-[#F27224]" />
    },
    {
      title: "Stories Before Strategies",
      description: "Marketing works best when people feel something. That's why every campaign starts with a story worth telling.",
      icon: <VscHeart className="w-8 h-8 md:w-10 md:h-10 text-[#0062BE]" />
    },
    {
      title: "Creative Production, End to End",
      description: "From concept development and cinematic production to branding and digital campaigns, we bring every piece together under one creative roof.",
      icon: <VscDeviceCameraVideo className="w-8 h-8 md:w-10 md:h-10 text-[#10B981]" />
    },
    {
      title: "Creativity That Performs",
      description: "Beautiful visuals matter—but meaningful results matter more. We combine creative thinking with strategic execution to help brands grow with purpose.",
      icon: <VscGraphLine className="w-8 h-8 md:w-10 md:h-10 text-[#F27224]" />
    },
    {
      title: "Built on Collaboration",
      description: "The best work happens when ideas flow freely. We work closely with every brand, turning conversations into collaborations and visions into reality.",
      icon: <VscOrganization className="w-8 h-8 md:w-10 md:h-10 text-[#0062BE]" />
    },
    {
      title: "Every Frame Has a Purpose",
      description: "Every design, every visual, and every campaign is crafted intentionally—because details are what make stories unforgettable.",
      icon: <VscChecklist className="w-8 h-8 md:w-10 md:h-10 text-[#10B981]" />
    }
  ];

  return (
    <section 
      id="why-us" 
      ref={sectionRef}
      className="py-24 md:py-32 bg-slate-50 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div 
          className={`transition-all transform duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F27224] mb-4">
            The TeaNema Difference
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold font-display text-[#3E2723] tracking-tight mb-8">
            Where Bold Ideas Are Brewed & Stories Come Alive.
          </h2>
          
          <div className="flex flex-col gap-6 text-lg md:text-xl text-slate-600 leading-relaxed font-medium mb-16 md:mb-24">
            <p>Every brand has a story waiting to be told. At TeaNema, we believe the best stories aren't created by following trends—they're crafted through meaningful ideas, thoughtful strategy, and cinematic execution.</p>
            <p>Inspired by the warmth of a shared cup of tea and the timeless art of storytelling, we transform brands into experiences that people don't just see—they remember. From building distinctive identities and producing compelling visual content to executing performance-driven campaigns, every step is designed with purpose and precision.</p>
            <p>We don't believe in one-size-fits-all solutions. Every collaboration begins with understanding your vision, your audience, and your journey—because every brand deserves a story that's uniquely its own.</p>
          </div>
          
          <div className="flex flex-col gap-12 md:gap-16">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 group cursor-default">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-[2rem] bg-white shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold font-display text-[#3E2723] mb-2 md:mb-4 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
