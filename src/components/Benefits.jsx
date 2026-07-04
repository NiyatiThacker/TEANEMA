"use client";

export default function Benefits() {
  const benefits = [
    {
      id: 1,
      title: "Data-First Approach",
      description: "Every decision backed by analytics, not guesswork. We audit, track, and optimize every funnel stage.",
      badgeColor: "bg-amber-50 border-amber-100 text-brand-yellow group-hover:bg-brand-yellow group-hover:border-brand-yellow",
      textColor: "group-hover:text-brand-yellow",
      borderColor: "hover:border-brand-yellow/30 hover:shadow-brand-yellow/5",
    },
    {
      id: 2,
      title: "Transparent Reporting",
      description: "Real-time dashboards. No hidden numbers, ever. You see exactly where your budget goes and what it brings.",
      badgeColor: "bg-blue-50 border-blue-100 text-brand-blue group-hover:bg-brand-blue group-hover:border-brand-blue",
      textColor: "group-hover:text-brand-blue",
      borderColor: "hover:border-brand-blue/30 hover:shadow-brand-blue/5",
    },
    {
      id: 3,
      title: "Dedicated Strategy Team",
      description: "One point of contact who actually knows your brand. Direct access to experts, not account managers.",
      badgeColor: "bg-red-50 border-red-100 text-brand-red group-hover:bg-brand-red group-hover:border-brand-red",
      textColor: "group-hover:text-brand-red",
      borderColor: "hover:border-brand-red/30 hover:shadow-brand-red/5",
    },
    {
      id: 4,
      title: "Fast Execution",
      description: "Campaigns launched in days, not months. We move quickly to capture market opportunities and scale.",
      badgeColor: "bg-emerald-50 border-emerald-100 text-brand-green group-hover:bg-brand-green group-hover:border-brand-green",
      textColor: "group-hover:text-brand-green",
      borderColor: "hover:border-brand-green/30 hover:shadow-brand-green/5",
    },
    {
      id: 5,
      title: "Flexible Engagements",
      description: "Scale up, pause, or pivot — no long lock-ins. We earn your business month after month with performance.",
      badgeColor: "bg-blue-50 border-blue-100 text-brand-blue group-hover:bg-brand-blue group-hover:border-brand-blue",
      textColor: "group-hover:text-brand-blue",
      borderColor: "hover:border-brand-blue/30 hover:shadow-brand-blue/5",
    },
    {
      id: 6,
      title: "ROI-Obsessed",
      description: "We measure success in revenue, not impressions. If it doesn't move your bottom line, it doesn't count.",
      badgeColor: "bg-emerald-50 border-emerald-100 text-brand-green group-hover:bg-brand-green group-hover:border-brand-green",
      textColor: "group-hover:text-brand-green",
      borderColor: "hover:border-brand-green/30 hover:shadow-brand-green/5",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden z-10 border-b border-slate-100">
      {/* Decorative details */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-slate-100/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-slate-100 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24 reveal">
          <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">Why Us</p>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-900 tracking-tight leading-tight">
            Marketing That's Built Around Your Business, Not a Template
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className={`p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group reveal reveal-delay-${(index % 3) + 1} ${benefit.borderColor}`}
            >
              {/* Check Indicator */}
              <div className={`w-10 h-10 rounded-full border flex items-center justify-center mb-6 transition-colors duration-300 ${benefit.badgeColor}`}>
                <svg
                  className="w-5 h-5 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              {/* Title */}
              <h3 className={`text-lg font-bold font-display text-slate-900 mb-3 transition-colors duration-300 ${benefit.textColor}`}>
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed font-normal">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
