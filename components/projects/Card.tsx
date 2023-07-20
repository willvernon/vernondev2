'use client'
import { useRouter } from 'next/router'
import Link from 'next/link'
// import cn from 'classames'
import Image from 'next/image'

// function NavItem({ href, text }) {
//   const router = useRouter();
//   const isActive = router.asPath === href;

//   return (
//     <Link href={href}>
//       <span className="capsize">{text}</span>
//     </Link>
//   );
// }

export default function MetricCard({
	header,
	link,
	tools,
	image,
	name,
	github,
}) {
	return (
		<div className="font-mono flex bg-white hover:shadow-xl shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)] rounded-2xl">
			<form className="flex-auto p-6">
				<div className="pl-2 mb-3 h-2/3">
					<h2 className="text-black font-black text-lg">{header}</h2>
					<p className="text-slate-700 font-thin text-sm">{tools}</p>
				</div>
				<div className="flex space-x-4 font-medium">
					<div className="flex-row flex space-x-5 items-center">
						<div className="h-7 px-3 flex items-center font-semibold rounded-full bg-[#dd351f] text-white">
							<Link href={link}> {name} </Link>
						</div>
						<div className="h-7 px-3 flex items-center font-semibold rounded-full border text-center bg-slate-300 text-slate-700">
							<Link href={github}> Github </Link>
						</div>
					</div>
				</div>
			</form>
			<div className="flex-none w-[5rem] relative">
				<Image
					src={image}
					alt=""
					className="absolute inset-0 w-full h-full object-cover rounded-lg"
					loading="lazy"
				/>
			</div>
		</div>
	)
}
