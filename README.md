<div align="center">

# بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ

# 🌙 MuslimHub.Link

**The Central Directory for Open-Source Islamic Software, APIs, and Developer Tools**

[![Astro](https://img.shields.io/badge/Astro-7.x-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-10b981?style=for-the-badge)](https://github.com/mahmoud-ferig/MuslimHub.Link/pulls)

[🌐 **Visit MuslimHub.Link**](https://muslimhub.link/) • [✨ **Submit a Project**](https://github.com/mahmoud-ferig/MuslimHub.Link/issues/new?title=%5BProject%20Submission%5D%20) • [💡 **Report an Issue**](https://github.com/mahmoud-ferig/MuslimHub.Link/issues)

</div>

---

## 📖 About MuslimHub

**MuslimHub.Link** is a community-driven, open-source hub dedicated to indexing, celebrating, and discovering Islamic software, mobile apps, developer SDKs, APIs, and datasets. 

Our mission is to foster digital tools built as **Sadaqah Jariyah (ongoing charity)**, prioritizing privacy, high aesthetic standards, and open collaboration for the global Ummah.

---

## ✨ Features

- ⚡ **Instant Live Search**: Search seamlessly by project title, description, tags, keywords, author, or programming language.
- 🏷️ **7 Curated Categories**:
  - 📖 **Quran & Hadith**: Readers, recitations, verified translations, and Hadith databases.
  - ⚡ **APIs & Datasets**: Scalable REST endpoints, GraphQL APIs, and structured JSON datasets.
  - 🕌 **Prayer & Calendar**: Astronomical calculation engines, prayer times, and Umm Al-Qura Hijri converters.
  - 📱 **Apps & Web Tools**: PWAs, browser extensions, desktop applications, and daily utility tools.
  - 📦 **Libraries & SDKs**: Multi-language developer packages and algorithms (TypeScript, Python, Go, Dart, etc.).
  - 🎓 **Audio & Learning**: Verse-by-verse recitation CDNs, memorization trackers, and educational apps.
- 🔖 **Saved Bookmarks / Favorites**: Save your go-to developer tools locally with persistent `localStorage` and a dedicated "Saved" filter.
- 🌓 **Dark & Light Mode**: Instant theme switching with zero page flicker and subtle Islamic geometric arabesque accents.
- 🗂️ **Grid & List Views**: Toggle between multi-column card showcase and compact list layout.
- 🔗 **One-Click Share**: Copy project links to your clipboard with animated feedback.
- 🌟 **Featured Spotlight**: Dedicated showcase banner for community applications like the **Quran Audio Tracker PWA**.
- 🚀 **Interactive Submit Modal**: Guided submission checklist with a prefilled GitHub issue generator and copyable JSON snippet for direct pull requests.

---

## 🛠️ Tech Stack

- **Framework**: [Astro 7](https://astro.build/) (Static Site Generation & React Islands)
- **UI & Components**: [React 19](https://react.dev/) + [Lucide Icons](https://lucide.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Typography**: Plus Jakarta Sans & Amiri (Arabic Calligraphy)

---

## 🚀 Getting Started (Local Development)

### Prerequisites

- [Node.js](https://nodejs.org/) (version 20.x or 22.x recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mahmoud-ferig/MuslimHub.Link.git
   cd MuslimHub.Link
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:4321](http://localhost:4321) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview the production build**:
   ```bash
   npm run preview
   ```

---

## 📁 Project Structure

```text
MuslimHub.Link/
├── public/                # Static public assets & icons
├── src/
│   ├── components/        # React & Astro UI components
│   │   ├── Directory.tsx        # Interactive search, categories & bookmark filter island
│   │   ├── FeaturedProject.tsx  # Hero showcase banner for highlighted apps
│   │   ├── Icons.tsx            # Custom SVG icons & brand symbols
│   │   ├── IslamicPattern.astro # Lightweight decorative geometric background
│   │   ├── Navbar.tsx           # Sticky responsive navigation with theme & bookmark counter
│   │   ├── ProjectCard.tsx      # Individual project card with action buttons
│   │   ├── StatsSection.astro   # Community impact metrics & Ummah stats
│   │   └── SubmitModal.tsx      # Interactive submission helper modal
│   ├── data/
│   │   └── projects.ts          # Curated database of Islamic open-source projects
│   ├── layouts/
│   │   └── Layout.astro         # Base HTML layout with SEO meta tags & anti-flicker script
│   ├── pages/
│   │   └── index.astro          # Main landing page
│   ├── styles/
│   │   └── global.css           # Tailwind 4 imports, theme CSS variables & glow styles
│   └── types/
│       └── project.ts           # TypeScript interfaces for projects, filters & categories
├── astro.config.mjs       # Astro configuration with React & Tailwind Vite plugins
├── package.json           # Project metadata and dependencies
└── tsconfig.json          # TypeScript compiler configuration
```

---

## 🤝 How to Submit a Project

We welcome submissions of free, open-source Islamic projects!

### Submission Criteria

1. **Open Source**: The project must have a permissive open-source license (MIT, GPL, Apache, BSD, etc.).
2. **Islamic Utility**: It should serve an Islamic purpose, prayer/calendar calculations, Quranic studies, Arabic/Islamic education, or developer tooling.
3. **Public Repository**: Must have a public GitHub, GitLab, or Git repository with a clear description and README.

### Method 1: Via GitHub Issue (Easiest)

Click [**Submit Project via Issue**](https://github.com/mahmoud-ferig/MuslimHub.Link/issues/new?title=%5BProject%20Submission%5D%20) and fill out the provided template.

### Method 2: Via Pull Request (Instant)

1. Fork this repository.
2. Open [`src/data/projects.ts`](src/data/projects.ts).
3. Add your project object to the `PROJECTS` array:

```typescript
{
  id: "your-project-slug",
  title: "Your Project Name",
  description: "A concise, engaging description of your project.",
  category: "apps-tools", // "quran-hadith" | "apis-data" | "prayer-calendar" | "apps-tools" | "libraries-sdks" | "learning-audio"
  tags: ["TypeScript", "React", "PWA"],
  githubUrl: "https://github.com/username/repository",
  demoUrl: "https://your-demo-url.com", // optional
  featured: false,                      // optional
  author: {
    name: "Your Name or Org",
    url: "https://github.com/username"
  },
  language: "TypeScript",
  license: "MIT"
}
```
4. Submit a Pull Request!

---

## 🤲 Dua & Acknowledgment

> *"When a person dies, all their deeds end except three: a continuing charity (Sadaqah Jariyah), beneficial knowledge, or a child who prays for them."*
> — **Sahih Muslim 1631**

May Allah bless everyone who contributes to open-source software that benefits the Ummah, and may He accept our efforts as Sadaqah Jariyah.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).