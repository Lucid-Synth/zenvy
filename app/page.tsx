"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/Working";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Tooltip.Provider>
      <div className="min-h-screen bg-[#080808] text-white antialiased selection:bg-violet-500/30 selection:text-violet-200 overflow-x-hidden">
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <CTA />
        <Footer />
      </div>
    </Tooltip.Provider>
  );
}