"use client";

import React from "react";
import { ExternalLink, Sparkles, FolderGit2, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { PROJECTS } from "@/data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Real-world full-stack web applications and interactive frontends engineered with
            type safety, clean component architecture, and cloud database persistence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-indigo-500/40 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 backdrop-blur-sm transition-all duration-300 overflow-hidden"
            >
              {/* Card Header / Visual Preview Bar */}
              <div className="p-6 pb-0">
                <div className="h-44 sm:h-52 w-full rounded-xl bg-gradient-to-br from-neutral-800/80 via-neutral-900 to-[#0c1222] border border-neutral-700/50 p-5 flex flex-col justify-between relative overflow-hidden group-hover:border-neutral-600 transition-colors">
                  {/* Subtle inner grid lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#37415115_1px,transparent_1px),linear-gradient(to_bottom,#37415115_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />

                  {/* Top Bar: macOS-style window dots & category badge */}
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-neutral-800/80 text-neutral-300 border border-neutral-700/60">
                      {project.category}
                    </span>
                  </div>

                  {/* Middle Accent: Project Title & Iconography */}
                  <div className="relative z-10 my-auto">
                    <div className="flex items-center gap-2 mb-1.5">
                      <FolderGit2 className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
                      <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                        {project.title.split(" - ")[0]}
                      </h4>
                    </div>
                    <p className="text-xs font-mono text-neutral-400">
                      {project.title.includes(" - ") ? project.title.split(" - ")[1] : ""}
                    </p>
                  </div>

                  {/* Ambient bottom glow in preview card */}
                  <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 opacity-60 rounded-full" />
                </div>
              </div>

              {/* Card Body: Description and Tech Tags */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-md bg-neutral-800/90 text-neutral-300 border border-neutral-700/60 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions: View Code (GitHub) & Live Demo */}
                  <div className="pt-4 border-t border-neutral-800/80 flex items-center gap-3">
                    {/* View Code Button */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-neutral-200 hover:text-white bg-neutral-800/80 hover:bg-neutral-700/80 border border-neutral-700/80 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <GithubIcon className="w-4 h-4 text-neutral-300" />
                      <span>View Code</span>
                    </a>

                    {/* Live Demo Button */}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-md shadow-indigo-600/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on easily replaceable placeholder links */}
        {/* <div className="mt-12 text-center">
          <p className="text-xs text-neutral-400 font-mono">
            💡 Project repository &amp; live deployment links can be customized at any time in{" "}
            <code className="text-indigo-400 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
              src/data/portfolioData.ts
            </code>
          </p>
        </div> */}
      </div>
    </section>
  );
}
