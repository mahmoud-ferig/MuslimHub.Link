import type { CategoryInfo, Project } from "../types/project";

export const CATEGORIES: CategoryInfo[] = [
  {
    id: "all",
    name: "All Projects",
    icon: "Sparkles",
    description: "Browse all curated open-source Islamic projects"
  },
  {
    id: "quran-hadith",
    name: "Quran & Hadith",
    icon: "BookOpen",
    description: "Quranic text readers, recitations, translations & Hadith collections"
  },
  {
    id: "apis-data",
    name: "APIs & Datasets",
    icon: "Server",
    description: "Open REST APIs, GraphQL endpoints, and structured Islamic datasets"
  },
  {
    id: "prayer-calendar",
    name: "Prayer & Calendar",
    icon: "Clock",
    description: "Adhan calculation engines, prayer times & Hijri calendar tools"
  },
  {
    id: "apps-tools",
    name: "Apps & Web Tools",
    icon: "Smartphone",
    description: "PWAs, desktop utilities, browser extensions & daily Muslim tools"
  },
  {
    id: "libraries-sdks",
    name: "Libraries & SDKs",
    icon: "Code",
    description: "Developer packages, calculation algorithms, and multi-language SDKs"
  },
  {
    id: "learning-audio",
    name: "Audio & Learning",
    icon: "Headphones",
    description: "Audio streaming engines, memorization trackers & educational platforms"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "quran-audio-tracker",
    title: "Quran Audio Tracker",
    description:
      "A modern Progressive Web App (PWA) designed to track, log, and manage your daily Quran listening, recitation, and memorization progress with offline capability.",
    category: "learning-audio",
    tags: ["PWA", "React", "TypeScript", "Tailwind CSS", "Audio", "Offline First"],
    githubUrl: "https://github.com/mahmoud-ferig/Quran-Audio-Tracker-PWA-",
    demoUrl: "https://github.com/mahmoud-ferig/Quran-Audio-Tracker-PWA-",
    featured: true,
    author: {
      name: "Mahmoud Ferig",
      url: "https://github.com/mahmoud-ferig"
    },
    language: "TypeScript",
    license: "MIT",
    badgeText: "Featured App"
  },
  {
    id: "quran-com-frontend",
    title: "Quran.com Web Experience",
    description:
      "The official next-generation web application for Quran.com, offering multi-translation reading, audio recitations by famous Qaris, tafsir, and word-by-word analysis.",
    category: "quran-hadith",
    tags: ["Next.js", "React", "TypeScript", "Quran", "Tafsir", "Audio"],
    githubUrl: "https://github.com/quran/quran.com-frontend",
    demoUrl: "https://quran.com",
    featured: true,
    author: {
      name: "Quran.com Team",
      url: "https://github.com/quran"
    },
    language: "TypeScript",
    license: "GPL-3.0"
  },
  {
    id: "quran-com-api",
    title: "Quran.com API v4",
    description:
      "A highly scalable and robust REST API powering Quran.com with comprehensive chapters, verses, audio streams, translations, and tafsir metadata.",
    category: "apis-data",
    tags: ["Ruby", "Rails", "API", "PostgreSQL", "Quran", "Search"],
    githubUrl: "https://github.com/quran/quran.com-api",
    demoUrl: "https://api.quran.com",
    featured: true,
    author: {
      name: "Quran.com Team",
      url: "https://github.com/quran"
    },
    language: "Ruby",
    license: "Apache-2.0"
  },
  {
    id: "aladhan-api",
    title: "Aladhan Prayer Times API",
    description:
      "Global prayer times calculation API supporting all major calculation methods, Islamic Hijri calendar conversions, Qibla direction, and Asr juristic methods.",
    category: "apis-data",
    tags: ["PHP", "API", "Prayer Times", "Hijri Calendar", "Islamic Network"],
    githubUrl: "https://github.com/islamic-network/api.aladhan.com",
    demoUrl: "https://aladhan.com/prayer-times-api",
    featured: true,
    author: {
      name: "Islamic Network",
      url: "https://github.com/islamic-network"
    },
    language: "PHP",
    license: "GPL-3.0"
  },
  {
    id: "adhan-js",
    title: "Adhan.js",
    description:
      "High precision, well-tested JavaScript library for calculating Islamic prayer times for any location across the globe using astronomical algorithms.",
    category: "libraries-sdks",
    tags: ["JavaScript", "TypeScript", "Calculations", "Prayer Times", "Algorithms"],
    githubUrl: "https://github.com/batoulapps/adhan-js",
    author: {
      name: "Batoul Apps",
      url: "https://github.com/batoulapps"
    },
    language: "JavaScript",
    license: "MIT"
  },
  {
    id: "hadith-api",
    title: "Open Hadith API & Datasets",
    description:
      "Comprehensive multi-language open-source Hadith database API covering Sahih Bukhari, Sahih Muslim, Sunan Abi Dawud, and more with JSON endpoints.",
    category: "apis-data",
    tags: ["JSON", "API", "Hadith", "Multi-language", "Open Data"],
    githubUrl: "https://github.com/fawazahmed0/hadith-api",
    author: {
      name: "Fawaz Ahmed",
      url: "https://github.com/fawazahmed0"
    },
    language: "JavaScript",
    license: "MIT"
  },
  {
    id: "quran-tab",
    title: "Quran Tab",
    description:
      "An inspiring browser new-tab extension that displays a verse from the Noble Quran with beautiful Islamic photography, translations, and recitation audio every time you open a tab.",
    category: "apps-tools",
    tags: ["Browser Extension", "Vue.js", "Chrome", "Firefox", "Quran"],
    githubUrl: "https://github.com/The-Quran-Project/Quran-Tab",
    demoUrl: "https://qurantab.app",
    author: {
      name: "The Quran Project",
      url: "https://github.com/The-Quran-Project"
    },
    language: "Vue",
    license: "MIT"
  },
  {
    id: "quran-enc-api",
    title: "QuranEnc Free Translation API",
    description:
      "Authentic, verified translations of the meanings of the Noble Quran in over 70 world languages provided by trusted Islamic scholars and translation centers.",
    category: "apis-data",
    tags: ["API", "Translations", "Multi-language", "Scholarly", "JSON"],
    githubUrl: "https://github.com/quranenc",
    demoUrl: "https://quranenc.com",
    author: {
      name: "QuranEnc",
      url: "https://github.com/quranenc"
    },
    language: "PHP",
    license: "Open Source"
  },
  {
    id: "everyayah-audio",
    title: "EveryAyah Audio Repository",
    description:
      "Direct verse-by-verse audio database containing recitations by dozens of world-renowned Qaris in high-bitrate MP3, indexed by Surah and Ayah numbers.",
    category: "learning-audio",
    tags: ["Audio", "Quran Recitation", "Qari", "MP3 Database", "Open CDN"],
    githubUrl: "https://github.com/islamic-network/cdn.islamic.network",
    demoUrl: "https://everyayah.com",
    author: {
      name: "EveryAyah Project",
      url: "https://everyayah.com"
    },
    language: "Scripting",
    license: "Open Source"
  },
  {
    id: "tanzil-quran-text",
    title: "Tanzil Quran Text Project",
    description:
      "An ultra-high accuracy Unicode Quran text repository verified by global scholars and used by leading Quranic applications worldwide.",
    category: "quran-hadith",
    tags: ["Uthmani", "Typography", "Unicode", "Quran Text", "Precision"],
    githubUrl: "https://github.com/tanzil-net",
    demoUrl: "http://tanzil.net",
    author: {
      name: "Tanzil Project",
      url: "http://tanzil.net"
    },
    language: "XML / Text",
    license: "Tanzil License"
  },
  {
    id: "adhan-py",
    title: "Adhan Py",
    description:
      "Python port of the Adhan prayer time calculation engine. Perfect for backend services, automation scripts, Home Assistant, and Raspberry Pi smart adhan clocks.",
    category: "libraries-sdks",
    tags: ["Python", "Home Assistant", "IoT", "Prayer Times", "Package"],
    githubUrl: "https://github.com/rabComponents/adhan-py",
    author: {
      name: "rabComponents",
      url: "https://github.com/rabComponents"
    },
    language: "Python",
    license: "MIT"
  },
  {
    id: "hisnulmuslim-app",
    title: "Hisnul Muslim Duas",
    description:
      "Open-source fortress of the Muslim supplications and daily Adhkar application with authentic references, Arabic vocalization, audio, and categorization.",
    category: "apps-tools",
    tags: ["Adhkar", "Flutter", "Mobile", "Dua", "Cross-Platform"],
    githubUrl: "https://github.com/hisnulmuslim",
    author: {
      name: "Hisnul Muslim Community",
      url: "https://github.com/hisnulmuslim"
    },
    language: "Dart",
    license: "GPL-3.0"
  },
  {
    id: "umalqura-calendar",
    title: "Umm Al-Qura Hijri Calendar SDK",
    description:
      "Official Umm Al-Qura lunar Hijri calendar calculations and date converters for accurate Islamic date management in Node.js, Python, and Dart.",
    category: "prayer-calendar",
    tags: ["Hijri", "Calendar", "Umm Al-Qura", "Calculations", "TypeScript"],
    githubUrl: "https://github.com/umalqura",
    author: {
      name: "Umalqura Open Source",
      url: "https://github.com/umalqura"
    },
    language: "TypeScript",
    license: "MIT"
  },
  {
    id: "zakat-calc-core",
    title: "Open Zakat Calculator",
    description:
      "Modern and comprehensive Nisab & Zakat calculation engine supporting precious metals (gold, silver), cash savings, stocks, crypto, and trade assets according to authentic Fiqh.",
    category: "apps-tools",
    tags: ["Zakat", "Fiqh", "Calculator", "Finance", "TypeScript"],
    githubUrl: "https://github.com/islamic-network/zakat",
    author: {
      name: "Islamic Network",
      url: "https://github.com/islamic-network"
    },
    language: "TypeScript",
    license: "MIT"
  },
  {
    id: "quran-cli",
    title: "Quran CLI",
    description:
      "Read, search, and listen to the Holy Quran directly from your terminal with rich terminal styling, translations, and instant search.",
    category: "apps-tools",
    tags: ["CLI", "Terminal", "Go", "Developer Tool", "Quran"],
    githubUrl: "https://github.com/intevel/quran-cli",
    author: {
      name: "intevel",
      url: "https://github.com/intevel"
    },
    language: "Go",
    license: "MIT"
  }
];
