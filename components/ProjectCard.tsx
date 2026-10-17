// components/ProjectCard.tsx
"use client";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
const pillColors = [
  "bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-300",
  "bg-purple-100 text-purple-800 dark:bg-purple-500/20 dark:text-purple-300",
  "bg-pink-100 text-pink-800 dark:bg-pink-500/20 dark:text-pink-300",
  "bg-indigo-100 text-indigo-800 dark:bg-indigo-500/20 dark:text-indigo-300",
  "bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-300",
];

interface ProjectProps {
  index: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
  image: string;
}

export function ProjectCard({
  index,
  title,
  description,
  tags,
  link,
  github,
  image,
}: ProjectProps) {
  return (
    <div className="grid items-center gap-10 md:grid-cols-[15rem_minmax(0,1fr)] md:gap-14">
      {/* IMAGE: rounded square with a soft glow */}
      <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-2xl shadow-[0_20px_60px_-10px_rgba(139,92,246,0.35)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_30px_80px_-5px_rgba(139,92,246,0.7)] md:max-w-60">
        <Image
          alt={`${title} screenshot`}
          src={image}
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover"
          priority={index === 0}
        />
      </div>

      {/* TEXT */}
      <div>
        <h3 className="mb-4 text-2xl font-semibold tracking-tight">{title}</h3>
        <p className="mb-6 select-text leading-relaxed text-slate-600 dark:text-slate-400">
          {description}
        </p>

        <div className="mb-6 grid grid-cols-2 gap-6">
          <div>
            <p className="mb-1 text-sm font-semibold">Live Demo:</p>
            <a
              href={link.startsWith("http") ? link : `https://${link}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-blue-500 dark:text-slate-400"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Visit site
            </a>
          </div>
          <div>
            <p className="mb-1 text-sm font-semibold">Source:</p>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-blue-500 dark:text-slate-400"
            >
              <Github className="h-3.5 w-3.5" /> GitHub
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {tags.map((tag, i) => (
            <span
              key={tag}
              className={`rounded-full px-4 py-2 text-sm font-medium ${pillColors[i % pillColors.length]}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
