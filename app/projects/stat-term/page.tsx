'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect } from 'react'
import BackArrow from '@components/icons/BackArrow'

import pageone from '@public/projects/stat-term/hero.png'
import pagetwo from '@public/projects/stat-term/dashboard.png'

export default function StatTerm() {
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
				className="sticky z-100 top-0 left-0 right-0 h-2 bg-blue-500 transform-origin-right"
				style={{ scaleX }}
			/>
			<BackArrow />
			<div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-6 w-full space-y-10">
				<h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-white">
					Stat Term
				</h1>
				<p className="text-xl text-white ">
					Stat Term is a comprehensive sports analytics platform designed to provide detailed statistical analysis and insights for various sports. Built with modern terminal user interface, it offers a quick and cool way to get player stats and analytics.
					<br />
					<br />
					The platform features an intuitive dashboard that allows users to select a Pro League and
					explore player statistics, and
					historical data trends. With its clean, responsive design and
					powerful data processing capabilities, Stat Term serves as a
					valuable tool for sports enthusiasts, analysts, and
					professionals.
				</p>

				<div className="w-full h-full relative ">
					<div className="absolute top-0 left-0 w-[100%]  " />
					<Image
						className="absolute z-[-10] rounded-3xl"
						layout="fill"
						objectFit="cover"
						src={pageone}
						alt="Stat Term Hero Image"
					/>
				</div>
				<div className="w-full h-[70rem] relative ">
					<div className="absolute top-0 left-0 w-[100%]  " />
					<Image
						className="absolute z-[-10] rounded-3xl"
						layout="fill"
						objectFit="cover"
						src={pagetwo}
						alt="Stat Term Dashboard"
					/>
				</div>
			</div>
		</>
	)
}
