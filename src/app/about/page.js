"use client";

import Navbar from "@/components/Navbar";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import TeamSection from "@/components/about/TeamSection";
import WhyWeExist from "@/components/about/WhyWeExist";
import AboutClients from "@/components/about/AboutClients";
import AboutCTA from "@/components/about/AboutCTA";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      {/* Sticky header */}
      <Navbar />
      
      {/* Main layout */}
      <main className="flex-1">
        {/* Render sections in requested chronological order */}
        <AboutHero />
        <OurStory />
        <TeamSection />
        <WhyWeExist />
        <AboutClients />
        <AboutCTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
