'use client'
// import useSWR from 'swr'
import MetricCard from '@components/projects/Card'

import demo from '@public/projects/Demo.png'
import bblgx from '@public/projects/bblgx.png'
import sneakerx from '@public/projects/Sneakerx.png'
import scientia from '@public/projects/scientia.png'
import linen from '@public/projects/linen.png'

export default function ProjectsCard() {
	const link = '..'

	return (
		<div className="grid gap-4 lg:grid-cols-2 grid-cols-1 text-black my-2 w-full">
			<MetricCard
				header="Logistics Website"
				link="/projects/bblgx-web"
				vercel="https://big-bison-logistics.vercel.app/"
				github="https://github.com/willvernon/BigBisonLogistics"
				name="Details"
				tools="Nextjs & Tailwind"
				image={bblgx}
			/>
			<MetricCard
				header="Management App"
				link="/projects/bblgx"
				vercel="http://digitalcraftsmen.dev/"
				github="https://github.com/willvernon"
				name="Details"
				tools="Swift & Figma"
				image={demo}
			/>
			<MetricCard
				header="SneakerX"
				link="/projects/sneakerx"
				vercel="https://sneakerx-three.vercel.app/"
				github="https://github.com/willvernon/Sneakerx"
				name="Details"
				tools="HTML, CSS, & Figma"
				image={sneakerx}
			/>
			<MetricCard
				header="Custom Linen"
				link="/projects/linen"
				vercel="https://custon-linen.vercel.app/"
				github="https://github.com/willvernon"
				name="Details"
				tools="ReactNative"
				image={linen}
			/>
		</div>
	)
}
