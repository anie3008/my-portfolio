"use client";

import React from "react";
import {
  User,
  Sparkles,
  Terminal,
  CheckCircle2,
  Code2,
  Cpu,
  Layers,
  Zap,
} from "lucide-react";
import { ABOUT_TEXT, PERSONAL_INFO } from "@/data/portfolioData";

export default function About() {
  const paragraphs = ABOUT_TEXT.split("\n").filter((p) => p.trim() !== "");

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[140px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/60 text-purple-300 text-xs font-mono uppercase tracking-widest mb-4">
            <User className="w-3.5 h-3.5 text-purple-400" />
            <span>Profile &amp; Mindset</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            About Me
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Architectural dedication, technical mindset, and passion for engineering modern
            web software.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Column 1: Exact Professional Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900/60 border border-neutral-800/80 shadow-xl backdrop-blur-sm relative overflow-hidden">
              {/* Subtle top gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400" />

              <div className="flex items-center gap-2.5 mb-6 text-indigo-400 font-mono text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>My Journey &amp; Engineering Philosophy</span>
              </div>

              {/* Exact user text rendered faithfully */}
              <div className="space-y-5 text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
                {paragraphs.map((para, idx) => (
                  <p key={idx} className="first-of-type:text-neutral-100">
                    {para}
                  </p>
                ))}
              </div>

              {/* Core Strengths Chips */}
              <div className="mt-8 pt-6 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-2 text-xs font-medium text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Rapid Learner</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Type-Safe Code</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Clean Architecture</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Modular Design</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Problem Solver</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Team Oriented</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Layout Styling / Interactive Developer Telemetry Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Visual Code Window */}
            <div className="rounded-2xl bg-[#0d131f] border border-neutral-800/90 shadow-2xl overflow-hidden">
              {/* Window Controls Header */}
              <div className="px-4 py-3 bg-neutral-900/90 border-b border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-neutral-400 ml-2">
                    developer.config.ts
                  </span>
                </div>
                <div className="text-[11px] font-mono text-indigo-400 flex items-center gap-1">
                  <Terminal className="w-3 h-3" />
                  <span>TypeScript</span>
                </div>
              </div>

              {/* Code Snippet with Syntax Styling */}
              <div className="p-5 font-mono text-xs leading-relaxed text-neutral-300 overflow-x-auto">
                <p>
                  <span className="text-purple-400">export const</span>{" "}
                  <span className="text-cyan-300">ayeshaIslam</span>:{" "}
                  <span className="text-amber-300">Developer</span> = &#123;
                </p>
                <p className="pl-4">
                  <span className="text-neutral-400">role:</span>{" "}
                  <span className="text-emerald-300">&quot;Full Stack Developer&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-neutral-400">focus:</span> [
                </p>
                <p className="pl-8 text-emerald-300">
                  &quot;Next.js App Router&quot;,
                </p>
                <p className="pl-8 text-emerald-300">
                  &quot;React &amp; TypeScript&quot;,
                </p>
                <p className="pl-8 text-emerald-300">
                  &quot;MongoDB Atlas &amp; Node.js&quot;
                </p>
                <p className="pl-4">],</p>
                <p className="pl-4">
                  <span className="text-neutral-400">architecture:</span> &#123;
                </p>
                <p className="pl-8">
                  <span className="text-neutral-400">typeSafety:</span>{" "}
                  <span className="text-indigo-400">true</span>,
                </p>
                <p className="pl-8">
                  <span className="text-neutral-400">cleanCode:</span>{" "}
                  <span className="text-indigo-400">true</span>,
                </p>
                <p className="pl-8">
                  <span className="text-neutral-400">continuousLearning:</span>{" "}
                  <span className="text-indigo-400">Infinity</span>,
                </p>
                <p className="pl-4">&#125;,</p>
                <p className="pl-4">
                  <span className="text-neutral-400">status:</span>{" "}
                  <span className="text-emerald-300">&quot;Ready for Impact&quot;</span>
                </p>
                <p>&#125;;</p>
              </div>
            </div>

            {/* Visual Stat Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm">
                <div className="w-8 h-8 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-3 border border-indigo-500/20">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="text-2xl font-bold text-white mb-0.5">100%</div>
                <div className="text-xs text-neutral-400">Modular Component Focus</div>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm">
                <div className="w-8 h-8 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-3 border border-cyan-500/20">
                  <Zap className="w-4 h-4" />
                </div>
                <div className="text-2xl font-bold text-white mb-0.5">Rapid</div>
                <div className="text-xs text-neutral-400">Adaptation &amp; Debugging Cycle</div>
              </div>
            </div>

            {/* Quick Contact Prompt */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-700/40 text-neutral-200">
              <p className="text-xs text-neutral-300 leading-relaxed">
                Looking for a motivated Full Stack Developer ready to bring dedication, clean
                architecture, and modern web mastery to your team? Let&apos;s connect!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

