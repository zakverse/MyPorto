import { experiences } from "@/data/experience";
import { Briefcase, Calendar, MapPin, ExternalLink, CheckCircle2 } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4 text-xs font-mono tracking-wider text-zinc-500 uppercase">
          <span className="text-zinc-400 dark:text-zinc-600">03.</span>
          <span>Professional Experience</span>
          <div className="h-px bg-zinc-200 dark:border-zinc-800 flex-1 ml-2" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-8">
          Work & Internships
        </h2>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-xs"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-zinc-100 dark:border-zinc-800/80">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                      <Briefcase className="w-4 h-4" />
                    </span>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                      {exp.company}
                    </h3>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mt-1 pl-8">
                    {exp.role} &bull;{" "}
                    <span className="text-zinc-500">{exp.division}</span>
                  </p>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 sm:text-right pl-8 sm:pl-0">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mt-4 space-y-2.5">
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {exp.summary}
                </p>

                <ul className="space-y-2 mt-3">
                  {exp.responsibilities.map((resp, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-400"
                    >
                      <CheckCircle2 className="w-4 h-4 text-zinc-400 dark:text-zinc-500 mt-0.5 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies & Certificate Link */}
              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-sm text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/50 dark:border-zinc-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {exp.certificateUrl && (
                  <a
                    href={exp.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white underline underline-offset-4"
                  >
                    <span>View Internship Certificate</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
