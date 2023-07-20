'use client'
import useSWR from 'swr'
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
				github="https://github.com/willvernon/BigBisonLogistics"
				name="Details"
				tools="Built w/ Nextjs, React, & Tailwind"
				image={bblgx}
			/>
			<MetricCard
				header="Inner Management App"
				link="/projects/bblgx"
				github="https://github.com/willvernon"
				name="Details"
				tools="Built w/ Swift & Figma"
				image={demo}
			/>
			<MetricCard
				header="SneakerX"
				link="/projects/sneakerx"
				github="https://github.com/willvernon/Sneakerx"
				name="Details"
				tools="Built w/ HTML, CSS, & Figma"
				image={sneakerx}
			/>
			<MetricCard
				header="Scientia"
				link="/projects/scientia"
				github="https://github.com/willvernon"
				name="Details"
				tools="Built w/ ReactNative"
				image={scientia}
			/>
		</div>
	)
}
