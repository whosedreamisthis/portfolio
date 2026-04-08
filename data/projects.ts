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
		id: 'recipe-manager-id',
		title: 'Recipe Vault.SYS',
		description:
			'A high-performance, full-stack recipe management dashboard featuring real-time state synchronization, secure user authentication via Clerk, and a streamlined, multi-step creation flow powered by Next.js and Prisma.',
		tags: ['Next.js 15', 'Prisma', 'TanStack Query', 'Zustand'],
		github: 'https://github.com/whosedreamisthis/recipe-manager',
		link: 'https://whosedreamisthis-recipe-manager.vercel.app',
		image: '/recipes.png',
	},
	{
		id: 'daily-digest-portal',
		title: 'Daily Digest',
		description:
			'A high-performance news aggregator featuring dynamic category routing, localized search with history management, and native Web Share integration.',
		tags: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Lucide Icons'],
		github: 'https://github.com/whosedreamisthis/daily-digest',
		link: 'https://whosedreamisthis-daily-digest.vercel.app',
		image: '/daily.png',
	},
	{
		id: 'project-spark',
		title: 'Spark',
		image: '/spark.png',
		description:
			'A modern dating app concept designed to ignite meaningful human connection.',
		tags: [
			'Next.js',
			'TypeScript',
			'Tailwind CSS',
			'Prisma',
			'Lucide Icons',
			'Cloudinary',
			'Pusher',
		],
		github: 'https://github.com/whosedreamisthis/spark',
		link: 'https://whosedreamisthis-spark.vercel.app',
	},
	{
		id: 'pattern-lab-core',
		title: 'Pattern Lab',
		description:
			'A technical exploration of advanced React architecture. This laboratory showcases implementation of Compound Components, Higher-Order Components (HOC), and Render Props to build highly reusable, accessible, and scalable UI systems.',
		tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Design Patterns'],
		github: 'https://github.com/whosedreamisthis/design-patterns',
		link: 'https://whosedreamisthis.github.io/design-patterns/',
		image: '/patterns.png', // Ensure you add a screenshot to your public folder
	},
];
