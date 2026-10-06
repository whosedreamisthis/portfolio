'use client';
import { useEffect, useState } from 'react';

// Spotlight that follows the cursor, plus a scroll-progress bar.
export default function CursorGlow() {
	const [pos, setPos] = useState({ x: -500, y: -500 });
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
		const scroll = () => {
			const max =
				document.documentElement.scrollHeight - window.innerHeight;
			setProgress(max > 0 ? window.scrollY / max : 0);
		};
		window.addEventListener('mousemove', move);
		window.addEventListener('scroll', scroll, { passive: true });
		return () => {
			window.removeEventListener('mousemove', move);
			window.removeEventListener('scroll', scroll);
		};
	}, []);

	return (
		<>
			<div
				className="pointer-events-none fixed left-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-blue-500 via-fuchsia-500 to-amber-400"
				style={{ width: '100%', transform: `scaleX(${progress})` }}
			/>
			<div
				className="pointer-events-none fixed inset-0 z-[55] hidden md:block"
				style={{
					background: `radial-gradient(500px circle at ${pos.x}px ${pos.y}px, rgba(99,102,241,0.14), transparent 60%)`,
				}}
			/>
		</>
	);
}
