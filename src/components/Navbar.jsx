"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import TeanemaLogo from "./TeanemaLogo";
import { VscHome, VscOrganization, VscLayers, VscMail } from "react-icons/vsc";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isOverVideo, setIsOverVideo] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const lastScrollY = useRef(0);

  const navLinks = [
    { name: "Home", href: "/", icon: <VscHome className="w-[18px] h-[18px] mb-[3px] opacity-90" /> },
    { name: "About", href: "/about", icon: <VscOrganization className="w-[18px] h-[18px] mb-[3px] opacity-90" /> },
    { name: "Services", href: "/services", hasDropdown: true, icon: <VscLayers className="w-[18px] h-[18px] mb-[3px] opacity-90" /> },
    { name: "Contact", href: "/#contact", icon: <VscMail className="w-[18px] h-[18px] mb-[3px] opacity-90" /> },
  ];

  const serviceItems = [
    { name: "CGI Advertising", href: "/services/cgi-advertising" },
    { name: "CGI Product Advertising", href: "/services/cgi-product-advertising" },
    { name: "Real Estate Marketing", href: "/services/real-estate-marketing" },
    { name: "Advertising Agency", href: "/services/advertising-agency" },
    { name: "Exhibition Stall Design", href: "/services/exhibition-stall-design" },
    { name: "Branding & Brand Identity", href: "/services/branding-brand-identity" },
    { name: "Production House", href: "/services/production-house" },
    { name: "Digital Video Campaigns", href: "/services/digital-video-campaigns" },
    { name: "Outdoor Advertising", href: "/services/outdoor-advertising" },
    { name: "3D Anamorphic Advertising", href: "/services/3d-anamorphic-advertising" },
    { name: "Social Media Management", href: "/services/social-media-management" },
    { name: "Meta & Google Ads", href: "/services/meta-google-ads" },
    { name: "Website Design & Development", href: "/services/website-design-development" },
    { name: "SEO", href: "/services/seo" },
    { name: "Promotional Videos", href: "/services/promotional-videos" },
    { name: "Billboards & SMDs", href: "/services/billboards-smds" },
  ];

  // Scroll listener (checks for scroll direction and video overlay)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      // Check if over video on home page
      if (pathname === "/") {
        setIsOverVideo(currentScrollY < window.innerHeight * 0.7);
      } else {
        setIsOverVideo(false);
      }

      // Determine scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsScrollingDown(true); // User is scrolling down
      } else if (currentScrollY < lastScrollY.current) {
        setIsScrollingDown(false); // User is scrolling up
      }
      
      lastScrollY.current = currentScrollY;
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Click outside dropdown listener
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    const handleEscape = (e) => { if (e.key === "Escape") setIsDropdownOpen(false); };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleLinkClick = (e, href, hasDropdown) => {
    if (hasDropdown) {
      setIsDropdownOpen(false);
      return;
    }
    setIsMobileMenuOpen(false);
    setIsMobileDropdownOpen(false);
    setIsDropdownOpen(false);

    const hashIndex = href.indexOf("#");
    if (hashIndex !== -1) {
      const hash = href.substring(hashIndex);
      const isSamePage =
        (pathname === "/" && (href.startsWith("#") || href.startsWith("/#"))) ||
        (pathname === "/services" && href.includes("/services#"));
      if (isSamePage) {
        e.preventDefault();
        const target = document.querySelector(hash);
        if (target) {
          const pos = target.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: pos, behavior: "smooth" });
          window.history.pushState(null, "", hash);
        }
      }
    }
  };

  const shouldBeTransparent = (isScrollingDown || isOverVideo) && !isMobileMenuOpen;

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-[2rem] hover:opacity-100 ${
        isScrolled ? "top-4 w-[95%] max-w-4xl py-2 px-3" : "top-6 w-[95%] max-w-6xl py-3 px-5"
      } ${
        shouldBeTransparent ? "opacity-20" : "opacity-100"
      }`}
      style={{
        background: "rgba(255, 255, 255, 0.70)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
        border: "1px solid rgba(255, 255, 255, 0.8)",
        borderTop: "1px solid rgba(255, 255, 255, 1)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 1)",
      }}
    >
      <style>{`
        .nav-glass-link {
          position: relative;
          overflow: hidden;
        }
        .nav-glass-link::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: inherit;
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-top: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: inset 0 2px 4px rgba(255,255,255,0.8), 0 4px 16px rgba(0,0,0,0.06);
          opacity: 0;
          transform: scale(0.9);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: -1;
        }
        .nav-glass-link::after {
          content: '';
          position: absolute;
          top: 0;
          left: -150%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.95), transparent);
          transform: skewX(-25deg);
          transition: none;
          z-index: -1;
        }
        .nav-glass-link:hover::before {
          opacity: 1;
          transform: scale(1);
        }
        .nav-glass-link:hover::after {
          left: 150%;
          transition: left 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
      <div className="w-full flex items-center justify-between relative">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center justify-center z-10 hover:bg-slate-50 transition-colors py-1.5 px-4 rounded-full border border-transparent hover:border-slate-100 shadow-sm hover:shadow-inner"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              setIsMobileMenuOpen(false);
              setIsMobileDropdownOpen(false);
              setIsDropdownOpen(false);
            }
          }}
        >
          <TeanemaLogo className="h-8 w-auto" showBeam={false} walk="loop" animated={true} />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 relative">
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              const isActive = pathname.startsWith("/services");
              return (
                <div
                  key={link.name}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href, true)}
                    className={`text-[13px] font-semibold tracking-wide transition-all duration-300 relative py-2.5 px-6 rounded-full flex flex-col items-center justify-center min-w-[80px] focus:outline-none ${
                      isActive ? "text-brand-blue" : "text-slate-500 hover:text-[#3E2723] nav-glass-link"
                    }`}
                    style={isActive ? {
                      background: "rgba(0, 98, 190, 0.08)",
                      border: "1px solid rgba(0, 98, 190, 0.15)",
                      borderTop: "1px solid rgba(0, 98, 190, 0.25)",
                      boxShadow: "inset 0 1px 2px rgba(255, 255, 255, 0.8), 0 2px 8px rgba(0,0,0,0.03)"
                    } : {}}
                  >
                    {link.icon}
                    <div className="flex items-center gap-1">
                      {link.name}
                      <svg className={`w-3 h-3 transition-transform duration-200 ${isDropdownOpen ? "rotate-180 text-brand-blue" : "text-slate-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </Link>

                  {/* Dropdown Menu (Light Glass) */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50 transition-all duration-200 ${
                      isDropdownOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="w-[680px] rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-100 shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-6">
                      <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                        {serviceItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={(e) => handleLinkClick(e, item.href)}
                            className="group relative text-[13px] font-semibold text-slate-600 px-3 py-2.5 rounded-xl overflow-hidden transition-all duration-300 hover:text-brand-blue flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)]"
                          >
                            {/* Glass Background on Hover */}
                            <div className="absolute inset-0 bg-slate-50/80 border border-slate-100/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl z-0" />
                            
                            {/* Glass Shine Sweep Animation */}
                            <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-12 z-0" />

                            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue opacity-50 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                            <span className="relative z-10">{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            const isActive =
              (link.name === "About" && pathname === "/about") ||
              (link.name === "Services" && pathname.startsWith("/services")) ||
              (link.name === "Home" && pathname === "/");

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-[13px] font-semibold tracking-wide transition-all duration-300 relative py-2.5 px-6 rounded-full flex flex-col items-center justify-center min-w-[80px] ${
                  isActive ? "text-brand-blue" : "text-slate-500 hover:text-[#3E2723] nav-glass-link"
                }`}
                style={isActive ? {
                  background: "rgba(0, 98, 190, 0.08)",
                  border: "1px solid rgba(0, 98, 190, 0.15)",
                  borderTop: "1px solid rgba(0, 98, 190, 0.25)",
                  boxShadow: "inset 0 1px 2px rgba(255, 255, 255, 0.8), 0 2px 8px rgba(0,0,0,0.03)"
                } : {}}
              >
                {link.icon}
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href={(pathname === "/about" || pathname === "/services") ? "/#contact" : "#contact"}
            onClick={(e) => handleLinkClick(e, (pathname === "/about" || pathname === "/services") ? "/#contact" : "#contact")}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-white text-[13px] font-bold hover:-translate-y-0.5 transition-all duration-200 shadow-md"
            style={{
              background: "linear-gradient(135deg, #F27224, #e05a0a)",
              boxShadow: "0 4px 16px rgba(242,114,36,0.35)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 6px 24px rgba(242,114,36,0.55)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 4px 16px rgba(242,114,36,0.35)"; }}
          >
            Get Free Audit
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-slate-500 hover:text-[#3E2723] focus:outline-none transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer (Light Mode) */}
      <div
        className={`md:hidden absolute top-[110%] left-1/2 -translate-x-1/2 w-full rounded-[2rem] transition-all duration-300 ease-out origin-top ${
          isMobileMenuOpen
            ? "opacity-100 scale-y-100 pointer-events-auto"
            : "opacity-0 scale-y-95 pointer-events-none"
        }`}
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(32px) saturate(200%)",
          WebkitBackdropFilter: "blur(32px) saturate(200%)",
          border: "1px solid rgba(255, 255, 255, 1)",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)",
        }}
      >
        <div className="px-6 py-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <div key={link.name} className="flex flex-col">
                  <div className="flex items-center justify-between border-b border-slate-100 py-2">
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-lg font-medium text-slate-700 flex items-center gap-3"
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </Link>
                    <button
                      onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                      className="p-2"
                    >
                      <svg
                        className={`w-5 h-5 transition-transform duration-200 ${
                          isMobileDropdownOpen ? "rotate-180 text-brand-blue" : "text-slate-400"
                        }`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  <div
                    className={`flex flex-col gap-1.5 pl-4 border-l border-slate-100 transition-all duration-300 origin-top overflow-hidden ${
                      isMobileDropdownOpen ? "max-h-[600px] opacity-100 py-2" : "max-h-0 opacity-0 pointer-events-none"
                    }`}
                  >
                    {serviceItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleLinkClick(e, item.href)}
                        className="text-sm font-semibold text-slate-500 py-1.5 hover:text-brand-blue block"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            const isActive =
              (link.name === "About" && pathname === "/about") ||
              (link.name === "Services" && pathname.startsWith("/services")) ||
              (link.name === "Home" && pathname === "/");

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-lg font-medium py-2 border-b border-slate-100 transition-colors flex items-center gap-3 ${
                  isActive ? "text-brand-blue" : "text-slate-600 hover:text-[#3E2723]"
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            );
          })}
          <a
            href={(pathname === "/about" || pathname === "/services") ? "/#contact" : "#contact"}
            onClick={(e) => handleLinkClick(e, (pathname === "/about" || pathname === "/services") ? "/#contact" : "#contact")}
            className="inline-flex items-center justify-center w-full px-5 py-3 mt-4 rounded-full text-white font-semibold transition-all duration-200 text-center shadow-lg"
            style={{
              background: "linear-gradient(135deg, #F27224, #e05a0a)",
            }}
          >
            Get Free Audit
          </a>
        </div>
      </div>
    </nav>
  );
}
