import { personalInfo } from "@/data/personal";
import { GraduationCap, MapPin, Award, Terminal } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-10 text-xs font-mono tracking-wider text-zinc-500 uppercase">
          <span className="text-zinc-400 dark:text-zinc-600">01.</span>
          <span>About Me</span>
          <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-1 ml-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Main Narrative (7 cols) */}
          <div className="md:col-span-7 space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Engineering practical AI and software systems.
            </h2>

            {personalInfo.aboutParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            {/* Academic Card */}
            <div className="mt-8 p-5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-xs">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 mt-0.5">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm sm:text-base">
                      {personalInfo.education.institution}
                    </h3>
                    <span className="text-xs font-mono text-zinc-500">
                      {personalInfo.education.period}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-0.5">
                    {personalInfo.education.major} &bull; {personalInfo.education.degree}
                  </p>
                  <div className="mt-2.5 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm bg-zinc-100 dark:bg-zinc-800 text-xs font-mono font-medium text-zinc-800 dark:text-zinc-200">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    <span>Cumulative GPA: {personalInfo.education.gpa}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Photo Placeholder & Quick Facts (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            {/* Professional Portrait Frame */}
            <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-2.5 overflow-hidden shadow-xs">
              <div className="relative aspect-4/5 w-full rounded-md overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <img
                  src={personalInfo.photoUrl || "/potoaing.jpeg"}
                  alt="Dzaki Khothir - Informatics Engineering & AI / ML"
                  className="w-full h-full object-cover object-[center_58%] transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
              <div className="px-2 pt-3 pb-1 flex items-center justify-between font-mono text-xs">
                <div>
                  <div className="font-semibold text-zinc-900 dark:text-zinc-100">
                    {personalInfo.name}
                  </div>
                  <div className="text-[11px] text-zinc-500">
                    {personalInfo.role}
                  </div>
                </div>
                <span className="text-[11px] px-2 py-0.5 rounded-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                  Telkom Univ
                </span>
              </div>
            </div>

            {/* Quick Summary Spec Sheet */}
            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 font-mono text-xs space-y-2.5">
              <div className="text-zinc-400 dark:text-zinc-500 uppercase tracking-wider text-[10px] pb-1 border-b border-zinc-100 dark:border-zinc-800">
                Key Parameters
              </div>
              <div className="flex justify-between py-0.5">
                <span className="text-zinc-500">Focus:</span>
                <span className="text-zinc-800 dark:text-zinc-200 text-right">
                  AI / ML & Software Eng.
                </span>
              </div>
              <div className="flex justify-between py-0.5">
                <span className="text-zinc-500">Location:</span>
                <span className="text-zinc-800 dark:text-zinc-200 text-right">
                  Purwokerto, Indonesia
                </span>
              </div>
              <div className="flex justify-between py-0.5">
                <span className="text-zinc-500">Languages:</span>
                <span className="text-zinc-800 dark:text-zinc-200 text-right">
                  Python, Go, PHP, JS
                </span>
              </div>
              <div className="flex justify-between py-0.5">
                <span className="text-zinc-500">Status:</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-right">
                  Open for Internship
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
