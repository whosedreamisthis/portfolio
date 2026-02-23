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
		image: '/recipeManager.png',
	},
	{
		id: 'project-dist-altius',
		title: 'DISTRIBUTED_CORE_ALTIUS',
		description:
			'A cloud-native microservices architecture designed for sub-50ms latency in global state synchronization across edge nodes.',
		tags: ['Golang', 'Docker', 'gRPC'],
		github: 'https://github.com/yourusername/project-two',
		link: 'https://project-two-demo.com',
		image: '/recipeManager.png',
	},
	{
		id: 'project-cryptic-os',
		title: 'CRYPTIC_DASHBOARD_OS',
		image: '/recipeManager.png',
		description:
			'An accessible, terminal-styled component library focused on low-bandwidth environments and high-density information display.',
		tags: ['TypeScript', 'Tailwind', 'Radix UI'],
		github: 'https://github.com/yourusername/project-three',
		link: 'https://project-three-demo.com',
	},
];
