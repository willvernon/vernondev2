'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
// import useSWR from 'swr'
import cn from '@lib/classNames'

export default function PostCard({ vercel, title, gradient, image }) {
	return (
		<Link
			href={vercel}
			// target="_blank"
			className={cn(
				'transform hover:scale-[1.01] transition-all',
				'rounded-xl w-full md:w-1/4 bg-gradient-to-r p-1',
				gradient
			)}
		>
			<motion.div
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.9 }}
				transition={{ type: 'spring', stiffness: 400, damping: 10 }}
				className="flex flex-col justify-between h-full bg-[#181818] rounded-lg p-4"
			>
				<div className="flex flex-col-reverse items-center justify-between">
					<h3 className="text-lg font-black md:text-lg w-full text-gray-100  tracking-tight">
						{title}
					</h3>
					<br />
					<Image
						alt="Project Picture"
						src={image}
						sizes="100"
						priority
						className=" w-3/4 rounded-2xl "
					/>
				</div>
				<div className="flex mt-2 items-center text-gray-200 capsize">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
						/>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
						/>
					</svg>
					<span className="ml-2 align-baseline text-xs">
						{' '}
						Featured
					</span>
				</div>
			</motion.div>
		</Link>
	)
}
