"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#090d16] text-neutral-100 selection:bg-indigo-500/30 selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Single-Page Sections */}
      <main className="flex flex-col">
        {/* Section 1: Hero / Banner */}
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Section 2: Technical Skills Grid */}
        <Skills />

        {/* Section 3: Featured Projects Showcase */}
        <Projects />

        {/* Section 4: About Me Two-Column Layout */}
        <About />

        {/* Section 5: Contact & Form */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Preview & Download Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
