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

interface ProjectProps {
	title: string;
	description: string;
	tags: string[];
	link: string;
	github: string;
}

export function ProjectCard({
	title,
	description,
	tags,
	link,
	github,
}: ProjectProps) {
	return (
		<Card
			className="
      /* Background and Blur */
      bg-white/70 dark:bg-slate-900/80 
      backdrop-blur-xl 

      /* Visible border: Light mode (slate-200) | Dark mode (slate-700) */
      border-2 border-slate-200 dark:border-slate-700 
      hover:border-primary/50 transition-all duration-600 ease-in-out
      
      /* Scale animation */
      hover:scale-[1.01] active:scale-[0.99]
      
      m-6 shadow-lg flex flex-col justify-between
    "
		>
			<div>
				<CardHeader>
					<CardTitle className="font-mono tracking-tighter uppercase flex justify-between items-center">
						{title}
						<span className="text-[10px] opacity-30 font-light">
							[REF_ID: {title.slice(0, 3).toUpperCase()}]
						</span>
					</CardTitle>
					<CardDescription className="text-slate-600 dark:text-slate-400 select-text">
						{description}
					</CardDescription>
				</CardHeader>

				<CardContent>
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
				</CardContent>
			</div>

			{/* RESTORED BUTTONS SECTION */}
			<CardFooter className="flex gap-3 pt-4 border-t border-slate-100 dark:border-slate-800/50">
				<Button
					variant="outline"
					size="sm"
					className="flex-1 font-mono text-xs uppercase border-slate-200 dark:border-slate-700 hover:bg-primary/10"
					asChild
				>
					<a href={github} target="_blank" rel="noopener noreferrer">
						<Github className="mr-2 h-3 w-3" />
						Source
					</a>
				</Button>
				<Button
					size="sm"
					className="flex-1 font-mono text-xs uppercase bg-primary hover:bg-primary/90"
					asChild
				>
					<a href={link} target="_blank" rel="noopener noreferrer">
						<ExternalLink className="mr-2 h-3 w-3" />
						Live Demo
					</a>
				</Button>
			</CardFooter>
		</Card>
	);
}
