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
				backgroundColor: '#f1f5f9', // "Vellum" paper white
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
            0% { stroke-dashoffset: 1000; opacity: 0.1; }
            100% { stroke-dashoffset: 0; opacity: 0.5; }
          }
          .grid-light {
            animation: grid-scroll 10s linear infinite;
          }
          .sketch-line-light {
            stroke-dasharray: 1000;
            animation: draw-in 10s infinite alternate ease-in-out;
          }
        `}
			</style>

			{/* 1. Subtle Engineering Grid (Blueprint Blue) */}
			<svg width="100%" height="100%" className="grid-light">
				<defs>
					<pattern
						id="light-grid"
						width="40"
						height="40"
						patternUnits="userSpaceOnUse"
					>
						<path
							d="M 40 0 L 0 0 0 40"
							fill="none"
							stroke="#cbd5e1"
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
				<g
					transform="translate(620, 80)"
					fill="none"
					stroke="#64748b"
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
				</g>
			</svg>
		</div>
	);
};

export default TechLightBackground;
