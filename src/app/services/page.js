"use client";

import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesCTA from "@/components/services/ServicesCTA";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <>
      {/* Sticky header */}
      <Navbar />
      
      {/* Main layout */}
      <main className="flex-1">
        {/* Render sections in order */}
        <ServicesHero />
        <ServicesGrid />
        <ServicesCTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
