import React from 'react';
import ThemeButton from './ThemeButton';
import { Button } from './ui/button';
import { Download } from 'lucide-react';

export default function TopNav() {
	return (
		<nav className="flex w-full items-center p-4 justify-between">
			<h1 className="text-2xl md:text-5xl">DANA SHARON </h1>
			<div className="ml-auto flex gap-4">
				<Button asChild>
					<a
						href="/resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Download />
						Resume
					</a>
				</Button>
				<ThemeButton />
			</div>
		</nav>
	);
}
