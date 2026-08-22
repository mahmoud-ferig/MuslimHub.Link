import React, { useState } from "react";
import { X, ExternalLink, Check, Copy, Sparkles, BookOpen } from "lucide-react";
import { GithubIcon } from "./Icons";

interface SubmitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubmitModal: React.FC<SubmitModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const templateSnippet = `{
  "id": "your-project-slug",
  "title": "Your Project Name",
  "description": "A clear, concise description of your open-source Islamic project.",
  "category": "apps-tools", // "quran-hadith" | "apis-data" | "prayer-calendar" | "apps-tools" | "libraries-sdks" | "learning-audio"
  "tags": ["React", "TypeScript", "Islamic Tool"],
  "githubUrl": "https://github.com/username/repository",
  "demoUrl": "https://your-demo-link.com",
  "author": {
    "name": "Your Name or Org",
    "url": "https://github.com/username"
  },
  "language": "TypeScript",
  "license": "MIT"
}`;

  const copyTemplate = () => {
    navigator.clipboard.writeText(templateSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const newIssueUrl = `https://github.com/mahmoud-ferig/MuslimHub.Link/issues/new?title=%5BProject%20Submission%5D%20&body=${encodeURIComponent(
    `### Project Name\n\n### Repository URL\n\n### Live Demo / Website (if applicable)\n\n### Category\n\n### Description\n\n### Tags & Tech Stack\n\n### License\n`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl rounded-2xl border border-emerald-100 bg-white p-6 shadow-2xl transition-all dark:border-emerald-900/40 dark:bg-[#0e1719] dark:text-gray-100 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-emerald-950/50 dark:hover:text-gray-200 transition cursor-pointer"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Submit an Open Source Project</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Help grow the directory of digital tools serving the Ummah.
            </p>
          </div>
        </div>

        {/* Requirements Checklist */}
        <div className="mt-6 rounded-xl bg-emerald-50/70 p-4 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
            Submission Guidelines
          </h4>
          <ul className="mt-2.5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
              <span>Must be 100% free and open-source (MIT, GPL, Apache, etc.).</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
              <span>Serves an Islamic purpose, prayer/calendar, education, or developer tooling.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
              <span>Public GitHub/GitLab repository with a descriptive README.</span>
            </li>
          </ul>
        </div>

        {/* Submission Methods */}
        <div className="mt-6 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={newIssueUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 transition cursor-pointer"
            >
              <GithubIcon className="h-4 w-4" />
              <span>Submit via GitHub Issue</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-70" />
            </a>
            <a
              href="https://github.com/mahmoud-ferig/MuslimHub.Link/pulls"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-5 py-3 text-sm font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition cursor-pointer"
            >
              <BookOpen className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <span>Create a Pull Request</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-70" />
            </a>
          </div>

          {/* Quick JSON snippet copy for PRs */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 mb-1.5">
              <span>Direct PR format (add to <code className="font-mono text-emerald-700 dark:text-emerald-400">src/data/projects.ts</code>):</span>
              <button
                onClick={copyTemplate}
                className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium hover:underline cursor-pointer"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? "Copied!" : "Copy JSON"}
              </button>
            </div>
            <pre className="max-h-36 overflow-auto rounded-lg bg-gray-900 p-3 text-xs font-mono text-emerald-300">
              {templateSnippet}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-xl px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
