// data/projects.ts
export interface Project {
	id: string;
	title: string;
	description: string;
	tags: string[];
	link: string;
	github: string;
}

export const projects: Project[] = [
	{
		id: 'project-neural-v2',
		title: 'NEURAL_INTERFACE_V2',
		description:
			'A high-performance data visualization engine that maps real-time telemetry into a 3D interactive grid using WebGL and custom shaders.',
		tags: ['Three.js', 'GLSL', 'React'],
		github: 'https://github.com/yourusername/project-one',
		link: 'https://project-one-demo.com',
	},
	{
		id: 'project-dist-altius',
		title: 'DISTRIBUTED_CORE_ALTIUS',
		description:
			'A cloud-native microservices architecture designed for sub-50ms latency in global state synchronization across edge nodes.',
		tags: ['Golang', 'Docker', 'gRPC'],
		github: 'https://github.com/yourusername/project-two',
		link: 'https://project-two-demo.com',
	},
	{
		id: 'project-cryptic-os',
		title: 'CRYPTIC_DASHBOARD_OS',
		description:
			'An accessible, terminal-styled component library focused on low-bandwidth environments and high-density information display.',
		tags: ['TypeScript', 'Tailwind', 'Radix UI'],
		github: 'https://github.com/yourusername/project-three',
		link: 'https://project-three-demo.com',
	},
];
