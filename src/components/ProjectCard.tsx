import React, { useState } from "react";
import type { Project } from "../types/project";
import { GithubIcon } from "./Icons";
import {
  ExternalLink,
  Bookmark,
  Share2,
  Check,
  Sparkles,
  BookOpen,
  Server,
  Clock,
  Smartphone,
  Code,
  Headphones,
  Tag
} from "lucide-react";

interface ProjectCardProps {
  project: Project;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  viewMode?: "grid" | "list";
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "quran-hadith": <BookOpen className="h-3.5 w-3.5" />,
  "apis-data": <Server className="h-3.5 w-3.5" />,
  "prayer-calendar": <Clock className="h-3.5 w-3.5" />,
  "apps-tools": <Smartphone className="h-3.5 w-3.5" />,
  "libraries-sdks": <Code className="h-3.5 w-3.5" />,
  "learning-audio": <Headphones className="h-3.5 w-3.5" />,
  all: <Sparkles className="h-3.5 w-3.5" />
};

const CATEGORY_LABELS: Record<string, string> = {
  "quran-hadith": "Quran & Hadith",
  "apis-data": "API & Data",
  "prayer-calendar": "Prayer & Calendar",
  "apps-tools": "App / Tool",
  "libraries-sdks": "Library / SDK",
  "learning-audio": "Audio & Learning"
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isFavorite,
  onToggleFavorite,
  viewMode = "grid"
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const url = project.demoUrl || project.githubUrl;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const isList = viewMode === "list";

  return (
    <article
      className={`group relative flex flex-col justify-between rounded-2xl border transition-all duration-300 ${
        project.featured
          ? "border-emerald-300/80 bg-gradient-to-b from-white via-emerald-50/25 to-white dark:border-emerald-700/60 dark:from-[#0f1d1f] dark:to-[#091214] shadow-md shadow-emerald-500/5 hover:shadow-lg hover:shadow-emerald-500/15"
          : "border-gray-200/80 bg-white/90 dark:border-gray-800/80 dark:bg-[#0c1416]/90 hover:border-emerald-300 dark:hover:border-emerald-700 shadow-sm hover:shadow-md"
      } ${
        isList
          ? "p-5 sm:flex-row sm:items-center sm:gap-6"
          : "p-6 hover:-translate-y-1"
      } backdrop-blur-md`}
    >
      {/* Top Header info */}
      <div className={`${isList ? "flex-1" : "w-full"}`}>
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {/* Category badge */}
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-900/50">
              {CATEGORY_ICONS[project.category] || <Tag className="h-3.5 w-3.5" />}
              <span>{CATEGORY_LABELS[project.category] || project.category}</span>
            </span>

            {/* Featured Badge */}
            {project.badgeText && (
              <span className="inline-flex items-center gap-1 rounded-lg bg-amber-50 px-2 py-0.5 text-xs font-semibold text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200/60 dark:border-amber-900/50">
                <Sparkles className="h-3 w-3" />
                {project.badgeText}
              </span>
            )}

            {/* Language badge */}
            {project.language && (
              <span className="rounded-md bg-gray-100 px-2 py-0.5 text-[11px] font-mono text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                {project.language}
              </span>
            )}
          </div>

          {/* Quick action buttons: Favorite & Share */}
          <div className="flex items-center gap-1">
            <button
              onClick={handleCopy}
              className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-emerald-600 dark:hover:bg-emerald-950/50 dark:hover:text-emerald-400 transition cursor-pointer"
              title="Copy link to clipboard"
              aria-label={`Copy link for ${project.title}`}
            >
              {copied ? (
                <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400 animate-in zoom-in-50" />
              ) : (
                <Share2 className="h-4 w-4" />
              )}
            </button>
            <button
              onClick={() => onToggleFavorite(project.id)}
              className={`rounded-lg p-1.5 transition cursor-pointer ${
                isFavorite
                  ? "bg-amber-50 text-amber-500 dark:bg-amber-950/40 dark:text-amber-400"
                  : "text-gray-400 hover:bg-gray-100 hover:text-amber-500 dark:hover:bg-emerald-950/50 dark:hover:text-amber-400"
              }`}
              title={isFavorite ? "Remove from bookmarks" : "Save to bookmarks"}
              aria-label={isFavorite ? "Remove bookmark" : "Add bookmark"}
            >
              <Bookmark className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
            </button>
          </div>
        </div>

        {/* Title */}
        <h3 className="mt-3 text-lg font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          <a
            href={project.demoUrl || project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus:outline-none focus:underline"
          >
            {project.title}
          </a>
        </h3>

        {/* Author info */}
        {project.author && (
          <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
            by{" "}
            {project.author.url ? (
              <a
                href={project.author.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                {project.author.name}
              </a>
            ) : (
              <span className="font-medium text-gray-700 dark:text-gray-300">{project.author.name}</span>
            )}
          </p>
        )}

        {/* Description */}
        <p className="mt-2.5 text-sm leading-relaxed text-gray-600 dark:text-gray-300 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-gray-50 px-2 py-0.5 text-[11px] font-medium text-gray-600 dark:bg-gray-800/80 dark:text-gray-400 border border-gray-100 dark:border-gray-800"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer / Action Links */}
      <div
        className={`mt-5 flex items-center gap-2 pt-4 border-t border-gray-100 dark:border-gray-800/70 ${
          isList ? "sm:mt-0 sm:pt-0 sm:border-t-0 sm:flex-col sm:items-end sm:justify-center" : "justify-between"
        }`}
      >
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-gray-50/80 px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-700 dark:bg-gray-800/70 dark:text-gray-200 dark:hover:bg-gray-700 transition"
          aria-label={`View ${project.title} on GitHub`}
        >
          <GithubIcon className="h-3.5 w-3.5" />
          <span>Source</span>
        </a>

        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3.5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 transition"
            aria-label={`Open live demo for ${project.title}`}
          >
            <span>Live App</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
