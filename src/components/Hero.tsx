"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  Mail,
  ArrowRight,
  Sparkles,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface HeroProps {
  onOpenResumeModal?: () => void;
}

export default function Hero({ onOpenResumeModal }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Vibrant yet sophisticated ambient gradient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] sm:w-[720px] h-[380px] bg-indigo-600/15 rounded-full blur-[130px] -z-10 pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-1/4 w-[320px] h-[280px] bg-cyan-500/10 rounded-full blur-[110px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[280px] h-[240px] bg-purple-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Column: Headlines, Bio, CTAs, Socials */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-neutral-300 text-xs sm:text-sm font-medium mb-6 shadow-inner backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-neutral-300">Open to Full Stack & Frontend Roles</span>
              <span className="text-neutral-600">|</span>
              <span className="text-neutral-400 flex items-center gap-1 text-xs">
                <MapPin className="w-3 h-3 text-indigo-400" /> Remote / Global
              </span>
            </div>

            {/* Intro greeting */}
            <p className="text-indigo-400 font-mono text-sm sm:text-base tracking-wide uppercase font-semibold mb-2">
              Hello, I am {PERSONAL_INFO.name}
            </p>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Full Stack{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>

            {/* Subheadline/Bio tailored for ambitious entry-level professional */}
            <p className="text-neutral-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 text-balance">
              {PERSONAL_INFO.subheadline}
            </p>

            {/* Action Buttons: Primary "View Resume" & Secondary "Let's Talk" */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              {/* Primary "View Resume" CTA */}
              <button
                type="button"
                onClick={() => {
                  if (onOpenResumeModal) {
                    onOpenResumeModal();
                  } else {
                    window.open(PERSONAL_INFO.resumeUrl, "_blank");
                  }
                }}
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <FileText className="w-4 h-4 text-white relative z-10" />
                <span className="relative z-10">View Resume</span>
              </button>

              {/* Secondary "Let's Talk" CTA */}
              <Link
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-neutral-200 hover:text-white bg-neutral-900/80 hover:bg-neutral-800/90 border border-neutral-700/80 hover:border-neutral-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Let&apos;s Talk</span>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Quick Icon Links & Contact Shortcodes */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 mr-2">
                Connect:
              </span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700 transition-all duration-200 shadow-sm"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 text-neutral-400 hover:text-[#0a66c2] border border-neutral-800 hover:border-neutral-700 transition-all duration-200 shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 text-neutral-400 hover:text-cyan-400 border border-neutral-800 hover:border-neutral-700 transition-all duration-200 shadow-sm"
                aria-label="Send direct email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: User Profile Image with Beautifully Styled Responsive Boundary */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative group">
              {/* Outer Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-500/40 via-purple-500/30 to-cyan-400/40 rounded-[2.5rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-500 group-hover:scale-105" />

              {/* Styled Boundary: Soft-squared with subtle border gradient */}
              <div className="relative p-1.5 rounded-[2.25rem] bg-gradient-to-tr from-indigo-500/60 via-purple-500/40 to-cyan-400/70 shadow-2xl shadow-indigo-950/60">
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[340px] lg:h-[340px] rounded-[2rem] overflow-hidden bg-neutral-950 border border-neutral-800/80">
                  <Image
                    src="/image.jpg"
                    alt={`${PERSONAL_INFO.name} - Full Stack Developer`}
                    width={400}
                    height={400}
                    priority
                    className="w-full h-full object-cover object-top transition duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle inner gradient overlay for high-end look */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Tech Badge 1: Next.js & React */}
              <div className="absolute -bottom-3 -left-4 sm:-left-6 px-3.5 py-2 rounded-xl bg-neutral-900/90 border border-neutral-800/90 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-medium text-neutral-200">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Next.js • React • TypeScript</span>
              </div>

              {/* Floating Tech Badge 2: MongoDB Atlas */}
              <div className="absolute -top-3 -right-3 sm:-right-4 px-3.5 py-2 rounded-xl bg-neutral-900/90 border border-neutral-800/90 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-medium text-neutral-200">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>MongoDB Atlas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="mt-14 hidden lg:flex justify-center">
          <Link
            href="#skills"
            className="flex flex-col items-center gap-2 text-neutral-500 hover:text-indigo-400 transition-colors group"
            aria-label="Scroll to Skills"
          >
            <span className="text-[11px] font-mono tracking-wider uppercase">Scroll to explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-neutral-500 group-hover:text-indigo-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
