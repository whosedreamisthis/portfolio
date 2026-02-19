import React from 'react';
import ThemeButton from './ThemeButton';

export default function TopNav() {
	return (
		<nav className="flex w-full items-center p-4">
			<ThemeButton className="ml-auto" />
		</nav>
	);
}
