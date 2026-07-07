"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import TeanemaLogo from "./TeanemaLogo";
export default function Footer() {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  const companyLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/#contact" },
  ];

  const serviceLinks = [
    { name: "SEO", href: "/services/seo" },
    { name: "Paid Ads", href: "/services/meta-google-ads" },
    { name: "Social Media", href: "/services/social-media-management" },
    { name: "CGI Advertising", href: "/services/cgi-advertising" },
    { name: "Web Design", href: "/services/website-design-development" },
  ];

  const resourceLinks = [
    { name: "Free Audit", href: "/#contact" },
  ];

  const socials = [
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      ),
    },
    {
      name: "Twitter / X",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  const handleScrollTo = (e, href) => {
    if (!href.startsWith("#") || href === "#") return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-white border-t border-slate-100"
    >
      {/* Ambient brand blobs */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none blob-1 z-0"
        style={{ background: "radial-gradient(circle, rgba(242,114,36,0.07) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full blur-[130px] pointer-events-none blob-2"
        style={{ background: "radial-gradient(circle, rgba(0,98,190,0.07) 0%, transparent 70%)" }}
      />
      {/* Dot grid texture removed per user request */}

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Links Grid inside glass card */}
        <div
          className={`mt-16 rounded-2xl p-8 md:p-10 mb-10 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            background: "rgba(255,255,255,0.60)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            border: "1px solid rgba(255,255,255,0.70)",
            boxShadow: "0 2px 24px rgba(0,0,0,0.05), 0 1px 0 rgba(255,255,255,1) inset",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

            {/* Logo & Tagline */}
            <div className="lg:col-span-2 flex flex-col items-start pr-4">
              <Link href="/" className="mb-5 block">
                <TeanemaLogo className="h-9 w-auto" showBeam={false} animated={true} />
              </Link>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-xs">
                TEANEMA — Marketing that pays for itself. We engineer digital funnels that capture attention, generate conversions, and scale revenue.
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
                    style={{
                      background: "rgba(0,0,0,0.04)",
                      border: "1px solid rgba(0,0,0,0.07)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "linear-gradient(135deg, #F27224, #e05a0a)";
                      e.currentTarget.style.border = "1px solid #F27224";
                      e.currentTarget.style.boxShadow = "0 4px 12px rgba(242,114,36,0.35)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(0,0,0,0.04)";
                      e.currentTarget.style.border = "1px solid rgba(0,0,0,0.07)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Company */}
            <div className="lg:col-span-1">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">Company</h4>
              <div className="flex flex-col gap-3.5">
                {companyLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-[13px] text-slate-600 hover:text-[#3E2723] transition-all duration-200 hover:translate-x-1 inline-block font-semibold"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-1">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">Services</h4>
              <div className="flex flex-col gap-3.5">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="text-[13px] text-slate-600 hover:text-[#3E2723] transition-all duration-200 hover:translate-x-1 inline-block font-medium"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="lg:col-span-1 flex flex-col items-start">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">Resources</h4>
              <div className="flex flex-col gap-3.5">
                {resourceLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="text-[13px] text-slate-600 hover:text-[#3E2723] transition-all duration-200 hover:translate-x-1 inline-block font-semibold"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-8 text-xs text-slate-400">
          <p>© 2026 TEANEMA. All rights reserved. | Managed by SBS Quantum</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-700 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-700 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
