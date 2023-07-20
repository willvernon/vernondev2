'use client'
import Link from 'next/link'
import Image from 'next/image'

import cs from '@public/projects/sneakerx/sneakerx-cs-pt1.png'

// import { BsFillXSquareFill } from 'react-icons';

export default function Project3() {
	return (
		<div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-6 w-full">
			<h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-white">
				SneakerX CaseStudy
			</h1>

			<div className="w-[50rem] h-[650rem] relative ">
				<div className="absolute top-0 left-0 w-[100%]  " />
				<Image
					className="absolute z-1 rounded-3xl"
					layout="fill"
					objectFit="cover"
					src={cs}
					alt="/"
				/>
			</div>
		</div>
	)
}
