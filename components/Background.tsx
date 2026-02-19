'use client';
import React from 'react';
import { useTheme } from './ThemeContext';
import TechnicalBackground from './TechnicalBackground';
import TechLightBackground from './TechLightBackground';
export default function Background() {
	const { theme } = useTheme();
	return (
		<div>
			{theme === 'light' ? (
				<TechLightBackground />
			) : (
				<TechnicalBackground />
			)}
		</div>
	);
}
