// components/ProjectCard.tsx
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
interface ProjectProps {
	title: string;
	description: string;
	tags: string[];
	link: string;
	github: string;
	image: string;
}

export function ProjectCard({
	title,
	description,
	tags,
	link,
	github,
	image,
}: ProjectProps) {
	return (
		<div className="bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl border-2 border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-all duration-600 ease-in-out m-6 shadow-lg overflow-hidden flex flex-col rounded-xl">
			{/* THE WRAPPER: 
         - No padding on this div ensures the image can touch the edges.
         - flex-col on mobile (Image top)
         - md:flex-row-reverse on desktop (Image right)
      */}
			<div className="flex flex-col md:flex-row-reverse items-stretch">
				{/* IMAGE SECTION - Zero margins, zero padding */}
				<div className="relative w-full md:w-1/3 shrink-0 aspect-[16/9] md:aspect-auto border-b md:border-b-0 md:border-l border-slate-200 dark:border-slate-800">
					<Image
						alt="project image"
						src={image}
						fill
						sizes="(max-width: 768px) 100vw, 33vw"
						className="object-cover hover:scale-105 transition-all duration-500"
						priority
					/>
				</div>

				{/* TEXT CONTENT SECTION */}
				<div className="flex-1 flex flex-col justify-between p-6">
					<div>
						<div className="flex justify-between items-start mb-4 gap-4">
							<h3 className="font-mono text-lg font-bold tracking-tighter uppercase leading-tight">
								{title}
							</h3>
							<span className="text-[10px] opacity-30 font-light font-mono shrink-0 mt-1">
								[REF_ID: {title.slice(0, 3).toUpperCase()}]
							</span>
						</div>

						<p className="text-sm text-slate-600 dark:text-slate-400 select-text mb-6">
							{description}
						</p>

						<div className="flex flex-col gap-2">
							<p className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
								Tech Stack:
							</p>
							<div className="flex flex-wrap gap-2">
								{tags.map((tag) => (
									<span
										key={tag}
										className="px-2 py-1 text-[10px] font-mono rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
									>
										{tag}
									</span>
								))}
							</div>
						</div>
					</div>

					{/* BUTTONS SECTION */}
					<div className="flex gap-3 pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/50 w-full">
						<Button
							variant="outline"
							size="sm"
							className="transition-all hover:-translate-y-1 flex-1 font-mono text-xs uppercase"
							asChild
						>
							<a
								href={github}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Github className="mr-2 h-3 w-3" /> Source
							</a>
						</Button>
						<Button
							size="sm"
							className="transition-all hover:-translate-y-1 flex-1 font-mono text-xs uppercase bg-primary hover:bg-primary/90"
							asChild
						>
							<a
								href={
									link.startsWith('http')
										? link
										: `https://${link}`
								}
								target="_blank"
								rel="noopener noreferrer"
							>
								<ExternalLink className="mr-2 h-3 w-3" /> Live
							</a>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
