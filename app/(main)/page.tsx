'use client'
import Image from 'next/image'

import avatar from '@public/static/avatar.png'
import dc from '@public/static/dc-logo.png'
import Badge from '@components/Badge'
import ArrowIcon from '@components/icons/ArrowIcon'
import CardLink from '@components/CardLink'
import BigText from '@components/BigText'
import PostCard from '@components/PostCard'

import bblgx from '@public/projects/bblgx.png'
import linen from '@public/projects/linen.png'
import demo from '@public/projects/Demo.png'
import NHASH from '@public/projects/NHASH.png'
import sneakerx from '@public/projects/Sneakerx.png'
import dennys from '@public/projects/dennys/hero.png'

import { motion } from 'framer-motion'
import { Suspense } from 'react'

export default async function Page() {
	return (
		<section>
			<BigText slides={["I'm Will", 'Digital Craftsman']} />
			<div className="flex gap-6 flex-wrap justify-center md:flex-row mt-12">
				<PostCard
					title="What are the best security practices for a very online future."
					slug="/"
					gradient="from-[#feb4c8] to-[#818CF8]"
					image={bblgx}
				/>
				<PostCard
					title="Working smarter not harder, a Productivity Stack for creating the Second Brain."
					slug="/"
					gradient="from-[#946ee7] via-[#3B82F6] to-[#33aaea]"
					image={linen}
				/>
				<PostCard
					title="Working with implementing CMS like Sanity inside of React & Next.JS."
					slug="/"
					gradient="from-[#8afdea] via-[#FCA5A5] to-[#FECACA]"
					image={demo}
				/>
				<PostCard
					title="Working with implementing CMS like Sanity inside of React & Next.JS."
					slug="/"
					gradient="from-[#8afdea] via-[#FCA5A5] to-[#FECACA]"
					image={NHASH}
				/>
				<PostCard
					title="What are the best security practices for a very online future."
					slug="/"
					gradient="from-[#feb4c8] to-[#818CF8]"
					image={sneakerx}
				/>
				<PostCard
					title="Working smarter not harder, a Productivity Stack for creating the Second Brain."
					slug="/"
					gradient="from-[#946ee7] via-[#3B82F6] to-[#33aaea]"
					image={dennys}
				/>
			</div>
			<div className="columns-2 sm:columns-3 gap-4 my-8">
				<div className="relative h-40 mb-4 border-blue-500 border ">
					test 1
				</div>
				<div className="relative h-80 mb-4 sm:mb-0 border-solid border-blue-500 border">
					test 2
				</div>
				<div className="relative h-40 sm:h-80 sm:mb-4 border-solid border-blue-500 border">
					test 3
				</div>
				<div className="relative h-40 mb-4 sm:mb-0 border-solid border-blue-500 border">
					test 4
				</div>
				<div className="relative h-40 mb-4 border-solid border-blue-500 border">
					test 5
				</div>
				<div className="relative h-80 border-solid border-blue-500 border">
					test 6
				</div>
			</div>
			<div className="prose prose-neutral dark:prose-invert border-solid border-blue-500 border">
				<p className="prose prose-neutral dark:prose-invert ">
					{`I'm a frontend developer, i enjoy solving problems and building things. I currently
        work with web sites and desktop and mobile applications. `}
					<span className="not-prose">
						<Badge href="https://vercel.com">
							<svg
								width="13"
								height="11"
								viewBox="0 0 13 11"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="inline-flex mr-1"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M6.5 0L13 11H0L6.5 0Z"
									fill="currentColor"
								/>
							</svg>
							Vercel
						</Badge>
					</span>
					{`, is where I live demo most of my projects.  `}
					<Badge href="https://digitalcraftsmen.dev">
						<Image
							alt="DC Logo"
							src={dc}
							height={24}
							width={24}
							sizes="100"
							className="border border-neutral-200 dark:border-neutral-700 rounded-full"
						/>
						Digital Craftsmen
					</Badge>
					{`  Is my side project llc, where I build and maintain websites and applications for small businesses and personal projects.`}
				</p>
			</div>
			<div className="border-solid border-blue-500 border my-8 flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 w-full"></div>
			<div className="prose prose-neutral dark:prose-invert border-solid border-blue-500 border">
				<p>Text Block 2</p>
			</div>
			<div className="my-8 flex flex-col space-y-4 w-full">
				<Suspense>
					<CardLink name="CardLink One" href="/" />
					<CardLink name="CardLink Two" href="/" />
					<CardLink name="CardLink Three" href="/" />
				</Suspense>
			</div>

			<div className="prose prose-neutral dark:prose-invert border-solid border-blue-500 border">
				<p>Footer Text Here</p>
			</div>
			<ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
				<li>
					<a
						className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
						rel="noopener noreferrer"
						target="_blank"
						href="/"
					>
						<ArrowIcon />
						<p className="h-7 ml-2">follow me on twitter</p>
					</a>
				</li>
				<li>
					<a
						className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
						rel="noopener noreferrer"
						target="_blank"
						href="/"
					>
						<ArrowIcon />
						<p className="h-7 ml-2">get email updates</p>
					</a>
				</li>
			</ul>
		</section>
	)
}
