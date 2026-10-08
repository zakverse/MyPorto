"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = [
    "All",
    "AI / Computer Vision",
    "Deep Learning",
    "Web Applications",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4 text-xs font-mono tracking-wider text-zinc-500 uppercase">
          <span className="text-zinc-400 dark:text-zinc-600">02.</span>
          <span>Featured Projects</span>
          <div className="h-px bg-zinc-200 dark:border-zinc-800 flex-1 ml-2" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Technical Work & Applications
            </h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 max-w-xl">
              Concrete implementations in computer vision, deep learning diagnostics, and backend web platforms. All projects are backed by verified GitHub source code.
            </p>
          </div>

          {/* Minimal Category Filter */}
          <div className="flex flex-wrap gap-1.5 self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-2.5 py-1 text-xs font-mono rounded-md transition-colors ${
                  activeFilter === cat
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold"
                    : "bg-zinc-100 dark:bg-zinc-800/70 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
