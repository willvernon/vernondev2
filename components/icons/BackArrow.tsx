'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

function BackArrow() {
	return (
		<Link href="/projects" className="sticky z-100 top-6 left-6 right-0 pl-6 ">
			<motion.div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="1em"
               viewBox="0 0 448 512"
               fill='white'
				>
					<path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
				</svg>
			</motion.div>
		</Link>
	)
}

export default BackArrow
