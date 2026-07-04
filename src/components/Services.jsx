"use client";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Search Engine Optimization (SEO)",
      description: "Rank higher, get found faster. We build organic growth engines that compound over time — not quick fixes that fade.",
      icon: (
        <svg className="w-8 h-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3H6" />
        </svg>
      ),
      hoverClass: "hover:border-brand-blue/30 hover:shadow-brand-blue/5 hover:shadow-xl",
      textHoverClass: "group-hover:text-brand-blue",
      iconBg: "bg-blue-50/50",
    },
    {
      id: 2,
      title: "Paid Advertising (PPC & Social Ads)",
      description: "Google, Meta, and LinkedIn campaigns engineered for ROI, not just reach. Every rupee tracked, every result reported.",
      icon: (
        <svg className="w-8 h-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      hoverClass: "hover:border-brand-red/30 hover:shadow-brand-red/5 hover:shadow-xl",
      textHoverClass: "group-hover:text-brand-red",
      iconBg: "bg-red-50/50",
    },
    {
      id: 3,
      title: "Social Media Marketing",
      description: "Content and strategy that builds real audiences — not just followers. Consistent, on-brand, and engagement-focused.",
      icon: (
        <svg className="w-8 h-8 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      hoverClass: "hover:border-brand-yellow/40 hover:shadow-brand-yellow/5 hover:shadow-xl",
      textHoverClass: "group-hover:text-brand-yellow",
      iconBg: "bg-amber-50/50",
    },
    {
      id: 4,
      title: "Content Marketing & Copywriting",
      description: "Blogs, landing pages, and campaigns written to rank, connect, and convert.",
      icon: (
        <svg className="w-8 h-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      hoverClass: "hover:border-brand-green/30 hover:shadow-brand-green/5 hover:shadow-xl",
      textHoverClass: "group-hover:text-brand-green",
      iconBg: "bg-emerald-50/50",
    },
    {
      id: 5,
      title: "Website & Landing Page Design",
      description: "Fast, conversion-optimized websites that turn traffic into leads and leads into customers.",
      icon: (
        <svg className="w-8 h-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      hoverClass: "hover:border-brand-blue/30 hover:shadow-brand-blue/5 hover:shadow-xl",
      textHoverClass: "group-hover:text-brand-blue",
      iconBg: "bg-blue-50/50",
    },
    {
      id: 6,
      title: "Analytics & Growth Strategy",
      description: "Custom dashboards and monthly strategy reviews so you always know what's working — and what's next.",
      icon: (
        <svg className="w-8 h-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      hoverClass: "hover:border-brand-green/30 hover:shadow-brand-green/5 hover:shadow-xl",
      textHoverClass: "group-hover:text-brand-green",
      iconBg: "bg-emerald-50/50",
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-white relative overflow-hidden z-10 border-b border-slate-100">
      {/* Decorative details */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-slate-50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-50/35 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 reveal">
          <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">What We Do</p>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-900 tracking-tight leading-tight mb-6">
            Marketing Solutions Built to Convert
          </h2>
          <p className="text-lg text-slate-500 font-normal leading-relaxed">
            From visibility to conversion, we handle every stage of your customer's journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`p-8 rounded-2xl bg-white border border-slate-100 transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-start group reveal reveal-delay-${(index % 3) + 1} ${service.hoverClass}`}
            >
              {/* Icon Bubble */}
              <div className={`w-16 h-16 rounded-2xl ${service.iconBg} border border-slate-100/50 flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-300`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className={`text-xl font-bold font-display text-slate-900 mb-3 transition-colors duration-300 ${service.textHoverClass}`}>
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed font-normal">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
