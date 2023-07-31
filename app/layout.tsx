import './global.css'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

import localFont from 'next/font/local'
import Navbar from '@components/navbar'

// const graphik = localFont({
// 	src: [
// 		{
// 			path: '@public/fonts/Graphik-Regular.ttf',
// 			weight: '400',
// 			style: 'normal',
// 		},
// 		{
// 			path: '@public/fonts/Graphik-Medium.ttf',
// 			weight: '600',
// 			style: 'bold',
// 		},
// 	],
// 	variable: '--font-graphik',
// 	display: 'swap',
// })

export const metadata: Metadata = {
	metadataBase: new URL('https://vernondev.com'),
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
		// googleBot: {
		// 	index: true,
		// 	follow: true,
		// 	'max-video-preview': -1,
		// 	'max-image-preview': 'large',
		// 	'max-snippet': -1,
		// },
	},
	verification: {
		// google: '/',
		// yandex: '/',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang="en"
			className={clsx('text-white bg-[#181818] ', )}
		>
			<body className="antialiased max-w-5xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
				<main className="flex-auto min-w-0 mt-6 mx-6 flex flex-col px-2 md:px-0">
					<Navbar />
					{children}
					<Analytics />
				</main>
			</body>
		</html>
	)
}
