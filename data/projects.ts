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
    title: "ProseStack",
    description:
      "A writing workspace for novelists that keeps the manuscript, characters, places, plot lines and research in one place. The front end is the interesting part: a drag-and-drop outline, a rich-text scene editor built on Tiptap with autosave, a rule-based proofreader that runs in the editor, and a book view with PDF export. Try the one-click demo.",
    tags: ["Next.js 16", "TypeScript", "Tiptap", "Prisma", "Postgres"],

    github: "https://github.com/whosedreamisthis/prose-stack",
    link: "https://prose-stack.vercel.app",
    image: "/prose-stack-2.png",
  },
  {
    id: "sweater-weather-id",
    title: "SweaterWeather",
    description:
      'A fast weather app that answers "what should I wear?" Search any city for current conditions, hourly and 7-day forecasts, air quality and a rule-based outfit suggestion. Save favorite locations, switch units, or use your own location, with live data from Open-Meteo.',
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "TanStack Query",
      "Zustand",
      "Vitest",
    ],
    github: "https://github.com/whosedreamisthis/sweater-weather",
    link: "https://whosedreamisthis.github.io/sweater-weather/",
    image: "/sweater-weather.png",
  },
  {
    id: "nudge",
    title: "Nudge",
    description:
      "A habit tracker with streak tracking, a journal and a focus timer. Gemini generates weekly reports, morning motivation and personalised habit suggestions, and every AI feature has its own privacy control so users decide what is shared.",
    tags: ["Next.js 16", "TypeScript", "Gemini API", "Postgres", "Clerk"],
    github: "https://github.com/whosedreamisthis/nudge",
    link: "https://whosedreamisthis-nudge.vercel.app/",
    image: "/nudge.png",
  },
];
