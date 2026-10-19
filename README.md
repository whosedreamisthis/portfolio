# 📐 Technical Portfolio | Dana Sharon

A engineering-themed developer portfolio built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**. It has an animated hero, a scrolling tech marquee, side-by-side project showcases, and a blueprint-style background that follows the system theme.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat-square&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript)

---

## 🚀 Overview

The site mimics a technical drafting board. SVG backgrounds switch between light (Vellum) and dark (Blueprint) modes without a hydration flash.

### Key Features

-   **Animated Hero:** Typewriter effect cycling through roles.
-   **Tech Marquee:** Continuously scrolling strip of the tech stack.
-   **Project Showcases:** Image on the left with a glowing hover lift, description, live and source links, and colored tech pills on the right. Stacks on mobile.
-   **Cursor Glow & Scroll Reveals:** Subtle pointer glow and reveal-on-scroll animations.
-   **Zero-Flash Dark Mode:** A blocking inline script in the layout applies the saved or system theme before first paint.
-   **Data-Driven Projects:** Projects are rendered from a single typed array.
-   **Responsive Layout:** Fluid across all viewport sizes.

---

## 🗂️ Featured Projects

| Project                                                    | What it is                                                        | Stack                                              |
| ---------------------------------------------------------- | ----------------------------------------------------------------- | -------------------------------------------------- |
| [ProseStack](https://prose-stack.vercel.app)               | Writing workspace for novelists with a Tiptap editor, drag-and-drop outline and PDF export | Next.js 16, TypeScript, Tiptap, Prisma, Postgres   |
| [SweaterWeather](https://whosedreamisthis.github.io/sweater-weather/) | Weather app that suggests what to wear, with live Open-Meteo data | React, TypeScript, Vite, TanStack Query, Zustand, Vitest |
| [Nudge](https://whosedreamisthis-nudge.vercel.app/)        | Habit tracker with Gemini-powered reports and per-feature privacy | Next.js 16, TypeScript, Gemini API, Postgres, Clerk |

Project data lives in `data/projects.ts`.

---

## 🛠️ Tech Stack

-   **Framework:** [Next.js](https://nextjs.org/) 16 (App Router) with React 19
-   **Language:** TypeScript
-   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
-   **Components:** [Shadcn UI](https://ui.shadcn.com/) (Radix) & [Lucide Icons](https://lucide.dev/)
-   **State Management:** React Context API (theme)
-   **Deployment:** [Vercel](https://vercel.com/)

---

## 📁 Project Structure

```text
├── app/                     # Next.js App Router
│   ├── layout.tsx           # Root layout, theme script, providers
│   ├── page.tsx             # Home page
│   ├── globals.css          # Tailwind v4 config & base styles
│   └── icon.tsx / icon.svg  # Favicons
├── components/
│   ├── ui/                  # Shadcn primitives (button, card)
│   ├── Background.tsx       # Theme-aware background switcher
│   ├── TechnicalBackground.tsx / TechLightBackground.tsx
│   ├── Hero.tsx             # Typewriter hero
│   ├── Marquee.tsx          # Scrolling tech strip
│   ├── ProjectCard.tsx      # Project showcase row
│   ├── Reveal.tsx           # Scroll-reveal wrapper
│   ├── CursorGlow.tsx       # Pointer glow effect
│   ├── ContactButton.tsx
│   ├── TopNav.tsx           # Navigation & resume download
│   ├── ThemeButton.tsx / ThemeContext.tsx / Providers.tsx
├── data/projects.ts         # Project metadata
├── lib/utils.ts             # Helpers (cn)
└── public/                  # Project images, resume PDF
```

---

## 🏗️ Getting Started

1. **Clone the repository:**

    ```bash
    git clone https://github.com/whosedreamisthis/portfolio.git
    cd portfolio
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the development server:**

    ```bash
    npm run dev
    ```

4. **Build and run for production:**

    ```bash
    npm run build
    npm start
    ```

5. **Lint:**
    ```bash
    npm run lint
    ```

---

## 📝 Customization

### Adding Projects

Add an entry to the `projects` array in `data/projects.ts` and put its screenshot in `public/`. Use a unique string `id`. The image is shown as a square, so use a roughly square screenshot. The first five or so `tags` look best, and they cycle through the pill colors. Also add the project to the Featured Projects table above:

```typescript
{
  id: "project-unique-id",
  title: "Project Name",
  description: "Brief description of the build...",
  tags: ["Next.js", "TypeScript", "Tailwind"],
  github: "https://github.com/yourusername/repo",
  link: "https://live-site.com",
  image: "/project-screenshot.png",
}
```

### Tech Marquee

Edit the `items` array in `components/Marquee.tsx`.

### Hero Roles

Edit the `roles` array in `components/Hero.tsx`.
