'use client';
import React, { useEffect } from 'react';
import { Button } from './ui/button';
import { useTheme } from './ThemeContext';
import { Sun, Moon } from 'lucide-react';

interface ThemeButtonProps {
	className?: string;
}

export default function ThemeButton({ className }: ThemeButtonProps) {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button
			className={`flex ${className} hover:bg-gray-700 dark:text-black dark:bg-white  dark:hover:bg-gray-300`}
			onClick={toggleTheme}
		>
			{theme === 'light' ? <Moon /> : <Sun />}
		</Button>
	);
}
