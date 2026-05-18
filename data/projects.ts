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
		id: 'habit-tracker-id',
		title: 'Habit Tracker', // Or simply 'Habit Tracker'
		description:
			'A modern, AI-powered habit tracking dashboard featuring personalized streak calculations, Google Gemini-driven motivational insights, secure Clerk authentication, and a responsive layout built with Next.js and MongoDB.',
		tags: ['Next.js 16', 'MongoDB', 'Google Gemini AI', 'Clerk'],
		github: 'https://github.com/whosedreamisthis/habit-tracker', // Replace with your actual repo
		link: 'https://whosedreamisthis-habit-tracker.vercel.app', // Replace with your actual deployment
		image: '/HabitTracker.png',
	},
	{
		id: 'daily-digest-portal',
		title: 'Daily Digest',
		description:
			'A high-performance news aggregator featuring dynamic category routing, localized search with history management, and native Web Share integration.',
		tags: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Lucide Icons'],
		github: 'https://github.com/whosedreamisthis/daily-digest',
		link: 'https://whosedreamisthis-daily-digest.vercel.app',
		image: '/daily.png',
	},

	{
		id: 'ai-assistant',
		title: 'AI Coding Assistant',
		description:
			'An AI coding asssitant that explains, generates and debugs code.',
		tags: ['React 19', 'TypeScript', 'NextJS 16', "Gemini API"],
		github: 'https://github.com/whosedreamisthis/ai-coding-assistant',
		link: 'https://ai-coding-assistant-six.vercel.app',
		image: '/ai-assistant.png',
	},
];
