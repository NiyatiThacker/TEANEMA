"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  VscArrowLeft, VscDeviceCameraVideo, VscArchive, VscHome, VscMegaphone, 
  VscOrganization, VscSymbolColor, VscPlayCircle, VscRecord, 
  VscMap, VscEye, VscHeart, VscGraphLine, VscCode, 
  VscSearch, VscDeviceCamera, VscCreditCard 
} from "react-icons/vsc";

const IconMap = {
  VscDeviceCameraVideo, VscArchive, VscHome, VscMegaphone, 
  VscOrganization, VscSymbolColor, VscPlayCircle, VscRecord, 
  VscMap, VscEye, VscHeart, VscGraphLine, VscCode, 
  VscSearch, VscDeviceCamera, VscCreditCard
};

export default function ServiceHero({ service }) {
  const Icon = IconMap[service.icon] || VscHome;

  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-slate-50 pt-32 pb-20">
      {/* Background ambient blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-brand-orange/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-blue/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-brand-blue transition-colors">
            <VscArrowLeft className="w-4 h-4" />
            Back to All Services
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-16 h-16 rounded-2xl bg-white shadow-xl shadow-brand-blue/5 flex items-center justify-center border border-slate-100"
            >
              <Icon className="w-8 h-8 text-brand-blue" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight"
            >
              {service.title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl font-medium text-brand-orange"
            >
              {service.heroSubtitle}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-slate-600 leading-relaxed max-w-2xl"
            >
              {service.shortDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-4"
            >
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-white text-lg font-bold hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-brand-orange/40"
                style={{ background: "linear-gradient(135deg, #F27224, #e05a0a)" }}
              >
                Discuss Your Project
              </Link>
            </motion.div>
          </div>

          {/* Visual Element (3D illustration placeholder) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full aspect-square md:aspect-video lg:aspect-square rounded-[2.5rem] bg-white border border-slate-100 shadow-2xl overflow-hidden flex items-center justify-center"
          >
            {/* Using standard placeholder grid/gradient to look premium since we don't have individual 16 videos yet */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-white via-transparent to-brand-blue/5"></div>
            
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-32 h-32 rounded-full bg-slate-50 flex items-center justify-center shadow-inner border border-slate-100">
                 <Icon className="w-16 h-16 text-slate-300" />
              </div>
              <p className="text-sm font-semibold tracking-widest text-slate-400 uppercase">Visual Asset Placeholder</p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
