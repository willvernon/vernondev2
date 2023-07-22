import '../global.css'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

import Navbar from '@components/navbar'
import BackArrow from '@components/icons/BackArrow'

export const metadata: Metadata = {
	metadataBase: new URL('https://vernondev.com/'),
	title: {
		default: 'Will Vernon',
		template: '%s | Will Vernon',
	},
	description: 'Digital Craftsman',
	openGraph: {
		title: 'Will Vernon',
		description: 'Digital Craftsman',
		url: 'https://vernondev.com',
		siteName: 'Will Vernon',
		locale: 'en-US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
	},
}

export default function UsesLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<html lang="en" className={clsx('text-white bg-[#181818] ')}>
				<body className="antialiased max-w-5xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
					<main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
						<Navbar />

						{children}
						<Analytics />
					</main>
				</body>
			</html>
		</>
	)
}
