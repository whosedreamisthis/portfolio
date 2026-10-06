import { ContactButton } from '@/components/ContactButton';
import { ProjectCard } from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';
import { Linkedin } from 'lucide-react';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Reveal from '@/components/Reveal';
import CursorGlow from '@/components/CursorGlow';

export default function Home() {
	return (
		<div>
			<CursorGlow />
			<Hero />
			<Marquee />
			<h2
				id="work"
				className="scroll-mt-8 px-6 text-center font-mono text-3xl font-black uppercase tracking-tighter md:text-5xl"
			>
				Selected <span className="text-blue-500">Work</span>
			</h2>
			<div className="mx-auto mt-16 flex max-w-5xl flex-col gap-24 px-5 pt-6">
				{projects.map((project, index) => (
					<Reveal key={project.id}>
						<ProjectCard
							index={index}
							title={project.title}
							description={project.description}
							tags={project.tags}
							github={project.github}
							link={project.link}
							image={project.image}
						/>
					</Reveal>
				))}
			</div>
			<footer className="w-full py-10 border-t border-slate-200 dark:border-slate-800 mt-10">
				<div className="max-w-4xl mx-auto text-center px-4">
					{/* <h2 className="font-mono text-3xl font-bold tracking-tighter uppercase mb-4">
						Terminal <span className="text-primary">_</span>{' '}
						Connection
					</h2> */}
					<p className="text-slate-500 dark:text-slate-400 mb-8 font-mono text-sm">
						AVAILABLE FOR TECHNICAL COLLABORATION // 2026
					</p>

					<div className="flex flex-row justify-center gap-4">
						<Button
							variant="outline"
							className="border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500"
							asChild
						>
							<Link
								href="https://linkedin.com/in/danash"
								target="_blank"
							>
								<Linkedin className="mr-2 h-4 w-4 text-blue-500" />
								LinkedIn Profile
							</Link>
						</Button>

						{/* Email button for convenience since select-none is active */}
						<ContactButton />
					</div>
				</div>
			</footer>
		</div>
	);
}
