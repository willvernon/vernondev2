'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect } from 'react'

import cs from '@public/projects/sneakerx/sneakerx-cs-pt1.png'
import BackArrow from '@components/icons/BackArrow'

// import { BsFillXSquareFill } from 'react-icons';

export default function Project3() {
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
			<div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-6 w-full">
				<h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-white">
					SneakerX CaseStudy
				</h1>

				<div className="w-[50rem] h-[650rem] relative ">
					<div className="absolute top-0 left-0 w-[100%]  " />
					<Image
						className="absolute z-[-10] rounded-3xl"
						layout="fill"
						objectFit="cover"
						src={cs}
						alt="/"
					/>
				</div>
			</div>
		</>
	)
}
