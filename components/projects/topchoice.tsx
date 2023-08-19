'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
// import useSWR from 'swr'
import cn from '@lib/classNames'

export default function TopChoice({ gradient, image, link, vercel }) {
	return (
		<div
			className={cn(
				'transform hover:scale-[1.01] transition-all',
				'rounded-xl w-1/2 bg-gradient-to-r p-1',
				gradient
			)}
		>
			<div className="flex flex-col justify-between h-full bg-[#181818] rounded-lg p-4">
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
						className=" w-2/3 rounded-2xl "
					/>
					<br />
				</div>
				<div className="flex flex-col text-center space-y-4 font-medium ">
					<Link href={link} className="">
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.9 }}
							transition={{
								type: 'spring',
								stiffness: 400,
								damping: 10,
							}}
							className="h-7 w-full text-center flex items-center font-semibold rounded-full bg-[#dd351f] text-white"
						>
							<p className="text-center mx-auto">Details</p>
						</motion.div>
					</Link>
					<Link href={vercel}>
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.9 }}
							transition={{
								type: 'spring',
								stiffness: 400,
								damping: 10,
							}}
							className="h-7 w-full text-center flex items-center font-semibold rounded-full bg-white text-black"
						>
							<p className="text-center mx-auto">Live Site</p>
						</motion.div>
					</Link>
					{/* <Link href={github}>
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.9 }}
							transition={{
								type: 'spring',
								stiffness: 400,
								damping: 10,
							}}
							className="h-7 w-full text-center flex items-center font-semibold rounded-full bg-white text-black"
						>
							<p className="text-center mx-auto">Github</p>
						</motion.div>
					</Link> */}
				</div>
			</div>
		</div>
	)
}
