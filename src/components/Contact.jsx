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
      // Only allow up to 10 digits
      const phoneVal = value.replace(/[^0-9]/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: phoneVal }));
      return;
    }
    
    if (name === "fullName" || name === "companyName") {
      // Only allow letters and spaces
      const textVal = value.replace(/[^a-zA-Z\s]/g, "");
      setFormData((prev) => ({ ...prev, [name]: textVal }));
      return;
    }
    
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzcsYAotasvuHXVXUowjp-3flvwJCuTE2dkTBVnTBFqy68ozsXcRsYiPVn3PrG6Xwrb/exec";

    // Use URLSearchParams to encode as application/x-www-form-urlencoded
    // Google Apps Script requires this to parse e.parameter correctly!
    const data = new URLSearchParams();
    data.append("fullName", formData.fullName);
    data.append("companyName", formData.companyName);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("message", formData.message);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        body: data,
        mode: "no-cors", // Opaque response, but succeeds in posting data
      });

      // Show success animation
      setFormStatus("success");
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        message: "",
      });

      // Reset button to idle after 5 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);

    } catch (error) {
      console.error("Submission failed:", error);
      setFormStatus("idle");
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className={`py-24 md:py-32 bg-[#f8fafc] relative overflow-hidden z-10 border-b border-slate-100 transition-all duration-1000 scroll-mt-24 ${
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

        {/* Story & Values Section */}
        <div 
          className={`mb-20 md:mb-28 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-[#3E2723] mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F27224] to-[#e05a0a]">Story & Values</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              The foundation of everything we create.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Mission */}
            <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold font-display text-[#0062BE] mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-[#0062BE]/10 flex items-center justify-center text-[#0062BE]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </span>
                Mission
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium text-[1.05rem]">
                "To help brands break out of the noise and find their spotlight through strategic storytelling and cinematic execution."
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold font-display text-[#10B981] mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-[#10B981]/10 flex items-center justify-center text-[#10B981]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </span>
                Vision
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium text-[1.05rem]">
                "To be the creative force behind the world's most unforgettable brands, setting new standards for digital marketing and production."
              </p>
            </div>

            {/* Core Values */}
            <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold font-display text-[#F27224] mb-5 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-[#F27224]/10 flex items-center justify-center text-[#F27224]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </span>
                Core Values
              </h3>
              <ul className="space-y-3 text-slate-600 font-medium text-sm">
                <li className="flex gap-3 items-start"><span className="text-[#F27224] shrink-0 mt-0.5">•</span> <span><strong>Story-First:</strong> Every campaign starts with a meaningful narrative.</span></li>
                <li className="flex gap-3 items-start"><span className="text-[#0062BE] shrink-0 mt-0.5">•</span> <span><strong>Quality Without Compromise:</strong> We treat every project like a masterpiece.</span></li>
                <li className="flex gap-3 items-start"><span className="text-[#10B981] shrink-0 mt-0.5">•</span> <span><strong>Strategy That Performs:</strong> Beauty meets logic to deliver measurable results.</span></li>
                <li className="flex gap-3 items-start"><span className="text-[#F27224] shrink-0 mt-0.5">•</span> <span><strong>Unapologetic Creativity:</strong> We dare to be different, so our clients can stand out.</span></li>
                <li className="flex gap-3 items-start"><span className="text-[#0062BE] shrink-0 mt-0.5">•</span> <span><strong>Transparent Collaboration:</strong> Open communication and honest partnerships.</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Floating Glass Bento Box */}
        <div 
          className={`w-full backdrop-blur-[40px] bg-white/50 border border-white/80 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] rounded-[3rem] p-8 md:p-16 lg:p-20 flex flex-col lg:flex-row gap-16 lg:gap-24 relative overflow-hidden transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          {/* Subtle inner reflection line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />

          {/* Left Side: Form */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-[#3E2723] tracking-tight leading-tight mb-4">
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
                    maxLength={50}
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b-2 border-slate-300/60 focus:border-[#F27224] py-3 text-lg outline-none text-[#3E2723] transition-colors peer"
                  />
                  <label className={`absolute left-0 transition-all duration-300 pointer-events-none ${formData.fullName ? '-top-5 text-xs text-[#F27224] font-bold' : 'top-3 text-lg text-slate-400'} peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#F27224] peer-focus:font-bold`}>
                    Full Name
                  </label>
                </div>
                
                <div className="relative group">
                  <input 
                    type="text" 
                    name="companyName"
                    required
                    maxLength={50}
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b-2 border-slate-300/60 focus:border-[#F27224] py-3 text-lg outline-none text-[#3E2723] transition-colors peer"
                  />
                  <label className={`absolute left-0 transition-all duration-300 pointer-events-none ${formData.companyName ? '-top-5 text-xs text-[#F27224] font-bold' : 'top-3 text-lg text-slate-400'} peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#F27224] peer-focus:font-bold`}>
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
                    maxLength={100}
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b-2 border-slate-300/60 focus:border-[#F27224] py-3 text-lg outline-none text-[#3E2723] transition-colors peer"
                  />
                  <label className={`absolute left-0 transition-all duration-300 pointer-events-none ${formData.email ? '-top-5 text-xs text-[#F27224] font-bold' : 'top-3 text-lg text-slate-400'} peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#F27224] peer-focus:font-bold`}>
                    Email Address
                  </label>
                </div>
                
                <div className="relative group">
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    minLength={10}
                    title="Phone number must be exactly 10 digits"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b-2 border-slate-300/60 focus:border-[#F27224] py-3 text-lg outline-none text-[#3E2723] transition-colors peer"
                  />
                  <label className={`absolute left-0 transition-all duration-300 pointer-events-none ${formData.phone ? '-top-5 text-xs text-[#F27224] font-bold' : 'top-3 text-lg text-slate-400'} peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#F27224] peer-focus:font-bold`}>
                    Phone Number
                  </label>
                </div>
              </div>
              
              <div className="relative group mt-2">
                <textarea 
                  name="message"
                  required
                  rows="3"
                  maxLength={500}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b-2 border-slate-300/60 focus:border-[#F27224] py-3 text-lg outline-none text-[#3E2723] transition-colors peer resize-none"
                />
                <label className={`absolute left-0 transition-all duration-300 pointer-events-none ${formData.message ? '-top-5 text-xs text-[#F27224] font-bold' : 'top-3 text-lg text-slate-400'} peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#F27224] peer-focus:font-bold`}>
                  What are your goals?
                </label>
              </div>

              {/* Submit Action */}
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-6">
                <button 
                  type="submit"
                  disabled={formStatus === "sending" || formStatus === "success"}
                  className="px-10 py-5 rounded-full bg-[#3E2723] hover:bg-slate-800 text-white text-lg font-bold font-display shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl disabled:opacity-50 disabled:hover:translate-y-0 disabled:cursor-not-allowed group flex items-center gap-3 w-full sm:w-auto justify-center"
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
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">Drop By for a Cup of Ideas</h3>
            
            {/* Bento Card 1: Email */}
            <a href="mailto:sbsfin27@gmail.com" className="bg-white/60 hover:bg-white transition-colors duration-300 backdrop-blur-md rounded-3xl p-6 border border-white shadow-sm flex items-start gap-5 group">
              <div className="w-12 h-12 rounded-2xl bg-[#0062BE]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-[#0062BE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-[#3E2723] font-bold font-display text-xl mb-1">Email Us</h4>
                <p className="text-slate-500 text-sm">sbsfin27@gmail.com</p>
              </div>
            </a>

            {/* Bento Card 2: Phone */}
            <a href="tel:+919081353523" className="bg-white/60 hover:bg-white transition-colors duration-300 backdrop-blur-md rounded-3xl p-6 border border-white shadow-sm flex items-start gap-5 group">
              <div className="w-12 h-12 rounded-2xl bg-[#10B981]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-[#3E2723] font-bold font-display text-xl mb-1">Call Us</h4>
                <p className="text-slate-500 text-sm">+91 90813 53523</p>
              </div>
            </a>

            {/* Bento Card 3: Office */}
            <a 
              href="https://maps.google.com/?q=1003,+Span+Trade+Centre,+Paldi,+Ahmedabad,+Gujarat,+India" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white/60 hover:bg-white transition-colors duration-300 backdrop-blur-md rounded-3xl p-6 border border-white shadow-sm flex items-start gap-5 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#F27224]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-[#F27224]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-[#3E2723] font-bold font-display text-xl mb-1">Our Office</h4>
                <p className="text-slate-500 text-sm leading-relaxed">1003, Span Trade Centre, Paldi<br/>Ahmedabad, Gujarat, India<br/><span className="mt-1 block text-[#10B981] font-bold text-xs uppercase tracking-wide">9:00 AM - 6:00 PM</span></p>
              </div>
            </a>

            {/* Bento Card 4: Social Links */}
            <div className="bg-white/60 hover:bg-white transition-colors duration-300 backdrop-blur-md rounded-3xl p-6 border border-white shadow-sm flex flex-col group">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Follow the Story</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-[#F27224] hover:text-white transition-all">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-[#0077b5] hover:text-white transition-all">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-[#1877F2] hover:text-white transition-all">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-[#FF0000] hover:text-white transition-all">
                  <span className="sr-only">YouTube</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.015 3.015 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
