# 📐 Technical Portfolio | Dana Sharon

A high-performance, engineering-themed portfolio built with **Next.js 15**, **Tailwind CSS v4**, and **Framer Motion**. Featuring a custom "Blueprint" background system that reacts to system themes.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat-square&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript)

---

## 🚀 Overview

This portfolio is designed to mimic a technical drafting board. It utilizes SVG-based architectural backgrounds that transition seamlessly between light (Vellum) and dark (Blueprint) modes without hydration flashes.

### Key Features

-   **Zero-Flash Dark Mode:** Custom blocking script implementation for instant theme synchronization.
-   **Glassmorphism UI:** Backdrop-blurred cards to maintain background visibility.
-   **Dynamic Projects:** A central data-driven grid system for showcasing technical modules.
-   **Responsive Engineering:** Fully fluid layout optimized for all viewport dimensions.

---

## 🛠️ Tech Stack

-   **Framework:** [Next.js](https://nextjs.org/) (App Router)
-   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
-   **Components:** [Shadcn UI](https://ui.shadcn.com/) & [Lucide Icons](https://lucide.dev/)
-   **State Management:** React Context API (Theme Management)
-   **Deployment:** [Vercel](https://vercel.com/)

---

## 📁 Project Structure

```text
├── components/          # UI Components (ProjectCard, ThemeButton)
│   ├── ui/              # Shadcn primitive components
│   ├── Background.tsx   # Blueprint background logic
│   └── TopNav.tsx       # Navigation & Resume download
├── data/                # Project metadata and static strings
├── public/              # Static assets (Resume PDF, Favicons)
├── app/                 # Next.js App Router (Pages & Layout)
└── globals.css          # Tailwind v4 configuration & base styles
```

---

## 🏗️ Getting Started

1. **Clone the repository:**

    ```bash
    git clone [https://github.com/yourusername/portfolio-v3.git](https://github.com/yourusername/portfolio-v3.git)
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the development server:**

    ```bash
    npm run dev
    ```

4. **Build for production:**
    ```bash
    npm run build
    ```

---

## 📝 Customization

### Adding Projects

The project grid is data-driven. To add your own modules, modify the `data/projects.ts` file. Using unique string IDs ensures stable React reconciliation and better performance:

```typescript
{
  id: "project-unique-id",
  title: "PROJECT_NAME",
  description: "Brief technical documentation of the build...",
  tags: ["Next.js", "TypeScript", "Tailwind"],
  github: "[https://github.com/yourusername/repo](https://github.com/yourusername/repo)",
  link: "[https://live-site.com](https://live-site.com)"
}
```
