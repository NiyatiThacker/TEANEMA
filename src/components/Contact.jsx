"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("idle"); // idle | sending | success
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          hasAnimated.current = true;
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const phoneVal = value.replace(/[^0-9+]/g, "");
      setFormData((prev) => ({ ...prev, [name]: phoneVal }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");

    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        message: "",
      });
      
      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className={`py-24 md:py-40 bg-[#f8fafc] relative overflow-hidden z-10 border-b border-slate-100 transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Massive moving gradient blobs for the background */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[80vw] md:w-[50vw] h-[80vw] md:h-[50vw] rounded-full blur-[120px] pointer-events-none z-0 opacity-40 animate-pulse" 
        style={{ background: "radial-gradient(circle, #F27224 0%, transparent 70%)", animationDuration: '8s' }} 
      />
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[80vw] md:w-[50vw] h-[80vw] md:h-[50vw] rounded-full blur-[120px] pointer-events-none z-0 opacity-30 animate-pulse" 
        style={{ background: "radial-gradient(circle, #0062BE 0%, transparent 70%)", animationDuration: '10s' }} 
      />
      <div 
        className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] rounded-full blur-[100px] pointer-events-none z-0 opacity-20 animate-pulse" 
        style={{ background: "radial-gradient(circle, #10B981 0%, transparent 70%)", animationDuration: '12s' }} 
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Floating Glass Bento Box */}
        <div 
          className={`w-full backdrop-blur-[40px] bg-white/50 border border-white/80 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] rounded-[3rem] p-8 md:p-16 lg:p-20 flex flex-col lg:flex-row gap-16 lg:gap-24 relative overflow-hidden transition-all duration-1000 transform ${
            isVisible ? "translate-y-0" : "translate-y-12"
          }`}
        >
          {/* Subtle inner reflection line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />

          {/* Left Side: Form */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 tracking-tight leading-tight mb-4">
              Ready to <span style={{ color: "#F27224" }}>scale?</span>
            </h2>
            <p className="text-lg text-slate-500 mb-12 max-w-md">
              Drop your details below. No spam, no sales pressure. Just a straight conversation about growing your revenue.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <input 
                    type="text" 
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b-2 border-slate-300/60 focus:border-[#F27224] py-3 text-lg outline-none text-slate-900 transition-colors peer"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-3 text-slate-400 text-lg pointer-events-none transition-all duration-300 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#F27224] peer-focus:font-bold peer-valid:-top-5 peer-valid:text-xs peer-valid:text-slate-400 peer-valid:font-bold">
                    Full Name
                  </label>
                </div>
                
                <div className="relative group">
                  <input 
                    type="text" 
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b-2 border-slate-300/60 focus:border-[#F27224] py-3 text-lg outline-none text-slate-900 transition-colors peer"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-3 text-slate-400 text-lg pointer-events-none transition-all duration-300 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#F27224] peer-focus:font-bold peer-valid:-top-5 peer-valid:text-xs peer-valid:text-slate-400 peer-valid:font-bold">
                    Company Name
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b-2 border-slate-300/60 focus:border-[#F27224] py-3 text-lg outline-none text-slate-900 transition-colors peer"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-3 text-slate-400 text-lg pointer-events-none transition-all duration-300 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#F27224] peer-focus:font-bold peer-valid:-top-5 peer-valid:text-xs peer-valid:text-slate-400 peer-valid:font-bold">
                    Email Address
                  </label>
                </div>
                
                <div className="relative group">
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b-2 border-slate-300/60 focus:border-[#F27224] py-3 text-lg outline-none text-slate-900 transition-colors peer"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-3 text-slate-400 text-lg pointer-events-none transition-all duration-300 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#F27224] peer-focus:font-bold peer-valid:-top-5 peer-valid:text-xs peer-valid:text-slate-400 peer-valid:font-bold">
                    Phone Number
                  </label>
                </div>
              </div>
              
              <div className="relative group mt-2">
                <textarea 
                  name="message"
                  required
                  rows="3"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b-2 border-slate-300/60 focus:border-[#F27224] py-3 text-lg outline-none text-slate-900 transition-colors peer resize-none"
                  placeholder=" "
                />
                <label className="absolute left-0 top-3 text-slate-400 text-lg pointer-events-none transition-all duration-300 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#F27224] peer-focus:font-bold peer-valid:-top-5 peer-valid:text-xs peer-valid:text-slate-400 peer-valid:font-bold">
                  What are your goals?
                </label>
              </div>

              {/* Submit Action */}
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-6">
                <button 
                  type="submit"
                  disabled={formStatus === "sending" || formStatus === "success"}
                  className="px-10 py-5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-lg font-bold font-display shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl disabled:opacity-50 disabled:hover:translate-y-0 disabled:cursor-not-allowed group flex items-center gap-3 w-full sm:w-auto justify-center"
                >
                  {formStatus === "idle" && "Build My Growth Plan"}
                  {formStatus === "sending" && "Sending Request..."}
                  {formStatus === "success" && "Request Sent!"}
                  
                  {formStatus === "idle" && (
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </button>
                
                <div className={`transition-all duration-500 transform ${formStatus === "success" ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 absolute pointer-events-none'}`}>
                  {formStatus === "success" && (
                    <p className="text-[#10B981] font-bold text-sm flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      We'll be in touch!
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>

          {/* Right Side: Bento Contact Cards */}
          <div className="w-full lg:w-[380px] flex flex-col gap-6 pt-4 lg:pt-0">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">Direct Contact</h3>
            
            {/* Bento Card 1: Email */}
            <a href="mailto:hello@yourbrand.com" className="bg-white/60 hover:bg-white transition-colors duration-300 backdrop-blur-md rounded-3xl p-6 border border-white shadow-sm flex items-start gap-5 group">
              <div className="w-12 h-12 rounded-2xl bg-[#0062BE]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-[#0062BE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-slate-900 font-bold font-display text-xl mb-1">Email Us</h4>
                <p className="text-slate-500 text-sm">hello@yourbrand.com</p>
              </div>
            </a>

            {/* Bento Card 2: Phone */}
            <a href="tel:+919876543210" className="bg-white/60 hover:bg-white transition-colors duration-300 backdrop-blur-md rounded-3xl p-6 border border-white shadow-sm flex items-start gap-5 group">
              <div className="w-12 h-12 rounded-2xl bg-[#10B981]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-slate-900 font-bold font-display text-xl mb-1">Call Us</h4>
                <p className="text-slate-500 text-sm">+91 XXXXX XXXXX</p>
              </div>
            </a>

            {/* Bento Card 3: Office */}
            <div className="bg-white/60 hover:bg-white transition-colors duration-300 backdrop-blur-md rounded-3xl p-6 border border-white shadow-sm flex items-start gap-5 group cursor-default">
              <div className="w-12 h-12 rounded-2xl bg-[#F27224]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-[#F27224]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-slate-900 font-bold font-display text-xl mb-1">Our Office</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Ahmedabad, Gujarat, India<br/>Mon-Sat, 10 AM – 7 PM</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
