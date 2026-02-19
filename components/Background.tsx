'use client';
import React from 'react';
import { useTheme } from './ThemeContext';
import TechnicalBackground from './TechnicalBackground';
import TechLightBackground from './TechLightBackground';
export default function Background() {
	const { theme } = useTheme();
	return (
		<div>
			{/* Show Sun ONLY in light mode (hidden when .dark is present) */}
			<TechLightBackground className="dark:hidden block" />

			{/* Show Moon ONLY in dark mode (hidden by default, block when .dark is present) */}
			<TechnicalBackground className="hidden dark:block" />
		</div>
	);
}
