const items = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Postgres",
  "Gemini AI",
  "Clerk",
  "Vercel",
  "Prisma",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative my-16 overflow-hidden border-y border-slate-300 bg-white/50 py-5 backdrop-blur dark:border-slate-700 dark:bg-slate-900/50">
      <div className="marquee flex w-max gap-12 font-mono text-2xl font-bold uppercase tracking-tight md:text-4xl">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-12 text-slate-400 transition-colors hover:text-blue-500"
          >
            {item}
            <span className="text-fuchsia-500">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
