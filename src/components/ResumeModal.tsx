"use client";

import React, { useEffect } from "react";
import { X, Download, FileText, Mail, ExternalLink, CheckCircle } from "lucide-react";
import { PERSONAL_INFO, SKILL_GROUPS } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-neutral-900 border border-neutral-700/80 shadow-2xl p-6 sm:p-8 text-neutral-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-neutral-400 hover:text-white bg-neutral-800/80 hover:bg-neutral-700/80 transition-colors"
          aria-label="Close resume preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Curriculum Vitae Preview
            </h3>
            <p className="text-xs text-neutral-400 font-mono">
              {PERSONAL_INFO.name} &bull; Full Stack Developer
            </p>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-6 text-sm">
          {/* Header Summary */}
          <div className="border-b border-neutral-800/80 pb-5">
            <h4 className="text-lg font-bold text-white mb-1">{PERSONAL_INFO.name}</h4>
            <p className="text-indigo-400 font-medium mb-3">Full Stack Developer</p>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              {PERSONAL_INFO.subheadline}
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-neutral-400 mt-3">
              <span>Email: {PERSONAL_INFO.email}</span>
              <span>GitHub: github.com/anie3008</span>
              <span>LinkedIn: in/ayesha-islam3008</span>
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div>
            <h5 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
              Core Technical Competencies
            </h5>
            <div className="space-y-3">
              <div>
                <span className="text-xs font-semibold text-neutral-200">Frontend: </span>
                <span className="text-xs text-neutral-400">
                  JavaScript (ES6+), TypeScript, React, Next.js (App Router), Tailwind CSS
                </span>
              </div>
              <div>
                <span className="text-xs font-semibold text-neutral-200">
                  Backend &amp; Database:{" "}
                </span>
                <span className="text-xs text-neutral-400">
                  Node.js, Express, MongoDB Atlas, Mongoose, RESTful API Design
                </span>
              </div>
              <div>
                <span className="text-xs font-semibold text-neutral-200">Architecture: </span>
                <span className="text-xs text-neutral-400">
                  Type Safety, Modular Components, Git Workflows, Responsive UI
                </span>
              </div>
            </div>
          </div>

          {/* Education & Background */}
          <div className="border-t border-neutral-800/80 pt-5">
            <h5 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
              Professional Focus
            </h5>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Actively pursuing entry-level Full Stack or Frontend Engineering roles with an
              eager focus on continuous delivery, type-safe clean architectures, and modern web
              applications.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500 font-mono">
            Direct download: PDF format
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 transition-colors"
            >
              Close
            </button>

            <a
              href="/resume.pdf"
              download="Ayesha_Islam_Resume.pdf"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-md shadow-indigo-500/25 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

