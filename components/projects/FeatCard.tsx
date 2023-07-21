'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
// import useSWR from 'swr'
import cn from '@lib/classNames'

export default function PostCard({ title, vercel, gradient, image, name, github, link }) {
	return (
		<div
		
			className={cn(
				'transform hover:scale-[1.01] transition-all',
				'rounded-xl w-full md:w-1/4 bg-gradient-to-r p-1',
				gradient
			)}
		>
			<div
				
				className="flex flex-col justify-between h-full bg-[#181818] rounded-lg p-4"
			>
				<div className="flex flex-col items-center justify-between">
					{/* <h3 className="text-lg font-black md:text-lg w-full text-gray-100 tracking-tight">
						{title}
					</h3>
					<br /> */}
					<Image
						alt="Project Picture"
						src={image}
						sizes="100"
						priority
						className=" w-full rounded-2xl "
					/>
					<br />
				</div>
				<div className="flex flex-col text-center space-y-4 font-medium">
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.9 }}
						transition={{
							type: 'spring',
							stiffness: 400,
							damping: 10,
						}}
						className="h-7 mx-auto px-9 text-center flex items-center font-semibold rounded-full bg-[#dd351f] text-white"
					>
						<Link href={link}> {name} </Link>
					</motion.div>
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.9 }}
						transition={{
							type: 'spring',
							stiffness: 400,
							damping: 10,
						}}
						className="h-7 mx-auto px-10 flex items-center font-semibold rounded-full border text-center bg-slate-300 text-slate-700 "
					>
						<Link href={vercel}> Demo </Link>
					</motion.div>
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.9 }}
						transition={{
							type: 'spring',
							stiffness: 400,
							damping: 10,
						}}
						className="h-7 mx-auto px-9 flex items-center font-semibold rounded-full border text-center bg-slate-300 text-slate-700"
					>
						<Link href={github}> Github </Link>
					</motion.div>
				</div>
			</div>
		</div>
	)
}
