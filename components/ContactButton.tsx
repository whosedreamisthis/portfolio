'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Copy, Mail } from 'lucide-react';

export function ContactButton() {
	const [copied, setCopied] = useState(false);
	const email = 'whosedreamisthis@gmail.com';

	const handleContact = () => {
		// 1. Try to open the email app
		window.location.href = `mailto:${email}`;

		// 2. Also copy to clipboard just in case their app doesn't open
		navigator.clipboard.writeText(email);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<Button
			variant="outline"
			onClick={handleContact}
			className="border-2 border-slate-200 dark:border-slate-700 font-mono transition-all"
		>
			{copied ? (
				<Check className="mr-2 h-4 w-4 text-green-500" />
			) : (
				<Mail className="mr-2 h-4 w-4" />
			)}
			{copied ? 'Copied to Clipboard' : 'Connect via Email'}
		</Button>
	);
}
