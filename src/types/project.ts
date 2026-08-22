export type ProjectCategory =
  | "all"
  | "quran-hadith"
  | "apis-data"
  | "prayer-calendar"
  | "apps-tools"
  | "libraries-sdks"
  | "learning-audio";

export interface CategoryInfo {
  id: ProjectCategory;
  name: string;
  icon: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  stars?: number;
  featured?: boolean;
  author?: {
    name: string;
    url?: string;
    avatar?: string;
  };
  language?: string;
  license?: string;
  badgeText?: string;
}

export type SortOption = "featured" | "name" | "recent" | "category";

export interface FilterState {
  searchQuery: string;
  category: ProjectCategory;
  selectedTag: string | null;
  sortBy: SortOption;
  favoritesOnly: boolean;
  viewMode: "grid" | "list";
}
