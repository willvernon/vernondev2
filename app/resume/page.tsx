import React from 'react'
import Image from 'next/image'
import resume from '@public/static/Resume.png'


function Resume() {
	return (
		
			<div className="rounded-[2rem] m-16">
				<Image
					className=" m-auto"
					layout=""
					objectFit="cover"
					src={resume}
					alt="/"
				/>
			</div>
		
	)
}

export default Resume
