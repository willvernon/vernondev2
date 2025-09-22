'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect } from 'react'
import BackArrow from '@components/icons/BackArrow'

import pageone from '@public/static/draft_success.png'
import pagetwo from '@public/static/draft_success2.png'

// import { BsFillXSquareFill } from 'react-icons';

export default function Genie() {
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
			<div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-6 w-full space-y-10">
				<h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-white">
					Draft Success Report
				</h1>
				<p className="text-xl text-white ">
          This was a school data mining project as i start to work with bringing ML and Data Mining together and trying to experiment with different methods and pipelines. I wanted to create a project with a topic that i find interesting and we were tasked with making a professional project to use on a resume. 
					<br/>
					<br/>

		One of the most incredible things that the NFL puts on is its Big Data Bowl in collaboration with Kaggle, where technically inclined fans of the sport and university students compete on various topics decided at the beginning of each season which was a significant influence on this project idea.
        </p>

				<div className="w-full h-[60rem] relative ">
					<div className="absolute top-0 left-0 w-[100%]  " />
					<Image
						className="absolute z-[-10] rounded-3xl"
						layout="fill"
						objectFit="cover"
						src={pageone}
						alt="/"
					/>
				</div>
				<div className="w-full h-[60rem] relative ">
					<div className="absolute top-0 left-0 w-[100%]  " />
					<Image
						className="absolute z-[-10] rounded-3xl"
						layout="fill"
						objectFit="cover"
						src={pagetwo}
						alt="/"
					/>
				</div>
			</div>
		</>
	)
}
