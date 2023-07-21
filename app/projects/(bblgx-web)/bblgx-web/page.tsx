'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect } from 'react'

import sketch from '@public/projects/bblgx-website/bblgx-website-sketch.png'
import mock from '@public/projects/bblgx-website/bblgx-w-mock.png'
import bblgx from '@public/projects/bblgx.png'
import fmock from '@public/projects/bblgx-website/mock-final.png'
import BackArrow from '@components/icons/BackArrow'

// import { BsFillXSquareFill } from 'react-icons';

export default function LgxWebsite() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	const { scrollYProgress } = useScroll()
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	})
	return (
		<>
			<motion.div
				className="sticky z-100 top-0 left-0 right-0 h-2 bg-red-500 transform-origin-right"
				style={{ scaleX }}
			/>
			<BackArrow />
			<div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-4 w-full">
				<h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-white">
					Logistics Website
				</h1>
				<div className="w-[100%] h-[25rem] relative">
					<div className="absolute top-0 left-0 w-[100%] h-[25rem] rounded-[2rem] " />
					<Image
						className="absolute z-[-10]"
						layout="fill"
						objectFit="cover"
						src={bblgx}
						alt="/"
					/>
				</div>
				<div className="my-8 prose dark:prose-dark leading-relaxed">
					<div className="flex">
						<ul>
							<h2 className="text-[#e64c33]">Tools Used</h2>
							<li>
								React: <a href="https://reactjs.org/">Check it Out!</a>
							</li>
							<li>
								TailwindCSS:{' '}
								<a href="https://tailwindcss.com">Take a Look</a>
							</li>
							<li>
								Website: <Link href="https://bblgx.com">bblgx.com</Link>
							</li>
						</ul>
					</div>
					<h1 className="text-[#e64c33]">Bio</h1>
					<h2>Job Title</h2>
					<p>Developer & Designer Contractor---</p>
					<div className="text-center max-w-screen-lg">
						<div className="grid grid-cols-2 ">
							<div className="mx-auto my-4">
								<ul>
									<h2>Category</h2>
									<p>Web Design</p>
									<p>Front-End Developer</p>
								</ul>
							</div>
							<div className="mx-auto my-4 ">
								<ul>
									<h2>Role</h2>
									<p>UX Design & Development</p>
									<p></p>
								</ul>
							</div>

							<div className="mx-auto my-4">
								<ul>
									<h2>Challenge</h2>
									<p>
										To digitally improve the company&apos;s image to
										potential clients.
									</p>
								</ul>
							</div>
							<div className="mx-auto my-4">
								<ul>
									<h2>Category</h2>
									<p>1. Discovery</p>
									<p>2. Solution</p>
									<p>3. Iteration</p>
								</ul>
							</div>
						</div>
					</div>
					<h1 className="text-[#e64c33] my-4 ">Discovery Phase</h1>
					<h3 className="my-4">Quantitative Research</h3>
					<p className="my-4">
						Given the private aspect of the company&apos;s dealings and
						their clients the amount of information available for the
						research aspect is low and suppose to appeal to a very niche
						group of individuals looking for private logistics.
					</p>
					<div className="grid grid-cols-2 gap-12 my-4">
						<div>
							<h3>✅ Positives</h3>
							<p>
								{' '}
								- Creative freedom and a simple straight forward design
							</p>
						</div>
						<div>
							<h3>❌ Negatives</h3>
							<p>
								- Having to create a very informative and appealing
								webpage without using or giving any critical
								information.
							</p>
						</div>
					</div>
					<h3 className="my-4">Problem Statement</h3>
					<p>
						👉🏼 We have observed that the organization needed a way to give
						clients something to show their professionalism and giving the
						client information without giving too much information…
					</p>
					<h3 className="mt-4 font-bold">Definition</h3>
					<p>Recommendations from contractors and the CEO</p>
					<h3 className="mt-4 font-bold">Recommendations</h3>
					<li>Design a visually appealing webpage for marketing</li>{' '}
					<li>Share some small tidbits about who the company is</li>{' '}
					<li>
						Try to show the professionalism and experience the company has
					</li>
					<br />
					<h1 className="text-[#e64c33] font-bold mt-4">Solution Phase</h1>
					<h2 className="mt-4 font-bold">Ideation</h2>
					<p>
						After receiving my recommendations i started sketching the
						mockup and wireframe of what a professional web page looks
						like while trying to keep it engaging.
					</p>
					<h2 className="mt-4 font-bold">Sketches & Paper Prototypes</h2>
					<p>
						With the first round of usability tests completed using the
						paper prototype, I moved on to creating refined wireframes &
						user flows with annotated wireframes.
					</p>
					<div className="grid grid-cols-2 gap-8">
						<div className="">
							<Image
								alt="Sketch"
								width={400}
								quality={100}
								src={sketch}
								className="rounded-md z-[-10]"
							/>
						</div>
						<div className="">
							<Image
								alt="Mock"
								width={400}
								quality={100}
								src={mock}
								className="rounded-md z-[-10]"
							/>
						</div>
					</div>
					<h2 className="mt-4 font-bold">Wireframes & User Flows</h2>
					<div className="w-[100%] h-[150rem] relative">
						<div className="absolute top-0 left-0 w-[100%] h-[25rem] " />
						<Image
							className="absolute z-[-10] rounded-3xl"
							layout="fill"
							objectFit="cover"
							src={fmock}
							alt="/"
						/>
					</div>
					<h2 className="mt-6 font-bold">Prototype</h2>
					<p>
						I built a clickable prototype, with Figma and started testing
						out features and with some of the team.
					</p>
					<br />
					<h1 className="text-[#e64c33]">Iteration Phase</h1>
					<h2 className="mt-4 font-bold">Testing</h2>
					<li>Fixing usability issues</li>
					<li>Clean and displays information in a professional manor</li>
					<li>Keeping the information readable and digestible</li>
					<br />
					<h2 className="mt-4 font-bold">Iterations</h2>
					<p>Simplifying to allow consistent information and usability.</p>
					<br />
					<h1 className="text-[#e64c33]"> Summary </h1>
					<h2 className="mt-4 font-bold">👎 Limitations</h2>
					<p>
						Keeping the information vague but informative with minimal
						detail​​​​​​​
					</p>
					<h2 className="mt-4 font-bold">👍 Value</h2>
					<p>
						So why build website with little information, being able to
						have a front facing presence is very important to clients to
						show your professionalism and it is possible to do that
						without having to disclose too much information.
					</p>
				</div>
			</div>
		</>
	)
}
