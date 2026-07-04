"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Impact = dynamic(() => import("@/components/Impact"));
const TrustedBy = dynamic(() => import("@/components/TrustedBy"));
const OurProcess = dynamic(() => import("@/components/about/OurProcess"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -100px 0px", // Trigger when element is 100px above viewport bottom
      threshold: 0.05,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          // Stop observing once reveal animation has played to prevent layout stutter on scroll-back
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach((el) => {
      // Do not observe if it's already active (e.g. above-the-fold elements)
      if (!el.classList.contains("active")) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Sections grouped with alternating contrast bg */}
        <Hero />
        <Impact />
        <TrustedBy />
        <OurProcess />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
