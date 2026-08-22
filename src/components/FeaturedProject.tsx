import React from "react";
import { Sparkles, ExternalLink, ShieldCheck, WifiOff, Smartphone } from "lucide-react";
import { GithubIcon } from "./Icons";
import type { Project } from "../types/project";

interface FeaturedProjectProps {
  project: Project;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({ project }) => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-emerald-300/80 bg-gradient-to-br from-emerald-500/10 via-emerald-600/5 to-teal-500/10 p-6 sm:p-8 lg:p-10 shadow-xl shadow-emerald-900/5 backdrop-blur-xl dark:border-emerald-700/50 dark:from-emerald-950/40 dark:via-[#0c181a] dark:to-teal-950/30">
      {/* Decorative ambient background */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl dark:bg-emerald-500/15" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-teal-400/20 blur-3xl dark:bg-teal-500/15" />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div className="max-w-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-900/80 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-700">
              <Sparkles className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
              Community Spotlight
            </span>
            <span className="rounded-full bg-white/80 dark:bg-gray-800/80 px-2.5 py-0.5 text-xs font-mono text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
              Open Source PWA
            </span>
          </div>

          <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {project.title}
          </h2>

          <p className="mt-3 text-base leading-relaxed text-gray-700 dark:text-gray-300">
            {project.description}
          </p>

          {/* Key highlights */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="flex items-center gap-2 rounded-xl bg-white/70 dark:bg-[#111f22]/70 p-2.5 text-xs font-medium text-gray-700 dark:text-gray-200 border border-emerald-100/80 dark:border-emerald-900/40">
              <Smartphone className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Installable PWA</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-white/70 dark:bg-[#111f22]/70 p-2.5 text-xs font-medium text-gray-700 dark:text-gray-200 border border-emerald-100/80 dark:border-emerald-900/40">
              <WifiOff className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Offline Listening</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-white/70 dark:bg-[#111f22]/70 p-2.5 text-xs font-medium text-gray-700 dark:text-gray-200 border border-emerald-100/80 dark:border-emerald-900/40">
              <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>100% Free & Privacy-First</span>
            </div>
          </div>
        </div>

        {/* Action button cluster */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:min-w-[200px] shrink-0">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-700/20 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 transition-all hover:scale-[1.02]"
          >
            <GithubIcon className="h-4 w-4" />
            <span>Explore on GitHub</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-80" />
          </a>

          {project.demoUrl && project.demoUrl !== project.githubUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-300 dark:border-emerald-700 bg-white/90 dark:bg-gray-800/90 px-6 py-3.5 text-sm font-bold text-emerald-800 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition"
            >
              <span>Launch Web App</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
