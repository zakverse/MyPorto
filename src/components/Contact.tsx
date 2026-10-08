"use client";

import { useState } from "react";
import { personalInfo } from "@/data/personal";
import {
  Mail,
  Phone,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4 text-xs font-mono tracking-wider text-zinc-500 uppercase">
          <span className="text-zinc-400 dark:text-zinc-600">06.</span>
          <span>Contact</span>
          <div className="h-px bg-zinc-200 dark:border-zinc-800 flex-1 ml-2" />
        </div>

        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Get In Touch
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 max-w-xl">
            Currently open to AI engineering and software development internship opportunities, technical collaborations, or project inquiries.
          </p>
        </div>

        {/* Contact Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email Card with Copy and Mailto */}
          <div className="p-5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  Primary Email
                </span>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-1 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400">
                        Copied
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div className="font-mono text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-100 break-all">
                {personalInfo.email}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white"
              >
                <span>Compose Email</span>
                <ExternalLink className="w-3 h-3 text-zinc-400" />
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="p-5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 mb-2">
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>Professional Network</span>
              </div>
              <div className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-100">
                Dzaki Khothir
              </div>
              <p className="text-xs text-zinc-500 mt-1">
                Connect for professional updates & networking
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white"
              >
                <span>View LinkedIn Profile</span>
                <ExternalLink className="w-3 h-3 text-zinc-400" />
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="p-5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 mb-2">
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source Code & Repositories</span>
              </div>
              <div className="font-mono text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-100">
                github.com/zakverse
              </div>
              <p className="text-xs text-zinc-500 mt-1">
                Explore project source code, commits, and experiments
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white"
              >
                <span>Open GitHub Profile</span>
                <ExternalLink className="w-3 h-3 text-zinc-400" />
              </a>
            </div>
          </div>

          {/* Phone / Direct Message Card */}
          <div className="p-5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 mb-2">
                <Phone className="w-3.5 h-3.5" />
                <span>Direct Contact</span>
              </div>
              <div className="font-mono text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {personalInfo.phoneFormatted}
              </div>
              <p className="text-xs text-zinc-500 mt-1">
                Purwokerto, Central Java, Indonesia
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center gap-4">
              <a
                href={`tel:${personalInfo.phone}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white"
              >
                <span>Call</span>
                <ExternalLink className="w-3 h-3 text-zinc-400" />
              </a>
              <span className="text-zinc-300 dark:text-zinc-700">&bull;</span>
              <a
                href={`https://wa.me/62${personalInfo.phone.replace(/^0/, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white"
              >
                <span>WhatsApp</span>
                <ExternalLink className="w-3 h-3 text-zinc-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
