import { certifications } from "@/data/certifications";
import { Award, ExternalLink, CheckCircle } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="py-20 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4 text-xs font-mono tracking-wider text-zinc-500 uppercase">
          <span className="text-zinc-400 dark:text-zinc-600">05.</span>
          <span>Verified Credentials</span>
          <div className="h-px bg-zinc-200 dark:border-zinc-800 flex-1 ml-2" />
        </div>

        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Professional Certifications
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 max-w-xl">
            Accredited coursework and professional specializations in artificial intelligence and data analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div className="p-2 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
                    <Award className="w-5 h-5 text-amber-500" />
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                    {cert.year}
                  </span>
                </div>

                <h3 className="mt-4 text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  {cert.name}
                </h3>

                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-1">
                  Issued by {cert.issuer} &bull; {cert.platform}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {cert.description}
                </p>

                {/* Topics covered */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cert.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-0.5 rounded-xs text-[11px] font-mono bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified PDF link */}
              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-medium text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>View Certificate PDF</span>
                    <ExternalLink className="w-3 h-3 text-zinc-400" />
                  </a>
                ) : (
                  <span className="text-xs font-mono text-zinc-400">
                    Verified Completion
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
