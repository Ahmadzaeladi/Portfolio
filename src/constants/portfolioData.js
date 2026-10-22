export const personalInfo = {
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

export const skillCategories = [
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

export const educationData = [
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

export const experienceData = [
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

export const projectsData = [
  {
    id: "proj-1",
    title: "Dunkin' Quick-Bite Restaurant Platform",
    category: "web",
    description:
      "A vibrant, responsive full-stack web platform designed for a fast-food brand. Features dynamic product catalogs, menu filtering for Donuts & Coffee, and an intuitive ordering user flow.",
    image: "images/6dnt.webp",
    fallbackBg: "from-amber-400/20 to-orange-500/20",
    tags: ["JavaScript", "HTML5", "CSS3", "Responsive UI", "Vercel"],
    liveUrl: "https://kedai-donat.vercel.app/",
    githubUrl: "https://github.com/Ahmadzaeladi/kedai-donat",
    featured: true,
    stats: "Live on Vercel",
  },
  {
    id: "proj-2",
    title: "Dunia Coffee Artisan E-Commerce Web App",
    category: "web",
    description:
      "A modern coffee storefront web app featuring artisanal brews, origin information, bean flavor profiles, cart interaction, and a sleek glassmorphic product showcase.",
    image: "images/cafe latte.jpg",
    fallbackBg: "from-stone-500/20 to-amber-700/20",
    tags: ["React", "Tailwind CSS", "UI/UX", "Vercel"],
    liveUrl: "https://kedaicoffee-six.vercel.app/",
    githubUrl: "https://github.com/Ahmadzaeladi/duniacoffee",
    featured: true,
    stats: "Live on Vercel",
  },
  {
    id: "proj-3",
    title: "Modern Glassmorphism Portfolio SPA",
    category: "web",
    description:
      "A state-of-the-art personal portfolio web application built with React, Tailwind CSS, and Framer Motion featuring soft pastel hues, glowing ambient blobs, and fluid scroll interactions.",
    image: "images/portfolio1.jpg",
    fallbackBg: "from-sky-400/20 to-blue-600/20",
    tags: ["React 18", "Tailwind CSS", "Framer Motion", "Vite", "SPA"],
    liveUrl: "#home",
    githubUrl: "https://github.com/Ahmadzaeladi/Portfolio",
    featured: true,
    stats: "Production Ready",
  },
  {
    id: "proj-4",
    title: "DevFlow: Full-Stack Developer Dashboard & Workspace",
    category: "backend",
    description:
      "A productivity web app for developers to organize code snippets, track daily coding goals, preview markdown documentation, and manage sprint development tasks.",
    image: "images/developer2.png",
    fallbackBg: "from-indigo-400/20 to-purple-600/20",
    tags: ["React", "Node.js", "Express", "Tailwind CSS", "REST API"],
    liveUrl: "https://github.com/Ahmadzaeladi",
    githubUrl: "https://github.com/Ahmadzaeladi",
    featured: false,
    stats: "Open Source",
  },
  {
    id: "proj-5",
    title: "Modern Glassmorphic React UI Design System",
    category: "ui",
    description:
      "A comprehensive reusable component library and UI kit featuring modern pastel glassmorphism styling, accessible keyboard navigation, and responsive typography tokens.",
    image: "images/foto.png",
    fallbackBg: "from-teal-400/20 to-sky-500/20",
    tags: ["React", "Figma", "Tailwind CSS", "Design Tokens"],
    liveUrl: "https://github.com/Ahmadzaeladi",
    githubUrl: "https://github.com/Ahmadzaeladi",
    featured: true,
    stats: "Component Kit",
  },
  {
    id: "proj-6",
    title: "Interactive Full-Stack Code Playground",
    category: "web",
    description:
      "An interactive web app demonstrating React hooks, Framer Motion spring physics, micro-interactions, and real-time state management with instant visual feedback.",
    image: "images/programmer.png",
    fallbackBg: "from-blue-400/20 to-indigo-500/20",
    tags: ["React", "Framer Motion", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://github.com/Ahmadzaeladi",
    githubUrl: "https://github.com/Ahmadzaeladi",
    featured: true,
    stats: "Interactive Demo",
  },
  {
    id: "proj-7",
    title: "TaskMaster: Full-Stack Agile Kanban System",
    category: "backend",
    description:
      "A responsive Kanban web application with drag-and-drop task management, priority tags, and clean glassmorphism UI for tracking software development workflows.",
    image: "images/foto3.png",
    fallbackBg: "from-purple-400/20 to-violet-500/20",
    tags: ["React", "Node.js", "Tailwind CSS", "State Management"],
    liveUrl: "https://github.com/Ahmadzaeladi",
    githubUrl: "https://github.com/Ahmadzaeladi",
    featured: false,
    stats: "Web App",
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Timeline", href: "#timeline" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
