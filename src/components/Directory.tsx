import React, { useState, useMemo, useEffect } from "react";
import type { Project, ProjectCategory, SortOption } from "../types/project";
import { CATEGORIES, PROJECTS } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Navbar from "./Navbar";
import { SubmitModal } from "./SubmitModal";
import {
  Search,
  X,
  LayoutGrid,
  List,
  SlidersHorizontal,
  Bookmark,
  Sparkles,
  BookOpen,
  Server,
  Clock,
  Smartphone,
  Code,
  Headphones,
  RotateCcw,
  Tag as TagIcon
} from "lucide-react";

const CATEGORY_ICON_COMPONENTS: Record<string, React.ReactNode> = {
  all: <Sparkles className="h-4 w-4" />,
  "quran-hadith": <BookOpen className="h-4 w-4" />,
  "apis-data": <Server className="h-4 w-4" />,
  "prayer-calendar": <Clock className="h-4 w-4" />,
  "apps-tools": <Smartphone className="h-4 w-4" />,
  "libraries-sdks": <Code className="h-4 w-4" />,
  "learning-audio": <Headphones className="h-4 w-4" />
};

export const Directory: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [favoritesOnly, setFavoritesOnly] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isSubmitOpen, setIsSubmitOpen] = useState<boolean>(false);

  // Load favorites on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("muslimhub_favorites");
      if (saved) {
        setFavorites(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem("muslimhub_favorites", JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  // Collect all unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    PROJECTS.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
    return Array.from(tagSet).sort();
  }, []);

  // Filtered & sorted projects
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      // Favorites filter
      if (favoritesOnly && !favorites.includes(project.id)) {
        return false;
      }

      // Category filter
      if (selectedCategory !== "all" && project.category !== selectedCategory) {
        return false;
      }

      // Tag filter
      if (selectedTag && !project.tags.includes(selectedTag)) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = project.title.toLowerCase().includes(query);
        const matchesDesc = project.description.toLowerCase().includes(query);
        const matchesTags = project.tags.some((t) => t.toLowerCase().includes(query));
        const matchesAuthor = project.author?.name.toLowerCase().includes(query);
        const matchesLang = project.language?.toLowerCase().includes(query);

        if (!matchesTitle && !matchesDesc && !matchesTags && !matchesAuthor && !matchesLang) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "featured") {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return a.title.localeCompare(b.title);
      }
      if (sortBy === "name") {
        return a.title.localeCompare(b.title);
      }
      if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });
  }, [searchQuery, selectedCategory, selectedTag, sortBy, favoritesOnly, favorites]);

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedTag(null);
    setFavoritesOnly(false);
  };

  const isFiltering =
    searchQuery.trim() !== "" || selectedCategory !== "all" || selectedTag !== null || favoritesOnly;

  return (
    <>
      {/* Top sticky Navbar */}
      <Navbar
        favoriteCount={favorites.length}
        onOpenSubmit={() => setIsSubmitOpen(true)}
        onFilterFavorites={() => setFavoritesOnly((prev) => !prev)}
        isFavoritesFilterActive={favoritesOnly}
      />

      {/* Directory Section Container */}
      <div id="directory" className="scroll-mt-24 mt-12 sm:mt-16">
        {/* Header & Controls Container */}
        <div className="rounded-3xl border border-gray-200/80 bg-white/70 p-5 sm:p-7 shadow-sm backdrop-blur-md dark:border-gray-800/80 dark:bg-[#0c1416]/70">
          {/* Search bar & Quick View controls */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, keywords, tech stack (e.g. API, React, Quran)..."
                className="w-full rounded-2xl border border-gray-200 bg-white py-3.5 pl-12 pr-10 text-sm text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-700/80 dark:bg-[#111f22] dark:text-white dark:placeholder:text-gray-500 transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* View Mode & Sort Dropdown */}
            <div className="flex items-center gap-3 self-end md:self-auto">
              {/* Sort By */}
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 text-gray-500 hidden sm:inline" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-xs font-semibold text-gray-700 focus:border-emerald-500 focus:outline-none dark:border-gray-700 dark:bg-[#111f22] dark:text-gray-200 cursor-pointer shadow-sm"
                >
                  <option value="featured">Featured First</option>
                  <option value="name">Alphabetical (A-Z)</option>
                  <option value="category">By Category</option>
                </select>
              </div>

              {/* View Switcher */}
              <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50/80 p-1 dark:border-gray-700 dark:bg-[#111f22]">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`rounded-lg p-1.5 transition ${
                    viewMode === "grid"
                      ? "bg-white text-emerald-600 shadow-sm dark:bg-gray-800 dark:text-emerald-400"
                      : "text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                  }`}
                  title="Grid view"
                  aria-label="Grid view"
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`rounded-lg p-1.5 transition ${
                    viewMode === "list"
                      ? "bg-white text-emerald-600 shadow-sm dark:bg-gray-800 dark:text-emerald-400"
                      : "text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                  }`}
                  title="List view"
                  aria-label="List view"
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-5 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id && !favoritesOnly;
              const count =
                cat.id === "all"
                  ? PROJECTS.length
                  : PROJECTS.filter((p) => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    if (favoritesOnly) setFavoritesOnly(false);
                  }}
                  className={`flex items-center gap-2 shrink-0 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all ${
                    isSelected
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20 dark:bg-emerald-500"
                      : "bg-gray-100/80 text-gray-700 hover:bg-gray-200 dark:bg-gray-800/60 dark:text-gray-300 dark:hover:bg-gray-800"
                  }`}
                >
                  {CATEGORY_ICON_COMPONENTS[cat.id]}
                  <span>{cat.name}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[10px] font-bold ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-gray-200/80 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}

            {/* Saved Bookmarks Tab */}
            <button
              onClick={() => setFavoritesOnly(!favoritesOnly)}
              className={`flex items-center gap-2 shrink-0 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all ${
                favoritesOnly
                  ? "bg-amber-500 text-white shadow-md shadow-amber-500/20"
                  : "bg-amber-50 text-amber-800 hover:bg-amber-100 dark:bg-amber-950/40 dark:text-amber-300 dark:hover:bg-amber-900/50"
              }`}
            >
              <Bookmark className={`h-4 w-4 ${favoritesOnly ? "fill-current" : ""}`} />
              <span>Saved Bookmarks</span>
              <span
                className={`rounded-full px-1.5 py-0.2 text-[10px] font-bold ${
                  favoritesOnly
                    ? "bg-white/20 text-white"
                    : "bg-amber-200/60 text-amber-900 dark:bg-amber-900 dark:text-amber-200"
                }`}
              >
                {favorites.length}
              </span>
            </button>
          </div>

          {/* Popular Tag Quick Filters */}
          <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800/80 flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mr-1.5 inline-flex items-center gap-1">
              <TagIcon className="h-3 w-3" />
              Tags:
            </span>
            {allTags.slice(0, 10).map((tag) => {
              const isTagSelected = selectedTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(isTagSelected ? null : tag)}
                  className={`rounded-lg px-2.5 py-1 text-[11px] font-medium transition cursor-pointer ${
                    isTagSelected
                      ? "bg-emerald-700 text-white dark:bg-emerald-500"
                      : "bg-gray-100 text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-emerald-950/60 dark:hover:text-emerald-300"
                  }`}
                >
                  #{tag}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Filter State Summary & Reset */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 px-1">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <span className="font-bold text-gray-900 dark:text-white">
              {filteredProjects.length}
            </span>
            <span>
              {filteredProjects.length === 1 ? "project" : "projects"} found
            </span>
            {isFiltering && (
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                (Filtered)
              </span>
            )}
          </div>

          {isFiltering && (
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset all filters</span>
            </button>
          )}
        </div>

        {/* Project Results Grid / List */}
        {filteredProjects.length > 0 ? (
          <div
            className={`mt-6 ${
              viewMode === "grid"
                ? "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                : "flex flex-col gap-4"
            }`}
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isFavorite={favorites.includes(project.id)}
                onToggleFavorite={toggleFavorite}
                viewMode={viewMode}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="mt-8 rounded-3xl border border-dashed border-gray-300 bg-white/50 p-12 text-center dark:border-gray-800 dark:bg-[#0c1416]/50 backdrop-blur-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
              <Search className="h-7 w-7" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
              No matching Islamic open-source projects
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              We couldn&apos;t find any projects matching your current search criteria. Try loosening your keywords or reset your filters.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow hover:bg-emerald-700 transition cursor-pointer"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Reset Filters
              </button>
              <button
                onClick={() => setIsSubmitOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 dark:border-gray-700 px-4 py-2.5 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer"
              >
                Submit This Project
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Project Submission Modal */}
      <SubmitModal isOpen={isSubmitOpen} onClose={() => setIsSubmitOpen(false)} />
    </>
  );
};

export default Directory;
