import React from 'react';
interface Props {
	className?: string;
}
const TechLightBackground = ({ className }: Props) => {
	return (
		<div
			style={{
				position: 'fixed',
				inset: 0,
				zIndex: -1,
				backgroundColor: '#F8FAFC', // Soft White/Slate background
				overflow: 'hidden',
			}}
			className={`${className}`}
		>
			<style>
				{`
          @keyframes grid-scroll {
            0% { transform: translateY(0); }
            100% { transform: translateY(40px); }
          }
          @keyframes draw-in {
            0% { stroke-dashoffset: 1000; opacity: 0; }
            100% { stroke-dashoffset: 0; opacity: 0.4; }
          }
          .grid-light {
            animation: grid-scroll 6s linear infinite;
          }
          .sketch-line-light {
            stroke-dasharray: 1000;
            animation: draw-in 8s infinite alternate ease-in-out;
          }
        `}
			</style>

			{/* 1. Subtle Engineering Grid (Soft Blue/Grey) */}
			<svg width="100%" height="100%" className="grid-light">
				<defs>
					<pattern
						id="light-grid"
						width="40"
						height="40"
						patternUnits="userSpaceOnUse"
					>
						{/* The "Graph Paper" look */}
						<path
							d="M 40 0 L 0 0 0 40"
							fill="none"
							stroke="#E2E8F0"
							strokeWidth="1"
						/>
					</pattern>
				</defs>
				<rect width="100%" height="100%" fill="url(#light-grid)" />
			</svg>

			{/* 2. Architectural Blueprint Elements */}
			<svg
				viewBox="0 0 800 800"
				width="100%"
				height="100%"
				preserveAspectRatio="xMidYMax slice"
				style={{ position: 'absolute', top: 0, left: 0 }}
			>
				{/* Top Right Corner - Technical Compass/Circle */}
				<g
					transform="translate(620, 80)"
					fill="none"
					stroke="#94A3B8"
					strokeWidth="1"
				>
					<circle
						cx="50"
						cy="50"
						r="40"
						className="sketch-line-light"
					/>
					<path
						d="M 10 50 L 90 50 M 50 10 L 50 90"
						className="sketch-line-light"
						strokeDasharray="2,2"
					/>
					<path
						d="M 0 0 L 100 100"
						className="sketch-line-light"
						opacity="0.2"
					/>
				</g>

				{/* Bottom Left Corner - Coordinate System */}
				<g
					transform="translate(80, 650)"
					fill="none"
					stroke="#94A3B8"
					strokeWidth="1"
				>
					<path
						d="M 0 100 L 0 0 L 100 0"
						className="sketch-line-light"
					/>
					<path
						d="M 0 20 L 5 20 M 0 40 L 5 40 M 0 60 L 5 60 M 0 80 L 5 80"
						stroke="#CBD5E1"
					/>
					<path
						d="M 20 0 L 20 5 M 40 0 L 40 5 M 60 0 L 60 5 M 80 0 L 80 5"
						stroke="#CBD5E1"
					/>
				</g>
			</svg>
		</div>
	);
};

export default TechLightBackground;
