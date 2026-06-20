export type Lang = 'zh' | 'en';

export const translations = {
  zh: {
    nav: {
      home: '首頁',
      blog: '文章',
      projects: '作品',
      about: '關於',
      langToggle: 'EN',
    },
    home: {
      tag: 'Software Engineer · ML Researcher',
      bio: '深度學習碩士，專注於軟體工程 × AI Agent × 通訊資料分析。\n這裡記錄技術筆記、論文閱讀與偶爾的想法。',
      bioHighlight: '軟體工程 × AI Agent × 通訊資料分析',
      authorBio: '軟體工程師\n深度學習研究者\n偶爾寫筆記的人',
      cta1: '查看作品集',
      cta2: '閱讀文章 →',
      recentPosts: '最新文章',
      featuredProjects: '精選作品',
      seeAll: '全部',
      seeAllPosts: '全部文章 →',
      seeAllProjects: '全部作品 →',
    },
    blog: {
      title: '文章',
      sub: '技術筆記 · 論文閱讀 · 工具使用 · 偶爾的想法',
      all: '全部',
      empty: '// 文章陸續更新中',
    },
    projects: {
      title: '作品集',
      sub: '工程實踐 · AI 研究 · 系統建設',
      note: '多數作品為內部系統，以截圖或 GIF 呈現。',
      placeholder: '// 圖片陸續更新中',
    },
    about: {
      title: '關於',
      role: 'Software Engineer · ML Researcher',
      bio: '軟體工程師，碩士主題為深度學習應用於醫學影像分析。目前在 Groundhog Technologies 從事電信商 tier-1 生產環境除錯、O-RAN 系統整合與 AI Agent 開發。這裡記錄我的技術筆記、論文閱讀心得與工程實踐。',
      skills: '技術棧',
      experience: '工作經歷',
      education: '學歷 & 研究',
      skillCategories: {
        '語言': ['Python', 'Java', 'C++', 'SQL', 'Shell'],
        '資料 & 基礎設施': ['ClickHouse', 'MySQL', 'Kubernetes', 'Docker', 'Jenkins CI/CD', 'Apache Airflow', 'FastAPI'],
        'AI / ML': ['LLM Agents', 'PyTorch', 'TensorFlow', 'Deep Learning', 'Computer Vision', 'Weakly Supervised Learning'],
        '領域': ['O-RAN / EIAP rApp', '電信網路優化（LTE/NSA/SA/NR）', '生產環境除錯', '通訊資料分析'],
      },
    },
    footer: {
      builtWith: 'Built with Astro',
    },
  },
  en: {
    nav: {
      home: 'Home',
      blog: 'Blog',
      projects: 'Projects',
      about: 'About',
      langToggle: '中',
    },
    home: {
      tag: 'Software Engineer · ML Researcher',
      bio: "M.S. in Deep Learning, focused on Software Engineering × AI Agents × Telecom Data Analysis.\nThis is where I keep technical notes, paper summaries, and occasional thoughts.",
      bioHighlight: 'Software Engineering × AI Agents × Telecom Analysis',
      authorBio: 'Software Engineer\nML Researcher\nOccasional blogger',
      cta1: 'View Projects',
      cta2: 'Read Blog →',
      recentPosts: 'Recent Posts',
      featuredProjects: 'Featured Projects',
      seeAll: 'All',
      seeAllPosts: 'All Posts →',
      seeAllProjects: 'All Projects →',
    },
    blog: {
      title: 'Blog',
      sub: 'Technical Notes · Paper Reading · Tool Tips · Thoughts',
      all: 'All',
      empty: '// Posts coming soon',
    },
    projects: {
      title: 'Projects',
      sub: 'Engineering Practice · AI Research · System Building',
      note: 'Most projects are internal systems, shown via screenshots or GIFs.',
      placeholder: '// Images coming soon',
    },
    about: {
      title: 'About',
      role: 'Software Engineer · ML Researcher',
      bio: 'Software engineer with an M.S. in deep learning for medical image analysis. Currently at Groundhog Technologies working on tier-1 telecom production debugging, O-RAN system integration, and AI agent development.',
      skills: 'Tech Stack',
      experience: 'Experience',
      education: 'Education & Research',
      skillCategories: {
        'Languages': ['Python', 'Java', 'C++', 'SQL', 'Shell'],
        'Data & Infrastructure': ['ClickHouse', 'MySQL', 'Kubernetes', 'Docker', 'Jenkins CI/CD', 'Apache Airflow', 'FastAPI'],
        'AI / ML': ['LLM Agents', 'PyTorch', 'TensorFlow', 'Deep Learning', 'Computer Vision', 'Weakly Supervised Learning'],
        'Domain': ['O-RAN / EIAP rApp', 'Telecom network optimization (LTE/NSA/SA/NR)', 'Production debugging', 'Telecom data analysis'],
      },
    },
    footer: {
      builtWith: 'Built with Astro',
    },
  },
} as const;

export function t(lang: Lang) {
  return translations[lang];
}
