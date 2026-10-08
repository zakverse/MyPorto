import { skillCategories } from "@/data/skills";
import { Code2, Brain, Wrench, Database, Layers } from "lucide-react";

const categoryIcons = [Code2, Brain, Layers, Database, Wrench];

export function Skills() {
  return (
    <section id="skills" className="py-20 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4 text-xs font-mono tracking-wider text-zinc-500 uppercase">
          <span className="text-zinc-400 dark:text-zinc-600">04.</span>
          <span>Technical Capabilities</span>
          <div className="h-px bg-zinc-200 dark:border-zinc-800 flex-1 ml-2" />
        </div>

        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Skills & Technical Stack
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 max-w-xl">
            Proficiencies across algorithmic programming, deep learning architectures, backend services, and development toolchains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = categoryIcons[index % categoryIcons.length];
            return (
              <div
                key={category.title}
                className="p-5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm sm:text-base">
                      {category.title}
                    </h3>
                  </div>

                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 leading-normal">
                    {category.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-sm text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200/60 dark:border-zinc-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
