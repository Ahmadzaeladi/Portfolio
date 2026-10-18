# Project Documentation & Architecture Guide (`project.md`)

> **Note for AI Assistants**: This document provides the complete architectural pattern, conventions, and component registry for this project. Read this file first to avoid exploratory directory scanning and conserve context tokens.

---

## 1. Project Overview & Tech Stack

- **Project Name**: Ahmad Zaeladi — Modern Full-Stack Developer Portfolio
- **Type**: Single Page Application (SPA)
- **Author**: Ahmad Zaeladi (Informatics Engineering @ Universitas Pamulang)
- **Framework & Build Tool**: React 18, Vite 5 (ES Modules)
- **Design System & Styling**:
  - Tailwind CSS 3.4
  - HeroUI (`@heroui/react` v2.8)
  - Framer Motion 11
  - Lucide React (Icons)
  - Custom Glassmorphism System (`.glass`, `.glass-strong`, `.glass-pill`, `.bg-grid`, `.gradient-text`)
- **Path Alias**:
  - `@/*` points directly to `./src/*` (configured in `vite.config.js` and `jsconfig.json`).
  - Always use `@/...` for internal imports rather than deep relative paths (`../../..`).

---

## 2. Architecture & File Structure Conventions

This codebase strictly follows the **Modular Layered Architecture Pattern** adapted from `front-end-acara`:

```
c:\Portfolio\Portfolio
├── index.html                   # HTML entry point (Plus Jakarta Sans & Inter fonts)
├── jsconfig.json                # Path mapping configuration (@/* -> src/*)
├── package.json                 # Project dependencies & scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Tailwind theme & HeroUI plugin config
├── vite.config.js               # Vite bundler configuration & @ alias
├── project.md                   # AI token-efficiency & developer guide (this file)
└── src/
    ├── main.jsx                 # App entry point (mounts HeroUIProvider & globals.css)
    ├── App.jsx                  # Root container (AppShell -> LandingPageLayout -> Home view)
    ├── components/
    │   ├── commons/             # App-level shared wrappers & infrastructure components
    │   │   ├── AppShell/        # App background canvas, ambient lighting & root wrapper
    │   │   └── PageHead/        # Document title & head metadata manager
    │   ├── layouts/             # Page shell layout wrappers
    │   │   └── LandingPageLayout/
    │   │       ├── LandingPageLayout.jsx
    │   │       ├── LandingPageLayout.constants.js
    │   │       ├── index.js
    │   │       ├── LandingPageLayoutNavbar/   # Responsive navbar with glassmorphic blur
    │   │       └── LandingPageLayoutFooter/   # Footer with brand & copyright links
    │   ├── ui/                  # Reusable, atomic UI components (agnostic to business view)
    │   │   └── SectionHeader/   # Reusable section title, eyebrow chip & description
    │   └── views/               # Page-specific views and their dedicated subcomponents
    │       └── Home/            # Main portfolio landing page
    │           ├── Home.jsx                    # View orchestrator (assembles all sections)
    │           ├── Home.constants.js           # Home-level statistics and profile tech stack
    │           ├── useHome.js                  # View custom hook
    │           ├── index.js                    # View entry export
    │           ├── HomeHero/                   # Intro banner, headline, CTA buttons, glass profile card
    │           ├── HomeAbout/                  # Bio card, milestones, categorized skills with tabs
    │           ├── HomeTimeline/               # Education & experience timeline switcher
    │           ├── HomeProjects/               # Filterable projects (spotlight + responsive grid)
    │           ├── HomeContact/                # Contact details, socials, interactive message form
    │           └── HomeTechMarquee/            # Infinite looping technology strip
    ├── constants/
    │   └── portfolioData.js     # Single source of truth for portfolio profile, skills, timeline, projects
    ├── styles/
    │   └── globals.css          # Tailwind base, utilities, glass classes, custom scrollbars
    └── utils/
        ├── cn.js                # ClassNames merge utility (clsx + tailwind-merge)
        └── scrollToSection.js   # Smooth scrolling helper
```

---

## 3. Directory Breakdown & Rules

### A. `src/components/commons/`
Used for global wrappers and shared infrastructure components:
- **`AppShell`**: Wraps the whole UI with fixed ambient background gradients, blueprint grid, and pastel glow blobs.
- **`PageHead`**: Dynamically updates `document.title` and meta information per page/view.

### B. `src/components/layouts/`
Provides page-level layout wrappers:
- **`LandingPageLayout`**: Combines `PageHead`, `LandingPageLayoutNavbar`, main body container, and `LandingPageLayoutFooter`.
- Each sub-layout component (e.g. `LandingPageLayoutNavbar`) contains its own folder, component, hook (`useLandingPageLayoutNavbar.js`), and `index.js`.

### C. `src/components/ui/`
Generic, reusable UI components that can be used across any view or section:
- **`SectionHeader`**: Reusable component providing the pill eyebrow chip, gradient title, optional description, and action buttons.
- Follows the single-folder pattern:
  ```
  ui/
  └── ComponentName/
      ├── ComponentName.jsx
      └── index.js
  ```

### D. `src/components/views/`
Page/Screen presentation layers. Each page in the application has a corresponding view folder:
- **`views/Home/`**: The entire homepage view.
  - `Home.jsx` is the **Orchestrator Component**: It imports and renders section components in sequential order (`HomeHero`, `HomeAbout`, `HomeTimeline`, `HomeProjects`, `HomeContact`).
  - Section components are encapsulated in dedicated subfolders:
    - `HomeHero/`: Headline, status chip, CTA action buttons, floating cards, terminal badge.
    - `HomeAbout/`: Personal bio, milestone cards, categorized skills tabs (`useHomeAbout.js` & `HomeAbout.constants.js`).
    - `HomeTimeline/`: Interactive education and professional experience cards (`useHomeTimeline.js`).
    - `HomeProjects/`: Category filtering tabs, spotlight card, project grid (`useHomeProjects.js` & `HomeProjects.constants.js`).
    - `HomeContact/`: Contact methods, social links, validated message form (`useHomeContact.js` & `HomeContact.constants.js`).
    - `HomeTechMarquee/`: Infinite looping skill badge marquee.

---

## 4. Component File Conventions (The Standard Pattern)

Whenever creating or modifying a component, follow this exact structure:

```
[ComponentName]/
├── [ComponentName].jsx          # Pure JSX render & presentation
├── [ComponentName].constants.js  # Static arrays, filter definitions, regex, icon maps
├── use[ComponentName].js        # Custom hook holding state, handlers, and side effects
└── index.js                     # Re-export default
```

### Standard `index.js` Template:
```javascript
import ComponentName from './ComponentName';

export default ComponentName;
```

---

## 5. Coding & Styling Guidelines

1. **No Loose Components**: Never place components directly under `src/components/`. Always place them in `commons/`, `layouts/`, `ui/`, or `views/[ViewName]/[SubComponent]`.
2. **Separation of Concerns**: Keep business logic, form validation, and complex state in `use[ComponentName].js`. Keep static options, icon mappings, and lists in `[ComponentName].constants.js`.
3. **Data Source of Truth**: Profile info, milestones, education, experience, and project entries must be read from `@/constants/portfolioData`.
4. **HeroUI Primitives**: Use HeroUI components (`Button`, `Card`, `CardBody`, `Chip`, `Input`, `Textarea`, `Tabs`, `Tab`, `Avatar`, `Link as HeroLink`) styled with Tailwind classes.
5. **Class Merging**: Always use `cn(...)` from `@/utils/cn` when dynamically merging class names.
6. **Icons**: Use `lucide-react` icons.

---

## 6. Common Scripts

- `npm run dev`: Starts Vite local development server on `http://localhost:3000`.
- `npm run build`: Generates production bundle in `./dist` using Rollup/Vite.
- `npm run preview`: Previews the production build locally.
