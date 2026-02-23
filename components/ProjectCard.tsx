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
		<Card className="bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl border-2 border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-all duration-600 ease-in-out hover:scale-[1.01] active:scale-[0.99] m-6 shadow-lg overflow-hidden flex flex-col">
			<div className="flex flex-col md:flex-row items-stretch h-full gap-3">
				{/* IMAGE SECTION */}
				<div
					className="
          relative 
          w-full md:w-48 shrink-0 
          aspect-[16/9] md:aspect-auto 
          /* Top corners rounded on mobile, Right corners rounded on desktop */
          rounded-t-xl md:rounded-t-none md:rounded-r-xl 
          overflow-hidden
          border-b md:border-b-0 md:border-l border-slate-200 dark:border-slate-800 
          order-first md:order-last
        "
				>
					<Image
						alt="project image"
						src={image}
						fill
						sizes="(max-width: 768px) 100vw, 192px"
						className="object-cover hover:scale-103 transition-all duration-300"
					/>
				</div>

				{/* CONTENT SECTION */}
				<div className="flex-1 flex flex-col justify-between">
					<div>
						<CardHeader>
							<CardTitle className="font-mono tracking-tighter uppercase flex justify-between items-center">
								{title}
								<span className="text-[10px] opacity-30 font-light">
									[REF_ID: {title.slice(0, 3).toUpperCase()}]
								</span>
							</CardTitle>
						</CardHeader>

						<CardContent>
							<CardDescription className="text-slate-600 dark:text-slate-400 select-text mb-6">
								{description}
							</CardDescription>

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
						</CardContent>
					</div>

					<CardFooter className="flex gap-3 pt-4 border-t border-slate-100 dark:border-slate-800/50 w-full mt-auto">
						<Button
							variant="outline"
							size="sm"
							className="flex-1 font-mono text-xs uppercase"
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
							className="flex-1 font-mono text-xs uppercase bg-primary hover:bg-primary/90"
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
					</CardFooter>
				</div>
			</div>
		</Card>
	);
}
