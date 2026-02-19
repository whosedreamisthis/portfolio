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
				backgroundColor: '#0F172A', // Deep Navy
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
            0% { stroke-dashoffset: 1000; opacity: 0; }
            50% { opacity: 0.5; }
            100% { stroke-dashoffset: 0; opacity: 0.2; }
          }
          .grid-pattern {
            animation: grid-move 4s linear infinite;
          }
          .sketch-line {
            stroke-dasharray: 1000;
            animation: line-draw 10s infinite alternate ease-in-out;
          }
        `}
			</style>

			{/* 1. Animated Technical Grid */}
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
							stroke="rgba(100, 116, 139, 0.2)"
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
				{/* Top Right "Blueprint" Corner */}
				<g
					transform="translate(600, 50)"
					fill="none"
					stroke="#64748B"
					strokeWidth="1.5"
				>
					<circle cx="100" cy="100" r="80" className="sketch-line" />
					<path
						d="M 20 100 L 180 100 M 100 20 L 100 180"
						className="sketch-line"
						strokeDasharray="5,5"
					/>
					<rect
						x="40"
						y="40"
						width="120"
						height="120"
						className="sketch-line"
					/>
				</g>

				{/* Bottom Left "Blueprint" Corner */}
				<g
					transform="translate(50, 600)"
					fill="none"
					stroke="#64748B"
					strokeWidth="1.5"
				>
					<path
						d="M 0 0 L 150 0 L 150 150 L 0 150 Z"
						className="sketch-line"
					/>
					<path
						d="M 0 0 L 150 150 M 150 0 L 0 150"
						className="sketch-line"
					/>
					<circle cx="75" cy="75" r="40" className="sketch-line" />
				</g>
			</svg>
		</div>
	);
};

export default TechnicalBackground;
