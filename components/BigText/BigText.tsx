'use client'
// https://github.com/delbaoliveira/website/blob/main/ui/challenge/TextSlider.tsx
import React from 'react';

import { useInterval } from 'react-use';
import Image from 'next/image';
import classNames from '@lib/classNames';
import avatar from '@public/static/avatar.png';


interface BigTextProps {
  slides: Array<string>;
}

export default function BigText({ slides }: BigTextProps) {
  const [currentSlide, setSlide] = React.useState(0);

  const totalSlides = slides.length;

  useInterval(() => {
    if (totalSlides - 1 === currentSlide) {
      setSlide(0);
    } else {
      setSlide(currentSlide + 1);
    }
  }, 3000);

  return (
		<div className="z-10 flex max-w-100  flex-col sm:flex-row  m-auto items-center text-6xl font-extrabold tracking-tight md:ml-8 sm:text-[5rem] lg:text-[5rem]">
			<div className="flex flex-col w-3/3 sm:w-2/3 txt-left">
				<h3 className="text-2xl tracking-normal sm:text-3xl">Welcome!</h3>
				{slides.map((text, index) => {
					return (
						<span key={text} className="relative block ">
							<span
								className={classNames(
									'absolute transition duration-1000',
									currentSlide !== index ? 'opacity-100' : 'opacity-0'
								)}
								aria-hidden={true}
							>
								{text}
							</span>

							<span
								className={classNames(
									'bg-gradient-to-r decoration-clone bg-clip-text text-transparent',
									index === 0
										? 'from-yellow-400 via-red-500 to-pink-500'
										: '',
									index === 1
										? 'from-purple-400 via-pink-500 to-red-500'
										: '',
									index === 2 ? 'from-green-400 to-blue-500' : ''
								)}
							>
								{text}
							</span>
						</span>
					)
				})}
				<h3 className="mt-4 text-base tracking-normal sm:text-lg md:text-md ">
					Developer, Sports Fan, Outdoorsman, and this is my portfolio. 🚀
				</h3>
				
			</div>
			<div className=" flex flex-col w-1/3 ">
        <div className="flex flex-col content-center lg:ml-20 lg:mb-40 ">
          <Image
						alt="Will Vernon"
						height={300}
						width={300}
						src={avatar}
						sizes="100"
						priority
						className="hidden sm:flex  "
					/>
				
					<p className="text-tertiary mb-12 text-sm font-medium tracking-normal ">
						
					</p>
					
				</div>
			</div>
		</div>
  )
}
