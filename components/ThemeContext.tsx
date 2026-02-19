'use client';
import React, { useContext, createContext, useState, useEffect } from 'react';

type ThemeType = 'light' | 'dark';
type ThemeContextType = {
	theme: ThemeType;
	toggleTheme: () => void;
};
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default function ThemeProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [theme, setTheme] = useState<ThemeType>(() => {
		// 1. Check if we are in the browser (client-side)
		if (typeof window !== 'undefined') {
			const savedTheme = localStorage.getItem('theme') as ThemeType;

			// 2. Return saved theme, or fallback to 'light'
			return savedTheme || 'light';
		}

		// 3. Fallback for Server-Side Rendering
		return 'light';
	});
	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	useEffect(() => {
		const root = window.document.documentElement; // This is the <html> tag

		if (theme === 'dark') {
			root.classList.add('dark');
		} else {
			root.classList.remove('dark');
		}

		localStorage.setItem('theme', theme);
	}, [theme]);
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export const useTheme = () => {
	const context = useContext(ThemeContext);
	const [hydrated, setHydrated] = useState(false);

	useEffect(() => {
		setHydrated(true);
	}, []);

	if (!context) {
		throw new Error('useTheme requires ThemeProvider');
	}

	if (!hydrated) {
		return {
			theme: 'light',
			toggleTheme: () => {},
			isHydrated: false,
		};
	}

	return { ...context, isHydrated: true };
};
