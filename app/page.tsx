import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';

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
		</div>
	);
}
