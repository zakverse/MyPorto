import { personalInfo } from "@/data/personal";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-xs font-mono text-zinc-500 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider text-xs">
            {personalInfo.name}
          </div>
          <p className="text-zinc-500 mt-1">
            Informatics Engineering &bull; Telkom University &bull; Purwokerto, Indonesia
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
          >
            Email
          </a>
          <a
            href="#projects"
            className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
          >
            Back to Top &uarr;
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-zinc-400 dark:text-zinc-600">
        <div>&copy; {currentYear} {personalInfo.name}. All rights reserved.</div>
        <div>
          Built with Next.js, TypeScript & Tailwind CSS &bull; Restrained Minimal Design
        </div>
      </div>
    </footer>
  );
}
