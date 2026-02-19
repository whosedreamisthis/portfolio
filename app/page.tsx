import { ContactButton } from '@/components/ContactButton';
import { ProjectCard } from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';
import { Linkedin } from 'lucide-react';

export default function Home() {
	return (
		<div>
			{projects.map((project) => {
				return (
					<div key={project.id} className="m-5">
						<ProjectCard
							title={project.title}
							description={project.description}
							tags={project.tags}
							github={project.github}
							link={project.link}
						/>
					</div>
				);
			})}
			<footer className="w-full py-20 border-t border-slate-200 dark:border-slate-800 mt-20">
				<div className="max-w-4xl mx-auto text-center px-4">
					{/* <h2 className="font-mono text-3xl font-bold tracking-tighter uppercase mb-4">
						Terminal <span className="text-primary">_</span>{' '}
						Connection
					</h2> */}
					<p className="text-slate-500 dark:text-slate-400 mb-8 font-mono text-sm">
						AVAILABLE FOR TECHNICAL COLLABORATION // 2026
					</p>

					<div className="flex flex-wrap justify-center gap-4">
						<Button
							variant="outline"
							className="border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500"
							asChild
						>
							<a
								href="https://linkedin.com/in/danash"
								target="_blank"
							>
								<Linkedin className="mr-2 h-4 w-4 text-blue-500" />
								LinkedIn Profile
							</a>
						</Button>

						{/* Email button for convenience since select-none is active */}
						<ContactButton />
					</div>
				</div>
			</footer>
		</div>
	);
}
