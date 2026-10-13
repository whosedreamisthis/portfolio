// data/projects.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "prose-stack-id",
    title: "ProseStack", // Or simply 'Habit Tracker'
    description:
      "A writing workspace for novelists that keeps the manuscript, characters, places, plot lines and research in one place. It has a drag-and-drop outline, a rich-text scene editor with autosave, a free rule-based proofreader, book view and PDF export, and a one-click demo.",
    tags: [
      "Next.js 16",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Clerk",
      "Tiptap",
      "Tailwind CSS",
    ],

    github: "https://github.com/whosedreamisthis/prose-stack", // Replace with your actual repo
    link: "https://prose-stack.vercel.app", // Replace with your actual deployment
    image: "/prose-stack.jpg",
  },
  {
    id: "promptly-id",
    title: "Promptly", // Or simply 'Habit Tracker'
    description:
      "A full-stack AI chatbot built with Next.js, Clerk, Prisma and Gemini. It streams replies, saves chats into notebooks, and has a one-click demo mode and usage limits.",
    tags: [
      "Next.js 16",
      "Postgres",
      "Google Gemini AI",
      "Clerk",
      "Prisma",
      "TailwindCSS",
    ],
    github: "https://github.com/whosedreamisthis/promptly", // Replace with your actual repo
    link: "https://whosedreamisthis-promptly.vercel.app/", // Replace with your actual deployment
    image: "/promptly.jpg",
  },
  {
    id: "daily-digest-portal",
    title: "Daily Digest",
    description:
      "A high-performance news aggregator featuring dynamic category routing, localized search with history management, and native Web Share integration.",
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS", "Lucide Icons"],
    github: "https://github.com/whosedreamisthis/daily-digest",
    link: "https://whosedreamisthis-daily-digest.vercel.app",
    image: "/daily.png",
  },
];
