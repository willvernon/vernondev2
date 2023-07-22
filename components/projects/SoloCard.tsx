'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

// function NavItem({ href, text }) {
//   const router = useRouter();
//   const isActive = router.asPath === href;

//   return (
//     <Link href={href}>
//       <span className="capsize">{text}</span>
//     </Link>
//   );
// }

export default function SoloCard({ header, link, tools, image }) {
	return (
		<Link
			href={link}
			className="py-3 px-5 w-full h-full my-2 mx-auto bg-[#3131313b]  flex items-center space-x-10 shadow-lg shadow-[0_15px_30px_-10px_rgba(255, 255, 255, 0)] rounded-2xl"
		>
			<motion.div
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.99 }}
				transition={{
					type: 'spring',
					stiffness: 600,
					damping: 5,
				}}
				className="flex items-center space-x-12 mx-auto  rounded-2xl"
			>
				<div className="pr-[0rem] pl-3">
					<div className="text-xl flex items-center font-medium text-white">
						<p> {header} </p>
						{/* <svg
							className="h-4 w-4 ml-1"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
							/>
						</svg> */}
					</div>
					<p className="text-slate-400 text-xs">{tools}</p>
				</div>
				<div className="shrink-0">
					<Image
						className=" md:w-[10rem] w-[6rem] rounded-xl"
						layout=""
						objectFit="cover"
						src={image}
						alt="/"
					/>
				</div>
			</motion.div>
		</Link>
	)
}
