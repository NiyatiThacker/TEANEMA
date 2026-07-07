"use client";

import { servicesData } from "@/data/services";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  VscDeviceCameraVideo, VscArchive, VscHome, VscMegaphone, 
  VscOrganization, VscSymbolColor, VscPlayCircle, VscRecord, 
  VscMap, VscEye, VscHeart, VscGraphLine, VscCode, 
  VscSearch, VscDeviceCamera, VscCreditCard, VscLayout
} from "react-icons/vsc";

const IconMap = {
  VscDeviceCameraVideo, VscArchive, VscHome, VscMegaphone, 
  VscOrganization, VscSymbolColor, VscPlayCircle, VscRecord, 
  VscMap, VscEye, VscHeart, VscGraphLine, VscCode, 
  VscSearch, VscDeviceCamera, VscCreditCard, VscLayout
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden z-10 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-[#3E2723] mb-6"
          >
            Services That Brew Impact
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Explore our comprehensive suite of cutting-edge creative and marketing services designed to elevate your brand.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {servicesData.map((service) => {
            const Icon = IconMap[service.icon] || VscHome;
            
            return (
              <motion.div key={service.id} variants={cardVariants}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block h-full bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/0 to-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    
                    {/* Icon Box */}
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-brand-blue/10 group-hover:border-brand-blue/20 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-slate-400 group-hover:text-brand-blue transition-colors duration-300" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-[#3E2723] mb-3 group-hover:text-brand-blue transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm text-slate-500 leading-relaxed mb-8 flex-grow">
                      {service.shortDescription}
                    </p>

                    {/* Fake Button / Link Indicator */}
                    <div className="flex items-center gap-2 text-sm font-bold text-brand-orange mt-auto opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      Explore Service 
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>

                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
