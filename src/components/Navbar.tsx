import React, { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  PlusCircle,
  Bookmark,
  Menu,
  X
} from "lucide-react";
import { GithubIcon, CrescentCodeLogo } from "./Icons";

interface NavbarProps {
  favoriteCount?: number;
  onOpenSubmit?: () => void;
  onFilterFavorites?: () => void;
  isFavoritesFilterActive?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  favoriteCount = 0,
  onOpenSubmit,
  onFilterFavorites,
  isFavoritesFilterActive = false
}) => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Initialize theme from HTML class or localStorage
  useEffect(() => {
    const isDarkMode =
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-emerald-100/70 bg-white/80 backdrop-blur-lg dark:border-emerald-950 dark:bg-[#070d0e]/85 transition-colors">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
            <CrescentCodeLogo className="h-6 w-6" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-black tracking-tight text-gray-900 dark:text-white">
              Muslim<span className="text-emerald-600 dark:text-emerald-400">Hub</span>
            </span>
            <span className="rounded-full bg-emerald-100 px-1.5 py-0.2 text-[10px] font-bold text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">
              .link
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
          <a
            href="#directory"
            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition"
          >
            Directory
          </a>
          <a
            href="#featured"
            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition"
          >
            Featured
          </a>
          <a
            href="#about"
            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition"
          >
            About
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Bookmarks Toggle button */}
          {onFilterFavorites && (
            <button
              onClick={onFilterFavorites}
              className={`relative inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold transition cursor-pointer ${
                isFavoritesFilterActive
                  ? "bg-amber-100 text-amber-900 dark:bg-amber-900/50 dark:text-amber-200 border border-amber-300 dark:border-amber-700"
                  : "bg-gray-50 text-gray-700 hover:bg-gray-100 dark:bg-gray-800/80 dark:text-gray-300 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700"
              }`}
              title="Filter by saved bookmarks"
            >
              <Bookmark className={`h-3.5 w-3.5 ${isFavoritesFilterActive ? "fill-current text-amber-600 dark:text-amber-400" : ""}`} />
              <span>Saved</span>
              {favoriteCount > 0 && (
                <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-emerald-600 px-1 text-[10px] font-bold text-white">
                  {favoriteCount}
                </span>
              )}
            </button>
          )}

          {/* Submit Button */}
          {onOpenSubmit && (
            <button
              onClick={onOpenSubmit}
              className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3.5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 transition cursor-pointer"
            >
              <PlusCircle className="h-3.5 w-3.5" />
              <span>Submit Project</span>
            </button>
          )}

          {/* GitHub Repo */}
          <a
            href="https://github.com/mahmoud-ferig/MuslimHub.Link"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-gray-200 bg-white p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white transition"
            aria-label="GitHub Repository"
          >
            <GithubIcon className="h-4 w-4" />
          </a>

          {/* Dark / Light Toggle */}
          <button
            onClick={toggleTheme}
            className="rounded-xl border border-gray-200 bg-white p-2 text-gray-600 hover:bg-gray-50 hover:text-emerald-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-emerald-400 transition cursor-pointer"
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {isDark ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="rounded-xl p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-xl p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Open navigation menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="border-b border-emerald-100 bg-white/95 px-4 py-4 dark:border-emerald-900/40 dark:bg-[#0c1416]/95 sm:hidden animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-3 text-sm font-medium text-gray-700 dark:text-gray-200">
            <a
              href="#directory"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1.5 hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              Directory
            </a>
            <a
              href="#featured"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1.5 hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              Featured Spotlight
            </a>
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1.5 hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              About MuslimHub
            </a>

            <div className="my-2 border-t border-gray-100 dark:border-gray-800 pt-3 flex flex-col gap-2">
              {onFilterFavorites && (
                <button
                  onClick={() => {
                    onFilterFavorites();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-between rounded-xl bg-gray-50 dark:bg-gray-800/80 px-3 py-2.5 text-xs font-semibold text-gray-800 dark:text-gray-200"
                >
                  <span className="flex items-center gap-2">
                    <Bookmark className="h-4 w-4 text-amber-500" />
                    Saved Bookmarks
                  </span>
                  <span className="rounded-full bg-emerald-600 px-1.5 py-0.5 text-[10px] text-white">
                    {favoriteCount}
                  </span>
                </button>
              )}

              {onOpenSubmit && (
                <button
                  onClick={() => {
                    onOpenSubmit();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-emerald-700"
                >
                  <PlusCircle className="h-4 w-4" />
                  Submit an Open Source Project
                </button>
              )}

              <a
                href="https://github.com/mahmoud-ferig/MuslimHub.Link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 dark:border-gray-700 py-2 text-xs font-medium text-gray-700 dark:text-gray-300"
              >
                <GithubIcon className="h-4 w-4" />
                Star on GitHub
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
