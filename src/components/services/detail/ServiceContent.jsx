"use client";

import { motion } from "framer-motion";
import { VscCheck } from "react-icons/vsc";

export default function ServiceContent({ service }) {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Main Description */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">About This Service</h2>
              <p className="text-xl text-slate-700 leading-relaxed font-medium mb-6">
                {service.content.intro}
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                {service.content.body}
              </p>
            </motion.div>
          </div>

          {/* Benefits Sidebar */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/20"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Key Benefits</h3>
              
              <div className="flex flex-col gap-8">
                {service.benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center mt-1">
                      <VscCheck className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">{benefit.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
