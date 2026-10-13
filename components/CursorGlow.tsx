'use client';
import { useEffect, useState } from 'react';

// Scroll-progress bar.
export default function CursorGlow() {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const scroll = () => {
			const max =
				document.documentElement.scrollHeight - window.innerHeight;
			setProgress(max > 0 ? window.scrollY / max : 0);
		};
		window.addEventListener('scroll', scroll, { passive: true });
		return () => window.removeEventListener('scroll', scroll);
	}, []);

	return (
		<div
			className="pointer-events-none fixed left-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-blue-500 via-fuchsia-500 to-amber-400"
			style={{ width: '100%', transform: `scaleX(${progress})` }}
		/>
	);
}
