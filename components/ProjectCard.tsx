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
import { ExternalLink, Github } from 'lucide-react'; // Using standard import, verify lucide-react version

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
		<Card className="bg-white/30 dark:bg-slate-900/30 backdrop-blur-xl border-border hover:border-primary/50 transition-all duration-300">
			<CardHeader>
				<CardTitle className="font-mono uppercase tracking-tighter">
					{title}
				</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex flex-wrap gap-2">
					{tags.map((tag) => (
						<span
							key={tag}
							className="px-2 py-1 text-[10px] font-mono rounded-md bg-secondary/50 text-secondary-foreground border border-border"
						>
							{tag}
						</span>
					))}
				</div>
			</CardContent>
			<CardFooter className="flex gap-4">
				<Button variant="outline" size="sm" asChild className="flex-1">
					<a href={github} target="_blank" rel="noopener noreferrer">
						<Github className="mr-2 h-4 w-4" /> CODE
					</a>
				</Button>
				<Button size="sm" asChild className="flex-1">
					<a href={link} target="_blank" rel="noopener noreferrer">
						<ExternalLink className="mr-2 h-4 w-4" /> LIVE
					</a>
				</Button>
			</CardFooter>
		</Card>
	);
}
