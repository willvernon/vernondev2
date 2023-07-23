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
import linen from '@public/projects/linen.png'

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
					Custom Linen Website - <br /> IN PROGRESS OF REDESIGN
				</h1>
				<div className="w-[100%] h-[25rem] relative">
					<div className="absolute top-0 left-0 w-[100%] h-[25rem] rounded-[2rem] " />
					<Image
						className="absolute z-[-10]"
						layout="fill"
						objectFit="cover"
						src={linen}
						alt="/"
					/>
				</div>
			</div>
		</>
	)
}
