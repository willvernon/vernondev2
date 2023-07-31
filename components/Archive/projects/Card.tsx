// 'use client'
// import { useRouter } from 'next/router'
// import Link from 'next/link'
// // import cn from 'classames'
// import Image from 'next/image'
// import { motion } from 'framer-motion'

// // function NavItem({ href, text }) {
// //   const router = useRouter();
// //   const isActive = router.asPath === href;

// //   return (
// //     <Link href={href}>
// //       <span className="capsize">{text}</span>
// //     </Link>
// //   );
// // }

// export default function MetricCard({
// 	header,
// 	link,
// 	tools,
// 	image,
// 	name,
// 	github,
// 	vercel,
// }) {
// 	return (
// 		<div className="font-mono flex bg-white hover:shadow-xl shadow-[0_15px_30px_-10px_rgba(255, 255, 255, 0.3)] rounded-2xl">
// 			<div className="flex flex-wrap mx-4 my-5">
// 				<div className=" w-[5rem] relative ">
// 					<Image
// 						src={image}
// 						alt=""
// 						className="absolute inset-0 w-full h-4/5 object-cover rounded-lg"
// 						loading="eager"
// 					/>
// 				</div>
// 				<div className="pl-2 mb-3 h-2/3">
// 					<h2 className="text-black font-black text-lg">{header}</h2>
// 					<p className="text-slate-700 font-thin text-sm">{tools}</p>
// 				</div>
// 				<div className="flex flex-row  space-x-4 font-medium">
// 					<motion.div
// 						whileHover={{ scale: 1.05 }}
// 						whileTap={{ scale: 0.9 }}
// 						transition={{
// 							type: 'spring',
// 							stiffness: 400,
// 							damping: 10,
// 						}}
// 						className="h-7 px-3 flex items-center font-semibold rounded-full bg-[#dd351f] text-white"
// 					>
// 						<Link href={link}> {name} </Link>
// 					</motion.div>
// 					<motion.div
// 						whileHover={{ scale: 1.05 }}
// 						whileTap={{ scale: 0.9 }}
// 						transition={{
// 							type: 'spring',
// 							stiffness: 400,
// 							damping: 10,
// 						}}
// 						className="h-7 px-3 flex items-center font-semibold rounded-full border text-center bg-slate-300 text-slate-700"
// 					>
// 						<Link href={vercel}> Demo </Link>
// 					</motion.div>
// 					<motion.div
// 						whileHover={{ scale: 1.05 }}
// 						whileTap={{ scale: 0.9 }}
// 						transition={{
// 							type: 'spring',
// 							stiffness: 400,
// 							damping: 10,
// 						}}
// 						className="h-7 px-3 flex items-center font-semibold rounded-full border text-center bg-slate-300 text-slate-700"
// 					>
// 						<Link href={github}> Github </Link>
// 					</motion.div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }
