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
    id: "habit-tracker-id",
    title: "Habit Tracker", // Or simply 'Habit Tracker'
    description:
      "A modern, AI-powered habit tracking dashboard featuring personalized streak calculations, Google Gemini-driven motivational insights, secure Clerk authentication, and a responsive layout built with Next.js and MongoDB.",
    tags: ["Next.js 16", "MongoDB", "Google Gemini AI", "Clerk"],
    github: "https://github.com/whosedreamisthis/habit-tracker", // Replace with your actual repo
    link: "https://whosedreamisthis-habit-tracker.vercel.app", // Replace with your actual deployment
    image: "/HabitTracker.png",
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
