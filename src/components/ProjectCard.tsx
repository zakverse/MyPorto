"use client";

import { useState } from "react";
import { Project } from "@/data/projects";
import { ExternalLink, Maximize2, Layers } from "lucide-react";
import { GithubIcon } from "./icons";
import { ProjectGallery } from "./ProjectGallery";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const hasImages = project.images.length > 0;
  const currentImage = hasImages ? project.images[activeImageIndex] : null;

  return (
    <>
      <article className="flex flex-col h-full rounded-lg border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/60 overflow-hidden shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
        {/* Project Visual / Screenshot Area */}
        {hasImages ? (
          <div className="relative group border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 overflow-hidden">
            {/* Main Screenshot Container */}
            <div
              onClick={() => setIsGalleryOpen(true)}
              className="cursor-pointer relative aspect-16/10 w-full overflow-hidden flex items-center justify-center bg-zinc-900/5 dark:bg-zinc-950/40"
              title="Click to expand screenshot"
            >
              <img
                src={currentImage!}
                alt={`${project.title} screenshot preview`}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-200 group-hover:scale-[1.01]"
              />

              {/* Minimal Zoom Hint */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-900/90 text-white text-xs font-mono shadow-sm">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Inspect Screenshot</span>
                </span>
              </div>
            </div>

            {/* Multiple Screenshots Indicator / Mini Selector */}
            {project.images.length > 1 && (
              <div className="px-3 py-2 border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/80 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-zinc-400" />
                  <span className="text-[11px] font-mono text-zinc-500">
                    {project.images.length} views
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {project.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      aria-label={`View screenshot ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === activeImageIndex
                          ? "w-4 bg-zinc-800 dark:bg-zinc-200"
                          : "w-1.5 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Clean Text-Driven Header for projects without screenshots */
          <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-950/40 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-mono text-zinc-600 dark:text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-zinc-400" />
              Machine Learning Research Repo
            </div>
            <span className="text-xs font-mono text-zinc-400">Python / ML</span>
          </div>
        )}

        {/* Content Body */}
        <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
          <div>
            {/* Category / Sub-tag */}
            <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">
              {project.category}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              {project.title}
            </h3>

            {/* Tagline */}
            <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-0.5 mb-3">
              {project.tagline}
            </p>

            {/* Description */}
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {project.description}
            </p>

            {/* Key Technical Highlights (if present) */}
            {project.highlights && project.highlights.length > 0 && (
              <ul className="mt-3.5 space-y-1 text-xs text-zinc-600 dark:text-zinc-400 font-mono">
                {project.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-zinc-400 dark:text-zinc-600 select-none">
                      &bull;
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/60">
            {/* Technology Badges */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-sm text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Button: Strictly GitHub Repository, No Fake Live Demo */}
            <div className="flex items-center justify-between">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md text-xs font-semibold font-mono tracking-tight text-zinc-900 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3 h-3 text-zinc-400" />
              </a>

              {hasImages && (
                <button
                  onClick={() => setIsGalleryOpen(true)}
                  className="text-xs font-mono text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
                >
                  Inspect ({project.images.length})
                </button>
              )}
            </div>
          </div>
        </div>
      </article>

      {/* Lightbox / Gallery Modal */}
      {hasImages && (
        <ProjectGallery
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          images={project.images}
          currentIndex={activeImageIndex}
          onIndexChange={setActiveImageIndex}
          projectTitle={project.title}
        />
      )}
    </>
  );
}
