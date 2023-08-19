'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect } from 'react'
import BackArrow from '@components/icons/BackArrow'

import landing from '@public/projects/genie-ai/ga-landing.png'
import dashboard from '@public/projects/genie-ai/ga-dashboard.png'
import convo from '@public/projects/genie-ai/ga-convo.png'
import code from '@public/projects/genie-ai/ga-code.png'
import video from '@public/projects/genie-ai/ga-video.png'

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
					Genie AI Studio
				</h1>
				<p className="text-xl text-white text-center">
          This was a personal project as i start to work with bringing ML and LLMs to the web and trying to experiment with different models from GPT-2 to Llama and gfpgan. I wanted to create a place where you can have access to all of these models and tools in one place. Making it easy to use and understand for people of all levels.
        </p>

				<div className="w-full h-[60rem] relative ">
					<div className="absolute top-0 left-0 w-[100%]  " />
					<Image
						className="absolute z-[-10] rounded-3xl"
						layout="fill"
						objectFit="cover"
						src={landing}
						alt="/"
					/>
				</div>
				<div className="w-full h-[40rem] relative ">
					<div className="absolute top-0 left-0 w-[100%]  " />
					<Image
						className="absolute z-[-10] rounded-3xl"
						layout="fill"
						objectFit="cover"
						src={dashboard}
						alt="/"
					/>
				</div>
				<div className="w-full h-[50rem] relative ">
					<div className="absolute top-0 left-0 w-[100%]  " />
					<Image
						className="absolute z-[-10] rounded-3xl"
						layout="fill"
						objectFit="cover"
						src={convo}
						alt="/"
					/>
				</div>
				<div className="w-full h-[40rem] relative ">
					<div className="absolute top-0 left-0 w-[100%]  " />
					<Image
						className="absolute z-[-10] rounded-3xl"
						layout="fill"
						objectFit="cover"
						src={code}
						alt="/"
					/>
				</div>
				<div className="w-full h-[50rem] relative ">
					<div className="absolute top-0 left-0 w-[100%]  " />
					<Image
						className="absolute z-[-10] rounded-3xl"
						layout="fill"
						objectFit="cover"
						src={video}
						alt="/"
					/>
				</div>
			</div>
		</>
	)
}
