"use client";

import { useState } from "react";
import { personalInfo } from "@/data/personal";
import { FileText, ArrowDown, Check, MapPin } from "lucide-react";
import { GithubIcon } from "./icons";

export function Hero() {
  const [cvRequested, setCvRequested] = useState(false);

  const handleCvClick = () => {
    setCvRequested(true);
    setTimeout(() => setCvRequested(false), 4000);
  };

  return (
    <section className="pt-16 pb-20 md:pt-24 md:pb-28 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Status / Location Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-6 text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Undergraduate @ Telkom University
          </span>
          <span className="inline-flex items-center gap-1 text-zinc-500 dark:text-zinc-400">
            <MapPin className="w-3.5 h-3.5" />
            {personalInfo.location}
          </span>
          <span className="hidden sm:inline-block text-zinc-300 dark:text-zinc-700">
            •
          </span>
          <span className="hidden sm:inline-block">GPA: {personalInfo.education.gpa}</span>
        </div>

        {/* Hero Name & Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 uppercase">
          {personalInfo.name}
        </h1>

        <div className="mt-3 flex flex-wrap items-center gap-2 sm:gap-3 text-lg sm:text-xl font-medium text-zinc-700 dark:text-zinc-300">
          <span>{personalInfo.role}</span>
          <span className="text-zinc-400 dark:text-zinc-600">•</span>
          <span className="text-zinc-600 dark:text-zinc-400 font-normal">
            AI / ML &bull; Software Engineering
          </span>
        </div>

        {/* Core Statement */}
        <p className="mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
          &ldquo;{personalInfo.bioHero}&rdquo;
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
          >
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href={`mailto:${personalInfo.email}?subject=Curriculum%20Vitae%20Request%20-%20Dzaki%20Khothir`}
            onClick={handleCvClick}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
          >
            {cvRequested ? (
              <>
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-emerald-700 dark:text-emerald-300">
                  Email Draft Ready
                </span>
              </>
            ) : (
              <>
                <FileText className="w-4 h-4" />
                <span>Download CV</span>
              </>
            )}
          </a>
        </div>

        {/* CV Note */}
        <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-500 font-mono">
          * CV available upon direct request via email ({personalInfo.email})
        </p>
      </div>
    </section>
  );
}
