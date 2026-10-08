# 📐 Technical Portfolio | Dana Sharon

A engineering-themed developer portfolio built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**. It has an animated hero, a scrolling tech marquee, tilt-effect project cards, and a blueprint-style background that follows the system theme.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat-square&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript)

---

## 🚀 Overview

The site mimics a technical drafting board. SVG backgrounds switch between light (Vellum) and dark (Blueprint) modes without a hydration flash.

### Key Features

-   **Animated Hero:** Typewriter effect cycling through roles.
-   **Tech Marquee:** Continuously scrolling strip of the tech stack.
-   **Tilt Project Cards:** Interactive cards with a 3D tilt effect.
-   **Cursor Glow & Scroll Reveals:** Subtle pointer glow and reveal-on-scroll animations.
-   **Zero-Flash Dark Mode:** A blocking inline script in the layout applies the saved or system theme before first paint.
-   **Data-Driven Projects:** Projects are rendered from a single typed array.
-   **Responsive Layout:** Fluid across all viewport sizes.

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
│   ├── ProjectCard.tsx      # Tilt project card
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

Add an entry to the `projects` array in `data/projects.ts` and put its screenshot in `public/`. Use a unique string `id`:

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
