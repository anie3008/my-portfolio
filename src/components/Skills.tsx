"use client";

import React from "react";
import {
  Code2,
  FileCode2,
  Atom,
  Layers,
  Palette,
  Server,
  Database,
  Sparkles,
  Cpu,
  ShieldCheck,
  GitBranch,
  Terminal,
} from "lucide-react";

interface SkillItem {
  name: string;
  category: "frontend" | "backend";
  tag: string;
  description: string;
  color: string;
  bgGlow: string;
  icon: React.ReactNode;
}

const FRONTEND_SKILLS: SkillItem[] = [
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    tag: "Core Language",
    description:
      "Asynchronous programming (Promises, async/await), ESNext syntax, closures, event loop, and modern DOM APIs.",
    color: "from-amber-400 to-yellow-500",
    bgGlow: "group-hover:border-amber-500/40 group-hover:shadow-amber-500/10",
    icon: <Code2 className="w-6 h-6 text-yellow-400" />,
  },
  {
    name: "TypeScript",
    category: "frontend",
    tag: "Static Typing",
    description:
      "Strict compile-time type safety, complex interfaces, generics, utility types, and DX tooling.",
    color: "from-blue-400 to-sky-500",
    bgGlow: "group-hover:border-blue-500/40 group-hover:shadow-blue-500/10",
    icon: <FileCode2 className="w-6 h-6 text-sky-400" />,
  },
  {
    name: "React",
    category: "frontend",
    tag: "UI Library",
    description:
      "Declarative UI component architecture, hooks (custom & built-in), state optimization, and memoization.",
    color: "from-cyan-400 to-blue-500",
    bgGlow: "group-hover:border-cyan-500/40 group-hover:shadow-cyan-500/10",
    icon: <Atom className="w-6 h-6 text-cyan-400" />,
  },
  {
    name: "Next.js",
    category: "frontend",
    tag: "Full Stack Framework",
    description:
      "App Router, Server Components (RSC), SSR/SSG rendering patterns, API Routes, and Turbopack.",
    color: "from-slate-200 to-neutral-400",
    bgGlow: "group-hover:border-indigo-500/40 group-hover:shadow-indigo-500/10",
    icon: <Layers className="w-6 h-6 text-indigo-400" />,
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    tag: "Styling System",
    description:
      "Utility-first styling, responsive fluid design, micro-interactions, dark mode orchestration, and CSS grid.",
    color: "from-teal-400 to-cyan-500",
    bgGlow: "group-hover:border-teal-500/40 group-hover:shadow-teal-500/10",
    icon: <Palette className="w-6 h-6 text-teal-400" />,
  },
];

const BACKEND_SKILLS: SkillItem[] = [
  {
    name: "Node.js",
    category: "backend",
    tag: "Runtime Engine",
    description:
      "Non-blocking asynchronous I/O, RESTful API design, Express middleware architecture, and server routing.",
    color: "from-emerald-400 to-green-500",
    bgGlow: "group-hover:border-emerald-500/40 group-hover:shadow-emerald-500/10",
    icon: <Server className="w-6 h-6 text-emerald-400" />,
  },
  {
    name: "MongoDB Atlas",
    category: "backend",
    tag: "Cloud Database",
    description:
      "NoSQL document schema design, Mongoose models, aggregation pipelines, indexes, and cloud cluster management.",
    color: "from-green-400 to-emerald-600",
    bgGlow: "group-hover:border-green-500/40 group-hover:shadow-green-500/10",
    icon: <Database className="w-6 h-6 text-emerald-400" />,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-indigo-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Skills &amp; Technologies
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            A focused, modern technology stack tailored for building clean, resilient, and
            scalable full-stack applications with optimal developer experience.
          </p>
        </div>

        {/* Group 1: Frontend Section */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Frontend Development
            </h3>
            <span className="text-xs font-mono text-neutral-400 px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-800">
              5 Technologies
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FRONTEND_SKILLS.map((skill) => (
              <div
                key={skill.name}
                className={`group relative p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${skill.bgGlow}`}
              >
                {/* Header with icon and tag */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-neutral-800/80 border border-neutral-700/60 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-neutral-800/80 text-neutral-300 border border-neutral-700/50">
                    {skill.tag}
                  </span>
                </div>

                {/* Name */}
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {skill.name}
                </h4>

                {/* Description */}
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {skill.description}
                </p>

                {/* Bottom subtle accent line */}
                <div className="mt-4 pt-3 border-t border-neutral-800/60 flex items-center justify-between text-xs text-neutral-400">
                  <span className="flex items-center gap-1.5 font-medium text-neutral-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Production Ready
                  </span>
                  <span className="text-indigo-400 font-mono text-[11px]">Next-Gen</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Group 2: Backend & Database Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-400" />
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Backend &amp; Database
            </h3>
            <span className="text-xs font-mono text-neutral-400 px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-800">
              2 Core Systems
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BACKEND_SKILLS.map((skill) => (
              <div
                key={skill.name}
                className={`group relative p-7 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${skill.bgGlow}`}
              >
                {/* Header with icon and tag */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3.5 rounded-xl bg-neutral-800/80 border border-neutral-700/60 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-neutral-800/80 text-emerald-300 border border-emerald-900/40">
                    {skill.tag}
                  </span>
                </div>

                {/* Name */}
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {skill.name}
                </h4>

                {/* Description */}
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                  {skill.description}
                </p>

                {/* Key Capabilities */}
                <div className="pt-4 border-t border-neutral-800/60 flex flex-wrap gap-2">
                  {skill.name === "Node.js" ? (
                    <>
                      <span className="text-xs px-2.5 py-1 rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700/60">
                        RESTful APIs
                      </span>
                      <span className="text-xs px-2.5 py-1 rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700/60">
                        Express &amp; Middleware
                      </span>
                      <span className="text-xs px-2.5 py-1 rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700/60">
                        JSON Web Tokens (JWT)
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-xs px-2.5 py-1 rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700/60">
                        Cloud Clusters
                      </span>
                      <span className="text-xs px-2.5 py-1 rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700/60">
                        Aggregation Framework
                      </span>
                      <span className="text-xs px-2.5 py-1 rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700/60">
                        Mongoose Schemas
                      </span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow & Architecture Highlights Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-neutral-900/90 via-indigo-950/20 to-neutral-900/90 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Engineering Practices</h4>
              <p className="text-xs text-neutral-400">
                Type safety, Git versioning, reusable modular components &amp; performant responsive layouts.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {["Git & GitHub", "Vercel / Netlify", "Clean Architecture", "Postman", "Responsive Design"].map(
              (item) => (
                <span
                  key={item}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-800/80 text-neutral-300 border border-neutral-700/70 font-mono"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

