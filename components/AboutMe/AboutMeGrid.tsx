import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Ticker from 'react-ticker'
import { useRef } from 'react'

import MeMoji from '@public/static/aboutme/MeMoji-Mac.png'
import Computer from '@public/static/computer.png'
import resume from '@public/static/Resume.png'
import Rocky from '@public/static/Rocky.png'
import DC from '@public/static/dc-Logo.png'
// import resume from '@public/static/Resume.png'

function AboutMeGrid() {
	return (
		<div className="grid grid-flow-col max-w-xl m-auto grid-glow-rows md:grid-cols-8 md:grid-rows-3 max-md:hidden max-h-[35rem] w-full h-full bg-[#171717] rounded-2xl">
			{/* About Me Box */}
			<div className="row-start-1 row-span-2 col-start-1 col-span-4 m-1 rounded-xl  text-center">
				<div className="w-auto md:h-[55%] mt-32   text-center">
					{' '}
					<h3 className="text-[#e64c33] text-center pt-4 font-black text-6xl italic tracking-widest font-sans">
						About Me
					</h3>
				</div>
				<div className=" text-white font-bold text-center ">
					{/* <Ticker direction="toRight">
            {({ index }) => (
              <>
                <h1>Digital Craftsman, ,</h1>
                
              </>
            )}
          </Ticker> */}
					<p className="text-sm">Digital Craftsman & Sports Fan </p>
				</div>
			</div>
			{/* Computer Image Box */}
			<div className="row-start-1 row-span-1 col-start-5 col-span-2 m-1 rounded-xl bg-transparent h-20 w-25 text-center">
				<Image
					src={Computer}
					alt="Box 7"
					width="200"
					className="rounded-xl opacity-80 ml-3"
				/>
			</div>
			{/* Mobile Mini Nav */}
			<div className="row-start-1 row-span-1 col-start-7 col-span-2 m-1 rounded-xl bg-transparent h-25 w-25 text-center">
				<ul className="flex flex-col absolute py-10">
					<li
						className="text-gray-100 text-sm font-semibold pl-3"
						style={{ transitionDelay: '175ms' }}
					>
						<Link href="/resume" className="flex w-auto pb-4">
							Resume
						</Link>
					</li>
					<li
						className="text-gray-100 text-sm font-semibold pl-3"
						style={{ transitionDelay: '200ms' }}
					>
						<Link href="" className="flex w-auto pb-4">
							My Gear
						</Link>
					</li>
					<li
						className="text-gray-100 text-sm font-semibold pl-3"
						style={{ transitionDelay: '250ms' }}
					>
						<Link href="/projects" className="flex w-auto pb-4">
							Projects
						</Link>
					</li>
					<li
						className="text-gray-100 text-sm font-semibold pl-3"
						style={{ transitionDelay: '150ms' }}
					>
						<Link href="/contact" className="flex w-auto pb-4">
							Contact Me
						</Link>
					</li>
				</ul>
			</div>
			{/* Tilted Blocks My Projects */}
			<div className="row-start-2 row-span-1 col-start-5 col-span-2 m-1 rounded-xl bg-transparent h-25 w-25 text-center">
				<div className="w-auto h-14 bg-orange-400 rounded-xl text-left pl-3 pt-3 font-mono text-xs text-slate-700 font-black">
					<Link
						href="/projects"
						className="flex items-center mt-1 text-slate-800  rounded-lg hover:text-gray-800  transition-all h-6"
					>
						<>
							{'My'}
							<br />
							{'Projects'}
							<div className="ml-7 mt-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									className="h-6 w-6 ml-1"
								>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
									/>
								</svg>
							</div>
						</>
					</Link>
				</div>
				<div className="w-auto h-14 bg-white rounded-xl rotate-12 -translate-x-2 shadow-sm shadow-black text-center">
					{' '}
					<p className="text-slate-500 font-mono text-center pt-4 font-black text-lg tracking-widest">
						VernonDev
					</p>
				</div>
			</div>
			{/* Box 5 */}
			<div className="row-start-2 row-span-1 col-start-7 col-span-2 m-1 rounded-xl bg-white h-25 w-15 text-center">
				<Image
					src={Rocky}
					alt="Box 7"
					width={150}
					className="ml-auto rounded-xl h-full object-center py- grayscale"
				/>
			</div>
			{/* Box 6 */}
			<div className="row-start-3 row-span-1 col-start-1 col-span-2 m-1 rounded-3xl bg-transparent h-25 w-25 text-center">
				<Image
					src={DC}
					alt="Box 7"
					height={200}
					width={200}
					className="m-auto h-full object-center py-5 rounded-full"
				/>
			</div>
			{/* MeMoji Green */}
			<div className="row-start-3 row-span-1 col-start-3 col-span-2 m-1 rounded-xl bg-gradient-to-r from-slate-600 to-slate-800 h-25 w-25 text-center">
				<Image
					src={MeMoji}
					alt="Box 7"
					height={200}
					width={200}
					className="m-auto h-full object-center py-5"
				/>
			</div>
			{/* Box 8 */}
			<div className="row-start-3 row-span-1 col-start-5 col-span-4 m-1 rounded-xl bg-white h-25 w-25 text-left">
				<div className="flex text-black m-3 ml-10">
					<ul className="">
						<h2 className="text-lg pb-2">Links</h2>
						{/* <li>
                Twitter: <a href="https://twitter.com/">@---</a>
              </li> */}
						<li className="py-1">
							GitHub:{' '}
							<a href="https://github.com/willvernon">@willvernon</a>
						</li>
						<li className="py-1">
							Website:{' '}
							<Link href="https://vernondev.com">vernondev.com</Link>
						</li>
						<li className="py-1">
							LinkedIn:{' '}
							<a href="https://www.linkedin.com/in/wmvernon/">
								/wmvernon
							</a>
						</li>
						<li className="py-1">
							ENS:{' '}
							<a href="https://app.ens.domains/name/vernondev.eth/details">
								Vernnondev.eth
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default AboutMeGrid
