import type { Metadata } from 'next'
import './globals.css'
import { ChildProps } from '@/types'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'sonner'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
	title: 'My Protfolio',
	description: 'My Personal Portfolio',
}

export default function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body suppressHydrationWarning>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<Toaster position='top-center' />
					{children}
					<Analytics />
				</ThemeProvider>
			</body>
		</html>
	)
}
