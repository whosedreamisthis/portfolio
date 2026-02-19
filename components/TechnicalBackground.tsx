import React from 'react';

interface Props {
	className?: string;
}

const TechnicalBackground = ({ className }: Props) => {
	return (
		<div
			style={{
				position: 'fixed',
				inset: 0,
				zIndex: -1,
				backgroundColor: '#020617', // Deeper navy for better contrast
				overflow: 'hidden',
			}}
			className={`${className}`}
		>
			<style>
				{`
          @keyframes grid-move {
            0% { transform: translateY(0); }
            100% { transform: translateY(40px); }
          }
          @keyframes line-draw {
            0% { stroke-dashoffset: 1000; opacity: 0.1; }
            50% { opacity: 0.4; stroke-width: 2px; }
            100% { stroke-dashoffset: 0; opacity: 0.15; }
          }
          .grid-pattern {
            animation: grid-move 8s linear infinite; /* Slowed down for elegance */
          }
          .sketch-line {
            stroke-dasharray: 1000;
            animation: line-draw 12s infinite alternate ease-in-out;
          }
        `}
			</style>

			{/* 1. Enhanced Technical Grid */}
			<svg width="100%" height="100%" className="grid-pattern">
				<defs>
					<pattern
						id="grid"
						width="40"
						height="40"
						patternUnits="userSpaceOnUse"
					>
						<path
							d="M 40 0 L 0 0 0 40"
							fill="none"
							stroke="rgba(56, 189, 248, 0.15)" // Neon Cyan hint
							strokeWidth="1"
						/>
					</pattern>
				</defs>
				<rect width="100%" height="100%" fill="url(#grid)" />
			</svg>

			{/* 2. Sketchy Technical Elements */}
			<svg
				viewBox="0 0 800 800"
				width="100%"
				height="100%"
				preserveAspectRatio="xMidYMax slice"
				style={{ position: 'absolute', top: 0, left: 0 }}
			>
				<g
					transform="translate(600, 50)"
					fill="none"
					stroke="#38bdf8" // Brighter stroke
					strokeWidth="1.5"
				>
					<circle cx="100" cy="100" r="80" className="sketch-line" />
					<path
						d="M 20 100 L 180 100 M 100 20 L 100 180"
						className="sketch-line"
						strokeDasharray="4,4"
					/>
				</g>
			</svg>
		</div>
	);
};

export default TechnicalBackground;
