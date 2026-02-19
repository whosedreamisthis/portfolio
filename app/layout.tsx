import type { Metadata } from 'next';

import './globals.css';
import Providers from '@/components/Providers';
import TopNav from '@/components/TopNav';
import Background from '@/components/Background';

export const metadata: Metadata = {
	title: 'Portfolio',
	description: "Dana Sharon's portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const themeCode = `
    (function() {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
      }
    })()
  `;

	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<script dangerouslySetInnerHTML={{ __html: themeCode }} />
			</head>
			<body className="select-none">
				<Providers>
					<Background />
					<div className="relative z-10">
						<TopNav />
						<main>{children}</main>
					</div>
				</Providers>
			</body>
		</html>
	);
}
