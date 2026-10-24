export type SkillLevel = "Expert" | "Advanced" | "Intermediate";
export type ProjectCategory = "web" | "fullstack";

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  description: string;
  location: string;
  email: string;
  phone: string;
  status: string;
  avatar: string;
  resumeUrl: string;
  socials: Array<{
    name: string;
    url: string;
    icon: string;
    color: string;
  }>;
}

export interface Skill {
  name: string;
  level: SkillLevel;
  icon: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  major: string;
  period: string;
  location: string;
  status: string;
  badge: string;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  image?: string;
  fallbackBg: string;
  tags: string[];
  liveUrl?: string;
  repositories: Array<{
    label: string;
    url: string;
  }>;
}

export const personalInfo: PersonalInfo = {
  name: "Ahmad Zaeladi",
  role: "Full-Stack Web Developer",
  tagline:
    "Building robust full-stack web applications, scalable APIs, and pixel-perfect interfaces.",
  description:
    "I am an Informatics Engineering student at Universitas Pamulang with a strong foundation in modern full-stack web engineering. I build end-to-end web solutions—from architecting interactive frontends with React and Next.js to engineering reliable backend services with Node.js, Express, and REST APIs.",
  location: "Tangerang City, Banten, Indonesia",
  email: "zaeladiahmad04@gmail.com",
  phone: "+62 851-5690-3498",
  status: "Open for Full-Stack Opportunities",
  avatar: "images/logo.png",
  resumeUrl: "document/CV Ahmad 2024.pdf",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/Ahmadzaeladi",
      icon: "Github",
      color: "hover:text-slate-900 hover:bg-slate-100",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ahmad-zaeladi-0884951ab/",
      icon: "Linkedin",
      color: "hover:text-blue-600 hover:bg-blue-50",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/zaeladi_/",
      icon: "Instagram",
      color: "hover:text-pink-600 hover:bg-pink-50",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@zaeladi",
      icon: "Video",
      color: "hover:text-slate-900 hover:bg-slate-100",
    },
  ],
};

export const developerMilestones = [
  {
    id: 1,
    number: "15+",
    label: "Web Projects Built",
    description: "Production web applications, full-stack systems & SPAs",
    icon: "Code2",
    color: "from-sky-400 to-blue-500",
  },
  {
    id: 2,
    number: "S1",
    label: "Informatics Student",
    description: "Universitas Pamulang (Software Engineering focus)",
    icon: "GraduationCap",
    color: "from-blue-400 to-indigo-500",
  },
  {
    id: 3,
    number: "99.8%",
    label: "Performance & Quality",
    description: "Lighthouse audit scores, clean code & responsive layouts",
    icon: "CheckCircle",
    color: "from-teal-400 to-emerald-500",
  },
  {
    id: 4,
    number: "1000+",
    label: "Development Hours",
    description: "Full-stack programming, architecture design & debugging",
    icon: "Terminal",
    color: "from-indigo-400 to-purple-500",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend & UI Engineering",
    icon: "Layout",
    skills: [
      { name: "React.js", level: "Advanced", icon: "Code" },
      { name: "Next.js", level: "Intermediate", icon: "Boxes" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "FileCode" },
      { name: "Tailwind CSS", level: "Expert", icon: "Palette" },
      { name: "HTML5 / CSS3", level: "Expert", icon: "Globe" },
      { name: "Framer Motion", level: "Intermediate", icon: "Layers" },
    ],
  },
  {
    category: "Backend & API Systems",
    icon: "Server",
    skills: [
      { name: "Node.js", level: "Intermediate", icon: "Server" },
      { name: "Express.js", level: "Intermediate", icon: "Terminal" },
      { name: "RESTful APIs", level: "Advanced", icon: "Network" },
      { name: "Database Design", level: "Intermediate", icon: "Database" },
      { name: "Authentication (JWT)", level: "Intermediate", icon: "Lock" },
      { name: "C++ Fundamentals", level: "Intermediate", icon: "Cpu" },
    ],
  },
  {
    category: "DevOps & Engineering Tools",
    icon: "Cpu",
    skills: [
      { name: "Git & GitHub", level: "Advanced", icon: "GitBranch" },
      { name: "Vite & Build Tools", level: "Advanced", icon: "Zap" },
      { name: "Postman & API QA", level: "Advanced", icon: "Network" },
      { name: "Vercel Deployment", level: "Expert", icon: "Globe" },
      { name: "Responsive Web QA", level: "Expert", icon: "Smartphone" },
    ],
  },
];

export const educationData: EducationEntry[] = [
  {
    id: "unpam",
    institution: "Universitas Pamulang (UNPAM)",
    degree: "Bachelor of Computer Science (S1)",
    major: "Informatics Engineering (Teknik Informatika)",
    period: "2023 - Present (Expected 2027)",
    location: "Tangerang Selatan, Banten",
    status: "Active Student",

    badge: "Higher Education",
  },
  {
    id: "smk",
    institution: "SMK Ki Hajar Dewantoro",
    degree: "Vocational High School Diploma",
    major: "Online Business and Marketing",
    period: "2017 - 2020",
    location: "Tangerang City, Banten",
    status: "Graduated",
    badge: "Vocational High School",
  },
  {
    id: "mts",
    institution: "MTS Al Mubarok",
    degree: "Junior High School",
    major: "General Academic Curriculum",
    period: "2014 - 2017",
    location: "Tangerang City, Banten",
    status: "Graduated",

    badge: "Junior High School",
  },
];

export const experienceData: ExperienceEntry[] = [
  {
    id: "exp-1",
    role: "Academic & Personal Projects",
    company: "University Coursework & Personal Projects",
    period: "2023 - Present",
    type: "Campus & Personal Projects",
    description:
      "Building web development projects through university coursework and personal initiatives. These projects provide practical experience in designing, developing, and improving web applications while continuing to learn.",
    achievements: [
      "Completed web development projects as part of university coursework.",
      "Created personal projects to practice and expand web development skills.",
      "Applied classroom learning to practical project work and iterated on the results.",
    ],
  },
  {
    id: "exp-2",
    role: "Barista & Operational Specialist",
    company: "F&B Industry",
    period: "2020 - 2022",
    type: "Full-Time (2 Years)",
    description:
      "Mastered precision brewing, artisanal latte art, and fast-paced operational workflows. Developed high attention to detail, strong discipline, and creative problem-solving skills that now empower my software engineering practice.",
    achievements: [
      "Engineered consistent product quality and crafted intricate aesthetic latte art.",
      "Managed peak operational hours while maintaining excellent customer satisfaction ratings.",
      "Cultivated disciplined workflow, precision, and resilience under pressure.",
    ],
  },
];

export const projectsData: PortfolioProject[] = [
  {
    id: "event-platform",
    title: "Event Management Platform",
    category: "fullstack",
    image: "images/login.svg",
    description:
      "A web application for event listings with separate admin and member areas, event management, member transactions, and payment status pages.",
    fallbackBg: "from-violet-200/70 to-sky-100",
    tags: ["Next.js", "TypeScript", "Express", "MongoDB", "JWT"],
    liveUrl: "https://front-end-acara-sable-phi.vercel.app",
    repositories: [
      {
        label: "Frontend",
        url: "https://github.com/Ahmadzaeladi/front-end-acara",
      },
      {
        label: "Backend API",
        url: "https://github.com/Ahmadzaeladi/beck-end-acara",
      },
    ],
  },
  {
    id: "finance-management",
    title: "Finance Management App",
    category: "fullstack",
    description:
      "A finance dashboard with balance, transaction, calendar, statistics, and profile views. Its API supports transactions, planned expenses, categories, and weekly and monthly reports.",
    fallbackBg: "from-emerald-200/70 to-teal-100",
    tags: ["Next.js", "Chart.js", "Express", "MySQL"],
    repositories: [
      {
        label: "Frontend",
        url: "https://github.com/Ahmadzaeladi/fe-kelola-keuangan",
      },
      {
        label: "Backend API",
        url: "https://github.com/Ahmadzaeladi/be-kelola-keuangan",
      },
    ],
  },
  {
    id: "pra-kerja-profile",
    title: "PT Pra Kerja Nusantara Company Profile",
    category: "web",
    description:
      "A company profile website for PT Pra Kerja Nusantara, presenting its outsourcing and staffing services.",
    fallbackBg: "from-sky-200/70 to-blue-100",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://profileprakerjanusantara.vercel.app",
    repositories: [
      {
        label: "Source Code",
        url: "https://github.com/Ahmadzaeladi/profileprakerjanusantara",
      },
    ],
  },
  {
    id: "pra-kerja-cms",
    title: "PT Pra Kerja Nusantara CMS Dashboard",
    category: "web",
    description:
      "A single-page CMS dashboard with views for an overview, hero content, team information, and visual archives.",
    fallbackBg: "from-indigo-200/70 to-violet-100",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://fe-cms-pkn.vercel.app",
    repositories: [
      {
        label: "Source Code",
        url: "https://github.com/Ahmadzaeladi/fe-cms-pkn",
      },
    ],
  },
  {
    id: "mts-an-nashr",
    title: "MTs An-Nashr School Website",
    category: "web",
    description:
      "A school profile website with sections for the school, programs, facilities, and testimonials.",
    fallbackBg: "from-amber-200/70 to-orange-100",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://mtsan-nasr.vercel.app",
    repositories: [
      {
        label: "Source Code",
        url: "https://github.com/Ahmadzaeladi/LP-MTS",
      },
    ],
  },
  {
    id: "kedai-coffee",
    title: "JCoffee Website",
    category: "web",
    description: "A coffee shop website with menu and product sections.",
    image: "images/cafe latte.jpg",
    fallbackBg: "from-stone-500/20 to-amber-700/20",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://kedaicoffee-six.vercel.app/",
    repositories: [
      {
        label: "Source Code",
        url: "https://github.com/Ahmadzaeladi/kedaicoffee",
      },
    ],
  },
  {
    id: "kedai-donat",
    title: "Dunkin' Indonesia Website",
    category: "web",
    description:
      "A Dunkin' Indonesia-themed website with menu navigation and donut and beverage sections.",
    image: "images/6dnt.webp",
    fallbackBg: "from-amber-400/20 to-orange-500/20",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://kedai-donat.vercel.app",
    repositories: [
      {
        label: "Source Code",
        url: "https://github.com/Ahmadzaeladi/KedaiDonat",
      },
    ],
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Timeline", href: "#timeline" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
