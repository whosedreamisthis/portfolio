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
		link: 'https://recipe-manager-neon-one.vercel.app',
		image: '/recipeManager.jpg',
	},
	{
		id: 'daily-digest-portal',
		title: 'Daily Digest',
		description:
			'A high-performance news aggregator featuring dynamic category routing, localized search with history management, and native Web Share integration.',
		tags: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Lucide Icons'],
		github: 'https://github.com/whosedreamisthis/daily-digest',
		link: 'daily-digest-puce.vercel.app',
		image: '/dailyDigest.jpg',
	},
	{
		id: 'project-cryptic-os',
		title: 'CRYPTIC_DASHBOARD_OS',
		image: '/recipeManager.jpg',
		description:
			'An accessible, terminal-styled component library focused on low-bandwidth environments and high-density information display.',
		tags: ['TypeScript', 'Tailwind', 'Radix UI'],
		github: 'https://github.com/yourusername/project-three',
		link: 'https://project-three-demo.com',
	},
];
