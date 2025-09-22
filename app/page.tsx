'use client'
import Image from 'next/image'

import ArrowIcon from '@components/icons/ArrowIcon'
import BigText from '@components/BigText'
import PostCard from '@components/PostCard'

import bblgx from '@public/projects/bblgx.png'
import linen from '@public/projects/linen.png'
import demo from '@public/projects/Demo.png'
import NHASH from '@public/projects/NHASH.png'
import sneakerx from '@public/projects/Sneakerx.png'
import dennys from '@public/projects/dennys/hero.png'
import genie from '@public/projects/genie-ai/Genie-AI.png'
import statTerm from '@public/projects/stat-term/hero.png'

import { motion } from 'framer-motion'
import { Suspense } from 'react'

export default async function Page() {
	return (
		<section>
			<BigText slides={["I'm Will", 'Digital Craftsman']} />

			<div className="flex gap-6 flex-wrap justify-center md:flex-row mt-12">
				<PostCard
					title="Modern TUI for sports stats"
					gradient="from-[#fcd0db] to-[#1E40AF]"
					image={statTerm}
					vercel="/projects/stat-term"
				/>
				<PostCard
					title="A full set of AI models setup for all in access to multiple tools and functions in one place."
					vercel="/projects/genie"
					gradient="from-[#946ee7] via-[#3B82F6] to-[#33aaea]"
					image={genie}
				/>
				<PostCard
					title="This is a mobile app design for a sneaker marketplace."
					vercel="/projects/sneakerx"
					gradient="from-[#818CF8] to-[#f07b45]"
					image={sneakerx}
				/>
				{/* <PostCard
					title="This is a mobile app built for internal use for document and data management."
					slug="/"
					gradient="from-[#8afdea] via-[#FCA5A5] to-[#FECACA]"
					image={demo}
				/>
				<PostCard
					title="My first internship project building a well organized dashboard to view your bitcoin miner statistics."
					slug="/"
					gradient="from-[#8afdea] via-[#FCA5A5] to-[#FECACA]"
					image={NHASH}
				/>

				<PostCard
					title="This is a marina dealership website with inventory, showrooms, and contact forms."
					slug="/"
					gradient="from-[#946ee7] via-[#3B82F6] to-[#33aaea]"
					image={dennys}
				/> */}
			</div>

			<div className="border-solid border-slate-600 border my-8 flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 w-full"></div>
			<div className="prose prose-neutral mt-12 dark:prose-invert mx-auto"></div>
			{/*<div className="prose prose-neutral dark:prose-invert">
				<h3>Here are my links</h3>
			</div>
			 <div className="my-8 mx-auto flex flex-col space-y-4 w-1/2">
				<Suspense>
					<CardLink
						name="LinkedIn"
						href="https://www.linkedin.com/in/wmvernon"
					/>
					<CardLink name="GitHub" href="https://github.com/willvernon" />
					<CardLink
						name="My Person SoloDev: Digital Craftsmen LLC"
						href="https://www.digitalcraftsmen.dev"
					/>
				</Suspense>
			</div> */}

			{/* <div className="prose prose-neutral dark:prose-invert border-solid border-blue-500 border">
				<p>Footer Text Here</p>
			</div> */}
			<ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300 justify-center">
				<li>
					<a
						className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
						rel="noopener noreferrer"
						target="_blank"
						href="https://www.linkedin.com/in/wmvernon"
					>
						<ArrowIcon />
						<p className="h-7 ml-2">LinkedIn Profile</p>
					</a>
				</li>
				<li>
					<a
						className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
						rel="noopener noreferrer"
						target="_blank"
						href="https://github.com/willvernon"
					>
						<ArrowIcon />
						<p className="h-7 ml-2">GitHub</p>
					</a>
				</li>
				{/* <li> */}
				{/* 	<a */}
				{/* 		className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all" */}
				{/* 		rel="noopener noreferrer" */}
				{/* 		target="_blank" */}
				{/* 		href="https://www.digitalcraftsmen.dev" */}
				{/* 	> */}
				{/* 		<ArrowIcon /> */}
				{/* 		<p className="h-7 ml-2">Digital Craftsmen LLC</p> */}
				{/* 	</a> */}
				{/* </li> */}
			</ul>
		</section>
	)
}
